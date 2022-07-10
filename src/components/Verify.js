import axios from "axios";
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";



function Verify(){
    const {token} = useParams()

    useEffect(()=> {
        axios.post('https://splunk.backpackertrail.de/users/verify',{
            header:{
                'Authorization' : token
            }
        })
    },[])

    return(
        <>
        {token}
        </>
    )
}


export default Verify
