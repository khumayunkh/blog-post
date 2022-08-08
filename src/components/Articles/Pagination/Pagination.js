import React from "react";
import style from './pagination.module.css' 

const Pagination =({todosPerPage, totalTodos, paginate})=>{
    const pageNumber = [];

    for(let i = 1; i<=Math.ceil(totalTodos/todosPerPage); i++){
        pageNumber.push(i)
    }
    
    return(
    <>
    <div className={style.pagination} >
        <div className={style.pagination_in} >
            {pageNumber.map(number => (
                <button key={number} className={style.pagination_btn} 
                    onClick={() => paginate(number)} >
                    {number}                 
                </button>
            ))}
        </div>
    </div>
    </>
    )
}

export default Pagination