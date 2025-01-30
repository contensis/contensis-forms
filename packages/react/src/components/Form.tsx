import React, { FormEvent, FormEventHandler, MutableRefObject, ReactNode, useCallback, useEffect, useMemo, useState } from 'react';
import { FormLocalizations, FormPage, Nullable, VersionStatus } from '../models';
import { Api, Errors, Fields, Form, Progress, Rules } from '../state';
import { getPageTitle } from '../state/localisations';
import { FormConfirmation } from './FormConfirmation';
import { FormLoader } from './FormLoader';
import { DEFAULT_LANGUAGE, DEFAULT_LOCALIZATIONS, FormRenderContextProvider, mergeLocalizations } from './FormRenderContext';
import {
    FormHistory,
    FormState,
    isCurrentHistoryState,
    isValidHistoryState,
    PatchFormState,
    SetFormState,
    toHistoryState,
    useFormHtmlId,
    useFormState
} from './form-state';
import { FormProps, SetFocussed, SetValue } from './models';

function isServer() {
    return typeof window === `undefined`;
}

export function ContensisForm(props: FormProps) {
    return isServer() ? null : <ClientFormContainer {...props} />;
}

function ClientFormContainer(props: FormProps) {
    const {
        apiUrl,
        disabled,
        error,
        formId,
        headingLevel,
        language,
        loading,
        localizations: localizationOverrides,
        showTitle,
        projectId,
        versionStatus,
        onLoadError,
        onPopulate,
        onSubmit,
        onSubmitError,
        onSubmitSuccess
    } = props;

    const [localizations, setLocalizations] = useState(DEFAULT_LOCALIZATIONS);
    const [formState, setFormState, patchFormState] = useFormState();

    const { errors, form, pageIndex, value } = formState;

    const pages: FormPage[] = useMemo(() => Form.getPages(form), [form]);
    const pageCount = pages.length;
    const currentPage = pages[pageIndex];
    const currentPageHasError = Form.pageHasErrors(currentPage, errors);

    useEffect(() => {
        async function loadForm(signal: AbortSignal) {
            const params = { apiUrl: apiUrl || '', projectId, formId, language: language || null, versionStatus: versionStatus || 'published' };
            try {
                const form = await Api.getForm(params, signal);

                const localizations = mergeLocalizations(localizationOverrides, form);
                setLocalizations(localizations);

                let initialValue = Form.getInitialValue(form, localizations);
                initialValue = await (onPopulate ? onPopulate(initialValue, form) : initialValue);
                const initialErrors = Form.validate(form, initialValue, localizations);

                patchFormState({
                    form,
                    isLoading: false,
                    apiError: null,
                    pageIndex: 0,
                    value: initialValue,
                    inputValue: Form.getInputValue(form, initialValue),
                    showErrors: false,
                    errors: initialErrors
                });
            } catch (apiError) {
                if (!signal.aborted) {
                    if (onLoadError) {
                        onLoadError(apiError, params);
                    }
                    patchFormState({
                        isLoading: false,
                        apiError
                    });
                }
            }
        }

        patchFormState({ isLoading: true });
        const controller = new AbortController();
        loadForm(controller.signal);
        return () => {
            controller.abort();
        };
    }, [apiUrl, projectId, formId, language, versionStatus, localizationOverrides]);

    const onFormSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!form) {
            return;
        }

        if (currentPageHasError) {
            patchFormState({ showErrors: true });
            return;
        }

        const isLastPage = !!pageCount && pageIndex === pageCount - 1;
        if (!isLastPage) {
            setFormState((prev) => ({
                ...prev,
                showErrors: false,
                pageIndex: prev.pageIndex + 1
            }));
            return;
        }

        patchFormState({ showErrors: false });
        const formResponse = await (onSubmit ? onSubmit(value, form) : value);
        if (!formResponse) {
            return;
        }

        try {
            const result = await Api.saveFormResponse({
                apiUrl: apiUrl || '',
                projectId,
                formId,
                language: language || null,
                versionStatus: versionStatus || 'published',
                formVersionNo: form?.version?.versionNo || '',
                captcha: form?.properties?.captcha,
                formResponse
            });
            const success = await (onSubmitSuccess ? onSubmitSuccess(result, form) : true);
            Progress.reset(form);
            if (success) {
                if (Rules.isConfirmationRuleReturnUri(result?.confirmation)) {
                    window.location.assign(result.confirmation.link.sys.uri);
                } else {
                    patchFormState({
                        isSubmitted: true,
                        formResponse: result.form,
                        confirmationRule: result.confirmation
                    });
                }
            }
        } catch (e) {
            const handleSubmitError = await (onSubmitError ? onSubmitError(e, form) : true);
            if (handleSubmitError) {
                Errors.handleError(e);
                patchFormState({ apiError: e });
            }
        }
    };

    const setValue = (id: string, value: unknown) => {
        const field = form?.fields.find((f) => f.id === id);
        if (field) {
            setFormState((prev) => {
                const fieldErrors = Fields.validate(field, value, form?.language || DEFAULT_LANGUAGE, localizations);
                const newValue = { ...prev.value, [id]: value };
                const newErrors = { ...prev.errors, [id]: fieldErrors };
                const newShowErrors = prev.showErrors && Form.pageHasErrors(currentPage, newErrors);
                return {
                    ...prev,
                    value: newValue,
                    errors: newErrors,
                    showErrors: newShowErrors,
                    isDirty: true
                };
            });
        }
    };

    const setInputValue = (id: string, value: unknown) => {
        const field = form?.fields.find((f) => f.id === id);
        if (field) {
            setFormState((prev) => ({
                ...prev,
                inputValue: { ...prev.inputValue, [id]: value }
            }));
        }
    };

    const setFocussed = (_id: string, _focussed: boolean) => {
        // setFocussed((prev) => {
        //     if (focussed) {
        //         return id;
        //     } else if (prev === id) {
        //         return '';
        //     }
        //     return prev;
        // });
    };

    const previousPage = () => {
        setFormState((prev) => ({
            ...prev,
            pageIndex: Math.max(prev.pageIndex - 1, 0)
        }));
    };

    return (
        <FormRenderContextProvider language={form?.language || language} headingLevel={headingLevel} localizations={localizations}>
            <ClientForm
                apiUrl={apiUrl}
                currentPage={currentPage}
                currentPageHasError={currentPageHasError}
                disabled={disabled}
                formId={formId}
                formState={formState}
                language={language}
                loading={loading}
                localizations={localizations}
                showTitle={showTitle || false}
                pageCount={pageCount}
                pages={pages}
                projectId={projectId}
                versionStatus={versionStatus}
                error={error}
                patchFormState={patchFormState}
                setFormState={setFormState}
                setFocussed={setFocussed}
                setInputValue={setInputValue}
                setValue={setValue}
                onFormSubmit={onFormSubmit}
                previousPage={previousPage}
            />
        </FormRenderContextProvider>
    );
}

