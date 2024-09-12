import React, { createContext, PropsWithChildren, useMemo } from 'react';
import { DeepPartial, FormContentType, FormLocalizations, Nullable } from '../models';

type FormRenderContextProviderProps = {
    headingLevel: Nullable<number>;
    localizations: Nullable<FormLocalizations>;
};

type FormRenderContextProps = {
    headingLevel: number;
    localizations: FormLocalizations;
};

const DEFAULT_HEADING_LEVEL = 3;

export const DEFAULT_LOCALIZATIONS: FormLocalizations = {
        buttons: {
            next: 'Next', // next
            previous: 'Previous', // previous
            submit: 'Submit' //submit
        },

        load: {
            error: 'Error loading form', // na
            loading: 'Loading...' // na
        },

        error: {
            label: 'Error', // errorLabel
            pageTitle: 'Error', // errorPageTitle
            summaryTitle: 'There is a problem' // errorSummaryTitle
        },

        messages: {
            confirmation: 'Form submitted successfully', // na
            page: 'Page {0} of {1}' // pageHeader
        },

        labels: {
            selectPlaceholder: 'Please select', // na
            required: 'required' // requiredLabel
        },

        dates: {
            day: 'Day', // dateInputDayLabel
            month: 'Month', // dateInputMonthLabel
            year: 'Year', // dateInputYearLabel
            hour: 'Hour', // dateInputHourLabel
            minute: 'Minute', // dateInputMinuteLabel
            period: 'Period' // dateInputPeriodLabel
        },

        validation: {
            dataType: {
                boolean: '{0} is not a boolean', // validationDataTypeBoolean
                dateTime: '{0} is not a date', // validationDataTypeDateTime
                decimal: '{0} is not a number', // validationDataTypeDecimal
                integer: '{0} is not an integer', // // validationDataTypeInteger
                string: '{0} is not a string', // // validationDataTypeString
                stringArray: '{0} is not an array' // validationDataTypeStringArray
            },
            dataFormat: {
                email: '{0} is not a valid email', //validationDataFormatEmail
                phone: '{0} is not a valid telephone number', // validationDataFormatPhone
                time: '{0} is not a valid time', // validationDataFormatTime
                url: '{0} is not a valid URL' // validationDataFormatUrl
            },
            minCount: {
                zero: '{0} requires a minimum of {1} items', // validationMinCountZero
                one: '{0} requires a minimum of {1} item',  // validationMinCountOne
                two: '{0} requires a minimum of {1} items', // validationMinCountTwo
                few: '{0} requires a minimum of {1} items', // validationMinCountFew
                many: '{0} requires a minimum of {1} items', // validationMinCountMany
                other: '{0} requires a minimum of {1} items' // validationMinCountOther
            },
            maxCount: {
                zero: '{0} requires a maximum of {1} items', // validationMaxCountZero
                one: '{0} requires a maximum of {1} item', // validationMaxCountOne
                two: '{0} requires a maximum of {1} items', // validationMaxCountTwo
                few: '{0} requires a maximum of {1} items', // validationMaxCountFew
                many: '{0} requires a maximum of {1} items', // validationMaxCountMany
                other: '{0} requires a maximum of {1} items' // validationMaxCountOther
            },

            required: '{0} is required', // validationRequired
            allowedValue: '{0} is required', // validationAllowedValue
            allowedValues: '{0} has an invalid value', // validationAllowedValues
            regEx: '{0} has an invalid format', // validationRegEx
            pastDateTime: '{0} must be in the past', // validationPastDateTime

            min: '{0} must be minimum of {1}', // validationMin
            max: '{0} must be a maximum of {1}', // validationMax
            minMax: '{0} must be between {1} and {2}', // validationMinMax
            minLength: '{0} must have a minimum length of {1}', // validationMinLength
            maxLength: '{0} must have a maximum length of {1}', // validationMaxLength
            minMaxLength: '{0} must have a length between {1} and {2}', // validationMinMaxLength

            minMaxCount: '{0} requires between {1} and {2} items' // validationMinMaxCount
        },

        characterCount: {
            remaining: {
                zero: 'You have {0} characters remaining', // characterCountRemainingZero
                one: 'You have {0} character remaining', // characterCountRemainingOne
                two: 'You have {0} characters remaining', // characterCountRemainingTwo
                few: 'You have {0} characters remaining', // characterCountRemainingFew
                many: 'You have {0} characters remaining', // characterCountRemainingMany
                other: 'You have {0} characters remaining' // characterCountRemainingOther
            },
            exceeded: {
                zero: 'You have {0} characters too many', // characterCountExceededZero
                one: 'You have {0} character too many', // characterCountExceededOne
                two: 'You have {0} characters too many', // characterCountExceededTwo
                few: 'You have {0} characters too many', // characterCountExceededFew
                many: 'You have {0} characters too many', // characterCountExceededMany
                other: 'You have {0} characters too many' // characterCountExceededOther
            }
        }
};

