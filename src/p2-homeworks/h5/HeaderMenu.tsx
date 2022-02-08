import React, {useState} from 'react'
import {NavLink} from 'react-router-dom'
import s from './HeaderNav.module.css'
import {PATH} from './Routing'

type setActiveType = ((props: { isActive: boolean }) => string)

const HeaderMenu = () => {
    const setActive: setActiveType = ({isActive}) => isActive ? `${s.active}` : s.link
    const [menuActive, setMenuActive] = useState(false)

    return (
        <>
            <div className={s.push} onClick={() => setMenuActive(!menuActive)}>PUSH</div>
            {menuActive && <div className={s.nav}>
                    <NavLink to={PATH.PRE_JUNIOR} className={setActive}>prev-junior</NavLink>
                    <NavLink to={PATH.JUNIOR} className={setActive}>junior</NavLink>
                    <NavLink to={PATH.JUNIOR_PLUS} className={setActive}>junior-plus</NavLink>
            </div>}
        </>
    )
}

export default HeaderMenu
