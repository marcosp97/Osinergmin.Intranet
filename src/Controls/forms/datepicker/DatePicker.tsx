import { DatePicker as DPicker, DayOfWeek, IDatePickerProps, IDatePickerStrings } from '@fluentui/react'
import * as React from 'react'
import { LocalFormat_DDMMYYYY } from '../../../Helper/DateHelper'
import { handleChangeType } from '../shared/type'

interface ICustomDatePickerProps extends IDatePickerProps {
	name: string
	handleSelectDate?: handleChangeType
	readonly?: boolean
}

const DatePicker: React.FC<ICustomDatePickerProps> = ({
	name,
	maxDate,
	minDate,
	value,
	disabled,
	handleSelectDate,
	placeholder,
	isRequired,
	className,
	ariaLabel,
	allowTextInput,
	textField = {},
	label,
	readonly,
}) => {
	const localString: IDatePickerStrings = {
		months: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Setiembre', 'Octubre', 'Noviembre', 'Diciembre'],
		shortMonths: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Set', 'Oct', 'Nov', 'Dic'],
		days: ['Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado'],
		shortDays: ['D', 'L', 'M', 'M', 'J', 'V', 'S'],
		goToToday: 'Hoy',
		prevMonthAriaLabel: 'Mes pasado',
		nextMonthAriaLabel: 'Siguiente mes',
		prevYearAriaLabel: 'Año pasado',
		nextYearAriaLabel: 'Siguiente año',
		invalidInputErrorMessage: 'Formato de fecha invalido.',
	}

	const clearButtonStyle = {
		border: '0px',
		background: 'initial',
		fontSize: '16px',
		cursor: 'pointer',
		minWidth: '0px',
		padding: '0px',
		marginLeft: '0px'
	}
 
	const onSelectDate = (date?: Date) => {
		handleSelectDate({
			elementType: 'DatePicker',
			name,
			value: date,
			data: date,
		})
	}

	const onClickClearButton = (_event: any) => onSelectDate(null)

	return (
		<DPicker
			className={className}
			maxDate={maxDate}
			minDate={minDate}
			firstDayOfWeek={DayOfWeek.Monday}
			value={value}
			disabled={disabled}
			strings={localString}
			onSelectDate={onSelectDate}
			placeholder={placeholder}
			isRequired={isRequired}
			ariaLabel={ariaLabel}
			formatDate={LocalFormat_DDMMYYYY}
			allowTextInput={allowTextInput}
			label={label}
			textField={{
				...textField,
				onRenderSuffix: () =>
					value && !disabled && !readonly ? (
						<button style={clearButtonStyle} onClick={onClickClearButton}>
							X
						</button>
					) : null,
				styles: {
					suffix: {
						display: (value && 'flex') || 'none',
						right: '33px',
						padding: '0px',
						position: 'absolute',
						marginTop: 'auto',
						marginBottom: 'auto',
						height: '100%',
						background: 'initial',
					},
				},
			}}
		/>
	)
}

export { DatePicker }
