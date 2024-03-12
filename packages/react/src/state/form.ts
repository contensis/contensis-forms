import { useMemo } from 'react';
import { FormProps, FormState } from '../models';
import { createActions } from './actions';
import { createSelectors } from './selectors';
import { DEFAULT_LANGUAGE } from './shared';
import { createStore } from './store';

export type Form = ReturnType<typeof createForm>;

export function createForm({ formId, form, language, client }: FormProps, htmlId: string) {
    return useMemo(() => {
        const initialState: FormState = {
            htmlId: htmlId || '',
            form: null,
            language: language || DEFAULT_LANGUAGE,
            steps: [],
            value: {},
            defaultValue: {},
            emptyValue: {},
            inputValue: {},
            errors: {},
            showErrors: false,
            focussed: null,
            loading: false,
            loadError: null,
            defaultPageTitle: document.title
        };

        const store = createStore(
            initialState,
            (args) => ({
                ...createActions(args),
                ...createSelectors(args)
            })
        );

        if (form) {
            store.setForm(form);
        } else if (formId && client) {
            store.setForm(client.forms.get(formId));
        }

        return store;
    }, [formId, form, language, htmlId]);

}
