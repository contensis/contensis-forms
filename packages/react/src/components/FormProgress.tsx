import { FormPage } from '../models';
import { format, localisations } from '../state';
import { progressId } from './utils';

type FormProgressProps = {
    formHtmlId: string;
    pageCount: number;
    currentPage: FormPage;
};

export function FormProgress({ formHtmlId, pageCount, currentPage }: FormProgressProps) {
    const pageProgress = format(localisations.pagingMessage, currentPage.pageNo, pageCount);
    const id = progressId(formHtmlId);
    return (pageCount > 1)
        ? (
            <div className="form-progress">
                <label htmlFor={id} className="form-progress-label">{pageProgress}</label>
                <progress id={id} className="form-progress-indicator" value={currentPage.pageNo} max={pageCount}></progress>
            </div>
        )
        : null;
}
