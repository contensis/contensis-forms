import { ConfirmationRuleReturn, ConfirmationRuleReturnContent, ConfirmationRuleReturnMessage, ConfirmationRuleReturnUri, FormRule, Nullable } from '../models';

export function findRule<TReturn>(rules: Nullable<FormRule<TReturn>[]>, formValues: Record<string, any>) {
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

// export type ConfirmationRuleReturn = ConfirmationRuleReturnMessage | ConfirmationRuleReturnContent;
export function isConfirmationRuleReturnUri(r: Nullable<ConfirmationRuleReturn>): r is ConfirmationRuleReturnUri {
    return !!(r as any)?.sys?.uri;
}

export function isConfirmationRuleReturnMessage(r: Nullable<ConfirmationRuleReturn>): r is ConfirmationRuleReturnMessage {
    return !!(r as any)?.message
}

export function isConfirmationRuleReturnContent(r: Nullable<ConfirmationRuleReturn>): r is ConfirmationRuleReturnContent {
    return !!(r as any)?.content;
}
