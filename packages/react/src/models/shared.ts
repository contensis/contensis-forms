export type Nullable<T> = undefined | null | T;

export type Dictionary<T> = Record<string, T>;

export type DeepPartial<T> = {
    [P in keyof T]?: T[P] extends object ? DeepPartial<T[P]> : null | T[P];
};
