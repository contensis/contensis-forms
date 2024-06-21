import { ChangeEvent } from 'react';
import { inputAttrs, textValue } from '../utils';
import { FormInputProps } from '../models';

export function DecimalInput({ inputValue, onChange, onBlur, onFocus, ...attrs }: FormInputProps) {
    const onInputChange = ($event: ChangeEvent<HTMLInputElement>) => {
        const inputValue = $event.target.value;
        const decimalValue = !!inputValue ? Number(inputValue) : null;
        const value = Number.isNaN(decimalValue) ? inputValue : decimalValue;
        onChange(inputValue, value);
    };
    return (
        <input
            type="text"
            {...inputAttrs(attrs, 'decimal')}
            spellCheck="false"
            value={textValue(inputValue)}
            onChange={onInputChange}
            onFocus={onFocus}
            onBlur={onBlur}
        />
    );
}
