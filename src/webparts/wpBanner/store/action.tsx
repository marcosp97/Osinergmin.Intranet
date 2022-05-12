export enum ActionReducer {
    LOAD_INITIAL_STATE = "[BANNER]: LOAD_INITIAL_STATE",
    SET_IS_LOADING= "[BANNER]: SHOW_LOADER",
    SET_BANNERS = "[BANNER]: SET_BANNERS",
}

export interface IAction {
    type: ActionReducer,
    payload: any
}