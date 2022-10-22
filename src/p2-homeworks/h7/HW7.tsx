import React, {useState} from 'react'
import SuperSelect from './common/c5-SuperSelect/SuperSelect'
import SuperRadio from './common/c6-SuperRadio/SuperRadio'
import redus from "../h8/HW8.module.css";
import hw7 from '../h7/HW7.module.css'

const arr = ['x', 'y', 'z']

function HW7() {
    const [value, onChangeOption] = useState(arr[1])

    return (
        <>
            <span className={redus.wrap}>homeworks 7</span>
            <div className={hw7.block}>

                {/*should work (должно работать)*/}
                <div>
                    <SuperSelect
                        options={arr}
                        value={value}
                        onChangeOption={onChangeOption}
                    />
                </div>
                <div>
                    <SuperRadio
                        name={'radio'}
                        options={arr}
                        value={value}
                        onChangeOption={onChangeOption}
                    />
                </div>


                {/*для личного творчества, могу проверить*/}
                {/*<AlternativeSuperSelect/>*/}
                {/*<AlternativeSuperRadio/>*/}

            </div>
        </>

    )
}

export default HW7
