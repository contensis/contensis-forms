import { ChangeEvent } from 'react';
import { parseTime } from '../../dates';
import { useFormField } from '../FormContext';
import { inputAttrs, textValue } from '../utils';
import { FormInputProps } from './models';

export function TimeInput({ id }: FormInputProps) {
    const field = useFormField(id);

    const onChange = ($event: ChangeEvent<HTMLInputElement>) => {
        const time = parseTime($event.target.value);
        field.onChange($event.target.value, time);
    };  

    return (
        <>
            <input
                type="text"
                {...inputAttrs(field, 'time', { autoComplete: 'off' })}
                value={textValue(field.inputValue)}
                onChange={onChange}
                onFocus={field.onFocus}
                onBlur={field.onBlur}
            />
        </>
    );
}
