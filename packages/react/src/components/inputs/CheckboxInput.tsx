import { ChangeEvent } from 'react';
import { inputAttrs } from '../utils';
import { FormInputProps } from '../models';

export function CheckboxInput({ inputValue, onChange, onBlur, onFocus, ...attrs }: FormInputProps) {
    const onInputChange = ($event: ChangeEvent<HTMLInputElement>) => {
        onChange($event.target.checked);
    };
    return (
        <input
            type="checkbox"
            {...inputAttrs(attrs, 'checkbox')}
            checked={!!inputValue}
            onChange={onInputChange}
            onFocus={onFocus}
            onBlur={onBlur}
        />
    );
}
