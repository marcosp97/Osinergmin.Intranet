import * as React from "react";
import DataTable, { IDataTableProps } from "react-data-table-component"
import styles from "../../assets/scss/Estilo.module.scss";
import { Mensaje } from "../../Helper/Constants/Configuration";

import { customStyles as customDataTableStyles } from "../../Helper/Utils/styles/DataTable"

type BaseCustomDataTableType = {
    size?: "sm" | "md" | "lg" | "default"
}
type CustomDataTablePropsType = BaseCustomDataTableType & IDataTableProps<any>

const CustomDataTable: React.FC<CustomDataTablePropsType> = ({
    size = "lg",
    columns,
    data,
    customStyles,
    pagination,
    noDataComponent,
    progressPending,
    noHeader,
    className,
    selectableRows,
    selectableRowsVisibleOnly,
    selectableRowsHighlight,
    selectableRowsNoSelectAll,
    selectableRowsSingle,
    onSelectedRowsChange,
}) => {

    const paginationComponentOptions = {
        rowsPerPageText: 'Filas por página',
        rangeSeparatorText: 'de',
        selectAllRowsItem: true,
        selectAllRowsItemText: 'Todos',
    };

    const loading = (
        <div>Cargando...</div>
    )

    const buildClassName = (): string => {
        const stylesObj: any = (styles as any), classKey = `table-${size}`
        return styles.hasOwnProperty(classKey) && stylesObj[classKey] || 'table-default'
    }
    const Initial = () => {
    }
    

    // React.useEffect(() => {
    //     Initial();
    // }, [data])

    return (
        <DataTable
            columns={columns}
            data={data}
            className={`${buildClassName()} ${className}`}
            customStyles={customStyles || customDataTableStyles}
            pagination={pagination}
            noDataComponent={ noDataComponent || Mensaje.noData}
            noHeader={noHeader}
            paginationComponentOptions={paginationComponentOptions}
            progressPending={progressPending}
            progressComponent={loading}
            selectableRows={selectableRows}
            selectableRowsVisibleOnly={selectableRowsVisibleOnly}
            selectableRowsHighlight={selectableRowsHighlight}
            selectableRowsNoSelectAll={selectableRowsNoSelectAll}
            selectableRowsSingle={selectableRowsSingle}
            onSelectedRowsChange={onSelectedRowsChange}
        />
    );
}

export {
    CustomDataTable
}