import React from "react";
import style from './profile.module.css'


function Profile(){
    return(
        <>
        <div className={style.profile}>
            <div className={style.container}>
                <div className={style.profile_in}>
                    <div className={style.header}>
                        <img src="https://freesvg.org/img/abstract-user-flat-3.png"/>
                        <div className={style.email}>
                            <h2>admin@admin.com</h2>
                        </div>
                    </div>
                    <div className={style.article}>
                        <h2>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
                        </h2>
                    </div>
                    <div className={style.article}>
                        <h2>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
                        </h2>
                    </div>
                    <div className={style.article}>
                        <h2>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
                        </h2>
                    </div>
                    <div className={style.article}>
                        <h2>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
                        </h2>
                    </div>
                    <div className={style.article}>
                        <h2>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
                        </h2>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Profile