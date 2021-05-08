import React from 'react';
import s from './Post.module.css';

const Post = (props) => {
    return (
        <li className={s.post}>
            <img className={s.photo} alt="Аватар поста" src="https://image.freepik.com/free-vector/mans-head-avatar-vector_83738-354.jpg" />
            <h3 className={s.name}>{props.name}</h3>
            <p className={s.text}>{props.text}</p>
            <p className={s.likes}>likes: {props.likes}</p>
        </li>
    );
}

export default Post;