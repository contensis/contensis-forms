import { format, localisations } from '../state';
import { useFormSelector } from './FormContext';

export function FormPager() {
    const currentPage = useFormSelector(f => f.selectCurrentPage);
    const pageCount = useFormSelector(f => f.selectPageCount);
    const title = format(localisations.pagingMessage, currentPage.pageNo, pageCount);
    return (
        <div className="form-pager">
            {title}
        </div>
    );
}
