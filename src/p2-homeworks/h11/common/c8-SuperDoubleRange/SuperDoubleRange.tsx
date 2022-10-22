import React from 'react'
import {Box, Slider} from "@mui/material";
import range from '../../range.module.css';

type SuperDoubleRangePropsType = {
    onChangeRange?: (value: [number, number]) => void
    value?: [number, number]
    value1: number
    // min, max, step, disable, ...
}

function valuetext(value: number) {
    return `${value}°C`;
}

const SuperDoubleRange: React.FC<SuperDoubleRangePropsType> = (
    {
        onChangeRange, value, value1,
        // min, max, step, disable, ...
    }
) => {
    const [value2, setValue2] = React.useState<number[]>([value1, 87]);

    const handleChange = (event: Event, newValue: number | number[]) => {
       setValue2(newValue as number[]);
    };

    // сделать самому, можно подключать библиотеки

    // return (
    //     <div>
    //         <Slider
    //             value={value}
    //             onChange={(e)=> onChangeRange(e.currentTarget.value)}
    //         />
    //     </div>
    // )



    return (
        <Box sx={{ width: 300 }}>
            <Slider
                getAriaLabel={() => 'Temperature range'}
                value={value2}
                // onChange={(e, newValue)=>setValue2([value1, newValue])}
                onChange={handleChange}
                valueLabelDisplay="auto"
                getAriaValueText={valuetext}
            />
            <div className={range.box_value}>
                <span>{value2[0]}</span>
                <span>{value2[1]}</span>
            </div>
        </Box>
    );

}

export default SuperDoubleRange
