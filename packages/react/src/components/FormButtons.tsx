import { useForm, useFormSelector } from './FormContext';

export function FormButtons() {
    const form = useForm();
    const isFirstPage = useFormSelector(f => f.selectIsFirstPage);
    const isLastPage = useFormSelector(f => f.selectIsLastPage);
    const localizations = useFormSelector(f => f.selectLocalizations);
    return (
        <div className="form-buttons">
            {isFirstPage ? null : (<button type="button" className="form-previous-button" onClick={() => form.previousPage()}>{localizations.previous}</button>)}
            <button type="submit" className={isLastPage ? 'form-submit-button' : 'form-next-button'}>
                {isLastPage ? localizations.submit : localizations.next}
            </button>
        </div>
    );
}
