import { configureStore } from "@reduxjs/toolkit";
import { authReducers } from "./auth/authReducer";
import { userReducer } from "./users/usersReducer";



export const store = configureStore({
    reducer: {
        auth : authReducers,
        user: userReducer
    }
})