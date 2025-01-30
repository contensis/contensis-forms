import { ClassType, Component, ComponentClass, FunctionComponent, MutableRefObject, ReactNode } from 'react';
import {
    DeepPartial,
    Dictionary,
    Field,
    FieldEditorType,
    FieldLabelPosition,
    FormContentType,
    FormFieldOption,
    FormLocalizations,
    FormResponse,
    GetFormParams,
    Nullable,
    ValidationError,
    VersionStatus
} from '../models';

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
    placeholder: Nullable<string>;
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

export type SetValue = (fieldId: string, value: unknown) => void;
export type SetFocussed = (fieldId: string, focussed: boolean) => void;

export type FormFieldContainerProps = {
    formHtmlId: string;
    field: Field;
    formValue: Dictionary<unknown>;
    formInputValue: Dictionary<unknown>;
    formErrors: Dictionary<Nullable<Dictionary<ValidationError>>>;
    showErrors: boolean;
    inputRefs: Dictionary<MutableRefObject<any>>;

    setValue: SetValue;
    setInputValue: SetValue;
    setFocussed: SetFocussed;
};

export type FormProps = {
    apiUrl?: null | string;
    projectId: string;
    formId: string;
    language?: null | string;
    versionStatus?: VersionStatus;
    loading?: ReactNode;
    disabled?: ReactNode;
    headingLevel?: number;
    localizations?: DeepPartial<FormLocalizations>;
    showTitle?: boolean;
    error?: (error: unknown) => ReactNode;
    onPopulate?: (defaultValue: FormResponse, form: FormContentType) => FormResponse | Promise<FormResponse>;
    onSubmit?: (response: FormResponse, form: FormContentType) => false | FormResponse | Promise<false | FormResponse>;
    onSubmitSuccess?: (response: FormResponse, form: FormContentType) => boolean | Promise<boolean>;
    onSubmitError?: (error: unknown, form: FormContentType) => boolean | Promise<boolean>;
    onLoadError?: (error: unknown, params: GetFormParams) => void;
};
