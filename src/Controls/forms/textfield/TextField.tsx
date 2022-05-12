import { ITextFieldProps, TextField as TField } from '@fluentui/react'
import * as React from 'react'
import { handleChangeType } from '../shared/type'

interface ICustomTextFieldProps extends ITextFieldProps {
	name?: string
	handleChange?: handleChangeType
	handleBlur?: handleChangeType
	value?: any,
	index?: any,
} 
const TextField: React.FC<ICustomTextFieldProps> = ({
	name,
	type,
	value,
	handleChange,
	multiline,
	rows,
	resizable,
	disabled,
	required,
	autoAdjustHeight,
	label,
	suffix,
	componentRef,
	index,
	handleBlur
}) => {
	const onChange = (event: any, newValue: any) => {
		const sanitazeValue = type === 'number' ? (newValue === Number(newValue) + '' ? Number(newValue) : null) : newValue
		handleChange && 
		handleChange({
			elementType: 'TextField',
			event,
			name,
			value: sanitazeValue,
			data: sanitazeValue,
			index: index
		})
	}

	const onBlur = (event) => {
		const sanitazeValue = type === 'number' ? (event.target.value === Number(event.target.value) + '' ? Number(event.target.value) : null) : event.target.value
		handleBlur && 
		handleBlur({
			elementType: 'TextField',
			event,
			name,
			value: sanitazeValue,
			data: sanitazeValue,
			index: index
		})
	}

	const sanitazaTextFieldValue = (val: any) => (val !== 0 && !val ? '' : val + '')

	return (
		<TField
			componentRef={componentRef}
			name={name}
			type={type}
			value={sanitazaTextFieldValue(value) || ''}
			// value={value+ ""}
			onChange={onChange}
			multiline={multiline}
			rows={rows}
			resizable={resizable}
			disabled={disabled}
			required={required}
			autoAdjustHeight={autoAdjustHeight}
			label={label}
			suffix={suffix}
			onBlur={onBlur}
		/>
	)
}

export { TextField }
