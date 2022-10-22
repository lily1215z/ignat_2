import React from 'react';
import s from './HW12.module.css';
import SuperSelect from '../h7/common/c5-SuperSelect/SuperSelect';
import {useDispatch, useSelector} from 'react-redux';
import {AppStoreType} from '../h10/bll/store';
import {changeThemeAC} from './bll/themeReducer';
import redus from '../h8/HW8.module.css';

const themes = ['default', 'dark', 'red'];

function HW12() {
    const theme = 'default'; // useSelector
    const selectTheme = useSelector<AppStoreType, string[]>(state => state.theme.themes)

    const dispatch = useDispatch()

    const onChangeCallback = () => {
        dispatch(changeThemeAC(selectTheme))
    }

    return (
        <div className={redus.wrap}>
            homeworks 12
            <div className={`${s[theme]} ${s.box}`}>

                {/*<span className={s[theme + '-text']}>homeworks 12</span>*/}

                {/*should work (должно работать)*/}
                {/*SuperSelect or SuperRadio*/}
                <SuperSelect
                    options={selectTheme}
                    value={selectTheme[1]}
                    onChangeOption={onChangeCallback}/>
            </div>
        </div>

    );
}

export default HW12;
