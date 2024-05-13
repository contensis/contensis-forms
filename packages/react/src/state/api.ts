import {
    FormContentType,
    GetFormParams,
    SaveFormResponse,
    SaveFormResponseParams
} from '../models';
import { Captcha } from './captcha';
import { isPublishedVersion } from './version';

// TODO: HOW DO WE GET THE BEARER TOKEN
const BEARER_TOKEN = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6InhWTVN1M21xQnZadHJxQ3k5TG81RlJwZVF2NCIsImtpZCI6InhWTVN1M21xQnZadHJxQ3k5TG81RlJwZVF2NCJ9.eyJpc3MiOiJodHRwczovL2Ntcy1mb3Jtcy5jbG91ZC5jb250ZW5zaXMuY29tL2F1dGhlbnRpY2F0ZSIsImF1ZCI6Imh0dHBzOi8vY21zLWZvcm1zLmNsb3VkLmNvbnRlbnNpcy5jb20vYXV0aGVudGljYXRlL3Jlc291cmNlcyIsImV4cCI6MTcxNTYxNTY1NiwibmJmIjoxNzE1NjEyMDU2LCJjbGllbnRfaWQiOiIwYTM3M2JlZC0wODM5LTRkZjktODcyOC0wNjZkZGQ2NDE5MzkiLCJzY29wZSI6WyJDb250ZW50VHlwZV9EZWxldGUiLCJDb250ZW50VHlwZV9SZWFkIiwiQ29udGVudFR5cGVfV3JpdGUiLCJEaWFnbm9zdGljc0FkbWluaXN0cmF0b3IiLCJEaWFnbm9zdGljc0FsbFVzZXJzIiwiRW50cnlfRGVsZXRlIiwiRW50cnlfUmVhZCIsIkVudHJ5X1dyaXRlIiwib2ZmbGluZV9hY2Nlc3MiLCJvcGVuaWQiLCJQcm9qZWN0X0RlbGV0ZSIsIlByb2plY3RfUmVhZCIsIlByb2plY3RfV3JpdGUiLCJTZWN1cml0eV9BZG1pbmlzdHJhdG9yIiwiV29ya2Zsb3dfQWRtaW5pc3RyYXRvciJdLCJzdWIiOiJkYjhiNzhlNS05ZjdmLTQ0MjktOGQ3Ni05MTlhODA4YTM0YWQiLCJhdXRoX3RpbWUiOjE3MTU2MTIwNTYsImlkcCI6Imlkc3J2IiwicHJlZmVycmVkX3VzZXJuYW1lIjoiZGFuZm9ybXMiLCJhbXIiOlsiYmVhcmVyIl19.V9umO4M4Frlte-hrOn_jfMBQYTEuqdh9vNM36mPDS9meIv73OQr2B_Tng8UygKOAIVViBJ6nZOAxqPSU15Jn4TU68nJnoComHC2CD1L_WX5HgCXf9r7JNMFrfoNlhDcqlhWQP8vXV1rRuHIUtnskgrEM2DZHde9v-jlE3Nkx1Kc-mYFbTeHkkl2HETLNwIO8uqBSL8tRxP_iH9FXNYNg5q-7YxtrYclyjTGdN1DxiiRpbNwqzNYsTzviV7M2aT9lWu6Eeoct9qvXrJQ6WVNBvtNWlZOHJ2YzfbjZBzDC2Y23NWr4b9AOtY_AtRtIb_dELLmAeiXYO3yso4pGN3h9ww';

async function getForm({ apiUrl, projectId, formId, language, versionStatus }: GetFormParams) {

    const response = await fetch(`${apiUrl}/api/forms/projects/${projectId}/contentTypes/${formId}/languages/${language || 'default'}?versionStatus=${versionStatus || 'published'}`, {
        headers: {
            'content-type': 'application/json',
            authorization: `Bearer ${BEARER_TOKEN}`
        },
        method: 'GET',
        mode: 'cors'
    });

    if (response.ok) {
        const result: FormContentType = await response.json();
        return result;
    } else {
        const error = await response.json();
        return Promise.reject({
            status: response.status,
            statusText: response.statusText,
            message: error?.message,
            error
        });
    }
}

async function saveFormResponse({ apiUrl, projectId, formId, language, versionStatus, formResponse, captcha }: SaveFormResponseParams): Promise<SaveFormResponse> {

    if (!isPublishedVersion(versionStatus)) {
        // todo: should this return a confirmation
        return { form: formResponse };
    }

    const captchaResponse = await Captcha.submit(formId, captcha);

    formResponse = {
        ...formResponse,
        sys: {
            contentTypeId: formId,
            dataFormat: 'form' as const,
            language
        }
    };

    const response = await fetch(`${apiUrl}/api/forms/projects/${projectId}/contentTypes/${formId}/languages/${language || 'default'}/entries`, {
        headers: {
            'content-type': 'application/json',
            authorization: `Bearer ${BEARER_TOKEN}`,
            ...(!!captchaResponse ? { 'Recaptha-Token': captchaResponse } : {})
        },
        method: 'POST',
        body: JSON.stringify(formResponse),
        mode: 'cors'
    })

    if (response.ok) {
        const result: SaveFormResponse = await response.json();
        return result;
    } else {
        const error = await response.json();
        return Promise.reject({
            status: response.status,
            statusText: response.statusText,
            message: error?.message,
            error
        });
    }
}

export const Api = {
    getForm,
    saveFormResponse
};
