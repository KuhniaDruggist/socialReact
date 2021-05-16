let initialState = {
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

const navbarReducer = (state = initialState, action) => {
    return state;
};

export default navbarReducer;