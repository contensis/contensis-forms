import { ChangeEvent } from 'react';
import { useFormField } from '../FormContext';
import { inputAttrs } from '../utils';
import { FormInputProps } from './models';

export function CheckboxInput({ id }: FormInputProps) {
    const field = useFormField(id);
    const onChange = ($event: ChangeEvent<HTMLInputElement>) => {
        field.onChange($event.target.checked);
    };
    return (
        <input
            type="checkbox"
            {...inputAttrs(field, 'checkbox')}
            checked={!!field.inputValue}
            onChange={onChange}
            onFocus={field.onFocus}
            onBlur={field.onBlur}
        />
    );
}
