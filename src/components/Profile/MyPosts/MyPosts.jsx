import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {
    let postsElements = props.posts.map( post => <Post name={post.name} text={post.text} likes={post.likes} />);

    let newPostElement = React.createRef();

    let onAddPost = () => {
        props.addPost();
    }

    let onAddChange = () => {
        let text = newPostElement.current.value;
        props.addChange(text);
    }

    return (
        <div className={s.wrapper}>
            <h2>Здесь будут мои публикации</h2>
            <div>
                <textarea onChange={onAddChange}
                          ref={newPostElement}
                          value={props.postText}/>
                <button onClick={onAddPost} type="button">Добавить</button>
            </div>
            <ul className={s.list}>
                {postsElements}
            </ul>
        </div>
    );
}

export default MyPosts;