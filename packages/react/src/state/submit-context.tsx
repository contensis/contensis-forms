import { FormContentType } from '../models';
import { Progress } from './progress';

interface ISessionAttribution {
    utm_campaign?: string;
    utm_source?: string;
    utm_medium?: string;
    utm_content?: string;
    utm_term?: string;
    gclid?: string;
    dclid?: string;
    msclkid?: string;
    fbclid?: string;
    ttclid?: string;
    li_fat_id?: string;
    twclid?: string;
}

/**
 * Gather context for the `sys.context` field in the form submission.
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
 * - `liFatId` (LinkedIn) ← `li_fat_id`
 * - `twclid` (X/Twitter)
 *
 * - `audiences` (string[]): determined by Experience package
 */
export const getFormSubmitContext = (form: FormContentType) => {
    const { formStartedAt, formResumed } = Progress.getContext(form);

    const w = window;
    const attribution: ISessionAttribution = {};
    const audiences = [];
    if ((w as any).CONTENSIS_PERSONALIZATION) {
        try {
            const personalizationSession = JSON.parse(w.sessionStorage?.getItem('cp') || '{}');
            if (personalizationSession.attribution && typeof personalizationSession.attribution === 'object') {
                for (const [attr, val] of Object.entries(personalizationSession.attribution as { [key: string]: string })) {
                    if (val) {
                        // Convert any snake_case key to camelCase (e.g. utm_campaign → utmCampaign, li_fat_id → liFatId)
                        const normalizedKey = attr.replace(/_([a-z])/g, (_, char) => char.toUpperCase());
                        attribution[normalizedKey as keyof ISessionAttribution] = val;
                    }
                }
            }
        } catch (e) {
            console.warn('[submit] Could not retrieve experience data from sessionStorage:', e);
        }
        try {
            const personalizationStore = JSON.parse(w.localStorage?.getItem('cp') || '{}');
            const storedAudiences = personalizationStore.audiences?.active || [];
            if (Array.isArray(storedAudiences)) {
                audiences.push(...storedAudiences);
            }
        } catch (e) {
            console.warn('[submit] Could not retrieve experience data from localStorage:', e);
        }
    }

    const submitContext = {
        geoCountry: null,
        referrer: null,
        pageUrl: w.location.href,
        /** First `autoSave` of form progress - sets `<formId>-started` to current timestamp */
        formStartedAt,
        /** Read `<formId>-started` and add `originallyStartedAt` to `FormState` when we load `initialState`.
         * Pass `originallyStartedAt` to first `autoSave` of form progress - then sets `<formId>-resumed` to current timestamp */
        formResumed,
        /** Session attributions fetched from experience package store
         * utm_campaign, utm_source, utm_medium, utm_content, utm_term, gclid, dclid, msclkid, fbclid, ttclid, li_fat_id, twclid */
        ...attribution,
        /** Active audiences fetched from experience package store */
        audiences
    };

    return submitContext;
};
