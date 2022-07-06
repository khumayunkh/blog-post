import axios from "axios"

const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit")


let initialState = {
    username : '',
    password : ''
}


export const register = createAsyncThunk(
    'auth/register',
    async function(initialState){
        const response = await axios.post('https://splunk.backpackertrail.de/users',{
            username : initialState.username,
            password : initialState.password
        })
    }
)

export const login = createAsyncThunk(
    'auth/login',
    async function(initialState){
        let data = new FormData()
        data.append('email', loginDetails.username)
        data.append('password', loginDetails.password)
        const response = await axios.post('https://splunk.backpackertrail.de/',data,{
            headers: {
                'Content-Type': 'multipart/form-data',
            }
        })
    }
)