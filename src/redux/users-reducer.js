import {usersAPI} from "../api/api";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const SET_FETCHING = 'SET_FETCHING';
const SET_FOLLOWING_IN_PROGRESS = 'SET_FOLLOWING_IN_PROGRESS';

let initialState = {
    users: [],
    pageSize: 3,
    totalUsersCount: 0,
    activePage: 1,
    isFetching: false,
    followingInProgress: [2, 3, 4]
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW: {
            return {
                ...state,
                users: state.users.map(user => {
                    if (user.id === action.userId) {
                        return {...user, followed: true}
                    }
                    return user;
                })
            }
        }
        case UNFOLLOW: {
            return {
                ...state,
                users: state.users.map(user => {
                    if (user.id === action.userId) {
                        return {...user, followed: false}
                    }
                    return user;
                })
            }
        }
        case SET_USERS: {
            return {...state, users: action.users}
        }
        case SET_CURRENT_PAGE: {
            return {...state, activePage: action.activePage}
        }
        case SET_TOTAL_USERS_COUNT: {
            return {...state, totalUsersCount: action.totalUsersCount}
        }
        case SET_FETCHING: {
            return {...state, isFetching: action.isFetching}
        }
        case SET_FOLLOWING_IN_PROGRESS: {
            return {
                ...state,
                followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id != action.userId)
            }
        }
        default:
            return state;
    }
};

export const followSuccess = (userId) => ({type: FOLLOW, userId});
export const unfollowSuccess = (userId) => ({type: UNFOLLOW, userId});
export const setUsers = (users) => ({type: SET_USERS, users});
export const setActivePage = (activePage) => ({type: SET_CURRENT_PAGE, activePage});
export const setTotalUsersCount = (totalUsersCount) => ({type: SET_TOTAL_USERS_COUNT, totalUsersCount});
export const setFetching = (isFetching) => ({type: SET_FETCHING, isFetching});
export const toggleFollowingProgress = (isFetching, userId) => ({type: SET_FOLLOWING_IN_PROGRESS, isFetching, userId});

export const requestUsers = (activePage, pageSize) => (dispatch) => {
    dispatch(setFetching(true));
    usersAPI.getUsers(activePage, pageSize)
        .then(response => {
            dispatch(setUsers(response.data.items));
            dispatch(setTotalUsersCount(response.data.totalCount));
            dispatch(setFetching(false));
        });
}
export const follow = (userId) => (dispatch) => {
    dispatch(toggleFollowingProgress(true, userId));
    usersAPI.createFollow(userId)
        .then(response => {
            if(response.data.resultCode === 0) {
                dispatch(followSuccess(userId))
            }
            dispatch(toggleFollowingProgress(false, userId));
        });
}
export const unfollow = (userId) => (dispatch) => {
    dispatch(toggleFollowingProgress(true, userId));
    usersAPI.deleteFollow(userId)
        .then(response => {
            if(response.data.resultCode === 0) {
                dispatch(unfollowSuccess(userId))
            }
            dispatch(toggleFollowingProgress(false, userId));
        });
}
export default usersReducer;