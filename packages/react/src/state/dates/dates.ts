import { DateParts, DateTimeParts, isDate, isValidDate, TimeFormat, TimeParts, TimePeriod } from './date-utils';

export function getNowDate() {
    return toLocalIsoDate(new Date());
}

export function getNowDateTime() {
    return toLocalIsoDateTime(new Date());
}

export function getNowTime() {
    return toLocalIsoTime(new Date());
}

function toLocalIsoDate(dt: Date) {
    return `${dt.getFullYear()}-${pad(dt.getMonth() + 1)}-${pad(dt.getDate())}T00:00`;
}

export function toLocalIsoDateTime(dt: Date) {
    return `${dt.getFullYear()}-${pad(dt.getMonth() + 1)}-${pad(dt.getDate())}T${pad(dt.getHours())}:${pad(dt.getMinutes())}`;
}

export function toDateParts(input: number | string | Date): DateParts {
    const { year, month, day } = toDateTimeParts(input, '24h');
    return { year, month, day };
}

function timeToTimeParts(hour: number, minute: number, timeFormat: TimeFormat): TimeParts {
    let period: TimePeriod = 'am';
    if (timeFormat === '12h') {
        if (hour === 0) {
            hour = 12;
        } else if (hour === 12) {
            period = 'pm';
        } else if (hour > 12) {
            hour = hour - 12;
            period = 'pm';
        }
    }
    return {
        hour: timeFormat === '24h' ? pad(hour) : `${hour}`,
        minute: pad(minute),
        period,
        timeFormat
    };
}

export function toDateTimeParts(input: number | string | Date, timeFormat: TimeFormat): DateTimeParts {
    if (!input) {
        return {
            year: '',
            month: '',
            day: '',
            hour: '',
            minute: '',
            period: 'am',
            timeFormat
        };
    }
    const dt = isDate(input) ? input : new Date(input);
    if (isValidDate(dt)) {
        return {
            year: `${dt.getFullYear()}`,
            month: `${dt.getMonth() + 1}`,
            day: `${dt.getDate()}`,
            ...timeToTimeParts(dt.getHours(), dt.getMinutes(), timeFormat)
        };
    } else {
        return {
            year: '',
            month: '',
            day: '',
            hour: '',
            minute: '',
            period: 'am',
            timeFormat
        };
    }
}

export function toTimeParts(input: number | string | Date, timeFormat: TimeFormat): TimeParts {
    const dateParts = toDateTimeParts(input, timeFormat);
    if (dateParts.hour && dateParts.minute) {
        return {
            hour: dateParts.hour,
            minute: dateParts.minute,
            period: dateParts.period,
            timeFormat: dateParts.timeFormat
        };
    }
    if (typeof input === 'string') {
        const parts = input.split(':');
        if (parts.length === 2) {
            const hourNum = parseInt(parts[0], 10);
            const minuteNum = parseInt(parts[1], 10);
            if (!Number.isNaN(hourNum) && !Number.isNaN(minuteNum)) {
                return timeToTimeParts(hourNum, minuteNum, timeFormat);
            }
        }
    }
    return {
        hour: '',
        minute: '',
        period: 'am',
        timeFormat
    };
}

function toLocalIsoTime(dt: Date) {
    return `${pad(dt.getHours())}:${pad(dt.getMinutes())}`;
}

function pad(n: number, length: number = 2) {
    const padding = Array.from({ length })
        .map(() => '0')
        .join('');
    return `${padding}${n}`.slice(-1 * length);
}
