import { ChangeEvent } from 'react';
import { useFormField } from '../FormContext';
import { FormInputProps } from './models';
import { Nullable } from '../../models';

export function MultiSelectInput({ id }: FormInputProps) {
    const field = useFormField(id);
    const value: Nullable<any[]> = field.value;

    const onChange = ($event: ChangeEvent<HTMLInputElement>) => {
        let newValue = value || [];
        if ($event.target.checked) {
            if (!newValue.includes($event.target.value)) {
                field.onChange([...newValue, $event.target.value]);
            }
        } else {
            if (newValue.includes($event.target.value)) {
                field.onChange(newValue.filter(v => v !== $event.target.value));
            }
        }
    };
    return (
        <div className="form-checkbox-list">
            {field.options?.map((option, index) => (
                <div className="form-checkbox" key={option.key}>
                    <input
                        type="checkbox"
                        ref={(index === 0) ? field.inputRef : undefined}
                        className="form-checkbox-input"
                        id={option.htmlId}
                        name={field.htmlId}
                        value={option.value}
                        checked={!!value?.includes(option.value)}
                        onChange={onChange}
                        onFocus={field.onFocus}
                        onBlur={field.onBlur}
                    />
                    <label
                        className="form-checkbox-label"
                        htmlFor={option.htmlId}
                    >
                        {option.label}
                    </label>
                </div>
            ))}
        </div>
    );
}
