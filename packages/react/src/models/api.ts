import { Dictionary, Nullable } from './shared';

// todo: considerations
// localise name / messages etc in the UI
// are we having labels for fields or just using names
// add time zone property to UI
// add all form properties to the UI:
// captcha
// localizations
// confirmationRules
// autoSaveProgress
// mode

export type VersionStatus = null | 'latest' | 'published'

export type FormApiInputParams = {
    apiUrl?: null | string;
    projectId: string;
    formId: string;
    language?: null | string;
    versionStatus?: VersionStatus;
};


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
    useCaptcha: boolean;
    captchaSiteKey: Nullable<string>;
};


export type StringOrCanvas = string | import('@contensis/canvas-html').Block[];

export type FormResponse = Dictionary<unknown>;

export type FormContentType = {
    entryTitleField?: string; // todo: this is only needed for validation of entry title if entry title is not required this can be removed
    enabled: boolean; // todo: is this needed? or does the api return an error
    id: string;
    fields: Field[];
    groups?: Group[];
    properties?: Nullable<FormProperties>;
};

export type Field = {
    id: string;
    name: string;
    dataType: FieldDataType;
    dataFormat?: FieldDataFormat;
    description?: Nullable<string>;
    default?: unknown;
    groupId: string;
    validations?: Nullable<FieldValidations>;
    editor?: Nullable<FieldEditor>;
};

export type Group = {
    id: string;
    name: string;
    description?: Nullable<StringOrCanvas>;
};

export type FormDataFormat = 'form';

export type FormProperties = {
    captcha: boolean;
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

export type FieldDataType =
    | 'boolean'
    | 'dateTime'
    | 'decimal'
    | 'integer'
    | 'string'
    | 'stringArray';

export type FieldDataFormat =
    | 'email'
    | 'phone'
    | 'time'
    | 'url';

export type FieldEditorId =
    | 'datetime'
    | 'date'
    | 'decimal'
    | 'integer'
    | 'list-dropdown'
    | 'list'
    | 'multiline'
    | 'text';

export type AllowedValues = {
    values?: Nullable<string[]>;
    keyValues?: Nullable<{ key: string, value: string }[]>; // todo: this defintion needs checking when the api is ready
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
    allowedValues?: Nullable<FieldValidation & AllowedValues>;
    pastDateTime?: Nullable<FieldValidation>;
    decimalPlaces?: Nullable<FieldValidationWithValue<number>>;
};

export type FieldValidation = { message?: Nullable<string> };
export type FieldValidationWithValue<T> = FieldValidation & { value: T };

export type FieldEditor = {
    id?: FieldEditorId;
    instructions?: Nullable<string>;
    properties?: FieldEditorProperties;
};

export type FieldSize = 'small' | 'medium' | 'large' | 'auto';
export type FieldLabelPosition = 'top' | 'leftAligned';

type FieldEditorProperties = {
    autoFill?: string;
    size?: FieldSize;
    labelPosition?: FieldLabelPosition;
    cssClass?: string;
    hidden?: boolean;
    includeTimeZoneOffset?: boolean; // todo: where does this come from?
};


export type FormRule<TReturn> = {
    when?: FormRuleWhen[];
    return: TReturn;
};

export type FormRuleWhen = {
    field: string;
    equalTo: unknown;
};

export type ConfirmationRuleReturnUri = {
    link: {
        uri: string;
    };
};

export type ConfirmationRuleReturnMessage = {
    message: string;
};

type Block = import('@contensis/canvas-html').Block;

export type ConfirmationRuleReturnContent = {
    content: Block[];
};

export type ConfirmationRuleReturn = ConfirmationRuleReturnUri | ConfirmationRuleReturnMessage | ConfirmationRuleReturnContent;







