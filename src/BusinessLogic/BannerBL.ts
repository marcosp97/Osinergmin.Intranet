import { SPFI } from "@pnp/sp"
import { IFileInfo } from "@pnp/sp/files"
import { BannerDA } from "../DataAccess/BannerDA"
import { UsuarioDA } from "../DataAccess/UsuarioDA"
import { BuildQuery, Eq } from "../Helper/FilterOperator"

export const buildQueryGetAll = (filterValues: BannerVM) => {
    let logicals = [
		filterValues?.Id && Eq('Id', filterValues?.Id),
        filterValues?.EsPlantillaCumpleanios && Eq('EsPlantillaCumpleanios', filterValues?.EsPlantillaCumpleanios),
        filterValues?.Filename && Eq('Filename', filterValues?.Filename),
        filterValues?.URL && Eq('URL', filterValues?.URL),
	]
	return BuildQuery({ parameters: logicals, operator: 'and' })
}

const getFileAll = (sp: SPFI, obj: BannerVM): Promise<BannerVM[]> => {
    const QP: IQueryParams = {
		select: [],
		filter: buildQueryGetAll(obj),
        expand: [
            'ListItemAllFields',
            'Author'
        ],
        top: obj?.top
	}

    return BannerDA.getFileAll(sp, QP)
}


const getAll = (sp: SPFI, obj: BannerVM): Promise<BannerVM[]> => {
    const QP: IQueryParams = {
		select: [
            'Id',
			'EsPlantillaCumpleanios',
            'Filename',
            'URL'
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
			'EsPlantillaCumpleanios',
            'Filename',
            'URL'
		],
	}

    return BannerDA.getById(sp, QP, entityId)
}

export const BannerBL = {
    getAll,
    getFileAll,
    getById
}