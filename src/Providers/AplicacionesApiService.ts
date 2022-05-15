import { SPFI } from "@pnp/sp"
import { AplicacionesBL } from "../BusinessLogic/AplicacionesBL"

const Agrupar = (lst: AplicacionesVM[], name: string): AplicacionesVM[] => {
    return lst.reduce((accumalator: AplicacionesVM[], current: AplicacionesVM) => {
        if (
        !accumalator.some(
            (item) => item[name] === current[name]
        )
        ) {
        accumalator.push(current)
        }
        return accumalator
    }, [])
}

const getAll = async(sp: SPFI, obj: AplicacionesVM): Promise<AplicacionesVM[]> => {
    return await AplicacionesBL.getAll(sp, obj)
}

const getAllDinamico = async(sp: SPFI, obj: AplicacionesVM): Promise<AplicacionesDinamicoVM[]> => {
    const lst = await AplicacionesBL.getAll(sp, obj)
    let listaAgrupados: AplicacionesVM[] = [];
    listaAgrupados = Agrupar(lst, "Categoria")

    const lstRetorno = listaAgrupados?.map(x => {
        const listaSub = lst?.filter(m => m.Categoria == x.Categoria);
        let listaSubAgrupados = Agrupar(listaSub, "SubCategoria")
        const obj:AplicacionesDinamicoVM = {
            Categoria: x.Categoria,
            SubCategorias: listaSubAgrupados.map(y => {
                const objSub: AplicacionesSubCategoriaVM = {
                    SubCategoria: y.SubCategoria,
                    Aplicaciones: lst?.filter(n => n.Categoria == y.Categoria && n.SubCategoria == y.SubCategoria).map(z => {
                        const objApp: AplicacionesItemVM = {
                            Id: z.Id,
                            Title: z.Title,
                            URL: z.URL
                        }
                        return objApp
                    })
                }
                return objSub
            })
        }
        return obj
    })

    return lstRetorno
}

const getAllCamlQuery = async(sp: SPFI, QueryCaml: string): Promise<AplicacionesVM[]> => {
    return await AplicacionesBL.getAllCamlQuery(sp, QueryCaml)
}

export const AplicacionesApiService = {
    getAll,
    getAllCamlQuery,
    getAllDinamico
}