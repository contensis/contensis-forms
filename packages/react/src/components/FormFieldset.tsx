import React from 'react';
import { FormFieldErrors } from './FormFieldErrors';
import { FormFieldInstructions } from './FormFieldInstructions';
import { RequiredLabelText } from './FormFieldLabel';
import { FormContainerProps } from './models';
import { formFieldCss, instructionsId } from './utils';

export function FormFieldset(props: FormContainerProps) {
    return (
        <fieldset className={formFieldCss(props, 'fieldset')} {...(props.instructions ? { 'aria-describedby': instructionsId(props) } : {})}>
            <legend className="form-field-legend">
                <RequiredLabelText label={props.label} required={props.required} requiredClassName="form-field-legend-required"></RequiredLabelText>
            </legend>
            <FormFieldInstructions {...props} />
            <FormFieldErrors {...props} />
            <div className="form-fieldset-input-container">{props.children}</div>
        </fieldset>
    );
}
