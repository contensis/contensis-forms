export const localisations = {
    previousButtonText: 'Previous',
    nextButtonText: 'Next',
    submitButtonText: 'Submit',
    pagingMessage: 'Page {0} of {1}',

    fieldDataTypeBooleanValidationMessage: '{0} is not a boolean',
    fieldDataTypeDateTimeValidationMessage: '{0} is not a date',
    fieldDataTypeDecimalValidationMessage: '{0} is not a number',
    fieldDataTypeIntegerValidationMessage: '{0} is not an integer',
    fieldDataTypeStringValidationMessage: '{0} is not a string',
    fieldDataTypeStringArrayValidationMessage: '{0} is not an array',

    fieldDataFormatEmailValidationMessage: '{0} is not a valid email',
    fieldDataFormatPhoneValidationMessage: '{0} is not a valid telephone number',
    fieldDataFormatTimeValidationMessage: '{0} is not a valid time',
    fieldDataFormatUrlValidationMessage: '{0} is not a valid URL',

    fieldRequiredValidationMessage: '{0} is required',
    fieldAllowedValueValidationMessage: '{0} is required',
    fieldMinValidationMessage: '{0} must be minimum of {1}',
    fieldMaxValidationMessage: '{0} must be a maximum of {1}',
    fieldMinMaxValidationMessage: '{0} must be between {1} and {2}',

    fieldMinLengthValidationMessage: '{0} must have a minimum length of {1}',
    fieldMaxLengthValidationMessage: '{0} must have a maximum length of {1}',
    fieldMinMaxLengthValidationMessage: '{0} must have a length between {1} and {2}',

    fieldMinCountValidationMessageZero: '{0} requires a minimum of {1} items',
    fieldMinCountValidationMessageOne: '{0} requires a minimum of {1} item',
    fieldMinCountValidationMessageTwo: '{0} requires a minimum of {1} items',
    fieldMinCountValidationMessageFew: '{0} requires a minimum of {1} items',
    fieldMinCountValidationMessageMany: '{0} requires a minimum of {1} items',
    fieldMinCountValidationMessageOther: '{0} requires a minimum of {1} items',

    fieldMaxCountValidationMessageZero: '{0} requires a maximum of {1} items',
    fieldMaxCountValidationMessageOne: '{0} requires a maximum of {1} item',
    fieldMaxCountValidationMessageTwo: '{0} requires a maximum of {1} items',
    fieldMaxCountValidationMessageFew: '{0} requires a maximum of {1} items',
    fieldMaxCountValidationMessageMany: '{0} requires a maximum of {1} items',
    fieldMaxCountValidationMessageOther: '{0} requires a maximum of {1} items',

    fieldMinMaxCountValidationMessage: '{0} requires between {1} and {2} items',

    fieldRegExValidationMessage: '{0} has an invalid format',
    fieldAllowedValuesValidationMessage: '{0} has an invalid value',
    fieldPastDateTimeValidationMessage: '{0} must be in the past',
    fieldDecimalPlacesValidationMessage: '{0} requires {1} decimal places',

    errorLabel: 'Error',
    errorSummaryTitle: 'There is a problem',
    dateInputDayLabel: 'Day',
    dateInputMonthLabel: 'Month',
    dateInputYearLabel: 'Year',
    dateInputHourLabel: 'Hour',
    dateInputMinuteLabel: 'Minute',
    formLoading: 'Loading...',
    formLoadError: 'Error loading form',
    formDisabled: 'Form is disabled',
    confirmationMessage: 'Form submitted successfully',
    errorPageTitle: 'Error',
    pleaseSelect: 'Please select',
    requiredLabel: 'required',

    characterCountMessageRemainingZero: 'You have {0} characters remaining',
    characterCountMessageRemainingOne: 'You have {0} character remaining',
    characterCountMessageRemainingTwo: 'You have {0} characters remaining',
    characterCountMessageRemainingFew: 'You have {0} characters remaining',
    characterCountMessageRemainingMany: 'You have {0} characters remaining',
    characterCountMessageRemainingOther: 'You have {0} characters remaining',

    characterCountMessageExceededZero: 'You have {0} characters too many',
    characterCountMessageExceededOne: 'You have {0} character too many',
    characterCountMessageExceededTwo: 'You have {0} characters too many',
    characterCountMessageExceededFew: 'You have {0} characters too many',
    characterCountMessageExceededMany: 'You have {0} characters too many',
    characterCountMessageExceededOther: 'You have {0} characters too many'
};

export function format(s: string, ...args: any[]): string {
    if (args.length === 0 || !s) {
        return '';
    }

    return s.replace(/{([^{}]*)}/g, (_a, b) => {
        const bValue = parseInt(b, 10);
        if (!isNaN(bValue) && bValue < args.length) {
            return args[bValue];
        }
        return '';
    });
}

type PluralMap<T> = {
    zero: T;
    one: T;
    two: T;
    few: T;
    many: T;
    other: T;
};

const pluralRules = new Intl.PluralRules();

export function plural<T>(value: number, fns: PluralMap<() => T>) {
    const rule = pluralRules.select(value);
    const fn = fns[rule];
    return fn();
}

export function getPageTitle(defaultPageTitle: string, pageTitle: string, pageNo: number, pageCount: number, hasError: boolean) {
    let result = defaultPageTitle;
    if (pageCount > 1) {
        const pageProgress = format(localisations.pagingMessage, pageNo, pageCount);
        result = `${defaultPageTitle} - ${pageProgress}`;
        if (pageTitle) {
            result = `${result} - ${pageTitle}`;
        }
    }
    if (hasError) {
        result = `${localisations.errorPageTitle}: ${result}`;
    }
    return result;
}
