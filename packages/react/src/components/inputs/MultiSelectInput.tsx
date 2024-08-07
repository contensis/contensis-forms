import React, { ChangeEvent } from 'react';
import { Nullable } from '../../models';
import { FormInputProps } from '../models';
import { attr } from '../utils';

export function MultiSelectInput({ value: unknownValue, options, inputRef, htmlId, onChange, onBlur, onFocus }: FormInputProps) {
    const value = unknownValue as Nullable<string[]>;

    const onInputChange = ($event: ChangeEvent<HTMLInputElement>) => {
        let newValue = value || [];
        if ($event.target.checked) {
            if (!newValue.includes($event.target.value)) {
                onChange([...newValue, $event.target.value]);
            }
        } else {
            if (newValue.includes($event.target.value)) {
                onChange(newValue.filter((v) => v !== $event.target.value));
            }
        }
    };
    return (
        <div className="form-checkbox-list">
            {options?.map((option, index) => (
                <div className={attr('form-checkbox', { 'form-checkbox--checked': !!value?.includes(option.value) })} key={option.key}>
                    <input
                        type="checkbox"
                        ref={index === 0 ? inputRef : undefined}
                        className="form-checkbox-input"
                        id={option.htmlId}
                        name={htmlId}
                        value={option.value}
                        checked={!!value?.includes(option.value)}
                        onChange={onInputChange}
                        onFocus={onFocus}
                        onBlur={onBlur}
                    />
                    <label className="form-checkbox-label" htmlFor={option.htmlId}>
                        {option.label}
                    </label>
                </div>
            ))}
        </div>
    );
}
