import React, {useRef} from "react";
import { useDispatch } from "react-redux";
import { userActions } from "../../store/users/usersReducer";
import style from './users.module.css'


function UsersInput(){
    const inputRef = useRef('')
    const dispatch = useDispatch()
    
    const filterByName = () => {
        dispatch(userActions.searchUsers(inputRef.current.value))
    }

    return(
        <>
            <div className={style.input}>
                <input ref={inputRef} onChange={filterByName} placeholder="Search..." className={style.users_input}/>
            </div>           
        </>
    )
} 

export default UsersInput