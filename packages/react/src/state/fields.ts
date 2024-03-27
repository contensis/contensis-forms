import { localeInfo } from '../dates';
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
    if (!editorType && (field.validations?.allowedValues?.values || field.validations?.allowedValues?.keyValues)) {
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
    const pairs = field?.validations?.allowedValues?.keyValues
        ? field?.validations?.allowedValues?.keyValues?.map(dict => {
            const key = Object.keys(dict)[0];
            return { key, value: dict[key] };
        })
        : field?.validations?.allowedValues?.values?.map(value => ({ key: '', value }));

    return pairs?.map((pair, index) => {
        const value = getLocalisedValue(pair.value, language, '');
        return {
            key: `${index}`,
            htmlId: `${htmlId}-option-${index}`,
            value: pair.key || value,
            label: value,
        };
    });
}

export function getDefaultValue(field: Field, language: string) {
    const defaultValue = getLocalisedValue(field?.default, language, getEmptyFieldValue(field));
    if ((field.dataType === 'dateTime') && (defaultValue === 'now()')) {
        return getNowDateTime();
    } else if ((field.dataType === 'string') && (field.dataFormat === 'time') && (defaultValue === 'now()')) {
        return getNowTime();
    }
    return defaultValue;
}

export function getInputValue(field: Field, value: any) {
    if (field.dataType === 'dateTime') {
        const editor = getFieldEditorType(field);
        if (editor === 'datetime') {
            return localeInfo().toShortDateTimeString(value);
        } else {
            return localeInfo().toShortDateString(value);
        }
    }
    return value;
}

export function getNowDateTime() {
    return toLocalIsoDateTime(new Date());
}

export function getNowTime() {
    return toLocalIsoTime(new Date());
}

export function toLocalIsoDateTime(dt: Date) {
    return `${dt.getFullYear()}-${pad(dt.getMonth() + 1)}-${pad(dt.getDate())}T${pad(dt.getHours())}:${pad(dt.getMinutes())}`;
}

export function toLocalIsoTime(dt: Date) {
    return `${pad(dt.getHours())}:${pad(dt.getMinutes())}`;
}

const AUTO_SAVE_PROGRESS_EXPIRY_DAYS = 30;

export function getProgressExpiry() {
    const d = new Date();
    d.setDate(d.getDate() + AUTO_SAVE_PROGRESS_EXPIRY_DAYS);
    return toLocalIsoDateTime(d);
}

function pad(n: number, length: number = 2) {
    const padding = Array.from({ length }).map(() => '0').join('');
    return `${padding}${n}`.slice(-1 * length)
}