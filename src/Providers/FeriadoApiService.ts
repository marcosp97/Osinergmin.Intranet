import { SPFI } from "@pnp/sp"
import { FeriadoBL } from "../BusinessLogic/FeriadoBL"

const getAll = async(sp: SPFI, obj: FestividadVM): Promise<FestividadVM[]> => {
    return await FeriadoBL.getAll(sp, obj)
}

const getAllCamlQuery = async(sp: SPFI, QueryCaml: string): Promise<FestividadVM[]> => {
    return await FeriadoBL.getAllCamlQuery(sp, QueryCaml)
}

export const FeriadoApiService = {
    getAll,
    getAllCamlQuery
}