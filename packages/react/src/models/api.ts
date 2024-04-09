import { Nullable } from './shared';

// todo: add time zone information to dat and date-time fields

// todo: investigate captcha v3

// todo: don;t allow saving when using the latest version of a form

// todo: i think there is an issue with dates that have no default value they should be empty in the UI but they are 1/1/1970

export type StringOrCanvas = string | import('@contensis/canvas-html').Block[];

export type ContentType = {
    entryTitleField?: string;
    enabled: boolean; // todo: is this needed?
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
    default?: any;
    groupId: string;
    validations?: Nullable<FieldValidations>;
    editor?: Nullable<FieldEditor>;
};

export type Group = {
    id: string;
    name: string;
    description?: Nullable<StringOrCanvas>;
};

export type VersionInfo = {
    // createdBy?: Nullable<string>;
    // created?: Nullable<string>;
    // modifiedBy?: Nullable<string>;
    // modified?: Nullable<string>;
    // publishedBy?: Nullable<string>;
    // published?: Nullable<string>;
    // versionNo?: Nullable<string>;
    // workflowStatus?: Nullable<string>;
    // deletedBy?: Nullable<string>;
    // deleted?: Nullable<string>;
    // archivedBy?: Nullable<string>;
    // archived?: Nullable<string>;
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







