import React from 'react';
import { FormFieldErrors } from './FormFieldErrors';
import { FormFieldFooter } from './FormFieldFooter';
import { FormFieldInstructions } from './FormFieldInstructions';
import { RequiredLabelText } from './FormFieldLabel';
import { FormContainerProps } from './models';
import { attr, formFieldCss, inputId } from './utils';

export function FormCheckbox(props: FormContainerProps) {
    return (
        <div className={formFieldCss(props, 'checkbox-field')}>
            <FormFieldInstructions {...props} />
            <FormFieldErrors {...props} />
            <div className={attr('form-checkbox', { 'form-checkbox--checked': !!props.inputValue })}>
                {props.children}
                <label className="form-checkbox-label form-checkbox-field-label" htmlFor={inputId(props)}>
                    <RequiredLabelText label={props.label} required={props.required} requiredClassName="form-checkbox-field-label-required"></RequiredLabelText>
                </label>
            </div>
            <FormFieldFooter {...props} />
        </div>
    );
}
