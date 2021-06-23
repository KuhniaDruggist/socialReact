import React from 'react';
import s from './Login.module.css';
import {Field, reduxForm} from "redux-form";
import {Input} from "../common/customFields/CustomFields";
import {maxLengthCreator, required} from "../../utils/validators/validateForm";
import {login} from "../../redux/auth-reducer";
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";

const maxLength30 = maxLengthCreator(30);

const LoginForm = (props) => {

    return (
        <form className={s.form} onSubmit={props.handleSubmit}>
            <label className={s.label}>Email:
                <Field component={Input}
                       name={'email'}
                       placeholder={'Алексей'}
                       validate={[ required, maxLength30 ]} />
            </label>
            <label className={s.label}>Password:
                <Field component={Input}
                       type={'password'}
                       name={'password'}
                       placeholder={'*******'}
                       validate={[ required, maxLength30 ]} />
            </label>
            <label className={s.label}>Remember me:
                <Field component={Input}
                       name={'rememberMe'}
                       type={'checkbox'}
                       validate={[ required ]}/>
            </label>
            <button>Log in</button>
        </form>
    );
}

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm);

const Login = (props) => {
    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe);
    }

    if (props.isAuth) return <Redirect to={"/profile"}/>

    return(
        <div>
            <h1>Осуществите вход в систему</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth
    }
}

export default connect(mapStateToProps, { login })(Login);