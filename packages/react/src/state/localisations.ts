export const localisations = {
    previousButtonText: 'Previous',
    nextButtonText: 'Next',
    submitButtonText: 'Submit',
    pagingMessage: 'Page {0} of {1}',
    fieldDataTypeValidationMessage: 'Field data has an invalid format',
    fieldDataFormatValidationMessage: 'Field data has an invalid format',
    fieldRequiredValidationMessage: 'Field is required',
    fieldMinValidationMessage: 'Field is too small',
    fieldMaxValidationMessage: 'Field is too large',
    fieldMinLengthValidationMessage: 'Field is too small',
    fieldMaxLengthValidationMessage: 'Field is too large',
    fieldMinCountValidationMessage: 'Field is too small',
    fieldMaxCountValidationMessage: 'Field is too large',
    fieldRegExValidationMessage: 'Field format is invalid',
    fieldAllowedValuesValidationMessage: 'Field value is not allowed',
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
