import { FormEvent, MutableRefObject, useEffect, useId, useMemo, useRef, useState } from 'react';
import { ConfirmationRuleReturn, Dictionary, FormContentType, FormPage, FormResponse, Nullable, ValidationError } from '../models';
import { Api, Errors, Fields, Form, Progress, Rules } from '../state';
import { getPageTitle } from '../state/localisations';
import { FormConfirmation } from './FormConfirmation';
import { FormLoader } from './FormLoader';
import { FormProps } from './models';
import '../css/ContensisForm.css';

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
    error,
    onPopulate,
    onSubmit,
    onSubmitError,
    onSubmitSuccess
}: FormProps) {
    const [defaultPageTitle] = useState(document.title);
    const [isLoading, setIsLoading] = useState(true);
    const [apiError, setApiError] = useState<unknown>(null);
    const [form, setForm] = useState<Nullable<FormContentType>>(null);
    const [pageIndex, setPageIndex] = useState(0);
    const [value, setValue] = useState<Dictionary<unknown>>({});
    const [inputValue, setInputValue] = useState<Dictionary<unknown>>({});
    const [showErrors, setShowErrors] = useState(false);
    const [errors, setErrors] = useState<Dictionary<Nullable<Dictionary<ValidationError>>>>({});
    const [isDirty, setIsDirty] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [confirmationRule, setConfirmationRule] = useState<Nullable<ConfirmationRuleReturn>>(null);
    const [formResponse, setFormResponse] = useState<Nullable<FormResponse>>(null);
    const formHtmlId = useId();

    useEffect(() => {
        setIsLoading(true);
        const controller = new AbortController();
        const signal = controller.signal;
        Api.getForm({ apiUrl: apiUrl || '', projectId, formId, language: language || null, versionStatus: versionStatus || 'published' }, signal).then(
            (form) => {
                setForm(form);
                setIsLoading(false);
                setApiError(null);
                setPageIndex(0);

                let initialValue = Form.getInitialValue(form);
                initialValue = onPopulate ? onPopulate(initialValue, form) : initialValue;
                setValue(initialValue);
                setInputValue(Form.getInputValue(form, initialValue));
                setShowErrors(false);

                const initialErrors = Form.validate(form, initialValue);
                setErrors(initialErrors);
            },
            (error) => {
                if (!signal.aborted) {
                    setIsLoading(false);
                    setApiError(error);
                }
            }
        );
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
            setValue((prev) => ({ ...prev, [id]: value }));
            const fieldErrors = Fields.validate(field, value);
            setErrors((prev) => ({ ...prev, [id]: fieldErrors }));
            setIsDirty(true);
            if (showErrors) {
                setShowErrors(currentPageHasError);
            }
        }
    };

    const updateInputValue = (id: string, value: unknown) => {
        const field = form?.fields.find((f) => f.id === id);
        if (field) {
            setInputValue((prev) => ({ ...prev, [id]: value }));
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
        setPageIndex((prev) => Math.max(prev - 1, 0));
    };

    const onFormSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!form) {
            return;
        }

        if (currentPageHasError) {
            setShowErrors(true);
            return;
        }

        setShowErrors(false);
        const isLastPage = !!pageCount && pageIndex === pageCount - 1;
        if (!isLastPage) {
            setPageIndex((prev) => prev + 1);
            return;
        }

        const formResponse = onSubmit ? onSubmit(value, form) : value;
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
            const success = onSubmitSuccess ? onSubmitSuccess(result, form) : true;
            Progress.reset(form);
            if (success) {
                setIsSubmitted(true);
                if (Rules.isConfirmationRuleReturnUri(result?.confirmation)) {
                    window.location.assign(result.confirmation.link.sys.uri);
                } else {
                    setFormResponse(result.form);
                    setConfirmationRule(result.confirmation);
                }
            }
        } catch (e) {
            const handleSubmitError = onSubmitError ? onSubmitError(e, form) : true;
            if (handleSubmitError) {
                Errors.handleError(e);
                setApiError(e);
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

    const previousPageIndexRef = useRef<null | number>(null);
    useEffect(() => {
        if (currentPage) {
            if (previousPageIndexRef.current === null) {
                // initial load
                window.history.pushState(currentPage.id, '', '');
            } else if (previousPageIndexRef.current < pageIndex) {
                // submit
                window.history.pushState(currentPage.id, '', '');
            } else if (previousPageIndexRef.current > pageIndex) {
                // previous
                window.history.replaceState(currentPage.id, '', '');
            }
            previousPageIndexRef.current = pageIndex;
        }
    }, [pageIndex, currentPage]);

    useEffect(() => {
        const onPopState = (e: PopStateEvent) => {
            if (pages) {
                const index = pages.findIndex((page) => page.id === e.state);
                if (index >= 0) {
                    setPageIndex(index);
                }
            }
        };
        window.addEventListener('popstate', onPopState);
        return () => {
            window.removeEventListener('popstate', onPopState);
        };
    }, [pages]);

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
    );
}
