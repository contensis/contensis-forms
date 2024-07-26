import { ContensisForm, FormProps } from '@contensis/forms';
import React from 'react';
import ReactDOM from 'react-dom/client';

declare global {
    interface Window {
        CONTENSIS_FORMS: {
            api?: string;
            render?: (element: Element, props: FormProps) => void;
            onPopulate?: (...args: any[]) => any;
            onSubmit?: (...args: any[]) => any;
            onSubmitSuccess?: (...args: any[]) => any;
            onSubmitError?: (...args: any[]) => any;
            onLoadError?: (...args: any[]) => any;
        }
    }
}

window.CONTENSIS_FORMS = window.CONTENSIS_FORMS || {};
window.CONTENSIS_FORMS.render = function (element, props) {
    ReactDOM.createRoot(element).render(
        <React.StrictMode>
            <ContensisForm {...props} />
        </React.StrictMode>
    );
};

const elements = [...document.querySelectorAll('[data-contensis-form-id]')];
elements.forEach(element => {
    const apiUrl = element.getAttribute('data-contensis-form-api') || window.CONTENSIS_FORMS.api || '';
    const projectId = element.getAttribute('data-contensis-form-project-id') || ''; // required
    const formId = element.getAttribute('data-contensis-form-id') || ''; // required
    const language = element.getAttribute('data-contensis-form-language'); // optional
    const version = element.getAttribute('data-contensis-form-version'); // optional
    const onPopulate = window.CONTENSIS_FORMS.onPopulate;
    const onSubmit = window.CONTENSIS_FORMS.onSubmit;
    const onSubmitSuccess = window.CONTENSIS_FORMS.onSubmitSuccess;
    const onSubmitError = window.CONTENSIS_FORMS.onSubmitError;
    const onLoadError = window.CONTENSIS_FORMS.onLoadError;
    window.CONTENSIS_FORMS.render!(element, {
        apiUrl,
        projectId,
        formId,
        language,
        versionStatus: version === 'latest' ? 'latest' : undefined,
        headingLevel: 3,
        localizations: {
            error: {
                summaryTitle: 'Don\'t be an idiot'
            }
        },
        onPopulate,
        onSubmit,
        onSubmitSuccess,
        onSubmitError,
        onLoadError
    });
});
