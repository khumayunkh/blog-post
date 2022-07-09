import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { register } from "../store/authSlice";

function Register(){
    const dispatch = useDispatch()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = () => {
        dispatch(register(email,password));
    }
    return(
        <>
        <input value={email} onChange={e => setEmail(e.target.value)}/>
        <input value={password} onChange={e => setPassword(e.target.value)}/>
        <button onClick={handleSubmit}>register</button>
        </>
    )
}


export default Register