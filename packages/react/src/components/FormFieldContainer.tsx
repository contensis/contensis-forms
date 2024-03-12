import { ReactNode } from 'react';
import { useFormField } from './FormContext';
import { FormField } from './FormField';
import { DEFAULT_INPUTS } from './inputs';
import { FormFieldset } from './FormFieldset';
import { FormFieldContainer as FormFieldContainerType } from '../models';
import { FormContainer } from './inputs/models';

export const DEFAULT_CONTAINERS: Record<FormFieldContainerType, FormContainer> = {
    control: FormField,
    fieldset: FormFieldset
};

type FormFieldContainerProps = { id: string, children?: ReactNode };

export function FormFieldContainer({ id }: FormFieldContainerProps) {
    const field = useFormField(id);
    const Field = DEFAULT_CONTAINERS[field.formFieldContainer]; // todo: override
    const Input = DEFAULT_INPUTS[field.editor]; // todo: override
    return field.hidden
        ? null
        : (
            <Field id={id}>
                <Input id={id} />
            </Field>
        );
}
