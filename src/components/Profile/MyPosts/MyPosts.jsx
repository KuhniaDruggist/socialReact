import React from 'react';
import Post from './Post/Post';
import s from './MyPosts.module.css';
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../utils/validators/validateForm";
import {Input, Textarea} from "../../common/customFields/CustomFields";

const maxLength15 = maxLengthCreator(15);
const maxLength100 = maxLengthCreator(100);

const MyPostForm = (props) => {
    return (
        <form className={s.form} onSubmit={props.handleSubmit}>
            <Field component={Input}
                   name='newPostTitle'
                   placeholder='Озаглавьте свой пост'
                   validate={[ required, maxLength15 ]} />

            <Field component={Textarea}
                   name='newPostText'
                   placeholder='Добавьте текст поста'
                   validate={[ required, maxLength100 ]} />
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
        <div>
            <h2>Здесь будут мои публикации</h2>
            <MyPostReduxForm onSubmit={addNewPost}/>
            <ul>
                {postsElements}
            </ul>
        </div>
    );
}

export default MyPosts;