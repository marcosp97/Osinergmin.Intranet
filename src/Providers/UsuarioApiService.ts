import { SPFI } from "@pnp/sp"
import { UsuarioBL } from "../BusinessLogic/UsuarioBL"

const Logeado = async(sp: SPFI): Promise<UsuarioBE> => {
    return await UsuarioBL.Logeado(sp)
}

export const UsuarioApiService = {
    Logeado
}