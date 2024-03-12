import { Nullable } from '../../../models';

export type DateParts = {
    year?: string;
    month?: string;
    day?: string;
};

export type DatePartKey = keyof DateParts;

export type DateValidation = {
    date: Nullable<string>;
    invalid?: DatePartKey[];
};

export type TimeParts = {
    hour?: string;
    minute?: string;
};

export type TimePartKey = keyof TimeParts;

export type TimeValidation = {
    time: Nullable<string>;
    invalid?: TimePartKey[];
};

export type DateTimeParts = DateParts & TimeParts;

export type DateTimePartKey = keyof DateTimeParts;

export type DateTimeValidation = {
    datetime: Nullable<string>;
    invalid?: DateTimePartKey[];
};

export function toDateTimeParts(possibleDateTime: any): DateTimeParts {
    let dateTimeParts: DateTimeParts = {};
    if (typeof possibleDateTime === 'string') {
        const dt = new Date(possibleDateTime);
        if (!Number.isNaN(dt.getTime())) {
            dateTimeParts = {
                year: `${dt.getFullYear()}`,
                month: `${dt.getMonth() + 1}`,
                day: `${dt.getDate()}`,
                hour: `${pad(dt.getHours())}`,
                minute: `${pad(dt.getMinutes())}`
            };
        }
    } else {
        dateTimeParts = possibleDateTime;
    }
    return {
        day: dateTimeParts?.day || '',
        month: dateTimeParts?.month || '',
        year: dateTimeParts?.year || '',
        hour: dateTimeParts?.hour || '',
        minute: dateTimeParts?.minute || ''
    };
}

export function toDateParts(possibleDate: any): DateParts {
    let dateParts: DateParts = {};
    if (typeof possibleDate === 'string') {
        const dt = new Date(possibleDate);
        if (!Number.isNaN(dt.getTime())) {
            dateParts = {
                year: `${dt.getFullYear()}`,
                month: `${dt.getMonth() + 1}`,
                day: `${dt.getDate()}`
            };
        }
    } else {
        dateParts = possibleDate;
    }
    return {
        day: dateParts?.day || '',
        month: dateParts?.month || '',
        year: dateParts?.year || ''
    };
}

export function toTimeParts(possibleTime: any): TimeParts {
    let timeParts: TimeParts = {};
    if (typeof possibleTime === 'string') {
        const parts = possibleTime.split(':');
        if (parts.length === 2) {
            let hour = toNumber(parts[0]);
            let minute = toNumber(parts[1]);
            if (isWithinRange(hour, 0, 23) && isWithinRange(minute, 0, 59)) {
                timeParts = {
                    hour: pad(hour),
                    minute: pad(minute)
                };
            }
        }
    } else {
        timeParts = possibleTime;
    }
    return {
        hour: timeParts?.hour || '',
        minute: timeParts?.minute || ''
    };
}

function pad(n: number, length: number = 2) {
    const padding = Array.from({ length }).map(() => '0').join('');
    return `${padding}${n}`.slice(-1 * length)
}

function padYear(year: number) {
    if (year >= 100) {
        return year;
    }
    // 2 digit year
    year = 1900 + year;
    const currentYear = (new Date()).getUTCFullYear();
    // if more than 80 years ago add 100 to put it in the future
    return ((currentYear - year) > 80)
        ? year + 100
        : year;
}

function toNumber(n: any): null | number {
    if (typeof n === 'number') {
        return n;
    }
    if ((typeof n === 'string') && !!n) {
        const num = Number(n);
        if (!Number.isNaN(num)) {
            return num;
        }
    }
    return null;
}

function isWithinRange(n: null | number, min: number, max: number): n is number {
    if (typeof n === 'number') {
        return (n >= min) && (n <= max);
    }
    return false;
}

const INVALID_DATE = 'Invalid date';

export function validateDateTimeParts(parts: DateTimeParts): DateTimeValidation {
    if (!parts?.year && !parts?.month && !parts?.day && !parts?.hour && !parts?.minute) {
        return { datetime: null };
    }
    const year = toNumber(parts.year);
    const month = toNumber(parts.month);
    const day = toNumber(parts.day);
    const hour = toNumber(parts.hour);
    const minute = toNumber(parts.minute);

    const invalid: DateTimePartKey[] = [];

    if (!isWithinRange(year, 0, 3000)) {
        invalid.push('year');
    }
    if (!isWithinRange(month, 1, 12)) {
        invalid.push('month');
    }
    if (!isWithinRange(day, 1, 31)) {
        invalid.push('day');
    }
    if (!isWithinRange(hour, 0, 23)) {
        invalid.push('hour');
    }
    if (!isWithinRange(minute, 0, 59)) {
        invalid.push('minute');
    }

    if (!invalid.includes('year') && !invalid.includes('month') && !invalid.includes('day')) {
        const monthDays = daysInMonth(year as number, month as number);
        if ((day as number) > monthDays) {
            invalid.push('day');
        }
    }
    if (invalid.length) {
        return {
            datetime: INVALID_DATE,
            invalid
        };
    }
    return {
        datetime: `${padYear(year as number)}-${pad(month as number)}-${pad(day as number)}T${pad(hour as number)}:${pad(minute as number)}`
    };
}

export function validateDateParts(parts: DateParts): DateValidation {
    if (!parts?.year && !parts?.month && !parts?.day) {
        return { date: null };
    }
    const year = toNumber(parts.year);
    const month = toNumber(parts.month);
    const day = toNumber(parts.day);

    const invalid: DatePartKey[] = [];

    if (!isWithinRange(year, 0, 3000)) {
        invalid.push('year');
    }
    if (!isWithinRange(month, 1, 12)) {
        invalid.push('month');
    }
    if (!isWithinRange(day, 1, 31)) {
        invalid.push('day');
    }

    if (!invalid.includes('year') && !invalid.includes('month') && !invalid.includes('day')) {
        const monthDays = daysInMonth(year as number, month as number);
        if ((day as number) > monthDays) {
            invalid.push('day');
        }
    }
    if (invalid.length) {
        return {
            date: INVALID_DATE,
            invalid
        };
    }
    return {
        date: `${padYear(year as number)}-${pad(month as number)}-${pad(day as number)}T00:00`
    };
}


export function validateTimeParts(parts: TimeParts): TimeValidation {
    if (!parts?.hour && !parts?.minute) {
        return { time: null };
    }
    const hour = toNumber(parts.hour);
    const minute = toNumber(parts.minute);

    const invalid: TimePartKey[] = [];

    if (!isWithinRange(hour, 0, 23)) {
        invalid.push('hour');
    }
    if (!isWithinRange(minute, 0, 59)) {
        invalid.push('minute');
    }

    if (invalid.length) {
        return {
            time: INVALID_DATE,
            invalid
        };
    }
    return {
        time: `${pad(hour as number)}:${pad(minute as number)}`
    };
}

function daysInMonth(year: number, month: number): number {
    const date = new Date(year, month - 1, 1);
    date.setDate(0);
    return date.getDate();
}