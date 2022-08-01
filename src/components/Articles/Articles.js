import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getArticlesThunk } from "../../store/articles/articlesReducer";
import style from './articles.module.css'


function Articles(){
    const dispatch = useDispatch()
    const {isAuth} = useSelector(state => state.auth)
    const articles = useSelector(state => state.articles.articles)
    
    useEffect(() => {
        dispatch(getArticlesThunk())
    },[])
    
    return(
       <div className={style.articles}>
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
        </div>
    )
}

export default Articles