import React from "react";
import Dialogs from "./Dialogs";
import {addNewMessageAC, updateNewMessageTextAC} from "../../redux/messages-reducer";
import {connect} from "react-redux";
import {withAuthRedirect} from "../hoc/withAuthRedirect";
import {compose} from "redux";

let mapStateToProps = (state) => {
    return {
        dialogs: state.messagesPage.dialogs,
        messages: state.messagesPage.messages,
        messageText: state.messagesPage.messageText
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

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Dialogs);