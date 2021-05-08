import React from 'react';
import s from './Search.module.css';

const Search = () => {
    return (
        <div className={s.search}>
            <label className={s.label} htmlFor="search">Поиск по странице</label>
            <input className={s.input} id="search" type="text" name="search" placeholder="Поиск по странице"/>
        </div>
    );
}

export default Search;