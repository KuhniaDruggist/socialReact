import React from 'react';
import s from './Background.module.css';

const Background = () => {
    return (
        <div className={s.background}>
            <img alt="Фон профайла" src="https://images.wallpaperscraft.ru/image/tekstura_fon_tekst_simvoly_50473_1920x1080.jpg" />
        </div>
    );
}

export default Background;