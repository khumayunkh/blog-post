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
        <img src='' alt='/' />
        <div className={style.modalRight}>
          <p className={style.closeBtn} onClick={onClose}>
            X
          </p>
          <div className={style.content}>
            <p>Do you want a</p>
            <h1>$20 CREDIT</h1>
            <p>for your first tade?</p>
          </div>
          <div className={style.btnContainer}>
            <button className={style.btnPrimary}>
              <span className={style.bold}>YES</span>, I love NFT's
            </button>
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