import React from 'react'
import Message from "./Message";
import style from './Message.module.css'

const messageData = {
    avatar: 'https://i.pinimg.com/originals/9a/da/3b/9ada3bc305a1f45eab527f60da172d53.png',
    name: 'Artem',
    message: 'npm start нажимал?',
    time: '22:00',
}

function HW1() {
    console.log('hhh')
    return (
        <div>
            <h1 className={style.title}>homeworks 1</h1>

            {/*should work (должно работать)*/}

            <Message
                avatar={messageData.avatar}
                name={messageData.name}
                message={messageData.message}
                time={messageData.time}
            />

            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeMessage/>*/}

        </div>
    )
}

export default HW1;
