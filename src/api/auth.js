import {client} from "./index";


export const register = async ({username, email, password}) => {
    return await client.post('users/', {
        username,
        email,
        password
    })
}

export const login = async (email,password) => {
    let data = new FormData()
    data.append('email', email)
    data.append('password', password)
    return await client.post('token/', data, {
        headers: {
            'Content-Type': 'multipart/form-data',
        }
    })
}

export const logout = async () => {
    localStorage.removeItem('access_token')
    localStorage.removeItem('refresh_token')
}


export const refreshToken = async (refresh) => {
    return await client.post('token/refresh/', {
        'refresh': refresh || ''
    })
}

export const verifyEmail = async (token) => {
    return await client.post(`users/verify/`, {
        "verification-token": token,
    })
}


export const googleLogin = async (google_token) => {
    return await client.post('users/google-login/', {"google-token": google_token})
}