import React, { useContext } from 'react';
import { FormRenderContext } from './FormRenderContext';
import { FormInputProps } from './models';
import { errorsId } from './utils';

export function FormFieldErrors({ showErrors, errors, errorMessage, ...attrs }: FormInputProps) {
    const { localizations } = useContext(FormRenderContext);
    return showErrors && errors ? (
        <div id={errorsId(attrs)} className="form-field-error">
            <span className="visually-hidden">{localizations.error.label}:</span> {errorMessage}
        </div>
    ) : null;
}