type ClientFormProps = {
    apiUrl: Nullable<string>;
    currentPage: FormPage;
    currentPageHasError: boolean;
    disabled: ReactNode;
    formId: string;
    formState: FormState;
    language: Nullable<string>;
    loading: ReactNode;
    localizations: FormLocalizations;
    showTitle: boolean;
    pageCount: number;
    pages: FormPage[];
    projectId: string;
    versionStatus: undefined | VersionStatus;
    error: undefined | ((error: unknown) => ReactNode);
    patchFormState: PatchFormState;
    setFormState: SetFormState;
    setFocussed: SetFocussed;
    setInputValue: SetValue;
    setValue: SetValue;
    onFormSubmit: FormEventHandler<HTMLFormElement>;
    previousPage: () => void;
};

function ClientForm({
    apiUrl,
    currentPage,
    currentPageHasError,
    disabled,
    error,
    formId,
    formState,
    language,
    loading,
    localizations,
    showTitle,
    pageCount,
    pages,
    projectId,
    versionStatus,
    patchFormState,
    setFormState,
    setFocussed,
    setInputValue,
    setValue,
    onFormSubmit,
    previousPage
}: ClientFormProps) {
    // todo: this has an issue in that form error messages are always using the default rather than the value specified in the form localisations
    //const { localizations: defaultLocalizations } = useContext(FormRenderContext);
    //const [formState, setFormState, patchFormState] = useFormState();
    const formHtmlId = useFormHtmlId(formId);

    const {
        defaultPageTitle,
        isLoading,
        apiError,
        form,
        pageIndex,
        value,
        inputValue,
        confirmationRule,
        formResponse,
        showErrors,
        errors,
        isDirty,
        isSubmitted
    } = formState;

    const inputRefs = useMemo(() => Fields.reduceFields(form, (): MutableRefObject<any> => ({ current: undefined })), [form]);

    const pageTitle = getPageTitle(defaultPageTitle, currentPage?.title, currentPage?.pageNo, pageCount, showErrors && currentPageHasError, localizations);

    useEffect(() => {
        document.title = pageTitle;
    }, [pageTitle]);

    useEffect(() => {
        if (form && isDirty && !isSubmitted) {
            Progress.autoSave(form, value);
        }
    }, [form, value, isDirty, isSubmitted]);

    /** Push an entry to the history stack so we can recall the previous state when navigating back and forward */
    useEffect(() => {
        const newState = toHistoryState(currentPage?.id, pageIndex);
        if (isValidHistoryState(newState) && !isCurrentHistoryState(newState)) {
            if (!isValidHistoryState(window.history.state)) {
                // Replace current history state with the initial form state when
                // the form initially renders to prevent a duplicate history entry
                window.history.replaceState(newState, '');
            } else {
                // Push state to history when changing pages so we can navigate back and forward
                window.history.pushState(newState, '');
            }
        }
    }, [pageIndex, currentPage]);

    const onPopState = useCallback(
        function (e: PopStateEvent) {
            if (isValidHistoryState(e.state)) {
                const newState = e.state as FormHistory;
                const newPage = pages[newState.pageIndex];
                if (newPage) {
                    if (newState.pageIndex < pageIndex) {
                        // back
                        patchFormState({
                            showErrors: false,
                            pageIndex: newState.pageIndex
                        });
                    } else if (newState.pageIndex > pageIndex) {
                        // forward
                        if (currentPageHasError) {
                            // current page not valid
                            patchFormState({ showErrors: true });
                        } else {
                            setFormState((prev) => ({
                                ...prev,
                                showErrors: false,
                                pageIndex: prev.pageIndex + 1
                            }));
                        }
                    }
                }
            }
        },
        [pageIndex, pages, currentPageHasError]
    );

    useEffect(() => {
        const fn = onPopState;
        window.addEventListener('popstate', fn);
        return () => {
            window.removeEventListener('popstate', fn);
        };
    }, [onPopState]);

    return (
        <div className="contensis-form">
            <div className="form">
                {!confirmationRule ? (
                    <FormLoader
                        apiUrl={apiUrl}
                        projectId={projectId}
                        formId={formId}
                        language={language}
                        versionStatus={versionStatus}
                        loading={loading}
                        disabled={disabled}
                        error={error}
                        formHtmlId={formHtmlId}
                        isLoading={isLoading}
                        apiError={apiError}
                        form={form}
                        pageIndex={pageIndex}
                        pageCount={pageCount}
                        currentPage={currentPage}
                        formValue={value}
                        formInputValue={inputValue}
                        showErrors={showErrors}
                        showTitle={showTitle}
                        showDescription={showTitle}
                        formErrors={errors}
                        inputRefs={inputRefs}
                        setValue={setValue}
                        setInputValue={setInputValue}
                        setFocussed={setFocussed}
                        previousPage={previousPage}
                        onFormSubmit={onFormSubmit}
                    />
                ) : null}
                {!!confirmationRule && !!formResponse ? <FormConfirmation rule={confirmationRule} formResponse={formResponse} /> : null}
            </div>
        </div>
    );
}
