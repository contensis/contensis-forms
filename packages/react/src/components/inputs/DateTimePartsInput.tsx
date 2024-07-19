import React, { ChangeEvent } from 'react';
import { DateTime, DateTimeParts, DateTimeSettings, localisations } from '../../state';
import { FormInputProps } from '../models';
import { childInputAttrs, textValue } from '../utils';

export function DateTimePartsInput({ inputValue, onChange, onBlur, onFocus, ...attrs }: FormInputProps) {
    const { field } = attrs;
    const dateTime = inputValue as DateTimeParts;

    const onInputChange = ($event: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const newDateTimeParts = { ...dateTime, [$event.target.name]: $event.target.value };
        const newDateTime = DateTime.validateDateTimeParts(newDateTimeParts);
        onChange(newDateTimeParts, newDateTime.datetime);
    };

    const separator = field?.editor?.properties?.dateSeparator || DateTimeSettings.defaultSeparators.date;
    const timeSeparator = field?.editor?.properties?.timeSeparator || DateTimeSettings.defaultSeparators.time;

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

    const period = {
        label: localisations.dateInputPeriodLabel,
        attrs: childInputAttrs(attrs, 'time', { name: 'period' }),
        value: textValue(dateTime.period)
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
            <div className="form-date-separator">{timeSeparator}</div>
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
            {(dateTime.timeFormat === '12h') ? (
                <>
                    <div className="form-date-separator">{timeSeparator}</div>
                    <div className="form-date-item">
                        <label htmlFor={period.attrs.id}>{period.label}</label>
                        <select
                            {...period.attrs}
                            value={period.value}
                            onChange={onInputChange}
                            onFocus={onFocus}
                            onBlur={onBlur}
                        >
                            <option value={DateTimeSettings.timePeriods.am}>{DateTimeSettings.timePeriods.am}</option>
                            <option value={DateTimeSettings.timePeriods.pm}>{DateTimeSettings.timePeriods.pm}</option>
                        </select>
                    </div>
                </>
            ) : null}
        </div>
    );
}
