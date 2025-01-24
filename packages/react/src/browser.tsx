import React from 'react';
import ReactDOM from 'react-dom/client';
import { ContensisForm } from './components/Form';
import type { FormProps } from './components/models';

declare global {
    interface Window {
        CONTENSIS_FORMS: {
            formCounter?: number;
            api?: string;
            render?: (element: Element, props: FormProps) => void;
            onPopulate?: (...args: any[]) => any;
            onSubmit?: (...args: any[]) => any;
            onSubmitSuccess?: (...args: any[]) => any;
            onSubmitError?: (...args: any[]) => any;
        };
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
elements.forEach((element) => {
    const apiUrl = element.getAttribute('data-contensis-form-api') || window.CONTENSIS_FORMS.api || '';
    const projectId = element.getAttribute('data-contensis-form-project-id') || ''; // required
    const formId = element.getAttribute('data-contensis-form-id') || ''; // required
    const language = element.getAttribute('data-contensis-form-language'); // optional
    const version = element.getAttribute('data-contensis-form-version'); // optional
    const showTitle = element.getAttribute('data-contensis-form-show-title') === 'true' || false; // optional
    const onPopulate = window.CONTENSIS_FORMS.onPopulate;
    const onSubmit = window.CONTENSIS_FORMS.onSubmit;
    const onSubmitSuccess = window.CONTENSIS_FORMS.onSubmitSuccess;
    const onSubmitError = window.CONTENSIS_FORMS.onSubmitError;

    window.CONTENSIS_FORMS.render!(element, {
        apiUrl,
        projectId,
        formId,
        language,
        showTitle,
        versionStatus: version === 'latest' ? 'latest' : undefined,
        onPopulate,
        onSubmit,
        onSubmitSuccess,
        onSubmitError
    });
});
