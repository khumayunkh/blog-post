import React from "react";
import style from './add.module.css'

function AddArticles(){
    return(
        <>
        <div className={style.add}>
            <div className={style.container}>
                <div className={style.add_in}>
                    <div className={style.input}>
                        <input placeholder="Text..."/>
                        <button>Post</button>
                    </div>
                    <div className={style.article}>
                        <h2>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
                        </h2>
                    </div>
                    <div className={style.article}>
                        <h2>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
                        </h2>
                    </div>
                    <div className={style.article}>
                        <h2>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
                        </h2>
                    </div>
                    <div className={style.article}>
                        <h2>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
                        </h2>
                    </div>
                    <div className={style.article}>
                        <h2>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
                        </h2>
                    </div>
                    <div className={style.article}>
                        <h2>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
                        </h2>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default AddArticles