import React from "react";
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import MessageItem from "./MessageItem/MessageItem";

const Dialogs = (props) => {

    let dialogsElements = props.state.dialogs.map(dialog => <DialogItem name={ dialog.name } id={ dialog.id } photo={dialog.photo}/>);

    let messagesElements = props.state.messages.map(message => <MessageItem text={ message.text }/>);

    let newMessageElement = React.createRef();

    let addMessage = () => {
        props.addNewMessage();
    }

    let addChange = () => {
        let text = newMessageElement.current.value;
        props.updateNewMessageText(text);
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
                    <textarea onChange={addChange}
                              ref={newMessageElement}
                              value={props.state.messageText}/>
                    <button onClick={addMessage}
                            type="button">Добавить</button>
                </div>
            </div>
        </div>
    );
}

export default Dialogs;