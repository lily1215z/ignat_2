import React, {useState} from 'react'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import clock from './HW9.module.css'
import redus from "../h8/HW8.module.css";

function Clock() {
    const [timerId, setTimerId] = useState<number>(0)
    const [date, setDate] = useState<Date>(new Date())

    const [show, setShow] = useState<boolean>(false)

    const stop = () => {
        clearInterval(timerId)
    }

    const start = () => {
        stop()
        const id: number = +setInterval(() => {
            setDate(new Date())
        }, 1000)
        setTimerId(id)
    }

    const onMouseEnter = () => {
        setShow(true)
    }
    const onMouseLeave = () => {
        setShow(false)
    }

    let hr = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();
    let num = date.getDate();
    let month = date.getMonth();
    let year = date.getFullYear();

    const stringTime = `${hr<10?'0'+hr:hr}:${min<10?'0'+min:min}:${sec < 10? '0' + sec: sec}`; // fix with date
    const stringDate = `${num<10?'0'+num:num}:${month<10?'0'+month:month}:${year<10?'0'+year:year}`;// fix with date
 // or
    // const stringTime = date.toLocaleTimeString()
    // const stringDate = date.toLocaleDateString()

    return (
        <div className={redus.wrap}>

            Homework 9

            <div className={clock.wrapper}>
                <div className={clock.inner}
                     onMouseEnter={onMouseEnter}
                     onMouseLeave={onMouseLeave}
                >
                    <div className={clock.time}>
                        {stringTime}
                    </div>

                    {show && (
                        <div className={clock.date}>
                            {stringDate}
                        </div>
                    )}
                </div>

                <div className={clock.btn}>
                    <SuperButton onClick={start}>start</SuperButton>
                    <SuperButton onClick={stop}>stop</SuperButton>
                </div>

            </div>
        </div>
    )
}

export default Clock
