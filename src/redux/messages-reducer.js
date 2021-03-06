const ADD_NEW_MESSAGE = 'ADD-NEW-MESSAGE';

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
            photo: 'https://image.freepik.com/free-vector/bearded-man-avatar-man-vector-portrait_9385-36.jpg'
        },
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
    messages: [
        {id: 1, text: 'Hi, Alex'},
        {id: 2, text: 'How are you, my friend?'},
        {id: 3, text: 'Me too!!!!'},
    ]
}

const messagesReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_NEW_MESSAGE: {
            let text = action.newMessage;
            return {
                ...state,
                messageText: '',
                messages: [...state.messages, {id: 4, text: text}]
            };
        }
        default:
            return state;
    }
};

export const addNewMessageAC = (newMessage) => ({type: ADD_NEW_MESSAGE, newMessage});

export default messagesReducer;