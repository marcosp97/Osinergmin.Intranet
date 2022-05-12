import { IFileInfo } from "@pnp/sp/files"
import { ActionReducer, IAction } from "./action"

export interface IState {
    ui: {
        isLoading: boolean
    }
    usuarioActual: UsuarioBE
    banners: BannerVM[]
}

export const InitialState: IState = {
    ui: {
        isLoading: false
    },
    usuarioActual: {},
    banners: []
}

export const Reducer = (state: IState, action: IAction): IState => {
    switch (action.type) {
        case ActionReducer.LOAD_INITIAL_STATE:
            const {
                usuarioActual,
                ui
            } = action.payload as IState
            return {
                ...state,
                ui: {
                    ...state.ui,
                    ...ui
                },
                usuarioActual
            }
        case ActionReducer.SET_IS_LOADING:
            return {
                ...state,
                ui: {
                    ...state.ui,
                    isLoading: action.payload
                }
            }
        case ActionReducer.SET_BANNERS:
            return {
                ...state,
                banners: action.payload
            }
        default:
            return state
    }
}