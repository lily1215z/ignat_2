import React from 'react'
import Affair from './Affair'
import {AffairType, FilterType} from './HW2'
import affairs from './Affairs.module.css'
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";

type AffairsPropsType = { // +need to fix any
    data: Array<AffairType>
    setFilter: (filter: FilterType)=> void
    deleteAffairCallback: (_id: number)=> void
}

function Affairs(props: AffairsPropsType) {
    const mappedAffairs = props.data.map((a: AffairType) => (
        <Affair // should work
            key={a._id} // кеи ОБЯЗАТЕЛЬНЫ в 99% - так что лучше их писать всегда при создании компонент в мапе
            affair={a}
            deleteAffairCallback={props.deleteAffairCallback}
        />
    ))

    const setAll = () => {props.setFilter('all')} // +need to fix нужно вызвать функ кот прийдет из пропсов в setFilter и установить нужное значение
    const setHigh = () => {props.setFilter('high')}
    const setMiddle = () => {props.setFilter('middle')}
    const setLow = () => {props.setFilter('low')}

    return (
        <div className={affairs.inner}>
            {mappedAffairs}
            <div className={affairs.block}>
                {/*<button onClick={setAll} className={affairs.btn}>All</button>*/}
                {/*<button onClick={setHigh} className={affairs.btn}>High</button>*/}
                {/*<button onClick={setMiddle} className={affairs.btn}>Middle</button>*/}
                {/*<button onClick={setLow} className={affairs.btn}>Low</button>*/}
                <SuperButton onClick={setAll} className={affairs.btn}>All</SuperButton>
                <SuperButton onClick={setHigh} className={affairs.btn}>High</SuperButton>
                <SuperButton onClick={setMiddle} className={affairs.btn}>Middle</SuperButton>
                <SuperButton onClick={setLow} className={affairs.btn}>Low</SuperButton>
            </div>

        </div>
    )
}

export default Affairs
