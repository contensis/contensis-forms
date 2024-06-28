import React, { ChangeEvent } from 'react';
import { inputAttrs, textValue } from '../utils';
import { FormInputProps } from '../models';

export function SelectInput({ inputValue, options, onChange, onBlur, onFocus, ...attrs }: FormInputProps) {
    const onInputChange = ($event: ChangeEvent<HTMLSelectElement>) => {
        onChange($event.target.value);
    };
    return (
        <select {...inputAttrs(attrs, 'select', {})} value={textValue(inputValue)} onChange={onInputChange} onFocus={onFocus} onBlur={onBlur}>
            {options?.map((option) => (
                <option value={option.value} key={option.key}>
                    {option.label}
                </option>
            ))}
        </select>
    );
}
