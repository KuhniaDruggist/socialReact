import React from 'react';
import s from './Logo.module.css';

const Logo = () => {
    return (
        <div className={s.wrapper}>
            <img className={s.logo} src="https://image.freepik.com/free-vector/golden-crown-logo-vector_20448-274.jpg" alt="Логотип соц сети" />
            <p className={s.name}>Crown</p>
        </div>
    );
}

export default Logo;