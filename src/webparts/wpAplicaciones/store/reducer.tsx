import { IFileInfo } from "@pnp/sp/files"
import { ActionReducer, IAction } from "./action"

export interface IState {
    ui: {
        isLoading: boolean
    }
    usuarioActual: UsuarioBE
    aplicaciones: AplicacionesDinamicoVM[]
}

export const InitialState: IState = {
    ui: {
        isLoading: false
    },
    usuarioActual: {},
    aplicaciones: []
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
        case ActionReducer.SET_APLICACIONES:
            return {
                ...state,
                aplicaciones: action.payload
            }
        default:
            return state
    }
}