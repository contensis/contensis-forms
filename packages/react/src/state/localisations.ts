export const localisations = {
    previousButtonText: 'Previous',
    nextButtonText: 'Next',
    submitButtonText: 'Submit',
    pagingMessage: 'Page {0} of {1}',
    
    fieldDataTypeBooleanValidationMessage: 'Field is not a boolean',
    fieldDataTypeDateTimeValidationMessage: 'Field is not a date',
    fieldDataTypeDecimalValidationMessage: 'Field is not a number',
    fieldDataTypeIntegerValidationMessage: 'Field is not an integer',
    fieldDataTypeStringValidationMessage: 'Field is not a string',
    fieldDataTypeStringArrayValidationMessage: 'Field is not an array',
    
    fieldDataFormatEmailValidationMessage: 'Field is not a valid email',
    fieldDataFormatPhoneValidationMessage: 'Field is not a valid telephone number',
    fieldDataFormatTimeValidationMessage: 'Field is not a valid time',
    fieldDataFormatUrlValidationMessage: 'Fieldis not a valid URL',

    fieldRequiredValidationMessage: 'Field is required',
    fieldMinValidationMessage: 'Field is too small',
    fieldMaxValidationMessage: 'Field is too large',
    fieldMinLengthValidationMessage: 'Field is too small',
    fieldMaxLengthValidationMessage: 'Field is too large',
    fieldMinCountValidationMessage: 'Field is too small',
    fieldMaxCountValidationMessage: 'Field is too large',
    fieldRegExValidationMessage: 'Field format is invalid',
    fieldAllowedValuesValidationMessage: 'Field value is not allowed',
    fieldPastDateTimeValidationMessage: 'Field must be in the past',
    
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
    errorPageTitle: 'Error'
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
