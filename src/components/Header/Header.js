import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { logout } from "../../api/auth";
import { getMeThunk } from "../../store/users/usersReducer";
import style from './header.module.css'

function Header(){
    const isAuth = useSelector(state => state.auth.isAuth)
    const {me} = useSelector(state => state.user)

    const dispatch = useDispatch()

    
    const logOut = () => {
        logout()
        dispatch(getMeThunk())
    }

    return(
    <>
       <div className={style.header}>
            <div className={style.container}>
                <div className={style.header_in}>
                    <div className={style.logo}>
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/BBC_logo_white.svg/1200px-BBC_logo_white.svg.png"/>
                    </div>
                   {isAuth === true ? 
                   <div className={style.me}>
                        <h3>{me.username}</h3>
                        <NavLink className={style.logout} onClick={() => logOut()} to="/login">Logout</NavLink>
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