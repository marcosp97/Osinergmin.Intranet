import { IFileInfo } from "@pnp/sp/files"
import { ActionReducer, IAction } from "./action"

export interface IState {
    ui: {
        isLoading: boolean
    }
    usuarioActual: UsuarioBE
    banners: BannerVM[]
    usuariosRegistrados: UsuarioRegistradoVM[]
    aniversarios: FestividadVM[]
    cumpleanios: FestividadVM[]
    cumpleaniosnext: FestividadVM[]
    feriados: FestividadVM[]
}

export const InitialState: IState = {
    ui: {
        isLoading: false
    },
    usuarioActual: {},
    banners: [],
    usuariosRegistrados: [],
    aniversarios: [],
    cumpleanios: [],
    feriados: [],
    cumpleaniosnext: []
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
        case ActionReducer.SET_USUARIOSREGISTRADOS:
            return {
                ...state,
                usuariosRegistrados: action.payload
            }
        case ActionReducer.SET_ANIVERSARIOS:
            return {
                ...state,
                aniversarios: action.payload
            }
        case ActionReducer.SET_CUMPLEANIOS:
            return {
                ...state,
                cumpleanios: action.payload
            }
        case ActionReducer.SET_CUMPLEANIOSNEXT:
            return {
                ...state,
                cumpleaniosnext: action.payload
            }
        case ActionReducer.SET_FERIADOS:
            return {
                ...state,
                feriados: action.payload
            }
        default:
            return state
    }
}