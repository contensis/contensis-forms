import { ChangeEvent } from 'react';
import { parseTime } from '../../dates';
import { inputAttrs, textValue } from '../utils';
import { FormInputProps } from '../models';

export function TimeInput({ inputValue, onChange, onBlur, onFocus, ...attrs }: FormInputProps) {
    const onInputChange = ($event: ChangeEvent<HTMLInputElement>) => {
        const time = parseTime($event.target.value);
        onChange($event.target.value, time);
    };  

    return (
        <>
            <input
                type="text"
                {...inputAttrs(attrs, 'time', { autoComplete: 'off' })}
                value={textValue(inputValue)}
                onChange={onInputChange}
                onFocus={onFocus}
                onBlur={onBlur}
            />
        </>
    );
}
