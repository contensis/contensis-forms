import { format, localisations } from '../state';
import { useFormSelector } from './FormContext';
import { progressId } from './utils';

export function FormProgress() {
    const pageCount = useFormSelector(f => f.selectPageCount);
    const currentPage = useFormSelector(f => f.selectCurrentPage);
    const pageProgress = format(localisations.pagingMessage, currentPage.pageNo, pageCount);
    const htmlId = useFormSelector(f => f.selectHtmlId);
    const id = progressId(htmlId);
    return (pageCount > 1)
        ? (
            <div className="form-progress">
                <label htmlFor={id} className="form-progress-label">{pageProgress}</label>
                <progress id={id} className="form-progress-indicator" value={currentPage.pageNo} max={pageCount}></progress>
            </div>
        )
        : null;
}
