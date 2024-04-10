import { FormContentType, Dictionary, FormState, Nullable, ValidationError } from '../models';
import { getDefaultValue, getEmptyFieldValue, getInputValue, getNowDateTime, getProgressExpiry } from './fields';
import { getCurrentPageId, getFirstPage, getPageFields, moveToNextPage, moveToPage, moveToPreviousPage, reduceFields } from './shared';
import { CreateStoreArgs } from './store';
import { validate } from './validation';

function getDefaultFormValue(form: FormContentType) {
    return reduceFields(form, field => getDefaultValue(field));
}

function getFormInputValue(form: FormContentType, value: Dictionary<unknown>) {
    return reduceFields(form, field => getInputValue(field, value?.[field.id]));
}

function getEmptyFormValue(form: FormContentType) {
    return reduceFields(form, field => getEmptyFieldValue(field));
}

function isPromise(o: unknown): o is Promise<unknown> {
    return typeof (o as any)?.then === 'function';
}

export function createActions({ set, getState }: CreateStoreArgs<FormState>) {

    const setWithProgress = (updates: (state: FormState) => FormState) => {
        set((state) => {
            const nextState = updates(state);
            if (!Object.is(nextState, state)) {
                autoSaveProgress(nextState);
            }
            return nextState;
        });
    };

    let loadingPromise: null | Promise<void> = null;
    const setForm = (form: FormContentType | Promise<FormContentType>) => {
        if (isPromise(form)) {
            set(state => ({ ...state, loading: true }));
            const p = form.then(
                (form) => {
                    set((state) => (p === loadingPromise) ? onSetForm(state, form) : state);
                    loadingPromise = null;
                },
                (loadError) => {
                    console.log(loadError);
                    set((state) => (p === loadingPromise) ? ({ ...state, loadError, loading: false }) : state);
                    loadingPromise = null;
                }
            );
            loadingPromise = p;
        } else {
            loadingPromise = null;
            set((state) => onSetForm(state, form));
        }
    };

    const setValue = (fieldId: string, fieldValue: unknown) => setWithProgress((state) => onSetValue(state, fieldId, fieldValue));
    const setInputValue = (fieldId: string, fieldInputValue: unknown) => set((state) => onSetInputValue(state, fieldId, fieldInputValue));
    const setFocussed = (fieldId: string, focussed: boolean) => set(state => onSetFocussed(state, fieldId, focussed));
    const submit = () => {
        let canSave = false;
        setWithProgress(state => {
            let s = onSubmit(state);
            canSave = s.canSave;
            return s.state;
        });
        return canSave;
    };

    const previousPage = () => setWithProgress(state => onPreviousPage(state));

    const gotoPage = (pageId: string, trigger: 'popstate') => setWithProgress(state => onGotoPage(state, pageId, trigger));

    const resetProgressInStorage = () => resetProgress(getState());

    const getForm = () => {
        const { form } = getState();
        return form;
    };

    const getFormResponse = () => {
        const { value } = getState();
        return value;
    };

    const getConfirmationRules = () => {
        const { form } = getState();
        return form?.properties?.confirmationRules;
    };

    return {
        setForm,
        setValue,
        setInputValue,
        setFocussed,
        getForm,
        getFormResponse,
        getConfirmationRules,
        submit,
        previousPage,
        gotoPage,
        resetProgress: resetProgressInStorage
    };
}

function currentPageHasErrors(state: FormState) {
    const currentPageId = getCurrentPageId(state.steps);
    const currentPageFieldIds = getPageFields(state.form, currentPageId);
    return !!currentPageFieldIds.some(id => !!state.errors[id]);
}

function onSetForm(state: FormState, form: FormContentType): FormState {
    const firstPageId = getFirstPage(form);
    const defaultValue = getDefaultFormValue(form);
    const emptyValue = getEmptyFormValue(form);
    let value = defaultValue;

    const progress = loadSavedProgress(form);
    if (progress) {
        value = Object.keys(value).reduce((prev, key) => {
            if ((typeof progress?.value?.[key] !== 'undefined') && (typeof value?.[key] !== 'undefined')) {
                // check both are defined, progress so we know we can set the value and value to check that the form field still exists
                prev = {
                    ...prev,
                    [key]: progress.value[key]
                };
            }
            return prev;
        }, value);
    }

    const inputValue = getFormInputValue(form, value);

    const errors = form?.fields.reduce((prev, f) => ({
        ...prev,
        [f.id]: validate(value[f.id], f, f.id === form.entryTitleField)
    }), {} as Dictionary<Nullable<Dictionary<ValidationError>>>);

    addToHistory(firstPageId, 'push');

    return {
        htmlId: state.htmlId,
        form,
        steps: [firstPageId || ''],
        value,
        defaultValue,
        emptyValue,
        inputValue,
        errors,
        showErrors: false,
        focussed: null,
        loading: false,
        loadError: null,
        defaultPageTitle: state.defaultPageTitle
    };
}

