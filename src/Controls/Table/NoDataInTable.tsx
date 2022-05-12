import * as React from "react";

interface INoDataInTableProps {
    colSpan: number;
    message?: string

}

interface INoDataInTableState {
    colSpan: number;
    message?: string

}

export default class NoDataInTable extends React.Component<INoDataInTableProps, INoDataInTableState>{
    public constructor(props: INoDataInTableProps, state: INoDataInTableState) {
        super(props);
        this.state = {
            colSpan: this.props.colSpan,
            message: this.props.message
        };
    }

    public render(): React.ReactElement<INoDataInTableProps> {
        return (
            <>
            <tr><td colSpan={this.state.colSpan} style={{ textAlign: 'center'}}>{this.state.message}</td></tr>
            </>
        );
    }
    
} 
