import { Dictionary, Field, FieldDataFormat, FieldDataType, FieldValidation, FieldValidationWithValue, FieldValidations, Nullable, ValidationError } from '../models';
import { getNowDateTime, getNowTime } from './fields';
import { localisations } from './localisations';
import { getLocalisedValue } from './shared';
import { memo } from './store';

type Validator<TError extends Dictionary<any>> = (value: any) => null | TError;

const DATA_TYPE_MESSAGES: Record<FieldDataType, string> = {
    boolean: localisations.fieldDataTypeBooleanValidationMessage,
    dateTime: localisations.fieldDataTypeDateTimeValidationMessage,
    decimal: localisations.fieldDataTypeDecimalValidationMessage,
    integer: localisations.fieldDataTypeIntegerValidationMessage,
    string: localisations.fieldDataTypeStringValidationMessage,
    stringArray: localisations.fieldDataTypeStringArrayValidationMessage
};

const DATA_FORMAT_MESSAGES: Record<FieldDataFormat, string> = {
    email: localisations.fieldDataFormatEmailValidationMessage,
    phone: localisations.fieldDataFormatPhoneValidationMessage,
    time: localisations.fieldDataFormatTimeValidationMessage,
    url: localisations.fieldDataFormatUrlValidationMessage
};

const createFieldValidator = memo((field: Field, isEntryTitle: boolean, language: string) => {
    const validators: [string, Validator<Dictionary<any>>, message: string][] = [
        ['dataType', createDataTypeValidator(field.dataType), DATA_TYPE_MESSAGES[field.dataType]],
        ['dataFormat', createDataFormatValidator(field.dataFormat), field.dataFormat ? DATA_FORMAT_MESSAGES[field.dataFormat] : ''],
        ['required', createRequiredValidator(field.validations?.required, isEntryTitle), getLocalisedValue(field.validations?.required?.message, language, localisations.fieldRequiredValidationMessage)],
        ['min', createMinValidator(field.validations?.min), getLocalisedValue(field.validations?.min?.message, language, localisations.fieldMinValidationMessage)],
        ['max', createMaxValidator(field.validations?.max), getLocalisedValue(field.validations?.max?.message, language, localisations.fieldMaxValidationMessage)],
        ['minLength', createMinLengthValidator(field.validations?.minLength), getLocalisedValue(field.validations?.minLength?.message, language, localisations.fieldMinLengthValidationMessage)],
        ['maxLength', createMaxLengthValidator(field.validations?.maxLength), getLocalisedValue(field.validations?.maxLength?.message, language, localisations.fieldMaxLengthValidationMessage)],
        ['minCount', createMinCountValidator(field.validations?.minCount), getLocalisedValue(field.validations?.minCount?.message, language, localisations.fieldMinCountValidationMessage)],
        ['maxCount', createMaxCountValidator(field.validations?.maxCount), getLocalisedValue(field.validations?.maxCount?.message, language, localisations.fieldMaxCountValidationMessage)],
        ['regex', createRegExValidator(field.validations?.regex), getLocalisedValue(field.validations?.regex?.message, language, localisations.fieldRegExValidationMessage)],
        ['allowedValues', createAllowedValuesValidator(field.validations?.allowedValues, language), getLocalisedValue(field.validations?.allowedValues?.message, language, localisations.fieldAllowedValuesValidationMessage)],
        ['pastDateTime', createPastDateTimeValidator(field.dataType, field.validations?.pastDateTime), getLocalisedValue(field.validations?.pastDateTime?.message, language, localisations.fieldPastDateTimeValidationMessage)]
    ];

    return function (value: any) {
        return validators.reduce((prev, [key, validator, message]) => {
            const error = validator(value);
            if (error) {
                prev = prev || {};
                prev = {
                    ...prev,
                    [key]: {
                        ...error,
                        message
                    }
                };
            }
            return prev;
        }, null as Nullable<Dictionary<ValidationError>>)
    };
});

