import { FormEvent, useEffect, useId, useState } from 'react';
import { ConfirmationRuleReturn, ContentType, FormProps, FormResponse, FormRule, Nullable } from '../models';
import { createForm, saveForm, findRule, isConfirmationRuleReturnUri } from '../state';
import { FormConfirmation } from './FormConfirmation';
import { FormContextProvider } from './FormContext';
import { FormLoader } from './FormLoader';

export function Form(props: FormProps) {
    const [confirmationRule, setConfirmationRule] = useState<Nullable<FormRule<ConfirmationRuleReturn>>>(null);
    const [formResponse, setFormResponse] = useState<Nullable<FormResponse>>(null);
    const htmlId = useId();
    const form = createForm(props, htmlId);

    const onFormSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const canSave = form.submit();
        if (!canSave) {
            return;
        }

        const formContentType = form.getForm();
        const originalFormResponse = form.getFormResponse();

        const formResponse = props?.onSubmit ? props.onSubmit(originalFormResponse, formContentType as ContentType) : originalFormResponse;
        if (!formResponse) {
            return;
        }

        const confirmationRules = form.getConfirmationRules();
        // todo: what do we do with captcha????
        try {
            const result = await saveForm(props.alias, props.projectId, props.formId, props.language, props.versionStatus, formResponse);            
            const success = props?.onSubmitSuccess ? props.onSubmitSuccess(result) : true;
            if (success) {
                const rule = findRule(confirmationRules, result);
                // todo: what do we do when there is no confirmation rule??
                if (isConfirmationRuleReturnUri(rule?.return)) {
                    // todo: redirect
                    console.log('redirect');
                } else {
                    setFormResponse(result);
                    setConfirmationRule(rule);
                    form.resetProgress();
                }
            }
        } catch (e) {
            const handleError = props?.onSubmitError ? props.onSubmitError(e) : true;
            if (handleError) {
                // todo: handle save error
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
                {(!!confirmationRule && !!formResponse) ? (<FormConfirmation rule={confirmationRule} formResponse={formResponse} language={props.language} />) : null}
            </FormContextProvider>
        </div>
    );
}
