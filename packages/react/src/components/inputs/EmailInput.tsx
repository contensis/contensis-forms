import { ChangeEvent } from 'react';
import { inputAttrs, textValue } from '../utils';
import { FormInputProps } from '../models';

export function EmailInput({ inputValue, onChange, onBlur, onFocus, ...attrs }: FormInputProps) {
    const onInputChange = ($event: ChangeEvent<HTMLInputElement>) => {
        onChange($event.target.value);
    };
    return (
        <input
            type="email"
            {...inputAttrs(attrs, 'email', { autoComplete: 'email', placeholder: true })}
            spellCheck="false"
            value={textValue(inputValue)}
            onChange={onInputChange}
            onFocus={onFocus}
            onBlur={onBlur}
        />
    );
}
