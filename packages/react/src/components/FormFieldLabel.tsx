import { useFormField } from './FormContext';
import { inputId } from './utils';

type FormFieldLabelProps = { id: string };

export function FormFieldLabel(props: FormFieldLabelProps) {
    const field = useFormField(props.id);
    return (
        <div className="form-field-label-container">
            <label
                className="form-field-label"
                htmlFor={inputId(field)}>
                {field.label}
            </label>
        </div>
    );
}
