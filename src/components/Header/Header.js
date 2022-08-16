import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { logout } from "../../api/auth";
import { authActions } from "../../store/auth/authReducer";
import { getMeThunk, getMyProfileThunk } from "../../store/users/usersReducer";
import style from './header.module.css'

function Header(){
    const {isAuth} = useSelector(state => state.auth)
    const {me} = useSelector(state => state.user)
    const {myProfile} = useSelector(state => state.user)
    const dispatch = useDispatch()
    
    const logOut = () => {
        logout().then(()=>{
            authActions.setIsAuthAction(false)
        })
        dispatch(getMeThunk())
    }
    
    useEffect(()=>{
        if(isAuth){
            dispatch(getMyProfileThunk(me.profile))
        }
    },[])
    
    return(
       <div className={style.header}>
            <div className={style.container}>
                <div className={style.header_in}>
                    <div className={style.logo}>
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/BBC_logo_white.svg/1200px-BBC_logo_white.svg.png"/>
                    </div>
                   {isAuth == true ? 
                   <div className={style.me}>
                        <NavLink className={style.user_name} to='/profile'>{myProfile.user.username}</NavLink>
                        <NavLink className={style.logout} onClick={() => logOut()} to="/">LogOut</NavLink>
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
    )
}

export default Header