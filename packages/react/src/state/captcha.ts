import { VersionStatus } from '../models';
import { isPublishedVersion } from './version';

const CAPTCHA_LOAD_CALLBACK = 'on_captcha_load';

type LoadCallback = (() => void) & { loaded: Promise<unknown> };

type ReCaptchaAction = {
    action: 'submit';
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
    return `https://www.google.com/recaptcha/api.js?onload=${CAPTCHA_LOAD_CALLBACK}&render=${siteKey}`;
}

function load(siteKey: string) {
        ensureLoadCallback();

        const captchaUrl = getCaptchaUrl(siteKey)
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

async function submit(siteKey: string): Promise<string> {
    load(siteKey);
    await window[CAPTCHA_LOAD_CALLBACK].loaded;
    await new Promise(resolve => grecaptcha.ready(() => resolve(true)));
    return grecaptcha.execute(siteKey, { action: 'submit' });
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