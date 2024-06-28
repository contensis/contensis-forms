import React, { ChangeEvent } from 'react';
import { inputAttrs, textValue } from '../utils';
import { FormInputProps } from '../models';

export function IntegerInput({ inputValue, onChange, onBlur, onFocus, ...attrs }: FormInputProps) {
    const onInputChange = ($event: ChangeEvent<HTMLInputElement>) => {
        const inputValue = $event.target.value;
        const integerValue = !!inputValue ? Number(inputValue) : null;
        const value = Number.isNaN(integerValue) ? inputValue : integerValue;
        onChange(inputValue, value);
    };
    return (
        <input
            type="text"
            {...inputAttrs(attrs, 'integer', { placeholder: true })}
            spellCheck="false"
            inputMode="numeric"
            pattern="[0-9]*"
            value={textValue(inputValue)}
            onChange={onInputChange}
            onFocus={onFocus}
            onBlur={onBlur}
        />
    );
}
