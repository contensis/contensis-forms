import { FormEventHandler } from 'react';
import { FormContentType, FormPage, FormProps, Nullable, VersionStatus } from '../models';
import { Api, Captcha, isPublishedVersion, localisations } from '../state';
import { FormButtons } from './FormButtons';
import { FormCurrentPage } from './FormCurrentPage';
import { FormProgress } from './FormProgress';
import { FormTitle } from './FormTitle';

type FormLoaderProps = FormProps & {
    formHtmlId: string;
    isLoading: boolean;
    apiError: unknown;
    form: Nullable<FormContentType>;
    versionStatus: VersionStatus;
    onFormSubmit: FormEventHandler<HTMLFormElement>;

    pageIndex: number;
    pageCount: number;
    currentPage: FormPage;
    previousPage: () => void;
};

export function FormLoader({ loading, error, onFormSubmit, isLoading, apiError, form, versionStatus, formHtmlId, pageIndex, pageCount, currentPage, previousPage }: FormLoaderProps) {

    if (isLoading) {
        return loading || (<FormLoading />)
    }

    if (apiError) {
        return error ? error(apiError) : (<FormLoadError error={apiError} />);
    }

    if (form?.properties?.captcha && isPublishedVersion(versionStatus) && !Api.isLoggedIn()) {
        Captcha.load(form.properties.captcha);
    }

    return (
        <form noValidate={true} onSubmit={onFormSubmit}>
            <FormTitle form={form} />
            <FormProgress
                formHtmlId={formHtmlId}
                pageCount={pageCount}
                currentPage={currentPage}
            />
            <FormCurrentPage
                form={form}
                currentPage={currentPage}
            />
            <FormButtons
                pageIndex={pageIndex}
                pageCount={pageCount}
                form={form}
                currentPage={currentPage}
                previousPage={previousPage}
            />
        </form>
    );
}

function FormLoading() {
    return (
        <div className="form-loading">{localisations.formLoading}</div>
    )
}

function FormLoadError(props: { error: any }) {
    return (
        <div className="form-load-error">{props?.error?.message || localisations.formLoadError}</div>
    )
}
