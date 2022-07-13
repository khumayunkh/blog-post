import React, { useState } from "react";
import style from './login.module.css'
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loginThunk } from "../../store/authSlice/authSlice";

function LoginForm(){
    const dispatch = useDispatch()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')


    const handleSubmit = () =>{
        dispatch(loginThunk(email,password))
        setEmail('')
        setPassword('')
    }

    return(
        <>
        <div className={style.LoginForm}>
            <div className={style.LoginForm_in}>
                <h1>Login</h1>
                <input
                    className={style.input}
                    onChange={e => setEmail(e.target.value)}
                    value={email}
                    type="text"
                    placeholder='Email'
                />
                <input
                    className={style.input}
                    onChange={e => setPassword(e.target.value)}
                    value={password}
                    type="password"
                    placeholder='Пароль'
                />
                <button className={style.btn_login} onClick={handleSubmit}>
                    Логин
                </button>
                <NavLink to='/registration' className={style.btn_sign_in} >
                    Регистрация
                </NavLink>
            </div>
        </div>
        </>
    )
}

export default LoginForm