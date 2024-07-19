
export type DateFormat = 'dd-mm-yyyy' | 'mm-dd-yyyy' | 'yyyy-mm-dd';
export type TimeFormat = '12h' | '24h';
export type TimePeriod = 'am' | 'pm';


export type DateParts = {
    year?: string;
    month?: string;
    day?: string;
};

export type DatePartKey = keyof DateParts;

export type DateValidation = {
    date: null | string;
    invalid?: DatePartKey[];
};

export type TimeParts = {
    hour?: string;
    minute?: string;
    period?: TimePeriod;
    timeFormat?: TimeFormat;
};

export type TimePartKey = keyof TimeParts;

export type TimeValidation = {
    time: null | string;
    invalid?: TimePartKey[];
};

export type DateTimeParts = DateParts & TimeParts;

export type DateTimePartKey = keyof DateTimeParts;

export type DateTimeValidation = {
    datetime: null | string;
    invalid?: DateTimePartKey[];
};

export function pad(n: number, length: number = 2) {
    const padding = Array.from({ length })
        .map(() => '0')
        .join('');
    return `${padding}${n}`.slice(-1 * length);
}

function padYear(year: number) {
    if (year >= 100) {
        return year;
    }
    // 2 digit year
    year = 1900 + year;
    const currentYear = new Date().getUTCFullYear();
    // if more than 80 years ago add 100 to put it in the future
    return currentYear - year > 80 ? year + 100 : year;
}

function toNumber(n: unknown): null | number {
    if (typeof n === 'number') {
        return n;
    }
    if (typeof n === 'string' && !!n) {
        const num = Number(n);
        if (!Number.isNaN(num)) {
            return num;
        }
    }
    return null;
}

function isWithinRange(n: null | number, min: number, max: number): n is number {
    if (typeof n === 'number') {
        return n >= min && n <= max;
    }
    return false;
}

export const INVALID_DATE = 'Invalid date';
export const INVALID_TIME = 'Invalid time';


export function isDate(d: unknown): d is Date {
    return Object.prototype.toString.call(d) === '[object Date]';
}

export function isValidDate(dt: Date) {
    return !Number.isNaN(Number(dt));
}

export function validateDateTimeParts(parts: DateTimeParts): DateTimeValidation {
    if (!parts?.year && !parts?.month && !parts?.day && !parts?.hour && !parts?.minute) {
        return { datetime: null };
    }
    const { year, month, day, ...timeParts } = parts;
    const date = validateDateParts({ year, month, day });
    const time = validateTimeParts(timeParts);
    if (date.invalid || time.invalid) {
        return {
            datetime: INVALID_DATE,
            invalid: [
                ...(date.invalid || []),
                ...(time.invalid || []),
            ]
        };
    }
    // date: 0000-00-00T00:00
    // time: 00:00
    return {
        datetime: (date.date as string).substring(0, 11) + time.time
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
    const { timeFormat, period } = parts;
    let hour24 = hour;

    const invalid: TimePartKey[] = [];
    if (timeFormat === '12h') {
        if (!isWithinRange(hour, 1, 12)) {
            invalid.push('hour');
        } else {
            if (hour === 12) {
                // 12am -> 0
                hour24 = (period === 'am') ? 0 : hour;
            } else {
                // 1-11pm -> + 12
                hour24 = (period === 'pm') ? hour + 12 : hour;
            }
        }
    } else {
        if (!isWithinRange(hour, 0, 23)) {
            invalid.push('hour');
        }
    }
    if (!isWithinRange(minute, 0, 59)) {
        invalid.push('minute');
    }

    if (invalid.length) {
        return {
            time: INVALID_TIME,
            invalid
        };
    }
    return {
        time: `${pad(hour24 as number)}:${pad(minute as number)}`
    };
}

function daysInMonth(year: number, month: number): number {
    const date = new Date(year, month - 1, 1);
    date.setDate(0);
    return date.getDate();
}
