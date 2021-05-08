import React from 'react';
import s from './BestFriends.module.css';
import FriendItem from "./FriendItem/FriendItem";

const BestFriends = (props) => {
    let friendsElements = props.friensd.map(friend => <FriendItem name={ friend.name } id={ friend.id } photo={friend.photo}/>)

    return (
        <div className={s.wrapper}>
            <h3 className={s.title}>Best Friends</h3>
            <ul className={s.friendsList}>
                <li className={s.friend}>
                    {friendsElements}
                </li>
            </ul>
        </div>
    );
}

export default BestFriends;