import React from 'react';
import Background from './Background/Background';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => {
    return (
        <div>
            <Background />
            <ProfileInfo />
            <MyPosts posts = { props.state.posts }
                     postText = {props.state.postText}
                     addPost={props.addPost}
                     updateNewPostText={props.updateNewPostText}/>
        </div>
    );
}

export default Profile;