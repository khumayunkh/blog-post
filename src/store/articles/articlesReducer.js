import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { addArticles, getArticles } from "../../api/articles"


export const addNewArticlesThunk = createAsyncThunk(
    'articles/addNewArticles',
    async ({tags, title, content}, {dispatch}) => {
        const response = await addArticles({tags, title, content})
        const data = await response.data
        dispatch(articlesActions.addArticle(data))
    }
)

export const getArticlesThunk = createAsyncThunk(
    'articles/getArticlesThunk',
    async() => {
        const responce = await getArticles()
        const data = await responce.data
        console.log(data)
        return data
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
        },
        setArticles : (state, action) => {
            state.articles = action.payload
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
        builder.addCase(getArticlesThunk.pending,(state) => {
            state.status = 'loading';
        })
        builder.addCase(getArticlesThunk.fulfilled,(state, action) => {
            state.status = 'loading';
            state.articles = action.payload
        })
    }
})


export const articlesActions = articlesSlice.actions
export const articlesReducer = articlesSlice.reducer
