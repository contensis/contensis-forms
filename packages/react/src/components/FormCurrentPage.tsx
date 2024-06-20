import { useEffect } from 'react';
import { FormContentType, FormPage, Nullable } from '../models';
import { FormFieldContainer } from './FormFieldContainer';
import { FormValidationSummary } from './FormValidationSummary';
import { Description } from './html';

type FormCurrentPageProps = {
    currentPage: FormPage;
    form: Nullable<FormContentType>;
};

export function FormCurrentPage({ currentPage, form }: FormCurrentPageProps) {
    useEffect(() => {
        document.title = currentPage.pageTitle;
    }, [currentPage.pageTitle]);
    return (
        <div className="form-current-page">
            <div className="form-current-page-header">
                <h3 className="form-current-page-title">{currentPage?.title}</h3>
                <Description className="form-current-page-description" description={currentPage.description} />
            </div>
            <FormValidationSummary currentPage={currentPage} form={form} />
            <div className="form-fields-container">
                {currentPage?.fields ? currentPage.fields.map(id => (<FormFieldContainer
                    key={id}
                />)) : null}
            </div>
        </div>
    );
}
