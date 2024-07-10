import React, { ChangeEvent } from 'react';
import { FormInputProps } from '../models';
import { DateTime, localisations, TimeParts } from '../../state';
import { childInputAttrs, textValue } from '../utils';

export function TimePartsInput({ inputValue, onChange, onBlur, onFocus, ...attrs }: FormInputProps) {
    // todo: 12 / 24 clock?
    const time = inputValue as TimeParts;

    const onInputChange = ($event: ChangeEvent<HTMLInputElement>) => {
        const newTimeParts = { ...time, [$event.target.name]: $event.target.value };
        const newTime = DateTime.parseTime(`${newTimeParts.hour}:${newTimeParts.minute}`); // todo: this supports a period for 12/24 hour clock
        onChange(newTimeParts, newTime);
    };

    const hour = {
        label: localisations.dateInputHourLabel,
        attrs: childInputAttrs(attrs, 'time', { autoComplete: 'off', inputMode: 'numeric', name: 'hour' }),
        value: textValue(time.hour)
    };

    const minute = {
        label: localisations.dateInputMinuteLabel,
        attrs: childInputAttrs(attrs, 'time', { autoComplete: 'off', inputMode: 'numeric', name: 'minute' }),
        value: textValue(time.minute)
    };

    return (
        <div className="form-date-items">
            <div className="form-date-item">
                <label htmlFor={hour.attrs.id}>{hour.label}</label>
                <input
                    type="text"
                    {...hour.attrs}
                    value={hour.value}
                    onChange={onInputChange}
                    onFocus={onFocus}
                    onBlur={onBlur}
                />
            </div>
            <div className="form-date-separator">:</div>
            <div className="form-date-item">
                <label htmlFor={minute.attrs.id}>{minute.label}</label>
                <input
                    type="text"
                    {...minute.attrs}
                    value={minute.value}
                    onChange={onInputChange}
                    onFocus={onFocus}
                    onBlur={onBlur}
                />
            </div>
        </div>
    );
}
