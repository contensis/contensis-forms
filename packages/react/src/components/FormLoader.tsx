import React, { FormEventHandler, MutableRefObject, useContext } from 'react';
import { Dictionary, FormContentType, FormPage, Nullable, ValidationError } from '../models';
import { Api, Captcha, Version } from '../state';
import { FormButtons } from './FormButtons';
import { FormCurrentPage } from './FormCurrentPage';
import { FormProgress } from './FormProgress';
import { FormRenderContext } from './FormRenderContext';
import { FormTitle } from './FormTitle';
import { FormProps, SetFocussed, SetValue } from './models';

type FormLoaderProps = FormProps & {
    formHtmlId: string;
    isLoading: boolean;
    apiError: unknown;
    form: Nullable<FormContentType>;
    onFormSubmit: FormEventHandler<HTMLFormElement>;

    pageIndex: number;
    pageCount: number;
    currentPage: FormPage;
    previousPage: () => void;

    formValue: Dictionary<unknown>;
    formInputValue: Dictionary<unknown>;
    formErrors: Dictionary<Nullable<Dictionary<ValidationError>>>;
    showErrors: boolean;
    showTitle: boolean;
    showDescription: boolean;
    inputRefs: Dictionary<MutableRefObject<any>>;
    setValue: SetValue;
    setInputValue: SetValue;
    setFocussed: SetFocussed;
};

export function FormLoader({
    loading,
    error,
    onFormSubmit,
    isLoading,
    apiError,
    form,
    versionStatus,
    formHtmlId,
    pageIndex,
    pageCount,
    currentPage,
    previousPage,
    formValue,
    formInputValue,
    formErrors,
    showErrors,
    inputRefs,
    setValue,
    setInputValue,
    showTitle,
    showDescription,
    setFocussed
}: FormLoaderProps) {
    if (isLoading) {
        return loading || <FormLoading />;
    }

    if (apiError) {
        return error ? error(apiError) : <FormLoadError error={apiError} />;
    }

    if (form?.properties?.captcha && Version.isPublishedVersion(versionStatus) && !Api.isLoggedIn()) {
        Captcha.load(form.properties.captcha);
    }

    return (
        <form noValidate={true} onSubmit={onFormSubmit}>
            <FormTitle form={form} showTitle={showTitle} showDescription={showDescription} />
            <FormProgress formHtmlId={formHtmlId} pageCount={pageCount} currentPage={currentPage} />
            <FormCurrentPage
                currentPage={currentPage}
                formHtmlId={formHtmlId}
                formValue={formValue}
                formInputValue={formInputValue}
                formErrors={formErrors}
                showErrors={showErrors}
                inputRefs={inputRefs}
                setFocussed={setFocussed}
                setInputValue={setInputValue}
                setValue={setValue}
                showTitle={pageCount > 1}
            />
            <FormButtons pageIndex={pageIndex} pageCount={pageCount} currentPage={currentPage} previousPage={previousPage} />
        </form>
    );
}

function FormLoading() {
    const { localizations } = useContext(FormRenderContext);
    return <div className="form-loading">{localizations.load.loading}</div>;
}

function FormLoadError(props: { error: any }) {
    const { localizations } = useContext(FormRenderContext);
    return <div className="form-load-error">{props?.error?.message || localizations.load.error}</div>;
}
