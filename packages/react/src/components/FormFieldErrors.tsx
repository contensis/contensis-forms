import { localisations } from '../state';
import { FormInputProps } from './models';
import { errorsId } from './utils';

export function FormFieldErrors({ showErrors, errors, errorMessage, ...attrs}: FormInputProps) {
    return (showErrors && errors)
        ? (
            <div id={errorsId(attrs)} className="form-field-error">
                <span className="visually-hidden">{localisations.errorLabel}:</span> {errorMessage}
            </div>
        ): null;
}
