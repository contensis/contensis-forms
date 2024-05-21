import { ReactNode } from 'react';
import { useFormField } from './FormContext';
import { FormFieldErrors } from './FormFieldErrors';
import { FormFieldFooter } from './FormFieldFooter';
import { FormFieldInstructions } from './FormFieldInstructions';
import { FormFieldLabel } from './FormFieldLabel';
import { formFieldCss } from './utils';

type FormFieldProps = { id: string, children?: ReactNode };

export function FormField(props: FormFieldProps) {
    const field = useFormField(props.id);
    return (
        <div className={formFieldCss(field, 'field')}>
            <FormFieldLabel id={props.id} />
            <FormFieldInstructions id={props.id} />
            <FormFieldErrors id={props.id} />
            <div className="form-field-input-container">
                {props.children}
            </div>
            <FormFieldFooter id={props.id} />
        </div>
    );
}
