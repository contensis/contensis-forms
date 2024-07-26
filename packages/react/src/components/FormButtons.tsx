import React, { useContext } from 'react';
import { FormPage } from '../models';
import { format } from '../state';
import { FormRenderContext } from './FormRenderContext';

type FormButtonsProps = {
    pageIndex: number;
    pageCount: number;
    currentPage: FormPage;
    previousPage: () => void;
};

export function FormButtons({ pageIndex, pageCount, currentPage, previousPage }: FormButtonsProps) {
    const { localizations } = useContext(FormRenderContext);
    const isFirstPage = pageIndex === 0;
    const isLastPage = !!pageCount && pageIndex === pageCount - 1;
    const pageProgress = pageCount > 1 ? format(localizations.messages.page, currentPage.pageNo, pageCount) : '';
    return (
        <div className="form-footer">
            <div className="form-footer-page">{pageProgress}</div>
            <div className="form-actions">
                {isFirstPage ? null : (
                    <button type="button" className="form-button form-button--secondary form-button--previous" onClick={previousPage}>
                        {localizations.buttons.previous}
                    </button>
                )}
                <button
                    type="submit"
                    className={isLastPage ? 'form-button form-button--primary form-button--submit' : 'form-button form-button--secondary form-button--next'}
                >
                    {isLastPage ? localizations.buttons.submit : localizations.buttons.next}
                </button>
            </div>
        </div>
    );
}
