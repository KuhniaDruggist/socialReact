import React from 'react';
import s from './Navbar.module.css';
import {NavLink} from "react-router-dom";
import BestFriends from "./BestFriends/BestFriends";

const Navbar = (props) => {
    return (
        <div className={s.wrapper}>
            <nav className={s.nav}>
                <ul className={s.list}>
                    <li className={s.item}>
                        <NavLink to="/profile" activeClassName={s.active}>Моя страница</NavLink>
                    </li>
                    <li className={s.item}>
                        <NavLink to="/news" activeClassName={s.active}>Новости</NavLink>
                    </li>
                    <li className={s.item}>
                        <NavLink to="/dialogs" activeClassName={s.active}>Мессенджер</NavLink>
                    </li>
                    <li className={s.item}>
                        <NavLink to="/friends" activeClassName={s.active}>Друзья</NavLink>
                    </li>
                    <li className={s.item}>
                        <NavLink to="/community" activeClassName={s.active}>Сообщества</NavLink>
                    </li>
                    <li className={s.item}>
                        <NavLink to="/photos" activeClassName={s.active}>Фотографии</NavLink>
                    </li>
                    <li className={s.item}>
                        <NavLink to="/music" activeClassName={s.active}>Музыка</NavLink>
                    </li>
                </ul>
            </nav>

            <BestFriends friensd={props.state.bestFriends}/>
        </div>
    );
}

export default Navbar;