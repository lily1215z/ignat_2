import React from 'react';
import style from './Message.module.css';


type MessageTypeProps = {
    avatar: string,
    name: string,
    message: string,
    time: string
}
const Message: React.FC<MessageTypeProps> = ({avatar, name, message, time}) => {
    return (
        <div className={style.block}>
            <div className={style.box_img}>
                <img className={style.img} src={avatar} />
            </div>
            <div className={style.inner}>
                <h3 className={style.name}>{name}</h3>
                <p className={style.mes}>{message}</p>
                <span className={style.time}>{time}</span>
            </div>
        </div>
    )
}

export default Message;
