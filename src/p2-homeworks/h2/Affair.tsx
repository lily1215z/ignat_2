import React from 'react'
import {AffairType} from "./HW2";
import affair from './Affairs.module.css'
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";

type AffairPropsType = {
    // key не нужно типизировать
    affair: AffairType // +need to fix any типизировать одно дело
    deleteAffairCallback: (_id: number)=> void // +need to fix any
}

function Affair(props: AffairPropsType) {
    //нужно из пропсов достать функцию и передать айди  чтоб оно удалилось
    const deleteCallback = () => {props.deleteAffairCallback(props.affair._id)}   // +need to fix

    return (
        <div className={affair.box}>
            <div className={affair.name}>{props.affair.name}</div>
            <div className={affair.priority}>{props.affair.priority}</div>
            <SuperButton onClick={deleteCallback} className={affair.btn}>x</SuperButton>
        </div>
    )
}

export default Affair
