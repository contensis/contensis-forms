import { ChangeEvent } from 'react';
import { parseDate } from '../../dates';
import { inputAttrs, textValue } from '../utils';
import { FormInputProps } from '../models';

export function DateInput({ inputValue, onChange, onBlur, onFocus, ...attrs }: FormInputProps) {
    const onInputChange = ($event: ChangeEvent<HTMLInputElement>) => {
        const date = parseDate($event.target.value);
        onChange($event.target.value, date);
    };

    return (
        <>
            <input
                type="text"
                {...inputAttrs(attrs, 'date', { autoComplete: 'bday' })}
                value={textValue(inputValue)}
                onChange={onInputChange}
                onFocus={onFocus}
                onBlur={onBlur}
            />
        </>
    );
}
