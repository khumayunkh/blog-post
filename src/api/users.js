import {refreshToken} from "./auth";
import {client} from "./index";


export const getMe = async () => {
    const refresh_token = localStorage.getItem('refresh_token')
    try{
        return await client.get('users/me/')
    } catch(error){
        if(localStorage.getItem('refresh_token')){
            const response = await refreshToken({refresh: refresh_token})
            localStorage.setItem('access_token', response.data.access)
            localStorage.setItem('refresh_token', response.data.refresh)
            return await client.get('users/me')
        } else throw error
    }
}

export const getUsers = async () => {
    return await client.get('profile/')
}

export const getUserProfile = async (id) => {
    return await client.get(`users/${id}`)
}


export const getProfile = async(profile) =>{
    return await client.get(`profile/${profile}`)
}

