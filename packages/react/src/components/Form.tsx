import { FormEvent, useEffect, useId, useState } from 'react';
import { ConfirmationRuleReturn, FormContentType, FormProps, FormResponse, Nullable } from '../models';
import { Api, Rules, createForm, handleError } from '../state';
import { FormConfirmation } from './FormConfirmation';
import { FormContextProvider } from './FormContext';
import { FormLoader } from './FormLoader';

function isServer() {
    return typeof window === `undefined`;
}

// todo: latest response preview / confirmation
// todo: custom stlying 
export function Form(props: FormProps) {
    
    if (isServer()) {
        return null;
    }

    const [confirmationRule, setConfirmationRule] = useState<Nullable<ConfirmationRuleReturn>>(null);
    const [formResponse, setFormResponse] = useState<Nullable<FormResponse>>(null);
    const htmlId = useId();
    const form = createForm(props, htmlId);
    // todo: do we need a hook to populate form values??
    // it could then be used to populate fields before the form is shown

    const onFormSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const canSave = form.submit();
        // todo: hook for on next page???
        if (!canSave) {
            return;
        }

        const formContentType = form.getForm();
        const originalFormResponse = form.getFormResponse();

        const formResponse = props?.onSubmit ? props.onSubmit(originalFormResponse, formContentType as FormContentType) : originalFormResponse;
        if (!formResponse) {
            return;
        }

        try {
            const result = await Api.saveFormResponse({
                ...form.getSaveFormResponseParams(),
                formResponse
            });
            const success = props?.onSubmitSuccess ? props.onSubmitSuccess(result) : true;
            if (success) {
                if (Rules.isConfirmationRuleReturnUri(result?.confirmation)) {
                    // todo: redirect
                    console.log('redirect');
                } else {
                    setFormResponse(result.form);
                    setConfirmationRule(result.confirmation);
                    form.resetProgress();
                }
            }
        } catch (e) {
            const handleSubmitError = props?.onSubmitError ? props.onSubmitError(e) : true;
            if (handleSubmitError) {                
                handleError(e);
                form.setApiError(e);
            }
        }

    };

    useEffect(() => {
        const onPopState = (e: PopStateEvent) => {
            form.gotoPage(e.state, 'popstate');
        };

        window.addEventListener('popstate', onPopState);

        return () => {
            window.removeEventListener('popstate', onPopState);
        };
    }, []);

    return (
        <div className="form">
            <FormContextProvider form={form}>
                {!confirmationRule ? (<FormLoader {...props} onFormSubmit={onFormSubmit} />) : null}
                {(!!confirmationRule && !!formResponse) ? (<FormConfirmation rule={confirmationRule} formResponse={formResponse} />) : null}
            </FormContextProvider>
        </div>
    );
}
