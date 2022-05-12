import { ITag } from '@fluentui/react';
import { IHandleChange, IHandleResolveTagChange, IHandleTagChange } from './model';
 
export type handleChangeType = (handleChangeParams: IHandleChange) => void

export type handleChangeTagType = (handleChangeParams: IHandleTagChange) => void

export type handleResolveTagType = (handleChangeParams: IHandleResolveTagChange) => Promise<ITag[]>