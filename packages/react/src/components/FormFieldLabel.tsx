import { localisations } from '../state';
import { FormInputProps } from './models';
import { inputId } from './utils';

export function FormFieldLabel(props: FormInputProps) {
    return (
        <div className="form-field-label-container">
            <label
                className="form-field-label"
                htmlFor={inputId(props)}>
                <RequiredLabelText label={props.label} required={props.required} requiredClassName="form-field-label-required"></RequiredLabelText>
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