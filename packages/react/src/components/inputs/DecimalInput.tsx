import { ChangeEvent } from 'react';
import { useFormField } from '../FormContext';
import { inputAttrs, textValue } from '../utils';
import { FormInputProps } from './models';

export function DecimalInput({ id }: FormInputProps) {
    const field = useFormField(id);
    const onChange = ($event: ChangeEvent<HTMLInputElement>) => {
        const inputValue = $event.target.value;
        const decimalValue = !!inputValue ? Number(inputValue) : null;
        const value = Number.isNaN(decimalValue) ? inputValue : decimalValue;
        field.onChange(inputValue, value);
    };
    return (
        <input
            type="text"            
            {...inputAttrs(field, 'decimal')}
            spellCheck="false"
            value={textValue(field.inputValue)}
            onChange={onChange}
            onFocus={field.onFocus}
            onBlur={field.onBlur}
        />
    );
}
