import { DateTime } from './dates';
import type { Dictionary, FormContentType, Nullable } from '../models';

const AUTO_SAVE_PROGRESS_EXPIRY_DAYS = 30;
const STORAGE_KEY_PREFIX = 'contensis-form';

type StorageKey = 'session' | 'started' | 'resumed' | 'expiry' | 'value';

interface IFormLocalStorage {
    session: Nullable<string>;
    started: Nullable<string>;
    resumed: Nullable<string>;
    expiry: Nullable<string>;
    value: Nullable<Dictionary<unknown>>;
}

function storage(form: FormContentType) {
    const l = localStorage;
    const state = () => JSON.parse(l.getItem(`${STORAGE_KEY_PREFIX}-${form.id}`) || '{}') as IFormLocalStorage;
    const save = (draft: IFormLocalStorage) => l.setItem(`${STORAGE_KEY_PREFIX}-${form.id}`, JSON.stringify(draft));
    return {
        ...state(),
        set: function (key: StorageKey, value: unknown) {
            this.patch({ [key]: value });
            return this;
        },
        remove: function (key: StorageKey) {
            const current = state();
            delete current[key];
            save(current);
            return this;
        },
        patch: function (patch: Partial<IFormLocalStorage>) {
            save({ ...state(), ...patch });
            return this;
        },
        clear: function () {
            l.removeItem(`${STORAGE_KEY_PREFIX}-${form.id}`);
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
    if (!form?.id) return;

    const state = storage(form);

    if (!state.started) {
        // Set "started" timestamp on first autoSave
        state.set('started', DateTime.getNowDateTime());
    }

    if (form?.properties?.autoSaveProgress) {
        if (originallyStartedAt && !state.session) {
            const now = DateTime.getNowDateTime();
            // Needs to track "session" so we can safely delete it when the form reloads,
            // A new "session" allows us to reliably track when the form progress has "resumed"
            state.set('session', now).set('resumed', now);
        }
        state.set('value', value).set('expiry', getProgressExpiry());
    }
}

function reset(form: FormContentType) {
    if (form?.id) {
        storage(form).clear();
    }
}

function load(form: FormContentType) {
    if (!!form) {
        let originallyStartedAt: Nullable<string> = null;
        const state = storage(form);

        if (form?.properties?.autoSaveProgress) {
            // Clear any previous "session" timestamp, so we can set again on next autoSave
            state.remove('session');
            // Return any previous "started" timestamp so we track this form progress as "resumed"
            originallyStartedAt = state.started;
        } else {
            // Clear any previous context if autoSaveProgress is not enabled
            state.clear();
            //state.remove('started');
        }
        const expiry = state.expiry;
        const d = DateTime.getNowDateTime();
        if (expiry && state.value && d < expiry) {
            try {
                return {
                    value: state.value,
                    originallyStartedAt
                };
            } catch {}
        }
        return { originallyStartedAt };
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
    const state = storage(form);
    return {
        formStartedAt: state.started,
        formResumed: state.resumed
    };
}

export const Progress = {
    autoSave,
    reset,
    load,
    loadQuery,
    getContext
};
