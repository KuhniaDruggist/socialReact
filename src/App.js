import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import NavbarContainer from "./components/Navbar/NavbarContainer";
import Profile from './components/Profile/Profile';
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import {Route} from 'react-router-dom';
import UsersContainer from "./components/Users/UsersContainer";

const App = (props) => {
    return (
        <div className="app-wrapper">
            <Header/>
            <NavbarContainer store={props.store} />
            <div className="app-wrapper-content">
                <Route path='/profile' render={() => <Profile store={props.store} />} />
                <Route path='/dialogs' render={() => <DialogsContainer store={props.store} />} />
                <Route path='/users' render={() => <UsersContainer store={props.store} />} />
            </div>
        </div>
    );
}

export default App;
