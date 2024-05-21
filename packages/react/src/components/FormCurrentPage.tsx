import { useEffect } from 'react';
import { useFormSelector } from './FormContext';
import { FormFieldContainer } from './FormFieldContainer';
import { FormValidationSummary } from './FormValidationSummary';
import { Description } from './html';

export function FormCurrentPage() {
    const currentPage = useFormSelector(f => f.selectCurrentPage);
    useEffect(() => {
        document.title = currentPage.pageTitle;
    }, [currentPage.pageTitle]);
    return (
        <div className="form-current-page">
            <div className="form-current-page-header">
                <h3 className="form-current-page-title">{currentPage?.title}</h3>
                <Description className="form-current-page-description" description={currentPage.description} />
            </div>
            <FormValidationSummary />
            <div className="form-fields-container">
                {currentPage?.fields ? currentPage.fields.map(id => (<FormFieldContainer key={id} id={id} />)) : null}
            </div>
        </div>
    );
}
