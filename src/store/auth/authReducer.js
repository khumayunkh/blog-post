import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import {register, login, verifyEmail, googleLogin} from '../../api/auth'


const initialState = {
    isAuth: false,
    isLoading: false,
    registrationIsSuccessful: false,
    verificationIsSuccessful: false,
}

export const registrationThunk = createAsyncThunk(
    'register',
    async ({username, email, password}, {dispatch}) => {
        const response = await register({username, email, password})
        dispatch(authActions.setRegistrationUserDetails(response.data))
    }
)

export const verifyEmailThunk = createAsyncThunk(
    'verify-email',
    async (token) => {
        await verifyEmail(token)
    }
)

export const loginThunk = createAsyncThunk(
    'login',
    async ({email,password}) => {
        const response = await login(email,password)
        localStorage.setItem('access_token', response.data.access)
        localStorage.setItem('refresh_token', response.data.refresh)
    }
)

export const googleLoginThunk = createAsyncThunk(
    'google-login',
    async ({email,password}) => {
        const response = await googleLogin(email,password)
        localStorage.setItem('access_token', response.data.access)
        localStorage.setItem('refresh_token', response.data.refresh)
    }
)


export const AuthSlice = createSlice({
    name: 'auth',
    initialState: initialState,
    reducers: {
        setIsAuthAction: (state, action) => {
            state.isAuth = action.payload
        },
        setAuthErrorMessageAction: (state, action ) => {
            state.errorMessage = action.payload
        },
        setRegistrationUserDetails: (state, action) => {
            state.registrationUserDetails = action.payload
        }
    },
    extraReducers: (builder) => {
        builder.addCase(loginThunk.pending, (state) => {
            state.isLoading = true;
        })
        builder.addCase(loginThunk.rejected, (state, action) => {
            state.isLoading = false;
            state.errorMessage = action?.error.message;
        })
        builder.addCase(loginThunk.fulfilled, (state) => {
            state.isAuth = true;
            state.isLoading = false;
        })
        builder.addCase(googleLoginThunk.pending, (state) => {
            state.isLoading = true;
        })
        builder.addCase(googleLoginThunk.rejected, (state, action) => {
            state.isLoading = false;
            state.errorMessage = action?.error.message;
        })
        builder.addCase(googleLoginThunk.fulfilled, (state) => {
            state.isAuth = true;
            state.isLoading = false;
        })
        builder.addCase(verifyEmailThunk.rejected, (state, action) => {
            state.isLoading = false;
            state.errorMessage = action?.error.message;
        })
        builder.addCase(verifyEmailThunk.pending, (state) => {
            state.isLoading = true;
        })
        builder.addCase(verifyEmailThunk.fulfilled, (state) => {
            state.verificationIsSuccessful = true;
            state.isLoading = false;
        })
        builder.addCase(registrationThunk.rejected, (state, action) => {
            state.isLoading = false;
            state.errorMessage = action?.error.message;
        })
        builder.addCase(registrationThunk.pending, (state) => {
            state.isLoading = true;
        })
        builder.addCase(registrationThunk.fulfilled, (state) => {
            state.registrationIsSuccessful = true;
            state.isLoading = false;
        })
    }
}) 

export const authActions = AuthSlice.actions
export const authReducers = AuthSlice.reducer
