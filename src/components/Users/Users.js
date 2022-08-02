import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { getUsersThunk} from "../../store/users/usersReducer";
import style from './users.module.css'
import UsersInput from "./UsersInput";

function Users(){
    const dispatch = useDispatch()
    
    useEffect(() => {
        dispatch(getUsersThunk())
    },[])
    
    const users = useSelector(state => state.user.users)
    
    return(
        <div className={style.users}>
            <div className={style.container}>
                <div className={style.users_in}>
                    <UsersInput/>
                    {users.map(item =>
                    <div key ={item.id} className={style.user}>
                        <div className={style.logo}>
                            <img  src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/OOjs_UI_icon_userAvatar.svg/2048px-OOjs_UI_icon_userAvatar.svg.png"/>
                        </div>
                    <div className={style.user_email}>
                        <h2>{item.user.username}</h2>
                        <NavLink to={'/userProfile/' + item.id} className={style.user_profile}>
                            See more
                        </NavLink>
                    </div>
                    </div>)}
                </div>
            </div>
        </div> 
    )
}

export default Users 
