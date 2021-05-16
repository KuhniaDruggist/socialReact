import profileReducer from "./profile-reducer";
import messagesReducer from "./messages-reducer";
import navbarReducer from "./navbar-reducer";

let store = {
    _state: {
        profilePage: {
            postText: '',
            posts: [
                {id: 1, name: 'Я в Канаде', text: 'Это было лучшее время в моей жизни', likes: 23},
                {id: 2, name: '23.34', text: '26 лет в застенках', likes: 200},
            ]
        },
        messagesPage: {
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
        },
        navbar: {
            bestFriends: [
                {id: 1, name: 'Alex', photo: 'https://i.pinimg.com/736x/52/cc/bc/52ccbc8cc85e151b590476e1a815a96d.jpg'},
                {id: 2, name: 'Ivan', photo: 'https://image.freepik.com/free-vector/bearded-man-avatar-man-vector-portrait_9385-36.jpg'},
                {
                    id: 3,
                    name: 'Stepan',
                    photo: 'https://i.pinimg.com/originals/e4/55/d2/e455d2e6e205c8eeeda1356a00cc6bfb.jpg'
                }
            ]
        }
    },
    _subscriber() {
        alert('Упс, что-то пошло не так');
    },

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._subscriber = observer;
    },
    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.messagesPage = messagesReducer(this._state.messagesPage, action);
        this._state.navbar = navbarReducer(this._state.navbar, action);
        this._subscriber(this._state);
    }
}

export default store;