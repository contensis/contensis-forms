import React, { ChangeEvent, useContext } from 'react';
import { DateTime, DateTimeSettings, TimeParts } from '../../state';
import { FormRenderContext } from '../FormRenderContext';
import { FormInputProps } from '../models';
import { childInputAttrs, textValue } from '../utils';

export function TimePartsInput({ inputValue, onChange, onBlur, onFocus, ...attrs }: FormInputProps) {
    const { localizations } = useContext(FormRenderContext);
    const { field } = attrs;
    const time = inputValue as TimeParts;

    const timeSeparator = field?.editor?.properties?.timeSeparator || DateTimeSettings.defaultSeparators.time;

    const onInputChange = ($event: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const newTimeParts = { ...time, [$event.target.name]: $event.target.value };
        const newTime = DateTime.validateTimeParts(newTimeParts);
        onChange(newTimeParts, newTime.time);
    };

    const hour = {
        label: localizations.dates.hour,
        attrs: childInputAttrs(attrs, 'time', { autoComplete: 'off', inputMode: 'numeric', name: 'hour' }),
        value: textValue(time.hour)
    };

    const minute = {
        label: localizations.dates.minute,
        attrs: childInputAttrs(attrs, 'time', { autoComplete: 'off', inputMode: 'numeric', name: 'minute' }),
        value: textValue(time.minute)
    };

    const period = {
        label: localizations.dates.period,
        attrs: childInputAttrs(attrs, 'time', { name: 'period' }),
        value: textValue(time.period)
    };

    return (
        <div className="form-date-items">
            <div className="form-date-item">
                <label htmlFor={hour.attrs.id}>{hour.label}</label>
                <input type="text" {...hour.attrs} value={hour.value} onChange={onInputChange} onFocus={onFocus} onBlur={onBlur} />
            </div>
            <div className="form-date-separator">{timeSeparator}</div>
            <div className="form-date-item">
                <label htmlFor={minute.attrs.id}>{minute.label}</label>
                <input type="text" {...minute.attrs} value={minute.value} onChange={onInputChange} onFocus={onFocus} onBlur={onBlur} />
            </div>
            {time.timeFormat === '12h' ? (
                <>
                    <div className="form-date-separator">{timeSeparator}</div>
                    <div className="form-date-item">
                        <label htmlFor={period.attrs.id}>{period.label}</label>
                        <select {...period.attrs} value={period.value} onChange={onInputChange} onFocus={onFocus} onBlur={onBlur}>
                            <option value={DateTimeSettings.timePeriods.am}>{DateTimeSettings.timePeriods.am}</option>
                            <option value={DateTimeSettings.timePeriods.pm}>{DateTimeSettings.timePeriods.pm}</option>
                        </select>
                    </div>
                </>
            ) : null}
        </div>
    );
}
