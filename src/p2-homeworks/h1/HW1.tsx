import React from 'react'
import Message from "./Message";
import style from './Message.module.css'

const messageData = {
    avatar: 'https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg',
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
