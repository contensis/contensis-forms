import { Field, FieldDataFormat, FieldDataType, FieldEditorId, FieldEditorType, FormFieldOption, Nullable } from '../models';
import { getLocalisedValue } from './shared';

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
    time: 'time',
    url: 'url'
};

const DEFAULT_EDITOR_ID_EDITOR_TYPES: Record<FieldEditorId, FieldEditorType> = {
    date: 'date',
    datetime: 'datetime',
    decimal: 'decimal',
    integer: 'integer',
    list: 'radio',
    'list-dropdown': 'select',
    multiline: 'multiline',
    text: 'text'
};

export function getFieldEditorType(field: Field) {
    let editorType: Nullable<FieldEditorType> = field.editor?.id ? DEFAULT_EDITOR_ID_EDITOR_TYPES[field.editor.id] : null;
    if (!editorType && field.dataFormat) {
        editorType = DEFAULT_DATA_FORMAT_EDITOR_TYPES[field.dataFormat];
    }
    if (!editorType && field.validations?.allowedValues?.values) {
        editorType = (field.dataType === 'stringArray')
            ? 'multiselect'
            : 'radio';
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

export function getEmptyFieldValue(field: Field) {
    return EMPTY_FIELD_VALUES[field.dataType];
}

export function getOptions(field: Field, language: string, htmlId: string): undefined | FormFieldOption[] {
    return field?.validations?.allowedValues?.values?.map((localisedValue, index) => {
        const value = getLocalisedValue(localisedValue, language, '');
        return {
            key: `${index}`,
            htmlId: `${htmlId}-option-${index}`,
            value,
            label: value,
        };
    });
}

export function getDefaultValue(field: Field, language: string) {
    const defaultValue = getLocalisedValue(field?.default, language, getEmptyFieldValue(field));
    if ((field.dataType === 'dateTime') && (defaultValue === 'now()')) {
        const dt = new Date();
        return `${dt.getFullYear()}-${pad(dt.getMonth() + 1)}-${pad(dt.getDate())}T${pad(dt.getHours())}:${pad(dt.getMinutes())}`;
    } else if ((field.dataType === 'string') && (field.dataFormat === 'time') && (defaultValue === 'now()')) {
        const dt = new Date();
        return `${pad(dt.getHours())}:${pad(dt.getMinutes())}`;
    }
    return defaultValue;
}

function pad(n: number, length: number = 2) {
    const padding = Array.from({ length }).map(() => '0').join('');
    return `${padding}${n}`.slice(-1 * length)
}