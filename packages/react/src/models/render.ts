import { MutableRefObject, ReactNode } from 'react';
import { ConfirmationRuleReturn, Field, FieldLabelPosition, FormApiInputParams, FormContentType, FormResponse, GetFormParams, Group, StringOrCanvas } from './api';
import { Dictionary, Nullable } from './shared';

export type FormProps = FormApiInputParams & {
    loading?: ReactNode;
    disabled?: ReactNode;
    error?: (error: unknown) => ReactNode;
    onSubmit?: (response: FormResponse, form: FormContentType) => false | FormResponse;
    onSubmitSuccess?: (response: FormResponse) => boolean;
    onSubmitError?: (error: unknown) => boolean;
};

export type FormConfirmationProps = {
    rule: ConfirmationRuleReturn;
    formResponse: FormResponse;
};

export type FormState = Required<GetFormParams> & {
    htmlId: string;
    form: Nullable<FormContentType>;
    steps: string[];
    value: Dictionary<unknown>;
    defaultValue: Dictionary<unknown>;
    emptyValue: Dictionary<unknown>;
    inputValue: Dictionary<unknown>;
    errors: Dictionary<Nullable<Dictionary<ValidationError>>>;
    showErrors: boolean;
    focussed: Nullable<string>;
    loading: boolean;
    apiError: unknown;
    defaultPageTitle: string;
};

export type FormPage = {
    pageNo: number;
    id: string;
    title: string;
    description: Nullable<StringOrCanvas>;
    pageTitle: string;
    showErrors: boolean;
    invalid: boolean;
    fieldErrors: Nullable<{ id: string, message: string }[]>;
    fields: string[];
    group: Group;
};

export type FormFieldOption = { key: string, htmlId: string; value: string; label: string; };

export type FormFieldState = {
    htmlId: string;
    id: string;
    label: string;
    instructions: Nullable<string>;
    editor: FieldEditorType;
    showErrors: boolean;
    focussed: boolean;
    defaultValue: unknown;
    emptyValue: unknown;
    value: unknown;
    inputValue: unknown;
    errors: Nullable<Dictionary<ValidationError>>;
    errorMessage: Nullable<string>;
    errorMessages: Nullable<string[]>;

    required: boolean;
    maxLength: Nullable<number>;

    hidden: boolean;
    autoFill: Nullable<string>;
    options: Nullable<FormFieldOption[]>;
    labelPosition: Nullable<FieldLabelPosition>;
    cssClass: Nullable<string>;
    rows: Nullable<number>;

    field: Field;
};

export type FormFieldContainer = 'control' | 'fieldset' | 'checkbox';

export type FormField = FormFieldState & {
    inputRef: MutableRefObject<any>;
    formFieldContainer: FormFieldContainer;
    onChange(inputValue: unknown, value?: unknown): void;
    onFocus(): void;
    onBlur(): void;
};

export type FieldEditorType =
    | 'checkbox'
    | 'date'
    | 'datetime'
    | 'decimal'
    | 'email'
    | 'integer'
    | 'multiline'
    | 'multiselect'
    | 'radio'
    | 'reference'
    | 'select'
    | 'tel'
    | 'text'
    | 'time'
    | 'url';

export type ValidationError = {
    message: string;
};