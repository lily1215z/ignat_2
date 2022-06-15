import React, {useState} from 'react'
import SuperEditableSpan from './common/c4-SuperEditableSpan/SuperEditableSpan'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import {restoreState, saveState} from './localStorage/localStorage'
import s from '../h1/Message.module.css'

function HW6() {
    const [value, setValue] = useState<string>('')

    const save = () => {
        saveState<string>('editable-span-value', value)
    }
    const restore = () => {
        setValue(restoreState<string>('editable-span-value', ''))
    }

    return (
        <div>
            <h2 className={s.title}>homeworks 6</h2>

            {/*should work (должно работать)*/}
           <div className='block-hw'>
               <div>
                   <SuperEditableSpan
                       value={value}
                       onChangeText={setValue}
                       spanProps={{children: value ? undefined : 'enter text...'}}
                   />
               </div>
               <SuperButton onClick={save}>save</SuperButton>
               <SuperButton onClick={restore}>restore</SuperButton>
           </div>


            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeSuperEditableSpan/>*/}

        </div>
    )
}

export default HW6
