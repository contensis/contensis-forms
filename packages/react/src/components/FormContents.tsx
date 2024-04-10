import { useFormSelector } from './FormContext';
import { FormCurrentPage } from './FormCurrentPage';

export function FormContents() {
    const value = useFormSelector(f => f.selectValue);
    const inputValue = useFormSelector(f => f.selectInputValue);
    return (
        <>
            <FormCurrentPage />
            {/* todo: remove below */}
            <pre>{JSON.stringify(value, null, '\t')}</pre>
            <pre>{JSON.stringify(inputValue, null, '\t')}</pre>
        </>
    );
}
