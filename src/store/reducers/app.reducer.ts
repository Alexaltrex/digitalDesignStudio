import {BaseThunkType, GetActionsType, StateType} from "../store";
import {ISendBrief, ISendEmail, mailAPI} from "../../api/mail.api";

//================ TYPE ==================
export type InitialStateType = typeof initialState;
export type AppActionsType = GetActionsType<typeof appAC>
type ThunkType = BaseThunkType<AppActionsType>

export interface IShowModal {
    show: boolean
    type: string // 'on submit', 'buy website', 'how much is'
}


//================ INITIAL ==================
const initialState = {
    theme: "light2",
    themeType: "light",
    lang: "eng",
    showModal: {
        show: false,
        type: '',
    } as IShowModal,

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
        case 'DDS/APP/SET_SHOW_MODAL': {
            return {...state, showModal: action.showModal}
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
    setShowModal: (showModal: IShowModal) => ({type: 'DDS/APP/SET_SHOW_MODAL', showModal} as const),
}
//================ THUNK CREATORS ==================
//================ SEND EMAIL ==================
export const sendEmail = (data: ISendEmail): ThunkType => async (dispatch) => {
    try {
        await mailAPI.sendEmail(data);
    } catch (e: any) {
        console.error(e.message);
        console.error(e.stack);
    } finally {

    }
}
//================ SEND BRIEF ==================
export const sendBrief = (data: ISendBrief): ThunkType => async (dispatch) => {
    try {
        await mailAPI.sendBrief(data);
    } catch (e: any) {
        console.error(e.message);
        console.error(e.stack);
    } finally {

    }
}

//============== SELECTORS =================
export const selectTheme = (state: StateType) => state.app.theme;
export const selectThemeType = (state: StateType) => state.app.themeType;
export const selectLang = (state: StateType) => state.app.lang;
export const selectShowModal = (state: StateType) => state.app.showModal;