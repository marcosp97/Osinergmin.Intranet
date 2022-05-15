import { SPFI } from "@pnp/sp"
import { IFileInfo } from "@pnp/sp/files"
import { BannerDA } from "../DataAccess/BannerDA"
import { UsuarioDA } from "../DataAccess/UsuarioDA"
import { BuildQuery, Eq } from "../Helper/FilterOperator"

export const buildQueryGetAll = (filterValues: BannerVM) => {
    let logicals = [
		filterValues?.Id && Eq('Id', filterValues?.Id),
        filterValues?.TipoPlantilla && Eq('TipoPlantilla', filterValues?.TipoPlantilla),
        filterValues?.Filename && Eq('Filename', filterValues?.Filename),
        filterValues?.Activo && Eq('Activo', filterValues?.Activo),
        filterValues?.URL && Eq('URL', filterValues?.URL),
	]
	return BuildQuery({ parameters: logicals, operator: 'and' })
}

export const buildQueryFileGetAll = (filterValues: BannerVM) => {
    let logicals = [
		filterValues?.Id && Eq('ListItemAllFields/Id', filterValues?.Id),
        filterValues?.TipoPlantilla && Eq('ListItemAllFields/TipoPlantilla', filterValues?.TipoPlantilla),
        filterValues?.Filename && Eq('ListItemAllFields/Filename', filterValues?.Filename),
        filterValues?.Activo && Eq('ListItemAllFields/Activo', filterValues?.Activo),
        filterValues?.URL && Eq('ListItemAllFields/URL', filterValues?.URL),
	]
	return BuildQuery({ parameters: logicals, operator: 'and' })
}

const getFileAll = (sp: SPFI, obj: BannerVM): Promise<BannerVM[]> => {
    const QP: IQueryParams = {
		select: [],
		filter: buildQueryFileGetAll(obj),
        expand: [
            'ListItemAllFields',
            'Author'
        ],
        top: obj?.top,
	}

    return BannerDA.getFileAll(sp, QP)
}


const getAll = (sp: SPFI, obj: BannerVM): Promise<BannerVM[]> => {
    const QP: IQueryParams = {
		select: [
            'Id',
			'TipoPlantilla',
            'Filename',
            'URL',
            'Activo',
		],
		filter: buildQueryGetAll(obj),
        top: obj?.top
	}

    return BannerDA.getAll(sp, QP)
}

const getById = (sp: SPFI, entityId: number): Promise<BannerVM[]> => {
    
    const QP: IQueryParams = {
		select: [
            'Id',
			'TipoPlantilla',
            'Filename',
            'URL',
            'Activo',
		],
	}

    return BannerDA.getById(sp, QP, entityId)
}

export const BannerBL = {
    getAll,
    getFileAll,
    getById
}