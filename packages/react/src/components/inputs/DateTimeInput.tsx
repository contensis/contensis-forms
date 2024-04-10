import { ChangeEvent } from 'react';
import { parseDateTime } from '../../dates';
import { useFormField } from '../FormContext';
import { inputAttrs, textValue } from '../utils';
import { FormInputProps } from './models';

export function DateTimeInput({ id }: FormInputProps) {
    const field = useFormField(id);

    const onChange = ($event: ChangeEvent<HTMLInputElement>) => {
        const date = parseDateTime($event.target.value, !!field.field.editor?.properties?.includeTimeZoneOffset);
        field.onChange($event.target.value, date);
    };  

    return (
        <>
            <input
                type="text"
                {...inputAttrs(field, 'date-time')}
                value={textValue(field.inputValue)}
                onChange={onChange}
                onFocus={field.onFocus}
                onBlur={field.onBlur}
            />
        </>
    );
}
