import { useMemo, useSyncExternalStore } from 'react';
import { Dictionary } from '../models';

type Store<T> = {
    subscribe(onChange: () => void): () => void,
    getState(): T;
    getInitialState(): T;
};

type Selector<T, TResult> = (state: T) => TResult;

export type CreateStoreArgs<T> = {
    set(updates: (current: T) => T): void;

    getState() : T;

    select<TResult>(projector: (s: T) => TResult): Selector<T, TResult>;
    select<S1, TResult>(s1: Selector<T, S1>, projector: (s1: S1) => TResult): Selector<T, TResult>;
    select<S1, S2, TResult>(s1: Selector<T, S1>, s2: Selector<T, S2>, projector: (s1: S1, s2: S2) => TResult): Selector<T, TResult>;
    select<S1, S2, S3, TResult>(s1: Selector<T, S1>, s2: Selector<T, S2>, s3: Selector<T, S3>, projector: (s1: S1, s2: S2, s3: S3) => TResult): Selector<T, TResult>;
    select<S1, S2, S3, S4, TResult>(s1: Selector<T, S1>, s2: Selector<T, S2>, s3: Selector<T, S3>, s4: Selector<T, S4>, projector: (s1: S1, s2: S2, s3: S3, s4: S4) => TResult): Selector<T, TResult>;
    select<S1, S2, S3, S4, S5, TResult>(s1: Selector<T, S1>, s2: Selector<T, S2>, s3: Selector<T, S3>, s4: Selector<T, S4>, s5: Selector<T, S5>, projector: (s1: S1, s2: S2, s3: S3, s4: S4, s5: S5) => TResult): Selector<T, TResult>;
    select<S1, S2, S3, S4, S5, S6, TResult>(s1: Selector<T, S1>, s2: Selector<T, S2>, s3: Selector<T, S3>, s4: Selector<T, S4>, s5: Selector<T, S5>, s6: Selector<T, S6>, projector: (s1: S1, s2: S2, s3: S3, s4: S4, s5: S5, s6: S6) => TResult): Selector<T, TResult>;
    select<S1, S2, S3, S4, S5, S6, S7, TResult>(s1: Selector<T, S1>, s2: Selector<T, S2>, s3: Selector<T, S3>, s4: Selector<T, S4>, s5: Selector<T, S5>, s6: Selector<T, S6>, s7: Selector<T, S7>, projector: (s1: S1, s2: S2, s3: S3, s4: S4, s5: S5, s6: S6, s7: S7) => TResult): Selector<T, TResult>;
    select<S1, S2, S3, S4, S5, S6, S7, S8, TResult>(s1: Selector<T, S1>, s2: Selector<T, S2>, s3: Selector<T, S3>, s4: Selector<T, S4>, s5: Selector<T, S5>, s6: Selector<T, S6>, s7: Selector<T, S7>, s8: Selector<T, S8>, projector: (s1: S1, s2: S2, s3: S3, s4: S4, s5: S5, s6: S6, s7: S7, s8: S8) => TResult): Selector<T, TResult>;
    select<S1, S2, S3, S4, S5, S6, S7, S8, S9, TResult>(s1: Selector<T, S1>, s2: Selector<T, S2>, s3: Selector<T, S3>, s4: Selector<T, S4>, s5: Selector<T, S5>, s6: Selector<T, S6>, s7: Selector<T, S7>, s8: Selector<T, S8>, s9: Selector<T, S9>, projector: (s1: S1, s2: S2, s3: S3, s4: S4, s5: S5, s6: S6, s7: S7, s8: S8, s9: S9) => TResult): Selector<T, TResult>;

    selectById<T, TResult>(selectors: Selector<T, Dictionary<TResult>>, id: string): Selector<T, TResult>;
};

type AnyFn = (...args: any[]) => any;

export function memo<TFn extends AnyFn>(projector: TFn): TFn {
    let lastArgs: null | any[] = null;
    let lastResult: any = null;
    return function (...args: any[]) {
        if (lastArgs && (lastArgs.length === args.length) && lastArgs.every((a, index) => Object.is(a, args[index]))) {
            return lastResult;
        }
        lastArgs = args;
        lastResult = projector.apply(null, args);
        return lastResult;
    } as any;
}

