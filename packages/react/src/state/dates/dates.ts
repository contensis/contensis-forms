import { DateParts, DateTimeParts, isDate, isValidDate, TimeParts } from './date-utils';

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
    const { year, month, day } = toDateTimeParts(input);
    return { year, month, day }
}

export function toDateTimeParts(input: number | string | Date): DateTimeParts {
    if (!input) {
        return {
            year: '',
            month: '',
            day: '',
            hour: '',
            minute: ''
        };
    }
    const dt = isDate(input) ? input : new Date(input);
    if (isValidDate(dt)) {
        return {
            year: `${dt.getFullYear()}`,
            month: `${dt.getMonth() + 1}`,
            day: `${dt.getDate()}`,
            hour: pad(dt.getHours()),
            minute: pad(dt.getMinutes())
        };
    } else {
        return {
            year: '',
            month: '',
            day: '',
            hour: '',
            minute: ''
        };
    }
}

export function toTimeParts(input: number | string | Date): TimeParts {
    let { hour, minute } = toDateTimeParts(input);
    if (!hour && !minute && (typeof input === 'string')) {
        const parts = input.split(':');
        if (parts.length === 2) {
            const hourNum = parseInt(parts[0], 10);
            const minuteNum = parseInt(parts[1], 10);
            hour = !Number.isNaN(hourNum) ? pad(hourNum) : hour;
            minute = !Number.isNaN(minuteNum) ? pad(minuteNum) : minute;
        }
    }
    return { hour, minute }
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
