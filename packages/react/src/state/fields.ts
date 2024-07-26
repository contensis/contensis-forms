import { Dictionary, Field, FieldDataFormat, FieldDataType, FieldEditorId, FieldEditorType, FormContentType, FormFieldOption, FormLocalizations, Nullable } from '../models';
import { DateTime } from './dates';
import { Validation } from './validation';

const DEFAULT_DATA_TYPE_EDITOR_TYPES: Record<FieldDataType, FieldEditorType> = {
    boolean: 'checkbox',
    dateTime: 'date',
    decimal: 'decimal',
    integer: 'integer',
    string: 'text',
    stringArray: 'radio'
};

const DEFAULT_DATA_FORMAT_EDITOR_TYPES: Record<FieldDataFormat, FieldEditorType> = {
    email: 'email',
    phone: 'tel',
    reference: 'reference',
    time: 'time',
    url: 'url'
};

const DEFAULT_EDITOR_ID_EDITOR_TYPES: Record<FieldEditorId, FieldEditorType> = {
    date: 'date',
    dateparts: 'dateparts',
    datetime: 'datetime',
    datetimeparts: 'datetimeparts',
    decimal: 'decimal',
    integer: 'integer',
    list: 'radio',
    'list-dropdown': 'select',
    multiline: 'multiline',
    text: 'text',
    time: 'time',
    timeparts: 'timeparts'
};

function getEditorType(field: Field) {
    let editorType: Nullable<FieldEditorType> = field.editor?.id ? DEFAULT_EDITOR_ID_EDITOR_TYPES[field.editor.id] : null;
    if (!editorType && field.dataFormat) {
        editorType = DEFAULT_DATA_FORMAT_EDITOR_TYPES[field.dataFormat];
    }
    if (!editorType && (field.validations?.allowedValues?.values || field.validations?.allowedValues?.labeledValues)) {
        editorType = field.dataType === 'stringArray' ? 'multiselect' : 'radio';
    }
    editorType = editorType || DEFAULT_DATA_TYPE_EDITOR_TYPES[field.dataType];
    return editorType || 'text';
}

const EMPTY_FIELD_VALUES: Record<FieldDataType, any> = {
    boolean: false,
    dateTime: null,
    decimal: null,
    integer: null,
    string: '',
    stringArray: null
};

function getEmptyFieldValue(field: Field) {
    return EMPTY_FIELD_VALUES[field.dataType];
}

function getOptions(field: Field, htmlId: string, localizations: FormLocalizations): undefined | FormFieldOption[] {
    const pairs = field?.validations?.allowedValues?.labeledValues
        ? field?.validations?.allowedValues?.labeledValues?.map((value) => value)
        : field?.validations?.allowedValues?.values?.map((value) => ({ value, label: value }));

    let options = pairs
        ?.filter((pair) => !!pair.value)
        .map((pair, index) => {
            return {
                key: `${index}`,
                htmlId: `${htmlId}-option-${index}`,
                value: pair.value || '',
                label: pair.label
            };
        });

    if (getEditorType(field) === 'select') {
        options = [
            {
                key: '',
                htmlId: `${htmlId}-option--1`,
                value: '',
                label: field?.editor?.properties?.placeholderText || localizations.labels.selectPlaceholder
            },
            ...(options || [])
        ];
    }

    return options;
}

function getDefaultValue(field: Field) {
    const defaultValue = typeof field?.default !== 'undefined' && field?.default !== null ? field.default : getEmptyFieldValue(field);
    if (field.dataType === 'dateTime' && defaultValue === 'now()') {
        const editorType = getEditorType(field);
        return editorType === 'datetime' || editorType === 'datetimeparts' ? DateTime.getNowDateTime() : DateTime.getNowDate();
    } else if (field.dataType === 'string' && field.dataFormat === 'time' && defaultValue === 'now()') {
        return DateTime.getNowTime();
    }
    return defaultValue;
}

function getInputValue(field: Field, value: unknown) {
    const editor = getEditorType(field);
    if (field.dataType === 'dateTime') {
        if (editor === 'datetime') {
            return DateTime.localeInfo().toShortDateTimeString(value as string | Date);
        }
        if (editor === 'date') {
            return DateTime.localeInfo().toShortDateString(value as string | Date);
        }
        if (editor === 'datetimeparts') {
            return DateTime.toDateTimeParts(value as string | Date, field.editor?.properties?.timeFormat || '24h');
        }
        if (editor === 'dateparts') {
            return DateTime.toDateParts(value as string | Date);
        }
    }
    if (field.dataType === 'string' && field.dataFormat === 'time') {
        if (editor === 'timeparts') {
            return DateTime.toTimeParts(value as string | Date, field.editor?.properties?.timeFormat || '24h');
        }
    }
    return value;
}

function reduceFields<T>(form: Nullable<FormContentType>, fn: (field: Field, index: number) => T): Dictionary<T> {
    return form?.fields ? form.fields.reduce((prev, field, index) => ({ ...prev, [field.id]: fn(field, index) }), {} as Dictionary<T>) : {};
}

function validate(field: Field, value: unknown, localizations: FormLocalizations) {
    return Validation.validate(value, field, localizations);
}

function isNullish(o: unknown) {
    return o === null || typeof o === 'undefined';
}

function getInitialValue(field: Field, query: Nullable<string[]>, progressValue: unknown, localizations: FormLocalizations) {
    let value = null;
    if (typeof progressValue !== 'undefined') {
        const errors = validate(field, progressValue, localizations);
        if (!errors?.dataType && !errors?.allowedValues) {
            value = progressValue;
        }
    }
    if (isNullish(value)) {
        let queryValue = null;
        const firstQuery = query?.[0];
        switch (field.dataType) {
            case 'boolean': {
                if (firstQuery === 'true' || firstQuery === 'checked' || firstQuery === 'on') {
                    queryValue = true;
                } else if (firstQuery === 'false' || firstQuery === 'unchecked' || firstQuery === 'off') {
                    queryValue = false;
                }
                break;
            }
            case 'dateTime': {
                if (firstQuery) {
                    if (field.dataType === 'dateTime') {
                        return getEditorType(field) === 'datetime' ? DateTime.parseDateTime(firstQuery) : DateTime.parseDate(firstQuery);
                    } else if (field.dataType === 'string' && field.dataFormat === 'time') {
                        return DateTime.parseTime(firstQuery);
                    }
                }
                break;
            }
            case 'decimal': {
                queryValue = !!firstQuery ? parseFloat(firstQuery) : null;
                break;
            }
            case 'integer': {
                queryValue = !!firstQuery ? parseInt(firstQuery, 10) : null;
                break;
            }
            case 'string': {
                queryValue = firstQuery;
                break;
            }
            case 'stringArray': {
                if (query) {
                    if (field.validations?.allowedValues) {
                        const allowed = field.validations.allowedValues.labeledValues
                            ? field.validations.allowedValues.labeledValues.map((value) => value.value)
                            : field.validations.allowedValues.values;
                        if (allowed) {
                            queryValue = query.filter((item) => allowed.includes(item));
                        }
                    } else {
                        queryValue = query;
                    }
                }
                break;
            }
        }
        if (queryValue !== null) {
            const errors = validate(field, queryValue, localizations);
            if (!errors?.dataType && !errors?.allowedValues) {
                value = queryValue;
            }
        }
    }
    if (isNullish(value)) {
        value = getDefaultValue(field);
    }
    return value;
}

export const Fields = {
    getEditorType,
    getOptions,
    getInitialValue,
    getInputValue,
    reduceFields,
    validate
};
