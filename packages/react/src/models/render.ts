import { Field } from './api';
import { Nullable } from './shared';

export type FormPage = {
    pageNo: number;
    id: string;
    title: string;
    description: Nullable<string>;
    fields: Field[];
};

export type FormFieldOption = { key: string; htmlId: string; value: string; label: string };

export type FormFieldContainer = 'control' | 'fieldset' | 'checkbox';

export type FieldEditorType =
    | 'checkbox'
    | 'date'
    | 'dateparts'
    | 'datetime'
    | 'datetimeparts'
    | 'decimal'
    | 'email'
    | 'integer'
    | 'multiline'
    | 'multiselect'
    | 'radio'
    | 'reference'
    | 'select'
    | 'tel'
    | 'text'
    | 'time'
    | 'timeparts'
    | 'url';

export type ValidationError = {
    message: string;
};
