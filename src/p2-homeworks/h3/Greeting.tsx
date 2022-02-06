import React, {ChangeEvent} from 'react'
import s from './Greeting.module.css'
import affair from "../h2/Affairs.module.css";
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";

type GreetingPropsType = {
    name: string // +need to fix any
    setNameCallback: (e: ChangeEvent<HTMLInputElement>) => void // +need to fix any
    addUser: () => void // +need to fix any
    error: string // +need to fix any
    totalUsers: number // +need to fix any
    onKeyPressAddTask: (e: any) => void
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, addUser, error, totalUsers, onKeyPressAddTask} // деструктуризация пропсов
) => {
    //const inputClass = s.error ? s.redClass : '';       // +need to fix with (?:)
    const inputClass = error ? s.error : s.alloOk

    return (
        <div className={s.box}>
            <div className={s.inner}>
                <input
                    value={name}
                    onChange={setNameCallback}
                    className={inputClass}
                    onKeyPress={onKeyPressAddTask}
                />
                {/*<button onClick={addUser} className={affair.btn}>add</button>*/}
                <SuperButton onClick={addUser} className={affair.btn}>add</SuperButton>
                <span className={s.num}>{totalUsers}</span>
            </div>
            <div className={s.errMessage}>{error}</div>
        </div>
    )
}

export default Greeting
