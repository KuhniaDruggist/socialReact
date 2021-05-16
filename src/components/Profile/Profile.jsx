import React from 'react';
import Background from './Background/Background';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPostsContainer from "./MyPosts/MyPostsContainer";

const Profile = (props) => {
    return (
        <div>
            <Background />
            <ProfileInfo />
            <MyPostsContainer store={ props.store } />
        </div>
    );
}

export default Profile;