
const initState = {
    themes: ['default', 'dark', 'red']
    // themes: 'default'
};
export type themeStateType = typeof initState

export const themeReducer = (state: themeStateType = initState, action: themeActionType): themeStateType => { // fix any
    switch (action.type) {
        case "CHANGE-THEME": {
            return {...state, themes: action.theme};
        }
        default: return state;
    }
};

// export const changeThemeAC = (theme: string): any => ({type: 'CHANGE-THEME', theme} as const); // fix any

export const changeThemeAC = (theme: string[]) => {
    return {type: 'CHANGE-THEME', theme} as const
}

type themeActionType = ReturnType<typeof changeThemeAC>