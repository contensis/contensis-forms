import {
    ContentType,
    Dictionary,
    Field,
    FormProperties,
    Group,
    Nullable,
    FieldValidations,
    FieldValidation,
    FieldValidationWithValue,
    FieldEditor,
    AllowedValues,
    FormRule,
    ConfirmationRuleReturn
} from '../models';
import {
    ContentType as ManagementContentType,
    Field as ManagementField,
    FormProperties as ManagementFormProperties,
    Group as ManagementGroup,
    FieldValidations as ManagementFieldValidations,
    FieldValidation as ManagementFieldValidation,
    FieldValidationWithValue as ManagementFieldValidationWithValue,
    FieldEditor as ManagementFieldEditor,
    AllowedValues as ManagementAllowedValues,
    FormRule as ManagementFormRule,
    ConfirmationRuleReturn as ManagementConfirmationRuleReturn
} from './management-api';

// todo: update these methods when forms delivery api is done

async function authenticate(alias: string) {
    try {
        const response = await fetch(`https://cms-${alias}.cloud.contensis.com/authenticate/connect/token`, {
            "headers": {
                "content-type": "application/x-www-form-urlencoded;charset=UTF-8"
            },
            "body": "scope=Security_Administrator%20ContentType_Read%20ContentType_Write%20ContentType_Delete%20Entry_Read%20Entry_Write%20Entry_Delete%20Project_Read%20Project_Write%20Project_Delete%20Workflow_Administrator&grant_type=client_credentials&client_id=dbff74a6-d327-4c1a-992b-a7315fb1ca19&client_secret=0b5f524afdb842738fd3379b603e41f7-287dd32557454776a2a6627d9458b202-e876b6bc20a541d6b0a30fbf57786f88",
            "method": "POST",
            "mode": "cors",
            "credentials": "omit"
        });

        const result: { access_token: string } = await response.json();
        return result;
    } catch {

    }

}

export async function getForm(alias: string, projectId: string, formId: string, language: string, versionStatus: 'latest' | 'published'): Promise<null | ContentType> {
    try {
        const auth = await authenticate(alias);
        const response = await fetch(`https://cms-${alias}.cloud.contensis.com/api/management/projects/${projectId}/contenttypes/${formId}?versionStatus=${versionStatus}`, {
            "headers": {
                "authorization": `Bearer ${auth?.access_token}`,
                "content-type": "application/json"
            },
            "body": null,
            "method": "GET",
            "mode": "cors"
        });
        const managementContentType: ManagementContentType = await response.json();
        const contentType = toContentType(managementContentType, language);
        console.log(JSON.stringify(managementContentType, null, '\t'));
        console.log(JSON.stringify(contentType, null, '\t'));
        return contentType;
    } catch {
        return null;
    }

}

export async function saveForm(alias: string, projectId: string, formId: string, language: string, formResponse: any) {
    try {
        // todo: you can't save if the version status is latest
        const auth = await authenticate(alias);
        formResponse = {
            ...formResponse,
            sys: {
                contentTypeId: formId,
                dataFormat: 'form' as const,
                language
            }
        };
        const response = await fetch(`https://cms-${alias}.cloud.contensis.com/api/management/projects/${projectId}/entries`, {
            "headers": {
                "authorization": `Bearer ${auth?.access_token}`,
                "content-type": "application/json"
            },
            "body": JSON.stringify(formResponse),
            "method": "POST",
            "mode": "cors"
        });
        const result = await response.json();
        return result;
    } catch {

    }
}

// todo: remove this mapping
function toContentType(managementContentType: ManagementContentType, language: string): ContentType {
    const {
        entryTitleField,
        enabled,
        id,
        fields,
        groups,
        properties
    } = managementContentType;
    return {
        entryTitleField,
        enabled,
        id,
        fields: fields?.map(f => toField(f, language)),
        groups: groups?.map(g => toGroup(g, language)),
        properties: toFormProperties(properties, language)
    };
}

function toField(managementField: ManagementField, language: string): Field {
    const {
        id,
        name,
        dataType,
        dataFormat,
        description,
        default: defaultValue,
        groupId,
        validations,
        editor
    } = managementField;
    return {
        id,
        name: getLocalisedValue(name, language, id),
        dataType,
        dataFormat,
        description: getLocalisedValue(description, language, undefined),
        default: getLocalisedValue(defaultValue, language, undefined),
        validations: toFieldValidations(validations, language),
        editor: toFieldEditor(editor, language),
        groupId
    };
}

function toGroup(managementGroup: ManagementGroup, language: string): Group {
    const {
        id,
        name,
        description
    } = managementGroup;
    return {
        id,
        name: getLocalisedValue(name, language, id),
        description: getLocalisedValue(description, language, '')
    };
}

