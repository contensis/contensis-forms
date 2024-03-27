import { format, localisations } from '../state';
import { useFormSelector } from './FormContext';

export function FormProgress() {
    const pageCount = useFormSelector(f => f.selectPageCount);
    const currentPage = useFormSelector(f => f.selectCurrentPage);
    const pageProgress = format(localisations.pagingMessage, currentPage.pageNo, pageCount);
    return (
        <div className="form-progress">
            <div className="form-progress-label">{pageProgress}</div>
            <progress className="form-progress-indicator" value={currentPage.pageNo} max={pageCount}></progress>
        </div>
    );
}
