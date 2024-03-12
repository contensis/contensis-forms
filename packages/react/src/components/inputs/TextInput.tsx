import { ChangeEvent } from 'react';
import { useFormField } from '../FormContext';
import { inputAttrs, textValue } from '../utils';
import { FormInputProps } from './models';

export function TextInput({ id }: FormInputProps) {
    const field = useFormField(id);
    const onChange = ($event: ChangeEvent<HTMLInputElement>) => {
        field.onChange($event.target.value);
    };    
    return (
        <input
            type="text"
            {...inputAttrs(field, 'text')}
            value={textValue(field.inputValue)}
            onChange={onChange}
            onFocus={field.onFocus}
            onBlur={field.onBlur}
        />
    );
}
