import { ChangeEvent } from 'react';
import { DateTime } from '../../state';
import { FormInputProps } from '../models';
import { inputAttrs, textValue } from '../utils';

// todo: add alternative editor with 3 text boxes, do the same for dates and time inputs

export function DateTimeInput({ inputValue, onChange, onBlur, onFocus, ...attrs }: FormInputProps) {
    const onInputChange = ($event: ChangeEvent<HTMLInputElement>) => {
        const date = DateTime.parseDateTime($event.target.value);
        onChange($event.target.value, date);
    };

    return (
        <>
            <input
                type="text"
                {...inputAttrs(attrs, 'date-time', { autoComplete: 'bday' })}
                value={textValue(inputValue)}
                onChange={onInputChange}
                onFocus={onFocus}
                onBlur={onBlur}
            />
        </>
    );
}
