import { SPFI } from "@pnp/sp"
import { AplicacionesDA } from "../DataAccess/AplicacionesDA"
import { getLocalISOTime } from "../Helper/DateHelper"
import { BuildQuery, Eq, Ge, Le } from "../Helper/FilterOperator"

export const buildQueryGetAll = (filterValues: AplicacionesVM) => {
    let logicals = [
		filterValues?.Id && Eq('Id', filterValues?.Id),
        filterValues?.Categoria && Eq('Categoria', getLocalISOTime(filterValues?.Categoria)),
        filterValues?.SubCategoria && Eq('SubCategoria', filterValues?.SubCategoria),
        filterValues?.Title && Eq('Title', filterValues?.Title),
	]
	return BuildQuery({ parameters: logicals, operator: 'and' })
}


const getAll = (sp: SPFI, obj: AplicacionesVM): Promise<AplicacionesVM[]> => {
    const QP: IQueryParams = {
		select: [
            'Id',
			'Title',
            'Categoria',
            'SubCategoria',
            'URL',
		],
		filter: buildQueryGetAll(obj),
        top: obj?.top
	}

    return AplicacionesDA.getAll(sp, QP)
}

const getAllCamlQuery = (sp: SPFI, QueryCaml: string): Promise<AplicacionesVM[]> => {

    return AplicacionesDA.getAllCamlQuery(sp, QueryCaml)
}

const getById = (sp: SPFI, entityId: number): Promise<AplicacionesVM[]> => {
    
    const QP: IQueryParams = {
		select: [
            'Id',
			'Title',
            'Categoria',
            'SubCategoria',
            'URL',
		],
	}

    return AplicacionesDA.getById(sp, QP, entityId)
}

export const AplicacionesBL = {
    getAll,
    getAllCamlQuery,
    getById
}