import { parseDate } from './date-parsing';
import { parseDateTime } from './date-time-parsing';
import { validateDateParts, validateDateTimeParts } from './date-utils';
import { getNowDate, getNowDateTime, getNowTime, toDateParts, toDateTimeParts, toLocalIsoDateTime, toTimeParts } from './dates';
import { localeInfo } from './locale';
import { parseTime } from './time-parsing';
export type { DateParts, DateTimeParts, TimeParts } from './date-utils';

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
    validateDateTimeParts
};
