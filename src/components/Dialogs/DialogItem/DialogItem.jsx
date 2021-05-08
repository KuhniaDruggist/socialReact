import React from "react";
import s from './../Dialogs.module.css';
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    let path = "/dialogs/" + props.id;

    return (
        <li className={s.dialog}>
            <NavLink to={path} className={s.link} activeClassName={s.active}>
                <div className={s.userAvatar}>
                    <img alt="Аватар пользователя" src={props.photo}/>
                </div>
                {props.name}
            </NavLink>
        </li>
    );
}

export default DialogItem;