import React, { ChangeEvent, useContext } from 'react';
import { DateParts, DateTime, DateTimeSettings } from '../../state';
import { FormRenderContext } from '../FormRenderContext';
import { FormInputProps } from '../models';
import { childInputAttrs, textValue } from '../utils';

export function DatePartsInput({ inputValue, onChange, onBlur, onFocus, ...attrs }: FormInputProps) {
    const { localizations } = useContext(FormRenderContext);
    const { field } = attrs;
    const date = inputValue as DateParts;

    const onInputChange = ($event: ChangeEvent<HTMLInputElement>) => {
        const newDateParts = { ...date, [$event.target.name]: $event.target.value };
        const newDate = DateTime.validateDateParts(newDateParts);
        onChange(newDateParts, newDate.date);
    };

    const separator = field?.editor?.properties?.dateSeparator || DateTimeSettings.defaultSeparators.date;

    const day = {
        label: localizations.dates.day,
        attrs: childInputAttrs(attrs, 'date', { autoComplete: 'bday-day', inputMode: 'numeric', name: 'day' }),
        value: textValue(date.day)
    };

    const month = {
        label: localizations.dates.month,
        attrs: childInputAttrs(attrs, 'date', { autoComplete: 'bday-month', inputMode: 'numeric', name: 'month' }),
        value: textValue(date.month)
    };

    const year = {
        label: localizations.dates.year,
        attrs: childInputAttrs(attrs, 'date', { autoComplete: 'bday-year', inputMode: 'numeric', name: 'year' }),
        value: textValue(date.year)
    };

    let input1 = day;
    let input2 = month;
    let input3 = year;
    if (field?.editor?.properties?.dateFormat === DateTimeSettings.dateFormats.mm_dd_yyyy) {
        input1 = month;
        input2 = day;
        input3 = year;
    } else if (field?.editor?.properties?.dateFormat === DateTimeSettings.dateFormats.yyyy_mm_dd) {
        input1 = year;
        input2 = month;
        input3 = day;
    }

    return (
        <div className="form-date-items">
            <div className="form-date-item">
                <label htmlFor={input1.attrs.id}>{input1.label}</label>
                <input type="text" {...input1.attrs} value={input1.value} onChange={onInputChange} onFocus={onFocus} onBlur={onBlur} />
            </div>
            <div className="form-date-separator">{separator}</div>
            <div className="form-date-item">
                <label htmlFor={input2.attrs.id}>{input2.label}</label>
                <input type="text" {...input2.attrs} value={input2.value} onChange={onInputChange} onFocus={onFocus} onBlur={onBlur} />
            </div>
            <div className="form-date-separator">{separator}</div>
            <div className="form-date-item">
                <label htmlFor={input3.attrs.id}>{input3.label}</label>
                <input type="text" {...input3.attrs} value={input3.value} onChange={onInputChange} onFocus={onFocus} onBlur={onBlur} />
            </div>
        </div>
    );
}
