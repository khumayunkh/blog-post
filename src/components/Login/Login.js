import React from "react";
import style from './login.module.css'
import { useDispatch, useSelector } from "react-redux";
import { loginThunk } from "../../store/auth/authReducer";
import { NavLink } from "react-router-dom";
import {useForm} from 'react-hook-form'

function LoginForm(){
    const {register, handleSubmit} = useForm()
    const dispatch = useDispatch()

    const emailLogin = register("email", {required: true})
    const passwordLogin = register("password", {required: true})

    const onSubmit = (data) =>{
        dispatch(loginThunk({
            email: data.email,
            password : data.password
        }))
    }

    return(
        <>
        <div className={style.LoginForm}>
            <div className={style.LoginForm_in}>
                <h1>Login</h1>
                <form className={style.form} onSubmit={handleSubmit(onSubmit)}>
                <input
                    className={style.input}
                    {...emailLogin}
                    type="text"
                    placeholder='Email'
                />
                <input
                    className={style.input}
                    {...passwordLogin}
                    type="password"
                    placeholder='Password'
                />
                <button className={style.btn_login}>
                    Login
                </button>
                </form>
                <NavLink to='/registr' className={style.btn_sign_in}>
                    Регистрация
                </NavLink>
            </div>
        </div>
        </>
    )
}

export default LoginForm