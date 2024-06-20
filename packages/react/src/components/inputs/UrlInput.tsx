import { ChangeEvent } from 'react';
import { inputAttrs, textValue } from '../utils';
import { FormInputProps } from '../models';

export function UrlInput({ inputValue, onChange, onBlur, onFocus, ...attrs }: FormInputProps) {
    const onInputChange = ($event: ChangeEvent<HTMLInputElement>) => {
        onChange($event.target.value);
    };
    return (
        <input
            type="url"
            {...inputAttrs(attrs, 'url', { autoComplete: 'url' })}
            spellCheck="false"
            value={textValue(inputValue)}
            onChange={onInputChange}
            onFocus={onFocus}
            onBlur={onBlur}
        />
    );
}
