import React from "react";


const Pagination =({todosPerPage, totalTodos, paginate})=>{
    const pageNumber = [];

    for(let i = 1; i<=Math.ceil(totalTodos/todosPerPage); i++){
        pageNumber.push(i)
    }

    return(
    <>
    <div >
        <div >
        {pageNumber.map(number => (
                    <button key={number} onClick={() => paginate(number)} >
                        {number}                 
                     </button>
            ))}
        </div>
    </div>
    </>
    )
}

export default Pagination