import { FormLocalizations } from '../models';

export function format(s: string, ...args: any[]): string {
    if (args.length === 0 || !s) {
        return '';
    }

    return s.replace(/{([^{}]*)}/g, (_a, b) => {
        const bValue = parseInt(b, 10);
        if (!Number.isNaN(bValue) && bValue < args.length) {
            return args[bValue];
        }
        return '';
    });
}

type PluralMap<T> = {
    zero: T;
    one: T;
    two: T;
    few: T;
    many: T;
    other: T;
};

const pluralRules = new Intl.PluralRules();

export function plural<T>(value: number, fns: PluralMap<() => T>) {
    const rule = pluralRules.select(value);
    const fn = fns[rule];
    return fn();
}

export function getPageTitle(
    defaultPageTitle: string,
    pageTitle: string,
    pageNo: number,
    pageCount: number,
    hasError: boolean,
    localizations: FormLocalizations
) {
    let result = defaultPageTitle;
    if (pageCount > 1) {
        const pageProgress = format(localizations.messages.page, pageNo, pageCount);
        result = `${defaultPageTitle} - ${pageProgress}`;
        if (pageTitle) {
            result = `${result} - ${pageTitle}`;
        }
    }
    if (hasError) {
        result = `${localizations.error.pageTitle}: ${result}`;
    }
    return result;
}
