import * as React from 'react'
import { AppContext } from '../../store/context'
import { BannerResultado } from '../parcial/BannerResultado'


export const BannerContenedor: React.FC = ({

}) => {

    const { loadInitialState } = React.useContext(AppContext)

    React.useEffect(() => {
        loadInitialState()
    },[])

    return (
        <>
            <BannerResultado />
        </>
    )
}