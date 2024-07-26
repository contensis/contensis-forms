import React, { useContext } from 'react';
import { ConfirmationRuleReturn, FormResponse } from '../models';
import { Rules } from '../state';
import { FormRenderContext } from './FormRenderContext';

type FormConfirmationProps = {
    rule: ConfirmationRuleReturn;
    formResponse: FormResponse;
};

export function FormConfirmation(props: FormConfirmationProps) {
    const { localizations } = useContext(FormRenderContext);
    const confirmation = Rules.isConfirmationRuleReturnContent(props.rule) ? props.rule.content : null;
    return !!confirmation ? (
        <div className="form-confirmation-message" dangerouslySetInnerHTML={{ __html: confirmation }}></div>
    ) : (
        <div className="form-confirmation-message">{localizations.messages.confirmation}</div>
    );
}
