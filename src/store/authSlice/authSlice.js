import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import {register, login, logout} from './../index'



export const login = createAsyncThunk(
    'login/auth',
    async function({email, password}) {
        try {
            const response = await login(email, password);
            console.log(response)
            localStorage.setItem('token', response.data.accessToken);
            const data = response.data
        } catch (e) {
            console.log(e.response?.data?.message);
        }
    }
)

export const registration = createAsyncThunk(
    'register/auth',
    async function({email, password}) {
        try {
            const response = await register(email, password);
            console.log(response)
            localStorage.setItem('token', response.data.accessToken);
            const data = response.data
        } catch (e) {
            console.log(e.response?.data?.message);
        }
    }
)

export const logout = createAsyncThunk(
    'logout/auth',
    async function() {
        try {
            const response = await logout()
            localStorage.removeItem('token');
            this.setAuth(false);
        } catch (e) {
            console.log(e.response?.data?.message);
        }
    }
)

const initialState = {
    isAuth : false,
    isLoading : false
}

const authSlice = createSlice({
    name : 'auth',
    initialState : initialState,
    extraReducers :(builder) => {
        builder.addCase(login.pending,(state) => {
            state.isAuth = false
        })
        builder.addCase(login.fulfilled,(state) => {
            state.isAuth = true
        })
        // builder.addCase(registration.pending,(state) => {
        //     state.isAuth = false
        // })
        // builder.addCase(registration.fulfilled,(state) => {
        //     state.isAuth = true
        // })
    }
})

export default authSlice.reducer