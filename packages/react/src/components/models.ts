import { ClassType, Component, ComponentClass, FunctionComponent, MutableRefObject, ReactNode } from 'react';
import { Dictionary, Field, FieldEditorType, FieldLabelPosition, FormFieldOption, Nullable, ValidationError } from '../models';

type BaseComponent<TProps> = FunctionComponent<TProps> | ClassType<TProps, Component<TProps>, ComponentClass<TProps>>;

export type FormInputProps = {
    id: string;
    inputValue: unknown;
    value: unknown;

    htmlId: string;
    showErrors: boolean;
    errors: Nullable<Dictionary<ValidationError>>;
    errorMessage: Nullable<string>;
    errorMessages: Nullable<string[]>;
    editor: FieldEditorType;

    inputRef: MutableRefObject<any>;
    autoFill: Nullable<string>;
    rows: Nullable<number>;
    label: string;
    instructions: Nullable<string>;
    required: boolean;
    maxLength: Nullable<number>;
    options: Nullable<FormFieldOption[]>;
    labelPosition: Nullable<FieldLabelPosition>;
    cssClass: Nullable<string>;
    hidden: boolean;
    field: Field;

    onChange: (inputValue: unknown, value?: unknown) => void;
    onFocus: () => void;
    onBlur: () => void;
};

export type FormInput = BaseComponent<FormInputProps>;

export type FormContainerProps = FormInputProps & { children?: ReactNode };
export type FormContainer = BaseComponent<FormContainerProps>;

export type FormFieldContainerProps = {
    formHtmlId: string;
    field: Field;
    value: unknown;
    inputValue: unknown;
    errors: Nullable<Dictionary<ValidationError>>;
    showErrors: boolean;
    inputRef: MutableRefObject<any>;
};
