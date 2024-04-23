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
    fieldDataFormatUrlValidationMessage: 'Field is not a valid URL',

    fieldRequiredValidationMessage: 'Field is required',
    fieldAllowedValueValidationMessage: 'Field is required',
    fieldMinValidationMessage: 'Minimum of {0}',
    fieldMaxValidationMessage: 'Maximum of {0}',
    fieldMinLengthValidationMessage: 'Minimum length of {0}',
    fieldMaxLengthValidationMessage: 'Maximum length of {0}',
    fieldMinCountValidationMessage: 'Minimum of {0} items',
    fieldMaxCountValidationMessage: 'Minimum of {0} items',
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
    errorPageTitle: 'Error',

    pleaseSelect: 'Please select'
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
