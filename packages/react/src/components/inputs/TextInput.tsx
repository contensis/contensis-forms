import { ChangeEvent } from 'react';
import { inputAttrs, textValue } from '../utils';
import { FormInputProps } from '../models';

export function TextInput({ inputValue, onChange, onBlur, onFocus, ...attrs }: FormInputProps) {
    const onInputChange = ($event: ChangeEvent<HTMLInputElement>) => {
        onChange($event.target.value);
    };
    return <input type="text" {...inputAttrs(attrs, 'text', {placeholder:true})} value={textValue(inputValue)} onChange={onInputChange} onFocus={onFocus} onBlur={onBlur} />;
}
