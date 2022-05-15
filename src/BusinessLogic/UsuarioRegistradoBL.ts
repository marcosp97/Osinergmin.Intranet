import { SPFI } from "@pnp/sp"
import { BannerDA } from "../DataAccess/BannerDA"
import { UsuarioRegistradoDA } from "../DataAccess/UsuarioRegistradoDA"
import { getLocalISOTime } from "../Helper/DateHelper"
import { BuildQuery, Eq, Ge, Le } from "../Helper/FilterOperator"

export const buildQueryGetAll = (filterValues: UsuarioRegistradoVM) => {
    let logicals = [
		filterValues?.Id && Eq('Id', filterValues?.Id),
        filterValues?.FechaNacimiento && Eq('FechaNacimiento', getLocalISOTime(filterValues?.FechaNacimiento)),
        filterValues?.Mes && Eq('MesNacimiento', filterValues?.Mes),
        filterValues?.Title && Eq('Title', filterValues?.Title),
	]
	return BuildQuery({ parameters: logicals, operator: 'and' })
}


const getAll = (sp: SPFI, obj: UsuarioRegistradoVM): Promise<UsuarioRegistradoVM[]> => {
    const QP: IQueryParams = {
		select: [
            'Id',
			'Title',
            'FechaNacimiento',
            'MesNacimiento'
		],
		filter: buildQueryGetAll(obj),
        top: obj?.top
	}

    return UsuarioRegistradoDA.getAll(sp, QP)
}

const getAllCamlQuery = (sp: SPFI, QueryCaml: string): Promise<UsuarioRegistradoVM[]> => {

    return UsuarioRegistradoDA.getAllCamlQuery(sp, QueryCaml)
}

const getById = (sp: SPFI, entityId: number): Promise<UsuarioRegistradoVM[]> => {
    
    const QP: IQueryParams = {
		select: [
            'Id',
			'Title',
            'FechaNacimiento',
            'MesNacimiento'
		],
	}

    return UsuarioRegistradoDA.getById(sp, QP, entityId)
}

export const UsuarioRegistradoBL = {
    getAll,
    getAllCamlQuery,
    getById
}