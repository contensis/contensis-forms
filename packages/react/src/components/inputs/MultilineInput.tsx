import { ChangeEvent } from 'react';
import { useFormField } from '../FormContext';
import { inputAttrs, textValue } from '../utils';
import { FormInputProps } from './models';

export function MultilineInput({ id }: FormInputProps) {
    const field = useFormField(id);
    const onChange = ($event: ChangeEvent<HTMLTextAreaElement>) => {
        field.onChange($event.target.value);
    };
    return (
        <textarea
            {...inputAttrs(field, 'multiline', { cssSuffix: [field.rows ? 'rows' : 'no-rows'] })}
            value={textValue(field.inputValue)}
            onChange={onChange}
            onFocus={field.onFocus}
            onBlur={field.onBlur}
        />
    );
}
