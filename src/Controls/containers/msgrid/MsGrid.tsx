import * as React from 'react'
import styles from '../../../assets/scss/Estilo.module.scss'
 
export interface IMsGridProps {
    gridClassName?: string
    rowClassName?: string
    hidden?: boolean
}

export const MsGrid: React.FC<IMsGridProps> = ({ 
    children,
    gridClassName,
    rowClassName,
    hidden
}) => {
    return (
        <div className={`${styles.msGrid} ${gridClassName || ''}`} hidden={hidden || false}>
            <div className={`${styles.msGridrow} ${rowClassName || ''}`}>
                {children}
            </div>
        </div>
    )
}

