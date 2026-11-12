import { FormContentType, Nullable } from '../models';
import { Progress } from './progress';

import type { ExperienceEngineContext } from '@contensis/experience-engine';

/**
 * Gather context for the `sys.context` field in the form submission.
 *
 * **Server-derived**
 * - `geoCountry` (string): two-letter country code (e.g. `GB`), server-derived from request headers. Client-provided values are ignored/overwritten.
 * - `referrer` (string): the HTTP referrer at the point the visitor arrived, server-derived from the `Referer` header. Client-provided values are ignored/overwritten.
 *
 * **Sent by Forms Render**
 * - `pageUrl` (string): the URL of the page where the form was submitted.
 * - `formStartedAt` (string): ISO 8601 timestamp of when the user first interacted with the form.
 * - `formResumed` (boolean): whether the form was restored from local storage (partial completion) before submission.
 * - `...attribution` (CampaignAttributionContext): marketing tags / click IDs captured by the experience-engine package.
 * - `audiences` (string[]): active audiences determined by the experience-engine package.
 */

type CampaignAttributionContext = {
    utmCampaign?: string; // ← `utm_campaign`
    utmSource?: string; // ← `utm_source`
    utmMedium?: string; // ← `utm_medium`
    utmContent?: string; // ← `utm_content`
    utmTerm?: string; // ← `utm_term`
    gclid?: string; // Google Ads
    dclid?: string; // Google Display Network
    msclkid?: string; // Microsoft Ads
    fbclid?: string; // Meta/Facebook
    ttclid?: string; // TikTok
    liFatId?: string; // ← `li_fat_id`
    twclid?: string; // X/Twitter
};

type SubmitContext = {
    pageUrl: string;
    formStartedAt?: Nullable<string>;
    formResumed?: Nullable<string>;
    audiences: string[];
} & CampaignAttributionContext;

export const getFormSubmitContext = (form: FormContentType):SubmitContext => {
    const { formStartedAt, formResumed } = Progress.getContext(form);

    const w = window;
    const attribution: CampaignAttributionContext = {};
    const audiences = [];
    const xpGlobal = (w as any).CONTENSIS_XP || (w as any).CONTENSIS_PERSONALIZATION; // CONTENSIS_PERSONALIZATION is legacy prior to experience-engine package rebrand - could remove
    if (xpGlobal) {
        try {
            // The window object holds the personalization context once it has been initialized by the Experience package
            const xpContext = xpGlobal.context as ExperienceEngineContext;

            // Check session store for marketing attribution / campaign tags
            const sessionAttribution = xpContext.session.state.attribution || {};
            for (const [attr, val] of Object.entries(sessionAttribution)) {
                if (val) {
                    // Convert any snake_case key to camelCase (e.g. utm_campaign → utmCampaign, li_fat_id → liFatId)
                    const normalizedKey = attr.replace(/_([a-z])/g, (_, char) => char.toUpperCase());
                    attribution[normalizedKey as keyof CampaignAttributionContext] = val;
                }
            }
            const storedAudiences = xpContext.state.audiences.active || [];
            if (Array.isArray(storedAudiences)) audiences.push(...storedAudiences);
        } catch (e) {
            console.warn('[submit] Could not retrieve experience data from browser storage:', e);
        }
    }

    const submitContext = {
        pageUrl: w.location.href,
        /** First `autoSave` of form progress - sets `<formId>-started` to current timestamp */
        formStartedAt,
        /** Read `<formId>-started` and add `originallyStartedAt` to `FormState` when we load `initialState`.
         * Pass `originallyStartedAt` to first `autoSave` of form progress - then sets `<formId>-resumed` to current timestamp */
        formResumed,
        /** Session attributions fetched from experience package store */
        ...attribution,
        /** Active audiences fetched from experience package store */
        audiences
    };

    return submitContext;
};
