import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { getUserArticleThunk } from "../../store/articles/articlesReducer";
import style from './profile.module.css'


function Profile(){
    const dispatch = useDispatch()
    const {me} = useSelector(state => state.user)
    const {userArticle} = useSelector(state => state.articles)
    const {isAuth} = useSelector(state => state.auth)

    useEffect(() => {
        dispatch(getUserArticleThunk(me?.id))
    },[])
    
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