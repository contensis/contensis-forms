import { CaptchaSettings, Nullable } from '../models';

const CAPTCHA_LOAD_CALLBACK = 'on_captcha_load';

type LoadCallback = (() => void) & { loaded: Promise<unknown> };

type ReCaptchaAction = {
    action: string;
};

type ReCaptcha = {
    ready(fn: () => void): void;
    execute(siteKey: string, action: ReCaptchaAction): Promise<string>;
}

declare global {
    interface Window {
        [CAPTCHA_LOAD_CALLBACK]: LoadCallback;
    }

    var grecaptcha: ReCaptcha;
}

function getCaptchaUrl(siteKey: string) {
    // todo: possibly use alternative recaptcha url
    return `https://www.google.com/recaptcha/api.js?onload=${CAPTCHA_LOAD_CALLBACK}&render=${siteKey}`;
}

function load(captcha: Nullable<CaptchaSettings>) {
    if (captcha?.enabled && captcha?.siteKey) {
        ensureLoadCallback();

        const captchaUrl = getCaptchaUrl(captcha.siteKey)
        const head = document.getElementsByTagName('head')[0];
        const scripts = [...head.getElementsByTagName('script')];
        const scriptSrcs = scripts.map(s => s.src);
        const hasCaptcha = scriptSrcs.includes(captchaUrl);

        if (!hasCaptcha) {
            const captcha = document.createElement('script');
            captcha.src = captchaUrl;
            head.appendChild(captcha);
        }
    }
}

async function submit(formId: string, captcha: Nullable<CaptchaSettings>): Promise<string> {
    if (captcha?.enabled && captcha?.siteKey) {
        load(captcha);
        await window[CAPTCHA_LOAD_CALLBACK].loaded;
        await new Promise(resolve => grecaptcha.ready(() => resolve(true)));
        return grecaptcha.execute(captcha.siteKey, { action: `${formId}_submit` });
    } else {
        return Promise.resolve('')
    }
}

function ensureLoadCallback() {
    if (!window[CAPTCHA_LOAD_CALLBACK]) {
        let loadedResolve: (v: unknown) => void;
        const loaded = new Promise(resolve => {
            loadedResolve = resolve;
        });
        const callback = function () {
            loadedResolve(null);
        };
        Object.assign(callback, { loaded });
        window[CAPTCHA_LOAD_CALLBACK] = callback as LoadCallback;
    }
}

export const Captcha = {
    load,
    submit
};