import { SPFI } from '@pnp/sp';
import * as React from 'react'
import Loader from '../../../Controls/loader/loader';
import { UsuarioApiService } from '../../../Providers/UsuarioApiService';
import { ActionReducer, IAction } from './action';

import { InitialState, IState, Reducer } from "./reducer";

export interface IAppContext {
    state: IState
    dispatch: React.Dispatch<any>
    loadInitialState: () => Promise<void>
    ui: {
        showLoading: () => void
        hideLoading: () => void
    },
    sp: SPFI
}

export const AppContext = React.createContext<IAppContext>({
    state: InitialState,
    dispatch: (_: IAction) => null,
    loadInitialState: () => null,
    ui: {
        showLoading: () => null,
        hideLoading: () => null
    },
    sp: null
})

export interface IAppProviderProps {
    sp: SPFI
}

export const AppProvider: React.FC<IAppProviderProps> = ({
    sp,
    children
}) => {
    const [state, dispatch ] = React.useReducer(Reducer, InitialState)
    
    const ui = {
        showLoading: () => {
            dispatch({ type: ActionReducer.SET_IS_LOADING, payload: true })
        },
        hideLoading: () => {
            dispatch({ type: ActionReducer.SET_IS_LOADING, payload: false })
        }
    }

    const loadInitialState = async () => {
        ui.showLoading()
        
        const [
            usuarioActual, 
        ] = await Promise.all([
            UsuarioApiService.Logeado(sp)
        ])

        dispatch({
            type: ActionReducer.LOAD_INITIAL_STATE,
            payload: {
                usuarioActual: usuarioActual
            }
        })

        ui.hideLoading()
    }


    return (
        <AppContext.Provider
            value={{
                state,
                dispatch,
                loadInitialState,
                ui,
                sp
            }}
        >
            {children}
            <Loader show={state.ui.isLoading} />
        </AppContext.Provider>
    )
}