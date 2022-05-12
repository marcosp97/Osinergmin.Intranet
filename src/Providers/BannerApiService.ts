import { SPFI } from "@pnp/sp"
import { IFileInfo } from "@pnp/sp/files"
import { BannerBL } from "../BusinessLogic/BannerBL"

const getFileAll = async(sp: SPFI, obj: BannerVM): Promise<BannerVM[]> => {
    return await BannerBL.getFileAll(sp, obj)
}
const getAll = async(sp: SPFI, obj: BannerVM): Promise<BannerVM[]> => {
    return await BannerBL.getAll(sp, obj)
}

export const BannerApiService = {
    getFileAll,
    getAll
}