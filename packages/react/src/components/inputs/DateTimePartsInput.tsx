import React, { ChangeEvent } from 'react';
import { DateTime, DateTimeParts, localisations } from '../../state';
import { FormInputProps } from '../models';
import { childInputAttrs, textValue } from '../utils';

export function DateTimePartsInput({ inputValue, onChange, onBlur, onFocus, ...attrs }: FormInputProps) {
    // todo: 12 / 24 clock?
    const dateTime = inputValue as DateTimeParts;

    const onInputChange = ($event: ChangeEvent<HTMLInputElement>) => {
        const newDateTimeParts = { ...dateTime, [$event.target.name]: $event.target.value };
        const newDateTime = DateTime.validateDateTimeParts(newDateTimeParts); // todo: does this need a period
        onChange(newDateTimeParts, newDateTime.datetime);
    };

    const separator = '/'; // todo: get this from the format

    const day = {
        label: localisations.dateInputDayLabel,
        attrs: childInputAttrs(attrs, 'date', { autoComplete: 'bday-day', inputMode: 'numeric', name: 'day' }),
        value: textValue(dateTime.day)
    };

    const month = {
        label: localisations.dateInputMonthLabel,
        attrs: childInputAttrs(attrs, 'date', { autoComplete: 'bday-month', inputMode: 'numeric', name: 'month' }),
        value: textValue(dateTime.month)
    };

    const year = {
        label: localisations.dateInputYearLabel,
        attrs: childInputAttrs(attrs, 'date', { autoComplete: 'bday-year', inputMode: 'numeric', name: 'year' }),
        value: textValue(dateTime.year)
    };

    const hour = {
        label: localisations.dateInputHourLabel,
        attrs: childInputAttrs(attrs, 'time', { autoComplete: 'off', inputMode: 'numeric', name: 'hour' }),
        value: textValue(dateTime.hour)
    };

    const minute = {
        label: localisations.dateInputMinuteLabel,
        attrs: childInputAttrs(attrs, 'time', { autoComplete: 'off', inputMode: 'numeric', name: 'minute' }),
        value: textValue(dateTime.minute)
    };

    // todo: get this from the date format
    const input1 = day;
    const input2 = month;
    const input3 = year;

    return (
        <div className="form-date-items">
            <div className="form-date-item">
                <label htmlFor={input1.attrs.id}>{input1.label}</label>
                <input
                    type="text"
                    {...input1.attrs}
                    value={input1.value}
                    onChange={onInputChange}
                    onFocus={onFocus}
                    onBlur={onBlur}
                />
            </div>
            <div className="form-date-separator">{separator}</div>
            <div className="form-date-item">
                <label htmlFor={input2.attrs.id}>{input2.label}</label>
                <input
                    type="text"
                    {...input2.attrs}
                    value={input2.value}
                    onChange={onInputChange}
                    onFocus={onFocus}
                    onBlur={onBlur}
                />
            </div>
            <div className="form-date-separator">{separator}</div>
            <div className="form-date-item">
                <label htmlFor={input3.attrs.id}>{input3.label}</label>
                <input
                    type="text"
                    {...input3.attrs}
                    value={input3.value}
                    onChange={onInputChange}
                    onFocus={onFocus}
                    onBlur={onBlur}
                />
            </div>
            <div className="form-date-separator"> </div>
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
