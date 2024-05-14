import { ConfirmationRuleReturn, ConfirmationRuleReturnContent, ConfirmationRuleReturnUri, Nullable } from '../models';

function isConfirmationRuleReturnUri(r: Nullable<ConfirmationRuleReturn>): r is ConfirmationRuleReturnUri {
    return !!(r as ConfirmationRuleReturnUri)?.link?.uri;
}

function isConfirmationRuleReturnContent(r: Nullable<ConfirmationRuleReturn>): r is ConfirmationRuleReturnContent {
    return !!(r as ConfirmationRuleReturnContent)?.content;
}

export const Rules = {
    isConfirmationRuleReturnContent,
    isConfirmationRuleReturnUri
};