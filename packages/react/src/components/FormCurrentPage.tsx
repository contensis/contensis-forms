import { useEffect } from 'react';
import { useFormSelector } from './FormContext';
import { FormCurrentPageDescription } from './FormCurrentPageDescription';
import { FormFieldContainer } from './FormFieldContainer';
import { FormValidationSummary } from './FormValidationSummary';

export function FormCurrentPage() {
    const currentPage = useFormSelector(f => f.selectCurrentPage);
    useEffect(() => {
        document.title = currentPage.pageTitle;
    }, [currentPage.pageTitle]);
    return (
        <div className="form-current-page">
            <div className="form-current-page-header">
                <div className="form-current-page-title">{currentPage?.title}</div>            
                <FormCurrentPageDescription />
            </div>
            <FormValidationSummary />
            <div className="form-fields-container">
                {currentPage?.fields ? currentPage.fields.map(id => (<FormFieldContainer key={id} id={id} />)) : null}
            </div>
        </div>
    );
}
