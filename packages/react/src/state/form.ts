import { useMemo } from 'react';
import { FormProps, FormState } from '../models';
import { createActions } from './actions';
import { getForm } from './client';
import { createSelectors } from './selectors';
import { createStore } from './store';

export type Form = ReturnType<typeof createForm>;

export function createForm({ alias, projectId, formId, language, versionStatus }: FormProps, htmlId: string) {
    return useMemo(() => {
        const initialState: FormState = {
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

        if (alias && projectId && formId) {
            // todo: remove as any and hanlde null values
            store.setForm(getForm(alias, projectId, formId, language || '', versionStatus || 'published') as any);
        }

        return store;
    }, [alias, projectId, formId, language, htmlId]);

}
