import React from "react";
import s from './../Dialogs.module.css';

const MessageItem = (props) => {
    return (
        <li className={s.message}>
            <div className={s.userAvatar}>
                <img alt="Аватар пользователя" src="https://i.pinimg.com/736x/52/cc/bc/52ccbc8cc85e151b590476e1a815a96d.jpg"/>
            </div>
            {props.text}
        </li>
    );
}

export default MessageItem;