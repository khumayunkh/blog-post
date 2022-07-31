import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { addArticle } from "../../api/articles"


export const addNewArticlesThunk = createAsyncThunk(
    'todos/addNewTodos',
    async function({tags, title, content}, {dispatch}){
        const response = await addArticle({tags, title, content})
        const data = await response.data
        dispatch(addTodos(data))
    }
)


const initialState = {
    articles : [],
    status : null
}


const todoSlice = createSlice({
    name : 'todos',
    initialState : initialState,
    reducers:{
        addTodos(state, action){
            state.articles.push(action.payload)
        }
    },
    extraReducers:(builder) => {
        builder.addCase(addNewArticlesThunk.pending,(state) => {
            state.status = 'loading';
        })
        builder.addCase(addNewArticlesThunk.fulfilled,(state, action) => {
            state.status = 'resolved';
            state.articles = action.payload;
        })
        builder.addCase(addNewArticlesThunk.rejected,(state,action) =>{})
    }
})
