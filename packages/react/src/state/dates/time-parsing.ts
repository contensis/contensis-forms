import { INVALID_TIME, pad } from './date-utils';

export function parseTime(time: string) {
    if (!time) {
        return time;
    }

    const match = [match3Digit, match4Digit].reduce(
        (prev, fn) => {
            return prev || fn(time);
        },
        null as null | TimeMatch
    );

    if (!match) {
        return INVALID_TIME;
    }

    let { hour, minute, period } = match;

    if (Number.isNaN(hour) || Number.isNaN(minute)) {
        return INVALID_TIME;
    }
    if (hour === 24) {
        if (minute === 0) {
            hour = 0;
        } else {
            return INVALID_TIME;
        }
    }
    if (hour === 0 && period === 'pm') {
        return INVALID_TIME;
    }

    if (period === 'am' && hour > 12) {
        // 17:00am
        return INVALID_TIME;
    }
    if (period === 'am' && hour === 12) {
        hour = 0;
    }
    if (period === 'pm' && hour < 12) {
        hour += 12;
    }

    if (hour > 24 || hour < 0) {
        return INVALID_TIME;
    }
    if (minute > 59 || minute < 0) {
        return INVALID_TIME;
    }

    return `${pad(hour)}:${pad(minute)}`;
}

type TimeMatch = {
    hour: number;
    minute: number;
    period: null | 'am' | 'pm';
};

function match3Digit(time: string): null | TimeMatch {
    // match 1 and 3 digit times with no delimiters
    const timeRegex = /^(\d{1,3})([ .])?(am|a.m|a.m.|pm|p.m|p.m.)?$/;
    const match = time.match(timeRegex);
    if (!match) {
        return null;
    }
    let t = Number(match[1]);
    if (Number.isNaN(t)) {
        return null;
    }
    let hour = 0;
    let minute = 0;
    const period = match[3];
    const isAm = !!period?.startsWith('a');
    const isPm = !!period?.startsWith('p');
    if (t < 100) {
        // 1 or 2 digit number this must be an hour values like 45/88 will fail
        hour = t;
    } else {
        hour = Math.floor(t / 100);
        minute = t % 100;
    }

    return {
        hour,
        minute,
        period: isAm ? 'am' : isPm ? 'pm' : null
    };
}

function match4Digit(time: string): null | TimeMatch {
    // match 4 digit times and times with delimiters
    const timeRegex = /^(\d{1,2})([.: ])?(\d{1,2})?([ .])?(am|a.m|am.|a.m.|pm|p.m|pm.|p.m.)?$/;
    const match = time.match(timeRegex);
    if (!match) {
        return null;
    }
    let hour = Number(match[1]);
    const minute = Number(match[3]);
    const period = match[5];
    const isAm = !!period?.startsWith('a');
    const isPm = !!period?.startsWith('p');

    return {
        hour,
        minute,
        period: isAm ? 'am' : isPm ? 'pm' : null
    };
}

// supported time formats

/*
function pad(n: number) {
    return (n < 10)
        ? `0${n}`
        : `${n}`;
}

function genTimes(hour: number, min: number, output: string) {
    const hourStr = pad(hour);
    let hour12 = (hour === 0) ? 12 : ((hour > 12) ? hour - 12 : hour);
    const minStr = pad(min);
    const amppm = (hour < 12) ? 'a' : 'p';
    const delimiters = [':', '', '.', ' '];
    const periods = [
        `${amppm}m`,
        ` ${amppm}m`,
        `.${amppm}m`,
        `${amppm}.m`,
        ` ${amppm}.m`,
        `.${amppm}.m`,
        `${amppm}.m.`,
        ` ${amppm}.m.`,
        `.${amppm}.m.`,
    ];

    const times = delimiters.reduce(
        (prev, delimiter) => {
            const t12 = `${hour12}${delimiter}${minStr}`;
            const t24 = `${hourStr}${delimiter}${minStr}`;

            if (hour > 0 && hour <= 12) {
                prev.push([t12, output]);
            }
            prev.push([t24, output]);

            periods.forEach(period => {
                prev.push([`${t12}${period}`, output]);
                prev.push([`${t24}${period}`, output]);
            });

            return prev;
        },
        [] as [string, string][]
    );
    return [
        ...times
    ];
}

const TIMES = [
    ...genTimes(5, 15, '05:15'),
    ...genTimes(17, 44, '17:44'),
    ...genTimes(4, 0, '04:00'),
    ...genTimes(20, 0, '20:00'),
    ...genTimes(0, 5, '00:05'),
    ...genTimes(0, 0, '00:00'),
    ...genTimes(12, 0, '12:00'),
    ['24', '00:00'],
    ['2400', '00:00'],
    ['24:00', '00:00'],
    ['24 00', '00:00'],
    ['24.00', '00:00'],
    ['24:00am', '00:00'],
    ['24:00pm', ''],
    ['2401', ''],
    ['24:01', ''],
    ['24 01', ''],
    ['24.01', ''],
    ['24:01am', ''],
    ['24:01pm', ''],
    ['2801', ''],
    ['28:01', ''],
    ['28 01', ''],
    ['28.01', ''],
    ['28:01am', ''],
    ['28:01pm', ''],
    ['not a date', ''],
    ['5am', '05:00'],
    ['5pm', '17:00'],
    ['5', '05:00'],
    ['05', '05:00'],
    ['17', '17:00'],
    ['17am', ''],
    ['17pm', '17:00'],
    ['12', '12:00'],
    ['12am', '00:00'],
    ['12pm', '12:00'],
    ['0', '00:00'],
    ['00', '00:00'],
    ['00am', '00:00'],
    ['000am', '00:00'],
    ['00pm', ''],
];
*/
