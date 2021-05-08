import React from "react";
import s from './../BestFriends.module.css';
import {NavLink} from "react-router-dom";

const FriendItem = (props) => {
    let path = "/bestFriends/" + props.id;

    return (
        <li>
            <NavLink to={path} className={s.link} activeClassName={s.active}>
                <div className={s.userAvatar}>
                    <img alt="Аватар пользователя" src={props.photo}/>
                </div>
                {props.name}
            </NavLink>
        </li>
    );
}

export default FriendItem;