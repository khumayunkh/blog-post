import React, { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getUserProfileThunk } from '../../store/users/usersReducer'
import style from './userProfile.module.css'

function UserProfile(){
    const dispatch = useDispatch()
    const {userProfile} = useSelector(state => state.user) 
    const {UserProfile} = useParams()

    useEffect(() => {
        dispatch(getUserProfileThunk(UserProfile))
    },[])
    
    return(
        <>
        <div className={style.profile}>
            <div className={style.container}>
                <div className={style.header}>
                    <h1>{UserProfile}</h1>
                </div>
                <h3 className={style.published}>Published</h3>
                <div className={style.story}>
                    <h3>You haven’t published any public stories yet.</h3>
                </div>
            </div>
        </div>
        </>
    )
}

export default UserProfile