import React from 'react';
import MyPosts from "./MyPosts";
import {addPost} from "../../../redux/profile-reducer";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
        posts: state.profilePage.posts
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        addPost: (postData) => {
            let {newPostTitle, newPostText} = postData;
            dispatch(addPost(newPostTitle, newPostText));
        }
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;