function toFormProperties(managementFormProperties: Nullable<ManagementFormProperties>, language: string): Nullable<FormProperties> {
    if (!managementFormProperties) {
        return undefined;
    }
    const {
        captcha,
        localizations,
        confirmationRules,
        autoSaveProgress,
        mode
    } = managementFormProperties;
    return {
        captcha,
        localizations: {
            submit: getLocalisedValue(localizations?.submit, language, undefined),
            next: getLocalisedValue(localizations?.next, language, undefined),
            previous: getLocalisedValue(localizations?.previous, language, undefined),
            errorSummaryTitle: getLocalisedValue(localizations?.errorSummaryTitle, language, undefined)
        },
        confirmationRules: confirmationRules?.map(rule => toFormRule(rule, language)),
        autoSaveProgress,
        mode
    };
}

function toFieldValidations(managementFieldValidations: Nullable<ManagementFieldValidations>, language: string): Nullable<FieldValidations> {
    if (!managementFieldValidations) {
        return undefined;
    }
    const {
        required,
        min,
        max,
        minLength,
        maxLength,
        minCount,
        maxCount,
        regex,
        allowedValues,
        pastDateTime,
        decimalPlaces
    } = managementFieldValidations;
    return {
        required: toFieldValidation(required, language),
        min: toFieldValidationWithValue(min, language),
        max: toFieldValidationWithValue(max, language),
        minLength: toFieldValidationWithValue(minLength, language),
        maxLength: toFieldValidationWithValue(maxLength, language),
        minCount: toFieldValidationWithValue(minCount, language),
        maxCount: toFieldValidationWithValue(maxCount, language),
        regex: toFieldRegexValidation(regex, language),
        allowedValues: toFieldAllowedValuesValidation(allowedValues, language),
        pastDateTime: toFieldValidation(pastDateTime, language),
        decimalPlaces: toFieldValidationWithValue(decimalPlaces, language)
    };
}

function toFieldValidation(managementFieldValidation: Nullable<ManagementFieldValidation>, language: string): Nullable<FieldValidation> {
    if (!managementFieldValidation) {
        return undefined;
    }
    const { message } = managementFieldValidation;
    return {
        message: getLocalisedValue(message, language, undefined)
    };
}

function toFieldValidationWithValue<T>(managementFieldValidationWithValue: Nullable<ManagementFieldValidationWithValue<T>>, language: string): Nullable<FieldValidationWithValue<T>> {
    if (!managementFieldValidationWithValue) {
        return undefined;
    }
    const { value, message } = managementFieldValidationWithValue;
    return {
        value,
        message: getLocalisedValue(message, language, undefined)
    };
}

function toFieldRegexValidation(managementValidation: Nullable<ManagementFieldValidation & { pattern: string }>, language: string): Nullable<FieldValidation & { pattern: string }> {
    if (!managementValidation) {
        return undefined;
    }
    const { message, pattern } = managementValidation;
    return {
        pattern,
        message: getLocalisedValue(message, language, undefined)
    };
}

function toFieldAllowedValuesValidation(managementValidation: Nullable<ManagementFieldValidation & ManagementAllowedValues>, language: string): Nullable<FieldValidation & AllowedValues> {
    if (!managementValidation) {
        return undefined;
    }
    const { message, values, keyValues } = managementValidation;
    return {
        values: values?.map(v => getLocalisedValue(v, language, '')),
        keyValues: !!keyValues ? keyValues.map(({ key, value }) => ({ key, value: getLocalisedValue(value, language, key) })) : undefined,
        message: getLocalisedValue(message, language, undefined)
    };
}

function toFieldEditor(managementFieldEditor: Nullable<ManagementFieldEditor>, language: string): Nullable<FieldEditor> {
    if (!managementFieldEditor) {
        return undefined;
    }
    const {
        id,
        instructions,
        properties,
    } = managementFieldEditor;
    return {
        id,
        instructions: getLocalisedValue(instructions, language, undefined),
        properties,
    };
}

function toFormRule(managementRule: ManagementFormRule<ManagementConfirmationRuleReturn>, language: string): FormRule<ConfirmationRuleReturn> {
    const { when } = managementRule;
    const r = managementRule['return'] as any;
    return { 
        when, 
        return: {
            link: r?.link?.uri ? {
                uri: getLocalisedValue(r?.link?.uri, language, undefined)
            } : (undefined as any),
            message: r?.message ? getLocalisedValue(r?.message, language, undefined) : (undefined as any),
            content: r?.content ? getLocalisedValue(r?.content, language, undefined) : (undefined as any)
        }
    };
}

const DEFAULT_LANGUAGE = 'en-GB';

function getLocalisedValue<T>(localisedValue: Nullable<Dictionary<T>>, language: string, defaultValue: T) {
    if (typeof localisedValue?.[language] !== 'undefined') {
        return localisedValue[language];
    }
    if (typeof localisedValue?.[DEFAULT_LANGUAGE] !== 'undefined') {
        return localisedValue[DEFAULT_LANGUAGE];
    }
    return defaultValue;
}
