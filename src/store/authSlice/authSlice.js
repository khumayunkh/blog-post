import AuthService from "../../api";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"




export const login = createAsyncThunk(
    'login/auth',
    async function({email, password}) {
        try {
            const response = await AuthService.login(email, password);
            console.log(response)
            localStorage.setItem('token', response.data.accessToken);
            const data = response.data
        } catch (e) {
            console.log(e.response?.data?.message);
        }
    }
)

export const registration = createAsyncThunk(
    'login/auth',
    async function({email, password}) {
        try {
            const response = await AuthService.registration(email, password);
            console.log(response)
            localStorage.setItem('token', response.data.accessToken);
            const data = response.data
        } catch (e) {
            console.log(e.response?.data?.message);
        }
    }
)

export const logout = createAsyncThunk(
    'login/auth',
    async function() {
        try {
            const response = await AuthService.logout();
            localStorage.removeItem('token');
            this.setAuth(false);
        } catch (e) {
            console.log(e.response?.data?.message);
        }
    }
)
const initialState = {
    users : [],
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
        builder.addCase(registration.pending,(state) => {
            state.isAuth = false
        })
        builder.addCase(registration.fulfilled,(state) => {
            state.isAuth = true
        })
    }
})