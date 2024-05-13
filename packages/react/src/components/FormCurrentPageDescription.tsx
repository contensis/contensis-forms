import { useFormSelector } from './FormContext';
import { Description } from './html';

export function FormCurrentPageDescription() {
    const currentPage = useFormSelector(f => f.selectCurrentPage);
    return (<Description className="form-current-page-description" description={currentPage.description} />);
}

