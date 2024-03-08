import { UIEvent, useEffect, useRef, } from 'react';
import { useFieldRefs, useFormSelector } from './FormContext';

export function FormValidationSummary() {
    const summaryRef = useRef<HTMLDivElement>(null);
    const currentPage = useFormSelector(f => f.selectCurrentPage);
    const localizations = useFormSelector(f => f.selectLocalizations);
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
                <h2 className="form-validation-summary-title">{localizations.errorSummaryTitle}</h2>
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
