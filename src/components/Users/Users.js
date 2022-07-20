import React from "react";
import style from './users.module.css'

function Users(){
    return(
        <>
        <div className={style.users}>
            <div className={style.container}>
                <div className={style.users_in}>
                    <div className={style.input}>
                        <input placeholder="Search..." className={style.users_input}/>
                    </div>
                    <div className={style.user}>
                        <div className={style.logo}>
                            <img  src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/OOjs_UI_icon_userAvatar.svg/2048px-OOjs_UI_icon_userAvatar.svg.png"/>
                        </div>
                        <div className={style.user_email}>
                            <h2>admin@admin.com</h2>
                            <button>See More</button>
                        </div>
                    </div>
                    <div className={style.user}>
                        <div className={style.logo}>
                            <img  src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/OOjs_UI_icon_userAvatar.svg/2048px-OOjs_UI_icon_userAvatar.svg.png"/>
                        </div>
                        <div className={style.user_email}>
                            <h2>admin@admin.com</h2>
                            <button>See More</button>
                        </div>
                    </div>
                    <div className={style.user}>
                        <div className={style.logo}>
                            <img  src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/OOjs_UI_icon_userAvatar.svg/2048px-OOjs_UI_icon_userAvatar.svg.png"/>
                        </div>
                        <div className={style.user_email}>
                            <h2>admin@admin.com</h2>
                            <button>See More</button>
                        </div>
                    </div>
                    <div className={style.user}>
                        <div className={style.logo}>
                            <img  src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/OOjs_UI_icon_userAvatar.svg/2048px-OOjs_UI_icon_userAvatar.svg.png"/>
                        </div>
                        <div className={style.user_email}>
                            <h2>admin@admin.com</h2>
                            <button>See More</button>
                        </div>
                    </div>
                    <div className={style.user}>
                        <div className={style.logo}>
                            <img  src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/OOjs_UI_icon_userAvatar.svg/2048px-OOjs_UI_icon_userAvatar.svg.png"/>
                        </div>
                        <div className={style.user_email}>
                            <h2>admin@admin.com</h2>
                            <button>See More</button>
                        </div>
                    </div>
                    <div className={style.user}>
                        <div className={style.logo}>
                            <img  src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/OOjs_UI_icon_userAvatar.svg/2048px-OOjs_UI_icon_userAvatar.svg.png"/>
                        </div>
                        <div className={style.user_email}>
                            <h2>admin@admin.com</h2>
                            <button>See More</button>
                        </div>
                    </div>
                    <div className={style.user}>
                        <div className={style.logo}>
                            <img  src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/OOjs_UI_icon_userAvatar.svg/2048px-OOjs_UI_icon_userAvatar.svg.png"/>
                        </div>
                        <div className={style.user_email}>
                            <h2>admin@admin.com</h2>
                            <button>See More</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Users