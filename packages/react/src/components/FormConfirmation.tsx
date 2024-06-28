import React from 'react';
import { ConfirmationRuleReturn, FormResponse } from '../models';
import { Rules, localisations } from '../state';

type FormConfirmationProps = {
    rule: ConfirmationRuleReturn;
    formResponse: FormResponse;
};

export function FormConfirmation(props: FormConfirmationProps) {
    const confirmation = Rules.isConfirmationRuleReturnContent(props.rule) ? props.rule.content : null;

    return !!confirmation ? (
        <div className="form-confirmation-message" dangerouslySetInnerHTML={{ __html: confirmation }}></div>
    ) : (
        <div className="form-confirmation-message">{localisations.confirmationMessage}</div>
    );
}
