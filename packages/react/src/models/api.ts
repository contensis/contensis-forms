import { Dictionary, Nullable } from './shared';


export type StringOrCanvas = string | import('@contensis/canvas-html').Block[];

export type ContentType = {
    defaultLanguage: string;
    description: Dictionary<string>;
    entryTitleField?: string;
    entryThumbnailField?: string;
    entryDescriptionField?: string;
    enabled: boolean;
    id: string;
    includeInDelivery?: boolean;
    name: Dictionary<string>;
    projectId: string;
    supportedLanguages?: string[];
    version?: VersionInfo;
    workflowId?: string;
    previewUrl?: string;
    dataFormat: FormDataFormat;
    uuid?: string;
    fields: Field[];
    groups?: Group[];
    properties?: FormProperties;
};

export type Field = {
    id: string;
    name: Dictionary<string>;
    dataType: FieldDataType;
    dataFormat?: FieldDataFormat;
    description: Dictionary<string>;
    default?: Dictionary<any>;
    groupId: string;
    validations?: FieldValidations;
    editor?: FieldEditor;
};

export type Group = {
    id: string;
    name: Dictionary<string>;
    description?: Dictionary<StringOrCanvas>;
};

export type VersionInfo = {
    createdBy?: Nullable<string>;
    created?: Nullable<string>;
    modifiedBy?: Nullable<string>;
    modified?: Nullable<string>;
    publishedBy?: Nullable<string>;
    published?: Nullable<string>;
    versionNo?: Nullable<string>;
    workflowStatus?: Nullable<string>;
    deletedBy?: Nullable<string>;
    deleted?: Nullable<string>;
    archivedBy?: Nullable<string>;
    archived?: Nullable<string>;
};

export type FormDataFormat = 'form';

export type FormProperties = {
    captcha: boolean;
    localizations: {
        submit: Dictionary<string>;
        next: Dictionary<string>;
        previous: Dictionary<string>;
        errorSummaryTitle: Dictionary<string>;
    };
    confirmationRules: FormRule<ConfirmationRuleReturn>[];
    autoSaveProgress: boolean;
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

type AllowedValues = { 
    values?: Dictionary<string>[]; 
    keyValues?: Dictionary<Dictionary<string>>[];
};


export type FieldValidations = {
    required?: FieldValidation;
    min?: FieldValidationWithValue<number>;
    max?: FieldValidationWithValue<number>;
    minLength?: FieldValidationWithValue<number>;
    maxLength?: FieldValidationWithValue<number>;
    minCount?: FieldValidationWithValue<number>;
    maxCount?: FieldValidationWithValue<number>;
    regex?: FieldValidation & { pattern: string };
    allowedValues?: FieldValidation & AllowedValues;
    pastDateTime?: FieldValidation;
    decimalPlaces?: FieldValidationWithValue<number>;
};

export type FieldValidation = { message?: Dictionary<string> };
export type FieldValidationWithValue<T> = FieldValidation & { value: T };

type FieldEditor = {
    id?: FieldEditorId;
    instructions?: Dictionary<string>;
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
};


export type FormRule<TReturn> = {
    when?: FormRuleWhen[];
    return: TReturn;
};

export type FormRuleWhen = {
    field: string;
    equalTo: any;
};

export type ConfirmationRuleReturnUri = {
    link: {
        uri: string | Dictionary<string>;
    };
};

export type ConfirmationRuleReturnMessage = {
    message: string | Dictionary<string>;
};

type Block = import('@contensis/canvas-html').Block;

export type ConfirmationRuleReturnContent = {
    content: Block[] | Dictionary<Block[]>;
};

export type ConfirmationRuleReturn = ConfirmationRuleReturnUri | ConfirmationRuleReturnMessage | ConfirmationRuleReturnContent;
