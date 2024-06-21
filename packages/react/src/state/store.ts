type AnyFn = (...args: any[]) => any;

export function memo<TFn extends AnyFn>(projector: TFn): TFn {
    let lastArgs: null | any[] = null;
    let lastResult: any = null;
    return function (...args: any[]) {
        if (lastArgs && lastArgs.length === args.length && lastArgs.every((a, index) => Object.is(a, args[index]))) {
            return lastResult;
        }
        lastArgs = args;
        lastResult = projector.apply(null, args);
        return lastResult;
    } as any;
}
