import axios, {AxiosInstance} from "axios";


export const API_URL = `https://splunk.backpackertrail.de`


export const client = axios.create({
    baseURL: API_URL,
    timeout: 10000,
    headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('access_token')}`
    }
});


const setConfiguration = (AxiosInstance) => {
    client = AxiosInstance
    client.interceptors.request.use(
        (config) => {
            config.headers && (config.headers['Authorization'] = `Bearer ${localStorage.getItem('access_token')}`)
            return config
        },
        error => Promise.reject(error)
    )
}

setConfiguration(client)


export const register = async (email, password) => {
    return await client.post('users/', {email,password})
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


export const refreshToken = async () => {
    return await client.post('token/refresh/', {
        'refresh': tokenPayload.refresh || ''
    })
}

export const verifyEmail = async () => {
    return await client.post(`users/verify/`, {
        "verification-token": token,
    })
}