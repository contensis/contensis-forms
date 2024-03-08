import { ChangeEvent } from 'react';
import { useFormField } from '../FormContext';
import { FormInputProps } from './models';

export function RadioInput({ id }: FormInputProps) {
    const field = useFormField(id);
    const onChange = ($event: ChangeEvent<HTMLInputElement>) => {
        field.onChange($event.target.value);
    };
    return (
        <div className="form-radio-list">
            {field.options?.map((option, index) => (
                <div className="form-radio" key={option.key}>
                    <input
                        type="radio"
                        ref={(index === 0) ? field.inputRef : undefined}
                        className="form-radio-input"
                        id={option.htmlId}
                        name={field.htmlId}
                        value={option.value}
                        checked={field.value === option.value}
                        onChange={onChange}
                        onFocus={field.onFocus}
                        onBlur={field.onBlur}
                    />
                    <label
                        className="form-radio-label"
                        htmlFor={option.htmlId}
                    >
                        {option.label}
                    </label>
                </div>
            ))}
        </div>
    );
}
