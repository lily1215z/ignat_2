import React from 'react'
import s from '../HeaderNav.module.css'
import smile from '../404.png'

function Error404() {
    return (
        <div>

            <div className={s.box}>
                <span className={s.num}>4</span>
                <img src={smile}/>
                <span className={s.num}>4</span>
                <div className={s.not_found}>Page not found!</div>
            </div>

        </div>
    )
}

export default Error404
