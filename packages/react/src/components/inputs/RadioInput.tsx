import { ChangeEvent } from 'react';
import { FormInputProps } from '../models';

export function RadioInput({ onChange, options, htmlId, inputRef, value, onBlur, onFocus }: FormInputProps) {
    const onInputChange = ($event: ChangeEvent<HTMLInputElement>) => {
        onChange($event.target.value);
    };
    return (
        <div className="form-radio-list">
            {options?.map((option, index) => (
                <div className="form-radio" key={option.key}>
                    <input
                        type="radio"
                        ref={index === 0 ? inputRef : undefined}
                        className="form-radio-input"
                        id={option.htmlId}
                        name={htmlId}
                        value={option.value}
                        checked={value === option.value}
                        onChange={onInputChange}
                        onFocus={onFocus}
                        onBlur={onBlur}
                    />
                    <label className="form-radio-label" htmlFor={option.htmlId}>
                        {option.label}
                    </label>
                </div>
            ))}
        </div>
    );
}
