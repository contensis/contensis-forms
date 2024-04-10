import { DateTimeValidation, INVALID_DATE, validateDateTimeParts } from './date-utils';
import { localeInfo, parseDateTimeFromFormatter } from './locale';

const ISO_REG_EX = /^([0-9]{4})-([0-1][0-9])(?:-([0-3][0-9]))?(?:[T ]?([0-2][0-9])(?::([0-5][0-9]))?(?::([0-5][0-9]))?)?(?:\.([0-9]+))?(Z|(?:\+|\-)[0-9]{4})?$/;

const SHORT_DATE_TIME_REG_EX = /^(\d{1,2})(\/|\-|\.)(\d{1,2})(\/|\-|\.)(\d{2,4}) (\d{1,2}):(\d{1,2})$/

export function parseDateTime(date: string, includeTimeZoneOffset: boolean) {
    if (!date) {
        return date;
    }
    let d = parseIso(date, includeTimeZoneOffset);
    if (d) {
        return d.datetime;
    }
    d = parseShortDateTime(date, includeTimeZoneOffset);
    if (d) {
        return d.datetime;
    }
    d = localeInfo().formatters.reduce((prev, formatter) => prev || parseDateTimeFromFormatter(date, formatter, includeTimeZoneOffset), undefined as undefined | DateTimeValidation);
    if (d) {
        return d.datetime;
    }
    return INVALID_DATE;
}

function parseIso(date: string, includeTimeZoneOffset: boolean) {
    let match = date.match(ISO_REG_EX);
    if (match) {
        const year = match[1];
        const month = match[2];
        const day = match[3];
        const hour = match[4];
        const minute = match[5];
        return validateDateTimeParts({ year, month, day, hour, minute }, includeTimeZoneOffset);
    }
}

function parseShortDateTime(date: string, includeTimeZoneOffset: boolean) {
    let match = date.match(SHORT_DATE_TIME_REG_EX);
    if (match) {
        const dateParts = localeInfo().shortDateTimeMatchToParts([match[1], match[3], match[5], match[6], match[7]]);
        return validateDateTimeParts(dateParts, includeTimeZoneOffset);
    }
}
