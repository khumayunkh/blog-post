import {
    createAsyncThunk,
    createSlice,
} from "@reduxjs/toolkit";
import axios from "axios";
import {getMe, getUsers} from "../../api/users";
import {authActions} from "../auth/authReducer";


export const getMeThunk = createAsyncThunk(
    'me',
    async (_, {dispatch}) => {
        try {
            const response = await getMe()
            await dispatch(userActions.setMeAction(response.data))
            return dispatch(authActions.setIsAuthAction(true))
        } catch (error) {
            if (axios.isAxiosError(error)) {
                dispatch(authActions.setIsAuthAction(false))
                throw error
            }
        }
    }
)
    
export const getUsersThunk = createAsyncThunk(
    'users',
    async function(){
        const response = await getUsers()
        const data = await response.data
        console.log(data)
        return data
    }
)

export const UserState = {
    users : [],
    usersByName : [],
    me: undefined,
    errorMessage: undefined,
    isLoading: false,
}

export const UserSlice = createSlice({
    name: 'me',
    initialState: UserState,
    reducers: {
        setUsers : (state, action) => {
            state.users = action.payload
        },
        setMeAction: (state, action) => {
            state.me = action.payload
        },
        searchUsers : (state,action) => {
            state.users = state.usersByName.results.filter(item => item.user.username.toLowerCase().includes(action.payload)); 
        },
        removeUserErrorMessageAction: (state, action) => {
            state.errorMessage = action.payload
        },
        removeMeAction: (state, action) => {
            state.me = action.payload
        },
        setUserErrorMessageAction: (state, action) => {
            state.errorMessage = action.payload
        }

    },
    extraReducers: (builder) => {
        builder.addCase(
            getMeThunk.pending, (state) => {
                state.isLoading = true
            })
        builder.addCase(
            getMeThunk.fulfilled, (state) => {
                state.isLoading = false
            })
        builder.addCase(
            getMeThunk.rejected, (state, action) => {
                state.errorMessage = action?.error.message;
                state.isLoading = false
            })
        builder.addCase(getUsersThunk.pending, (state) => {
            state.isLoading = true
        })
        builder.addCase(getUsersThunk.fulfilled, (state,action) => {
            state.isLoading = false
            state.users = action.payload
            state.usersByName = action.payload
        })    
    }
})

export const userActions = UserSlice.actions
export const userReducer = UserSlice.reducer