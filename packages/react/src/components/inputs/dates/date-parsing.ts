import { DateValidation, INVALID_DATE, validateDateParts } from './date-utils';
import { localeInfo, parseDateFromFormatter } from './locale';

const ISO_REG_EX = /^([0-9]{4})-([0-1][0-9])(?:-([0-3][0-9]))?(?:[T ]?([0-2][0-9])(?::([0-5][0-9]))?(?::([0-5][0-9]))?)?(?:\.([0-9]+))?(Z|(?:\+|\-)[0-9]{4})?$/;

const SHORT_DATE_REG_EX = /^(\d{1,2})(\/|\-|\.)(\d{1,2})(\/|\-|\.)(\d{2,4})$/

export function parseDate(date: string) {
    if (!date) {
        return date;
    }
    let d = parseIso(date);
    if (d) {
        return d.date;
    }
    d = parseShortDate(date);
    if (d) {
        return d.date;
    }
    d = localeInfo().formatters.reduce((prev, formatter) => prev || parseDateFromFormatter(date, formatter), undefined as undefined | DateValidation);
    if (d) {
        return d.date;
    }
    return INVALID_DATE;
}

function parseIso(date: string) {
    let match = date.match(ISO_REG_EX);
    if (match) {
        const year = match[1];
        const month = match[2];
        const day = match[3];
        return validateDateParts({ year, month, day });
    }
}

function parseShortDate(date: string) {
    let match = date.match(SHORT_DATE_REG_EX);
    if (match) {
        const dateParts = localeInfo().shortDateMatchToParts([match[1], match[3], match[5]]);
        return validateDateParts(dateParts);
    }
}


// type LocaleInfo = {
//     shortDateMatchToParts(match: [string, string, string]): DateParts;
//     formatters: Formatter[];
// };

// function isDatePartKey(key: string): key is DatePartKey {
//     return (key === 'day') || (key === 'month') || (key === 'year');
// }

// const localeInfo = (function () {
//     let info: undefined | LocaleInfo = undefined;

//     const createLocaleInfo = function (): LocaleInfo {
//         const shortDateFormatter = new Intl.DateTimeFormat(DEFAULT_LOCALE, { dateStyle: 'short' });
//         const shortDatePartsOrder = shortDateFormatter.formatToParts().map(p => p.type).filter(isDatePartKey);

//         const formatters = [
//             formatter('short'),
//             formatter('medium'),
//             formatter('long'),
//             formatter('full')
//         ];

//         return {
//             formatters,
//             shortDateMatchToParts(match: [string, string, string]) {
//                 return {
//                     [shortDatePartsOrder[0]]: match[0],
//                     [shortDatePartsOrder[1]]: match[1],
//                     [shortDatePartsOrder[2]]: match[2],
//                 };
//             }
//         };
//     };

//     return function () {
//         info = info || createLocaleInfo();
//         return info;
//     };
// })();

// type Formatter = {
//     parts: Intl.DateTimeFormatPart[];
//     monthNames: string[];
// };

// function formatter(dateStyle: 'short' | 'medium' | 'long' | 'full'): Formatter {
//     const dtf = new Intl.DateTimeFormat(DEFAULT_LOCALE, { dateStyle });
//     const parts = dtf.formatToParts();
//     const monthNames = Array.from({ length: 12 }).map((_, i) => {
//         const parts = dtf.formatToParts(new Date(2000, i, 1));
//         const monthPart = parts.find(p => p.type === 'month');
//         return monthPart?.value || '';
//     });
//     return { parts, monthNames };
// }


// function parseFromFormatter(input: string, formatter: Formatter) {
//     const pattern = createParsePattern(formatter.parts);
//     const result: Partial<Record<Intl.DateTimeFormatPartTypes, string>> = {};
//     for (const p of pattern) {
//         if (p.literal) {
//             const i = input.indexOf(p.literal);
//             if (i >= 0) {
//                 result[p.type] = input.substring(0, i);
//                 input = input.substring(i + p.literal.length);
//             }
//         } else {
//             result[p.type] = input;
//         }
//     }

//     if (result.day && result.month && result.year) {
//         // date time
//         let month = Number(result.month);
//         if (Number.isNaN(month)) {
//             const index = formatter.monthNames.findIndex(m => !!m && (m?.toUpperCase() === result.month?.toUpperCase()));
//             month = (index >= 0) ? index + 1 : month;
//         }
//         const dt = validateDateParts({
//             year: result.year,
//             month: `${month}`,
//             day: result.day
//         });
//         if (!dt.invalid) {
//             return dt;
//         }
//     }

// }

// type Pattern = { type: Intl.DateTimeFormatPartTypes, literal?: string };

// function createParsePattern(parts: Intl.DateTimeFormatPart[]) {
//     return parts.reduce((prev, part) => {
//         if (part.type === 'literal') {
//             if (!!prev[prev.length - 1]) {
//                 prev[prev.length - 1].literal = part.value;
//             }
//         } else {
//             prev.push({ type: part.type });
//         }
//         return prev;
//     }, [] as Pattern[]);
// }