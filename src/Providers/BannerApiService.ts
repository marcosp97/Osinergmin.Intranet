import { SPFI } from "@pnp/sp"
import { IFileInfo } from "@pnp/sp/files"
import { BannerBL } from "../BusinessLogic/BannerBL"
import { TIPO } from "../Helper/Constants/Configuration"

const getFileAll = async (sp: SPFI, obj: BannerVM): Promise<BannerVM[]> => {
    return await BannerBL.getFileAll(sp, obj)
}

const getFileAllWithNext = async (sp: SPFI, obj: BannerVM): Promise<BannerVM[]> => {
    let lst = await BannerBL.getFileAll(sp, obj)
    // const lstTemp = lst
    // lstTemp.filter(x => x.TipoPlantilla == TIPO.CUMPLEANIOS).forEach(x => {
    //     const objtemp: BannerVM = {
    //         Activo: x.Activo,
    //         Id: x.Id,
    //         EsSiguiente: true,
    //         Filename: x.Filename,
    //         ServerRelativeUrl: x.ServerRelativeUrl,
    //         TipoPlantilla: x.TipoPlantilla,
    //         URL: x.URL
    //     }
    //     lst.push(objtemp)
    // })

    lst = lst.sort((n1, n2) => {
        if (n1.Orden > n2.Orden) {
            return 1;
        }
        if (n1.Orden < n2.Orden) {
            return -1;
        }
        return 0;
    });
    return lst
}

const getAll = async (sp: SPFI, obj: BannerVM): Promise<BannerVM[]> => {
    return await BannerBL.getAll(sp, obj)
}

export const BannerApiService = {
    getFileAll,
    getFileAllWithNext,
    getAll
}