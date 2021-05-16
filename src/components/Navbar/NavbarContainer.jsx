import React from 'react';
import Navbar from "./Navbar";

const NavbarContainer = (props) => {
    let state = props.store.getState();

    return (
        <Navbar bestFriends={state.navbar.bestFriends}/>
    );
}

export default NavbarContainer;