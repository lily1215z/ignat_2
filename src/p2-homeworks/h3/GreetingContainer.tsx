import React, {ChangeEvent, useState} from 'react'
import Greeting from './Greeting'
import {UserType} from "./HW3";

type GreetingContainerPropsType = {
    users: Array<UserType> // +need to fix any
    addUserCallback: (name: string) => void // +need to fix any
}

// более простой и понятный для новичков
// function GreetingContainer(props: GreetingPropsType) {

// более современный и удобный для про :)
// уровень локальной логики/ Здесь удем хранить значение инпута в useState для React
const GreetingContainer: React.FC<GreetingContainerPropsType> = ({users, addUserCallback}) => { // деструктуризация пропсов
    const [name, setName] = useState<string>('') // +?need to fix any
    const [error, setError] = useState<string>('') // +?need to fix any - хранилище для ошибки


    const setNameCallback = (e: ChangeEvent<HTMLInputElement>) => { // +need to fix any- делаем проверку. если имя ок то пропускаем. если нет то ошибка
        setName(e.currentTarget.value) // +need to fix
    }
    const addUser = () => {
        if(name.trim().length > 2) {
            addUserCallback(name)      //это связь между хуком куда записываем всех пользователей и введенного значение инпута
            alert(`Hello  ${name}!`)       // +need to fix
            setName('')              //очищаю инпут
            setError('')            //очищаю ошибку
        } else {
            setError('Something went wrong - write correct name')
            alert('Write the name more than 2 characters')
            setName('')
        }
    }

    const onKeyPressAddTask = (e: any) => {
        e.key === 'Enter' && addUser()
    }

    const totalUsers = users.length // +need to fix

    return (
        <Greeting
            name={name}
            setNameCallback={setNameCallback}
            addUser={addUser}
            error={error}
            totalUsers={totalUsers}
            onKeyPressAddTask={onKeyPressAddTask}
        />
    )
}

export default GreetingContainer
