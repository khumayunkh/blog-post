import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { addNewArticlesThunk } from "../../store/articles/articlesReducer";
import style from './add.module.css'

function AddArticles(){
    const dispatch = useDispatch()
    const {isAuth} = useSelector(state => state.auth)
    const {register, handleSubmit, reset} = useForm()
    
    const nameAddArticles = register('tags')
    const titleAddArticles = register('title')
    const contentAddArticles = register('content')
    
    const onSubmit = (data) =>{
        dispatch(addNewArticlesThunk({
            tags : data.tags,
            title : data.title,
            content : data.content
        }))
        reset()
    }
    
    return(
        <>
       {isAuth === true ? <div className={style.add}>
            <div className={style.container}>
                <div className={style.add_in}>
                    <form onSubmit={handleSubmit(onSubmit)} className={style.input}>
                        <input {...nameAddArticles} className={style.input_in} placeholder="Name"/>
                        <input {...titleAddArticles} className={style.input_in} placeholder="Title"/>
                        <input {...contentAddArticles} className={style.input_in} placeholder="Tell your story..."/>
                        <button>Publish</button>
                    </form>
                </div>
            </div>
        </div> : <></>}
        </>
    )
}

export default AddArticles
