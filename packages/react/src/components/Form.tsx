import { FormEvent, useEffect, useId, useState } from 'react';
import { ConfirmationRuleReturn, FormProps, FormRule, Nullable } from '../models';
import { createForm, saveForm, findRule, isConfirmationRuleReturnUri } from '../state';
import { FormConfirmation } from './FormConfirmation';
import { FormContextProvider } from './FormContext';
import { FormLoader } from './FormLoader';

export function Form(props: FormProps) {
    const [confirmationRule, setConfirmationRule] = useState<Nullable<FormRule<ConfirmationRuleReturn>>>(null);
    const [formResponse, setFormResponse] = useState<Nullable<Record<string, any>>>(null);
    const htmlId = useId();
    const form = createForm(props, htmlId);

    const onSubmit = (e: FormEvent<HTMLFormElement>) => {
        const canSave = form.submit();
        e.preventDefault();
        if (canSave) {
            const formResponse = form.getFormResponse();
            // todo: add hook to manipulate forms response            
            const confirmationRules = form.getConfirmationRules();
            // todo: what do we do with captcha????
            saveForm(props.alias, props.projectId, props.formId, props.language, formResponse).then(
                (result) => {
                    const rule = findRule(confirmationRules, result);
                    if (isConfirmationRuleReturnUri(rule?.return)) {
                        // todo: redirect
                        console.log('redirect');
                    } else {
                        setFormResponse(result);
                        setConfirmationRule(rule);
                        form.resetProgress();
                    }
                },
                () => { /* todo: handle save error */ }
            );
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
                {!confirmationRule ? (<FormLoader {...props} onSubmit={onSubmit} />) : null}
                {!!confirmationRule ? (<FormConfirmation rule={confirmationRule} formResponse={formResponse} language={props.language} />) : null}
            </FormContextProvider>
        </div>
    );
}
