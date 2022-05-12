import { ITimePickerProps, ITimePickerStrings, TimePicker as TPicker } from '@fluentui/react'
import * as React from 'react'
import { handleChangeType } from '../shared/type'

interface ICustomTimePickerProps extends ITimePickerProps {
	name: string
	handleSelectDate?: any
}

const TimePicker: React.FC<ICustomTimePickerProps> = ({
	name,
	increments,
	useHour12,
	disabled,
	handleSelectDate,
	placeholder,
	allowFreeform,
	className,
	ariaLabel,
	timeRange,
	strings,
	label,
	defaultValue
}) => {
	const localString: ITimePickerStrings = {
		invalidInputErrorMessage: 'Formato de hora invalido.',
	}


	const onSelectDate = (date?: Date) => {
		handleSelectDate({
			elementType: 'TimePicker',
			name,
			value: date,
			data: date,
		})
	}
	const [time, setTime] = React.useState<Date>(new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate(), 8, 0));


	return (
		<TPicker
			className={className}
			increments={increments}
			disabled={disabled}
			strings={localString}
			useHour12={useHour12}
			placeholder={placeholder}
			allowFreeform={allowFreeform}
			ariaLabel={ariaLabel}
			// timeRange={{
            //     start: 7,
            //     end: 7
            // }}
			label={label}
            styles={{
                optionsContainerWrapper: {
                  height: '500px',
                },
                root: {
                  width: '100%',
                },
              }}
			onChange={handleSelectDate}
			defaultValue={defaultValue || time}
		/>
	)
}
 
export { TimePicker }
