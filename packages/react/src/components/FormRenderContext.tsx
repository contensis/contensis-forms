import React, { createContext, ReactNode, useMemo } from 'react';
import { DeepPartial, FormContentType, FormLocalizations, Nullable } from '../models';

type FormRenderProps = {
    headingLevel: number;
    localizations: FormLocalizations;
};

type FormRenderContextProviderProps = {
    headingLevel?: number;
    localizations?: DeepPartial<FormLocalizations>;
    form?: Nullable<FormContentType>;
    children?: ReactNode;
};

const DEFAULT_RENDER_PROPS: FormRenderProps = {
    headingLevel: 3,
    localizations: {
        buttons: {
            next: 'Next',
            previous: 'Previous',
            submit: 'Submit'
        },

        load: {
            error: 'Error loading form',
            loading: 'Loading...'
        },

        error: {
            label: 'Error',
            pageTitle: 'Error',
            summaryTitle: 'There is a problem'
        },

        messages: {
            confirmation: 'Form submitted successfully',
            page: 'Page {0} of {1}'
        },

        labels: {
            selectPlaceholder: 'Please select',
            required: 'required'
        },

        dates: {
            day: 'Day',
            month: 'Month',
            year: 'Year',
            hour: 'Hour',
            minute: 'Minute',
            period: 'Period'
        },

        validation: {
            dataType: {
                boolean: '{0} is not a boolean',
                dateTime: '{0} is not a date',
                decimal: '{0} is not a number',
                integer: '{0} is not an integer',
                string: '{0} is not a string',
                stringArray: '{0} is not an array'
            },
            dataFormat: {
                email: '{0} is not a valid email',
                phone: '{0} is not a valid telephone number',
                time: '{0} is not a valid time',
                url: '{0} is not a valid URL'
            },
            minCount: {
                zero: '{0} requires a minimum of {1} items',
                one: '{0} requires a minimum of {1} item',
                two: '{0} requires a minimum of {1} items',
                few: '{0} requires a minimum of {1} items',
                many: '{0} requires a minimum of {1} items',
                other: '{0} requires a minimum of {1} items'
            },
            maxCount: {
                zero: '{0} requires a maximum of {1} items',
                one: '{0} requires a maximum of {1} item',
                two: '{0} requires a maximum of {1} items',
                few: '{0} requires a maximum of {1} items',
                many: '{0} requires a maximum of {1} items',
                other: '{0} requires a maximum of {1} items'
            },

            required: '{0} is required',
            allowedValue: '{0} is required',
            allowedValues: '{0} has an invalid value',
            regEx: '{0} has an invalid format',
            pastDateTime: '{0} must be in the past',

            min: '{0} must be minimum of {1}',
            max: '{0} must be a maximum of {1}',
            minMax: '{0} must be between {1} and {2}',
            minLength: '{0} must have a minimum length of {1}',
            maxLength: '{0} must have a maximum length of {1}',
            minMaxLength: '{0} must have a length between {1} and {2}',

            minMaxCount: '{0} requires between {1} and {2} items'
        },

        characterCount: {
            remaining: {
                zero: 'You have {0} characters remaining',
                one: 'You have {0} character remaining',
                two: 'You have {0} characters remaining',
                few: 'You have {0} characters remaining',
                many: 'You have {0} characters remaining',
                other: 'You have {0} characters remaining'
            },
            exceeded: {
                zero: 'You have {0} characters too many',
                one: 'You have {0} character too many',
                two: 'You have {0} characters too many',
                few: 'You have {0} characters too many',
                many: 'You have {0} characters too many',
                other: 'You have {0} characters too many'
            }
        }
    }
};

export const FormRenderContext = createContext(DEFAULT_RENDER_PROPS);

function deepMerge<T>(source: T, partial: DeepPartial<T>) {
    Object.keys(partial || {}).forEach((key) => {
        const value = (partial as any)[key];
        if (typeof value === 'string') {
            source = { ...source, [key]: value };
        } else if (value !== null && typeof value === 'object') {
            source = {
                ...source,
                [key]: deepMerge((source as any)[key], value)
            };
        }
    });
    return source;
}

function mergeProps(props: FormRenderContextProviderProps): FormRenderProps {
    let { headingLevel, localizations } = DEFAULT_RENDER_PROPS;
    if (props?.headingLevel) {
        headingLevel = props.headingLevel;
    }
    if (props?.form?.properties?.localizations) {
        const l = props.form.properties.localizations;
        localizations = deepMerge(localizations, {
            buttons: {
                next: l.next,
                previous: l.previous,
                submit: l.submit
            },
            error: {
                summaryTitle: l.errorSummaryTitle
            }
        });
    }

    if (props.localizations) {
        localizations = deepMerge(localizations, props.localizations);
    }
    return { headingLevel, localizations };
}

export function mergeLocalizations(localizations: Nullable<DeepPartial<FormLocalizations>>) {
    return !!localizations ? deepMerge(DEFAULT_RENDER_PROPS.localizations, localizations) : DEFAULT_RENDER_PROPS.localizations;
}

export function FormRenderContextProvider({ headingLevel, localizations, form, children }: FormRenderContextProviderProps) {
    const value = useMemo(() => mergeProps({ headingLevel, localizations, form }), [headingLevel, localizations, form]);
    return <FormRenderContext.Provider value={value}>{children}</FormRenderContext.Provider>;
}
