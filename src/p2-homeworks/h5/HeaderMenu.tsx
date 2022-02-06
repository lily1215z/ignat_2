import React from 'react'
import { NavLink } from 'react-router-dom'
import s from './HeaderNav.module.css'

// type FuncType = {
//     setActive: boolean
// }

function HeaderMenu() {
    const setActive = ({isActive}: any) => isActive ? s.active : ''
    return (
        <div>
            <NavLink to={'/pre-junior'} className={setActive}>prev-junior</NavLink>
            <NavLink to={'/junior'} className={setActive}>junior</NavLink>
            <NavLink to={'/junior-plus'} className={setActive}>junior-plus</NavLink>
        </div>
    )
}

export default HeaderMenu
