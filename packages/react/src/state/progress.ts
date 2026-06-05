import { DateTime } from './dates';
import type { Dictionary, FormContentType, Nullable } from '../models';

const AUTO_SAVE_PROGRESS_EXPIRY_DAYS = 30;
const STORAGE_KEY_PREFIX = 'contensis-form';

type StorageKey = 'session' | 'started' | 'resumed' | 'expiry' | 'value';

function storage(form: FormContentType) {
    const l = localStorage;

    return {
        get: (key: StorageKey) => l.getItem(`${STORAGE_KEY_PREFIX}-${form.id}-${key}`),
        set: function (key: StorageKey, value: string) {
            l.setItem(`${STORAGE_KEY_PREFIX}-${form.id}-${key}`, value);
            return this;
        },
        remove: function (key: StorageKey) {
            l.removeItem(`${STORAGE_KEY_PREFIX}-${form.id}-${key}`);
            return this;
        }
    };
}

function getProgressExpiry() {
    const d = new Date();
    d.setDate(d.getDate() + AUTO_SAVE_PROGRESS_EXPIRY_DAYS);
    return DateTime.toLocalIsoDateTime(d);
}

function autoSave(form: FormContentType, value: Dictionary<unknown>, originallyStartedAt: Nullable<string>) {
    const store = storage(form);
    if (form?.id) {
        if (!store.get('started')) {
            store.set('started', DateTime.getNowDateTime());
        }
        if (originallyStartedAt && !store.get('session')) {
            const now = DateTime.getNowDateTime();
            // Needs to track "session" so we can safely delete it when the form reloads,
            // A new "session" allows us to reliably track when the form progress has "resumed"
            store.set('session', now).set('resumed', now);
        }
        store.set('value', !!value ? JSON.stringify(value) : '').set('expiry', getProgressExpiry());
    }
}

function reset(form: FormContentType) {
    if (form?.id) {
        storage(form).remove('started').remove('session').remove('resumed').remove('expiry').remove('value');
    }
}

function load(form: FormContentType) {
    if (!!form) {
        const store = storage(form).remove('session'); // Clear any previous "session" timestamp, so we can set again on next autoSave
        const originallyStartedAt = store.get('started'); // Return any previous "started" timestamp so we track this form progress as "resumed"

        const expiry = store.get('expiry');
        const jsonValue = store.get('value');
        const d = DateTime.getNowDateTime();
        if (expiry && jsonValue && d < expiry) {
            try {
                const value = JSON.parse(jsonValue) as Dictionary<unknown>;
                return {
                    value,
                    originallyStartedAt
                };
            } catch {}
        }
    }
    return null;
}

function loadQuery(): Record<string, string[]> {
    if (window?.location?.search) {
        const params = new URLSearchParams(window.location.search);
        return [...params.keys()].reduce(
            (prev, key) => ({
                ...prev,
                [key]: params.getAll(key)
            }),
            {} as Record<string, string[]>
        );
    }
    return {};
}

function getContext(form: FormContentType) {
    const store = storage(form);
    return {
        formStartedAt: store.get('started'),
        formResumed: store.get('resumed')
    };
}

export const Progress = {
    autoSave,
    reset,
    load,
    loadQuery,
    getContext
};
