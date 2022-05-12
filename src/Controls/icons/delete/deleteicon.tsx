import * as React from 'react'
import { IconButton, IButtonProps } from '@fluentui/react'

interface IDeleteIconProps extends IButtonProps {
}
 
export const DeleteIcon: React.FC<IDeleteIconProps> = ({
    iconProps,
    title = 'Eliminar',
    ariaLabel = 'Eliminar',
    onClick
}) => {
    return (
        <IconButton iconProps={{ ...iconProps, iconName: 'Delete' }} title={title} ariaLabel={ariaLabel} onClick={onClick} />
    )
}