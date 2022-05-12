import { Alignment, Checkbox as CBox, ICheckboxProps, IStackTokens, Stack } from '@fluentui/react'
import * as React from 'react'
import { handleChangeType } from '../shared/type'

interface IOptionProps extends ICheckboxProps {
	identifier: any
} 

interface ICustomCheckboxProps {
	yesOption?: IOptionProps
	noOption?: IOptionProps
	name?: string
	handleChange?: handleChangeType
	value?: any
	horizontalAlign?: Alignment
	disabled?: boolean
}

const YesNoCheck: React.FC<ICustomCheckboxProps> = ({
	name,
	value,
	handleChange,
	yesOption = {
		label: 'Si',
		identifier: true,
	},
	noOption = {
		label: 'No',
		identifier: false,
	},
	horizontalAlign,
	disabled,
}) => {
	const optionHandleChange = (option: any) => (event: any, checked: boolean) => {
		let newValue: boolean =
			option === yesOption.identifier && checked ? yesOption.identifier : option === noOption.identifier && checked ? noOption.identifier : null
		if (value === newValue) newValue = null
		handleChange({
			elementType: 'YesNoCheck',
			event,
			name,
			value: newValue,
			data: newValue,
		})
	}

	const stackTokens: IStackTokens = {
		childrenGap: 15,
	}
	return (
		<>
			<Stack horizontal tokens={stackTokens} horizontalAlign={horizontalAlign}>
				<CBox
					label={yesOption.label}
					checked={value === yesOption.identifier}
					onChange={optionHandleChange(yesOption.identifier)}
					disabled={disabled}
				/>
				<CBox label={noOption.label} checked={value === noOption.identifier} onChange={optionHandleChange(noOption.identifier)} disabled={disabled} />
			</Stack>
		</>
	)
}

export { YesNoCheck }
