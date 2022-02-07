import React, {useState} from 'react'
import { NavLink } from 'react-router-dom'
import s from './HeaderNav.module.css'

type setActiveType = ((props: {isActive: boolean}) => string)

const HeaderMenu = () => {
    const setActive: setActiveType = ({isActive}) => isActive ? `${s.active}` : s.link
    const [menuActive, setMenuActive] = useState(false)

    //закоментила в стилях св-во скрытия
    return (
        <>
            <div className={s.push} onClick={()=> setMenuActive(!menuActive)}>PUSH</div>
            <div className={menuActive ? `${s.nav_block} ${s.active_nav}` : `${s.nav}`}>
                <NavLink to={'/pre-junior'} className={setActive}>prev-junior</NavLink>
                <NavLink to={'/junior'} className={setActive}>junior</NavLink>
                <NavLink to={'/junior-plus'} className={setActive}>junior-plus</NavLink>
            </div>
        </>
    )
}

export default HeaderMenu
