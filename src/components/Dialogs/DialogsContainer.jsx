import React from "react";
import Dialogs from "./Dialogs";
import {addNewMessageAC, updateNewMessageTextAC} from "../../redux/messages-reducer";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
        dialogs: state.messagesPage.dialogs,
        messages: state.messagesPage.messages,
        messageText: state.messagesPage.messageText,
        isAuth: state.auth.isAuth
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        addMessage: () => {
            dispatch(addNewMessageAC());
        },
        addChange: (text) => {
            dispatch(updateNewMessageTextAC(text));
        }
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;