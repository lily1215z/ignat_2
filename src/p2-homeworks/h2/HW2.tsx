import React, {useState} from 'react'
import Affairs from './Affairs'
import style from '../h1/Message.module.css'

// types
export type AffairPriorityType = 'high' | 'low' | 'middle'  //  + need to fix any
export type AffairType = {
    _id: number
    name: string
    priority: string
}                                        //  + need to fix any
export type FilterType = 'all' | AffairPriorityType

// constants
const defaultAffairs: Array<AffairType> = [ // +need to fix any
    {_id: 1, name: 'React', priority: 'high'},
    {_id: 2, name: 'anime', priority: 'low'},
    {_id: 3, name: 'games', priority: 'low'},
    {_id: 4, name: 'work', priority: 'high'},
    {_id: 5, name: 'html & css', priority: 'middle'},
]

// pure helper functions сЮДА ПРИХОДИТ МАССИВ И ФИЛЬТР КОТ БУДЕТ ЕГО ФИЛЬТРОВАТЬ
export const filterAffairs = (affairs: Array<AffairType>, filter: FilterType): Array<AffairType> => { // +need to fix any
    if (filter === 'high') {
        return affairs.filter(i=> i.priority === 'high')
    } else if (filter === 'low') {
        return affairs.filter(i=>i.priority === 'low')
    } else if (filter === 'middle') {
        return affairs.filter(i=>i.priority === 'middle')
    } else {      //else return // +need to fix
        return affairs
    }
}

//сюда приходит список дел и айди дела кот нужно удалить. И возвращаем массив дел без нужного.
// это  _id на которое кликнули, а  i._id это из массива
export const deleteAffair = (affairs: Array<AffairType>, _id: number): Array<AffairType> => { // +need to fix any
    return affairs.filter(i=> i._id !== _id)    // +need to fix
}

function HW2() {
    const [affairs, setAffairs] = useState<Array<AffairType>>(defaultAffairs) // +need to fix any
    const [filter, setFilter] = useState<FilterType>('all')

    //данная переменная отвечает за хранение отфильтрованного массива
    //если мы отфильтрованные массив сохраним в хуке то он пропадет, поэтому создаем временную переменную и дальше передаем в др компоненту
    const filteredAffairs = filterAffairs(affairs, filter)

    const deleteAffairCallback = (_id: number) => setAffairs(deleteAffair(affairs, _id)) // +need to fix any

    return (
        <div>
            <h1 className={style.title}>homeworks 2</h1>

            {/*should work (должно работать)*/}
            <Affairs
                data={filteredAffairs}
                setFilter={setFilter}
                deleteAffairCallback={deleteAffairCallback}
            />

            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeAffairs/>*/}

        </div>
    )
}

export default HW2
