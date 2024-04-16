import { ConfirmationRuleReturn, ConfirmationRuleReturnContent, ConfirmationRuleReturnUri, FormResponse, FormRule, Nullable } from '../models';

function findRule<TReturn>(rules: Nullable<FormRule<TReturn>[]>, formValues: FormResponse) {
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

function isConfirmationRuleReturnUri(r: Nullable<ConfirmationRuleReturn>): r is ConfirmationRuleReturnUri {
    return !!(r as ConfirmationRuleReturnUri)?.link?.uri;
}

function isConfirmationRuleReturnContent(r: Nullable<ConfirmationRuleReturn>): r is ConfirmationRuleReturnContent {
    return !!(r as ConfirmationRuleReturnContent)?.content;
}

export const Rules = {
    findRule,
    isConfirmationRuleReturnContent,
    isConfirmationRuleReturnUri
};