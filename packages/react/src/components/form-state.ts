import { useMemo, useState } from 'react';
import { ConfirmationRuleReturn, Dictionary, FormContentType, FormResponse, Nullable, ValidationError } from '../models';

export type FormState = {
    defaultPageTitle: string;
    isLoading: boolean;
    apiError: unknown;
    form: Nullable<FormContentType>;
    pageIndex: number;

    value: Dictionary<unknown>;
    inputValue: Dictionary<unknown>;

    confirmationRule: Nullable<ConfirmationRuleReturn>;
    formResponse: Nullable<FormResponse>;

    showErrors: boolean;
    errors: Dictionary<Nullable<Dictionary<ValidationError>>>;
    isDirty: boolean;
    isSubmitted: boolean;
};

function initialFormState(): FormState {
    return {
        defaultPageTitle: document.title,
        isLoading: true,
        apiError: null,
        form: null,
        pageIndex: 0,
        value: {},
        inputValue: {},
        confirmationRule: null,
        formResponse: null,
        showErrors: false,
        errors: {},
        isDirty: false,
        isSubmitted: false
    };
}

export function useFormState(): [FormState, React.Dispatch<React.SetStateAction<FormState>>, React.Dispatch<Partial<FormState>>] {
    const [formState, setFormState] = useState(initialFormState);
    const patchFormState = function (updates: Partial<FormState>) {
        setFormState((prev) => ({
            ...prev,
            ...updates
        }));
    };
    return [formState, setFormState, patchFormState]
};

export type FormHistory = { pageId: string, pageIndex: number };

export function toHistoryState(pageId: string, pageIndex: number): FormHistory {
    return { pageId, pageIndex };
}

export function isValidHistoryState(state: FormHistory) {
    return !!state?.pageId && (typeof state?.pageIndex === 'number');
}

export function isCurrentHistoryState(state: FormHistory, windowState: FormHistory = window.history.state) {
    if (isValidHistoryState(state) && isValidHistoryState(windowState)) {
        return (state.pageId === windowState.pageId) && (state.pageIndex === windowState.pageIndex);
    }
    return false;
}

export function useFormHtmlId(formId: string) {
    return useMemo(() => {
        window.CONTENSIS_FORMS = window.CONTENSIS_FORMS || {};
        window.CONTENSIS_FORMS.formCounter = window.CONTENSIS_FORMS.formCounter || 1;
        const counter = window.CONTENSIS_FORMS.formCounter++;
        return `contensis-form-${formId}-${counter}`;
    }, [formId]);
}
