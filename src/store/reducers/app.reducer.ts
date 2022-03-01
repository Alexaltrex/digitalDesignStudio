import {GetActionsType, StateType} from "../store";

//================ TYPE ==================
export type InitialStateType = typeof initialState;
export type AppActionsType = GetActionsType<typeof appAC>
//type ThunkType = BaseThunkType<AppActionsType>

//================ INITIAL ==================
const initialState = {
    theme: "light2",
    themeType: "light",
    lang: "eng",
};

//================ REDUCER ===================
export const appReducer = (state = initialState, action: AppActionsType): InitialStateType => {
    switch (action.type) {
        case 'DDS/APP/SET_THEME': {
            return {...state, theme: action.theme}
        }
        case 'DDS/APP/SET_THEME_TYPE': {
            return {...state, themeType: action.themeType}
        }
        case 'DDS/APP/SET_LANG': {
            return {...state, lang: action.lang}
        }
        default:
            return state;
    }
};

// ================ ACTION CREATORS =================
export const appAC = {
    setTheme: (theme: string) => ({type: 'DDS/APP/SET_THEME', theme} as const),
    setThemeType: (themeType: string) => ({type: 'DDS/APP/SET_THEME_TYPE', themeType} as const),
    setLang: (lang: string) => ({type: 'DDS/APP/SET_LANG', lang} as const),
}
//================ THUNK CREATORS ==================

//============== SELECTORS =================
export const selectTheme = (state: StateType) => state.app.theme;
export const selectThemeType = (state: StateType) => state.app.themeType;
export const selectLang = (state: StateType) => state.app.lang;
