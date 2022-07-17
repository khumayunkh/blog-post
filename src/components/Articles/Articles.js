import React from "react";
import style from './articles.module.css'


function Articles(){
    return(
        <>
        <div className={style.articles}>
            <div className={style.container}>
                <div className={style.articles_in}>
                    <div className={style.article}>
                        <div className={style.header}>
                            <img src="https://www.kindpng.com/picc/m/78-786207_user-avatar-png-user-avatar-icon-png-transparent.png"/>
                            <h4>Humoyun</h4>
                        </div>
                        <h2>Why Your Favorite Foods Taste So Good</h2>
                        <h3>How do we decide what we like to eat?</h3>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}


export default Articles