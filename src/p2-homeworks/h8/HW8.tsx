import React, {useState} from 'react'
import {homeWorkReducer} from './bll/homeWorkReducer'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import redus from '../h8/HW8.module.css'

export type UserType = {
    _id: number
    name: string
    age: number
}

const initialPeople: Array<UserType> = [
    {_id: 0, name: 'Кот', age: 3},
    {_id: 1, name: 'Александр', age: 66},
    {_id: 2, name: 'Коля', age: 16},
    {_id: 3, name: 'Виктор', age: 44},
    {_id: 4, name: 'Дмитрий', age: 40},
    {_id: 5, name: 'Ирина', age: 55},
]

function HW8() {
    const [people, setPeople] = useState<Array<UserType>>(initialPeople) // need to fix any

    // need to fix any
    const finalPeople = people.map((p: UserType) => (
        <div key={p._id} className={redus.list}>
            <span>{p.name}</span>
            <span className={redus.age}>{p.age}</span>
        </div>
    ))

    const sortUp = () => setPeople(homeWorkReducer(initialPeople, {type: 'sort', payload: 'up'}))
    const sortDown = () => setPeople(homeWorkReducer(initialPeople, {type: 'sort', payload: 'down'}))
    const check18 = () => setPeople(homeWorkReducer(initialPeople, {type: 'check', payload: 18}))

    return (
        <div className={redus.wrap}>

            Homeworks 8

            {/*should work (должно работать)*/}
         <div className={redus.inner}>
             <div className={redus.block}>
                 {finalPeople}
             </div>

             <div className={redus.box_btn}>
                 <div className={redus.btn}><SuperButton onClick={sortUp}>sort up</SuperButton></div>
                 <div className={redus.btn}><SuperButton onClick={sortDown}>sort down</SuperButton></div>
                 <div className={redus.btn}><SuperButton onClick={check18}>check 18</SuperButton></div>
             </div>
         </div>

            {/*для личного творчества, могу проверить*/}
            {/*<AlternativePeople/>*/}

        </div>
    )
}

export default HW8
