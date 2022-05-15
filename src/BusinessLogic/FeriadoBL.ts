import { SPFI } from "@pnp/sp"
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

    return FeriadoDA.getAll(sp, QP)
}

const getAllCamlQuery = (sp: SPFI, QueryCaml: string): Promise<FestividadVM[]> => {

    return FeriadoDA.getAllCamlQuery(sp, QueryCaml)
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

    return FeriadoDA.getById(sp, QP, entityId)
}

export const FeriadoBL = {
    getAll,
    getAllCamlQuery,
    getById
}