import { ContentType, Dictionary, Field, FormPage, Nullable } from '../models';

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

export function reduceFields<T>(form: Nullable<ContentType>, fn: (field: Field, index: number) => T): Dictionary<T> {
    return form?.fields
        ? form.fields.reduce((prev, field, index) => ({ ...prev, [field.id]: fn(field, index) }), {} as Dictionary<T>)
        : {}
}

export type PageDefinition = Pick<FormPage, 'pageNo' | 'id' | 'title' | 'description' | 'group' | 'fields'>;

export function getPages(form: Nullable<ContentType>, language: string): PageDefinition[] {
    if (!form) {
        return [];
    }
    if (form.properties?.mode === 'survey') {
        return form.fields?.map((field, index) => {
            const { id, name, description } = field;
            return {
                pageNo: index + 1,
                id,
                title: getLocalisedValue(name, language, id),
                description: getLocalisedValue(description, language, ''),
                group: {
                    id,
                    name,
                    description,
                },
                fields: [id]
            }
        }) || [];
    } else {
        return form.groups?.map((group, index) => {
            const { id, name, description } = group;
            return {
                pageNo: index + 1,
                id,
                title: getLocalisedValue(name, language, id),
                description: getLocalisedValue(description, language, ''),
                group,
                fields: (form?.fields || []).filter(field => field.groupId === id).map(field => field.id)
            }
        }) || [];
    }
}

function getPageIndex(form: Nullable<ContentType>, pageId: Nullable<string>) {
    if (form?.properties?.mode === 'survey') {
        return form?.fields
            ? form.fields.findIndex(field => field.id === pageId)
            : -1;
    } else {
        return form?.groups
            ? form.groups.findIndex(group => group.id === pageId)
            : -1;
    }
}

export function getPageFields(form: Nullable<ContentType>, pageId: Nullable<string>) {
    if (form?.properties?.mode === 'survey') {
        return form?.fields
            ? form.fields.filter(field => field.id === pageId).map(field => field.id)
            : [];
    } else {
        return form?.fields
            ? form.fields.filter(field => field.groupId === pageId).map(field => field.id)
            : [];
    }
}

export function getPageCount(form: Nullable<ContentType>) {
    return (form?.properties?.mode === 'survey')
        ? form?.fields?.length
        : form?.groups?.length || 0;
}

export function getIsFirstPage(form: Nullable<ContentType>, pageId: Nullable<string>) {
    const pageIndex = getPageIndex(form, pageId);
    return (pageIndex === 0);
}

export function getIsLastPage(form: Nullable<ContentType>, pageId: Nullable<string>) {
    const pageIndex = getPageIndex(form, pageId);
    const pageCount = getPageCount(form);
    return !!pageCount && (pageIndex === (pageCount - 1));
}

function getPageIdAt(form: Nullable<ContentType>, index: number) {
    return (form?.properties?.mode === 'survey')
        ? form?.fields?.[index]?.id || null
        : form?.groups?.[index]?.id || null;
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
            steps: currentSteps.slice(0, stepIndex + 1),
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
