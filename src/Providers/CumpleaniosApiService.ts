import { SPFI } from "@pnp/sp"
import { CumpleaniosBL } from "../BusinessLogic/CumpleaniosBL"
import { FeriadoBL } from "../BusinessLogic/FeriadoBL"

const getAll = async(sp: SPFI, obj: FestividadVM): Promise<FestividadVM[]> => {
    return await CumpleaniosBL.getAll(sp, obj)
}

const getAllCamlQuery = async(sp: SPFI, QueryCaml: string): Promise<FestividadVM[]> => {
    return await CumpleaniosBL.getAllCamlQuery(sp, QueryCaml)
}

export const CumpleaniosApiService = {
    getAll,
    getAllCamlQuery
}