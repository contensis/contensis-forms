import { ContentType, Dictionary, Field, Group, Nullable } from '../models';

export const DEFAULT_LANGUAGE = 'en-GB';

export function getLocalisedValue<T>(localisedValue: Nullable<Dictionary<T>>, language: string, defaultValue: T) {
    if (typeof localisedValue?.[language] !== 'undefined') {
        return localisedValue[language];
    }
    if (typeof localisedValue?.[DEFAULT_LANGUAGE] !== 'undefined') {
        return localisedValue[DEFAULT_LANGUAGE];
    }
    return defaultValue;
}

export function reduceGroups<T>(form: Nullable<ContentType>, fn: (group: Group, index: number) => T): Dictionary<T> {
    return form?.groups
        ? form.groups.reduce((prev, group, index) => ({ ...prev, [group.id]: fn(group, index) }), {} as Dictionary<T>)
        : {}
}

export function reduceFields<T>(form: Nullable<ContentType>, fn: (field: Field, index: number) => T): Dictionary<T> {
    return form?.fields
        ? form.fields.reduce((prev, field, index) => ({ ...prev, [field.id]: fn(field, index) }), {} as Dictionary<T>)
        : {}
}

export function getPageIndex(form: Nullable<ContentType>, groupId: Nullable<string>) {
    return form?.groups
        ? form.groups.findIndex(group => group.id === groupId)
        : -1;
}

export function getPageCount(form: Nullable<ContentType>) {
    return form?.groups?.length || 0;
}

export function getIsFirstPage(form: Nullable<ContentType>, groupId: Nullable<string>) {
    const pageIndex = getPageIndex(form, groupId);
    return (pageIndex === 0);
}

export function getIsLastPage(form: Nullable<ContentType>, groupId: Nullable<string>) {
    const pageIndex = getPageIndex(form, groupId);
    const pageCount = getPageCount(form);
    return !!pageCount && (pageIndex === (pageCount - 1));
}

export function getPageIdAt(form: Nullable<ContentType>, index: number) {
    return form?.groups?.[index]?.id || null;
}

export function getNextPage(form: Nullable<ContentType>, currentPageId: Nullable<string>) {
    if (!currentPageId) {
        return null;
    }
    const isLastPage = getIsLastPage(form, currentPageId);
    if (isLastPage) {
        return null;
    }
    const currentIndex = getPageIndex(form, currentPageId);
    // todo: this should be based on page rules
    return getPageIdAt(form, currentIndex + 1);
}

export function getPreviousPage(form: Nullable<ContentType>, currentPageId: Nullable<string>) {
    if (!currentPageId) {
        return null;
    }
    const isFirstPage = getIsFirstPage(form, currentPageId);
    if (isFirstPage) {
        return null;
    }
    const currentIndex = getPageIndex(form, currentPageId);
    // todo: this should be based on form progress think we need to add steps back in
    return getPageIdAt(form, currentIndex - 1);
}