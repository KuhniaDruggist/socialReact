let state = {
    profilePage: {
        postText: '',
        posts: [
            {id: 1, name: 'Я в Канаде', text: 'Это было лучшее время в моей жизни', likes: 23},
            {id: 2, name: '23.34', text: '26 лет в застенках', likes: 200},
        ]
    },
    messagesPage: {
        dialogs: [
            {id: 1, name: 'Alex', photo: 'https://i.pinimg.com/736x/52/cc/bc/52ccbc8cc85e151b590476e1a815a96d.jpg'},
            {id: 2, name: 'Ivan', photo: 'https://publicdomainvectors.org/photos/Male-Avatar.png'},
            {id: 3, name: 'Stepan', photo: 'https://i.pinimg.com/originals/e4/55/d2/e455d2e6e205c8eeeda1356a00cc6bfb.jpg'},
            {id: 4, name: 'Timur', photo: 'https://i.pinimg.com/736x/20/32/a4/2032a47119136960e25dd8e1dd2c39a5.jpg'},
        ],
        messageText: '',
        messages: [
            {id: 1, text: 'Hi, Alex'},
            {id: 2, text: 'How are you, my friend?'},
            {id: 3, text: 'Me too!!!!'},
        ]
    },
    navbar: {
        bestFriends: [
            {id: 1, name: 'Alex', photo: 'https://i.pinimg.com/736x/52/cc/bc/52ccbc8cc85e151b590476e1a815a96d.jpg'},
            {id: 2, name: 'Ivan', photo: 'https://publicdomainvectors.org/photos/Male-Avatar.png'},
            {id: 3, name: 'Stepan', photo: 'https://i.pinimg.com/originals/e4/55/d2/e455d2e6e205c8eeeda1356a00cc6bfb.jpg'}
        ]
    }
};

let renderEntireTree = () => {
    alert('Упс, что-то пошло не так');
};

export const subscribe = (observer) => {
    renderEntireTree = observer;
}

export const addPost = () => {
    let newPost = {
        id: 5,
        name: 'Я в Беларуси',
        text: state.profilePage.postText,
        likes: 0
    };

    state.profilePage.posts.push(newPost);
    state.profilePage.postText = '';
    renderEntireTree(state);
};

export const updateNewPostText = (newText) => {
    state.profilePage.postText = newText;
    renderEntireTree(state);
};

export const addNewMessage = () => {
    let newMessage = {
      id: 4,
      text: state.messagesPage.messageText
    };

    state.messagesPage.messages.push(newMessage);
    state.messagesPage.messageText = '';
    renderEntireTree(state);
}

export const updateNewMessageText = (newText) => {
    state.messagesPage.messageText = newText;
    renderEntireTree(state);
};

export default state;