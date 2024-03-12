import { FormEventHandler } from 'react';
import { FormProps } from '../models';
import { localisations } from '../state';
import { FormButtons } from './FormButtons';
import { FormContents } from './FormContents';
import { useFormSelector } from './FormContext';

type FormLoaderProps = FormProps & { onSubmit: FormEventHandler<HTMLFormElement> };

export function FormLoader(props: FormLoaderProps) {
    const isLoading = useFormSelector(f => f.selectIsLoading);
    const loadError = useFormSelector(f => f.selectLoadError);
    const formDefinition = useFormSelector(f => f.selectForm);

    if (isLoading) {
        return props.loading || (<FormLoading />)
    }

    if (loadError) {
        return props.error ? props.error(loadError) : (<FormLoadError />);
    }

    if (!formDefinition?.enabled) {
        return props.disabled || (<FormDisabled />);
    }

    return (
        <form noValidate={true} onSubmit={props.onSubmit}>
            {/* <FormPager /> */}
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

function FormLoadError() {
    return (
        <div className="form-load-error">{localisations.formLoadError}</div>
    )
}

function FormDisabled() {
    return (
        <div className="form-disabled">{localisations.formDisabled}</div>
    )
}