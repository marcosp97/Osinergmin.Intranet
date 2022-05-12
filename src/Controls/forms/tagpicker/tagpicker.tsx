import * as React from "react";
import { TagPicker as DTag, ITag, IInputProps, IBasePickerSuggestionsProps } from "@fluentui/react";

import { ArrayTagPicker } from "../../../Helper/ArrayHelper";
import { handleChangeTagType, handleChangeType, handleResolveTagType } from "../shared/type";

interface ICustomTagPickerProps {
    handleChange?: handleChangeTagType,
    onResolveSuggestions?: handleResolveTagType,
    handleBlur?: handleChangeType
    defaultSelectedItems?: any[],
    itemLimit?: number,
    disabled?: boolean,
    index?: any,
}

const TagPicker: React.FC<ICustomTagPickerProps> = ({
    handleChange,
    onResolveSuggestions,
    defaultSelectedItems,
    itemLimit,
    disabled,
    handleBlur,
    index
}) => {

    const onChange = (items: ITag[]) => {
		handleChange && 
		handleChange({
			items: items,
			index: index
		})
	}

    const onResolve = (filter: string, selectedItems: ITag[]) => {
		return onResolveSuggestions({
			filter: filter,
            selectedItems: selectedItems,
			index: index
		})
	}

    const onBlur = (event) => {
		handleBlur && 
		handleBlur({
			elementType: 'TagPicker',
            name: '',
            data: event.target.value,
            value: event.target.value,
			event,
			index: index
		})
	}


    const Initial = () => {


    }


    const getTextFromItem = (item: ITag) => item.name;

    const inputProps: IInputProps = {
        placeholder: 'Buscar elemento'
      };

      const pickerSuggestionsProps: IBasePickerSuggestionsProps = {
        suggestionsHeaderText: 'Elementos encontrados',
        noResultsFoundText: 'No se encontraron resultados',
      };

    React.useEffect(() => {
        Initial();
    }, [defaultSelectedItems])


    return (
        <DTag 
            onResolveSuggestions={onResolve}
            onChange={onChange}
            getTextFromItem={getTextFromItem}
            pickerSuggestionsProps={pickerSuggestionsProps}
            inputProps={inputProps}
            defaultSelectedItems={defaultSelectedItems}
            itemLimit={itemLimit}
            disabled={disabled}
            onBlur={onBlur}
        />
    );
}

export {
    TagPicker
}