export enum ActionReducer {
    LOAD_INITIAL_STATE = "[APLICACION]: LOAD_INITIAL_STATE",
    SET_IS_LOADING= "[APLICACION]: SHOW_LOADER",
    SET_APLICACIONES = "[APLICACION]: SET_APLICACIONES",
}

export interface IAction {
    type: ActionReducer,
    payload: any
}