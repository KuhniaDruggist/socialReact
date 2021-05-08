import React from 'react';
import s from './ProfileInfo.module.css';

const ProfileInfo = () => {
    return (
        <div className={s.info}>
            <div className={s.userPhoto}>
                <div>
                    <img className={s.photo} alt="Аватар пользователя"
                         src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyc8I3fvjOkpEkK8v7ItbnvLJHPHNIDJ2MyQ&usqp=CAU"/>
                </div>
                <button className={s.button} type="button">Редактировать</button>
            </div>

            <div>
                <h1 className={s.fullName}>Alexey Kukharenko</h1>
                <p className={s.age}>21 years old</p>
                <p className={s.aboutMe}>Just a good boy</p>
            </div>
        </div>
    );
}

export default ProfileInfo;