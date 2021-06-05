import React from 'react'
import s from './Users.module.css';
import userPhotoDefault from '../../assets/img/user.png'
import {NavLink} from "react-router-dom";
import * as axios from "axios";

let Users = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

    let pages = [];

    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return (
        <div>
            <ul className={s.usersList}>
                {
                    props.users.map(user =>
                        <li className={s.userItem} key={user.id}>
                            <div className={s.columnOne}>
                                <NavLink to={`/profile/${user.id}`}>
                                    <img alt='Фото пользователя'
                                         src={user.photos.small != null ? user.photos.small : userPhotoDefault}/>
                                </NavLink>
                                <div>
                                    {user.followed
                                        ? <button className={`${s.button} ${s.unfollow}`}
                                                  type="button"
                                                  onClick={() => {
                                                      axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${user.id}`, {
                                                          withCredentials: true,
                                                          headers: {
                                                              "API-KEY": "2ab53527-22ec-411a-a067-36cc969bffd6"
                                                          }
                                                      }).then(response => {
                                                          if(response.data.resultCode === 0) {
                                                              props.unfollow(user.id)
                                                          }
                                                      })
                                                  }}>Unfollow</button>
                                        : <button className={`${s.button} ${s.follow}`}
                                                  type="button"
                                                  onClick={() => {
                                                      axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${user.id}`, {}, {
                                                          withCredentials: true,
                                                          headers: {
                                                              "API-KEY": "2ab53527-22ec-411a-a067-36cc969bffd6"
                                                          }
                                                      }).then(response => {
                                                          if(response.data.resultCode === 0) {
                                                              props.follow(user.id)
                                                          }
                                                      })
                                                  }}>Follow</button>}
                                </div>
                            </div>
                            <div className={s.columnTwo}>
                                <div>
                                    <h3>{user.name}</h3>
                                    <p>{user.status}</p>
                                </div>
                                <div>
                                    <p>{"user.location.cityName"}</p>
                                    <p>{"user.location.countryName"}</p>
                                </div>
                            </div>
                        </li>
                    )
                }
            </ul>
            <ul className={s.paginationList}>
                {
                    pages.map(page => {
                        return (
                            <li className={s.page}>
                                <button className={props.activePage === page && s.active}
                                        type="button"
                                        onClick={() => {
                                            props.onPageChanged(page)
                                        }}>{page}
                                </button>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    );
}

export default Users;