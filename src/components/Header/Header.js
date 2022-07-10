import React from "react";
import { NavLink } from "react-router-dom";


function Header(){
    return(
        <>
        <NavLink to='login'>Login</NavLink>
        <NavLink to='register'>Register</NavLink>
        </>
    )
}


export default Header