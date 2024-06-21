import { FormEventHandler, MutableRefObject } from 'react';
import { Dictionary, FormContentType, FormPage, Nullable, ValidationError } from '../models';
import { Api, Captcha, Version, localisations } from '../state';
import { FormButtons } from './FormButtons';
import { FormCurrentPage } from './FormCurrentPage';
import { FormProgress } from './FormProgress';
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
            <FormTitle form={form} />
            <FormProgress formHtmlId={formHtmlId} pageCount={pageCount} currentPage={currentPage} />
            <FormCurrentPage
                currentPage={currentPage}
                form={form}
                formHtmlId={formHtmlId}
                formValue={formValue}
                formInputValue={formInputValue}
                formErrors={formErrors}
                showErrors={showErrors}
                inputRefs={inputRefs}
                setFocussed={setFocussed}
                setInputValue={setInputValue}
                setValue={setValue}
            />
            <FormButtons pageIndex={pageIndex} pageCount={pageCount} form={form} currentPage={currentPage} previousPage={previousPage} />
        </form>
    );
}

function FormLoading() {
    return <div className="form-loading">{localisations.formLoading}</div>;
}

function FormLoadError(props: { error: any }) {
    return <div className="form-load-error">{props?.error?.message || localisations.formLoadError}</div>;
}
