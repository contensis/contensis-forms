import React, { FormEvent, MutableRefObject, useCallback, useEffect, useMemo } from 'react';
import { FormPage } from '../models';
import { Api, Errors, Fields, Form, Progress, Rules } from '../state';
import { getPageTitle } from '../state/localisations';
import { FormConfirmation } from './FormConfirmation';
import { FormLoader } from './FormLoader';
import { FormHistory, isCurrentHistoryState, isValidHistoryState, toHistoryState, useFormHtmlId, useFormState } from './form-state';
import { FormProps } from './models';
import { FormRenderContext, mergeRenderProps } from './FormRenderContext';

function isServer() {
    return typeof window === `undefined`;
}

export function ContensisForm(props: FormProps) {
    return isServer() ? null : <ClientForm {...props} />;
}

function ClientForm({
    apiUrl,
    projectId,
    formId,
    language,
    versionStatus,
    loading,
    disabled,
    headingLevel,
    localizations,
    error,
    onPopulate,
    onSubmit,
    onSubmitError,
    onSubmitSuccess,
    onLoadError
}: FormProps) {
    const [formState, setFormState, patchFormState] = useFormState();
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

    useEffect(() => {
        async function loadForm(signal: AbortSignal) {
            const params = { apiUrl: apiUrl || '', projectId, formId, language: language || null, versionStatus: versionStatus || 'published' };
            try {
                const form = await Api.getForm(params, signal);
                let initialValue = Form.getInitialValue(form);
                initialValue = await (onPopulate ? onPopulate(initialValue, form) : initialValue);
                const initialErrors = Form.validate(form, initialValue);

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
    }, [apiUrl, projectId, formId, language, versionStatus]);

    const pages: FormPage[] = useMemo(() => Form.getPages(form), [form]);
    const pageCount = pages.length;
    const currentPage = pages[pageIndex];
    const currentPageHasError = Form.pageHasErrors(currentPage, errors);

    const inputRefs = useMemo(() => Fields.reduceFields(form, (): MutableRefObject<any> => ({ current: undefined })), [form]);

    const pageTitle = getPageTitle(defaultPageTitle, currentPage?.title, currentPage?.pageNo, pageCount, showErrors && currentPageHasError);

    const updateValue = (id: string, value: unknown) => {
        const field = form?.fields.find((f) => f.id === id);
        if (field) {
            setFormState((prev) => {
                const fieldErrors = Fields.validate(field, value);
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

    const updateInputValue = (id: string, value: unknown) => {
        const field = form?.fields.find((f) => f.id === id);
        if (field) {
            setFormState((prev) => ({
                ...prev,
                inputValue: { ...prev.inputValue, [id]: value }
            }));
        }
    };

    const updateFocussed = (_id: string, _focussed: boolean) => {
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

    useEffect(() => {
        document.title = pageTitle;
    }, [pageTitle]);

    useEffect(() => {
        if (form && isDirty && !isSubmitted) {
            Progress.autoSave(form, value);
        }
    }, [form, value, isDirty, isSubmitted]);

    useEffect(() => {
        const newState = toHistoryState(currentPage?.id, pageIndex);
        if (isValidHistoryState(newState) && !isCurrentHistoryState(newState)) {
            window.history.pushState(newState, '');
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
        <FormRenderContext.Provider value={mergeRenderProps({ headingLevel, localizations })}>
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
                            formErrors={errors}
                            inputRefs={inputRefs}
                            setValue={updateValue}
                            setInputValue={updateInputValue}
                            setFocussed={updateFocussed}
                            previousPage={previousPage}
                            onFormSubmit={onFormSubmit}
                        />
                    ) : null}
                    {!!confirmationRule && !!formResponse ? <FormConfirmation rule={confirmationRule} formResponse={formResponse} /> : null}
                </div>
            </div>
        </FormRenderContext.Provider>
    );
}
