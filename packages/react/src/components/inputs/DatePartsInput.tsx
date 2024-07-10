import React, { ChangeEvent } from 'react';
import { FormInputProps } from '../models';
import { DateTime, DateParts, localisations } from '../../state';
import { childInputAttrs, textValue } from '../utils';

export function DatePartsInput({ inputValue, onChange, onBlur, onFocus, ...attrs }: FormInputProps) {

    const date = inputValue as DateParts;

    const onInputChange = ($event: ChangeEvent<HTMLInputElement>) => {
        const newDateParts = { ...date, [$event.target.name]: $event.target.value };
        const newDate = DateTime.validateDateParts(newDateParts);
        onChange(newDateParts, newDate.date);
    };

    const separator = '/'; // todo: get this from the format

    const day = {
        label: localisations.dateInputDayLabel,
        attrs: childInputAttrs(attrs, 'date', { autoComplete: 'bday-day', inputMode: 'numeric', name: 'day' }),
        value: textValue(date.day)
    };

    const month = {
        label: localisations.dateInputMonthLabel,
        attrs: childInputAttrs(attrs, 'date', { autoComplete: 'bday-month', inputMode: 'numeric', name: 'month' }),
        value: textValue(date.month)
    };

    const year = {
        label: localisations.dateInputYearLabel,
        attrs: childInputAttrs(attrs, 'date', { autoComplete: 'bday-year', inputMode: 'numeric', name: 'year' }),
        value: textValue(date.year)
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
        </div>
    );
}
