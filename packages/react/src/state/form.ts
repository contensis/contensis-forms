import { useMemo } from 'react';
import { FormProps, FormState } from '../models';
import { createActions } from './actions';
import { Api } from './api';
import { createSelectors } from './selectors';
import { createStore } from './store';

export type Form = ReturnType<typeof createForm>;

export function createForm({ apiUrl, projectId, formId, language, versionStatus }: FormProps, htmlId: string) {
    return useMemo(() => {
        const initialState: FormState = {
            apiUrl: apiUrl || '',
            projectId,
            formId,
            language: language || null,
            versionStatus: versionStatus || 'published',
            htmlId: htmlId || '',
            form: null,
            steps: [],
            value: {},
            defaultValue: {},
            emptyValue: {},
            inputValue: {},
            errors: {},
            showErrors: false,
            focussed: null,
            loading: false,
            apiError: null,
            defaultPageTitle: document.title
        };

        const store = createStore(
            initialState,
            (args) => ({
                ...createActions(args),
                ...createSelectors(args)
            })
        );

        store.setForm(Api.getForm(store.getFormParams()));

        return store;
    }, [apiUrl, projectId, formId, language, htmlId]);

}
