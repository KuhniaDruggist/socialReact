import React from 'react';
import s from './Login.module.css';
import {Field, reduxForm} from "redux-form";

const LoginForm = (props) => {

    return (
        <form className={s.form} onSubmit={props.handleSubmit}>
            <label className={s.label}>login:
                <Field component={'input'} name={'login'} placeholder={'Алексей'} />
            </label>
            <label className={s.label}>Password:
                <Field component={'input'} name={'password'} placeholder={'*******'} />
            </label>
            <label className={s.label}>Remember me:
                <Field component={'input'} name={'rememberMe'} type={'checkbox'}/>
            </label>
            <button>Log in</button>
        </form>
    );
}

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm);

const Login = (props) => {
    const onSubmit = (formData) => {
        console.log(formData);
    }
    return(
        <div>
            <h1>Осуществите вход в систему</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    );
}

export default Login