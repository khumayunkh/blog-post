import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { addArticles } from "../../api/articles"


export const addNewArticlesThunk = createAsyncThunk(
    'articles/addNewArticles',
    async ({tags, title, content}, {dispatch}) => {
        const response = await addArticles({tags, title, content})
        const data = await response.data
        dispatch(articlesActions.addArticle(data))
    }
)

const initialState = {
    articles : [],
    status : null
}

const articlesSlice = createSlice({
    name : 'articles',
    initialState : initialState,
    reducers:{
        addArticle(state, action){
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


export const articlesActions = articlesSlice.actions
export const articlesReducer = articlesSlice.reducer