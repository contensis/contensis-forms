import { ContensisForm, FormProps } from '@contensis/forms';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './ContensisForm.css';

declare global {
    interface Window {
        CONTENSIS_FORMS: {
            api?: string;
            render?: (element: Element, props: FormProps) => void;
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

    window.CONTENSIS_FORMS.render!(element, {
        apiUrl,
        projectId,
        formId,
        language,
        versionStatus: version === 'latest' ? 'latest' : undefined
    });
});
