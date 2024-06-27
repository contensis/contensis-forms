import { ChangeEvent } from 'react';
import { inputAttrs, textValue } from '../utils';
import { FormInputProps } from '../models';

export function TelInput({ inputValue, onChange, onBlur, onFocus, ...attrs }: FormInputProps) {
    const onInputChange = ($event: ChangeEvent<HTMLInputElement>) => {
        onChange($event.target.value);
    };
    return (
        <input
            type="tel"
            {...inputAttrs(attrs, 'tel', { autoComplete: 'tel', placeholder: true })}
            spellCheck="false"
            value={textValue(inputValue)}
            onChange={onInputChange}
            onFocus={onFocus}
            onBlur={onBlur}
        />
    );
}
