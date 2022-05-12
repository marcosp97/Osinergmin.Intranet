import { ComboBox as Cbox, IComboBox, IComboBoxOption, IComboBoxProps } from '@fluentui/react'
import * as React from 'react'
import { ArrayToDropDown } from '../../../Helper/ArrayHelper'
import { handleChangeType } from '../shared/type'
 
interface ICustomComboBoxProps extends IComboBoxProps {
	options: any[]
	opt_key?: string | ((item: any) => string)
	opt_text?: string | ((item: any) => string)
	name: string
	handleChange?: handleChangeType
	showSelectItem?: boolean
	selectItemLabel?: string
	label?: string
}

const ComboBox: React.FC<ICustomComboBoxProps> = ({
	options,
	opt_key = 'id',
	opt_text = 'name',
	name,
	showSelectItem = true,
	selectItemLabel = '-Seleccionar-',
	selectedKey,
	handleChange,
	disabled,
	required,
	label,
}) => {
	const [optionValues, setOptionValues] = React.useState<IComboBoxOption[]>([])
	const ref = React.useRef(null)
	const onChange = (event: React.FormEvent<IComboBox>, option?: IComboBoxOption, index?: number, _value?: string) => {
		handleChange({
			elementType: 'ComboBox',
			event,
			name,
			value: option.key,
			data: option.data,
			index,
		})
	}

	const Initial = () => {
		const defaultFirstOption = { key: '', text: selectItemLabel }

		const sanitazedOptions = ArrayToDropDown({ data: options, key: opt_key, value: opt_text })

		setOptionValues([...((showSelectItem && [defaultFirstOption]) || []), ...sanitazedOptions])
	}

	React.useEffect(() => {
		Initial()
	}, [options])

	return (
		<Cbox
			options={optionValues}
			selectedKey={(selectedKey || '') + ''}
			onChange={onChange}
			disabled={disabled}
			required={required}
			ref={ref}
			label={label}
		/>
	)
}

export { ComboBox }
