import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { verifyEmailThunk } from "../../store/authSlice/authSlice";


function Verify(){

    const dispatch = useDispatch() 
    let {token} = useParams()

    useEffect( () => {
        dispatch(verifyEmailThunk(token))
    }, []);
    
    return(
        <>hello {token}</>
    )
}

export default Verify