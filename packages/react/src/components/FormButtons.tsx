import { useForm, useFormSelector } from './FormContext';

export function FormButtons() {
    const form = useForm();
    const isFirstPage = useFormSelector(f => f.selectIsFirstPage);
    const isLastPage = useFormSelector(f => f.selectIsLastPage);
    const localizations = useFormSelector(f => f.selectLocalizations);
    return (
        <div className="form-actions">
            {/* todo: Add pager here */}
            {isFirstPage ? null : (<button type="button" className="form-button form-button--secondary form-button--previous" onClick={() => form.previousPage()}>{localizations.previous}</button>)}
            <button type="submit" className={isLastPage ? 'form-button form-button--primary form-button--submit' : 'form-button form-button--secondary form-button--next'}>
                {isLastPage ? localizations.submit : localizations.next}
            </button>
        </div>
    );
}
