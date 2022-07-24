import React, {useState} from "react";
import { useDispatch } from "react-redux";
import style from './registration.module.css'
import { registrationThunk } from "../../store/authSlice/authSlice";
import { useForm } from "react-hook-form";


function Registr(){
    const {register, handleSubmit} = useForm()
    const dispatch = useDispatch()

    const usernamedRegister = register("username", {required: true})
    const emailRegister = register("email", {required: true})
    const passwordRegister = register("password", {required: true})

    const onSubmit = async(data) => {
        dispatch(registrationThunk({username: data.username,
            email : data.email,
            password : data.password
        }))
    }

    return(
        <>
        <div className={style.RegistrForm}>
            <div className={style.RegistrForm_in}>
                <h1>Регистрация</h1>
                <form onSubmit={handleSubmit(onSubmit)}>
                <input
                    className={style.input}
                    {...usernamedRegister}
                    type="text"
                    placeholder='username'
                />
                <input
                    className={style.input}
                    {...emailRegister}
                    type="text"
                    placeholder='Email'
                />
                <input
                    className={style.input}
                    {...passwordRegister}
                    type="password"
                    placeholder='Пароль'
                />
                <button className={style.btn_registr}>
                    Регистрация
                </button>
                </form>
            </div>
        </div>
        </>
    )
}



export default Registr