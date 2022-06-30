import "@pnp/sp/webs";
import "@pnp/sp/lists";
import "@pnp/sp/items";
import "@pnp/sp/items/get-all";
import "@pnp/queryable"
import { SPFI, spfi } from "@pnp/sp";
import { LIST } from "../Helper/Constants/Configuration";
import { ArrayHelper } from "../Helper/ArrayHelper";
import { IItemAddResult, IItemUpdateResult } from "@pnp/sp/items";
import { ICamlQuery } from "@pnp/sp/lists";

const map_entity = (entity: AplicacionesBE): AplicacionesVM =>({
    Id: entity.Id,
    Title: entity.Title,
    Categoria: entity.Categoria,
    URL: entity.URL,
    Activo: entity.Activo
})

const getAll = async(sp: SPFI, params: IQueryParams, lista: string): Promise<AplicacionesVM[]> => {
    
    const data = await sp.web.lists.getByTitle(lista)
                                .items
                                .filter(params.filter || "")
                                .select(...ArrayHelper(params.select))
                                .expand(...ArrayHelper(params.expand))
                                .orderBy(params.orderby || "Id", params.ascending || true)
                                .top(params.top || 5000)
                                ()
    console.log(data)
    let lst: AplicacionesBE[] = data
    return lst?.map(x => map_entity(x))
}

const getAllCamlQuery = async(sp: SPFI, QueryCaml: string, lista: string): Promise<AplicacionesVM[]> => {
    const caml: ICamlQuery = {
        ViewXml: QueryCaml,
    };
    const data = await sp.web.lists.getByTitle(lista)
                                .getItemsByCAMLQuery(caml)
    console.log(data)
    let lst: AplicacionesBE[] = data
    return lst?.map(x => map_entity(x))
}

const getById = async(sp: SPFI, params: IQueryParams, entityId: number, lista: string): Promise<AplicacionesVM[]> => {
    
    let lst: AplicacionesBE[] = await sp.web.lists.getByTitle(lista)
                                .items
                                .getById(entityId)
                                .select(...ArrayHelper(params.select))
                                .expand(...ArrayHelper(params.expand))
                                ()
    return lst?.map(x => map_entity(x))
}

const create = async(sp: SPFI, entity: any, lista: string): Promise<AplicacionesVM> => {
    
    let objAdd: IItemAddResult = await sp.web.lists.getByTitle(lista)
                                .items
                                .add(entity)
    const data: AplicacionesBE = objAdd.data
    return map_entity(data)
}

const update = async(sp: SPFI, entity: any, entityId: number, lista: string): Promise<AplicacionesVM> => {
    
    let objUpdate: IItemUpdateResult = await sp.web.lists.getByTitle(lista)
                                .items
                                .getById(entityId)
                                .update(entity)
    const data: AplicacionesBE = entity
    return map_entity(data)
}

export const AplicacionesDA = {
    getAll,
    getAllCamlQuery,
    getById,
    create,
    update
}