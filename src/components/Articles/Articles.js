import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getArticlesThunk } from "../../store/articles/articlesReducer";
import style from './articles.module.css'
import loader from './../../loading/loader.gif'
import Pagination from "./Pagination/Pagination";

function Articles(){
    const dispatch = useDispatch()
    const {articles} = useSelector(state => state.articles)
    const {isLoading} = useSelector(state => state.articles) 
    const [currentPage,setCurrentPage] = useState(1)
    const [todosPerPage, setPostsPerPage] = useState(6)

    useEffect(() => {
        dispatch(getArticlesThunk())
    },[])       
    
    const indexOfLastPost = currentPage * todosPerPage;
    const indexOfFirstPost = indexOfLastPost - todosPerPage;
    const currentPosts = articles.slice(indexOfFirstPost, indexOfLastPost)
    
    const paginate = pageNumber => setCurrentPage(pageNumber)
    return(
        <>
       {isLoading == true ? <img className={style.loader} src={loader}/> : <div className={style.articles}>
            <div className={style.container}>
                {currentPosts.map( item => <div key ={item.id} className={style.articles_in}>
                    <div className={style.article}>
                        <div className={style.header}>
                            <img className={style.logo} src="https://www.kindpng.com/picc/m/78-786207_user-avatar-png-user-avatar-icon-png-transparent.png"/>
                        </div>
                        <h2>{item.title}</h2>
                        <h3>{item.content}</h3>
                    </div>
                    <img className={style.img} src="https://miro.medium.com/fit/c/200/134/0*wB68mTt_u2fOx25F"/>
                </div>)}
                <Pagination
             todosPerPage={todosPerPage} 
             totalTodos = {articles.length} 
             paginate={paginate}
            />
            </div>
        </div>}
        </>
    )
}

export default Articles