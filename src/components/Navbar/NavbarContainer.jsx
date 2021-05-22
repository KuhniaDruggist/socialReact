import React from 'react';
import Navbar from "./Navbar";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
        bestFriends: state.navbar.bestFriends
    }
}

const NavbarContainer = connect(mapStateToProps)(Navbar);

export default NavbarContainer;