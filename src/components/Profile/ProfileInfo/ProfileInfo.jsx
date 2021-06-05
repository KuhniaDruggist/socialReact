import React from 'react';
import s from './ProfileInfo.module.css';
import Preloader from '../../common/Preloader/Preloader';
import like from '../../../assets/img/like.png';
import dislike from '../../../assets/img/dislike.png';

const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader />
    }
debugger
    return (
        <div className={s.info}>
            <div className={s.userPhoto}>
                <div>
                    <img className={s.photo} alt="Аватар пользователя"
                         src={props.profile.photos.large}/>
                </div>
                <button className={s.button} type="button">Редактировать</button>
            </div>

            <div>
                <h2 className={s.fullName}>{props.profile.fullName}</h2>
                <p className={s.aboutMe}>{props.profile.aboutMe}</p>

                <div className={s.job}>
                    <div className={s.jobSearch}>
                        <p>Ищу работу:</p>
                        <img src={props.profile.lookingForAJob ? like : dislike} />
                    </div>
                    <p className={s.jobStatus}>{props.profile.lookingForAJobDescription}</p>
                </div>
            </div>
        </div>
    );
}

export default ProfileInfo;