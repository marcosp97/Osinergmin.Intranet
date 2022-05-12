import { ITag } from "@fluentui/react"

export interface IHandleChange {
    elementType: string
    event?: any
    name: string
    value: any
    data: any
    index?: number
}

export interface IHandleTagChange {
    items: ITag[]
    index?: number
}

export interface IHandleResolveTagChange {
    filter: string,
    selectedItems: ITag[]
    index?: number
}


 
