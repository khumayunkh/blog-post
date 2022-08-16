import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { addArticles, getArticle, getArticles } from "../../api/articles"


export const getArticlesThunk = createAsyncThunk(
    'articles/getArticlesThunk',
    async() => {
        const responce = await getArticles()
        const data = await responce.data.results
        console.log(responce.data.results)
        return data
    }
)

export const addNewArticlesThunk = createAsyncThunk(
    'articles/addNewArticles',
    async ({tags, title, content}, {dispatch}) => {
        const response = await addArticles({tags, title, content})
        const data = await response.data
        dispatch(articlesActions.addArticle(data))
    }
)

export const getUserArticleThunk = createAsyncThunk(
    'articles/getUserArticleThunk',
    async (id) =>  {
        const responce = await getArticle(id)
        const data = responce.data
        return data
    }
)

const initialState = {
    articles : [],
    status : null,
    isLoading : false,
    userArticle : {},
}

const articlesSlice = createSlice({
    name : 'articles',
    initialState : initialState,
    reducers:{
        addArticle(state, action){
            state.articles.push(action.payload)
        },
        setUserArticle : (state, action) => {
            state.userArticle = action.payload
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
            state.isLoading = true
        })
        builder.addCase(getArticlesThunk.fulfilled,(state, action) => {
            state.articles = action.payload
            state.isLoading = false
        })
        builder.addCase(getUserArticleThunk.pending,(state) => {
            state.isLoading = true
        })
        builder.addCase(getUserArticleThunk.fulfilled,(state, action) => {
            state.userArticle = action.payload
            state.isLoading = false
        })
    }
})

export const articlesActions = articlesSlice.actions
export const articlesReducer = articlesSlice.reducer

