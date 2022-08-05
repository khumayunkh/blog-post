import React from "react";
import style from './login.module.css'
import { useDispatch, useSelector } from "react-redux";
import { loginThunk } from "../../store/auth/authReducer";
import { NavLink } from "react-router-dom";
import {useForm} from 'react-hook-form'
import { getMeThunk } from "../../store/users/usersReducer";

function LoginForm(){
    const {register, handleSubmit} = useForm()
    const dispatch = useDispatch()
    const {isAuth} = useSelector(state => state.auth)

    const emailLogin = register("email", {required: true})
    const passwordLogin = register("password", {required: true})
    
    const onSubmit = (data) =>{
        dispatch(loginThunk({
            email: data.email,
            password : data.password
        }))
    }

    const getMe = async() => {
        dispatch(getMeThunk())
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
                <button onClick={getMe} to='/profile' className={style.btn_login}>
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