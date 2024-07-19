import {
    Dictionary,
    Field,
    FieldDataFormat,
    FieldDataType,
    FieldValidation,
    FieldValidationWithValue,
    FieldValidations,
    Nullable,
    ValidationError
} from '../models';
import { format, localisations, plural } from './localisations';
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
    reference: '',
    time: localisations.fieldDataFormatTimeValidationMessage,
    url: localisations.fieldDataFormatUrlValidationMessage
};

const createFieldValidator = memo((field: Field) => {
    const validators: [string, Validator<Dictionary<any>>, message: string][] = [
        ['dataType', createDataTypeValidator(field.dataType), format(DATA_TYPE_MESSAGES[field.dataType], field.name)],
        ['dataFormat', createDataFormatValidator(field.dataFormat), field.dataFormat ? format(DATA_FORMAT_MESSAGES[field.dataFormat], field.name) : ''],
        [
            'required',
            createRequiredValidator(field.validations?.required),
            field.validations?.required?.message || format(localisations.fieldRequiredValidationMessage, field.name)
        ],
        [
            'allowedValue',
            createAllowedValueValidator(field.validations?.allowedValue),
            field.validations?.allowedValue?.message || format(localisations.fieldAllowedValueValidationMessage, field.name)
        ],
        [
            'size',
            createSizeValidator(field.validations?.min, field.validations?.max),
            getRangeErrorMessage(
                field.validations?.min,
                field.validations?.max,
                format(localisations.fieldMinValidationMessage, field.name, field.validations?.min?.value),
                format(localisations.fieldMaxValidationMessage, field.name, field.validations?.max?.value),
                format(localisations.fieldMinMaxValidationMessage, field.name, field.validations?.min?.value, field.validations?.max?.value)
            )
        ],
        [
            'length',
            createLengthValidator(field.validations?.minLength, field.validations?.maxLength),
            getRangeErrorMessage(
                field.validations?.minLength,
                field.validations?.maxLength,
                format(localisations.fieldMinLengthValidationMessage, field.name, field.validations?.minLength?.value),
                format(localisations.fieldMaxLengthValidationMessage, field.name, field.validations?.maxLength?.value),
                format(localisations.fieldMinMaxLengthValidationMessage, field.name, field.validations?.minLength?.value, field.validations?.maxLength?.value)
            )
        ],
        [
            'count',
            createCountValidator(field.validations?.minCount, field.validations?.maxCount),
            getRangeErrorMessage(
                field.validations?.minCount,
                field.validations?.maxCount,
                minCountMessage(field.validations?.minCount?.value, field),
                maxCountMessage(field.validations?.maxCount?.value, field),
                format(localisations.fieldMinMaxCountValidationMessage, field.name, field.validations?.minCount?.value, field.validations?.maxCount?.value)
            )
        ],
        [
            'regex',
            createRegExValidator(field.validations?.regex),
            field.validations?.regex?.message || format(localisations.fieldRegExValidationMessage, field.name)
        ],
        [
            'allowedValues',
            createAllowedValuesValidator(field.validations?.allowedValues),
            field.validations?.allowedValues?.message || format(localisations.fieldAllowedValuesValidationMessage, field.name)
        ],
        [
            'pastDateTime',
            createPastDateTimeValidator(field.dataType, field.validations?.pastDateTime),
            field.validations?.pastDateTime?.message || format(localisations.fieldPastDateTimeValidationMessage, field.name)
        ]
    ];

    return function (value: unknown) {
        return validators.reduce(
            (prev, [key, validator, message]) => {
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
            },
            null as Nullable<Dictionary<ValidationError>>
        );
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
    return typeof value === 'string' || Array.isArray(value);
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
                    return typeof value === 'number' && Number.isSafeInteger(value);
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
            switch (dataFormat) {
                case 'email': {
                    const emailRegex = new RegExp(
                        '^(([^<>()\\[\\]\\.,;:\\s@\\"]+(\\.[^<>()\\[\\]\\.,;:\\s@\\"]+)*)|(\\".+\\"))@(([^<>()[\\]\\.,;:\\s@\\"]+\\.)+[^<>()[\\]\\.,;:\\s@\\"]{2,})$',
                        'i'
                    );
                    return typeof value === 'string' && emailRegex.test(value);
                }
                case 'phone': {
                    return true;
                }
                case 'reference': {
                    return true;
                }
                case 'time': {
                    const timeRegex = new RegExp('^([01]?[0-9]|2[0-3])([:. ])([0-5]\\d)(\\2[0-5]\\d)?$');
                    return typeof value === 'string' && timeRegex.test(value);
                }
                case 'url': {
                    const urlRegex = new RegExp(
                        '^(?:(?:(?:https?|ftp):)?\\/\\/)(?:\\S+(?::\\S*)?@)?(?:(?!(?:10|127)(?:\\.\\d{1,3}){3})(?!(?:169\\.254|192\\.168)(?:\\.\\d{1,3}){2})(?!172\\.(?:1[6-9]|2\\d|3[0-1])(?:\\.\\d{1,3}){2})(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}(?:\\.(?:[1-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))|(?:(?:[a-z0-9\\u00a1-\\uffff][a-z0-9\\u00a1-\\uffff-]{0,62})?[a-z0-9\\u00a1-\\uffff]\\.)+(?:[a-z\\u00a1-\\uffff]{2,}\\.?))(?::\\d{2,5})?(?:[/?#]\\S*)?$'
                    );
                    return typeof value === 'string' && urlRegex.test(value);
                }
            }
        },
        () => ({})
    );
}

