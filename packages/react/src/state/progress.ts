import { Dictionary, FormContentType } from '../models';
import { DateTime } from './dates';

const AUTO_SAVE_PROGRESS_EXPIRY_DAYS = 30;

function getProgressExpiry() {
    const d = new Date();
    d.setDate(d.getDate() + AUTO_SAVE_PROGRESS_EXPIRY_DAYS);
    return DateTime.toLocalIsoDateTime(d);
}

function autoSave(form: FormContentType, value: Dictionary<unknown>) {
    if (form?.id && form?.properties?.autoSaveProgress) {
        localStorage.setItem(
            `contensis-form-${form?.id}-expiry`,
            getProgressExpiry()
        );
        localStorage.setItem(
            `contensis-form-${form?.id}-value`,
            !!value ? JSON.stringify(value) : ''
        );
    }
}

function reset(form: FormContentType) {
    if (form?.id) {
        localStorage.removeItem(`contensis-form-${form?.id}-expiry`);
        localStorage.removeItem(`contensis-form-${form?.id}-value`);
    }
}

function load(form: FormContentType) {
    if (!!form) {
        const expiry = localStorage.getItem(`contensis-form-${form.id}-expiry`);
        const jsonValue = localStorage.getItem(`contensis-form-${form.id}-value`);
        const d = DateTime.getNowDateTime();
        if (expiry && jsonValue && (d < expiry)) {
            try {
                const value = JSON.parse(jsonValue) as Dictionary<unknown>;
                return {
                    value
                };
            } catch {

            }
        }
    }
    return null;
}

function loadQuery(): Record<string, string[]> {
    if (window?.location?.search) {
        const params = new URLSearchParams(window.location.search);
        return [...params.keys()].reduce((prev, key) => ({
            ...prev,
            [key]: params.getAll(key)
        }), {} as Record<string, string[]>);
    }
    return {};
}

export const Progress = {
    autoSave,
    reset,
    load,
    loadQuery
};