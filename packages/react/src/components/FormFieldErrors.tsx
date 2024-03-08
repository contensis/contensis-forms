import { localisations } from '../state';
import { useFormField } from './FormContext';
import { errorsId } from './utils';

type FormFieldErrorsProps = { id: string };

export function FormFieldErrors(props: FormFieldErrorsProps) {
    const field = useFormField(props.id);
    return (field.showErrors && field.errors)
        ? (
            <div id={errorsId(field)} className="form-field-error">
                <span className="visually-hidden">{localisations.errorLabel}:</span> {field.errorMessage}
            </div>
        ): null;
}
