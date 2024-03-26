import { ChangeEvent } from 'react';
import { useFormField } from '../FormContext';
import { inputAttrs, textValue } from '../utils';
import { FormInputProps } from './models';
import { parseTime } from './dates/time-parsing';

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
                {...inputAttrs(field, 'time')}
                value={textValue(field.inputValue)}
                onChange={onChange}
                onFocus={field.onFocus}
                onBlur={field.onBlur}
            />
        </>
    );
}
