import React from "react";
import style from './login.module.css'
import { useDispatch } from "react-redux";
import { loginThunk } from "../../store/authSlice/authSlice";
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
                <form onSubmit={handleSubmit(onSubmit)}>
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
                    placeholder='Пароль'
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