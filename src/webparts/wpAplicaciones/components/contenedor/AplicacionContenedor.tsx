import * as React from 'react'
import { AppContext } from '../../store/context'
import { AplicacionResultado } from '../parcial/AplicacionResultado'


export const AplicacionContenedor: React.FC = ({

}) => {

    const { loadInitialState } = React.useContext(AppContext)

    React.useEffect(() => {
        loadInitialState()
    },[])

    return (
        <>
            <AplicacionResultado />
        </>
    )
}