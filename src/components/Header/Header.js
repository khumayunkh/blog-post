import React from "react";
import { NavLink } from "react-router-dom";
import style from './header.module.css'

function Header(){
    return(
    <>
        <div className={style.header}>
            <div className={style.container}>
                <div className={style.header_in}>
                    <div className={style.logo}>
                        <h2>Logo</h2>
                    </div>
                    <div className={style.login}>
                        <div className={style.sign_in}>
                            <NavLink className={style.sign_in_nav} to='/login'>Login</NavLink>
                        </div>
                        <div className={style.sign_up}>
                            <NavLink className={style.sign_up_nav} to='/login'>Регистрация</NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
    )
}

export default Header