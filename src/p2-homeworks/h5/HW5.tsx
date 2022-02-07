import React from 'react'
import HeaderMenu from './HeaderMenu'
import Routing from './Routing'
import {HashRouter} from "react-router-dom";
import s from "./HeaderNav.module.css";

function HW5() {
    return (
        <div>
            {/*в gh-pages лучше работает HashRouter*/}
            <HashRouter>

                <HeaderMenu/>
                <Routing/>

            </HashRouter>
        </div>
    )
}

export default HW5
