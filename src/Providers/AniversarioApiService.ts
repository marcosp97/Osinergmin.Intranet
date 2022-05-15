import { SPFI } from "@pnp/sp"
import { AniversarioBL } from "../BusinessLogic/AniversarioBL"
import { FeriadoBL } from "../BusinessLogic/FeriadoBL"

const getAll = async(sp: SPFI, obj: FestividadVM): Promise<FestividadVM[]> => {
    return await AniversarioBL.getAll(sp, obj)
}

const getAllCamlQuery = async(sp: SPFI, QueryCaml: string): Promise<FestividadVM[]> => {
    return await AniversarioBL.getAllCamlQuery(sp, QueryCaml)
}

export const AniversarioApiService = {
    getAll,
    getAllCamlQuery
}