import { SPFI } from "@pnp/sp"
import { UsuarioDA } from "../DataAccess/UsuarioDA"

const Logeado = async(sp: SPFI): Promise<UsuarioBE> => {
    return await UsuarioDA.Logeado(sp)
}

export const UsuarioBL = {
    Logeado
}