import { useMemo } from 'react';
import { ConfirmationRuleReturn, FormResponse } from '../models';
import { Rules, localisations } from '../state';
import { Renderers } from './html';

type FormConfirmationProps = {
    rule: ConfirmationRuleReturn;
    formResponse: FormResponse;
};

export function FormConfirmation(props: FormConfirmationProps) {
    const confirmation = useMemo(() => getConfirmationHtml(props.rule), [props.rule]);
    return !!confirmation
        ? (
            <div className="form-confirmation-message" dangerouslySetInnerHTML={{ __html: confirmation }}>
            </div>
        )
        : (
            <div className="form-confirmation-message">
                {localisations.confirmationMessage}
            </div>
        )
}

function getConfirmationHtml(rule: ConfirmationRuleReturn) {
    if (Rules.isConfirmationRuleReturnContent(rule)) {
        try {
            return Renderers.canvas({ data: rule.content });
        } catch {
            return null;
        }
    } else {
        return null;
    }
}