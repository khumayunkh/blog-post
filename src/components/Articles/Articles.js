import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getArticlesThunk } from "../../store/articles/articlesReducer";
import style from './articles.module.css'
import loader from './../../loading/loader.gif'

function Articles(){
    const dispatch = useDispatch()
    const articles = useSelector(state => state.articles.articles)
    const {isLoading} = useSelector(state => state.articles)   

    useEffect(() => {
        dispatch(getArticlesThunk())
    },[])
    
    return(
        <>
       {isLoading == true ? <img className={style.loader} src={loader}/> : <div className={style.articles}>
            <div className={style.container}>
                {articles.map( item => <div key ={item.id} className={style.articles_in}>
                    <div className={style.article}>
                        <div className={style.header}>
                            <img className={style.logo} src="https://www.kindpng.com/picc/m/78-786207_user-avatar-png-user-avatar-icon-png-transparent.png"/>
                        </div>
                        <h2>{item.title}</h2>
                        <h3>{item.content}</h3>
                    </div>
                    <img className={style.img} src="https://miro.medium.com/fit/c/200/134/0*wB68mTt_u2fOx25F"/>
                </div>)}
            </div>
        </div>}
        </>
    )
}

export default Articles