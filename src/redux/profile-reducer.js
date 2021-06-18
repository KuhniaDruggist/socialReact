import {profileAPI, usersAPI} from "../api/api";

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_USER_STATUS = 'SET_USER_STATUS';

let initialState = {
    posts: [
        {id: 1, name: 'Я в Канаде', text: 'Это было лучшее время в моей жизни', likes: 23},
        {id: 2, name: '23.34', text: '26 лет в застенках', likes: 200},
    ],
    profile: null,
    status: ""
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 5,
                name: action.data.newPostTitle,
                text: action.data.newPostText,
                likes: 0
            }
            return {
                ...state,
                postText: '',
                posts: [...state.posts, newPost]
            };
        }
        case SET_USER_PROFILE: {
            return {...state, profile: action.profile}
        }
        case SET_USER_STATUS: {
            return {...state, status: action.status}
        }
        default:
            return state;
    }
};

export const addPost = (newPostTitle, newPostText) => ({type: ADD_POST, data: {newPostTitle, newPostText}});
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile});
export const setUserStatus = (status) => ({type: SET_USER_STATUS, status});

export const getUserProfile = (userId) => (dispatch) => {
    usersAPI.getProfile(userId)
        .then(response => {
            dispatch(setUserProfile(response.data));
        });
}

export const getUserStatus = (userId) => (dispatch) => {
    profileAPI.getUserStatus(userId)
        .then(response => {
            dispatch(setUserStatus(response.data));
        });
}

export const updateUserStatus = (status) => (dispatch) => {
    profileAPI.updateUserStatus(status)
        .then(response => {
            if(response.data.resultCode === 0) {
                dispatch(setUserStatus(status));
            }
        });
}

export default profileReducer;