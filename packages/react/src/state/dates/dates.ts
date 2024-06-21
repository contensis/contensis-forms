
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

function toLocalIsoTime(dt: Date) {
    return `${pad(dt.getHours())}:${pad(dt.getMinutes())}`;
}

function pad(n: number, length: number = 2) {
    const padding = Array.from({ length }).map(() => '0').join('');
    return `${padding}${n}`.slice(-1 * length)
}
