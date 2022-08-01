import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import style from './profile.module.css'


function Profile(){
    const dispatch = useDispatch()
    const {isAuth} = useSelector(state => state.auth)

    return(
        <>
        {isAuth === true ?<div className={style.profile}>
            <div className={style.container}>
                <div className={style.header}>
                    <h1>Your stories</h1>
                    <NavLink className={style.btn} to='/add'>Wrile a story</NavLink>
                </div>
                <h3 className={style.published}>Published</h3>
                <div className={style.story}>
                    <h3>You haven’t published any public stories yet.</h3>
                </div>
            </div>
        </div> : <></>}
        </>
    )
}

export default Profile