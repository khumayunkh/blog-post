import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../store/authSlice";

function Login(){
    const dispatch = useDispatch()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = () => {
        dispatch(login({email,password}));
    }
    return(
        <>
        <input value={email} onChange={e => setEmail(e.target.value)}/>
        <input value={password} onChange={e => setPassword(e.target.value)}/>
        <button onClick={handleSubmit}>Login</button>
        </>
    )
}


export default Login
