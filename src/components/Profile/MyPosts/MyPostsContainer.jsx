import React from 'react';
import MyPosts from "./MyPosts";
import {addPostActionCreator, updateNewPostText} from "../../../redux/profile-reducer";

const MyPostsContainer = (props) => {
    let state = props.store.getState();

    let addPost = () => {
        let action = addPostActionCreator();
        props.store.dispatch(action);
    }

    let addChange = (text) => {
        let action = updateNewPostText(text);
        props.store.dispatch(action);
    }

    return (<MyPosts addPost={addPost}
                     addChange={addChange}
                     posts={state.profilePage.posts}
                     postText={state.profilePage.postText} />
    );
}

export default MyPostsContainer;