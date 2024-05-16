import React, { Component, ReactNode, useState } from 'react';
import ReactDOM from 'react-dom/client';

type FormResponse = Record<string, unknown>;
type FormContentType = Record<string, unknown>;
type VersionStatus = null | 'latest' | 'published';

type FormProps = {
    apiUrl?: null | string;
    formsApi?: null | string;
    projectId?: string;
    formId: string;
    language?: null | string;
    versionStatus?: VersionStatus;
    loading?: ReactNode;
    disabled?: ReactNode;
    error?: (error: unknown) => ReactNode;
    onSubmit?: (response: FormResponse, form: FormContentType) => false | FormResponse;
    onSubmitSuccess?: (response: FormResponse) => boolean;
    onSubmitError?: (error: unknown) => boolean;
};

type FormRender = (element: Element, props: FormProps) => void;

declare global {
    interface Window {
        CONTENSIS_FORMS: {
            api?: string;
            render: FormRender;
        }
    }
    var context: {
        PROJECT: string;
        SERVERS: {
            forms: string;
        };
    };
}

type FormApiResponse = {
    render: FormRender
};

let loadCounter = 0;

function loadForms(api: string) {
    let script = document.querySelector(`script[data-contensis-forms-api="${api}"]`);
    const win = window as any;
    if (!script) {
        let resolve: null | ((response: FormApiResponse) => void) = null;
        const promise = new Promise<FormApiResponse>((r) => { resolve = r; });
        const callback = `forms_api_load_${loadCounter++}`;
        win[callback] = function () {
            resolve!(window.CONTENSIS_FORMS);
        };
        win[callback].promise = promise;

        const script = document.createElement("script");
        script.src = `${api}/forms.js?callback=${callback}`;
        script.async = true;
        script.setAttribute('data-contensis-forms-api', api);
        script.setAttribute('data-contensis-forms-api-callback', callback);
        document.body.appendChild(script);

        const head = document.getElementsByTagName('head')[0];
        const link = document.createElement('link');
        link.type = 'text/css';
        link.rel = 'stylesheet';
        link.href = `${api}/forms.css`;
        head.appendChild(link);
        return promise;
    } else {
        const callback = script.getAttribute('data-contensis-forms-api-callback') || '';
        return win[callback].promise as Promise<FormApiResponse>;
    }
}

type AsyncFormState = {
    status: string;
    render: null | FormRender
};

class AsyncForm extends Component<FormProps, AsyncFormState> {
    constructor(props: FormProps) {
        super(props);
        this.state = {
            status: 'loading',
            render: null
        };
    }

    componentDidMount() {
        const formApi = this.props.formsApi || context.SERVERS.forms;
        loadForms(formApi).then((response) => {
            this.setState({ status: 'loaded', render: response?.render });
        });
    }

    renderForm(el: null | Element) {
        if (el && this.state.render) {
            const {formsApi, ...props} = this.props;
            props.apiUrl = props.apiUrl || window.CONTENSIS_FORMS.api || '';
            props.projectId = props.projectId || context.PROJECT;
            this.state.render(el, props);
        }
    }

    render() {
        if (!!this.state.render && (this.state.status === 'loaded')) {
            return <div ref={(el) => this.renderForm(el)}></div>;
        } else {
            return <div>Loading...</div>;
        }
    }
}

function Header() {
    const [label, setLabel] = useState('I am a header');
    return <div>{label}</div>;
}

ReactDOM.createRoot(document.getElementById('app')!).render(
    <React.StrictMode>
        <Header />
        <AsyncForm formId='enquiryFormCopy' />
    </React.StrictMode>
);