function createRequiredValidator(required: Nullable<FieldValidation>): Validator<{}> {
    return !!required
        ? fromValid(
              (value: unknown) => !isEmpty(value),
              () => ({})
          )
        : noopValidator;
}

function createSizeValidator(
    min: Nullable<FieldValidationWithValue<number>>,
    max: Nullable<FieldValidationWithValue<number>>
): Validator<{ min: Nullable<number>; max: Nullable<number> }> {
    return !!min || !!max
        ? fromValid(
              (value: unknown) => {
                  let valid = true;
                  if (typeof value === 'number') {
                      if (min) {
                          valid = value >= min.value;
                      }
                      if (valid && max) {
                          valid = value <= max.value;
                      }
                  }
                  return valid;
              },
              () => ({ min: min?.value, max: max?.value })
          )
        : noopValidator;
}

function createLengthValidator(
    minLength: Nullable<FieldValidationWithValue<number>>,
    maxLength: Nullable<FieldValidationWithValue<number>>
): Validator<{ minLength: Nullable<number>; maxLength: Nullable<number> }> {
    return !!minLength || !!maxLength
        ? fromValid(
              (value: unknown) => {
                  let valid = true;
                  if (hasLength(value)) {
                      if (minLength) {
                          valid = value.length >= minLength.value;
                      }
                      if (valid && maxLength) {
                          valid = value.length <= maxLength.value;
                      }
                  }
                  return valid;
              },
              () => ({ minLength: minLength?.value, maxLength: maxLength?.value })
          )
        : noopValidator;
}

function createCountValidator(
    minCount: Nullable<FieldValidationWithValue<number>>,
    maxCount: Nullable<FieldValidationWithValue<number>>
): Validator<{ minCount: Nullable<number>; maxCount: Nullable<number> }> {
    return !!minCount || !!maxCount
        ? fromValid(
              (value: unknown) => {
                  let valid = true;
                  if (hasLength(value)) {
                      if (minCount) {
                          valid = value.length >= minCount.value;
                      }
                      if (valid && maxCount) {
                          valid = value.length <= maxCount.value;
                      }
                  }
                  return valid;
              },
              () => ({ minCount: minCount?.value, maxCount: maxCount?.value })
          )
        : noopValidator;
}

function createRegExValidator(regex: Nullable<FieldValidation & { pattern: string }>): Validator<{ pattern: string }> {
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
            // don't automatically allow empty values
            return value === allowed;
        },
        () => ({ allowed })
    );
}

function createAllowedValuesValidator(allowedValues: Nullable<FieldValidations['allowedValues']>): Validator<{ allowed: string[] }> {
    const allowed = allowedValues?.labeledValues ? allowedValues.labeledValues.map((value) => value.value) : allowedValues?.values;
    if (!allowed?.length) {
        return noopValidator;
    }

    return fromValid(
        (value: unknown) => {
            if (isEmpty(value)) {
                return true;
            }
            return Array.isArray(value) ? value.every((v) => allowed.includes(v)) : allowed.includes(value as any);
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

function validate(value: unknown, field: Field) {
    if (field?.editor?.properties?.hidden) {
        return null;
    }
    const validator = createFieldValidator(field);
    return validator(value);
}

function minCountMessage(value: Nullable<number>, field: Field) {
    value = value || 0;
    return plural(value, {
        zero: () => format(localisations.fieldMinCountValidationMessageZero, field.name, value),
        one: () => format(localisations.fieldMinCountValidationMessageOne, field.name, value),
        two: () => format(localisations.fieldMinCountValidationMessageTwo, field.name, value),
        few: () => format(localisations.fieldMinCountValidationMessageFew, field.name, value),
        many: () => format(localisations.fieldMinCountValidationMessageMany, field.name, value),
        other: () => format(localisations.fieldMinCountValidationMessageOther, field.name, value)
    });
}

function maxCountMessage(value: Nullable<number>, field: Field) {
    value = value || 0;
    return plural(value, {
        zero: () => format(localisations.fieldMaxCountValidationMessageZero, field.name, value),
        one: () => format(localisations.fieldMaxCountValidationMessageOne, field.name, value),
        two: () => format(localisations.fieldMaxCountValidationMessageTwo, field.name, value),
        few: () => format(localisations.fieldMaxCountValidationMessageFew, field.name, value),
        many: () => format(localisations.fieldMaxCountValidationMessageMany, field.name, value),
        other: () => format(localisations.fieldMaxCountValidationMessageOther, field.name, value)
    });
}

function getRangeErrorMessage(
    min: Nullable<FieldValidationWithValue<number>>,
    max: Nullable<FieldValidationWithValue<number>>,
    defaultMinMessage: string,
    defaultMaxMessage: string,
    defaultRangeMessage: string
) {
    if (min?.message) {
        return min.message;
    }
    if (max?.message) {
        return max.message;
    }
    if (min && max) {
        return defaultRangeMessage;
    }
    if (min) {
        return defaultMinMessage;
    }
    if (max) {
        return defaultMaxMessage;
    }
    return '';
}

export const Validation = {
    validate
};
