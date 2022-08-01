import React from "react";
import { useSelector } from "react-redux";
import style from './articles.module.css'


function Articles(){
    const {isAuth} = useSelector(state => state.auth)

    return(
        <>
       {isAuth === true ? <div className={style.articles}>
            <div className={style.container}>
                <div className={style.articles_in}>
                    <div className={style.article}>
                        <div className={style.header}>
                            <img className={style.logo} src="https://www.kindpng.com/picc/m/78-786207_user-avatar-png-user-avatar-icon-png-transparent.png"/>
                            <h4>Humoyun</h4>
                        </div>
                        <h2>Why Your Favorite Foods Taste So Good</h2>
                        <h3>How do we decide what we like to eat?</h3>
                    </div>
                    <img className={style.img} src="https://miro.medium.com/fit/c/200/134/0*wB68mTt_u2fOx25F"/>
                </div>
                <div className={style.articles_in}>
                    <div className={style.article}>
                        <div className={style.header}>
                            <img className={style.logo} src="https://www.kindpng.com/picc/m/78-786207_user-avatar-png-user-avatar-icon-png-transparent.png"/>
                            <h4>Humoyun</h4>
                        </div>
                        <h2>Webb reminds us: Cooperative science can solve big problems</h2>
                        <h3>Every successful venture in space is a hard won highly impressive technical achievement, 
                            but the James Webb Space Telescope and...</h3>
                    </div>
                    <img className={style.img} src="https://miro.medium.com/fit/c/200/134/0*XmMNUo4QNJRJK6B9.png"/>
                </div>
                <div className={style.articles_in}>
                    <div className={style.article}>
                        <div className={style.header}>
                            <img className={style.logo} src="https://www.kindpng.com/picc/m/78-786207_user-avatar-png-user-avatar-icon-png-transparent.png"/>
                            <h4>Humoyun</h4>
                        </div>
                        <h2>My Psilocybin Trip</h2>
                        <h3>A journey in releasing expectations</h3>
                    </div>
                    <img className={style.img} src="https://miro.medium.com/fit/c/200/134/1*W5UR95yfESlXgCJXMFiYfg.jpeg"/>
                </div>
                <div className={style.articles_in}>
                    <div className={style.article}>
                        <div className={style.header}>
                            <img className={style.logo} src="https://www.kindpng.com/picc/m/78-786207_user-avatar-png-user-avatar-icon-png-transparent.png"/>
                            <h4>Humoyun</h4>
                        </div>
                        <h2>Eugenics and the American Religion of Wellness</h2>
                        <h3>‘Do you really want to be perfectly well?’ So begins a tantalizing advert in 
                            Good Health magazine in 1905. It invited the reader to </h3>
                    </div>
                    <img className={style.img} src="https://miro.medium.com/fit/c/200/134/0*I8Yj75JHSUz6jd48"/>
                </div>
                <div className={style.articles_in}>
                    <div className={style.article}>
                        <div className={style.header}>
                            <img className={style.logo} src="https://www.kindpng.com/picc/m/78-786207_user-avatar-png-user-avatar-icon-png-transparent.png"/>
                            <h4>Humoyun</h4>
                        </div>
                        <h2>the monkeypox chronicles.</h2>
                        <h3>or, how i told everyone i knew about monkeypox and then literally contracted it.</h3>
                    </div>
                    <img className={style.img} src="https://miro.medium.com/fit/c/200/134/1*b-8-vZ5CvvZ8jHGdkm9KFw.jpeg"/>
                </div>
            </div>
        </div> : <></>}
        </>
    )
}


export default Articles