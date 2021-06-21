import React from 'react';
import s from './Login.module.css';
import {Field, reduxForm} from "redux-form";
import {Input} from "../common/customFields/CustomFields";
import {maxLengthCreator, required} from "../../utils/validators/validateForm";

const maxLength15 = maxLengthCreator(15);

const LoginForm = (props) => {

    return (
        <form className={s.form} onSubmit={props.handleSubmit}>
            <label className={s.label}>login:
                <Field component={Input}
                       name={'login'}
                       placeholder={'Алексей'}
                       validate={[ required, maxLength15 ]} />
            </label>
            <label className={s.label}>Password:
                <Field component={Input}
                       name={'password'}
                       placeholder={'*******'}
                       validate={[ required, maxLength15 ]} />
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