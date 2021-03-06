export enum ActionReducer {
    LOAD_INITIAL_STATE = "[BANNER]: LOAD_INITIAL_STATE",
    SET_IS_LOADING= "[BANNER]: SHOW_LOADER",
    SET_BANNERS = "[BANNER]: SET_BANNERS",
    SET_USUARIOSREGISTRADOS = "[BANNER]: SET_USUARIOSREGISTRADOS",
    SET_CUMPLEANIOS = "[BANNER]: SET_CUMPLEANIOS",
    SET_CUMPLEANIOSNEXT = "[BANNER]: SET_CUMPLEANIOSNEXT",
    SET_ANIVERSARIOS = "[BANNER]: SET_ANIVERSARIOS",
    SET_FERIADOS = "[BANNER]: SET_FERIADOS",
}

export interface IAction {
    type: ActionReducer,
    payload: any
}