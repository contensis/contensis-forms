import { ChangeEvent } from 'react';
import { parseDate } from '../../dates';
import { useFormField } from '../FormContext';
import { inputAttrs, textValue } from '../utils';
import { FormInputProps } from './models';

export function DateInput({ id }: FormInputProps) {
    const field = useFormField(id);

    const onChange = ($event: ChangeEvent<HTMLInputElement>) => {
        const date = parseDate($event.target.value);
        field.onChange($event.target.value, date);
    };

    return (
        <>
            <input
                type="text"
                {...inputAttrs(field, 'date')}
                value={textValue(field.inputValue)}
                onChange={onChange}
                onFocus={field.onFocus}
                onBlur={field.onBlur}
            />
        </>
    );
}
