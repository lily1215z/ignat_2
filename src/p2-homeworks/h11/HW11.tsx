import React, {useState} from 'react'
import SuperRange from './common/c7-SuperRange/SuperRange'
import SuperDoubleRange from './common/c8-SuperDoubleRange/SuperDoubleRange'
import redus from '../h8/HW8.module.css';
import hw11 from '../h11/range.module.css'

function HW11() {
    const [value1, setValue1] = useState<number>(25)
    // const [value2, setValue2] = useState<Array<number>>([0, 100])
    // const [value2, setValue2] = React.useState<number[]>([20, 37]);

    // const updateRange = (value: [e: any, value2: any]) => {
    //     setValue2(value2)
    // }

    return (
        <div className={redus.wrap}>
            homeworks 11

            {/*should work (должно работать)*/}
            <div className={hw11.box}>

                <div className={hw11.super_range}>
                    <span>{value1}</span>
                    <SuperRange
                        onChangeRange={(value1) => setValue1(value1)}
                        // сделать так чтоб value1 изменялось
                    />
                </div>

                <div>
                    {/*<span>{value1}</span>*/}
                    <SuperDoubleRange
                        value1={value1}
                        // value={value2}
                        // onChangeRange={handleChange}
                        // сделать так чтоб value1 и value2 изменялось
                    />
                    {/*<span>{value2[1]}</span>*/}
                </div>
            </div>

        </div>
    )
}

export default HW11

