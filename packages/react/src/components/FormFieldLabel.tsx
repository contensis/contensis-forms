import { localisations } from '../state';
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
                <RequiredLabelText label={field.label} required={field.required} requiredClassName="form-field-label-required"></RequiredLabelText>
            </label>
        </div>
    );
}

type RequiredLabelTextProps = {
    label: string;
    required: boolean;
    requiredClassName: string;
};

export function RequiredLabelText(props: RequiredLabelTextProps) {
    return (
        <>
            {props.label} {props.required ? <abbr className={props.requiredClassName} title={localisations.requiredLabel}>*</abbr> : ''}
        </>
    );
}