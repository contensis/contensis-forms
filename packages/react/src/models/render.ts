import { MutableRefObject, ReactNode } from 'react';
import { ConfirmationRuleReturn, ContentType, Field, FieldLabelPosition, FieldSize, FormRule, Group, StringOrCanvas } from './api';
import { Dictionary, Nullable } from './shared';

export type FormProps = {
    alias: string;
    projectId: string;
    formId: string;
    language: string;
    versionStatus?: Nullable<'latest' | 'published'>;
    loading?: ReactNode;
    disabled?: ReactNode;
    error?: (error: unknown) => ReactNode;
};

export type FormConfirmationProps = {
    language: string;
    rule: FormRule<ConfirmationRuleReturn>;
    formResponse: Nullable<Record<string, any>>;
};

export type FormState = {
    htmlId: string;
    form: Nullable<ContentType>;
    steps: string[];
    value: Dictionary<any>;
    defaultValue: Dictionary<any>;
    emptyValue: Dictionary<any>;
    inputValue: Dictionary<any>;
    errors: Dictionary<Nullable<Dictionary<ValidationError>>>;
    showErrors: boolean;
    focussed: Nullable<string>;
    loading: boolean;
    loadError: unknown;
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
    defaultValue: any;
    emptyValue: any;
    value: any;
    inputValue: any;
    errors: Nullable<Dictionary<any>>;
    errorMessage: Nullable<string>;
    errorMessages: Nullable<string[]>;

    hidden: boolean;
    autoFill: Nullable<string>;
    options: Nullable<FormFieldOption[]>;
    size: Nullable<FieldSize>;
    labelPosition: Nullable<FieldLabelPosition>;
    cssClass: Nullable<string>;

    field: Field;
};

export type FormFieldContainer = 'control' | 'fieldset';

export type FormField = FormFieldState & {
    inputRef: MutableRefObject<any>;
    formFieldContainer: FormFieldContainer;
    onChange(inputValue: any, value?: any): void;
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
    | 'select'
    | 'tel'
    | 'text'
    | 'time'
    | 'url';

export type ValidationError = {
    message: string;
};