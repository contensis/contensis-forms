import { Dictionary, Field, FieldDataFormat, FieldDataType, FieldValidation, FieldValidationWithValue, FieldValidations, Nullable, ValidationError } from '../models';
import { format, localisations } from './localisations';
import { memo } from './store';

type Validator<TError extends Dictionary<any>> = (value: unknown) => null | TError;

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

const createFieldValidator = memo((field: Field, isEntryTitle: boolean) => {
    const validators: [string, Validator<Dictionary<any>>, message: string][] = [
        ['dataType', createDataTypeValidator(field.dataType), DATA_TYPE_MESSAGES[field.dataType]],
        ['dataFormat', createDataFormatValidator(field.dataFormat), field.dataFormat ? DATA_FORMAT_MESSAGES[field.dataFormat] : ''],
        ['required', createRequiredValidator(field.validations?.required, isEntryTitle), field.validations?.required?.message || localisations.fieldRequiredValidationMessage],
        ['allowedValue', createAllowedValueValidator(field.validations?.allowedValue), field.validations?.allowedValue?.message || localisations.fieldAllowedValueValidationMessage],
        ['min', createMinValidator(field.validations?.min), field.validations?.min?.message || format(localisations.fieldMinValidationMessage, field.validations?.min?.value)],
        ['max', createMaxValidator(field.validations?.max), field.validations?.max?.message || format(localisations.fieldMaxValidationMessage, field.validations?.max?.value)],
        ['minLength', createMinLengthValidator(field.validations?.minLength), field.validations?.minLength?.message || format(localisations.fieldMinLengthValidationMessage, field.validations?.minLength?.value)],
        ['maxLength', createMaxLengthValidator(field.validations?.maxLength), field.validations?.maxLength?.message || format(localisations.fieldMaxLengthValidationMessage, field.validations?.maxLength?.value)],
        ['minCount', createMinCountValidator(field.validations?.minCount), field.validations?.minCount?.message || format(localisations.fieldMinCountValidationMessage, field.validations?.minCount?.value)],
        ['maxCount', createMaxCountValidator(field.validations?.maxCount), field.validations?.maxCount?.message || format(localisations.fieldMaxCountValidationMessage, field.validations?.maxCount?.value)],
        ['regex', createRegExValidator(field.validations?.regex), field.validations?.regex?.message || localisations.fieldRegExValidationMessage],
        ['allowedValues', createAllowedValuesValidator(field.validations?.allowedValues), field.validations?.allowedValues?.message || localisations.fieldAllowedValuesValidationMessage],
        ['pastDateTime', createPastDateTimeValidator(field.dataType, field.validations?.pastDateTime), field.validations?.pastDateTime?.message || localisations.fieldPastDateTimeValidationMessage]
    ];

    return function (value: unknown) {
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

function isNull(value: unknown): boolean {
    return value == null;
}

function isEmpty(value: unknown): boolean {
    return isNull(value) || (value as any).length === 0;
}

function hasLength(value: unknown): value is string | any[] {
    return (typeof value === 'string') || Array.isArray(value);
}

function fromValid<TError extends Dictionary<any>>(fn: (value: unknown) => boolean, getResult: () => TError): Validator<TError> {
    return (value: unknown) => {
        const isValid = fn(value);
        return isValid ? null : getResult();
    };
}

function createDataTypeValidator(dataType: FieldDataType): Validator<{}> {
    return fromValid(
        (value: unknown) => {
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
        (value: unknown) => {
            if (isEmpty(value) || !dataFormat) {
                return true;
            }
            // todo: these validations seem a bit crazy are there simpler / better regexs
            // ie. email -> [any string]@[any string].[somehting with 2 or more chars]
            switch (dataFormat) {
                case 'email': {
                    const emailRegex = new RegExp("^(([^<>()\\[\\]\\.,;:\\s@\\\"]+(\\.[^<>()\\[\\]\\.,;:\\s@\\\"]+)*)|(\\\".+\\\"))@(([^<>()[\\]\\.,;:\\s@\\\"]+\\.)+[^<>()[\\]\\.,;:\\s@\\\"]{2,})$", 'i')
                    return typeof value === 'string' && emailRegex.test(value);
                }
                case 'phone': {
                    return true;
                }
                case 'time': {
                    const timeRegex = new RegExp("^([01]?[0-9]|2[0-3])([:. ])([0-5]\\d)(\\2[0-5]\\d)?$");
                    return typeof value === 'string' && timeRegex.test(value);
                }
                case 'url': {
                    const urlRegex = new RegExp("^(?:(?:(?:https?|ftp):)?\\/\\/)(?:\\S+(?::\\S*)?@)?(?:(?!(?:10|127)(?:\\.\\d{1,3}){3})(?!(?:169\\.254|192\\.168)(?:\\.\\d{1,3}){2})(?!172\\.(?:1[6-9]|2\\d|3[0-1])(?:\\.\\d{1,3}){2})(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}(?:\\.(?:[1-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))|(?:(?:[a-z0-9\\u00a1-\\uffff][a-z0-9\\u00a1-\\uffff-]{0,62})?[a-z0-9\\u00a1-\\uffff]\\.)+(?:[a-z\\u00a1-\\uffff]{2,}\\.?))(?::\\d{2,5})?(?:[/?#]\\S*)?$");
                    return typeof value === 'string' && urlRegex.test(value);
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
            (value: unknown) => !isEmpty(value),
            () => ({})
        )
        : noopValidator
}

function createMinValidator(min: Nullable<FieldValidationWithValue<number>>): Validator<{ min: number }> {
    return !!min
        ? fromValid(
            (value: unknown) => (typeof value === 'number') ? (value >= min.value) : true,
            () => ({ min: min?.value })
        )
        : noopValidator;
}

function createMaxValidator(max: Nullable<FieldValidationWithValue<number>>): Validator<{ max: number }> {
    return !!max
        ? fromValid(
            (value: unknown) => (typeof value === 'number') ? (value <= max.value) : true,
            () => ({ max: max?.value })
        )
        : noopValidator;
}

function createMinLengthValidator(minLength: Nullable<FieldValidationWithValue<number>>): Validator<{ minLength: number }> {
    return !!minLength
        ? fromValid(
            (value: unknown) => hasLength(value) ? (value.length >= minLength.value) : true,
            () => ({ minLength: minLength?.value })
        )
        : noopValidator;
}

function createMaxLengthValidator(maxLength: Nullable<FieldValidationWithValue<number>>): Validator<{ maxLength: number }> {
    return !!maxLength
        ? fromValid(
            (value: unknown) => hasLength(value) ? (value.length <= maxLength.value) : true,
            () => ({ maxLength: maxLength?.value })
        )
        : noopValidator;
}

function createMinCountValidator(minCount: Nullable<FieldValidationWithValue<number>>): Validator<{ minCount: number }> {
    return !!minCount
        ? fromValid(
            (value: unknown) => {
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
            (value: unknown) => {
                const length = hasLength(value) ? value.length : 0;
                return (length <= maxCount.value);
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
        (value: unknown) => {
            if (isEmpty(value)) {
                return true;
            }
            const regex = new RegExp(patternWithoutFlags, flags);
            return typeof value === 'string' && regex.test(value);
        },
        () => ({ pattern })
    );
}

function createAllowedValueValidator(allowedValue: Nullable<FieldValidations['allowedValue']>): Validator<{ allowed: any }> {
    const allowed = allowedValue?.value;
    if (isNull(allowed)) {
        return noopValidator;
    }

    return fromValid(
        (value: unknown) => {
            if (isEmpty(value)) {
                return true;
            }
            return (value === allowed);
        },
        () => ({ allowed })
    );
}

function createAllowedValuesValidator(allowedValues: Nullable<FieldValidations['allowedValues']>): Validator<{ allowed: string[] }> {
    const allowed = allowedValues?.keyValues
        ? allowedValues.keyValues.map(value => value.key)
        : allowedValues?.values;
    if (!allowed?.length) {
        return noopValidator;
    }

    return fromValid(
        (value: unknown) => {
            if (isEmpty(value)) {
                return true;
            }
            return Array.isArray(value) ? value.every(v => allowed.includes(v)) : allowed.includes(value as any);
        },
        () => ({ allowed })
    );
}

function createPastDateTimeValidator(dataType: FieldDataType, pastDateTime: Nullable<FieldValidation>) {
    return !!pastDateTime
        ? fromValid(
            (value: unknown) => {
                if (isNull(value)) {
                    return true;
                }
                if (dataType === 'dateTime') {
                    const now = new Date();
                    const dt = new Date(`${value}`);
                    return dt.getTime() <= now.getTime();
                }
                return true;
            },
            () => ({})
        )
        : noopValidator;
}

export function validate(value: unknown, field: Field, isEntryTitle: boolean) {
    const validator = createFieldValidator(field, isEntryTitle);
    return validator(value);
}
