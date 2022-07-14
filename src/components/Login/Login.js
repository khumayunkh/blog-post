import React, { useState } from "react";
import style from './login.module.css'
import { useDispatch } from "react-redux";
import { loginThunk,  registrationThunk } from "../../store/authSlice/authSlice";

function LoginForm(){
    const dispatch = useDispatch()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')


    const handleSubmit = () =>{
        dispatch(loginThunk(email,password))
        setEmail('')
        setPassword('')
    }

    const handleRegister = () => {
        dispatch(registrationThunk(email,password))
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
                <button className={style.btn_sign_in} onClick={handleRegister}>
                    Регистрация
                </button>
            </div>
        </div>
        </>
    )
}

export default LoginForm