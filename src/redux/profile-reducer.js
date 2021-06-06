import {usersAPI} from "../api/api";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';

let initialState = {
    postText: '',
    posts: [
        {id: 1, name: 'Я в Канаде', text: 'Это было лучшее время в моей жизни', likes: 23},
        {id: 2, name: '23.34', text: '26 лет в застенках', likes: 200},
    ],
    profile: null
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_NEW_POST_TEXT:
            return {
                ...state,
                postText: action.newText
            };
        case ADD_POST: {
            let text = state.postText;
            let newPost = {
                id: 5,
                name: 'Я в Беларуси',
                text: text,
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
        default:
            return state;
    }
};

export const updateNewPostText = (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text});
export const addPost = () => ({type: ADD_POST});
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile});

export const setProfile = (userId) => (dispatch) => {
    usersAPI.getProfile(userId)
        .then(data => {
            dispatch(setUserProfile(data));
        });
}

export default profileReducer;