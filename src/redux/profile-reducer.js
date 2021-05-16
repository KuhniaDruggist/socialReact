const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
    postText: '',
    posts: [
        {id: 1, name: 'Я в Канаде', text: 'Это было лучшее время в моей жизни', likes: 23},
        {id: 2, name: '23.34', text: '26 лет в застенках', likes: 200},
    ]
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 5,
                name: 'Я в Беларуси',
                text: state.postText,
                likes: 0
            }
            state.posts.push(newPost);
            state.postText = '';
            return state;

        case UPDATE_NEW_POST_TEXT:
            state.postText = action.newText;
            return state;

        default:
            return state;
    }
};
export const addPostActionCreator = () => ({ type: ADD_POST });
export const updateNewPostText = (text) => (
    { type: UPDATE_NEW_POST_TEXT, newText: text });
export default profileReducer;