import * as React from 'react';
import { IMaskedTextFieldProps, MaskedTextField, IMaskedTextField } from "@fluentui/react";
import { handleChangeType } from '../shared/type';

interface ITimePickerProps extends IMaskedTextFieldProps {
    intervalHour?: 12 | 24
    handleChange?: handleChangeType
}

export const TimePicker: React.FC<ITimePickerProps> = ({
    name,
    value,
    maskChar ="0",
    mask ="99:99",
    disabled,
    required,
    intervalHour = 24,
    handleChange
}) => {
 
    const ref = React.useRef<IMaskedTextField>(null)

    const isHourValid = (hour: number) => {
        if(intervalHour === 12)
            return hour <= intervalHour
        if(intervalHour === 24)
            return hour < intervalHour
        return false
    }
    // implementation for 12 hours is incoming
    const sanitazeTime = (timeValue: string) => {
        let [hour, minute] = (timeValue || ':').split(':')

        hour =  '00' + (hour || '')
        minute = (minute || '') + '00'

        hour = hour.slice(-2)
        minute = minute.slice(0, 2)
        
        if(!isHourValid(Number(hour))) hour = '00'

        if(Number(minute) > 59) minute = '00'

        console.log(`prev: ${timeValue} | curr: ${hour}:${minute}`)

        return `${hour}:${minute}`
    }

    const onChange = (event: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>, newValue: string) => {
        const sanitazeValue = sanitazeTime(newValue)
        handleChange({
            event,
            elementType: "MaskedTextField",
            name,
            value: sanitazeValue,
            data: sanitazeValue
        })
    }

    return (  
        <MaskedTextField
            name={name}
            maskChar={maskChar}
            mask={mask}
            onChange={onChange}
            value={value || ""}
            disabled={disabled}
            required={required}
            componentRef={ref}
        />
    )
}