function noopValidator() {
    return null;
}

function isNull(value: any): boolean {
    return value == null;
}

function isEmpty(value: any): boolean {
    return isNull(value) || value.length === 0;
}

function hasLength(value: any): value is string | any[] {
    return (typeof value === 'string') || Array.isArray(value);
}

function fromValid<TError extends Dictionary<any>>(fn: (value: any) => boolean, getResult: () => TError): Validator<TError> {
    return (value: any) => {
        const isValid = fn(value);
        return isValid ? null : getResult();
    };
}

function createDataTypeValidator(dataType: FieldDataType): Validator<{}> {
    return fromValid(
        (value: any) => {
            if (isNull(value)) {
                return true;
            }
            switch (dataType) {
                case 'boolean': {
                    return typeof value === 'boolean';
                }
                case 'dateTime': {
                    if (typeof value !== 'string') {
                        return false;
                    }
                    const d = new Date(value);
                    return !Number.isNaN(d.getTime());
                }
                case 'decimal': {
                    return typeof value === 'number';
                }
                case 'integer': {
                    return (typeof value === 'number') && Number.isSafeInteger(value);
                }
                case 'string': {
                    return typeof value === 'string';
                }
                case 'stringArray': {
                    return Array.isArray(value);
                }
            }
        },
        () => ({})
    );
}

function createDataFormatValidator(dataFormat: Nullable<FieldDataFormat>): Validator<{}> {
    return fromValid(
        (value: any) => {
            if (isEmpty(value) || !dataFormat) {
                return true;
            }
            switch (dataFormat) {
                case 'email': {
                    const emailRegex = new RegExp("^(([^<>()\\[\\]\\.,;:\\s@\\\"]+(\\.[^<>()\\[\\]\\.,;:\\s@\\\"]+)*)|(\\\".+\\\"))@(([^<>()[\\]\\.,;:\\s@\\\"]+\\.)+[^<>()[\\]\\.,;:\\s@\\\"]{2,})$", 'i')
                    return emailRegex.test(value);
                }
                case 'phone': {
                    return true;
                }
                case 'time': {
                    const timeRegex = new RegExp("^([01]?[0-9]|2[0-3])([:. ])([0-5]\\d)(\\2[0-5]\\d)?$");
                    return timeRegex.test(value);
                }
                case 'url': {
                    const urlRegex = new RegExp("^(?:(?:(?:https?|ftp):)?\\/\\/)(?:\\S+(?::\\S*)?@)?(?:(?!(?:10|127)(?:\\.\\d{1,3}){3})(?!(?:169\\.254|192\\.168)(?:\\.\\d{1,3}){2})(?!172\\.(?:1[6-9]|2\\d|3[0-1])(?:\\.\\d{1,3}){2})(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}(?:\\.(?:[1-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))|(?:(?:[a-z0-9\\u00a1-\\uffff][a-z0-9\\u00a1-\\uffff-]{0,62})?[a-z0-9\\u00a1-\\uffff]\\.)+(?:[a-z\\u00a1-\\uffff]{2,}\\.?))(?::\\d{2,5})?(?:[/?#]\\S*)?$");
                    return urlRegex.test(value);
                }
            }
        },
        () => ({})
    );

}

function createRequiredValidator(required: Nullable<FieldValidation>, isEntryTitle: boolean): Validator<{}> {
    // todo: entry title field is automatically required in the API but should it be?????
    return !!(isEntryTitle || required)
        ? fromValid(
            (value: any) => !isEmpty(value),
            () => ({})
        )
        : noopValidator
}

function createMinValidator(min: Nullable<FieldValidationWithValue<number>>): Validator<{ min: number }> {
    return !!min
        ? fromValid(
            (value: any) => (typeof value === 'number') ? (value >= min.value) : true,
            () => ({ min: min?.value })
        )
        : noopValidator;
}

