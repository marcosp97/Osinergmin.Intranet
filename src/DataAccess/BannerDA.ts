import "@pnp/sp/webs";
import "@pnp/sp/lists";
import "@pnp/sp/items";
import "@pnp/sp/items/get-all";
import "@pnp/queryable"
import "@pnp/sp/files";
import "@pnp/sp/folders";
import { SPFI, spfi } from "@pnp/sp";
import { LIST } from "../Helper/Constants/Configuration";
import { ArrayHelper } from "../Helper/ArrayHelper";
import { IItemAddResult, IItemUpdateResult } from "@pnp/sp/items";
import { IFileInfo } from "@pnp/sp/files";
import { FileBE } from "../Entity/FileBE";

const map_entity = (entity: BannerBE): BannerVM => ({
    Id: entity.Id,
    Filename: entity.Filename,
    TipoPlantilla: entity.TipoPlantilla,
    URL: entity.URL,
    Activo: entity.Activo,
    EtiquetaEstilos: entity.EtiquetaEstilos,
    NuevaVentana: entity.NuevaVentana,
    Orden: entity.Orden,
    Titulo: entity.Title,
})

const map_file = (entity: FileBE): BannerVM => ({
    Id: entity?.ListItemAllFields?.Id,
    Filename: entity?.Name,
    TipoPlantilla: entity?.ListItemAllFields?.TipoPlantilla,
    URL: entity?.ListItemAllFields?.URL,
    ServerRelativeUrl: entity?.ServerRelativeUrl,
    Activo: entity?.ListItemAllFields?.Activo,
    EtiquetaEstilos: entity?.ListItemAllFields?.EtiquetaEstilos,
    NuevaVentana: entity?.ListItemAllFields?.NuevaVentana,
    Orden: entity?.ListItemAllFields?.Orden,
    Titulo: entity?.ListItemAllFields?.Title
})

const getFileAll = async (sp: SPFI, params: IQueryParams): Promise<BannerVM[]> => {
    let lst: FileBE[] = await sp.web.getFolderByServerRelativePath(LIST.Banner)
        .files
        .filter(params.filter || "")
        .select(...ArrayHelper(params.select))
        .expand(...ArrayHelper(params.expand))
        .orderBy(params.orderby || "ListItemAllFields/Id", params.ascending || true)
        .top(params.top || 5000)
        ()
    console.log(lst)
    return lst?.map(map_file)
}


const getAll = async (sp: SPFI, params: IQueryParams): Promise<BannerVM[]> => {

    const data = await sp.web.lists.getByTitle(LIST.Banner)
        .items
        .filter(params.filter || "")
        .select(...ArrayHelper(params.select))
        .expand(...ArrayHelper(params.expand))
        .orderBy(params.orderby || "Id", params.ascending || true)
        .top(params.top || 5000)
        ()
    console.log(data)
    let lst: BannerBE[] = data
    return lst?.map(x => map_entity(x))
}

const getById = async (sp: SPFI, params: IQueryParams, entityId: number): Promise<BannerVM[]> => {

    let lst: BannerBE[] = await sp.web.lists.getByTitle(LIST.Banner)
        .items
        .getById(entityId)
        .select(...ArrayHelper(params.select))
        .expand(...ArrayHelper(params.expand))
        ()
    return lst?.map(x => map_entity(x))
}

const create = async (sp: SPFI, entity: any): Promise<BannerVM> => {

    let objAdd: IItemAddResult = await sp.web.lists.getByTitle(LIST.Banner)
        .items
        .add(entity)
    const data: BannerBE = objAdd.data
    return map_entity(data)
}

const update = async (sp: SPFI, entity: any, entityId: number): Promise<BannerVM> => {

    let objUpdate: IItemUpdateResult = await sp.web.lists.getByTitle(LIST.Banner)
        .items
        .getById(entityId)
        .update(entity)
    const data: BannerBE = entity
    return map_entity(data)
}

export const BannerDA = {
    getAll,
    getFileAll,
    getById,
    create,
    update
}