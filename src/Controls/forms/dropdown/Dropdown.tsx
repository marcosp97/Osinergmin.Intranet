import * as React from "react";
import { Dropdown as Ddown, IDropdownOption, IDropdownProps } from "@fluentui/react";

import { handleChangeType } from '../shared/type';
import { ArrayToDropDown } from "../../../Helper/ArrayHelper";

interface ICustomDropdownProps extends IDropdownProps {
    options: any[]
    opt_key?: string | ((item: any) => string)
    opt_text?: string | ((item: any) => string) 
    name: string   
    handleChange?: handleChangeType
    showSelectItem?: boolean
    selectItemLabel?: string
}

const Dropdown: React.FC<ICustomDropdownProps> = ({
    options,
    opt_key = "id",
    opt_text = "name",
    name,
    showSelectItem = true,
    selectItemLabel = "-Seleccionar-",
    selectedKey,
    handleChange,
    disabled,
}) => {

    const [optionValues, setOptionValues] = React.useState<IDropdownOption[]>([]);
     
    const handleChangeDropdown = (event: React.FormEvent<HTMLDivElement>, option?: IDropdownOption, index?: number) => {
        handleChange({ 
            elementType: "Dropdown", 
            event, 
            name, 
            value: option.key, 
            data: option.data, 
            index
        });
    }

    const Initial = () => {
        const defaultFirstOption = { key: "", text: selectItemLabel };

        const sanitazedOptions = ArrayToDropDown({ data: options, key: opt_key, value: opt_text })

        setOptionValues([...(showSelectItem && [defaultFirstOption] || []), ...sanitazedOptions]);
    }

    React.useEffect(() => {
        Initial();
    }, [options])


    return (
        <Ddown 
            options={optionValues} 
            selectedKey={selectedKey || ""} 
            onChange={handleChangeDropdown}
            disabled={disabled} 
        />
    );
}

export {
    Dropdown
}