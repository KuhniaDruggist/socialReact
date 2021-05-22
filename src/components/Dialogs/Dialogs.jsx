import React from "react";
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import MessageItem from "./MessageItem/MessageItem";

const Dialogs = (props) => {
    let dialogsElements = props.dialogs.map(dialog => <DialogItem name={ dialog.name } id={ dialog.id } photo={dialog.photo}/>);

    let messagesElements = props.messages.map(message => <MessageItem text={ message.text }/>);

    let newMessageElement = React.createRef();

    let onAddMessage = () => {
        props.addMessage();
    }

    let onAddChange = () => {
        let text = newMessageElement.current.value;
        props.addChange(text);
    }

    return (
        <div className={s.dialogs}>
            <ul className={s.dialogsList}>
                {dialogsElements}
            </ul>
            <div>
                <ul className={s.messagesList}>
                    {messagesElements}
                </ul>
                <div>
                    <textarea onChange={onAddChange}
                              ref={newMessageElement}
                              value={props.messageText}/>
                    <button onClick={onAddMessage}
                            type="button">Добавить</button>
                </div>
            </div>
        </div>
    );
}

export default Dialogs;