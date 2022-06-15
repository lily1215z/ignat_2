const initState: stateType = {
    isLoading: false
}

export type stateType = {
    isLoading: boolean
}

export const loadingReducer = (state = initState, action: LoadActionType): stateType => { // fix any
    switch (action.type) {
        case 'LOAD': {
            return {...state, isLoading: action.payload};
        }
        default:
            return state
    }
}

type LoadActionType = {
    type: 'LOAD',
    payload: boolean
}

export const loadingAC = (b: boolean): LoadActionType => ({type: 'LOAD', payload: b}) // fix any