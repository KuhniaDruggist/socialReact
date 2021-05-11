import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {

    let postsElements = props.posts.map( post => <Post name={post.name} text={post.text} likes={post.likes} />);

    let newPostElement = React.createRef();

    let addPost = () => {
        props.addPost();
    }

    let addChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text);
    }

    return (
        <div className={s.wrapper}>
            <h2>Здесь будут мои публикации</h2>
            <div>
                <textarea onChange={addChange}
                          ref={newPostElement}
                          value={props.postText}/>
                <button onClick={addPost} type="button">Добавить</button>
            </div>
            <ul className={s.list}>
                {postsElements}
            </ul>
        </div>
    );
}

export default MyPosts;