import { Form } from '@contensis/forms';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './ContensisForm.css';

const elements = [...document.querySelectorAll('[data-contensis-form-id]')];
elements.forEach(element => {
    const apiUrl = element.getAttribute('data-contensis-form-api'); // optional but required in standalone forms
    const projectId = element.getAttribute('data-contensis-form-project-id'); // required
    const formId = element.getAttribute('data-contensis-form-id'); // required
    const language = element.getAttribute('data-contensis-form-language'); // optional
    const version = element.getAttribute('data-contensis-form-version'); // optional
    ReactDOM.createRoot(element).render(
        <React.StrictMode>
            <Form
                apiUrl={apiUrl}
                projectId={projectId || ''}
                formId={formId || ''}
                language={language}
                versionStatus={version === 'latest' ? 'latest' : undefined}
            />
        </React.StrictMode>
    );
});

