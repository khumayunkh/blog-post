import React, {useState} from "react";
import { useDispatch } from "react-redux";
import style from './registration.module.css'
import { registrationThunk } from "../../store/authSlice/authSlice";


function Registr(){

    const dispatch = useDispatch()

    const [email, setEmail] = useState('')
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')


    const handleSubmit = () =>{
        dispatch(registrationThunk({username,email,password}))
        setUsername('')
        setEmail('')
        setPassword('')
    }


    // const onSubmit = (data: { email: string, password: string }) => {
    //     loginThunk({username: data.email, password: data.password})
    // };

    return(
        <>
        <div className={style.RegistrForm}>
            <div className={style.RegistrForm_in}>
                <h1>Регистрация</h1>
                <input
                    className={style.input}
                    onChange={e => setUsername(e.target.value)}
                    value={username}
                    type="text"
                    placeholder='username'
                />
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