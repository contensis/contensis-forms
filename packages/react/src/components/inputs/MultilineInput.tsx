import React, { ChangeEvent } from 'react';
import { inputAttrs, textValue } from '../utils';
import { FormInputProps } from '../models';

export function MultilineInput({ inputValue, onChange, onBlur, onFocus, ...attrs }: FormInputProps) {
    const onInputChange = ($event: ChangeEvent<HTMLTextAreaElement>) => {
        onChange($event.target.value);
    };
    return (
        <textarea
            {...inputAttrs(attrs, 'multiline', { placeholder: true })}
            value={textValue(inputValue)}
            onChange={onInputChange}
            onFocus={onFocus}
            onBlur={onBlur}
        />
    );
}
