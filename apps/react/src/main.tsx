import { Form } from '@contensis/forms';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './ContensisForm.css';
import { createClient } from './client';

try {
    // todo: can we get this in the cms as a preview???
    
    const url = new URL(import.meta.url);
    const alias = url.searchParams.get('alias');
    const projectId = url.searchParams.get('projectId');
    const clientId = url.searchParams.get('clientId');
    const clientSecret = url.searchParams.get('clientSecret');
    const versionStatus = url.searchParams.get('versionStatus');
    if (alias && projectId && clientId && clientSecret) {
        const client = createClient({ alias, projectId, clientId, clientSecret, versionStatus });
        const elements = [...document.querySelectorAll('[data-contensis-form-id]')];
        elements.forEach(element => {
            const formId = element.getAttribute('data-contensis-form-id');
            const language = element.getAttribute('data-contensis-form-language');
            ReactDOM.createRoot(element).render(
                <React.StrictMode>
                    <Form
                        formId={formId || ''}
                        language={language || ''}
                        client={client}
                    />
                </React.StrictMode>
            );
        });
    }
} catch {

}
