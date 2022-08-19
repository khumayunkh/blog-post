import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { addNewArticlesThunk, getArticlesThunk } from "../../store/articles/articlesReducer";
import style from './add.module.css'

function AddArticlesModule({ open, onClose }){
    const dispatch = useDispatch()
    const {register, handleSubmit, reset} = useForm()
    const {isAuth} = useSelector(state => state.auth)
    
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
    
    if (!open) return null;
    return (
        <>
        <div onClick={onClose} className={style.overlay}></div>
        <div
            onClick={(e) => {
              e.stopPropagation();
            }}
            className={style.modalContainer}
            >
            <div className={style.modal_in}>
                <form onSubmit={handleSubmit(onSubmit)} className={style.input}>
                    <input {...nameAddArticles} className={style.input_in} placeholder="Hashtag"/>
                    <input {...titleAddArticles} className={style.input_in} placeholder="Title"/>
                    <input {...contentAddArticles} className={style.input_in} placeholder="Tell your story..."/>
                    <button>Publish</button>
                </form>
            </div>
        </div>
      </>
    )
}

export default AddArticlesModule