import React from 'react';
import {connect} from "react-redux";
import Users from "./Users";
import {requestUsers, follow, unfollow, setActivePage} from "../../redux/users-reducer";
import Preloader from "../common/Preloader/Preloader";
import {compose} from "redux";
import {
    getActivePageOfState,
    getFollowingInProgressOfState,
    getIsFetchingOfState,
    getPageSizeOfState,
    getTotalUsersCountOfState,
    getUsersOfState
} from "../../redux/users-selectors";

class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.getUsers(this.props.activePage, this.props.pageSize);
    }

    onPageChanged = (pageNumber) => {
        this.props.setActivePage(pageNumber);
        this.props.getUsers(pageNumber, this.props.pageSize);
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
                   activePage={this.props.activePage}
                   onPageChanged={this.onPageChanged} />
        < />
    }
}

let mapStateToProps = (state) => {
    return {
        users: getUsersOfState(state),
        pageSize: getPageSizeOfState(state),
        totalUsersCount: getTotalUsersCountOfState(state),
        activePage: getActivePageOfState(state),
        isFetching: getIsFetchingOfState(state),
        followingInProgress: getFollowingInProgressOfState(state)
    }
}

export default compose(
    connect(mapStateToProps, {getUsers: requestUsers, follow, unfollow, setActivePage})
)(UsersContainer);

