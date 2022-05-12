import { ChoiceGroup, IChoiceGroupOption, IChoiceGroupProps } from '@fluentui/react'
import * as React from 'react'

import { handleChangeType } from '../shared/type'

interface IChoiceProps<T = any> extends IChoiceGroupProps {
    items: T[]
    toOption: (item: T) => IChoiceGroupOption,
    handleChange?: handleChangeType,
    handleNewValue?: (item: IChoiceGroupOption) => any,
    horizontal?: boolean
}



export const Choice: React.FC<IChoiceProps> = ({
    name,
    defaultSelectedKey,
    selectedKey,
    items,
    toOption,
    handleChange,
    handleNewValue,
    horizontal = false,
    styles = {}
}) => {

    const options: IChoiceGroupOption[] = items.map(toOption)

    const getNewValue = (option: IChoiceGroupOption): any => {
        if(!handleNewValue)
            return option.key

        return handleNewValue(option)
    }

    const onChange = (event?: any, option?: IChoiceGroupOption) => {

        handleChange && handleChange({
            elementType: "ChoiceGroup",
            name,
            value: getNewValue(option),
            data: option,
            event
        })
    }


    const horizontalStyle = {
        flexContainer: {
            display: 'flex',
            gap: '15px',
            selectors: {
                '.ms-ChoiceField': {
                    marginTop: 0,
                },
            },
        },

    }
    return (
        <React.Fragment>
            <ChoiceGroup 
                defaultSelectedKey={defaultSelectedKey} 
                selectedKey={selectedKey}
                options={options} 
                onChange={onChange}
                styles={ horizontal? horizontalStyle: styles}
                ></ChoiceGroup>
        </React.Fragment>
    )
}