function createMaxValidator(max: Nullable<FieldValidationWithValue<number>>): Validator<{ max: number }> {
    return !!max
        ? fromValid(
            (value: any) => (typeof value === 'number') ? (value <= max.value) : true,
            () => ({ max: max?.value })
        )
        : noopValidator;
}

function createMinLengthValidator(minLength: Nullable<FieldValidationWithValue<number>>): Validator<{ minLength: number }> {
    return !!minLength
        ? fromValid(
            (value: any) => hasLength(value) ? (value.length >= minLength.value) : true,
            () => ({ minLength: minLength?.value })
        )
        : noopValidator;
}

function createMaxLengthValidator(maxLength: Nullable<FieldValidationWithValue<number>>): Validator<{ maxLength: number }> {
    return !!maxLength
        ? fromValid(
            (value: any) => hasLength(value) ? (value.length <= maxLength.value) : true,
            () => ({ maxLength: maxLength?.value })
        )
        : noopValidator;
}

function createMinCountValidator(minCount: Nullable<FieldValidationWithValue<number>>): Validator<{ minCount: number }> {
    return !!minCount
        ? fromValid(
            (value: any) => {
                const length = hasLength(value) ? value.length : 0;
                return (length >= minCount.value);
            },
            () => ({ minCount: minCount?.value })
        )
        : noopValidator;
}

function createMaxCountValidator(maxCount: Nullable<FieldValidationWithValue<number>>): Validator<{ maxCount: number }> {
    return !!maxCount
        ? fromValid(
            (value: any) => {
                const length = hasLength(value) ? value.length : 0;
                return (value.length <= maxCount.value);
            },
            () => ({ maxCount: maxCount?.value })
        )
        : noopValidator;
}

function createRegExValidator(regex: Nullable<FieldValidation & { pattern: string; }>): Validator<{ pattern: string }> {
    if (!regex?.pattern) {
        return noopValidator;
    }
    const pattern = regex.pattern;
    const isValidPattern = pattern && pattern.length > 3 && pattern.startsWith('/');
    const flagsIndex = pattern.lastIndexOf('/');
    const patternWithoutFlags = isValidPattern ? pattern.substring(1, flagsIndex) : pattern;
    const flags = !isValidPattern || flagsIndex === pattern.length - 1 || flagsIndex < 0 ? '' : pattern.substring(flagsIndex + 1);
    return fromValid(
        (value: any) => {
            if (isEmpty(value)) {
                return true;
            }
            const regex = new RegExp(patternWithoutFlags, flags);
            return regex.test(value);
        },
        () => ({ pattern })
    );
}

function createAllowedValuesValidator(allowedValues: Nullable<FieldValidations['allowedValues']>, language: string): Validator<{ allowed: string[] }> {
    const allowed = allowedValues?.keyValues
        ? allowedValues.keyValues.map(dict => {
            const key = Object.keys(dict)[0];
            return key;
        })
        : allowedValues?.values?.map(value => getLocalisedValue(value, language, ''));
    if (!allowed?.length) {
        return noopValidator;
    }

    return fromValid(
        (value: any) => {
            if (isNull(value)) {
                return true;
            }
            return Array.isArray(value) ? value.every(v => allowed.includes(v)) : allowed.includes(value);
        },
        () => ({ allowed })
    );
}

function createPastDateTimeValidator(dataType: FieldDataType, pastDateTime: Nullable<FieldValidation>) {
    return !!pastDateTime
        ? fromValid(
            (value: any) => {
                if (isNull(value)) {
                    return true;
                }
                if (dataType === 'dateTime') {
                    const now = getNowDateTime();
                    return value <= now;
                }
                return true;
            },
            () => ({})
        )
        : noopValidator;
}

export function validate(value: any, field: Field, isEntryTitle: boolean, language: string) {
    const validator = createFieldValidator(field, isEntryTitle, language);
    return validator(value);
}
