import { SPFI } from "@pnp/sp"
import { AplicacionesDA } from "../DataAccess/AplicacionesDA"
import { getLocalISOTime } from "../Helper/DateHelper"
import { BuildQuery, Eq, Ge, Le } from "../Helper/FilterOperator"

export const buildQueryGetAll = (filterValues: AplicacionesVM) => {
    let logicals = [
		filterValues?.Id && Eq('Id', filterValues?.Id),
        filterValues?.Categoria && Eq('Categoria', getLocalISOTime(filterValues?.Categoria)),
        filterValues?.Activo && Eq('Activo', filterValues?.Activo),
        filterValues?.Title && Eq('Title', filterValues?.Title),
	]
	return BuildQuery({ parameters: logicals, operator: 'and' })
}


const getAll = (sp: SPFI, obj: AplicacionesVM, lista: string): Promise<AplicacionesVM[]> => {
    const QP: IQueryParams = {
		select: [
            'Id',
			'Title',
            'Categoria',
            'URL',
            'Activo'
		],
		filter: buildQueryGetAll(obj),
        top: obj?.top
	}

    return AplicacionesDA.getAll(sp, QP, lista)
}

const getAllCamlQuery = (sp: SPFI, QueryCaml: string, lista: string): Promise<AplicacionesVM[]> => {

    return AplicacionesDA.getAllCamlQuery(sp, QueryCaml, lista)
}

const getById = (sp: SPFI, entityId: number, lista: string): Promise<AplicacionesVM[]> => {
    
    const QP: IQueryParams = {
		select: [
            'Id',
			'Title',
            'Categoria',
            'URL',
            'Activo'
		],
	}

    return AplicacionesDA.getById(sp, QP, entityId, lista)
}

export const AplicacionesBL = {
    getAll,
    getAllCamlQuery,
    getById
}