import { FormContentType, FormPage, Nullable } from '../models';
import { Form, format, localisations } from '../state';

type FormButtonsProps = {
    pageIndex: number;
    pageCount: number;
    currentPage: FormPage;
    form: Nullable<FormContentType>;
    previousPage: () => void;
};

export function FormButtons({ pageIndex, pageCount, currentPage, form, previousPage }: FormButtonsProps) {
    const isFirstPage = pageIndex === 0;
    const isLastPage = !!pageCount && pageIndex === pageCount - 1;
    const localizations = Form.getLocalizations(form);
    const pageProgress = pageCount > 1 ? format(localisations.pagingMessage, currentPage.pageNo, pageCount) : '';
    return (
        <div className="form-footer">
            <div className="form-footer-page">{pageProgress}</div>
            <div className="form-actions">
                {isFirstPage ? null : (
                    <button type="button" className="form-button form-button--secondary form-button--previous" onClick={previousPage}>
                        {localizations.previous}
                    </button>
                )}
                <button
                    type="submit"
                    className={isLastPage ? 'form-button form-button--primary form-button--submit' : 'form-button form-button--secondary form-button--next'}
                >
                    {isLastPage ? localizations.submit : localizations.next}
                </button>
            </div>
        </div>
    );
}
