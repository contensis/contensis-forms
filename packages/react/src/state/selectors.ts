import { FormContentType, Dictionary, FormFieldState, FormPage, FormState, Nullable, ValidationError } from '../models';
import { getFieldEditorType, getOptions } from './fields';
import { format, localisations } from './localisations';
import { PageDefinition, getCurrentPageId, getIsFirstPage, getIsLastPage, getPageCount, getPages, reduceFields } from './shared';
import { CreateStoreArgs } from './store';

export function createSelectors({ select, selectById }: CreateStoreArgs<FormState>) {
    const selectState = select(s => s);
    const selectHtmlId = select(s => s.htmlId);
    const selectForm = select(s => s.form);
    const selectPageCount = select(selectForm, getPageCount);
    const selectValue = select(s => s.value);
    const selectDefaultValue = select(s => s.defaultValue);
    const selectEmptyValue = select(s => s.emptyValue);
    const selectInputValue = select(s => s.inputValue);
    const selectErrors = select(s => s.errors);
    const selectFocussed = select(s => s.focussed);
    const selectIsLoading = select(s => !!s.loading);
    const selectApiError = select(s => s.apiError);
    const selectShowErrors = select(s => s.showErrors);
    const selectDefaultPageTitle = select(s => s.defaultPageTitle);
    const selectSteps = select(s => s.steps);
    const selectVersionStatus = select(s => s.versionStatus);

    const selectCurrentPageId = select(selectSteps, getCurrentPageId);
    const selectLocalizations = select(selectForm, getLocalizations);
    const selectIsFirstPage = select(selectForm, selectCurrentPageId, getIsFirstPage);
    const selectIsLastPage = select(selectForm, selectCurrentPageId, getIsLastPage);
    const selectPagesRecord = select(selectForm, getPagesRecord);
    const selectFieldsRecord = select(selectHtmlId, selectForm, getFieldsRecord);
    const selectFocussedFieldsRecord = select(selectForm, selectFocussed, getFocussedFieldsRecord);
    const selectPage = (id: string) => select(
        selectById(selectPagesRecord, id),
        selectShowErrors,
        selectErrors,
        selectDefaultPageTitle,
        selectPageCount,
        getPage
    );
    const selectCurrentPage = select(
        selectCurrentPageId,
        selectState,
        (currentPageId, state) => getCurrentPage(currentPageId, state, selectPage)
    );
    const selectField = (id: string) => select(
        selectById(selectFieldsRecord, id),
        selectById(selectValue, id),
        selectById(selectDefaultValue, id),
        selectById(selectEmptyValue, id),
        selectById(selectInputValue, id),
        selectById(selectFocussedFieldsRecord, id),
        selectShowErrors,
        selectById(selectErrors, id),
        getField
    );

    return {
        selectState,
        selectForm,
        selectLocalizations,
        selectCurrentPageId,
        selectIsFirstPage,
        selectIsLastPage,
        selectPageCount,
        selectPage,
        selectCurrentPage,
        selectField,
        selectValue,
        selectInputValue,
        selectFocussed,
        selectShowErrors,
        selectIsLoading,
        selectApiError,
        selectVersionStatus
    };
}

function isNotNullable<T>(n: Nullable<T>): n is T {
    return (n !== null) && (typeof n !== 'undefined');
}

function getErrorMessages(errors: Nullable<Dictionary<ValidationError>>) {
    return !!errors ? Object.values(errors).map((e) => e.message) : null;
}

function getPagesRecord(form: Nullable<FormContentType>) {
    return getPages(form).reduce((prev, page) => ({ ...prev, [page.id]: page }), {} as Dictionary<PageDefinition>);
}

function getFieldsRecord(formHtmlId: string, form: Nullable<FormContentType>) {
    return reduceFields(form, (field) => {
        const htmlId = `${formHtmlId}-${field.id}`;
        const editor = getFieldEditorType(field);
        return {
            htmlId,
            id: field.id,
            label: field?.editor?.label || field.name,
            instructions: field?.editor?.instructions,
            autoFill: field?.editor?.properties?.autoFill,
            size: field?.editor?.properties?.size,
            labelPosition: field?.editor?.properties?.labelPosition,
            cssClass: field?.editor?.properties?.cssClass,
            hidden: !!field?.editor?.properties?.readOnly || !!field?.editor?.properties?.hidden || (editor === 'reference'),
            options: getOptions(field, htmlId),
            field,
            editor
        }
    });
}

function getFocussedFieldsRecord(form: Nullable<FormContentType>, focussed: Nullable<string>) {
    return reduceFields(form, (field) => (field.id === focussed));
}

function getPage(
    page: ReturnType<typeof getPagesRecord>[string],
    showErrors: boolean,
    errors: Dictionary<Nullable<Dictionary<ValidationError>>>,
    defaultPageTitle: string,
    pageCount: number
): FormPage {
    const pageErrors = page?.fields.map(id => ({ id, errors: errors[id] })).filter(({ errors }) => isNotNullable(errors));
    const invalid = !!pageErrors?.length;
    let fieldErrors: Nullable<{ id: string, message: string }[]> = null;
    if (invalid) {
        fieldErrors = pageErrors
            .map(({ id, errors }) => ({
                id,
                messages: getErrorMessages(errors) as string[]
            }))
            .filter(({ messages }) => isNotNullable(messages))
            .map(({ id, messages }) => messages?.map(message => ({ id, message })))
            .flat();
    }

    const pageProgress = format(localisations.pagingMessage, page.pageNo, pageCount);
    let pageTitle = `${defaultPageTitle} - ${pageProgress} - ${page.title}`;
    if (showErrors && invalid) {
        pageTitle = `${localisations.errorPageTitle}: ${pageTitle}`;
    }

    return {
        ...page,
        pageTitle,
        showErrors,
        invalid,
        fieldErrors
    };
}

function getCurrentPage(currentPageId: Nullable<string>, state: FormState, selectPage: (pageId: string) => (state: FormState) => FormPage) {
    return selectPage(currentPageId || '')?.(state) || null;
}

function getField(
    field: ReturnType<typeof getFieldsRecord>[string],
    value: unknown,
    defaultValue: unknown,
    emptyValue: unknown,
    inputValue: unknown,
    focussed: boolean,
    showErrors: boolean,
    errors: Nullable<Dictionary<ValidationError>>
): FormFieldState {
    const errorMessages = getErrorMessages(errors);
    const errorMessage = errorMessages?.length ? errorMessages[0] : null;
    return {
        ...field,
        value,
        defaultValue,
        emptyValue,
        inputValue,
        focussed,
        showErrors,
        errors,
        errorMessage,
        errorMessages
    };
}


function getLocalizations(form: Nullable<FormContentType>) {
    const l = form?.properties?.localizations;
    return {
        next: l?.next || localisations.nextButtonText,
        previous: l?.previous || localisations.previousButtonText,
        submit: l?.submit || localisations.submitButtonText,
        errorSummaryTitle: l?.errorSummaryTitle || localisations.errorSummaryTitle,
    };
}
