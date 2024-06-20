import { UIEvent, useEffect, useRef, } from 'react';
import { FormContentType, FormPage, Nullable } from '../models';
import { getLocalizations } from '../state';
import { useFieldRefs } from './FormContext';

type FormValidationSummaryProps = {
    currentPage: FormPage;
    form: Nullable<FormContentType>;
};

export function FormValidationSummary({ currentPage, form }: FormValidationSummaryProps) {
    const summaryRef = useRef<HTMLDivElement>(null);
    const localizations = getLocalizations(form);
    const refs = useFieldRefs();
    const invalid = currentPage.showErrors && currentPage.invalid;

    const onNavigateToError = (e: UIEvent, id: string) => {
        e.preventDefault();
        refs[id]?.current?.focus();
    };

    const onBlur = () => {
        if (summaryRef.current) {
            summaryRef.current.removeAttribute('tabindex');
        }
    };

    useEffect(() => {
        if (invalid && summaryRef.current) {
            summaryRef.current.setAttribute('tabindex', '-1');
            summaryRef.current.focus();
        }
    }, [invalid]);

    return invalid ? (
        <div className="form-validation-summary" ref={summaryRef} onBlur={onBlur}>
            <div role="alert">
                <h3 className="form-validation-summary-title">{localizations.errorSummaryTitle}</h3>
                <div className="form-validation-summary-body">
                    <ul className="form-validation-summary-list">
                        {currentPage.fieldErrors?.map((fieldError, index) => (
                            <li key={index}>
                                <a href="#" onClick={(e) => onNavigateToError(e, fieldError.id)}>{fieldError.message}</a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    ) : null;
}
