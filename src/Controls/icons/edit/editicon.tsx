import * as React from 'react'
import { IconButton, IButtonProps } from '@fluentui/react'
 
interface IDeleteIconProps extends IButtonProps {
}

export const EditIcon: React.FC<IDeleteIconProps> = ({
    iconProps,
    title = 'Editar',
    ariaLabel = 'Editar',
    onClick
}) => {
    return (
        <IconButton iconProps={{ ...iconProps, iconName: 'Edit' }} title={title} ariaLabel={ariaLabel} onClick={onClick} />
    )
}