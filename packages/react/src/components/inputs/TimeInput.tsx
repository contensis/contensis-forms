import { ChangeEvent } from 'react';
import { DateTime } from '../../state';
import { FormInputProps } from '../models';
import { inputAttrs, textValue } from '../utils';

export function TimeInput({ inputValue, onChange, onBlur, onFocus, ...attrs }: FormInputProps) {
    const onInputChange = ($event: ChangeEvent<HTMLInputElement>) => {
        const time = DateTime.parseTime($event.target.value);
        onChange($event.target.value, time);
    };

    return (
        <>
            <input
                type="text"
                {...inputAttrs(attrs, 'time', { autoComplete: 'off', placeholder:false })}
                value={textValue(inputValue)}
                onChange={onInputChange}
                onFocus={onFocus}
                onBlur={onBlur}
            />
        </>
    );
}
