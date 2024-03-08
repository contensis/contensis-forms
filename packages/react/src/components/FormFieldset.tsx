import { ReactNode } from 'react';
import { useFormField } from './FormContext';
import { FormFieldErrors } from './FormFieldErrors';
import { FormFieldInstructions } from './FormFieldInstructions';
import { formFieldCss, instructionsId } from './utils';

type FormFieldProps = { id: string, children?: ReactNode };

export function FormFieldset(props: FormFieldProps) {
    const field = useFormField(props.id);
    return (
        <fieldset 
            className={formFieldCss(field, 'fieldset')}
            aria-describedby={instructionsId(field)}
        >
            <legend>{field.label}</legend>
            <FormFieldInstructions id={props.id} />
            <FormFieldErrors id={props.id} />
            <div className="form-fieldset-input-container">
                {props.children}
            </div>
        </fieldset>
    );
}
