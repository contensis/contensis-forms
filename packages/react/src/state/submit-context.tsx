import { FormContentType } from '../models';
import { Progress } from '.';

/**
 * Gather context for the form submission.
 *
 * **Server-derived**
 *
 * - `geoCountry` (string): two-letter country code (e.g. `GB`), server-derived from request headers. Client-provided values are ignored/overwritten. See tech spec for normalisation and validation rules.
 * - `referrer` (string): the HTTP referrer at the point the visitor arrived, server-derived from the `Referer` header. Client-provided values are ignored/overwritten.
 *
 * **Submission origin (sent by Forms Render)**
 * - `pageUrl` (string): the URL of the page where the form was submitted.
 *
 * **Form completion behaviour (sent by Forms Render)**
 * - `formStartedAt` (string): ISO 8601 timestamp of when the user first interacted with the form.
 * - `formResumed` (boolean): whether the form was restored from local storage (partial completion) before submission.
 *
 * **Sent by Forms Render (captured attribution)**
 * - `utmCampaign` (string) ← `utm_campaign`
 * - `utmSource` (string) ← `utm_source`
 * - `utmMedium` (string) ← `utm_medium`
 * - `utmContent` (string) ← `utm_content`
 * - `utmTerm` (string) ← `utm_term`
 *
 * Optional click IDs (strings, also sent by Forms Render)
 * - `gclid` (Google Ads)
 * - `dclid` (Google Display Network)
 * - `msclkid` (Microsoft Ads)
 * - `fbclid` (Meta/Facebook)
 * - `ttclid` (TikTok)
 * - `li_fat_id` (LinkedIn)
 * - `twclid` (X/Twitter)
 *
 * - `audiences` (string[]): determined by Experience package
 */
export const getFormSubmitContext = (form: FormContentType) => {
    const w = window;
    const audiences = [];
    try {
        const personalizationStore = JSON.parse(w.localStorage?.getItem('cp') || '{}');
        const storedAudiences = personalizationStore.audiences?.active || [];
        if (Array.isArray(storedAudiences)) {
            audiences.push(...storedAudiences);
        }
    } catch (e) {
        console.warn('[submit] Could not retrieve experience data from localStorage:', e);
    }

    const { formStartedAt, formResumed } = Progress.getContext(form);

    const submitContext = {
        geoCountry: null,
        referrer: null,
        pageUrl: w.location.href,
        /** First `autoSave` of form progress - sets `<formId>-started` to current timestamp */
        formStartedAt,
        /** Read `<formId>-started` and add `originallyStartedAt` to `FormState` when we load `initialState`.
         * Pass `originallyStartedAt` to first `autoSave` of form progress - then sets `<formId>-resumed` to current timestamp */
        formResumed,
        // Are these best sourced from "sessionStorage"?
        // We only store matched/active signals and audiences in localStorage with Experience package
        // TODO: add a "campaign" store to the Experience package that matches these query parameters and records
        // any matched campaign parameters in sessionStorage, so we can capture any campaigns that led to form submission
        utmCampaign: null,
        utmSource: null,
        utmMedium: null,
        utmContent: null,
        utmTerm: null,
        gclid: null,
        dclid: null,
        msclkid: null,
        fbclid: null,
        ttclid: null,
        li_fat_id: null,
        twclid: null,
        audiences
    };

    return submitContext;
};
