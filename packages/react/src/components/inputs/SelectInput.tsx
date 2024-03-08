import { ChangeEvent } from 'react';
import { useFormField } from '../FormContext';
import { inputAttrs, textValue } from '../utils';
import { FormInputProps } from './models';

export function SelectInput({ id }: FormInputProps) {
    const field = useFormField(id);
    const onChange = ($event: ChangeEvent<HTMLSelectElement>) => {
        field.onChange($event.target.value);
    };
    return (
        <select
            {...inputAttrs(field, 'select')}
            value={textValue(field.inputValue)}
            onChange={onChange}
            onFocus={field.onFocus}
            onBlur={field.onBlur}
        >
            {field.options?.map((option) => (
                <option value={option.value} key={option.key}>
                    {option.label}
                </option>
            ))}
        </select>
    );
}