function onSetValue(state: FormState, fieldId: string, fieldValue: unknown): FormState {
    const { form, errors, value } = state;
    const field = form?.fields.find(f => f.id === fieldId);
    if (field) {
        const fieldErrors = validate(fieldValue, field, field.id === form?.entryTitleField);
        state = {
            ...state,
            value: {
                ...value,
                [fieldId]: fieldValue
            },
            errors: {
                ...errors,
                [fieldId]: fieldErrors
            }
        };

        return {
            ...state,
            showErrors: state.showErrors && currentPageHasErrors(state)
        };
    } else {
        return state;
    }
}

function onSetInputValue(state: FormState, fieldId: string, fieldInputValue: unknown): FormState {
    const { form, inputValue } = state;
    const field = form?.fields.find(f => f.id === fieldId);
    if (field) {
        return {
            ...state,
            inputValue: {
                ...inputValue,
                [fieldId]: fieldInputValue
            }
        };
    } else {
        return state;
    }
}

function onSetFocussed(state: FormState, fieldId: string, focussed: boolean): FormState {
    if (focussed) {
        return {
            ...state,
            focussed: fieldId
        };
    } else if (state.focussed === fieldId) {
        return {
            ...state,
            focussed: null
        };
    }
    return state;
}

function onSubmit(state: FormState): { canSave: boolean, state: FormState } {
    const isValid = !currentPageHasErrors(state);
    if (isValid) {
        const { isLastPage, newPage, steps } = moveToNextPage(state.form, state.steps);
        if (newPage) {
            addToHistory(newPage, 'push');
            return {
                canSave: false,
                state: {
                    ...state,
                    showErrors: false,
                    steps
                }
            };
        } else if (isLastPage) {
            return {
                canSave: true,
                state: {
                    ...state,
                    showErrors: false
                }
            };
        }
    }
    return {
        canSave: false,
        state: {
            ...state,
            showErrors: true
        }
    };
}

function onPreviousPage(state: FormState): FormState {
    const { newPage, steps } = moveToPreviousPage(state.form, state.steps);
    if (newPage) {
        addToHistory(newPage, 'replace');
        return {
            ...state,
            showErrors: false,
            steps
        };
    }
    return state;
}

function onGotoPage(state: FormState, pageId: string, trigger: 'popstate'): FormState {
    const { newPage, steps, direction } = moveToPage(state.form, state.steps, pageId);
    if (newPage) {
        if (direction === 'forward') {
            const isValid = !currentPageHasErrors(state);
            if (isValid) {
                return {
                    ...state,
                    showErrors: false,
                    steps
                };
            } else {
                if (trigger === 'popstate') {
                    history.back();
                }
                return {
                    ...state,
                    showErrors: true
                };
            }
        } else if (direction === 'backward') {
            return {
                ...state,
                showErrors: false,
                steps
            };
        }
    }
    return state;
}

function addToHistory(pageId: Nullable<string>, action: 'push' | 'replace') {
    if (typeof pageId === 'string') {
        if (action === 'push') {
            history.pushState(pageId, '', '');
        } else {
            history.replaceState(pageId, '', '');
        }
    }
}


function autoSaveProgress(state: FormState) {
    if (state.form?.id && state.form?.properties?.autoSaveProgress) {
        localStorage.setItem(
            `contensis-form-${state.form?.id}-expiry`,
            getProgressExpiry()
        );
        localStorage.setItem(
            `contensis-form-${state.form?.id}-value`,
            !!state.value ? JSON.stringify(state.value) : ''
        );
    }
}

function resetProgress(state: FormState) {
    if (state.form?.id) {
        localStorage.removeItem(`contensis-form-${state.form?.id}-expiry`);
        localStorage.removeItem(`contensis-form-${state.form?.id}-value`);
    }
}

function loadSavedProgress(form: FormContentType) {
    if (!!form) {
        const expiry = localStorage.getItem(`contensis-form-${form.id}-expiry`);
        const jsonValue = localStorage.getItem(`contensis-form-${form.id}-value`);
        const d = getNowDateTime(false);
        if (expiry && jsonValue && (d < expiry)) {
            try {
                const value = JSON.parse(jsonValue);
                return {
                    value
                };
            } catch {

            }
        }
    }
    return null;
}
