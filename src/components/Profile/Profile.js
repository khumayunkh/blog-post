import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { client } from "../../api";
import { getUserArticleThunk } from "../../store/articles/articlesReducer";
import { getMeThunk } from "../../store/users/usersReducer";
import style from './profile.module.css'


function Profile(){
    const dispatch = useDispatch()
    const {me} = useSelector(state => state.user)
    const {userArticle} = useSelector(state => state.articles)
    const {isAuth} = useSelector(state => state.auth)
    const {myProfile} = useSelector(state => state.user)
    const [image, setImage] = useState('')

    const handleChange = (e) => {
        console.log(e.target.files)
        setImage(e.target.files[0])
    }

    const handleSubmit = () => {
        client.post('profile/', data).then(result => {
            console.log(result.data)
            alert('success')
          })
    }
    
    return(
        <>
        {isAuth === true ?<div className={style.profile}>
            <div className={style.container}>
                <div className={style.header}>
                    <h1>{myProfile.user.username}</h1>
                    <input type='file' onChange={handleChange} />
                    <button onClick={handleSubmit} >SUBMIT</button>
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