export const FormRenderContext = createContext<FormRenderContextProps>({ headingLevel: DEFAULT_HEADING_LEVEL, localizations: DEFAULT_LOCALIZATIONS });

function deepMergeLocalisations<T>(source: T, partial: DeepPartial<T>) {
    Object.keys(partial || {}).forEach((key) => {
        const value = (partial as any)[key];
        if (typeof value === 'string' && value !== '') {
            source = { ...source, [key]: value };
        } else if (value !== null && typeof value === 'object') {
            source = {
                ...source,
                [key]: deepMergeLocalisations((source as any)[key], value)
            };
        }
    });
    return source;
}

export function mergeLocalizations(localizationsOverrides: Nullable<DeepPartial<FormLocalizations>>, form: Nullable<FormContentType>) {
    let localizations = JSON.parse(JSON.stringify(DEFAULT_LOCALIZATIONS));
    if (form?.properties?.localizations) {
        const l = form.properties.localizations;
        localizations = deepMergeLocalisations(localizations, {
            buttons: {
                next: l.next,
                previous: l.previous,
                submit: l.submit
            },
            error: {
                label: l.errorLabel,
                pageTitle: l.errorPageTitle,
                summaryTitle: l.errorSummaryTitle
            },
            messages: {
                page: l.pageHeader
            },
            labels: {
                required: l.requiredLabel
            },
            dates: {
                day: l.dateInputDayLabel,
                month: l.dateInputMonthLabel,
                year: l.dateInputYearLabel,
                hour: l.dateInputHourLabel,
                minute: l.dateInputMinuteLabel,
                period: l.dateInputPeriodLabel
            },
            validation: {
                dataType: {
                    boolean: l.validationDataTypeBoolean,
                    dateTime: l.validationDataTypeDateTime,
                    decimal: l.validationDataTypeDecimal,
                    integer: l.validationDataTypeInteger,
                    string: l.validationDataTypeString,
                    stringArray: l.validationDataTypeStringArray
                },
                dataFormat: {
                    email: l.validationDataFormatEmail,
                    phone: l.validationDataFormatPhone,
                    time: l.validationDataFormatTime,
                    url: l.validationDataFormatUrl
                },
                minCount: {
                    zero: l.validationMinCountZero,
                    one: l.validationMinCountOne,
                    two: l.validationMinCountTwo,
                    few: l.validationMinCountFew,
                    many: l.validationMinCountMany,
                    other: l.validationMinCountOther
                },
                maxCount: {
                    zero: l.validationMaxCountZero,
                    one: l.validationMaxCountOne,
                    two: l.validationMaxCountTwo,
                    few: l.validationMaxCountFew,
                    many: l.validationMaxCountMany,
                    other: l.validationMaxCountOther
                },
                required: l.validationRequired,
                allowedValue: l.validationAllowedValue,
                allowedValues: l.validationAllowedValues,
                regEx: l.validationRegEx,
                pastDateTime: l.validationPastDateTime,
                min: l.validationMin,
                max: l.validationMax,
                minMax: l.validationMinMax,
                minLength: l.validationMinLength,
                maxLength: l.validationMaxLength,
                minMaxLength: l.validationMinMaxLength,
                minMaxCount: l.validationMinMaxCount
            },
            characterCount: {
                remaining: {
                    zero: l.characterCountRemainingZero,
                    one: l.characterCountRemainingOne,
                    two: l.characterCountRemainingTwo,
                    few: l.characterCountRemainingFew,
                    many: l.characterCountRemainingMany,
                    other: l.characterCountRemainingOther
                },
                exceeded: {
                    zero: l.characterCountExceededZero,
                    one: l.characterCountExceededOne,
                    two: l.characterCountExceededTwo,
                    few: l.characterCountExceededFew,
                    many: l.characterCountExceededMany,
                    other: l.characterCountExceededOther
                }
            }
        });
    }
    if (localizationsOverrides) {
        localizations = deepMergeLocalisations(localizations, localizationsOverrides);
    }
    return localizations;
}

export function FormRenderContextProvider({ headingLevel, localizations, children }: PropsWithChildren<FormRenderContextProviderProps>) {
    const value = useMemo(
        () => ({
            headingLevel: headingLevel || DEFAULT_HEADING_LEVEL,
            localizations: localizations || DEFAULT_LOCALIZATIONS
        }),
        [headingLevel, localizations]
    );
    return <FormRenderContext.Provider value={value}>{children}</FormRenderContext.Provider>;
}
