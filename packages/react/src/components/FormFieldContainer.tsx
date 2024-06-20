import { FormFieldContainer as FormFieldContainerType } from '../models';
import { FormCheckbox } from './FormCheckbox';
import { FormField } from './FormField';
import { FormFieldset } from './FormFieldset';
import { DEFAULT_INPUTS } from './inputs';
import { FormContainer, FormFieldContainerProps, FormInputProps } from './models';
import { getErrorMessages, getFieldEditorType, getOptions } from '../state';
import { DEFAULT_CONTAINERS_TYPES } from './FormContext';

export const DEFAULT_CONTAINERS: Record<FormFieldContainerType, FormContainer> = {
    checkbox: FormCheckbox,
    control: FormField,
    fieldset: FormFieldset
};

export function FormFieldContainer({ field, formHtmlId, value, inputValue, errors, showErrors, inputRef }: FormFieldContainerProps) {
    const htmlId = `${formHtmlId}-${field.id}`;
    const editor = getFieldEditorType(field);
    const errorMessages = getErrorMessages(errors);
    const formFieldContainer = DEFAULT_CONTAINERS_TYPES[editor];

    const inputProps: FormInputProps = {
        htmlId,
        id: field.id,
        label: field?.editor?.label || field.name,
        instructions: field?.editor?.instructions,
        autoFill: field?.editor?.properties?.autoFill,
        rows: field?.editor?.properties?.rows,
        labelPosition: field?.editor?.properties?.labelPosition,
        cssClass: field?.editor?.properties?.cssClass,
        hidden: !!field?.editor?.properties?.readOnly || !!field?.editor?.properties?.hidden || (editor === 'reference'),
        options: getOptions(field, htmlId),
        field,
        editor,
        required: !!field?.validations?.required,
        maxLength: field?.validations?.maxLength?.value,
        inputValue,
        value,
        errors,
        errorMessages,
        errorMessage: errorMessages?.length ? errorMessages[0] : null,
        showErrors,
        inputRef,

        // todo: props set these
        onChange: () => { },
        onBlur: () => { },
        onFocus: () => { }
    };

    const Field = DEFAULT_CONTAINERS[formFieldContainer];
    const Input = DEFAULT_INPUTS[inputProps.editor];
    return inputProps.hidden
        ? null
        : (
            <Field {...inputProps}>
                <Input {...inputProps} />
            </Field>
        );
}
