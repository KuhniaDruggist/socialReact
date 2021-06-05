import React from 'react';
import './App.css';
import NavbarContainer from "./components/Navbar/NavbarContainer";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import {Route} from 'react-router-dom';
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";

const App = (props) => {
    return (
        <div className="app-wrapper">
            <HeaderContainer store={props.store}/>
            <NavbarContainer store={props.store} />
            <div className="app-wrapper-content">
                <Route path='/profile/:userId?' render={() => <ProfileContainer store={props.store} />} />
                <Route path='/dialogs' render={() => <DialogsContainer store={props.store} />} />
                <Route path='/users' render={() => <UsersContainer store={props.store} />} />
            </div>
        </div>
    );
}

export default App;
