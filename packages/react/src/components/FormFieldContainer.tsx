import { ReactNode } from 'react';
import { FormFieldContainer as FormFieldContainerType } from '../models';
import { FormCheckbox } from './FormCheckbox';
import { useFormField } from './FormContext';
import { FormField } from './FormField';
import { FormFieldset } from './FormFieldset';
import { DEFAULT_INPUTS } from './inputs';
import { FormContainer } from './inputs/models';

export const DEFAULT_CONTAINERS: Record<FormFieldContainerType, FormContainer> = {
    checkbox: FormCheckbox,
    control: FormField,
    fieldset: FormFieldset
};

type FormFieldContainerProps = { id: string, children?: ReactNode };

export function FormFieldContainer({ id }: FormFieldContainerProps) {
    const field = useFormField(id);
    const Field = DEFAULT_CONTAINERS[field.formFieldContainer];
    const Input = DEFAULT_INPUTS[field.editor];
    return field.hidden
        ? null
        : (
            <Field id={id}>
                <Input id={id} />
            </Field>
        );
}
