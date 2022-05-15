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
import { ICamlQuery } from "@pnp/sp/lists";

const map_entity = (entity: UsuarioRegistradoBE): UsuarioRegistradoVM =>({
    Id: entity.Id,
    FechaNacimiento: entity.FechaNacimiento,
    Title: entity.Title
})

const getAll = async(sp: SPFI, params: IQueryParams): Promise<UsuarioRegistradoVM[]> => {
    
    const data = await sp.web.lists.getByTitle(LIST.UsuarioRegistrado)
                                .items
                                .filter(params.filter || "")
                                .select(...ArrayHelper(params.select))
                                .expand(...ArrayHelper(params.expand))
                                .orderBy(params.orderby || "Id", params.ascending || true)
                                .top(params.top || 5000)
                                ()
    console.log(data)
    let lst: UsuarioRegistradoBE[] = data
    return lst?.map(x => map_entity(x))
}

const getAllCamlQuery = async(sp: SPFI, QueryCaml: string): Promise<UsuarioRegistradoVM[]> => {
    const caml: ICamlQuery = {
        ViewXml: QueryCaml,
    };
    const data = await sp.web.lists.getByTitle(LIST.UsuarioRegistrado)
                                .getItemsByCAMLQuery(caml)
    console.log(data)
    let lst: UsuarioRegistradoBE[] = data
    return lst?.map(x => map_entity(x))
}

const getById = async(sp: SPFI, params: IQueryParams, entityId: number): Promise<UsuarioRegistradoVM[]> => {
    
    let lst: UsuarioRegistradoBE[] = await sp.web.lists.getByTitle(LIST.UsuarioRegistrado)
                                .items
                                .getById(entityId)
                                .select(...ArrayHelper(params.select))
                                .expand(...ArrayHelper(params.expand))
                                ()
    return lst?.map(x => map_entity(x))
}

const create = async(sp: SPFI, entity: any): Promise<UsuarioRegistradoVM> => {
    
    let objAdd: IItemAddResult = await sp.web.lists.getByTitle(LIST.UsuarioRegistrado)
                                .items
                                .add(entity)
    const data: UsuarioRegistradoBE = objAdd.data
    return map_entity(data)
}

const update = async(sp: SPFI, entity: any, entityId: number): Promise<UsuarioRegistradoVM> => {
    
    let objUpdate: IItemUpdateResult = await sp.web.lists.getByTitle(LIST.UsuarioRegistrado)
                                .items
                                .getById(entityId)
                                .update(entity)
    const data: UsuarioRegistradoBE = entity
    return map_entity(data)
}

export const UsuarioRegistradoDA = {
    getAll,
    getAllCamlQuery,
    getById,
    create,
    update
}