import { SPFI } from "@pnp/sp"
import { AniversarioDA } from "../DataAccess/AniversarioDA"
import { FeriadoDA } from "../DataAccess/FeriadoDA"
import { getLocalISOTime } from "../Helper/DateHelper"
import { BuildQuery, Eq, Ge, Le } from "../Helper/FilterOperator"

export const buildQueryGetAll = (filterValues: FestividadVM) => {
    let logicals = [
		filterValues?.Id && Eq('Id', filterValues?.Id),
        filterValues?.DiaCumpleanios && Eq('DiaCumpleanios', getLocalISOTime(filterValues?.DiaCumpleanios)),
        filterValues?.MesCumpleanios && Eq('MesCumpleanios', filterValues?.MesCumpleanios),
        filterValues?.Title && Eq('Title', filterValues?.Title),
	]
	return BuildQuery({ parameters: logicals, operator: 'and' })
}


const getAll = (sp: SPFI, obj: FestividadVM): Promise<FestividadVM[]> => {
    const QP: IQueryParams = {
		select: [
            'Id',
			'Title',
            'DiaCumpleanios',
            'MesCumpleanios'
		],
		filter: buildQueryGetAll(obj),
        top: obj?.top
	}

    return AniversarioDA.getAll(sp, QP)
}

const getAllCamlQuery = (sp: SPFI, QueryCaml: string): Promise<FestividadVM[]> => {

    return AniversarioDA.getAllCamlQuery(sp, QueryCaml)
}

const getById = (sp: SPFI, entityId: number): Promise<FestividadVM[]> => {
    
    const QP: IQueryParams = {
		select: [
            'Id',
			'Title',
            'DiaCumpleanios',
            'MesCumpleanios'
		],
	}

    return AniversarioDA.getById(sp, QP, entityId)
}

export const AniversarioBL = {
    getAll,
    getAllCamlQuery,
    getById
}