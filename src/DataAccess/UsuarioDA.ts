import "@pnp/sp"
import "@pnp/sp/webs"
import "@pnp/sp/site-users/web"
import "@pnp/sp/site-groups/web"
import { SPFI } from "@pnp/sp"
import { ISiteUserInfo } from "@pnp/sp/site-users/types"
import { ISiteGroupInfo } from "@pnp/sp/site-groups/types"

const map_entity = (entity:ISiteUserInfo, subentity:ISiteGroupInfo[]): UsuarioBE =>({
    Id: entity.Id,
    Correo: entity.Email,
    Nombre: entity.Title,
    LoginName: entity.LoginName,
    ListaGrupo: subentity.map((x):GrupoUsuarioBE => ({
        Id: x.Id,
        Nombre: x.Title
    }))
})

const Logeado = async(sp: SPFI): Promise<UsuarioBE> => {
    let User = await sp.web.currentUser()
    let Groups = await sp.web.currentUser.groups()

    return map_entity(User, Groups)
}

export const UsuarioDA = {
    Logeado
}