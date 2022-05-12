import { Checkbox as CBox, ICheckboxProps } from '@fluentui/react'
import * as React from 'react'
import { handleChangeType } from '../shared/type'
 
interface IIdentifier {
	check: any
	uncheck: any
}

interface ICustomCheckboxProps extends ICheckboxProps {
	name?: string
	handleChange?: handleChangeType
	value?: any
	identifier?: IIdentifier
}

const Checkbox: React.FC<ICustomCheckboxProps> = ({
	label,
	name,
	value,
	handleChange,
	identifier = {
		check: true,
		uncheck: false,
	},
	defaultChecked,
	disabled,
	boxSide,
	onRenderLabel,
}) => {
	const onChange = (event: any, isChecked?: boolean) => {
		const mapChecked = isChecked ? identifier.check : isChecked === false ? identifier.uncheck : null
		handleChange({
			elementType: 'Checkbox',
			event,
			name,
			value: mapChecked,
			data: mapChecked,
		})
	}

	return (
		<CBox
			label={label}
			name={name}
			onChange={onChange}
			checked={value}
			defaultChecked={defaultChecked}
			disabled={disabled}
			boxSide={boxSide}
			onRenderLabel={onRenderLabel}
		/>
	)
}

export { Checkbox }
