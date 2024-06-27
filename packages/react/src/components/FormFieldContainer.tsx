import { FieldEditorType, FormFieldContainer as FormFieldContainerType } from '../models';
import { Errors, Fields } from '../state';
import { FormCheckbox } from './FormCheckbox';
import { FormField } from './FormField';
import { FormFieldset } from './FormFieldset';
import { DEFAULT_INPUTS } from './inputs';
import { FormContainer, FormFieldContainerProps, FormInputProps } from './models';

export const DEFAULT_CONTAINERS_TYPES: Record<FieldEditorType, FormFieldContainerType> = {
    checkbox: 'checkbox',
    date: 'control',
    datetime: 'control',
    decimal: 'control',
    email: 'control',
    integer: 'control',
    multiline: 'control',
    multiselect: 'fieldset',
    radio: 'fieldset',
    reference: 'control',
    select: 'control',
    tel: 'control',
    text: 'control',
    time: 'control',
    url: 'control'
};

export const DEFAULT_CONTAINERS: Record<FormFieldContainerType, FormContainer> = {
    checkbox: FormCheckbox,
    control: FormField,
    fieldset: FormFieldset
};

export function FormFieldContainer({
    field,
    formHtmlId,
    formValue,
    formInputValue,
    formErrors,
    showErrors,
    inputRefs,
    setValue,
    setInputValue,
    setFocussed
}: FormFieldContainerProps) {
    const htmlId = `${formHtmlId}-${field.id}`;
    const editor = Fields.getEditorType(field);
    const errors = formErrors?.[field.id];
    const errorMessages = Errors.getErrorMessages(errors);
    const formFieldContainer = DEFAULT_CONTAINERS_TYPES[editor];

    const inputProps: FormInputProps = {
        htmlId,
        id: field.id,
        label: field?.editor?.label || field.name,
        instructions: field?.editor?.instructions,
        autoFill: field?.editor?.properties?.autoFill,
        placeholder: field?.editor?.properties?.placeholderText,
        rows: field?.editor?.properties?.rows,
        labelPosition: field?.editor?.properties?.labelPosition,
        cssClass: field?.editor?.properties?.cssClass,
        hidden: !!field?.editor?.properties?.readOnly || !!field?.editor?.properties?.hidden || editor === 'reference',
        options: Fields.getOptions(field, htmlId),
        field,
        editor,
        required: !!field?.validations?.required,
        maxLength: field?.validations?.maxLength?.value,
        inputValue: formInputValue?.[field.id],
        value: formValue?.[field.id],
        errors,
        errorMessages,
        errorMessage: errorMessages?.length ? errorMessages[0] : null,
        showErrors,
        inputRef: inputRefs?.[field.id],

        onChange: (inputValue: unknown, value?: unknown) => {
            value = typeof value === 'undefined' ? inputValue : value;
            setInputValue(field.id, inputValue);
            setValue(field.id, value);
        },
        onFocus: () => {
            setFocussed(field.id, true);
        },
        onBlur: () => {
            setFocussed(field.id, false);
        }
    };
    
    const Field = DEFAULT_CONTAINERS[formFieldContainer];
    const Input = DEFAULT_INPUTS[inputProps.editor];
    return inputProps.hidden ? null : (
        <Field {...inputProps}>
            <Input {...inputProps} />
        </Field>
    );
}
