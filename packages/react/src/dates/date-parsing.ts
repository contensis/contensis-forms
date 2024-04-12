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
