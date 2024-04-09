import { Form } from '@contensis/forms';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './ContensisForm.css';

try {
    const url = new URL(import.meta.url);
    // todo: can these be "got" from somewhere
    const alias = url.searchParams.get('alias');
    const projectId = url.searchParams.get('projectId');
    if (alias && projectId) {
        const elements = [...document.querySelectorAll('[data-contensis-form-id]')];
        elements.forEach(element => {
            const formId = element.getAttribute('data-contensis-form-id');
            const language = element.getAttribute('data-contensis-form-language');
            const version = element.getAttribute('data-contensis-form-version');
            ReactDOM.createRoot(element).render(
                <React.StrictMode>
                    <Form
                        alias={alias}
                        projectId={projectId}
                        formId={formId || ''}
                        language={language || ''}
                        versionStatus={version === 'latest' ? 'latest' : null}
                        onSubmit={(response) => ({ ...response, name: 'bob' })}
                        onSubmitSuccess={(response) => {
                            console.log(response);
                            window.location.assign('http://www.bbc.co.uk');
                            return false;
                        }}
                        onSubmitError={(error) => {
                            console.log(error);
                            return true;
                        }}
                    />
                </React.StrictMode>
            );
        });
    }
} catch {

}
