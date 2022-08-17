import React from "react";
import style from './add.module.css'

function AddArticlesModule({active, setActive}){
    return(
        <div className={active ? style.modal.active : style.modal} onClick={()=> setActive(false)}>
            <div className={style.modal_content} onClick={e => e.stopPropagation()}>
                
            </div>
        </div>
    )
}

export default AddArticlesModule