import React from 'react'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import load from './HW10.module.css'
import redus from "../h8/HW8.module.css";
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "./bll/store";
import {loadingAC} from "./bll/loadingReducer";

function HW10() {
    const dispatch = useDispatch();
    const loading = useSelector<AppStoreType, boolean>(state => state.loading.isLoading)

    const setLoading = () => {
        dispatch(loadingAC(true))

        setTimeout(() => {
            dispatch(loadingAC(false))
        }, 2000)
    };

    return (
        <div className={redus.wrap}>

            homeworks 10

      <div className={load.block}>
          {loading
              ? (
                  <div className={load.loading}></div>
              ) : (
                  <div>
                      <SuperButton onClick={setLoading} className={load.btn}>set loading...</SuperButton>
                  </div>
              )
          }
      </div>


            {/*для личного творчества, могу проверить*/}
            {/*<Alternative/>*/}

        </div>
    )
}

export default HW10
