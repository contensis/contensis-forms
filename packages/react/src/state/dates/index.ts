import { parseDate } from './date-parsing';
import { parseDateTime } from './date-time-parsing';
import { getNowDate, getNowDateTime, getNowTime, toLocalIsoDateTime } from './dates';
import { localeInfo } from './locale';
import { parseTime } from './time-parsing';

export const DateTime = {
    getNowDate,
    getNowDateTime,
    getNowTime,
    parseDate,
    parseDateTime,
    parseTime,
    localeInfo,
    toLocalIsoDateTime
};
