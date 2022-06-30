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

const getAll = async(sp: SPFI, obj: AplicacionesVM, lista: string): Promise<AplicacionesVM[]> => {
    return await AplicacionesBL.getAll(sp, obj, lista)
}

const getAllDinamico = async(sp: SPFI, obj: AplicacionesVM, lista: string): Promise<AplicacionesDinamicoVM[]> => {
    const lst = await AplicacionesBL.getAll(sp, obj, lista)
    let listaAgrupados: AplicacionesVM[] = [];
    listaAgrupados = Agrupar(lst, "Categoria")
    const lstRetorno: AplicacionesDinamicoVM[] = listaAgrupados.map(y => {
        const objSub: AplicacionesDinamicoVM = {
            Categoria: y.Categoria,
            Aplicaciones: lst?.filter(n => n.Categoria == y.Categoria).map(z => {
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

    return lstRetorno
}

const getAllCamlQuery = async(sp: SPFI, QueryCaml: string, lista: string): Promise<AplicacionesVM[]> => {
    return await AplicacionesBL.getAllCamlQuery(sp, QueryCaml, lista)
}

export const AplicacionesApiService = {
    getAll,
    getAllCamlQuery,
    getAllDinamico
}