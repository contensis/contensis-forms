import { FormEventHandler } from 'react';
import { FormProps } from '../models';
import { localisations, Captcha, isPublishedVersion } from '../state';
import { FormButtons } from './FormButtons';
import { FormContents } from './FormContents';
import { useFormSelector } from './FormContext';
import { FormProgress } from './FormProgress';

type FormLoaderProps = FormProps & { onFormSubmit: FormEventHandler<HTMLFormElement> };

export function FormLoader(props: FormLoaderProps) {
    const isLoading = useFormSelector(f => f.selectIsLoading);
    const apiError = useFormSelector(f => f.selectApiError);
    const formDefinition = useFormSelector(f => f.selectForm);
    const siteKey = useFormSelector(f => f.selectCaptchaSiteKey);
    const versionStatus = useFormSelector(f => f.selectVersionStatus);

    if (isLoading) {
        return props.loading || (<FormLoading />)
    }

    if (apiError) {
        return props.error ? props.error(apiError) : (<FormLoadError error={apiError} />);
    }

    if (!formDefinition?.enabled) {
        return props.disabled || (<FormDisabled />);
    }

    if (formDefinition?.properties?.captcha && siteKey && isPublishedVersion(versionStatus)) {
        Captcha.load(siteKey);
    }

    return (
        <form noValidate={true} onSubmit={props.onFormSubmit}>
            <FormProgress />
            <FormContents />
            <FormButtons />
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

function FormDisabled() {
    return (
        <div className="form-disabled">{localisations.formDisabled}</div>
    )
}