import {
    FormContentType,
    GetFormParams,
    SaveFormResponse,
    SaveFormResponseParams
} from '../models';
import { Captcha } from './captcha';
import { isPublishedVersion } from './version';

function getAllCookies(): { [key: string]: string } {
    return (document.cookie || '').split('; ').reduce(
        (cookies, cookieString) => {
            const parts = cookieString.split('=');
            const name = decode(parts[0]);
            if (name) {
                cookies[name] = decode(parts.slice(1).join('='));
            }
            return cookies;
        },
        {} as { [key: string]: string }
    );
}

function decode(s: string): string {
    try {
        return decodeURIComponent(s);
    } catch (e) {
        return s;
    }
}

function setCookie(key: string, value: string, expiry: Date) {
    document.cookie = `${encodeURIComponent(key)}=${encodeURIComponent(value)}; expires=${expiry.toUTCString()}; path=/;`;
}

const CmsBearerTokenCookie = 'ContensisSecurityBearerToken';
const CmsRefreshTokenCookie = 'ContensisSecurityRefreshToken';
const RefreshTokenCookie = 'RefreshToken';
const RefreshTokenExpiryTime = 15 * 24 * 3600 * 1000; // 15 days

const SCOPE = 'Security_Administrator ContentType_Read ContentType_Write ContentType_Delete Entry_Read Entry_Write Entry_Delete Project_Read Project_Write Project_Delete Workflow_Administrator';
const GRANT_TYPE = 'contensis_classic_refresh_token';
const PUBLIC_USER_BEARER_TOKEN = ''; // TODO: what should this be

type RequestOptions = {
    apiUrl: string;
};

type AuthenticateResponse = {
    access_token: string;
    expires_in: number;
    refresh_token: string;
    token_type: string;
};

async function getBearerToken(options: RequestOptions) {
    const cookies = getAllCookies();
    if (cookies[CmsBearerTokenCookie]) {
        return cookies[CmsBearerTokenCookie];
    }
    const refreshToken = cookies[CmsRefreshTokenCookie] || cookies[RefreshTokenCookie];
    if (!refreshToken) {
        return PUBLIC_USER_BEARER_TOKEN;
    }

    try {
        const currentDate = new Date();

        const response = await fetch(`${options.apiUrl}/authenticate/connect/token`, {
            headers: {
                'content-type': 'application/x-www-form-urlencoded;charset=UTF-8'
            },
            body: `scope=${encodeURIComponent(SCOPE)}&grant_type=${encodeURIComponent(GRANT_TYPE)}&refresh_token=${encodeURIComponent(refreshToken)}`,
            method: 'POST',
            mode: 'cors',
            credentials: 'omit'
        });

        if (!response.ok) {
            return PUBLIC_USER_BEARER_TOKEN;
        }
        const data: AuthenticateResponse = await response.json();

        const bearerToken = data.access_token;
        const bearerTokenExpiryDate = new Date(currentDate.getTime() + data.expires_in * 1000);
        const newRefreshToken: string = data.refresh_token;
        const refreshTokenExpiryDate = new Date(currentDate.getTime() + RefreshTokenExpiryTime);

        setCookie(CmsBearerTokenCookie, bearerToken, bearerTokenExpiryDate);
        if (newRefreshToken) {
            setCookie(RefreshTokenCookie, newRefreshToken, refreshTokenExpiryDate);
        }
        return bearerToken;
    } catch (e) {
        return PUBLIC_USER_BEARER_TOKEN;
    }
}

async function getForm({ apiUrl, projectId, formId, language, versionStatus }: GetFormParams) {
    const bearerToken = await getBearerToken({ apiUrl });

    const query = (versionStatus === 'latest') ? `?versionStatus=${versionStatus}` : '';

    const response = await fetch(`${apiUrl}/api/forms/projects/${projectId}/contentTypes/${formId}/languages/${language || 'default'}${query}`, {
        headers: {
            'content-type': 'application/json',
            authorization: `Bearer ${bearerToken}`
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

async function saveFormResponse({ apiUrl, projectId, formId, language, formVersionNo, versionStatus, formResponse, captcha }: SaveFormResponseParams): Promise<SaveFormResponse> {

    const captchaResponse = isPublishedVersion(versionStatus) ? await Captcha.submit(formId, captcha) : '';

    formResponse = {
        ...formResponse,
        sys: {
            contentTypeId: formId,
            dataFormat: 'form' as const,
            language
        }
    };

    const bearerToken = await getBearerToken({ apiUrl });

    // todo: there is an issue with the api when saving responses with versionNumber
    let url = `${apiUrl}/api/forms/projects/${projectId}/contentTypes/${formId}/languages/${language || 'default'}/entries`;
    url = (isPublishedVersion(versionStatus) && (formVersionNo))
        ? url
        : `${url}?contentTypeVersionNumber=${formVersionNo}`;

    const response = await fetch(url, {
        headers: {
            'content-type': 'application/json',
            authorization: `Bearer ${bearerToken}`,
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
