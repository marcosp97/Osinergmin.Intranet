import { SPFI } from "@pnp/sp"
import { IFileInfo } from "@pnp/sp/files"
import { UsuarioRegistradoBL } from "../BusinessLogic/UsuarioRegistradoBL"

const getAll = async(sp: SPFI, obj: UsuarioRegistradoVM): Promise<UsuarioRegistradoVM[]> => {
    return await UsuarioRegistradoBL.getAll(sp, obj)
}

const getAllCamlQuery = async(sp: SPFI, QueryCaml: string): Promise<UsuarioRegistradoVM[]> => {
    return await UsuarioRegistradoBL.getAllCamlQuery(sp, QueryCaml)
}

export const UsuarioRegistradoApiService = {
    getAll,
    getAllCamlQuery
}