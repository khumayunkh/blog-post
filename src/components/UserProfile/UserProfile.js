import React from 'react'
import style from './userProfile.module.css'

function UserProfile(){
    return(
        <>
        <div className={style.profile}>
            <div className={style.container}>
                <div className={style.header}>
                    <h1>Your stories</h1>
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