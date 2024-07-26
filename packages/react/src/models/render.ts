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

export type PluralLocalizations = {
    zero: string;
    one: string;
    two: string;
    few: string;
    many: string;
    other: string;
};

export type FormLocalizations = {
   
    buttons: {
        next: string;
        previous: string;
        submit: string;
    },

    load: {
        loading: string;
        error: string;
    },

    error: {
        label: string;
        pageTitle: string;
        summaryTitle: string
    },

    messages: {
        confirmation: string;
        page: string;
    },

    labels: {
        required: string;
        selectPlaceholder: string;
    }

    dates: {
        day: string;
        month: string;
        year: string;
        hour: string,
        minute: string;
        period: string;
    },

    validation: {

        dataType: {
            boolean: string;
            dateTime: string;
            decimal: string;
            integer: string;
            string: string;
            stringArray: string;
        };

        dataFormat: {
            email: string;
            phone: string;
            time: string;
            url: string;
        };

        minCount: PluralLocalizations;
        maxCount: PluralLocalizations;

        required: string;
        allowedValue: string;
        allowedValues: string;
        pastDateTime: string;
        regEx: string;

        min: string;
        max: string;
        minMax: string;

        minLength: string;
        maxLength: string;
        minMaxLength: string;

        minMaxCount: string;

    },

    characterCount: {
        remaining: PluralLocalizations;
        exceeded: PluralLocalizations;
    }

};