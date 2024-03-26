import { useFormSelector } from './FormContext';

export function FormOutput() {
    const focussed = useFormSelector(f => f.selectFocussed);
    const value = useFormSelector(f => f.selectValue);
    const inputValue = useFormSelector(f => f.selectInputValue);
    return (
        <div>
            <pre>{JSON.stringify(focussed, null, '\t')}</pre>
            <pre>{JSON.stringify(value, null, '\t')}</pre>
            <pre>{JSON.stringify(inputValue, null, '\t')}</pre>
        </div>
    )
}