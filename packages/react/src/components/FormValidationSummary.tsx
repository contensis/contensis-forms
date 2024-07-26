import React, { MutableRefObject, UIEvent, useContext, useEffect, useRef } from 'react';
import { Dictionary, FormPage, Nullable, ValidationError } from '../models';
import { Errors } from '../state';
import { FormRenderContext } from './FormRenderContext';
import { Heading } from './html';

type FormValidationSummaryProps = {
    currentPage: FormPage;
    showErrors: boolean;
    formErrors: Dictionary<Nullable<Dictionary<ValidationError>>>;
    inputRefs: Dictionary<MutableRefObject<any>>;
};

export function FormValidationSummary({ currentPage, showErrors, formErrors, inputRefs }: FormValidationSummaryProps) {
    const errors = getErrors({ currentPage, showErrors, formErrors });
    const summaryRef = useRef<HTMLDivElement>(null);
    const { localizations } = useContext(FormRenderContext);

    const onNavigateToError = (e: UIEvent, id: string) => {
        e.preventDefault();
        inputRefs[id]?.current?.focus();
    };

    const onBlur = () => {
        if (summaryRef.current) {
            summaryRef.current.removeAttribute('tabindex');
        }
    };

    useEffect(() => {
        if (!errors.valid && summaryRef.current) {
            summaryRef.current.setAttribute('tabindex', '-1');
            summaryRef.current.focus();
        }
    }, [errors.valid]);

    return errors.valid ? null : (
        <div className="form-validation-summary" ref={summaryRef} onBlur={onBlur}>
            <div role="alert">
                <Heading level="3" className="form-validation-summary-title">
                    {localizations.error.summaryTitle}
                </Heading>
                <div className="form-validation-summary-body">
                    <ul className="form-validation-summary-list">
                        {errors.errors.map((error, index) => (
                            <li key={index}>
                                <a href={`#${error.id}`} onClick={(e) => onNavigateToError(e, error.id)}>
                                    {error.message}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}

type ErrorMessage = { id: string; message: string };

type ErrorResult = {
    valid: boolean;
    errors: ErrorMessage[];
};

function getErrors({ currentPage, showErrors, formErrors }: Pick<FormValidationSummaryProps, 'currentPage' | 'showErrors' | 'formErrors'>): ErrorResult {
    if (!showErrors || !formErrors) {
        return {
            valid: true,
            errors: []
        };
    }

    const errors = currentPage.fields
        .map(({ id }) => ({ id, messages: Errors.getErrorMessages(formErrors[id]) }))
        .reduce(
            (prev, { id, messages }) => {
                if (messages?.length) {
                    prev = [...prev, ...(messages?.map((message) => ({ id, message })) || [])];
                }
                return prev;
            },
            [] as { id: string; message: string }[]
        );

    if (!errors?.length) {
        return {
            valid: true,
            errors: []
        };
    }

    return {
        valid: false,
        errors
    };
}
