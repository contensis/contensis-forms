import { Dictionary, FormContentType, FormLocalizations, FormPage, Nullable, ValidationError } from '../models';
import { Fields } from './fields';
import { Progress } from './progress';
import { Validation } from './validation';

function getInputValue(form: FormContentType, value: Dictionary<unknown>) {
    return Fields.reduceFields(form, (field) => Fields.getInputValue(field, value?.[field.id]));
}

function validate(form: FormContentType, value: Dictionary<unknown>, localizations: FormLocalizations) {
    return Fields.reduceFields(form, (field) => Validation.validate(value?.[field.id], field, localizations));
}

function getPages(form: Nullable<FormContentType>): FormPage[] {
    if (!form) {
        return [];
    }
    if (form?.properties?.mode === 'survey') {
        return form.fields.map((field, index) => {
            const { id, name, description } = field;
            return {
                pageNo: index + 1,
                id,
                title: name,
                description,
                fields: [field]
            };
        });
    } else if (!form.groups) {
        return [
            {
                pageNo: 1,
                id: 'page1',
                title: '',
                description: null,
                fields: form.fields
            }
        ];
    } else {
        return form.groups.map((group, index) => {
            const { id, name, description } = group;
            return {
                pageNo: index + 1,
                id,
                title: name,
                description,
                fields: (form?.fields || []).filter((field) => field.groupId === id)
            };
        });
    }
}

function getInitialValue(form: FormContentType, localizations: FormLocalizations) {
    const query = Progress.loadQuery();
    const progress = Progress.load(form);
    return Fields.reduceFields(form, (field) => Fields.getInitialValue(field, query?.[field.id], progress?.value?.[field.id], localizations));
}

function pageHasErrors(page: FormPage, errors: Dictionary<Nullable<Dictionary<ValidationError>>>) {
    return !!page && !!page.fields.some((field) => !!errors?.[field.id]);
}

export const Form = {
    getInputValue,
    getPages,
    getInitialValue,
    pageHasErrors,
    validate
};
