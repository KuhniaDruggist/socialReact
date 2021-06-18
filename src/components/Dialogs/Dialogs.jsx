import React from "react";
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import MessageItem from "./MessageItem/MessageItem";
import {Redirect} from 'react-router-dom';
import {Field, reduxForm} from "redux-form";

const DialogsForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field component='textarea' name='newMessage' placeholder='Добавьте сообщение'/>
            <button type="submit">Добавить</button>
        </form>
    );
}

const DialogsReduxForm = reduxForm({form: 'dialogsForm'})(DialogsForm);

const Dialogs = (props) => {
    let dialogsElements = props.dialogs.map(dialog => <DialogItem name={dialog.name} id={dialog.id}
                                                                  photo={dialog.photo}/>);

    let messagesElements = props.messages.map(message => <MessageItem text={message.text}/>);

    let addNewMessage = (formData) => {
        props.addMessage(formData.newMessage);
    }

    if (!props.isAuth) return <Redirect to={"/login"}/>

    return (
        <div className={s.dialogs}>
            <ul className={s.dialogsList}>
                {dialogsElements}
            </ul>
            <div>
                <ul className={s.messagesList}>
                    {messagesElements}
                </ul>
                <DialogsReduxForm onSubmit={addNewMessage}/>
            </div>
        </div>
    );
}

export default Dialogs;