import React from "react";
import style from './add.module.css'

function AddArticles(){
    return(
        <>
        <div className={style.add}>
            <div className={style.container}>
                <div className={style.add_in}>
                    <div className={style.input}>
                        <input placeholder="Tell your story..."/>
                        <button>Publish</button>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default AddArticles