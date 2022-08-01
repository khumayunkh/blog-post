import { configureStore } from "@reduxjs/toolkit";
import { client } from "../api";
import { articlesReducer } from "./articles/articlesReducer";
import { authReducer } from "./auth/authReducer";
import { userReducer } from "./users/usersReducer";


export const store = configureStore({
    reducer: {
        auth : authReducer,
        user : userReducer,
        articles : articlesReducer
    },
    devTools: true,
})