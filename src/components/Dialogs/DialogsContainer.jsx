import React from "react";
import Dialogs from "./Dialogs";
import {addNewMessage, updateNewMessageText} from "../../redux/messages-reducer";

const DialogsContainer = (props) => {
    let state = props.store.getState();

    let addMessage = () => {
        let action = addNewMessage();
        props.store.dispatch(action);
    }

    let addChange = (text) => {
        let action = updateNewMessageText(text);
        props.store.dispatch(action);
    }

    return (
        <Dialogs addMessage={addMessage}
                 addChange={addChange}
                 dialogs={state.messagesPage.dialogs}
                 messages={state.messagesPage.messages}
                 messageText={state.messagesPage.messageText}/>
    );
};

export default DialogsContainer;