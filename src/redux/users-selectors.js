export const getUsersOfState = (state) => {
    return state.usersPage.users
}

export const getPageSizeOfState = (state) => {
    return state.usersPage.pageSize
}

export const getTotalUsersCountOfState = (state) => {
    return state.usersPage.totalUsersCount
}

export const getActivePageOfState = (state) => {
    return state.usersPage.activePage
}

export const getIsFetchingOfState = (state) => {
    return state.usersPage.isFetching
}

export const getFollowingInProgressOfState = (state) => {
    return state.usersPage.followingInProgress
}