const ADD_NEW_MESSAGE = 'ADD-NEW-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

let initialState = {
    dialogs: [
        {
            id: 1,
            name: 'Alex',
            photo: 'https://i.pinimg.com/736x/52/cc/bc/52ccbc8cc85e151b590476e1a815a96d.jpg'
        },
        {
            id: 2,
            name: 'Ivan',
            photo: 'https://image.freepik.com/free-vector/bearded-man-avatar-man-vector-portrait_9385-36.jpg'},
        {
            id: 3,
            name: 'Stepan',
            photo: 'https://i.pinimg.com/originals/e4/55/d2/e455d2e6e205c8eeeda1356a00cc6bfb.jpg'
        },
        {
            id: 4,
            name: 'Timur',
            photo: 'https://i.pinimg.com/736x/20/32/a4/2032a47119136960e25dd8e1dd2c39a5.jpg'
        },
    ],
    messageText: '',
    messages: [
        {id: 1, text: 'Hi, Alex'},
        {id: 2, text: 'How are you, my friend?'},
        {id: 3, text: 'Me too!!!!'},
    ]
}

const messagesReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_NEW_MESSAGE:
            let newMessage = {
                id: 4,
                text: state.messageText
            }
            state.messages.push(newMessage);
            state.messageText = '';
            return state;

        case UPDATE_NEW_MESSAGE_TEXT:
            state.messageText = action.newText;
            return state;

        default:
            return state;
    }
};
export const addNewMessage = () => ({ type: ADD_NEW_MESSAGE});
export const updateNewMessageText = (text) => (
    { type: UPDATE_NEW_MESSAGE_TEXT, newText: text });
export default messagesReducer;