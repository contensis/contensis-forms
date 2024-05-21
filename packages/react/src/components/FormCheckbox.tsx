import { ReactNode } from 'react';
import { useFormField } from './FormContext';
import { FormFieldErrors } from './FormFieldErrors';
import { FormFieldFooter } from './FormFieldFooter';
import { FormFieldInstructions } from './FormFieldInstructions';
import { formFieldCss, inputId } from './utils';
import { RequiredLabelText } from './FormFieldLabel';

type FormCheckboxProps = { id: string, children?: ReactNode };

export function FormCheckbox(props: FormCheckboxProps) {
    const field = useFormField(props.id);
    return (
        <div className={formFieldCss(field, 'checkbox-field')}>
            <FormFieldInstructions id={props.id} />
            <div className="form-checkbox">
                {props.children}
                <label
                    className="form-checkbox-label form-checkbox-field-label"
                    htmlFor={inputId(field)}>
                    <RequiredLabelText label={field.label} required={field.required} requiredClassName="form-checkbox-field-label-required"></RequiredLabelText>
                </label>
            </div>
            <FormFieldErrors id={props.id} />
            <FormFieldFooter id={props.id} />
        </div>
    );
}
