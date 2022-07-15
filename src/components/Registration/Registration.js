import React, {useState} from "react";
import { useDispatch } from "react-redux";
import style from './registration.module.css'
import { registrationThunk } from "../../store/authSlice/authSlice";


function Registr(){

    const dispatch = useDispatch()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')


    const handleSubmit = () =>{
        dispatch(registrationThunk(email,password))
        setEmail('')
        setPassword('')
    }

    return(
        <>
        <div className={style.RegistrForm}>
            <div className={style.RegistrForm_in}>
                <h1>Регистрация</h1>
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
                <button className={style.btn_registr} onClick={handleSubmit}>
                    Регистрация
                </button>
            </div>
        </div>
        </>
    )
}

export default Registr