function select<T, TResult>(projector: (s: T) => TResult): Selector<T, TResult>;
function select<T, S1, TResult>(s1: Selector<T, S1>, projector: (s1: S1) => TResult): Selector<T, TResult>;
function select<T, S1, S2, TResult>(s1: Selector<T, S1>, s2: Selector<T, S2>, projector: (s1: S1, s2: S2) => TResult): Selector<T, TResult>;
function select<T, S1, S2, S3, TResult>(s1: Selector<T, S1>, s2: Selector<T, S2>, s3: Selector<T, S3>, projector: (s1: S1, s2: S2, s3: S3) => TResult): Selector<T, TResult>;
function select<T, S1, S2, S3, S4, TResult>(s1: Selector<T, S1>, s2: Selector<T, S2>, s3: Selector<T, S3>, s4: Selector<T, S4>, projector: (s1: S1, s2: S2, s3: S3, s4: S4) => TResult): Selector<T, TResult>;
function select<T, S1, S2, S3, S4, S5, TResult>(s1: Selector<T, S1>, s2: Selector<T, S2>, s3: Selector<T, S3>, s4: Selector<T, S4>, s5: Selector<T, S5>, projector: (s1: S1, s2: S2, s3: S3, s4: S4, s5: S5) => TResult): Selector<T, TResult>;
function select(...fns: any[]): Selector<any, any> {
    const selectors = [...fns] as Selector<any, any>[];
    const projector = selectors.pop() as AnyFn;
    const memoProjector = memo(projector);
    return function (s: any) {
        if (!selectors.length) {
            return memoProjector(s);
        } else {
            const args = selectors.map(selector => selector(s));
            return memoProjector.apply(null, args);
        }
    };
}

function createSelectById(cache: Map<Selector<any, any>, Map<string, Selector<any, any>>>) {
    return function <T, TResult>(selectors: Selector<T, Dictionary<TResult>>, id: string): Selector<T, TResult> {
        let selectorCache = cache.has(selectors) ? cache.get(selectors) : null;
        if (!selectorCache) {
            selectorCache = new Map();
            cache.set(selectors, selectorCache);
        }
        if (selectorCache.has(id)) {
            return selectorCache.get(id) as Selector<T, TResult>;
        }
        const selector = select(selectors, v => v?.[id]);
        selectorCache.set(id, selector);
        return selector;
    }
}

export function createStore<TState, TMethods>(
    initialState: TState,
    creator: (args: CreateStoreArgs<TState>) => TMethods
): Store<TState> & TMethods {
    const listeners: Set<() => void> = new Set();
    let state = initialState;

    const set = (updates: (current: TState) => TState) => {
        const nextState = updates(state);
        if (!Object.is(nextState, state)) {
            state = nextState;
            listeners.forEach((listener) => listener())
        }
    };

    const getInitialState = () => initialState;
    const getState = () => state;

    const subscribe = (onChange: () => void) => {
        listeners.add(onChange);
        return () => listeners.delete(onChange);
    };

    const selectById = createSelectById(new Map());

    const methods = creator({ set, select, selectById, getState });

    return {
        ...methods,
        subscribe,
        getState,
        getInitialState
    };

}

export function useStore<T>(store: Store<T>): T {
    return useSyncExternalStore(store.subscribe, store.getState, store.getInitialState);
}

export function useStoreSelector<T, TResult>(store: Store<T>, selector: (state: T) => TResult): TResult {
    const subscribe = useMemo(() => {
        return (onChange: () => void) => {
            let hasState = false;
            let state: any = null;
            return store.subscribe(function () {
                const newState = selector(store.getState());
                if (!hasState || (!Object.is(state, newState))) {
                    onChange();
                    hasState = true;
                    state = newState;
                }
            });
        };
    }, [store, selector]);

    const getInitialState = useMemo(() => {
        return () => {
            return selector(store.getInitialState());
        };
    }, [store, selector]);

    const getState = useMemo(() => {
        return () => {
            return selector(store.getState());
        };
    }, [store, selector]);

    return useSyncExternalStore(subscribe, getState, getInitialState);
}
