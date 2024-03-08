import { ChangeEvent } from 'react';
import { useFormField } from '../FormContext';
import { inputAttrs, textValue } from '../utils';
import { FormInputProps } from './models';

export function IntegerInput({ id }: FormInputProps) {
    const field = useFormField(id);
    const onChange = ($event: ChangeEvent<HTMLInputElement>) => {
        const inputValue = $event.target.value;
        const integerValue = !!inputValue ? Number(inputValue) : null;
        const value = Number.isNaN(integerValue) ? inputValue : integerValue;
        field.onChange(inputValue, value);
    };
    return (
        <input
            type="text"            
            {...inputAttrs(field, 'integer')}
            spellCheck="false"
            inputMode="numeric"
            pattern="[0-9]*"
            value={textValue(field.inputValue)}
            onChange={onChange}
            onFocus={field.onFocus}
            onBlur={field.onBlur}
        />
    );
}
