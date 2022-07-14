import React from "react";
import { NavLink } from "react-router-dom";
import style from './footer.module.css'


function Footer(){
    return(
        <>
        <div className={style.footer}>
            <div className={style.container}>
                <div className={style.footer_in}>
                    <div className={style.icons}>
                        <NavLink className={style.tags} to='/users'>Users</NavLink>
                    </div>
                    <div className={style.icons}>
                        <NavLink className={style.tags} to='/articls'>Articls</NavLink>
                    </div>
                    <div className={style.icons}>
                        <NavLink className={style.tags} to='/add'>Add Articls</NavLink>
                    </div>
                    <div className={style.icons}>
                        <NavLink className={style.tags} to='/profile'>Profile</NavLink>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Footer