import { ChangeEvent } from 'react';
import { inputAttrs, textValue } from '../utils';
import { FormInputProps } from '../models';

export function MultilineInput({ inputValue, onChange, onBlur, onFocus, ...attrs }: FormInputProps) {
    const onInputChange = ($event: ChangeEvent<HTMLTextAreaElement>) => {
        onChange($event.target.value);
    };
    return (
        <textarea {...inputAttrs(attrs, 'multiline', { rows: 4 })} value={textValue(inputValue)} onChange={onInputChange} onFocus={onFocus} onBlur={onBlur} />
    );
}
