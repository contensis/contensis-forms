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

function getPageIndex(form: Nullable<ContentType>, groupId: Nullable<string>) {
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

function getPageIdAt(form: Nullable<ContentType>, index: number) {
    return form?.groups?.[index]?.id || null;
}

export function getCurrentPageId(steps: string[]) {
    return !!steps?.length ? steps[steps.length - 1] : null;
}

export function getFirstPage(form: Nullable<ContentType>) {
    return getPageIdAt(form, 0);
}

type MoveToPage = {
    isLastPage: boolean;
    newPage: null | string;
    steps: string[];
    direction: 'forward' | 'backward' | 'same';
};

export function moveToNextPage(form: Nullable<ContentType>, currentSteps: string[]): MoveToPage {
    const currentPageId = getCurrentPageId(currentSteps);
    if (!currentPageId) {
        return {
            isLastPage: false,
            newPage: null,
            steps: currentSteps,
            direction: 'same'
        };
    }
    const isLastPage = getIsLastPage(form, currentPageId);
    if (isLastPage) {
        return {
            isLastPage: true,
            newPage: null,
            steps: currentSteps,
            direction: 'same'
        };
    }
    const currentIndex = getPageIndex(form, currentPageId);
    // todo: this should be based on page rules    
    const nextPage = getPageIdAt(form, currentIndex + 1);
    return {
        isLastPage: false,
        newPage: nextPage,
        steps: !!nextPage ? [...currentSteps, nextPage] : currentSteps,
        direction: 'forward'
    };
}

export function moveToPreviousPage(form: Nullable<ContentType>, currentSteps: string[]): MoveToPage {
    const steps = (currentSteps.length > 1)
        ? currentSteps.slice(0, -1)
        : currentSteps;
    return {
        isLastPage: false,
        newPage: steps[steps.length - 1],
        steps,
        direction: 'backward'
    };
}

export function moveToPage(form: Nullable<ContentType>, currentSteps: string[], pageId: string): MoveToPage {
    const pageIndex = getPageIndex(form, pageId);
    if (pageIndex < 0) {
        return {
            isLastPage: false,
            newPage: null,
            steps: currentSteps,
            direction: 'same'
        };
    }
    const stepIndex = currentSteps.lastIndexOf(pageId);
    if (stepIndex >= 0) {
        return {
            isLastPage: false,
            newPage: pageId,
            steps: currentSteps.slice(0, stepIndex - 1),
            direction: 'backward'
        };
    }
    const nextPage = moveToNextPage(form, currentSteps);
    if (nextPage.newPage === pageId) {
        return nextPage;
    }
    return {
        isLastPage: false,
        newPage: null,
        steps: currentSteps,
        direction: 'same'
    };
}
