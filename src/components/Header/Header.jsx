import React from 'react';
import s from './Header.module.css';
import Logo from './Logo/Logo';
import Search from './Search/Search'
import {NavLink} from "react-router-dom";

const Header = () => {
    return (
        <header className={s.header}>
          <Logo />
          <Search />
            
            <button type="button">Уведомления</button>
            <button type="button">Музыка</button>

            <ul className="user-navigation">
              <li>
                <NavLink className="login-link" to="/login">Вход</NavLink>
              </li>
            </ul>
        </header>
    );
}

export default Header;