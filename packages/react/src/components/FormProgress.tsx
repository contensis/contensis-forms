import React, { useContext } from 'react';
import { FormPage } from '../models';
import { format } from '../state';
import { FormRenderContext } from './FormRenderContext';
import { progressId } from './utils';

type FormProgressProps = {
    formHtmlId: string;
    pageCount: number;
    currentPage: FormPage;
};

export function FormProgress({ formHtmlId, pageCount, currentPage }: FormProgressProps) {
    const { localizations } = useContext(FormRenderContext);
    const pageProgress = format(localizations.messages.page, currentPage.pageNo, pageCount);
    const id = progressId(formHtmlId);
    return pageCount > 1 ? (
        <div className="form-progress">
            <label htmlFor={id} className="form-progress-label">
                {pageProgress}
            </label>
            <progress id={id} className="form-progress-indicator" value={currentPage.pageNo} max={pageCount}></progress>
        </div>
    ) : null;
}
