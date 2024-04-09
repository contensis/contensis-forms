import { ConfirmationRuleReturn, ConfirmationRuleReturnContent, ConfirmationRuleReturnMessage, ConfirmationRuleReturnUri, FormResponse, FormRule, Nullable } from '../models';

export function findRule<TReturn>(rules: Nullable<FormRule<TReturn>[]>, formValues: FormResponse) {
    return rules?.find(rule => {
        if (!rule.when) {
            return true;
        } else if (rule.when.length) {
            return rule.when.every(when => {
                const value = formValues[when.field];
                return value === when.equalTo;
            });
        }
        return false;
    });
}

export function isConfirmationRuleReturnUri(r: Nullable<ConfirmationRuleReturn>): r is ConfirmationRuleReturnUri {
    return !!(r as ConfirmationRuleReturnUri)?.link?.uri;
}

export function isConfirmationRuleReturnMessage(r: Nullable<ConfirmationRuleReturn>): r is ConfirmationRuleReturnMessage {
    return !!(r as ConfirmationRuleReturnMessage)?.message
}

export function isConfirmationRuleReturnContent(r: Nullable<ConfirmationRuleReturn>): r is ConfirmationRuleReturnContent {
    return !!(r as ConfirmationRuleReturnContent)?.content;
}
