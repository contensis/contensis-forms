import { DatePartKey, DateParts, DateTimeParts, DateValidation, validateDateParts, validateDateTimeParts } from './date-utils';
import { parseTime } from './time-parsing';

const DEFAULT_LOCALE = 'default';

type LocaleInfo = {
    shortDateMatchToParts(match: [string, string, string]): DateParts;
    shortDateTimeMatchToParts(match: [string, string, string, string, string]): DateTimeParts;
    formatters: DateFormatter[];
};

function isDatePartKey(key: string): key is DatePartKey {
    return (key === 'day') || (key === 'month') || (key === 'year');
}

export const localeInfo = (function () {
    let info: undefined | LocaleInfo = undefined;

    const createLocaleInfo = function (): LocaleInfo {
        const shortDateFormatter = new Intl.DateTimeFormat(DEFAULT_LOCALE, { dateStyle: 'short' });
        const shortDatePartsOrder = shortDateFormatter.formatToParts().map(p => p.type).filter(isDatePartKey);

        const formatters = [
            dateFormatter('short'),
            dateFormatter('medium'),
            dateFormatter('long'),
            dateFormatter('full')
        ];

        return {
            formatters,
            shortDateMatchToParts(match: [string, string, string]) {
                return {
                    [shortDatePartsOrder[0]]: match[0],
                    [shortDatePartsOrder[1]]: match[1],
                    [shortDatePartsOrder[2]]: match[2],
                };
            },
            shortDateTimeMatchToParts(match: [string, string, string, string, string]) {
                return {
                    [shortDatePartsOrder[0]]: match[0],
                    [shortDatePartsOrder[1]]: match[1],
                    [shortDatePartsOrder[2]]: match[2],
                    hour: match[3],
                    minute: match[4]
                };
            }
        };
    };

    return function () {
        info = info || createLocaleInfo();
        return info;
    };
})();

type DateFormatter = {
    parts: Intl.DateTimeFormatPart[];
    monthNames: string[];
};

function dateFormatter(dateStyle: 'short' | 'medium' | 'long' | 'full'): DateFormatter {
    const dtf = new Intl.DateTimeFormat(DEFAULT_LOCALE, { dateStyle });
    const parts = dtf.formatToParts();
    const monthNames = Array.from({ length: 12 }).map((_, i) => {
        const parts = dtf.formatToParts(new Date(2000, i, 1));
        const monthPart = parts.find(p => p.type === 'month');
        return monthPart?.value || '';
    });
    return { parts, monthNames };
}

export function parseDateFromFormatter(input: string, formatter: DateFormatter) {
    const pattern = createDateParsePattern(formatter.parts);
    const result: Partial<Record<Intl.DateTimeFormatPartTypes, string>> = {};
    for (const p of pattern) {
        if (p.literal) {
            const i = input.indexOf(p.literal);
            if (i >= 0) {
                result[p.type] = input.substring(0, i);
                input = input.substring(i + p.literal.length);
            }
        } else {
            result[p.type] = input;
        }
    }

    if (result.day && result.month && result.year) {
        // date time
        let month = Number(result.month);
        if (Number.isNaN(month)) {
            const index = formatter.monthNames.findIndex(m => !!m && (m?.toUpperCase() === result.month?.toUpperCase()));
            month = (index >= 0) ? index + 1 : month;
        }
        const dt = validateDateParts({
            year: result.year,
            month: `${month}`,
            day: result.day
        });
        if (!dt.invalid) {
            return dt;
        }
    }

}

type Pattern = { type: Intl.DateTimeFormatPartTypes, literal?: string };

function createDateParsePattern(parts: Intl.DateTimeFormatPart[]) {
    return parts.reduce((prev, part) => {
        if (part.type === 'literal') {
            if (!!prev[prev.length - 1]) {
                prev[prev.length - 1].literal = part.value;
            }
        } else {
            prev.push({ type: part.type });
        }
        return prev;
    }, [] as Pattern[]);
}

export function parseDateTimeFromFormatter(input: string, formatter: DateFormatter) {
    const pattern = createDateTimeParsePattern(formatter.parts);
    const result: Partial<Record<Intl.DateTimeFormatPartTypes, string>> = {};
    for (const p of pattern) {
        if (p.literal) {
            const i = input.indexOf(p.literal);
            if (i >= 0) {
                result[p.type] = input.substring(0, i);
                input = input.substring(i + p.literal.length);
            }
        } else {
            result[p.type] = input;
        }
    }
    let time = '';
    if (input) {
        time = parseTime(input);
        if (!time) {
            return undefined;
        }
    }

    if (result.day && result.month && result.year) {
        // date time
        let month = Number(result.month);
        if (Number.isNaN(month)) {
            const index = formatter.monthNames.findIndex(m => !!m && (m?.toUpperCase() === result.month?.toUpperCase()));
            month = (index >= 0) ? index + 1 : month;
        }
        const hour = !!time ? time.split(':')[0] : undefined;
        const minute = !!time ? time.split(':')[1] : undefined;
        const dt = validateDateTimeParts({
            year: result.year,
            month: `${month}`,
            day: result.day,
            hour,
            minute
        });
        if (!dt.invalid) {
            return dt;
        }
    }

}

function createDateTimeParsePattern(parts: Intl.DateTimeFormatPart[]) {
    return parts.reduce((prev, part) => {
        if (part.type === 'literal') {
            if (!!prev[prev.length - 1]) {
                prev[prev.length - 1].literal = part.value;
            }
        } else {
            prev.push({ type: part.type, literal: ' ' });
        }
        return prev;
    }, [] as Pattern[]);
}