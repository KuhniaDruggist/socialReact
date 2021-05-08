import React from 'react';
import Background from './Background/Background';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => {
    return (
        <div>
            <Background />
            <ProfileInfo />
            <MyPosts posts = { props.state.posts } addPost={props.addPost}/>
        </div>
    );
}

export default Profile;