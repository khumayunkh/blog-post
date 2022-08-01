import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUsersThunk } from "../../store/users/usersReducer";
import style from './users.module.css'

function Users(){
    const dispatch = useDispatch()
    const {users} = useSelector(state => state.user)

    useEffect(() => {
        dispatch(getUsersThunk())
    },dispatch)

    return(
        <>
        <div className={style.users}>
            <div className={style.container}>
                <div className={style.users_in}>
                    <div className={style.input}>
                        <input placeholder="Search..." className={style.users_input}/>
                    </div>
                    {users.results.map(item => <div className={style.user}>
                        <div className={style.logo}>
                            <img  src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/OOjs_UI_icon_userAvatar.svg/2048px-OOjs_UI_icon_userAvatar.svg.png"/>
                        </div>
                    <div className={style.user_email}>
                        <h2>{item.user.username}</h2>
                        <button>See More</button>
                    </div>
                    </div>)}
                </div>
            </div>
        </div>
        </>
    )
}

export default Users
