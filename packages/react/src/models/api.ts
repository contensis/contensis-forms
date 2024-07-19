import { Dictionary, Nullable } from './shared';

export type VersionStatus = null | 'latest' | 'published';

type ApiParams = {
    apiUrl: string;
    projectId: string;
    formId: string;
    language: null | string;
    versionStatus: VersionStatus;
};

export type GetFormParams = ApiParams;

export type SaveFormResponseParams = ApiParams & {
    formResponse: FormResponse;
    captcha: Nullable<CaptchaSettings>;
    formVersionNo: string;
};

export type FormResponse = Dictionary<unknown>;

export type FormContentType = {
    id: string;
    name: string;
    description: string;
    fields: Field[];
    groups?: Group[];
    properties?: Nullable<FormProperties>;
    language: string;
    version?: {
        versionNo?: string;
    };
};

export type SaveFormResponse = {
    form: FormResponse;
    confirmation?: ConfirmationRuleReturn;
};

export type Field = {
    id: string;
    name: string;
    dataType: FieldDataType;
    dataFormat?: Nullable<FieldDataFormat>;
    description?: Nullable<string>;
    default?: unknown;
    groupId: string;
    validations?: Nullable<FieldValidations>;
    editor?: Nullable<FieldEditor>;
};

export type Group = {
    id: string;
    name: string;
    description?: Nullable<string>;
};

export type CaptchaSettings = {
    enabled: boolean;
    siteKey?: Nullable<string>;
};

export type FormProperties = {
    captcha: CaptchaSettings;
    localizations: Nullable<{
        submit?: Nullable<string>;
        next?: Nullable<string>;
        previous?: Nullable<string>;
        errorSummaryTitle?: Nullable<string>;
    }>;
    confirmationRules: FormRule<ConfirmationRuleReturn>[];
    autoSaveProgress: boolean;
    mode?: 'survey';
};

export type FieldDataType = 'boolean' | 'dateTime' | 'decimal' | 'integer' | 'string' | 'stringArray';

export type FieldDataFormat = 'email' | 'phone' | 'reference' | 'time' | 'url';

export type FieldEditorId =
    | 'datetime'
    | 'datetimeparts'
    | 'date'
    | 'dateparts'
    | 'decimal'
    | 'integer'
    | 'list-dropdown'
    | 'list'
    | 'multiline'
    | 'text'
    | 'time'
    | 'timeparts';

export type AllowedValues = {
    values?: Nullable<string[]>;
    labeledValues?: Nullable<{ value: string; label: string }[]>;
};

export type FieldValidations = {
    required?: Nullable<FieldValidation>;
    min?: Nullable<FieldValidationWithValue<number>>;
    max?: Nullable<FieldValidationWithValue<number>>;
    minLength?: Nullable<FieldValidationWithValue<number>>;
    maxLength?: Nullable<FieldValidationWithValue<number>>;
    minCount?: Nullable<FieldValidationWithValue<number>>;
    maxCount?: Nullable<FieldValidationWithValue<number>>;
    regex?: Nullable<FieldValidation & { pattern: string }>;
    allowedValue?: Nullable<FieldValidationWithValue<any>>;
    allowedValues?: Nullable<FieldValidation & AllowedValues>;
    pastDateTime?: Nullable<FieldValidation>;
};

export type FieldValidation = { message?: Nullable<string> };
export type FieldValidationWithValue<T> = FieldValidation & { value: T };

export type FieldEditor = {
    id?: Nullable<FieldEditorId>;
    instructions?: Nullable<string>;
    label?: Nullable<string>;
    properties?: FieldEditorProperties;
};

export type FieldLabelPosition = 'top' | 'leftAligned';
type DateFormat = 'dd-mm-yyyy' | 'mm-dd-yyyy' | 'yyyy-mm-dd';
type TimeFormat = '12h' | '24h';

type FieldEditorProperties = {
    autoFill?: string;
    rows?: number;
    labelPosition?: FieldLabelPosition;
    cssClass?: string;
    hidden?: boolean;
    placeholderText?: string;
    dateFormat?: DateFormat;
    dateSeparator?: string;
    timeFormat?: TimeFormat;
    timeSeparator?: string;
};

export type FormRule<TReturn> = {
    return: TReturn;
};

export type ConfirmationRuleReturnUri = {
    link: {
        sys: {
            uri: string;
        };
    };
};

export type ConfirmationRuleReturnContent = {
    content: string;
};

export type ConfirmationRuleReturn = ConfirmationRuleReturnUri | ConfirmationRuleReturnContent;
