import React from "react";
import style from './add.module.css'

function AddArticlesModule({ open, onClose }){
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
            <div className={style.modalRight}>
             <div className={style.btnContainer}>
                <button className={style.btnOutline}>
                  <span className={style.bold}>NO</span>, thanks
                </button>
              </div>
            </div>
        </div>
      </>
    )
}

export default AddArticlesModule