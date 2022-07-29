import { configureStore } from "@reduxjs/toolkit";
import { authReducers } from "./authSlice/authSlice";
import { userReducer } from "./usersSlice/usersSlice";



export const store = configureStore({
    reducer: {
        auth : authReducers,
        user: userReducer
    }
})