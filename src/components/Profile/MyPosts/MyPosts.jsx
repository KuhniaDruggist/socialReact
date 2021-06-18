import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import {Field, reduxForm} from "redux-form";

const MyPostForm = (props) => {
    return (
        <form className={s.form} onSubmit={props.handleSubmit}>
            <Field className={s.field} component='input' name='newPostTitle' placeholder='Озаглавьте свой пост'></Field>
            <Field className={s.field} component='textarea' name='newPostText' placeholder='Добавьте текст поста'/>
            <button className={s.button} type="submit">Добавить</button>
        </form>
    );
}

const MyPostReduxForm = reduxForm({form: 'myNewPost'})(MyPostForm)

const MyPosts = (props) => {
    let postsElements = props.posts.map(post => <Post name={post.name} text={post.text} likes={post.likes}/>);

    let addNewPost = (formData) => {
        props.addPost(formData);
    }

    return (
        <div className={s.wrapper}>
            <h2>Здесь будут мои публикации</h2>
            <MyPostReduxForm onSubmit={addNewPost}/>
            <ul className={s.posts}>
                {postsElements}
            </ul>
        </div>
    );
}

export default MyPosts;