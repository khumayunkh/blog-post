const { createSlice } = require("@reduxjs/toolkit")




const initialState = {
    users : [],
    isAuth : false,
    isLoading : false
}


const authSlice = createSlice({
    name : 'auth',
    initialState : initialState,
    extraReducers
})