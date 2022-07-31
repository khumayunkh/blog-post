import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import style from './header.module.css'

function Header(){
    const isAuth = useSelector(state => state.auth.isAuth)
    const {me} = useSelector(state => state.user)

    return(
    <>
       <div className={style.header}>
            <div className={style.container}>
                <div className={style.header_in}>
                    <div className={style.logo}>
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/BBC_logo_white.svg/1200px-BBC_logo_white.svg.png"/>
                    </div>
                   {isAuth ? 
                   <div className={style.me}>
                        <h3>{me.username}</h3>
                        <button>Logout</button>
                   </div> :
                   <div className={style.login}>
                        <div className={style.sign_in}>
                            <NavLink className={style.sign_in_nav} to='/login'>Login</NavLink>
                        </div>
                        <div className={style.sign_up}>
                            <NavLink className={style.sign_up_nav} to='/registr'>Регистрация</NavLink>
                        </div>
                    </div>}
                </div>
            </div>
        </div>
    </>
    )
}

export default Header