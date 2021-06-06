import React from 'react';
import {connect} from "react-redux";
import Users from "./Users";
import {
    follow,
    setUsers,
    unfollow,
    setActivePage,
    setTotalUsersCount,
    setFetching,
    setFollowingInProgress
} from "../../redux/users-reducer";
import Preloader from "../common/Preloader/Preloader";
import {usersAPI} from "../../api/api";

class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.setFetching(true);
        usersAPI.getUsers(this.props.activePage, this.props.pageSize)
            .then(data => {
                this.props.setUsers(data.items);
                this.props.setTotalUsersCount(data.totalCount);
                this.props.setFetching(false);
            }
        )
    }

    onPageChanged = (pageNumber) => {
        this.props.setFetching(true);
        this.props.setActivePage(pageNumber);
        usersAPI.getUsers(pageNumber, this.props.pageSize).then(data => {
                this.props.setUsers(data.items);
                this.props.setFetching(false);
            }
        )
    }

    render() {
        return <>
            {this.props.isFetching ? <Preloader/> : null}
            <Users totalUsersCount={this.props.totalUsersCount}
                   pageSize={this.props.pageSize}
                   users={this.props.users}
                   follow={this.props.follow}
                   unfollow={this.props.unfollow}
                   followingInProgress={this.props.followingInProgress}
                   setFollowingInProgress={this.props.setFollowingInProgress}
                   activePage={this.props.activePage}
                   onPageChanged={this.onPageChanged}/>
        < />
    }
}

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        activePage: state.usersPage.activePage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress
    }
}

export default connect(mapStateToProps,
    {follow, unfollow, setUsers, setActivePage, setTotalUsersCount, setFetching, setFollowingInProgress})(UsersContainer);
