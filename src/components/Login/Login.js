import React, { useState } from "react";
import style from './login.module.css'
import { useDispatch } from "react-redux";
import { loginThunk,  registrationThunk } from "../../store/authSlice/authSlice";

function LoginForm(){
    const dispatch = useDispatch()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    return(
        <>
        <div>
            <input
                onChange={e => setEmail(e.target.value)}
                value={email}
                type="text"
                placeholder='Email'
            />
            <input
                onChange={e => setPassword(e.target.value)}
                value={password}
                type="password"
                placeholder='Пароль'
            />
            <button onClick={() => dispatch(loginThunk(email,password))}>
                Логин
            </button>
            <button onClick={() => dispatch(registrationThunk(email,password))}>
                Регистрация
            </button>
        </div>
        </>
    )
}

export default LoginForm