import { parseDate } from './date-parsing';
import { parseDateTime } from './date-time-parsing';
import { validateDateParts, validateDateTimeParts, validateTimeParts } from './date-utils';
import { getNowDate, getNowDateTime, getNowTime, toDateParts, toDateTimeParts, toLocalIsoDateTime, toTimeParts } from './dates';
import { localeInfo } from './locale';
import { parseTime } from './time-parsing';
export type { DateFormat, DateParts, DateTimeParts, TimeFormat, TimeParts, TimePeriod } from './date-utils';

export const DateTime = {
    getNowDate,
    getNowDateTime,
    getNowTime,
    localeInfo,
    parseDate,
    parseDateTime,
    parseTime,
    toDateParts,
    toDateTimeParts,
    toTimeParts,
    toLocalIsoDateTime,
    validateDateParts,
    validateDateTimeParts,
    validateTimeParts
};

export const DateTimeSettings = {
    dateFormats: {
        dd_mm_yyyy: 'dd-mm-yyyy' as const,
        mm_dd_yyyy: 'mm-dd-yyyy' as const,
        yyyy_mm_dd: 'yyyy-mm-dd' as const
    },
    timeFormats: {
        h12: '12h' as const,
        h24: '24h' as const
    },
    defaultSeparators:  {
        date: '/',
        time: ':'
    },
    timePeriods: {
        am: 'am' as const,
        pm: 'pm' as const
    }
};