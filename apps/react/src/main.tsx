import { Form } from '@contensis/forms';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './ContensisForm.css';

try {
    const url = new URL(import.meta.url);
    // todo: should these be specified on the element?
    const alias = url.searchParams.get('alias');
    const projectId = url.searchParams.get('projectId');
    const versionStatus = url.searchParams.get('versionStatus');
    if (alias && projectId) {
        const elements = [...document.querySelectorAll('[data-contensis-form-id]')];
        elements.forEach(element => {
            const formId = element.getAttribute('data-contensis-form-id');
            const language = element.getAttribute('data-contensis-form-language');
            ReactDOM.createRoot(element).render(
                <React.StrictMode>
                    <Form
                        alias={alias}
                        projectId={projectId}
                        formId={formId || ''}
                        language={language || ''}
                        versionStatus={versionStatus as any}
                    />
                </React.StrictMode>
            );
        });
    }
} catch {

}
