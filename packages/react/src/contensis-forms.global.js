(() => {
    var __create = Object.create;
    var __defProp = Object.defineProperty;
    var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames = Object.getOwnPropertyNames;
    var __getProtoOf = Object.getPrototypeOf;
    var __hasOwnProp = Object.prototype.hasOwnProperty;
    var __commonJS = (cb, mod) =>
        function __require() {
            return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
        };
    var __export = (target, all) => {
        for (var name in all) __defProp(target, name, { get: all[name], enumerable: true });
    };
    var __copyProps = (to, from, except, desc) => {
        if ((from && typeof from === 'object') || typeof from === 'function') {
            for (let key of __getOwnPropNames(from))
                if (!__hasOwnProp.call(to, key) && key !== except)
                    __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
        }
        return to;
    };
    var __toESM = (mod, isNodeMode, target) => (
        (target = mod != null ? __create(__getProtoOf(mod)) : {}),
        __copyProps(
            // If the importer is in node compatibility mode or this is not an ESM
            // file that has been converted to a CommonJS file using a Babel-
            // compatible transform (i.e. "__esModule" has not been set), then set
            // "default" to the CommonJS "module.exports" for node compatibility.
            isNodeMode || !mod || !mod.__esModule ? __defProp(target, 'default', { value: mod, enumerable: true }) : target,
            mod
        )
    );

    // ../../node_modules/react/cjs/react.production.min.js
    var require_react_production_min = __commonJS({
        '../../node_modules/react/cjs/react.production.min.js'(exports) {
            var l = Symbol.for('react.element');
            var n = Symbol.for('react.portal');
            var p = Symbol.for('react.fragment');
            var q = Symbol.for('react.strict_mode');
            var r = Symbol.for('react.profiler');
            var t = Symbol.for('react.provider');
            var u = Symbol.for('react.context');
            var v = Symbol.for('react.forward_ref');
            var w = Symbol.for('react.suspense');
            var x = Symbol.for('react.memo');
            var y = Symbol.for('react.lazy');
            var z = Symbol.iterator;
            function A(a) {
                if (null === a || 'object' !== typeof a) return null;
                a = (z && a[z]) || a['@@iterator'];
                return 'function' === typeof a ? a : null;
            }
            var B = {
                isMounted: function () {
                    return false;
                },
                enqueueForceUpdate: function () {},
                enqueueReplaceState: function () {},
                enqueueSetState: function () {}
            };
            var C = Object.assign;
            var D = {};
            function E(a, b, e) {
                this.props = a;
                this.context = b;
                this.refs = D;
                this.updater = e || B;
            }
            E.prototype.isReactComponent = {};
            E.prototype.setState = function (a, b) {
                if ('object' !== typeof a && 'function' !== typeof a && null != a)
                    throw Error('setState(...): takes an object of state variables to update or a function which returns an object of state variables.');
                this.updater.enqueueSetState(this, a, b, 'setState');
            };
            E.prototype.forceUpdate = function (a) {
                this.updater.enqueueForceUpdate(this, a, 'forceUpdate');
            };
            function F() {}
            F.prototype = E.prototype;
            function G(a, b, e) {
                this.props = a;
                this.context = b;
                this.refs = D;
                this.updater = e || B;
            }
            var H = (G.prototype = new F());
            H.constructor = G;
            C(H, E.prototype);
            H.isPureReactComponent = true;
            var I = Array.isArray;
            var J = Object.prototype.hasOwnProperty;
            var K = { current: null };
            var L = { key: true, ref: true, __self: true, __source: true };
            function M(a, b, e) {
                var d,
                    c = {},
                    k = null,
                    h = null;
                if (null != b)
                    for (d in (void 0 !== b.ref && (h = b.ref), void 0 !== b.key && (k = '' + b.key), b)) J.call(b, d) && !L.hasOwnProperty(d) && (c[d] = b[d]);
                var g = arguments.length - 2;
                if (1 === g) c.children = e;
                else if (1 < g) {
                    for (var f = Array(g), m = 0; m < g; m++) f[m] = arguments[m + 2];
                    c.children = f;
                }
                if (a && a.defaultProps) for (d in ((g = a.defaultProps), g)) void 0 === c[d] && (c[d] = g[d]);
                return { $$typeof: l, type: a, key: k, ref: h, props: c, _owner: K.current };
            }
            function N(a, b) {
                return { $$typeof: l, type: a.type, key: b, ref: a.ref, props: a.props, _owner: a._owner };
            }
            function O(a) {
                return 'object' === typeof a && null !== a && a.$$typeof === l;
            }
            function escape3(a) {
                var b = { '=': '=0', ':': '=2' };
                return (
                    '$' +
                    a.replace(/[=:]/g, function (a2) {
                        return b[a2];
                    })
                );
            }
            var P = /\/+/g;
            function Q(a, b) {
                return 'object' === typeof a && null !== a && null != a.key ? escape3('' + a.key) : b.toString(36);
            }
            function R(a, b, e, d, c) {
                var k = typeof a;
                if ('undefined' === k || 'boolean' === k) a = null;
                var h = false;
                if (null === a) h = true;
                else
                    switch (k) {
                        case 'string':
                        case 'number':
                            h = true;
                            break;
                        case 'object':
                            switch (a.$$typeof) {
                                case l:
                                case n:
                                    h = true;
                            }
                    }
                if (h)
                    return (
                        (h = a),
                        (c = c(h)),
                        (a = '' === d ? '.' + Q(h, 0) : d),
                        I(c)
                            ? ((e = ''),
                              null != a && (e = a.replace(P, '$&/') + '/'),
                              R(c, b, e, '', function (a2) {
                                  return a2;
                              }))
                            : null != c &&
                              (O(c) && (c = N(c, e + (!c.key || (h && h.key === c.key) ? '' : ('' + c.key).replace(P, '$&/') + '/') + a)), b.push(c)),
                        1
                    );
                h = 0;
                d = '' === d ? '.' : d + ':';
                if (I(a))
                    for (var g = 0; g < a.length; g++) {
                        k = a[g];
                        var f = d + Q(k, g);
                        h += R(k, b, e, f, c);
                    }
                else if (((f = A(a)), 'function' === typeof f))
                    for (a = f.call(a), g = 0; !(k = a.next()).done; ) (k = k.value), (f = d + Q(k, g++)), (h += R(k, b, e, f, c));
                else if ('object' === k)
                    throw (
                        ((b = String(a)),
                        Error(
                            'Objects are not valid as a React child (found: ' +
                                ('[object Object]' === b ? 'object with keys {' + Object.keys(a).join(', ') + '}' : b) +
                                '). If you meant to render a collection of children, use an array instead.'
                        ))
                    );
                return h;
            }
            function S(a, b, e) {
                if (null == a) return a;
                var d = [],
                    c = 0;
                R(a, d, '', '', function (a2) {
                    return b.call(e, a2, c++);
                });
                return d;
            }
            function T(a) {
                if (-1 === a._status) {
                    var b = a._result;
                    b = b();
                    b.then(
                        function (b2) {
                            if (0 === a._status || -1 === a._status) (a._status = 1), (a._result = b2);
                        },
                        function (b2) {
                            if (0 === a._status || -1 === a._status) (a._status = 2), (a._result = b2);
                        }
                    );
                    -1 === a._status && ((a._status = 0), (a._result = b));
                }
                if (1 === a._status) return a._result.default;
                throw a._result;
            }
            var U = { current: null };
            var V = { transition: null };
            var W = { ReactCurrentDispatcher: U, ReactCurrentBatchConfig: V, ReactCurrentOwner: K };
            exports.Children = {
                map: S,
                forEach: function (a, b, e) {
                    S(
                        a,
                        function () {
                            b.apply(this, arguments);
                        },
                        e
                    );
                },
                count: function (a) {
                    var b = 0;
                    S(a, function () {
                        b++;
                    });
                    return b;
                },
                toArray: function (a) {
                    return (
                        S(a, function (a2) {
                            return a2;
                        }) || []
                    );
                },
                only: function (a) {
                    if (!O(a)) throw Error('React.Children.only expected to receive a single React element child.');
                    return a;
                }
            };
            exports.Component = E;
            exports.Fragment = p;
            exports.Profiler = r;
            exports.PureComponent = G;
            exports.StrictMode = q;
            exports.Suspense = w;
            exports.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = W;
            exports.cloneElement = function (a, b, e) {
                if (null === a || void 0 === a) throw Error('React.cloneElement(...): The argument must be a React element, but you passed ' + a + '.');
                var d = C({}, a.props),
                    c = a.key,
                    k = a.ref,
                    h = a._owner;
                if (null != b) {
                    void 0 !== b.ref && ((k = b.ref), (h = K.current));
                    void 0 !== b.key && (c = '' + b.key);
                    if (a.type && a.type.defaultProps) var g = a.type.defaultProps;
                    for (f in b) J.call(b, f) && !L.hasOwnProperty(f) && (d[f] = void 0 === b[f] && void 0 !== g ? g[f] : b[f]);
                }
                var f = arguments.length - 2;
                if (1 === f) d.children = e;
                else if (1 < f) {
                    g = Array(f);
                    for (var m = 0; m < f; m++) g[m] = arguments[m + 2];
                    d.children = g;
                }
                return { $$typeof: l, type: a.type, key: c, ref: k, props: d, _owner: h };
            };
            exports.createContext = function (a) {
                a = {
                    $$typeof: u,
                    _currentValue: a,
                    _currentValue2: a,
                    _threadCount: 0,
                    Provider: null,
                    Consumer: null,
                    _defaultValue: null,
                    _globalName: null
                };
                a.Provider = { $$typeof: t, _context: a };
                return (a.Consumer = a);
            };
            exports.createElement = M;
            exports.createFactory = function (a) {
                var b = M.bind(null, a);
                b.type = a;
                return b;
            };
            exports.createRef = function () {
                return { current: null };
            };
            exports.forwardRef = function (a) {
                return { $$typeof: v, render: a };
            };
            exports.isValidElement = O;
            exports.lazy = function (a) {
                return { $$typeof: y, _payload: { _status: -1, _result: a }, _init: T };
            };
            exports.memo = function (a, b) {
                return { $$typeof: x, type: a, compare: void 0 === b ? null : b };
            };
            exports.startTransition = function (a) {
                var b = V.transition;
                V.transition = {};
                try {
                    a();
                } finally {
                    V.transition = b;
                }
            };
            exports.unstable_act = function () {
                throw Error('act(...) is not supported in production builds of React.');
            };
            exports.useCallback = function (a, b) {
                return U.current.useCallback(a, b);
            };
            exports.useContext = function (a) {
                return U.current.useContext(a);
            };
            exports.useDebugValue = function () {};
            exports.useDeferredValue = function (a) {
                return U.current.useDeferredValue(a);
            };
            exports.useEffect = function (a, b) {
                return U.current.useEffect(a, b);
            };
            exports.useId = function () {
                return U.current.useId();
            };
            exports.useImperativeHandle = function (a, b, e) {
                return U.current.useImperativeHandle(a, b, e);
            };
            exports.useInsertionEffect = function (a, b) {
                return U.current.useInsertionEffect(a, b);
            };
            exports.useLayoutEffect = function (a, b) {
                return U.current.useLayoutEffect(a, b);
            };
            exports.useMemo = function (a, b) {
                return U.current.useMemo(a, b);
            };
            exports.useReducer = function (a, b, e) {
                return U.current.useReducer(a, b, e);
            };
            exports.useRef = function (a) {
                return U.current.useRef(a);
            };
            exports.useState = function (a) {
                return U.current.useState(a);
            };
            exports.useSyncExternalStore = function (a, b, e) {
                return U.current.useSyncExternalStore(a, b, e);
            };
            exports.useTransition = function () {
                return U.current.useTransition();
            };
            exports.version = '18.2.0';
        }
    });

    // ../../node_modules/react/cjs/react.development.js
    var require_react_development = __commonJS({
        '../../node_modules/react/cjs/react.development.js'(exports, module) {
            if (process.env.NODE_ENV !== 'production') {
                (function () {
                    if (
                        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ !== 'undefined' &&
                        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart === 'function'
                    ) {
                        __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
                    }
                    var ReactVersion = '18.2.0';
                    var REACT_ELEMENT_TYPE = Symbol.for('react.element');
                    var REACT_PORTAL_TYPE = Symbol.for('react.portal');
                    var REACT_FRAGMENT_TYPE = Symbol.for('react.fragment');
                    var REACT_STRICT_MODE_TYPE = Symbol.for('react.strict_mode');
                    var REACT_PROFILER_TYPE = Symbol.for('react.profiler');
                    var REACT_PROVIDER_TYPE = Symbol.for('react.provider');
                    var REACT_CONTEXT_TYPE = Symbol.for('react.context');
                    var REACT_FORWARD_REF_TYPE = Symbol.for('react.forward_ref');
                    var REACT_SUSPENSE_TYPE = Symbol.for('react.suspense');
                    var REACT_SUSPENSE_LIST_TYPE = Symbol.for('react.suspense_list');
                    var REACT_MEMO_TYPE = Symbol.for('react.memo');
                    var REACT_LAZY_TYPE = Symbol.for('react.lazy');
                    var REACT_OFFSCREEN_TYPE = Symbol.for('react.offscreen');
                    var MAYBE_ITERATOR_SYMBOL = Symbol.iterator;
                    var FAUX_ITERATOR_SYMBOL = '@@iterator';
                    function getIteratorFn(maybeIterable) {
                        if (maybeIterable === null || typeof maybeIterable !== 'object') {
                            return null;
                        }
                        var maybeIterator = (MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL]) || maybeIterable[FAUX_ITERATOR_SYMBOL];
                        if (typeof maybeIterator === 'function') {
                            return maybeIterator;
                        }
                        return null;
                    }
                    var ReactCurrentDispatcher = {
                        /**
                         * @internal
                         * @type {ReactComponent}
                         */
                        current: null
                    };
                    var ReactCurrentBatchConfig = {
                        transition: null
                    };
                    var ReactCurrentActQueue = {
                        current: null,
                        // Used to reproduce behavior of `batchedUpdates` in legacy mode.
                        isBatchingLegacy: false,
                        didScheduleLegacyUpdate: false
                    };
                    var ReactCurrentOwner = {
                        /**
                         * @internal
                         * @type {ReactComponent}
                         */
                        current: null
                    };
                    var ReactDebugCurrentFrame = {};
                    var currentExtraStackFrame = null;
                    function setExtraStackFrame(stack) {
                        {
                            currentExtraStackFrame = stack;
                        }
                    }
                    {
                        ReactDebugCurrentFrame.setExtraStackFrame = function (stack) {
                            {
                                currentExtraStackFrame = stack;
                            }
                        };
                        ReactDebugCurrentFrame.getCurrentStack = null;
                        ReactDebugCurrentFrame.getStackAddendum = function () {
                            var stack = '';
                            if (currentExtraStackFrame) {
                                stack += currentExtraStackFrame;
                            }
                            var impl = ReactDebugCurrentFrame.getCurrentStack;
                            if (impl) {
                                stack += impl() || '';
                            }
                            return stack;
                        };
                    }
                    var enableScopeAPI = false;
                    var enableCacheElement = false;
                    var enableTransitionTracing = false;
                    var enableLegacyHidden = false;
                    var enableDebugTracing = false;
                    var ReactSharedInternals = {
                        ReactCurrentDispatcher,
                        ReactCurrentBatchConfig,
                        ReactCurrentOwner
                    };
                    {
                        ReactSharedInternals.ReactDebugCurrentFrame = ReactDebugCurrentFrame;
                        ReactSharedInternals.ReactCurrentActQueue = ReactCurrentActQueue;
                    }
                    function warn(format3) {
                        {
                            {
                                for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
                                    args[_key - 1] = arguments[_key];
                                }
                                printWarning('warn', format3, args);
                            }
                        }
                    }
                    function error2(format3) {
                        {
                            {
                                for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
                                    args[_key2 - 1] = arguments[_key2];
                                }
                                printWarning('error', format3, args);
                            }
                        }
                    }
                    function printWarning(level, format3, args) {
                        {
                            var ReactDebugCurrentFrame2 = ReactSharedInternals.ReactDebugCurrentFrame;
                            var stack = ReactDebugCurrentFrame2.getStackAddendum();
                            if (stack !== '') {
                                format3 += '%s';
                                args = args.concat([stack]);
                            }
                            var argsWithFormat = args.map(function (item) {
                                return String(item);
                            });
                            argsWithFormat.unshift('Warning: ' + format3);
                            Function.prototype.apply.call(console[level], console, argsWithFormat);
                        }
                    }
                    var didWarnStateUpdateForUnmountedComponent = {};
                    function warnNoop(publicInstance, callerName) {
                        {
                            var _constructor = publicInstance.constructor;
                            var componentName = (_constructor && (_constructor.displayName || _constructor.name)) || 'ReactClass';
                            var warningKey = componentName + '.' + callerName;
                            if (didWarnStateUpdateForUnmountedComponent[warningKey]) {
                                return;
                            }
                            error2(
                                "Can't call %s on a component that is not yet mounted. This is a no-op, but it might indicate a bug in your application. Instead, assign to `this.state` directly or define a `state = {};` class property with the desired state in the %s component.",
                                callerName,
                                componentName
                            );
                            didWarnStateUpdateForUnmountedComponent[warningKey] = true;
                        }
                    }
                    var ReactNoopUpdateQueue = {
                        /**
                         * Checks whether or not this composite component is mounted.
                         * @param {ReactClass} publicInstance The instance we want to test.
                         * @return {boolean} True if mounted, false otherwise.
                         * @protected
                         * @final
                         */
                        isMounted: function (publicInstance) {
                            return false;
                        },
                        /**
                         * Forces an update. This should only be invoked when it is known with
                         * certainty that we are **not** in a DOM transaction.
                         *
                         * You may want to call this when you know that some deeper aspect of the
                         * component's state has changed but `setState` was not called.
                         *
                         * This will not invoke `shouldComponentUpdate`, but it will invoke
                         * `componentWillUpdate` and `componentDidUpdate`.
                         *
                         * @param {ReactClass} publicInstance The instance that should rerender.
                         * @param {?function} callback Called after component is updated.
                         * @param {?string} callerName name of the calling function in the public API.
                         * @internal
                         */
                        enqueueForceUpdate: function (publicInstance, callback, callerName) {
                            warnNoop(publicInstance, 'forceUpdate');
                        },
                        /**
                         * Replaces all of the state. Always use this or `setState` to mutate state.
                         * You should treat `this.state` as immutable.
                         *
                         * There is no guarantee that `this.state` will be immediately updated, so
                         * accessing `this.state` after calling this method may return the old value.
                         *
                         * @param {ReactClass} publicInstance The instance that should rerender.
                         * @param {object} completeState Next state.
                         * @param {?function} callback Called after component is updated.
                         * @param {?string} callerName name of the calling function in the public API.
                         * @internal
                         */
                        enqueueReplaceState: function (publicInstance, completeState, callback, callerName) {
                            warnNoop(publicInstance, 'replaceState');
                        },
                        /**
                         * Sets a subset of the state. This only exists because _pendingState is
                         * internal. This provides a merging strategy that is not available to deep
                         * properties which is confusing. TODO: Expose pendingState or don't use it
                         * during the merge.
                         *
                         * @param {ReactClass} publicInstance The instance that should rerender.
                         * @param {object} partialState Next partial state to be merged with state.
                         * @param {?function} callback Called after component is updated.
                         * @param {?string} Name of the calling function in the public API.
                         * @internal
                         */
                        enqueueSetState: function (publicInstance, partialState, callback, callerName) {
                            warnNoop(publicInstance, 'setState');
                        }
                    };
                    var assign3 = Object.assign;
                    var emptyObject = {};
                    {
                        Object.freeze(emptyObject);
                    }
                    function Component(props, context, updater) {
                        this.props = props;
                        this.context = context;
                        this.refs = emptyObject;
                        this.updater = updater || ReactNoopUpdateQueue;
                    }
                    Component.prototype.isReactComponent = {};
                    Component.prototype.setState = function (partialState, callback) {
                        if (typeof partialState !== 'object' && typeof partialState !== 'function' && partialState != null) {
                            throw new Error(
                                'setState(...): takes an object of state variables to update or a function which returns an object of state variables.'
                            );
                        }
                        this.updater.enqueueSetState(this, partialState, callback, 'setState');
                    };
                    Component.prototype.forceUpdate = function (callback) {
                        this.updater.enqueueForceUpdate(this, callback, 'forceUpdate');
                    };
                    {
                        var deprecatedAPIs = {
                            isMounted: [
                                'isMounted',
                                'Instead, make sure to clean up subscriptions and pending requests in componentWillUnmount to prevent memory leaks.'
                            ],
                            replaceState: ['replaceState', 'Refactor your code to use setState instead (see https://github.com/facebook/react/issues/3236).']
                        };
                        var defineDeprecationWarning = function (methodName, info) {
                            Object.defineProperty(Component.prototype, methodName, {
                                get: function () {
                                    warn('%s(...) is deprecated in plain JavaScript React classes. %s', info[0], info[1]);
                                    return void 0;
                                }
                            });
                        };
                        for (var fnName in deprecatedAPIs) {
                            if (deprecatedAPIs.hasOwnProperty(fnName)) {
                                defineDeprecationWarning(fnName, deprecatedAPIs[fnName]);
                            }
                        }
                    }
                    function ComponentDummy() {}
                    ComponentDummy.prototype = Component.prototype;
                    function PureComponent(props, context, updater) {
                        this.props = props;
                        this.context = context;
                        this.refs = emptyObject;
                        this.updater = updater || ReactNoopUpdateQueue;
                    }
                    var pureComponentPrototype = (PureComponent.prototype = new ComponentDummy());
                    pureComponentPrototype.constructor = PureComponent;
                    assign3(pureComponentPrototype, Component.prototype);
                    pureComponentPrototype.isPureReactComponent = true;
                    function createRef() {
                        var refObject = {
                            current: null
                        };
                        {
                            Object.seal(refObject);
                        }
                        return refObject;
                    }
                    var isArrayImpl = Array.isArray;
                    function isArray(a) {
                        return isArrayImpl(a);
                    }
                    function typeName(value) {
                        {
                            var hasToStringTag = typeof Symbol === 'function' && Symbol.toStringTag;
                            var type = (hasToStringTag && value[Symbol.toStringTag]) || value.constructor.name || 'Object';
                            return type;
                        }
                    }
                    function willCoercionThrow(value) {
                        {
                            try {
                                testStringCoercion(value);
                                return false;
                            } catch (e) {
                                return true;
                            }
                        }
                    }
                    function testStringCoercion(value) {
                        return '' + value;
                    }
                    function checkKeyStringCoercion(value) {
                        {
                            if (willCoercionThrow(value)) {
                                error2(
                                    'The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.',
                                    typeName(value)
                                );
                                return testStringCoercion(value);
                            }
                        }
                    }
                    function getWrappedName(outerType, innerType, wrapperName) {
                        var displayName = outerType.displayName;
                        if (displayName) {
                            return displayName;
                        }
                        var functionName = innerType.displayName || innerType.name || '';
                        return functionName !== '' ? wrapperName + '(' + functionName + ')' : wrapperName;
                    }
                    function getContextName(type) {
                        return type.displayName || 'Context';
                    }
                    function getComponentNameFromType(type) {
                        if (type == null) {
                            return null;
                        }
                        {
                            if (typeof type.tag === 'number') {
                                error2('Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue.');
                            }
                        }
                        if (typeof type === 'function') {
                            return type.displayName || type.name || null;
                        }
                        if (typeof type === 'string') {
                            return type;
                        }
                        switch (type) {
                            case REACT_FRAGMENT_TYPE:
                                return 'Fragment';
                            case REACT_PORTAL_TYPE:
                                return 'Portal';
                            case REACT_PROFILER_TYPE:
                                return 'Profiler';
                            case REACT_STRICT_MODE_TYPE:
                                return 'StrictMode';
                            case REACT_SUSPENSE_TYPE:
                                return 'Suspense';
                            case REACT_SUSPENSE_LIST_TYPE:
                                return 'SuspenseList';
                        }
                        if (typeof type === 'object') {
                            switch (type.$$typeof) {
                                case REACT_CONTEXT_TYPE:
                                    var context = type;
                                    return getContextName(context) + '.Consumer';
                                case REACT_PROVIDER_TYPE:
                                    var provider = type;
                                    return getContextName(provider._context) + '.Provider';
                                case REACT_FORWARD_REF_TYPE:
                                    return getWrappedName(type, type.render, 'ForwardRef');
                                case REACT_MEMO_TYPE:
                                    var outerName = type.displayName || null;
                                    if (outerName !== null) {
                                        return outerName;
                                    }
                                    return getComponentNameFromType(type.type) || 'Memo';
                                case REACT_LAZY_TYPE: {
                                    var lazyComponent = type;
                                    var payload = lazyComponent._payload;
                                    var init = lazyComponent._init;
                                    try {
                                        return getComponentNameFromType(init(payload));
                                    } catch (x) {
                                        return null;
                                    }
                                }
                            }
                        }
                        return null;
                    }
                    var hasOwnProperty = Object.prototype.hasOwnProperty;
                    var RESERVED_PROPS = {
                        key: true,
                        ref: true,
                        __self: true,
                        __source: true
                    };
                    var specialPropKeyWarningShown, specialPropRefWarningShown, didWarnAboutStringRefs;
                    {
                        didWarnAboutStringRefs = {};
                    }
                    function hasValidRef(config2) {
                        {
                            if (hasOwnProperty.call(config2, 'ref')) {
                                var getter = Object.getOwnPropertyDescriptor(config2, 'ref').get;
                                if (getter && getter.isReactWarning) {
                                    return false;
                                }
                            }
                        }
                        return config2.ref !== void 0;
                    }
                    function hasValidKey(config2) {
                        {
                            if (hasOwnProperty.call(config2, 'key')) {
                                var getter = Object.getOwnPropertyDescriptor(config2, 'key').get;
                                if (getter && getter.isReactWarning) {
                                    return false;
                                }
                            }
                        }
                        return config2.key !== void 0;
                    }
                    function defineKeyPropWarningGetter(props, displayName) {
                        var warnAboutAccessingKey = function () {
                            {
                                if (!specialPropKeyWarningShown) {
                                    specialPropKeyWarningShown = true;
                                    error2(
                                        '%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)',
                                        displayName
                                    );
                                }
                            }
                        };
                        warnAboutAccessingKey.isReactWarning = true;
                        Object.defineProperty(props, 'key', {
                            get: warnAboutAccessingKey,
                            configurable: true
                        });
                    }
                    function defineRefPropWarningGetter(props, displayName) {
                        var warnAboutAccessingRef = function () {
                            {
                                if (!specialPropRefWarningShown) {
                                    specialPropRefWarningShown = true;
                                    error2(
                                        '%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)',
                                        displayName
                                    );
                                }
                            }
                        };
                        warnAboutAccessingRef.isReactWarning = true;
                        Object.defineProperty(props, 'ref', {
                            get: warnAboutAccessingRef,
                            configurable: true
                        });
                    }
                    function warnIfStringRefCannotBeAutoConverted(config2) {
                        {
                            if (
                                typeof config2.ref === 'string' &&
                                ReactCurrentOwner.current &&
                                config2.__self &&
                                ReactCurrentOwner.current.stateNode !== config2.__self
                            ) {
                                var componentName = getComponentNameFromType(ReactCurrentOwner.current.type);
                                if (!didWarnAboutStringRefs[componentName]) {
                                    error2(
                                        'Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref',
                                        componentName,
                                        config2.ref
                                    );
                                    didWarnAboutStringRefs[componentName] = true;
                                }
                            }
                        }
                    }
                    var ReactElement = function (type, key, ref, self, source, owner, props) {
                        var element = {
                            // This tag allows us to uniquely identify this as a React Element
                            $$typeof: REACT_ELEMENT_TYPE,
                            // Built-in properties that belong on the element
                            type,
                            key,
                            ref,
                            props,
                            // Record the component responsible for creating this element.
                            _owner: owner
                        };
                        {
                            element._store = {};
                            Object.defineProperty(element._store, 'validated', {
                                configurable: false,
                                enumerable: false,
                                writable: true,
                                value: false
                            });
                            Object.defineProperty(element, '_self', {
                                configurable: false,
                                enumerable: false,
                                writable: false,
                                value: self
                            });
                            Object.defineProperty(element, '_source', {
                                configurable: false,
                                enumerable: false,
                                writable: false,
                                value: source
                            });
                            if (Object.freeze) {
                                Object.freeze(element.props);
                                Object.freeze(element);
                            }
                        }
                        return element;
                    };
                    function createElement(type, config2, children) {
                        var propName;
                        var props = {};
                        var key = null;
                        var ref = null;
                        var self = null;
                        var source = null;
                        if (config2 != null) {
                            if (hasValidRef(config2)) {
                                ref = config2.ref;
                                {
                                    warnIfStringRefCannotBeAutoConverted(config2);
                                }
                            }
                            if (hasValidKey(config2)) {
                                {
                                    checkKeyStringCoercion(config2.key);
                                }
                                key = '' + config2.key;
                            }
                            self = config2.__self === void 0 ? null : config2.__self;
                            source = config2.__source === void 0 ? null : config2.__source;
                            for (propName in config2) {
                                if (hasOwnProperty.call(config2, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
                                    props[propName] = config2[propName];
                                }
                            }
                        }
                        var childrenLength = arguments.length - 2;
                        if (childrenLength === 1) {
                            props.children = children;
                        } else if (childrenLength > 1) {
                            var childArray = Array(childrenLength);
                            for (var i = 0; i < childrenLength; i++) {
                                childArray[i] = arguments[i + 2];
                            }
                            {
                                if (Object.freeze) {
                                    Object.freeze(childArray);
                                }
                            }
                            props.children = childArray;
                        }
                        if (type && type.defaultProps) {
                            var defaultProps = type.defaultProps;
                            for (propName in defaultProps) {
                                if (props[propName] === void 0) {
                                    props[propName] = defaultProps[propName];
                                }
                            }
                        }
                        {
                            if (key || ref) {
                                var displayName = typeof type === 'function' ? type.displayName || type.name || 'Unknown' : type;
                                if (key) {
                                    defineKeyPropWarningGetter(props, displayName);
                                }
                                if (ref) {
                                    defineRefPropWarningGetter(props, displayName);
                                }
                            }
                        }
                        return ReactElement(type, key, ref, self, source, ReactCurrentOwner.current, props);
                    }
                    function cloneAndReplaceKey(oldElement, newKey) {
                        var newElement = ReactElement(
                            oldElement.type,
                            newKey,
                            oldElement.ref,
                            oldElement._self,
                            oldElement._source,
                            oldElement._owner,
                            oldElement.props
                        );
                        return newElement;
                    }
                    function cloneElement(element, config2, children) {
                        if (element === null || element === void 0) {
                            throw new Error('React.cloneElement(...): The argument must be a React element, but you passed ' + element + '.');
                        }
                        var propName;
                        var props = assign3({}, element.props);
                        var key = element.key;
                        var ref = element.ref;
                        var self = element._self;
                        var source = element._source;
                        var owner = element._owner;
                        if (config2 != null) {
                            if (hasValidRef(config2)) {
                                ref = config2.ref;
                                owner = ReactCurrentOwner.current;
                            }
                            if (hasValidKey(config2)) {
                                {
                                    checkKeyStringCoercion(config2.key);
                                }
                                key = '' + config2.key;
                            }
                            var defaultProps;
                            if (element.type && element.type.defaultProps) {
                                defaultProps = element.type.defaultProps;
                            }
                            for (propName in config2) {
                                if (hasOwnProperty.call(config2, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
                                    if (config2[propName] === void 0 && defaultProps !== void 0) {
                                        props[propName] = defaultProps[propName];
                                    } else {
                                        props[propName] = config2[propName];
                                    }
                                }
                            }
                        }
                        var childrenLength = arguments.length - 2;
                        if (childrenLength === 1) {
                            props.children = children;
                        } else if (childrenLength > 1) {
                            var childArray = Array(childrenLength);
                            for (var i = 0; i < childrenLength; i++) {
                                childArray[i] = arguments[i + 2];
                            }
                            props.children = childArray;
                        }
                        return ReactElement(element.type, key, ref, self, source, owner, props);
                    }
                    function isValidElement(object) {
                        return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
                    }
                    var SEPARATOR = '.';
                    var SUBSEPARATOR = ':';
                    function escape3(key) {
                        var escapeRegex = /[=:]/g;
                        var escaperLookup = {
                            '=': '=0',
                            ':': '=2'
                        };
                        var escapedString = key.replace(escapeRegex, function (match2) {
                            return escaperLookup[match2];
                        });
                        return '$' + escapedString;
                    }
                    var didWarnAboutMaps = false;
                    var userProvidedKeyEscapeRegex = /\/+/g;
                    function escapeUserProvidedKey(text2) {
                        return text2.replace(userProvidedKeyEscapeRegex, '$&/');
                    }
                    function getElementKey(element, index) {
                        if (typeof element === 'object' && element !== null && element.key != null) {
                            {
                                checkKeyStringCoercion(element.key);
                            }
                            return escape3('' + element.key);
                        }
                        return index.toString(36);
                    }
                    function mapIntoArray(children, array, escapedPrefix, nameSoFar, callback) {
                        var type = typeof children;
                        if (type === 'undefined' || type === 'boolean') {
                            children = null;
                        }
                        var invokeCallback = false;
                        if (children === null) {
                            invokeCallback = true;
                        } else {
                            switch (type) {
                                case 'string':
                                case 'number':
                                    invokeCallback = true;
                                    break;
                                case 'object':
                                    switch (children.$$typeof) {
                                        case REACT_ELEMENT_TYPE:
                                        case REACT_PORTAL_TYPE:
                                            invokeCallback = true;
                                    }
                            }
                        }
                        if (invokeCallback) {
                            var _child = children;
                            var mappedChild = callback(_child);
                            var childKey = nameSoFar === '' ? SEPARATOR + getElementKey(_child, 0) : nameSoFar;
                            if (isArray(mappedChild)) {
                                var escapedChildKey = '';
                                if (childKey != null) {
                                    escapedChildKey = escapeUserProvidedKey(childKey) + '/';
                                }
                                mapIntoArray(mappedChild, array, escapedChildKey, '', function (c) {
                                    return c;
                                });
                            } else if (mappedChild != null) {
                                if (isValidElement(mappedChild)) {
                                    {
                                        if (mappedChild.key && (!_child || _child.key !== mappedChild.key)) {
                                            checkKeyStringCoercion(mappedChild.key);
                                        }
                                    }
                                    mappedChild = cloneAndReplaceKey(
                                        mappedChild,
                                        // Keep both the (mapped) and old keys if they differ, just as
                                        // traverseAllChildren used to do for objects as children
                                        escapedPrefix + // $FlowFixMe Flow incorrectly thinks React.Portal doesn't have a key
                                            (mappedChild.key && (!_child || _child.key !== mappedChild.key)
                                                ? // $FlowFixMe Flow incorrectly thinks existing element's key can be a number
                                                  // eslint-disable-next-line react-internal/safe-string-coercion
                                                  escapeUserProvidedKey('' + mappedChild.key) + '/'
                                                : '') +
                                            childKey
                                    );
                                }
                                array.push(mappedChild);
                            }
                            return 1;
                        }
                        var child;
                        var nextName;
                        var subtreeCount = 0;
                        var nextNamePrefix = nameSoFar === '' ? SEPARATOR : nameSoFar + SUBSEPARATOR;
                        if (isArray(children)) {
                            for (var i = 0; i < children.length; i++) {
                                child = children[i];
                                nextName = nextNamePrefix + getElementKey(child, i);
                                subtreeCount += mapIntoArray(child, array, escapedPrefix, nextName, callback);
                            }
                        } else {
                            var iteratorFn = getIteratorFn(children);
                            if (typeof iteratorFn === 'function') {
                                var iterableChildren = children;
                                {
                                    if (iteratorFn === iterableChildren.entries) {
                                        if (!didWarnAboutMaps) {
                                            warn('Using Maps as children is not supported. Use an array of keyed ReactElements instead.');
                                        }
                                        didWarnAboutMaps = true;
                                    }
                                }
                                var iterator = iteratorFn.call(iterableChildren);
                                var step;
                                var ii = 0;
                                while (!(step = iterator.next()).done) {
                                    child = step.value;
                                    nextName = nextNamePrefix + getElementKey(child, ii++);
                                    subtreeCount += mapIntoArray(child, array, escapedPrefix, nextName, callback);
                                }
                            } else if (type === 'object') {
                                var childrenString = String(children);
                                throw new Error(
                                    'Objects are not valid as a React child (found: ' +
                                        (childrenString === '[object Object]'
                                            ? 'object with keys {' + Object.keys(children).join(', ') + '}'
                                            : childrenString) +
                                        '). If you meant to render a collection of children, use an array instead.'
                                );
                            }
                        }
                        return subtreeCount;
                    }
                    function mapChildren(children, func, context) {
                        if (children == null) {
                            return children;
                        }
                        var result = [];
                        var count = 0;
                        mapIntoArray(children, result, '', '', function (child) {
                            return func.call(context, child, count++);
                        });
                        return result;
                    }
                    function countChildren(children) {
                        var n = 0;
                        mapChildren(children, function () {
                            n++;
                        });
                        return n;
                    }
                    function forEachChildren(children, forEachFunc, forEachContext) {
                        mapChildren(
                            children,
                            function () {
                                forEachFunc.apply(this, arguments);
                            },
                            forEachContext
                        );
                    }
                    function toArray(children) {
                        return (
                            mapChildren(children, function (child) {
                                return child;
                            }) || []
                        );
                    }
                    function onlyChild(children) {
                        if (!isValidElement(children)) {
                            throw new Error('React.Children.only expected to receive a single React element child.');
                        }
                        return children;
                    }
                    function createContext(defaultValue) {
                        var context = {
                            $$typeof: REACT_CONTEXT_TYPE,
                            // As a workaround to support multiple concurrent renderers, we categorize
                            // some renderers as primary and others as secondary. We only expect
                            // there to be two concurrent renderers at most: React Native (primary) and
                            // Fabric (secondary); React DOM (primary) and React ART (secondary).
                            // Secondary renderers store their context values on separate fields.
                            _currentValue: defaultValue,
                            _currentValue2: defaultValue,
                            // Used to track how many concurrent renderers this context currently
                            // supports within in a single renderer. Such as parallel server rendering.
                            _threadCount: 0,
                            // These are circular
                            Provider: null,
                            Consumer: null,
                            // Add these to use same hidden class in VM as ServerContext
                            _defaultValue: null,
                            _globalName: null
                        };
                        context.Provider = {
                            $$typeof: REACT_PROVIDER_TYPE,
                            _context: context
                        };
                        var hasWarnedAboutUsingNestedContextConsumers = false;
                        var hasWarnedAboutUsingConsumerProvider = false;
                        var hasWarnedAboutDisplayNameOnConsumer = false;
                        {
                            var Consumer = {
                                $$typeof: REACT_CONTEXT_TYPE,
                                _context: context
                            };
                            Object.defineProperties(Consumer, {
                                Provider: {
                                    get: function () {
                                        if (!hasWarnedAboutUsingConsumerProvider) {
                                            hasWarnedAboutUsingConsumerProvider = true;
                                            error2(
                                                'Rendering <Context.Consumer.Provider> is not supported and will be removed in a future major release. Did you mean to render <Context.Provider> instead?'
                                            );
                                        }
                                        return context.Provider;
                                    },
                                    set: function (_Provider) {
                                        context.Provider = _Provider;
                                    }
                                },
                                _currentValue: {
                                    get: function () {
                                        return context._currentValue;
                                    },
                                    set: function (_currentValue) {
                                        context._currentValue = _currentValue;
                                    }
                                },
                                _currentValue2: {
                                    get: function () {
                                        return context._currentValue2;
                                    },
                                    set: function (_currentValue2) {
                                        context._currentValue2 = _currentValue2;
                                    }
                                },
                                _threadCount: {
                                    get: function () {
                                        return context._threadCount;
                                    },
                                    set: function (_threadCount) {
                                        context._threadCount = _threadCount;
                                    }
                                },
                                Consumer: {
                                    get: function () {
                                        if (!hasWarnedAboutUsingNestedContextConsumers) {
                                            hasWarnedAboutUsingNestedContextConsumers = true;
                                            error2(
                                                'Rendering <Context.Consumer.Consumer> is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?'
                                            );
                                        }
                                        return context.Consumer;
                                    }
                                },
                                displayName: {
                                    get: function () {
                                        return context.displayName;
                                    },
                                    set: function (displayName) {
                                        if (!hasWarnedAboutDisplayNameOnConsumer) {
                                            warn(
                                                "Setting `displayName` on Context.Consumer has no effect. You should set it directly on the context with Context.displayName = '%s'.",
                                                displayName
                                            );
                                            hasWarnedAboutDisplayNameOnConsumer = true;
                                        }
                                    }
                                }
                            });
                            context.Consumer = Consumer;
                        }
                        {
                            context._currentRenderer = null;
                            context._currentRenderer2 = null;
                        }
                        return context;
                    }
                    var Uninitialized = -1;
                    var Pending = 0;
                    var Resolved = 1;
                    var Rejected = 2;
                    function lazyInitializer(payload) {
                        if (payload._status === Uninitialized) {
                            var ctor = payload._result;
                            var thenable = ctor();
                            thenable.then(
                                function (moduleObject2) {
                                    if (payload._status === Pending || payload._status === Uninitialized) {
                                        var resolved = payload;
                                        resolved._status = Resolved;
                                        resolved._result = moduleObject2;
                                    }
                                },
                                function (error3) {
                                    if (payload._status === Pending || payload._status === Uninitialized) {
                                        var rejected = payload;
                                        rejected._status = Rejected;
                                        rejected._result = error3;
                                    }
                                }
                            );
                            if (payload._status === Uninitialized) {
                                var pending = payload;
                                pending._status = Pending;
                                pending._result = thenable;
                            }
                        }
                        if (payload._status === Resolved) {
                            var moduleObject = payload._result;
                            {
                                if (moduleObject === void 0) {
                                    error2(
                                        "lazy: Expected the result of a dynamic import() call. Instead received: %s\n\nYour code should look like: \n  const MyComponent = lazy(() => import('./MyComponent'))\n\nDid you accidentally put curly braces around the import?",
                                        moduleObject
                                    );
                                }
                            }
                            {
                                if (!('default' in moduleObject)) {
                                    error2(
                                        "lazy: Expected the result of a dynamic import() call. Instead received: %s\n\nYour code should look like: \n  const MyComponent = lazy(() => import('./MyComponent'))",
                                        moduleObject
                                    );
                                }
                            }
                            return moduleObject.default;
                        } else {
                            throw payload._result;
                        }
                    }
                    function lazy(ctor) {
                        var payload = {
                            // We use these fields to store the result.
                            _status: Uninitialized,
                            _result: ctor
                        };
                        var lazyType = {
                            $$typeof: REACT_LAZY_TYPE,
                            _payload: payload,
                            _init: lazyInitializer
                        };
                        {
                            var defaultProps;
                            var propTypes;
                            Object.defineProperties(lazyType, {
                                defaultProps: {
                                    configurable: true,
                                    get: function () {
                                        return defaultProps;
                                    },
                                    set: function (newDefaultProps) {
                                        error2(
                                            'React.lazy(...): It is not supported to assign `defaultProps` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it.'
                                        );
                                        defaultProps = newDefaultProps;
                                        Object.defineProperty(lazyType, 'defaultProps', {
                                            enumerable: true
                                        });
                                    }
                                },
                                propTypes: {
                                    configurable: true,
                                    get: function () {
                                        return propTypes;
                                    },
                                    set: function (newPropTypes) {
                                        error2(
                                            'React.lazy(...): It is not supported to assign `propTypes` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it.'
                                        );
                                        propTypes = newPropTypes;
                                        Object.defineProperty(lazyType, 'propTypes', {
                                            enumerable: true
                                        });
                                    }
                                }
                            });
                        }
                        return lazyType;
                    }
                    function forwardRef(render) {
                        {
                            if (render != null && render.$$typeof === REACT_MEMO_TYPE) {
                                error2(
                                    'forwardRef requires a render function but received a `memo` component. Instead of forwardRef(memo(...)), use memo(forwardRef(...)).'
                                );
                            } else if (typeof render !== 'function') {
                                error2('forwardRef requires a render function but was given %s.', render === null ? 'null' : typeof render);
                            } else {
                                if (render.length !== 0 && render.length !== 2) {
                                    error2(
                                        'forwardRef render functions accept exactly two parameters: props and ref. %s',
                                        render.length === 1 ? 'Did you forget to use the ref parameter?' : 'Any additional parameter will be undefined.'
                                    );
                                }
                            }
                            if (render != null) {
                                if (render.defaultProps != null || render.propTypes != null) {
                                    error2(
                                        'forwardRef render functions do not support propTypes or defaultProps. Did you accidentally pass a React component?'
                                    );
                                }
                            }
                        }
                        var elementType = {
                            $$typeof: REACT_FORWARD_REF_TYPE,
                            render
                        };
                        {
                            var ownName;
                            Object.defineProperty(elementType, 'displayName', {
                                enumerable: false,
                                configurable: true,
                                get: function () {
                                    return ownName;
                                },
                                set: function (name) {
                                    ownName = name;
                                    if (!render.name && !render.displayName) {
                                        render.displayName = name;
                                    }
                                }
                            });
                        }
                        return elementType;
                    }
                    var REACT_MODULE_REFERENCE;
                    {
                        REACT_MODULE_REFERENCE = Symbol.for('react.module.reference');
                    }
                    function isValidElementType(type) {
                        if (typeof type === 'string' || typeof type === 'function') {
                            return true;
                        }
                        if (
                            type === REACT_FRAGMENT_TYPE ||
                            type === REACT_PROFILER_TYPE ||
                            enableDebugTracing ||
                            type === REACT_STRICT_MODE_TYPE ||
                            type === REACT_SUSPENSE_TYPE ||
                            type === REACT_SUSPENSE_LIST_TYPE ||
                            enableLegacyHidden ||
                            type === REACT_OFFSCREEN_TYPE ||
                            enableScopeAPI ||
                            enableCacheElement ||
                            enableTransitionTracing
                        ) {
                            return true;
                        }
                        if (typeof type === 'object' && type !== null) {
                            if (
                                type.$$typeof === REACT_LAZY_TYPE ||
                                type.$$typeof === REACT_MEMO_TYPE ||
                                type.$$typeof === REACT_PROVIDER_TYPE ||
                                type.$$typeof === REACT_CONTEXT_TYPE ||
                                type.$$typeof === REACT_FORWARD_REF_TYPE || // This needs to include all possible module reference object
                                // types supported by any Flight configuration anywhere since
                                // we don't know which Flight build this will end up being used
                                // with.
                                type.$$typeof === REACT_MODULE_REFERENCE ||
                                type.getModuleId !== void 0
                            ) {
                                return true;
                            }
                        }
                        return false;
                    }
                    function memo2(type, compare) {
                        {
                            if (!isValidElementType(type)) {
                                error2('memo: The first argument must be a component. Instead received: %s', type === null ? 'null' : typeof type);
                            }
                        }
                        var elementType = {
                            $$typeof: REACT_MEMO_TYPE,
                            type,
                            compare: compare === void 0 ? null : compare
                        };
                        {
                            var ownName;
                            Object.defineProperty(elementType, 'displayName', {
                                enumerable: false,
                                configurable: true,
                                get: function () {
                                    return ownName;
                                },
                                set: function (name) {
                                    ownName = name;
                                    if (!type.name && !type.displayName) {
                                        type.displayName = name;
                                    }
                                }
                            });
                        }
                        return elementType;
                    }
                    function resolveDispatcher() {
                        var dispatcher = ReactCurrentDispatcher.current;
                        {
                            if (dispatcher === null) {
                                error2(
                                    'Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:\n1. You might have mismatching versions of React and the renderer (such as React DOM)\n2. You might be breaking the Rules of Hooks\n3. You might have more than one copy of React in the same app\nSee https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.'
                                );
                            }
                        }
                        return dispatcher;
                    }
                    function useContext(Context) {
                        var dispatcher = resolveDispatcher();
                        {
                            if (Context._context !== void 0) {
                                var realContext = Context._context;
                                if (realContext.Consumer === Context) {
                                    error2(
                                        'Calling useContext(Context.Consumer) is not supported, may cause bugs, and will be removed in a future major release. Did you mean to call useContext(Context) instead?'
                                    );
                                } else if (realContext.Provider === Context) {
                                    error2('Calling useContext(Context.Provider) is not supported. Did you mean to call useContext(Context) instead?');
                                }
                            }
                        }
                        return dispatcher.useContext(Context);
                    }
                    function useState2(initialState) {
                        var dispatcher = resolveDispatcher();
                        return dispatcher.useState(initialState);
                    }
                    function useReducer(reducer, initialArg, init) {
                        var dispatcher = resolveDispatcher();
                        return dispatcher.useReducer(reducer, initialArg, init);
                    }
                    function useRef3(initialValue) {
                        var dispatcher = resolveDispatcher();
                        return dispatcher.useRef(initialValue);
                    }
                    function useEffect3(create, deps) {
                        var dispatcher = resolveDispatcher();
                        return dispatcher.useEffect(create, deps);
                    }
                    function useInsertionEffect(create, deps) {
                        var dispatcher = resolveDispatcher();
                        return dispatcher.useInsertionEffect(create, deps);
                    }
                    function useLayoutEffect(create, deps) {
                        var dispatcher = resolveDispatcher();
                        return dispatcher.useLayoutEffect(create, deps);
                    }
                    function useCallback(callback, deps) {
                        var dispatcher = resolveDispatcher();
                        return dispatcher.useCallback(callback, deps);
                    }
                    function useMemo3(create, deps) {
                        var dispatcher = resolveDispatcher();
                        return dispatcher.useMemo(create, deps);
                    }
                    function useImperativeHandle(ref, create, deps) {
                        var dispatcher = resolveDispatcher();
                        return dispatcher.useImperativeHandle(ref, create, deps);
                    }
                    function useDebugValue(value, formatterFn) {
                        {
                            var dispatcher = resolveDispatcher();
                            return dispatcher.useDebugValue(value, formatterFn);
                        }
                    }
                    function useTransition() {
                        var dispatcher = resolveDispatcher();
                        return dispatcher.useTransition();
                    }
                    function useDeferredValue(value) {
                        var dispatcher = resolveDispatcher();
                        return dispatcher.useDeferredValue(value);
                    }
                    function useId2() {
                        var dispatcher = resolveDispatcher();
                        return dispatcher.useId();
                    }
                    function useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot) {
                        var dispatcher = resolveDispatcher();
                        return dispatcher.useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
                    }
                    var disabledDepth = 0;
                    var prevLog;
                    var prevInfo;
                    var prevWarn;
                    var prevError;
                    var prevGroup;
                    var prevGroupCollapsed;
                    var prevGroupEnd;
                    function disabledLog() {}
                    disabledLog.__reactDisabledLog = true;
                    function disableLogs() {
                        {
                            if (disabledDepth === 0) {
                                prevLog = console.log;
                                prevInfo = console.info;
                                prevWarn = console.warn;
                                prevError = console.error;
                                prevGroup = console.group;
                                prevGroupCollapsed = console.groupCollapsed;
                                prevGroupEnd = console.groupEnd;
                                var props = {
                                    configurable: true,
                                    enumerable: true,
                                    value: disabledLog,
                                    writable: true
                                };
                                Object.defineProperties(console, {
                                    info: props,
                                    log: props,
                                    warn: props,
                                    error: props,
                                    group: props,
                                    groupCollapsed: props,
                                    groupEnd: props
                                });
                            }
                            disabledDepth++;
                        }
                    }
                    function reenableLogs() {
                        {
                            disabledDepth--;
                            if (disabledDepth === 0) {
                                var props = {
                                    configurable: true,
                                    enumerable: true,
                                    writable: true
                                };
                                Object.defineProperties(console, {
                                    log: assign3({}, props, {
                                        value: prevLog
                                    }),
                                    info: assign3({}, props, {
                                        value: prevInfo
                                    }),
                                    warn: assign3({}, props, {
                                        value: prevWarn
                                    }),
                                    error: assign3({}, props, {
                                        value: prevError
                                    }),
                                    group: assign3({}, props, {
                                        value: prevGroup
                                    }),
                                    groupCollapsed: assign3({}, props, {
                                        value: prevGroupCollapsed
                                    }),
                                    groupEnd: assign3({}, props, {
                                        value: prevGroupEnd
                                    })
                                });
                            }
                            if (disabledDepth < 0) {
                                error2('disabledDepth fell below zero. This is a bug in React. Please file an issue.');
                            }
                        }
                    }
                    var ReactCurrentDispatcher$1 = ReactSharedInternals.ReactCurrentDispatcher;
                    var prefix;
                    function describeBuiltInComponentFrame(name, source, ownerFn) {
                        {
                            if (prefix === void 0) {
                                try {
                                    throw Error();
                                } catch (x) {
                                    var match2 = x.stack.trim().match(/\n( *(at )?)/);
                                    prefix = (match2 && match2[1]) || '';
                                }
                            }
                            return '\n' + prefix + name;
                        }
                    }
                    var reentry = false;
                    var componentFrameCache;
                    {
                        var PossiblyWeakMap = typeof WeakMap === 'function' ? WeakMap : Map;
                        componentFrameCache = new PossiblyWeakMap();
                    }
                    function describeNativeComponentFrame(fn, construct) {
                        if (!fn || reentry) {
                            return '';
                        }
                        {
                            var frame = componentFrameCache.get(fn);
                            if (frame !== void 0) {
                                return frame;
                            }
                        }
                        var control;
                        reentry = true;
                        var previousPrepareStackTrace = Error.prepareStackTrace;
                        Error.prepareStackTrace = void 0;
                        var previousDispatcher;
                        {
                            previousDispatcher = ReactCurrentDispatcher$1.current;
                            ReactCurrentDispatcher$1.current = null;
                            disableLogs();
                        }
                        try {
                            if (construct) {
                                var Fake = function () {
                                    throw Error();
                                };
                                Object.defineProperty(Fake.prototype, 'props', {
                                    set: function () {
                                        throw Error();
                                    }
                                });
                                if (typeof Reflect === 'object' && Reflect.construct) {
                                    try {
                                        Reflect.construct(Fake, []);
                                    } catch (x) {
                                        control = x;
                                    }
                                    Reflect.construct(fn, [], Fake);
                                } else {
                                    try {
                                        Fake.call();
                                    } catch (x) {
                                        control = x;
                                    }
                                    fn.call(Fake.prototype);
                                }
                            } else {
                                try {
                                    throw Error();
                                } catch (x) {
                                    control = x;
                                }
                                fn();
                            }
                        } catch (sample) {
                            if (sample && control && typeof sample.stack === 'string') {
                                var sampleLines = sample.stack.split('\n');
                                var controlLines = control.stack.split('\n');
                                var s = sampleLines.length - 1;
                                var c = controlLines.length - 1;
                                while (s >= 1 && c >= 0 && sampleLines[s] !== controlLines[c]) {
                                    c--;
                                }
                                for (; s >= 1 && c >= 0; s--, c--) {
                                    if (sampleLines[s] !== controlLines[c]) {
                                        if (s !== 1 || c !== 1) {
                                            do {
                                                s--;
                                                c--;
                                                if (c < 0 || sampleLines[s] !== controlLines[c]) {
                                                    var _frame = '\n' + sampleLines[s].replace(' at new ', ' at ');
                                                    if (fn.displayName && _frame.includes('<anonymous>')) {
                                                        _frame = _frame.replace('<anonymous>', fn.displayName);
                                                    }
                                                    {
                                                        if (typeof fn === 'function') {
                                                            componentFrameCache.set(fn, _frame);
                                                        }
                                                    }
                                                    return _frame;
                                                }
                                            } while (s >= 1 && c >= 0);
                                        }
                                        break;
                                    }
                                }
                            }
                        } finally {
                            reentry = false;
                            {
                                ReactCurrentDispatcher$1.current = previousDispatcher;
                                reenableLogs();
                            }
                            Error.prepareStackTrace = previousPrepareStackTrace;
                        }
                        var name = fn ? fn.displayName || fn.name : '';
                        var syntheticFrame = name ? describeBuiltInComponentFrame(name) : '';
                        {
                            if (typeof fn === 'function') {
                                componentFrameCache.set(fn, syntheticFrame);
                            }
                        }
                        return syntheticFrame;
                    }
                    function describeFunctionComponentFrame(fn, source, ownerFn) {
                        {
                            return describeNativeComponentFrame(fn, false);
                        }
                    }
                    function shouldConstruct(Component2) {
                        var prototype = Component2.prototype;
                        return !!(prototype && prototype.isReactComponent);
                    }
                    function describeUnknownElementTypeFrameInDEV(type, source, ownerFn) {
                        if (type == null) {
                            return '';
                        }
                        if (typeof type === 'function') {
                            {
                                return describeNativeComponentFrame(type, shouldConstruct(type));
                            }
                        }
                        if (typeof type === 'string') {
                            return describeBuiltInComponentFrame(type);
                        }
                        switch (type) {
                            case REACT_SUSPENSE_TYPE:
                                return describeBuiltInComponentFrame('Suspense');
                            case REACT_SUSPENSE_LIST_TYPE:
                                return describeBuiltInComponentFrame('SuspenseList');
                        }
                        if (typeof type === 'object') {
                            switch (type.$$typeof) {
                                case REACT_FORWARD_REF_TYPE:
                                    return describeFunctionComponentFrame(type.render);
                                case REACT_MEMO_TYPE:
                                    return describeUnknownElementTypeFrameInDEV(type.type, source, ownerFn);
                                case REACT_LAZY_TYPE: {
                                    var lazyComponent = type;
                                    var payload = lazyComponent._payload;
                                    var init = lazyComponent._init;
                                    try {
                                        return describeUnknownElementTypeFrameInDEV(init(payload), source, ownerFn);
                                    } catch (x) {}
                                }
                            }
                        }
                        return '';
                    }
                    var loggedTypeFailures = {};
                    var ReactDebugCurrentFrame$1 = ReactSharedInternals.ReactDebugCurrentFrame;
                    function setCurrentlyValidatingElement(element) {
                        {
                            if (element) {
                                var owner = element._owner;
                                var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
                                ReactDebugCurrentFrame$1.setExtraStackFrame(stack);
                            } else {
                                ReactDebugCurrentFrame$1.setExtraStackFrame(null);
                            }
                        }
                    }
                    function checkPropTypes(typeSpecs, values, location, componentName, element) {
                        {
                            var has2 = Function.call.bind(hasOwnProperty);
                            for (var typeSpecName in typeSpecs) {
                                if (has2(typeSpecs, typeSpecName)) {
                                    var error$1 = void 0;
                                    try {
                                        if (typeof typeSpecs[typeSpecName] !== 'function') {
                                            var err = Error(
                                                (componentName || 'React class') +
                                                    ': ' +
                                                    location +
                                                    ' type `' +
                                                    typeSpecName +
                                                    '` is invalid; it must be a function, usually from the `prop-types` package, but received `' +
                                                    typeof typeSpecs[typeSpecName] +
                                                    '`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.'
                                            );
                                            err.name = 'Invariant Violation';
                                            throw err;
                                        }
                                        error$1 = typeSpecs[typeSpecName](
                                            values,
                                            typeSpecName,
                                            componentName,
                                            location,
                                            null,
                                            'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED'
                                        );
                                    } catch (ex) {
                                        error$1 = ex;
                                    }
                                    if (error$1 && !(error$1 instanceof Error)) {
                                        setCurrentlyValidatingElement(element);
                                        error2(
                                            '%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).',
                                            componentName || 'React class',
                                            location,
                                            typeSpecName,
                                            typeof error$1
                                        );
                                        setCurrentlyValidatingElement(null);
                                    }
                                    if (error$1 instanceof Error && !(error$1.message in loggedTypeFailures)) {
                                        loggedTypeFailures[error$1.message] = true;
                                        setCurrentlyValidatingElement(element);
                                        error2('Failed %s type: %s', location, error$1.message);
                                        setCurrentlyValidatingElement(null);
                                    }
                                }
                            }
                        }
                    }
                    function setCurrentlyValidatingElement$1(element) {
                        {
                            if (element) {
                                var owner = element._owner;
                                var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
                                setExtraStackFrame(stack);
                            } else {
                                setExtraStackFrame(null);
                            }
                        }
                    }
                    var propTypesMisspellWarningShown;
                    {
                        propTypesMisspellWarningShown = false;
                    }
                    function getDeclarationErrorAddendum() {
                        if (ReactCurrentOwner.current) {
                            var name = getComponentNameFromType(ReactCurrentOwner.current.type);
                            if (name) {
                                return '\n\nCheck the render method of `' + name + '`.';
                            }
                        }
                        return '';
                    }
                    function getSourceInfoErrorAddendum(source) {
                        if (source !== void 0) {
                            var fileName = source.fileName.replace(/^.*[\\\/]/, '');
                            var lineNumber = source.lineNumber;
                            return '\n\nCheck your code at ' + fileName + ':' + lineNumber + '.';
                        }
                        return '';
                    }
                    function getSourceInfoErrorAddendumForProps(elementProps) {
                        if (elementProps !== null && elementProps !== void 0) {
                            return getSourceInfoErrorAddendum(elementProps.__source);
                        }
                        return '';
                    }
                    var ownerHasKeyUseWarning = {};
                    function getCurrentComponentErrorInfo(parentType) {
                        var info = getDeclarationErrorAddendum();
                        if (!info) {
                            var parentName = typeof parentType === 'string' ? parentType : parentType.displayName || parentType.name;
                            if (parentName) {
                                info = '\n\nCheck the top-level render call using <' + parentName + '>.';
                            }
                        }
                        return info;
                    }
                    function validateExplicitKey(element, parentType) {
                        if (!element._store || element._store.validated || element.key != null) {
                            return;
                        }
                        element._store.validated = true;
                        var currentComponentErrorInfo = getCurrentComponentErrorInfo(parentType);
                        if (ownerHasKeyUseWarning[currentComponentErrorInfo]) {
                            return;
                        }
                        ownerHasKeyUseWarning[currentComponentErrorInfo] = true;
                        var childOwner = '';
                        if (element && element._owner && element._owner !== ReactCurrentOwner.current) {
                            childOwner = ' It was passed a child from ' + getComponentNameFromType(element._owner.type) + '.';
                        }
                        {
                            setCurrentlyValidatingElement$1(element);
                            error2(
                                'Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.',
                                currentComponentErrorInfo,
                                childOwner
                            );
                            setCurrentlyValidatingElement$1(null);
                        }
                    }
                    function validateChildKeys(node, parentType) {
                        if (typeof node !== 'object') {
                            return;
                        }
                        if (isArray(node)) {
                            for (var i = 0; i < node.length; i++) {
                                var child = node[i];
                                if (isValidElement(child)) {
                                    validateExplicitKey(child, parentType);
                                }
                            }
                        } else if (isValidElement(node)) {
                            if (node._store) {
                                node._store.validated = true;
                            }
                        } else if (node) {
                            var iteratorFn = getIteratorFn(node);
                            if (typeof iteratorFn === 'function') {
                                if (iteratorFn !== node.entries) {
                                    var iterator = iteratorFn.call(node);
                                    var step;
                                    while (!(step = iterator.next()).done) {
                                        if (isValidElement(step.value)) {
                                            validateExplicitKey(step.value, parentType);
                                        }
                                    }
                                }
                            }
                        }
                    }
                    function validatePropTypes(element) {
                        {
                            var type = element.type;
                            if (type === null || type === void 0 || typeof type === 'string') {
                                return;
                            }
                            var propTypes;
                            if (typeof type === 'function') {
                                propTypes = type.propTypes;
                            } else if (
                                typeof type === 'object' &&
                                (type.$$typeof === REACT_FORWARD_REF_TYPE || // Note: Memo only checks outer props here.
                                    // Inner props are checked in the reconciler.
                                    type.$$typeof === REACT_MEMO_TYPE)
                            ) {
                                propTypes = type.propTypes;
                            } else {
                                return;
                            }
                            if (propTypes) {
                                var name = getComponentNameFromType(type);
                                checkPropTypes(propTypes, element.props, 'prop', name, element);
                            } else if (type.PropTypes !== void 0 && !propTypesMisspellWarningShown) {
                                propTypesMisspellWarningShown = true;
                                var _name = getComponentNameFromType(type);
                                error2(
                                    'Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?',
                                    _name || 'Unknown'
                                );
                            }
                            if (typeof type.getDefaultProps === 'function' && !type.getDefaultProps.isReactClassApproved) {
                                error2(
                                    'getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.'
                                );
                            }
                        }
                    }
                    function validateFragmentProps(fragment) {
                        {
                            var keys = Object.keys(fragment.props);
                            for (var i = 0; i < keys.length; i++) {
                                var key = keys[i];
                                if (key !== 'children' && key !== 'key') {
                                    setCurrentlyValidatingElement$1(fragment);
                                    error2('Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.', key);
                                    setCurrentlyValidatingElement$1(null);
                                    break;
                                }
                            }
                            if (fragment.ref !== null) {
                                setCurrentlyValidatingElement$1(fragment);
                                error2('Invalid attribute `ref` supplied to `React.Fragment`.');
                                setCurrentlyValidatingElement$1(null);
                            }
                        }
                    }
                    function createElementWithValidation(type, props, children) {
                        var validType = isValidElementType(type);
                        if (!validType) {
                            var info = '';
                            if (type === void 0 || (typeof type === 'object' && type !== null && Object.keys(type).length === 0)) {
                                info +=
                                    " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.";
                            }
                            var sourceInfo = getSourceInfoErrorAddendumForProps(props);
                            if (sourceInfo) {
                                info += sourceInfo;
                            } else {
                                info += getDeclarationErrorAddendum();
                            }
                            var typeString;
                            if (type === null) {
                                typeString = 'null';
                            } else if (isArray(type)) {
                                typeString = 'array';
                            } else if (type !== void 0 && type.$$typeof === REACT_ELEMENT_TYPE) {
                                typeString = '<' + (getComponentNameFromType(type.type) || 'Unknown') + ' />';
                                info = ' Did you accidentally export a JSX literal instead of a component?';
                            } else {
                                typeString = typeof type;
                            }
                            {
                                error2(
                                    'React.createElement: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s',
                                    typeString,
                                    info
                                );
                            }
                        }
                        var element = createElement.apply(this, arguments);
                        if (element == null) {
                            return element;
                        }
                        if (validType) {
                            for (var i = 2; i < arguments.length; i++) {
                                validateChildKeys(arguments[i], type);
                            }
                        }
                        if (type === REACT_FRAGMENT_TYPE) {
                            validateFragmentProps(element);
                        } else {
                            validatePropTypes(element);
                        }
                        return element;
                    }
                    var didWarnAboutDeprecatedCreateFactory = false;
                    function createFactoryWithValidation(type) {
                        var validatedFactory = createElementWithValidation.bind(null, type);
                        validatedFactory.type = type;
                        {
                            if (!didWarnAboutDeprecatedCreateFactory) {
                                didWarnAboutDeprecatedCreateFactory = true;
                                warn(
                                    'React.createFactory() is deprecated and will be removed in a future major release. Consider using JSX or use React.createElement() directly instead.'
                                );
                            }
                            Object.defineProperty(validatedFactory, 'type', {
                                enumerable: false,
                                get: function () {
                                    warn('Factory.type is deprecated. Access the class directly before passing it to createFactory.');
                                    Object.defineProperty(this, 'type', {
                                        value: type
                                    });
                                    return type;
                                }
                            });
                        }
                        return validatedFactory;
                    }
                    function cloneElementWithValidation(element, props, children) {
                        var newElement = cloneElement.apply(this, arguments);
                        for (var i = 2; i < arguments.length; i++) {
                            validateChildKeys(arguments[i], newElement.type);
                        }
                        validatePropTypes(newElement);
                        return newElement;
                    }
                    function startTransition(scope, options) {
                        var prevTransition = ReactCurrentBatchConfig.transition;
                        ReactCurrentBatchConfig.transition = {};
                        var currentTransition = ReactCurrentBatchConfig.transition;
                        {
                            ReactCurrentBatchConfig.transition._updatedFibers = /* @__PURE__ */ new Set();
                        }
                        try {
                            scope();
                        } finally {
                            ReactCurrentBatchConfig.transition = prevTransition;
                            {
                                if (prevTransition === null && currentTransition._updatedFibers) {
                                    var updatedFibersCount = currentTransition._updatedFibers.size;
                                    if (updatedFibersCount > 10) {
                                        warn(
                                            'Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table.'
                                        );
                                    }
                                    currentTransition._updatedFibers.clear();
                                }
                            }
                        }
                    }
                    var didWarnAboutMessageChannel = false;
                    var enqueueTaskImpl = null;
                    function enqueueTask(task) {
                        if (enqueueTaskImpl === null) {
                            try {
                                var requireString = ('require' + Math.random()).slice(0, 7);
                                var nodeRequire = module && module[requireString];
                                enqueueTaskImpl = nodeRequire.call(module, 'timers').setImmediate;
                            } catch (_err) {
                                enqueueTaskImpl = function (callback) {
                                    {
                                        if (didWarnAboutMessageChannel === false) {
                                            didWarnAboutMessageChannel = true;
                                            if (typeof MessageChannel === 'undefined') {
                                                error2(
                                                    'This browser does not have a MessageChannel implementation, so enqueuing tasks via await act(async () => ...) will fail. Please file an issue at https://github.com/facebook/react/issues if you encounter this warning.'
                                                );
                                            }
                                        }
                                    }
                                    var channel = new MessageChannel();
                                    channel.port1.onmessage = callback;
                                    channel.port2.postMessage(void 0);
                                };
                            }
                        }
                        return enqueueTaskImpl(task);
                    }
                    var actScopeDepth = 0;
                    var didWarnNoAwaitAct = false;
                    function act(callback) {
                        {
                            var prevActScopeDepth = actScopeDepth;
                            actScopeDepth++;
                            if (ReactCurrentActQueue.current === null) {
                                ReactCurrentActQueue.current = [];
                            }
                            var prevIsBatchingLegacy = ReactCurrentActQueue.isBatchingLegacy;
                            var result;
                            try {
                                ReactCurrentActQueue.isBatchingLegacy = true;
                                result = callback();
                                if (!prevIsBatchingLegacy && ReactCurrentActQueue.didScheduleLegacyUpdate) {
                                    var queue = ReactCurrentActQueue.current;
                                    if (queue !== null) {
                                        ReactCurrentActQueue.didScheduleLegacyUpdate = false;
                                        flushActQueue(queue);
                                    }
                                }
                            } catch (error3) {
                                popActScope(prevActScopeDepth);
                                throw error3;
                            } finally {
                                ReactCurrentActQueue.isBatchingLegacy = prevIsBatchingLegacy;
                            }
                            if (result !== null && typeof result === 'object' && typeof result.then === 'function') {
                                var thenableResult = result;
                                var wasAwaited = false;
                                var thenable = {
                                    then: function (resolve, reject) {
                                        wasAwaited = true;
                                        thenableResult.then(
                                            function (returnValue2) {
                                                popActScope(prevActScopeDepth);
                                                if (actScopeDepth === 0) {
                                                    recursivelyFlushAsyncActWork(returnValue2, resolve, reject);
                                                } else {
                                                    resolve(returnValue2);
                                                }
                                            },
                                            function (error3) {
                                                popActScope(prevActScopeDepth);
                                                reject(error3);
                                            }
                                        );
                                    }
                                };
                                {
                                    if (!didWarnNoAwaitAct && typeof Promise !== 'undefined') {
                                        Promise.resolve()
                                            .then(function () {})
                                            .then(function () {
                                                if (!wasAwaited) {
                                                    didWarnNoAwaitAct = true;
                                                    error2(
                                                        'You called act(async () => ...) without await. This could lead to unexpected testing behaviour, interleaving multiple act calls and mixing their scopes. You should - await act(async () => ...);'
                                                    );
                                                }
                                            });
                                    }
                                }
                                return thenable;
                            } else {
                                var returnValue = result;
                                popActScope(prevActScopeDepth);
                                if (actScopeDepth === 0) {
                                    var _queue = ReactCurrentActQueue.current;
                                    if (_queue !== null) {
                                        flushActQueue(_queue);
                                        ReactCurrentActQueue.current = null;
                                    }
                                    var _thenable = {
                                        then: function (resolve, reject) {
                                            if (ReactCurrentActQueue.current === null) {
                                                ReactCurrentActQueue.current = [];
                                                recursivelyFlushAsyncActWork(returnValue, resolve, reject);
                                            } else {
                                                resolve(returnValue);
                                            }
                                        }
                                    };
                                    return _thenable;
                                } else {
                                    var _thenable2 = {
                                        then: function (resolve, reject) {
                                            resolve(returnValue);
                                        }
                                    };
                                    return _thenable2;
                                }
                            }
                        }
                    }
                    function popActScope(prevActScopeDepth) {
                        {
                            if (prevActScopeDepth !== actScopeDepth - 1) {
                                error2(
                                    'You seem to have overlapping act() calls, this is not supported. Be sure to await previous act() calls before making a new one. '
                                );
                            }
                            actScopeDepth = prevActScopeDepth;
                        }
                    }
                    function recursivelyFlushAsyncActWork(returnValue, resolve, reject) {
                        {
                            var queue = ReactCurrentActQueue.current;
                            if (queue !== null) {
                                try {
                                    flushActQueue(queue);
                                    enqueueTask(function () {
                                        if (queue.length === 0) {
                                            ReactCurrentActQueue.current = null;
                                            resolve(returnValue);
                                        } else {
                                            recursivelyFlushAsyncActWork(returnValue, resolve, reject);
                                        }
                                    });
                                } catch (error3) {
                                    reject(error3);
                                }
                            } else {
                                resolve(returnValue);
                            }
                        }
                    }
                    var isFlushing = false;
                    function flushActQueue(queue) {
                        {
                            if (!isFlushing) {
                                isFlushing = true;
                                var i = 0;
                                try {
                                    for (; i < queue.length; i++) {
                                        var callback = queue[i];
                                        do {
                                            callback = callback(true);
                                        } while (callback !== null);
                                    }
                                    queue.length = 0;
                                } catch (error3) {
                                    queue = queue.slice(i + 1);
                                    throw error3;
                                } finally {
                                    isFlushing = false;
                                }
                            }
                        }
                    }
                    var createElement$1 = createElementWithValidation;
                    var cloneElement$1 = cloneElementWithValidation;
                    var createFactory = createFactoryWithValidation;
                    var Children = {
                        map: mapChildren,
                        forEach: forEachChildren,
                        count: countChildren,
                        toArray,
                        only: onlyChild
                    };
                    exports.Children = Children;
                    exports.Component = Component;
                    exports.Fragment = REACT_FRAGMENT_TYPE;
                    exports.Profiler = REACT_PROFILER_TYPE;
                    exports.PureComponent = PureComponent;
                    exports.StrictMode = REACT_STRICT_MODE_TYPE;
                    exports.Suspense = REACT_SUSPENSE_TYPE;
                    exports.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ReactSharedInternals;
                    exports.cloneElement = cloneElement$1;
                    exports.createContext = createContext;
                    exports.createElement = createElement$1;
                    exports.createFactory = createFactory;
                    exports.createRef = createRef;
                    exports.forwardRef = forwardRef;
                    exports.isValidElement = isValidElement;
                    exports.lazy = lazy;
                    exports.memo = memo2;
                    exports.startTransition = startTransition;
                    exports.unstable_act = act;
                    exports.useCallback = useCallback;
                    exports.useContext = useContext;
                    exports.useDebugValue = useDebugValue;
                    exports.useDeferredValue = useDeferredValue;
                    exports.useEffect = useEffect3;
                    exports.useId = useId2;
                    exports.useImperativeHandle = useImperativeHandle;
                    exports.useInsertionEffect = useInsertionEffect;
                    exports.useLayoutEffect = useLayoutEffect;
                    exports.useMemo = useMemo3;
                    exports.useReducer = useReducer;
                    exports.useRef = useRef3;
                    exports.useState = useState2;
                    exports.useSyncExternalStore = useSyncExternalStore;
                    exports.useTransition = useTransition;
                    exports.version = ReactVersion;
                    if (
                        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ !== 'undefined' &&
                        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop === 'function'
                    ) {
                        __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
                    }
                })();
            }
        }
    });

    // ../../node_modules/react/index.js
    var require_react = __commonJS({
        '../../node_modules/react/index.js'(exports, module) {
            if (process.env.NODE_ENV === 'production') {
                module.exports = require_react_production_min();
            } else {
                module.exports = require_react_development();
            }
        }
    });

    // ../../node_modules/react/cjs/react-jsx-runtime.production.min.js
    var require_react_jsx_runtime_production_min = __commonJS({
        '../../node_modules/react/cjs/react-jsx-runtime.production.min.js'(exports) {
            var f = require_react();
            var k = Symbol.for('react.element');
            var l = Symbol.for('react.fragment');
            var m = Object.prototype.hasOwnProperty;
            var n = f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner;
            var p = { key: true, ref: true, __self: true, __source: true };
            function q(c, a, g) {
                var b,
                    d = {},
                    e = null,
                    h = null;
                void 0 !== g && (e = '' + g);
                void 0 !== a.key && (e = '' + a.key);
                void 0 !== a.ref && (h = a.ref);
                for (b in a) m.call(a, b) && !p.hasOwnProperty(b) && (d[b] = a[b]);
                if (c && c.defaultProps) for (b in ((a = c.defaultProps), a)) void 0 === d[b] && (d[b] = a[b]);
                return { $$typeof: k, type: c, key: e, ref: h, props: d, _owner: n.current };
            }
            exports.Fragment = l;
            exports.jsx = q;
            exports.jsxs = q;
        }
    });

    // ../../node_modules/react/cjs/react-jsx-runtime.development.js
    var require_react_jsx_runtime_development = __commonJS({
        '../../node_modules/react/cjs/react-jsx-runtime.development.js'(exports) {
            if (process.env.NODE_ENV !== 'production') {
                (function () {
                    var React = require_react();
                    var REACT_ELEMENT_TYPE = Symbol.for('react.element');
                    var REACT_PORTAL_TYPE = Symbol.for('react.portal');
                    var REACT_FRAGMENT_TYPE = Symbol.for('react.fragment');
                    var REACT_STRICT_MODE_TYPE = Symbol.for('react.strict_mode');
                    var REACT_PROFILER_TYPE = Symbol.for('react.profiler');
                    var REACT_PROVIDER_TYPE = Symbol.for('react.provider');
                    var REACT_CONTEXT_TYPE = Symbol.for('react.context');
                    var REACT_FORWARD_REF_TYPE = Symbol.for('react.forward_ref');
                    var REACT_SUSPENSE_TYPE = Symbol.for('react.suspense');
                    var REACT_SUSPENSE_LIST_TYPE = Symbol.for('react.suspense_list');
                    var REACT_MEMO_TYPE = Symbol.for('react.memo');
                    var REACT_LAZY_TYPE = Symbol.for('react.lazy');
                    var REACT_OFFSCREEN_TYPE = Symbol.for('react.offscreen');
                    var MAYBE_ITERATOR_SYMBOL = Symbol.iterator;
                    var FAUX_ITERATOR_SYMBOL = '@@iterator';
                    function getIteratorFn(maybeIterable) {
                        if (maybeIterable === null || typeof maybeIterable !== 'object') {
                            return null;
                        }
                        var maybeIterator = (MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL]) || maybeIterable[FAUX_ITERATOR_SYMBOL];
                        if (typeof maybeIterator === 'function') {
                            return maybeIterator;
                        }
                        return null;
                    }
                    var ReactSharedInternals = React.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
                    function error2(format3) {
                        {
                            {
                                for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
                                    args[_key2 - 1] = arguments[_key2];
                                }
                                printWarning('error', format3, args);
                            }
                        }
                    }
                    function printWarning(level, format3, args) {
                        {
                            var ReactDebugCurrentFrame2 = ReactSharedInternals.ReactDebugCurrentFrame;
                            var stack = ReactDebugCurrentFrame2.getStackAddendum();
                            if (stack !== '') {
                                format3 += '%s';
                                args = args.concat([stack]);
                            }
                            var argsWithFormat = args.map(function (item) {
                                return String(item);
                            });
                            argsWithFormat.unshift('Warning: ' + format3);
                            Function.prototype.apply.call(console[level], console, argsWithFormat);
                        }
                    }
                    var enableScopeAPI = false;
                    var enableCacheElement = false;
                    var enableTransitionTracing = false;
                    var enableLegacyHidden = false;
                    var enableDebugTracing = false;
                    var REACT_MODULE_REFERENCE;
                    {
                        REACT_MODULE_REFERENCE = Symbol.for('react.module.reference');
                    }
                    function isValidElementType(type) {
                        if (typeof type === 'string' || typeof type === 'function') {
                            return true;
                        }
                        if (
                            type === REACT_FRAGMENT_TYPE ||
                            type === REACT_PROFILER_TYPE ||
                            enableDebugTracing ||
                            type === REACT_STRICT_MODE_TYPE ||
                            type === REACT_SUSPENSE_TYPE ||
                            type === REACT_SUSPENSE_LIST_TYPE ||
                            enableLegacyHidden ||
                            type === REACT_OFFSCREEN_TYPE ||
                            enableScopeAPI ||
                            enableCacheElement ||
                            enableTransitionTracing
                        ) {
                            return true;
                        }
                        if (typeof type === 'object' && type !== null) {
                            if (
                                type.$$typeof === REACT_LAZY_TYPE ||
                                type.$$typeof === REACT_MEMO_TYPE ||
                                type.$$typeof === REACT_PROVIDER_TYPE ||
                                type.$$typeof === REACT_CONTEXT_TYPE ||
                                type.$$typeof === REACT_FORWARD_REF_TYPE || // This needs to include all possible module reference object
                                // types supported by any Flight configuration anywhere since
                                // we don't know which Flight build this will end up being used
                                // with.
                                type.$$typeof === REACT_MODULE_REFERENCE ||
                                type.getModuleId !== void 0
                            ) {
                                return true;
                            }
                        }
                        return false;
                    }
                    function getWrappedName(outerType, innerType, wrapperName) {
                        var displayName = outerType.displayName;
                        if (displayName) {
                            return displayName;
                        }
                        var functionName = innerType.displayName || innerType.name || '';
                        return functionName !== '' ? wrapperName + '(' + functionName + ')' : wrapperName;
                    }
                    function getContextName(type) {
                        return type.displayName || 'Context';
                    }
                    function getComponentNameFromType(type) {
                        if (type == null) {
                            return null;
                        }
                        {
                            if (typeof type.tag === 'number') {
                                error2('Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue.');
                            }
                        }
                        if (typeof type === 'function') {
                            return type.displayName || type.name || null;
                        }
                        if (typeof type === 'string') {
                            return type;
                        }
                        switch (type) {
                            case REACT_FRAGMENT_TYPE:
                                return 'Fragment';
                            case REACT_PORTAL_TYPE:
                                return 'Portal';
                            case REACT_PROFILER_TYPE:
                                return 'Profiler';
                            case REACT_STRICT_MODE_TYPE:
                                return 'StrictMode';
                            case REACT_SUSPENSE_TYPE:
                                return 'Suspense';
                            case REACT_SUSPENSE_LIST_TYPE:
                                return 'SuspenseList';
                        }
                        if (typeof type === 'object') {
                            switch (type.$$typeof) {
                                case REACT_CONTEXT_TYPE:
                                    var context = type;
                                    return getContextName(context) + '.Consumer';
                                case REACT_PROVIDER_TYPE:
                                    var provider = type;
                                    return getContextName(provider._context) + '.Provider';
                                case REACT_FORWARD_REF_TYPE:
                                    return getWrappedName(type, type.render, 'ForwardRef');
                                case REACT_MEMO_TYPE:
                                    var outerName = type.displayName || null;
                                    if (outerName !== null) {
                                        return outerName;
                                    }
                                    return getComponentNameFromType(type.type) || 'Memo';
                                case REACT_LAZY_TYPE: {
                                    var lazyComponent = type;
                                    var payload = lazyComponent._payload;
                                    var init = lazyComponent._init;
                                    try {
                                        return getComponentNameFromType(init(payload));
                                    } catch (x) {
                                        return null;
                                    }
                                }
                            }
                        }
                        return null;
                    }
                    var assign3 = Object.assign;
                    var disabledDepth = 0;
                    var prevLog;
                    var prevInfo;
                    var prevWarn;
                    var prevError;
                    var prevGroup;
                    var prevGroupCollapsed;
                    var prevGroupEnd;
                    function disabledLog() {}
                    disabledLog.__reactDisabledLog = true;
                    function disableLogs() {
                        {
                            if (disabledDepth === 0) {
                                prevLog = console.log;
                                prevInfo = console.info;
                                prevWarn = console.warn;
                                prevError = console.error;
                                prevGroup = console.group;
                                prevGroupCollapsed = console.groupCollapsed;
                                prevGroupEnd = console.groupEnd;
                                var props = {
                                    configurable: true,
                                    enumerable: true,
                                    value: disabledLog,
                                    writable: true
                                };
                                Object.defineProperties(console, {
                                    info: props,
                                    log: props,
                                    warn: props,
                                    error: props,
                                    group: props,
                                    groupCollapsed: props,
                                    groupEnd: props
                                });
                            }
                            disabledDepth++;
                        }
                    }
                    function reenableLogs() {
                        {
                            disabledDepth--;
                            if (disabledDepth === 0) {
                                var props = {
                                    configurable: true,
                                    enumerable: true,
                                    writable: true
                                };
                                Object.defineProperties(console, {
                                    log: assign3({}, props, {
                                        value: prevLog
                                    }),
                                    info: assign3({}, props, {
                                        value: prevInfo
                                    }),
                                    warn: assign3({}, props, {
                                        value: prevWarn
                                    }),
                                    error: assign3({}, props, {
                                        value: prevError
                                    }),
                                    group: assign3({}, props, {
                                        value: prevGroup
                                    }),
                                    groupCollapsed: assign3({}, props, {
                                        value: prevGroupCollapsed
                                    }),
                                    groupEnd: assign3({}, props, {
                                        value: prevGroupEnd
                                    })
                                });
                            }
                            if (disabledDepth < 0) {
                                error2('disabledDepth fell below zero. This is a bug in React. Please file an issue.');
                            }
                        }
                    }
                    var ReactCurrentDispatcher = ReactSharedInternals.ReactCurrentDispatcher;
                    var prefix;
                    function describeBuiltInComponentFrame(name, source, ownerFn) {
                        {
                            if (prefix === void 0) {
                                try {
                                    throw Error();
                                } catch (x) {
                                    var match2 = x.stack.trim().match(/\n( *(at )?)/);
                                    prefix = (match2 && match2[1]) || '';
                                }
                            }
                            return '\n' + prefix + name;
                        }
                    }
                    var reentry = false;
                    var componentFrameCache;
                    {
                        var PossiblyWeakMap = typeof WeakMap === 'function' ? WeakMap : Map;
                        componentFrameCache = new PossiblyWeakMap();
                    }
                    function describeNativeComponentFrame(fn, construct) {
                        if (!fn || reentry) {
                            return '';
                        }
                        {
                            var frame = componentFrameCache.get(fn);
                            if (frame !== void 0) {
                                return frame;
                            }
                        }
                        var control;
                        reentry = true;
                        var previousPrepareStackTrace = Error.prepareStackTrace;
                        Error.prepareStackTrace = void 0;
                        var previousDispatcher;
                        {
                            previousDispatcher = ReactCurrentDispatcher.current;
                            ReactCurrentDispatcher.current = null;
                            disableLogs();
                        }
                        try {
                            if (construct) {
                                var Fake = function () {
                                    throw Error();
                                };
                                Object.defineProperty(Fake.prototype, 'props', {
                                    set: function () {
                                        throw Error();
                                    }
                                });
                                if (typeof Reflect === 'object' && Reflect.construct) {
                                    try {
                                        Reflect.construct(Fake, []);
                                    } catch (x) {
                                        control = x;
                                    }
                                    Reflect.construct(fn, [], Fake);
                                } else {
                                    try {
                                        Fake.call();
                                    } catch (x) {
                                        control = x;
                                    }
                                    fn.call(Fake.prototype);
                                }
                            } else {
                                try {
                                    throw Error();
                                } catch (x) {
                                    control = x;
                                }
                                fn();
                            }
                        } catch (sample) {
                            if (sample && control && typeof sample.stack === 'string') {
                                var sampleLines = sample.stack.split('\n');
                                var controlLines = control.stack.split('\n');
                                var s = sampleLines.length - 1;
                                var c = controlLines.length - 1;
                                while (s >= 1 && c >= 0 && sampleLines[s] !== controlLines[c]) {
                                    c--;
                                }
                                for (; s >= 1 && c >= 0; s--, c--) {
                                    if (sampleLines[s] !== controlLines[c]) {
                                        if (s !== 1 || c !== 1) {
                                            do {
                                                s--;
                                                c--;
                                                if (c < 0 || sampleLines[s] !== controlLines[c]) {
                                                    var _frame = '\n' + sampleLines[s].replace(' at new ', ' at ');
                                                    if (fn.displayName && _frame.includes('<anonymous>')) {
                                                        _frame = _frame.replace('<anonymous>', fn.displayName);
                                                    }
                                                    {
                                                        if (typeof fn === 'function') {
                                                            componentFrameCache.set(fn, _frame);
                                                        }
                                                    }
                                                    return _frame;
                                                }
                                            } while (s >= 1 && c >= 0);
                                        }
                                        break;
                                    }
                                }
                            }
                        } finally {
                            reentry = false;
                            {
                                ReactCurrentDispatcher.current = previousDispatcher;
                                reenableLogs();
                            }
                            Error.prepareStackTrace = previousPrepareStackTrace;
                        }
                        var name = fn ? fn.displayName || fn.name : '';
                        var syntheticFrame = name ? describeBuiltInComponentFrame(name) : '';
                        {
                            if (typeof fn === 'function') {
                                componentFrameCache.set(fn, syntheticFrame);
                            }
                        }
                        return syntheticFrame;
                    }
                    function describeFunctionComponentFrame(fn, source, ownerFn) {
                        {
                            return describeNativeComponentFrame(fn, false);
                        }
                    }
                    function shouldConstruct(Component) {
                        var prototype = Component.prototype;
                        return !!(prototype && prototype.isReactComponent);
                    }
                    function describeUnknownElementTypeFrameInDEV(type, source, ownerFn) {
                        if (type == null) {
                            return '';
                        }
                        if (typeof type === 'function') {
                            {
                                return describeNativeComponentFrame(type, shouldConstruct(type));
                            }
                        }
                        if (typeof type === 'string') {
                            return describeBuiltInComponentFrame(type);
                        }
                        switch (type) {
                            case REACT_SUSPENSE_TYPE:
                                return describeBuiltInComponentFrame('Suspense');
                            case REACT_SUSPENSE_LIST_TYPE:
                                return describeBuiltInComponentFrame('SuspenseList');
                        }
                        if (typeof type === 'object') {
                            switch (type.$$typeof) {
                                case REACT_FORWARD_REF_TYPE:
                                    return describeFunctionComponentFrame(type.render);
                                case REACT_MEMO_TYPE:
                                    return describeUnknownElementTypeFrameInDEV(type.type, source, ownerFn);
                                case REACT_LAZY_TYPE: {
                                    var lazyComponent = type;
                                    var payload = lazyComponent._payload;
                                    var init = lazyComponent._init;
                                    try {
                                        return describeUnknownElementTypeFrameInDEV(init(payload), source, ownerFn);
                                    } catch (x) {}
                                }
                            }
                        }
                        return '';
                    }
                    var hasOwnProperty = Object.prototype.hasOwnProperty;
                    var loggedTypeFailures = {};
                    var ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;
                    function setCurrentlyValidatingElement(element) {
                        {
                            if (element) {
                                var owner = element._owner;
                                var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
                                ReactDebugCurrentFrame.setExtraStackFrame(stack);
                            } else {
                                ReactDebugCurrentFrame.setExtraStackFrame(null);
                            }
                        }
                    }
                    function checkPropTypes(typeSpecs, values, location, componentName, element) {
                        {
                            var has2 = Function.call.bind(hasOwnProperty);
                            for (var typeSpecName in typeSpecs) {
                                if (has2(typeSpecs, typeSpecName)) {
                                    var error$1 = void 0;
                                    try {
                                        if (typeof typeSpecs[typeSpecName] !== 'function') {
                                            var err = Error(
                                                (componentName || 'React class') +
                                                    ': ' +
                                                    location +
                                                    ' type `' +
                                                    typeSpecName +
                                                    '` is invalid; it must be a function, usually from the `prop-types` package, but received `' +
                                                    typeof typeSpecs[typeSpecName] +
                                                    '`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.'
                                            );
                                            err.name = 'Invariant Violation';
                                            throw err;
                                        }
                                        error$1 = typeSpecs[typeSpecName](
                                            values,
                                            typeSpecName,
                                            componentName,
                                            location,
                                            null,
                                            'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED'
                                        );
                                    } catch (ex) {
                                        error$1 = ex;
                                    }
                                    if (error$1 && !(error$1 instanceof Error)) {
                                        setCurrentlyValidatingElement(element);
                                        error2(
                                            '%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).',
                                            componentName || 'React class',
                                            location,
                                            typeSpecName,
                                            typeof error$1
                                        );
                                        setCurrentlyValidatingElement(null);
                                    }
                                    if (error$1 instanceof Error && !(error$1.message in loggedTypeFailures)) {
                                        loggedTypeFailures[error$1.message] = true;
                                        setCurrentlyValidatingElement(element);
                                        error2('Failed %s type: %s', location, error$1.message);
                                        setCurrentlyValidatingElement(null);
                                    }
                                }
                            }
                        }
                    }
                    var isArrayImpl = Array.isArray;
                    function isArray(a) {
                        return isArrayImpl(a);
                    }
                    function typeName(value) {
                        {
                            var hasToStringTag = typeof Symbol === 'function' && Symbol.toStringTag;
                            var type = (hasToStringTag && value[Symbol.toStringTag]) || value.constructor.name || 'Object';
                            return type;
                        }
                    }
                    function willCoercionThrow(value) {
                        {
                            try {
                                testStringCoercion(value);
                                return false;
                            } catch (e) {
                                return true;
                            }
                        }
                    }
                    function testStringCoercion(value) {
                        return '' + value;
                    }
                    function checkKeyStringCoercion(value) {
                        {
                            if (willCoercionThrow(value)) {
                                error2(
                                    'The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.',
                                    typeName(value)
                                );
                                return testStringCoercion(value);
                            }
                        }
                    }
                    var ReactCurrentOwner = ReactSharedInternals.ReactCurrentOwner;
                    var RESERVED_PROPS = {
                        key: true,
                        ref: true,
                        __self: true,
                        __source: true
                    };
                    var specialPropKeyWarningShown;
                    var specialPropRefWarningShown;
                    var didWarnAboutStringRefs;
                    {
                        didWarnAboutStringRefs = {};
                    }
                    function hasValidRef(config2) {
                        {
                            if (hasOwnProperty.call(config2, 'ref')) {
                                var getter = Object.getOwnPropertyDescriptor(config2, 'ref').get;
                                if (getter && getter.isReactWarning) {
                                    return false;
                                }
                            }
                        }
                        return config2.ref !== void 0;
                    }
                    function hasValidKey(config2) {
                        {
                            if (hasOwnProperty.call(config2, 'key')) {
                                var getter = Object.getOwnPropertyDescriptor(config2, 'key').get;
                                if (getter && getter.isReactWarning) {
                                    return false;
                                }
                            }
                        }
                        return config2.key !== void 0;
                    }
                    function warnIfStringRefCannotBeAutoConverted(config2, self) {
                        {
                            if (typeof config2.ref === 'string' && ReactCurrentOwner.current && self && ReactCurrentOwner.current.stateNode !== self) {
                                var componentName = getComponentNameFromType(ReactCurrentOwner.current.type);
                                if (!didWarnAboutStringRefs[componentName]) {
                                    error2(
                                        'Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref',
                                        getComponentNameFromType(ReactCurrentOwner.current.type),
                                        config2.ref
                                    );
                                    didWarnAboutStringRefs[componentName] = true;
                                }
                            }
                        }
                    }
                    function defineKeyPropWarningGetter(props, displayName) {
                        {
                            var warnAboutAccessingKey = function () {
                                if (!specialPropKeyWarningShown) {
                                    specialPropKeyWarningShown = true;
                                    error2(
                                        '%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)',
                                        displayName
                                    );
                                }
                            };
                            warnAboutAccessingKey.isReactWarning = true;
                            Object.defineProperty(props, 'key', {
                                get: warnAboutAccessingKey,
                                configurable: true
                            });
                        }
                    }
                    function defineRefPropWarningGetter(props, displayName) {
                        {
                            var warnAboutAccessingRef = function () {
                                if (!specialPropRefWarningShown) {
                                    specialPropRefWarningShown = true;
                                    error2(
                                        '%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)',
                                        displayName
                                    );
                                }
                            };
                            warnAboutAccessingRef.isReactWarning = true;
                            Object.defineProperty(props, 'ref', {
                                get: warnAboutAccessingRef,
                                configurable: true
                            });
                        }
                    }
                    var ReactElement = function (type, key, ref, self, source, owner, props) {
                        var element = {
                            // This tag allows us to uniquely identify this as a React Element
                            $$typeof: REACT_ELEMENT_TYPE,
                            // Built-in properties that belong on the element
                            type,
                            key,
                            ref,
                            props,
                            // Record the component responsible for creating this element.
                            _owner: owner
                        };
                        {
                            element._store = {};
                            Object.defineProperty(element._store, 'validated', {
                                configurable: false,
                                enumerable: false,
                                writable: true,
                                value: false
                            });
                            Object.defineProperty(element, '_self', {
                                configurable: false,
                                enumerable: false,
                                writable: false,
                                value: self
                            });
                            Object.defineProperty(element, '_source', {
                                configurable: false,
                                enumerable: false,
                                writable: false,
                                value: source
                            });
                            if (Object.freeze) {
                                Object.freeze(element.props);
                                Object.freeze(element);
                            }
                        }
                        return element;
                    };
                    function jsxDEV(type, config2, maybeKey, source, self) {
                        {
                            var propName;
                            var props = {};
                            var key = null;
                            var ref = null;
                            if (maybeKey !== void 0) {
                                {
                                    checkKeyStringCoercion(maybeKey);
                                }
                                key = '' + maybeKey;
                            }
                            if (hasValidKey(config2)) {
                                {
                                    checkKeyStringCoercion(config2.key);
                                }
                                key = '' + config2.key;
                            }
                            if (hasValidRef(config2)) {
                                ref = config2.ref;
                                warnIfStringRefCannotBeAutoConverted(config2, self);
                            }
                            for (propName in config2) {
                                if (hasOwnProperty.call(config2, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
                                    props[propName] = config2[propName];
                                }
                            }
                            if (type && type.defaultProps) {
                                var defaultProps = type.defaultProps;
                                for (propName in defaultProps) {
                                    if (props[propName] === void 0) {
                                        props[propName] = defaultProps[propName];
                                    }
                                }
                            }
                            if (key || ref) {
                                var displayName = typeof type === 'function' ? type.displayName || type.name || 'Unknown' : type;
                                if (key) {
                                    defineKeyPropWarningGetter(props, displayName);
                                }
                                if (ref) {
                                    defineRefPropWarningGetter(props, displayName);
                                }
                            }
                            return ReactElement(type, key, ref, self, source, ReactCurrentOwner.current, props);
                        }
                    }
                    var ReactCurrentOwner$1 = ReactSharedInternals.ReactCurrentOwner;
                    var ReactDebugCurrentFrame$1 = ReactSharedInternals.ReactDebugCurrentFrame;
                    function setCurrentlyValidatingElement$1(element) {
                        {
                            if (element) {
                                var owner = element._owner;
                                var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
                                ReactDebugCurrentFrame$1.setExtraStackFrame(stack);
                            } else {
                                ReactDebugCurrentFrame$1.setExtraStackFrame(null);
                            }
                        }
                    }
                    var propTypesMisspellWarningShown;
                    {
                        propTypesMisspellWarningShown = false;
                    }
                    function isValidElement(object) {
                        {
                            return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
                        }
                    }
                    function getDeclarationErrorAddendum() {
                        {
                            if (ReactCurrentOwner$1.current) {
                                var name = getComponentNameFromType(ReactCurrentOwner$1.current.type);
                                if (name) {
                                    return '\n\nCheck the render method of `' + name + '`.';
                                }
                            }
                            return '';
                        }
                    }
                    function getSourceInfoErrorAddendum(source) {
                        {
                            if (source !== void 0) {
                                var fileName = source.fileName.replace(/^.*[\\\/]/, '');
                                var lineNumber = source.lineNumber;
                                return '\n\nCheck your code at ' + fileName + ':' + lineNumber + '.';
                            }
                            return '';
                        }
                    }
                    var ownerHasKeyUseWarning = {};
                    function getCurrentComponentErrorInfo(parentType) {
                        {
                            var info = getDeclarationErrorAddendum();
                            if (!info) {
                                var parentName = typeof parentType === 'string' ? parentType : parentType.displayName || parentType.name;
                                if (parentName) {
                                    info = '\n\nCheck the top-level render call using <' + parentName + '>.';
                                }
                            }
                            return info;
                        }
                    }
                    function validateExplicitKey(element, parentType) {
                        {
                            if (!element._store || element._store.validated || element.key != null) {
                                return;
                            }
                            element._store.validated = true;
                            var currentComponentErrorInfo = getCurrentComponentErrorInfo(parentType);
                            if (ownerHasKeyUseWarning[currentComponentErrorInfo]) {
                                return;
                            }
                            ownerHasKeyUseWarning[currentComponentErrorInfo] = true;
                            var childOwner = '';
                            if (element && element._owner && element._owner !== ReactCurrentOwner$1.current) {
                                childOwner = ' It was passed a child from ' + getComponentNameFromType(element._owner.type) + '.';
                            }
                            setCurrentlyValidatingElement$1(element);
                            error2(
                                'Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.',
                                currentComponentErrorInfo,
                                childOwner
                            );
                            setCurrentlyValidatingElement$1(null);
                        }
                    }
                    function validateChildKeys(node, parentType) {
                        {
                            if (typeof node !== 'object') {
                                return;
                            }
                            if (isArray(node)) {
                                for (var i = 0; i < node.length; i++) {
                                    var child = node[i];
                                    if (isValidElement(child)) {
                                        validateExplicitKey(child, parentType);
                                    }
                                }
                            } else if (isValidElement(node)) {
                                if (node._store) {
                                    node._store.validated = true;
                                }
                            } else if (node) {
                                var iteratorFn = getIteratorFn(node);
                                if (typeof iteratorFn === 'function') {
                                    if (iteratorFn !== node.entries) {
                                        var iterator = iteratorFn.call(node);
                                        var step;
                                        while (!(step = iterator.next()).done) {
                                            if (isValidElement(step.value)) {
                                                validateExplicitKey(step.value, parentType);
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                    function validatePropTypes(element) {
                        {
                            var type = element.type;
                            if (type === null || type === void 0 || typeof type === 'string') {
                                return;
                            }
                            var propTypes;
                            if (typeof type === 'function') {
                                propTypes = type.propTypes;
                            } else if (
                                typeof type === 'object' &&
                                (type.$$typeof === REACT_FORWARD_REF_TYPE || // Note: Memo only checks outer props here.
                                    // Inner props are checked in the reconciler.
                                    type.$$typeof === REACT_MEMO_TYPE)
                            ) {
                                propTypes = type.propTypes;
                            } else {
                                return;
                            }
                            if (propTypes) {
                                var name = getComponentNameFromType(type);
                                checkPropTypes(propTypes, element.props, 'prop', name, element);
                            } else if (type.PropTypes !== void 0 && !propTypesMisspellWarningShown) {
                                propTypesMisspellWarningShown = true;
                                var _name = getComponentNameFromType(type);
                                error2(
                                    'Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?',
                                    _name || 'Unknown'
                                );
                            }
                            if (typeof type.getDefaultProps === 'function' && !type.getDefaultProps.isReactClassApproved) {
                                error2(
                                    'getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.'
                                );
                            }
                        }
                    }
                    function validateFragmentProps(fragment) {
                        {
                            var keys = Object.keys(fragment.props);
                            for (var i = 0; i < keys.length; i++) {
                                var key = keys[i];
                                if (key !== 'children' && key !== 'key') {
                                    setCurrentlyValidatingElement$1(fragment);
                                    error2('Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.', key);
                                    setCurrentlyValidatingElement$1(null);
                                    break;
                                }
                            }
                            if (fragment.ref !== null) {
                                setCurrentlyValidatingElement$1(fragment);
                                error2('Invalid attribute `ref` supplied to `React.Fragment`.');
                                setCurrentlyValidatingElement$1(null);
                            }
                        }
                    }
                    function jsxWithValidation(type, props, key, isStaticChildren, source, self) {
                        {
                            var validType = isValidElementType(type);
                            if (!validType) {
                                var info = '';
                                if (type === void 0 || (typeof type === 'object' && type !== null && Object.keys(type).length === 0)) {
                                    info +=
                                        " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.";
                                }
                                var sourceInfo = getSourceInfoErrorAddendum(source);
                                if (sourceInfo) {
                                    info += sourceInfo;
                                } else {
                                    info += getDeclarationErrorAddendum();
                                }
                                var typeString;
                                if (type === null) {
                                    typeString = 'null';
                                } else if (isArray(type)) {
                                    typeString = 'array';
                                } else if (type !== void 0 && type.$$typeof === REACT_ELEMENT_TYPE) {
                                    typeString = '<' + (getComponentNameFromType(type.type) || 'Unknown') + ' />';
                                    info = ' Did you accidentally export a JSX literal instead of a component?';
                                } else {
                                    typeString = typeof type;
                                }
                                error2(
                                    'React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s',
                                    typeString,
                                    info
                                );
                            }
                            var element = jsxDEV(type, props, key, source, self);
                            if (element == null) {
                                return element;
                            }
                            if (validType) {
                                var children = props.children;
                                if (children !== void 0) {
                                    if (isStaticChildren) {
                                        if (isArray(children)) {
                                            for (var i = 0; i < children.length; i++) {
                                                validateChildKeys(children[i], type);
                                            }
                                            if (Object.freeze) {
                                                Object.freeze(children);
                                            }
                                        } else {
                                            error2(
                                                'React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.'
                                            );
                                        }
                                    } else {
                                        validateChildKeys(children, type);
                                    }
                                }
                            }
                            if (type === REACT_FRAGMENT_TYPE) {
                                validateFragmentProps(element);
                            } else {
                                validatePropTypes(element);
                            }
                            return element;
                        }
                    }
                    function jsxWithValidationStatic(type, props, key) {
                        {
                            return jsxWithValidation(type, props, key, true);
                        }
                    }
                    function jsxWithValidationDynamic(type, props, key) {
                        {
                            return jsxWithValidation(type, props, key, false);
                        }
                    }
                    var jsx31 = jsxWithValidationDynamic;
                    var jsxs15 = jsxWithValidationStatic;
                    exports.Fragment = REACT_FRAGMENT_TYPE;
                    exports.jsx = jsx31;
                    exports.jsxs = jsxs15;
                })();
            }
        }
    });

    // ../../node_modules/react/jsx-runtime.js
    var require_jsx_runtime = __commonJS({
        '../../node_modules/react/jsx-runtime.js'(exports, module) {
            if (process.env.NODE_ENV === 'production') {
                module.exports = require_react_jsx_runtime_production_min();
            } else {
                module.exports = require_react_jsx_runtime_development();
            }
        }
    });

    // src/components/Form.tsx
    var import_react3 = __toESM(require_react());

    // src/state/captcha.ts
    var CAPTCHA_LOAD_CALLBACK = 'on_captcha_load';
    function getCaptchaUrl(siteKey) {
        return `https://www.google.com/recaptcha/api.js?onload=${CAPTCHA_LOAD_CALLBACK}&render=${siteKey}`;
    }
    function load(captcha) {
        if (captcha?.enabled && captcha?.siteKey) {
            ensureLoadCallback();
            const captchaUrl = getCaptchaUrl(captcha.siteKey);
            const head = document.getElementsByTagName('head')[0];
            const scripts = [...head.getElementsByTagName('script')];
            const scriptSrcs = scripts.map((s) => s.src);
            const hasCaptcha = scriptSrcs.includes(captchaUrl);
            if (!hasCaptcha) {
                const captcha2 = document.createElement('script');
                captcha2.src = captchaUrl;
                head.appendChild(captcha2);
            }
        }
    }
    async function submit(formId, captcha) {
        if (captcha?.enabled && captcha?.siteKey) {
            load(captcha);
            await window[CAPTCHA_LOAD_CALLBACK].loaded;
            await new Promise((resolve) => grecaptcha.ready(() => resolve(true)));
            return grecaptcha.execute(captcha.siteKey, { action: `${formId}_submit` });
        } else {
            return Promise.resolve('');
        }
    }
    function ensureLoadCallback() {
        if (!window[CAPTCHA_LOAD_CALLBACK]) {
            let loadedResolve;
            const loaded = new Promise((resolve) => {
                loadedResolve = resolve;
            });
            const callback = function () {
                loadedResolve(null);
            };
            Object.assign(callback, { loaded });
            window[CAPTCHA_LOAD_CALLBACK] = callback;
        }
    }
    var Captcha = {
        load,
        submit
    };

    // src/state/version.ts
    function isPublishedVersion(versionStatus) {
        return !versionStatus || versionStatus === 'published';
    }
    var Version = {
        isPublishedVersion
    };

    // src/state/api.ts
    function getAllCookies() {
        return (document.cookie || '').split('; ').reduce((cookies, cookieString) => {
            const parts = cookieString.split('=');
            const name = decode(parts[0]);
            if (name) {
                cookies[name] = decode(parts.slice(1).join('='));
            }
            return cookies;
        }, {});
    }
    function decode(s) {
        try {
            return decodeURIComponent(s);
        } catch (e) {
            return s;
        }
    }
    function setCookie(key, value, expiry) {
        document.cookie = `${encodeURIComponent(key)}=${encodeURIComponent(value)}; expires=${expiry.toUTCString()}; path=/;`;
    }
    var CmsBearerTokenCookie = 'ContensisSecurityBearerToken';
    var CmsRefreshTokenCookie = 'ContensisSecurityRefreshToken';
    var RefreshTokenCookie = 'RefreshToken';
    var RefreshTokenExpiryTime = 15 * 24 * 3600 * 1e3;
    var SCOPE =
        'Security_Administrator ContentType_Read ContentType_Write ContentType_Delete Entry_Read Entry_Write Entry_Delete Project_Read Project_Write Project_Delete Workflow_Administrator';
    var GRANT_TYPE = 'contensis_classic_refresh_token';
    function isLoggedIn() {
        const cookies = getAllCookies();
        return !!cookies[CmsBearerTokenCookie];
    }
    async function getBearerToken(options) {
        const cookies = getAllCookies();
        if (cookies[CmsBearerTokenCookie]) {
            return cookies[CmsBearerTokenCookie];
        }
        const refreshToken = cookies[CmsRefreshTokenCookie] || cookies[RefreshTokenCookie];
        if (!refreshToken) {
            return null;
        }
        try {
            const currentDate = /* @__PURE__ */ new Date();
            const response = await fetch(`${options.apiUrl}/authenticate/connect/token`, {
                headers: {
                    'content-type': 'application/x-www-form-urlencoded;charset=UTF-8'
                },
                body: `scope=${encodeURIComponent(SCOPE)}&grant_type=${encodeURIComponent(GRANT_TYPE)}&refresh_token=${encodeURIComponent(refreshToken)}`,
                method: 'POST',
                mode: 'cors',
                credentials: 'omit'
            });
            if (!response.ok) {
                return null;
            }
            const data = await response.json();
            const bearerToken = data.access_token;
            const bearerTokenExpiryDate = new Date(currentDate.getTime() + data.expires_in * 1e3);
            const newRefreshToken = data.refresh_token;
            const refreshTokenExpiryDate = new Date(currentDate.getTime() + RefreshTokenExpiryTime);
            setCookie(CmsBearerTokenCookie, bearerToken, bearerTokenExpiryDate);
            if (newRefreshToken) {
                setCookie(RefreshTokenCookie, newRefreshToken, refreshTokenExpiryDate);
            }
            return bearerToken;
        } catch (e) {
            return null;
        }
    }
    async function getDefaultHeaders(options) {
        const bearerToken = await getBearerToken(options);
        const headers = {
            'content-type': 'application/json'
        };
        if (bearerToken) {
            headers.authorization = `Bearer ${bearerToken}`;
        }
        return headers;
    }
    async function getForm({ apiUrl, projectId, formId, language, versionStatus }, signal) {
        const query = versionStatus === 'latest' ? `?versionStatus=${versionStatus}` : '';
        const headers = await getDefaultHeaders({ apiUrl });
        const response = await fetch(`${apiUrl}/api/forms/projects/${projectId}/contentTypes/${formId}/languages/${language || 'default'}${query}`, {
            headers,
            method: 'GET',
            mode: 'cors',
            signal
        });
        if (response.ok) {
            const result = await response.json();
            return result;
        } else {
            const error2 = await response.json();
            return Promise.reject({
                status: response.status,
                statusText: response.statusText,
                message: error2?.message,
                error: error2
            });
        }
    }
    async function saveFormResponse({ apiUrl, projectId, formId, language, formVersionNo, versionStatus, formResponse, captcha }) {
        const headers = await getDefaultHeaders({ apiUrl });
        const captchaResponse = Version.isPublishedVersion(versionStatus) && !isLoggedIn() ? await Captcha.submit(formId, captcha) : '';
        formResponse = {
            ...formResponse,
            sys: {
                contentTypeId: formId,
                dataFormat: 'form',
                language
            }
        };
        let url = `${apiUrl}/api/forms/projects/${projectId}/contentTypes/${formId}/languages/${language || 'default'}/entries`;
        url = Version.isPublishedVersion(versionStatus) && formVersionNo ? url : `${url}?contentTypePreviewVersion=${formVersionNo}`;
        const response = await fetch(url, {
            headers: {
                ...headers,
                ...(!!captchaResponse ? { 'Recaptha-Token': captchaResponse } : {})
            },
            method: 'POST',
            body: JSON.stringify(formResponse),
            mode: 'cors'
        });
        if (response.ok) {
            const result = await response.json();
            return result;
        } else {
            const error2 = await response.json();
            return Promise.reject({
                status: response.status,
                statusText: response.statusText,
                message: error2?.message,
                error: error2
            });
        }
    }
    var Api = {
        isLoggedIn,
        getForm,
        saveFormResponse
    };

    // src/state/dates/date-utils.ts
    function pad(n, length = 2) {
        const padding = Array.from({ length })
            .map(() => '0')
            .join('');
        return `${padding}${n}`.slice(-1 * length);
    }
    function padYear(year) {
        if (year >= 100) {
            return year;
        }
        year = 1900 + year;
        const currentYear = /* @__PURE__ */ new Date().getUTCFullYear();
        return currentYear - year > 80 ? year + 100 : year;
    }
    function toNumber(n) {
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
    function isWithinRange(n, min, max) {
        if (typeof n === 'number') {
            return n >= min && n <= max;
        }
        return false;
    }
    var INVALID_DATE = 'Invalid date';
    var INVALID_TIME = 'Invalid time';
    function validateDateTimeParts(parts) {
        if (!parts?.year && !parts?.month && !parts?.day && !parts?.hour && !parts?.minute) {
            return { datetime: null };
        }
        const year = toNumber(parts.year);
        const month = toNumber(parts.month);
        const day = toNumber(parts.day);
        const hour = toNumber(parts.hour);
        const minute = toNumber(parts.minute);
        const invalid = [];
        if (!isWithinRange(year, 0, 3e3)) {
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
            const monthDays = daysInMonth(year, month);
            if (day > monthDays) {
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
            datetime: `${padYear(year)}-${pad(month)}-${pad(day)}T${pad(hour)}:${pad(minute)}`
        };
    }
    function validateDateParts(parts) {
        if (!parts?.year && !parts?.month && !parts?.day) {
            return { date: null };
        }
        const year = toNumber(parts.year);
        const month = toNumber(parts.month);
        const day = toNumber(parts.day);
        const invalid = [];
        if (!isWithinRange(year, 0, 3e3)) {
            invalid.push('year');
        }
        if (!isWithinRange(month, 1, 12)) {
            invalid.push('month');
        }
        if (!isWithinRange(day, 1, 31)) {
            invalid.push('day');
        }
        if (!invalid.includes('year') && !invalid.includes('month') && !invalid.includes('day')) {
            const monthDays = daysInMonth(year, month);
            if (day > monthDays) {
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
            date: `${padYear(year)}-${pad(month)}-${pad(day)}T00:00`
        };
    }
    function daysInMonth(year, month) {
        const date = new Date(year, month - 1, 1);
        date.setDate(0);
        return date.getDate();
    }

    // src/state/dates/time-parsing.ts
    function parseTime(time) {
        if (!time) {
            return time;
        }
        const match2 = [match3Digit, match4Digit].reduce((prev, fn) => {
            return prev || fn(time);
        }, null);
        if (!match2) {
            return INVALID_TIME;
        }
        let { hour, minute, period } = match2;
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
    function match3Digit(time) {
        const timeRegex = /^(\d{1,3})([ .])?(am|a.m|a.m.|pm|p.m|p.m.)?$/;
        const match2 = time.match(timeRegex);
        if (!match2) {
            return null;
        }
        let t = Number(match2[1]);
        if (Number.isNaN(t)) {
            return null;
        }
        let hour = 0;
        let minute = 0;
        const period = match2[3];
        const isAm = !!period?.startsWith('a');
        const isPm = !!period?.startsWith('p');
        if (t < 100) {
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
    function match4Digit(time) {
        const timeRegex = /^(\d{1,2})([.: ])?(\d{1,2})?([ .])?(am|a.m|am.|a.m.|pm|p.m|pm.|p.m.)?$/;
        const match2 = time.match(timeRegex);
        if (!match2) {
            return null;
        }
        let hour = Number(match2[1]);
        const minute = Number(match2[3]);
        const period = match2[5];
        const isAm = !!period?.startsWith('a');
        const isPm = !!period?.startsWith('p');
        return {
            hour,
            minute,
            period: isAm ? 'am' : isPm ? 'pm' : null
        };
    }

    // src/state/dates/locale.ts
    var DEFAULT_LOCALE = 'default';
    function isDatePartKey(key) {
        return key === 'day' || key === 'month' || key === 'year';
    }
    function isDate(d) {
        return Object.prototype.toString.call(d) === '[object Date]';
    }
    function isValidDate(dt) {
        return !Number.isNaN(Number(dt));
    }
    var localeInfo = /* @__PURE__ */ (function () {
        let info = void 0;
        const createLocaleInfo = function () {
            const shortDateFormatter = new Intl.DateTimeFormat(DEFAULT_LOCALE, { dateStyle: 'short' });
            const shortTimeFormatter = new Intl.DateTimeFormat(DEFAULT_LOCALE, { timeStyle: 'short' });
            const shortDatePartsOrder = shortDateFormatter
                .formatToParts()
                .map((p) => p.type)
                .filter(isDatePartKey);
            const formatters = [dateFormatter('short'), dateFormatter('medium'), dateFormatter('long'), dateFormatter('full')];
            return {
                formatters,
                shortDateMatchToParts(match2) {
                    return {
                        [shortDatePartsOrder[0]]: match2[0],
                        [shortDatePartsOrder[1]]: match2[1],
                        [shortDatePartsOrder[2]]: match2[2]
                    };
                },
                shortDateTimeMatchToParts(match2) {
                    return {
                        [shortDatePartsOrder[0]]: match2[0],
                        [shortDatePartsOrder[1]]: match2[1],
                        [shortDatePartsOrder[2]]: match2[2],
                        hour: match2[3],
                        minute: match2[4]
                    };
                },
                toShortDateString(input) {
                    if (!input) {
                        return '';
                    }
                    const dt = isDate(input) ? input : new Date(input);
                    return isValidDate(dt) ? shortDateFormatter.format(dt) : '';
                },
                toShortDateTimeString(input) {
                    if (!input) {
                        return '';
                    }
                    const dt = isDate(input) ? input : new Date(input);
                    return isValidDate(dt) ? `${shortDateFormatter.format(dt)} ${shortTimeFormatter.format(dt)}` : '';
                }
            };
        };
        return function () {
            info = info || createLocaleInfo();
            return info;
        };
    })();
    function dateFormatter(dateStyle) {
        const dtf = new Intl.DateTimeFormat(DEFAULT_LOCALE, { dateStyle });
        const parts = dtf.formatToParts();
        const monthNames = Array.from({ length: 12 }).map((_, i) => {
            const parts2 = dtf.formatToParts(new Date(2e3, i, 1));
            const monthPart = parts2.find((p) => p.type === 'month');
            return monthPart?.value || '';
        });
        return { parts, monthNames };
    }
    function parseDateFromFormatter(input, formatter) {
        const pattern = createDateParsePattern(formatter.parts);
        const result = {};
        for (const p of pattern) {
            if (p.literal) {
                const i = input.indexOf(p.literal);
                if (i >= 0) {
                    result[p.type] = input.substring(0, i);
                    input = input.substring(i + p.literal.length);
                }
            } else {
                result[p.type] = input;
            }
        }
        if (result.day && result.month && result.year) {
            let month = Number(result.month);
            if (Number.isNaN(month)) {
                const index = formatter.monthNames.findIndex((m) => !!m && m?.toUpperCase() === result.month?.toUpperCase());
                month = index >= 0 ? index + 1 : month;
            }
            const dt = validateDateParts({
                year: result.year,
                month: `${month}`,
                day: result.day
            });
            if (!dt.invalid) {
                return dt;
            }
        }
    }
    function createDateParsePattern(parts) {
        return parts.reduce((prev, part) => {
            if (part.type === 'literal') {
                if (!!prev[prev.length - 1]) {
                    prev[prev.length - 1].literal = part.value;
                }
            } else {
                prev.push({ type: part.type });
            }
            return prev;
        }, []);
    }
    function parseDateTimeFromFormatter(input, formatter) {
        const pattern = createDateTimeParsePattern(formatter.parts);
        const result = {};
        for (const p of pattern) {
            if (p.literal) {
                const i = input.indexOf(p.literal);
                if (i >= 0) {
                    result[p.type] = input.substring(0, i);
                    input = input.substring(i + p.literal.length);
                }
            } else {
                result[p.type] = input;
            }
        }
        let time = '';
        if (input) {
            time = parseTime(input);
            if (!time) {
                return void 0;
            }
        }
        if (result.day && result.month && result.year) {
            let month = Number(result.month);
            if (Number.isNaN(month)) {
                const index = formatter.monthNames.findIndex((m) => !!m && m?.toUpperCase() === result.month?.toUpperCase());
                month = index >= 0 ? index + 1 : month;
            }
            const hour = !!time ? time.split(':')[0] : void 0;
            const minute = !!time ? time.split(':')[1] : void 0;
            const dt = validateDateTimeParts({
                year: result.year,
                month: `${month}`,
                day: result.day,
                hour,
                minute
            });
            if (!dt.invalid) {
                return dt;
            }
        }
    }
    function createDateTimeParsePattern(parts) {
        return parts.reduce((prev, part) => {
            if (part.type === 'literal') {
                if (!!prev[prev.length - 1]) {
                    prev[prev.length - 1].literal = part.value;
                }
            } else {
                prev.push({ type: part.type, literal: ' ' });
            }
            return prev;
        }, []);
    }

    // src/state/dates/date-parsing.ts
    var ISO_REG_EX =
        /^([0-9]{4})-([0-1][0-9])(?:-([0-3][0-9]))?(?:[T ]?([0-2][0-9])(?::([0-5][0-9]))?(?::([0-5][0-9]))?)?(?:\.([0-9]+))?(Z|(?:\+|-)[0-9]{4})?$/;
    var SHORT_DATE_REG_EX = /^(\d{1,2})(\/|-|\.)(\d{1,2})(\/|-|\.)(\d{2,4})$/;
    function parseDate(date) {
        if (!date) {
            return date;
        }
        let d = parseIso(date);
        if (d) {
            return d.date;
        }
        d = parseShortDate(date);
        if (d) {
            return d.date;
        }
        d = localeInfo().formatters.reduce((prev, formatter) => prev || parseDateFromFormatter(date, formatter), void 0);
        if (d) {
            return d.date;
        }
        return INVALID_DATE;
    }
    function parseIso(date) {
        let match2 = date.match(ISO_REG_EX);
        if (match2) {
            const year = match2[1];
            const month = match2[2];
            const day = match2[3];
            return validateDateParts({ year, month, day });
        }
    }
    function parseShortDate(date) {
        let match2 = date.match(SHORT_DATE_REG_EX);
        if (match2) {
            const dateParts = localeInfo().shortDateMatchToParts([match2[1], match2[3], match2[5]]);
            return validateDateParts(dateParts);
        }
    }

    // src/state/dates/date-time-parsing.ts
    var ISO_REG_EX2 =
        /^([0-9]{4})-([0-1][0-9])(?:-([0-3][0-9]))?(?:[T ]?([0-2][0-9])(?::([0-5][0-9]))?(?::([0-5][0-9]))?)?(?:\.([0-9]+))?(Z|(?:\+|-)[0-9]{4})?$/;
    var SHORT_DATE_TIME_REG_EX = /^(\d{1,2})(\/|-|\.)(\d{1,2})(\/|-|\.)(\d{2,4}) (\d{1,2}):(\d{1,2})$/;
    function parseDateTime(date) {
        if (!date) {
            return date;
        }
        let d = parseIso2(date);
        if (d) {
            return d.datetime;
        }
        d = parseShortDateTime(date);
        if (d) {
            return d.datetime;
        }
        d = localeInfo().formatters.reduce((prev, formatter) => prev || parseDateTimeFromFormatter(date, formatter), void 0);
        if (d) {
            return d.datetime;
        }
        return INVALID_DATE;
    }
    function parseIso2(date) {
        let match2 = date.match(ISO_REG_EX2);
        if (match2) {
            const year = match2[1];
            const month = match2[2];
            const day = match2[3];
            const hour = match2[4];
            const minute = match2[5];
            return validateDateTimeParts({ year, month, day, hour, minute });
        }
    }
    function parseShortDateTime(date) {
        let match2 = date.match(SHORT_DATE_TIME_REG_EX);
        if (match2) {
            const dateParts = localeInfo().shortDateTimeMatchToParts([match2[1], match2[3], match2[5], match2[6], match2[7]]);
            return validateDateTimeParts(dateParts);
        }
    }

    // src/state/dates/dates.ts
    function getNowDate() {
        return toLocalIsoDate(/* @__PURE__ */ new Date());
    }
    function getNowDateTime() {
        return toLocalIsoDateTime(/* @__PURE__ */ new Date());
    }
    function getNowTime() {
        return toLocalIsoTime(/* @__PURE__ */ new Date());
    }
    function toLocalIsoDate(dt) {
        return `${dt.getFullYear()}-${pad2(dt.getMonth() + 1)}-${pad2(dt.getDate())}T00:00`;
    }
    function toLocalIsoDateTime(dt) {
        return `${dt.getFullYear()}-${pad2(dt.getMonth() + 1)}-${pad2(dt.getDate())}T${pad2(dt.getHours())}:${pad2(dt.getMinutes())}`;
    }
    function toLocalIsoTime(dt) {
        return `${pad2(dt.getHours())}:${pad2(dt.getMinutes())}`;
    }
    function pad2(n, length = 2) {
        const padding = Array.from({ length })
            .map(() => '0')
            .join('');
        return `${padding}${n}`.slice(-1 * length);
    }

    // src/state/dates/index.ts
    var DateTime = {
        getNowDate,
        getNowDateTime,
        getNowTime,
        parseDate,
        parseDateTime,
        parseTime,
        localeInfo,
        toLocalIsoDateTime
    };

    // src/state/errors.ts
    function handleError(error2) {
        console.log(error2);
    }
    function getErrorMessages(errors2) {
        return !!errors2 ? Object.values(errors2).map((e) => e.message) : null;
    }
    var Errors = {
        handleError,
        getErrorMessages
    };

    // src/state/localisations.ts
    var localisations = {
        previousButtonText: 'Previous',
        nextButtonText: 'Next',
        submitButtonText: 'Submit',
        pagingMessage: 'Page {0} of {1}',
        fieldDataTypeBooleanValidationMessage: '{0} is not a boolean',
        fieldDataTypeDateTimeValidationMessage: '{0} is not a date',
        fieldDataTypeDecimalValidationMessage: '{0} is not a number',
        fieldDataTypeIntegerValidationMessage: '{0} is not an integer',
        fieldDataTypeStringValidationMessage: '{0} is not a string',
        fieldDataTypeStringArrayValidationMessage: '{0} is not an array',
        fieldDataFormatEmailValidationMessage: '{0} is not a valid email',
        fieldDataFormatPhoneValidationMessage: '{0} is not a valid telephone number',
        fieldDataFormatTimeValidationMessage: '{0} is not a valid time',
        fieldDataFormatUrlValidationMessage: '{0} is not a valid URL',
        fieldRequiredValidationMessage: '{0} is required',
        fieldAllowedValueValidationMessage: '{0} is required',
        fieldMinValidationMessage: '{0} must be minimum of {1}',
        fieldMaxValidationMessage: '{0} must be a maximum of {1}',
        fieldMinMaxValidationMessage: '{0} must be between {1} and {2}',
        fieldMinLengthValidationMessage: '{0} must have a minimum length of {1}',
        fieldMaxLengthValidationMessage: '{0} must have a maximum length of {1}',
        fieldMinMaxLengthValidationMessage: '{0} must have a length between {1} and {2}',
        fieldMinCountValidationMessageZero: '{0} requires a minimum of {1} items',
        fieldMinCountValidationMessageOne: '{0} requires a minimum of {1} item',
        fieldMinCountValidationMessageTwo: '{0} requires a minimum of {1} items',
        fieldMinCountValidationMessageFew: '{0} requires a minimum of {1} items',
        fieldMinCountValidationMessageMany: '{0} requires a minimum of {1} items',
        fieldMinCountValidationMessageOther: '{0} requires a minimum of {1} items',
        fieldMaxCountValidationMessageZero: '{0} requires a maximum of {1} items',
        fieldMaxCountValidationMessageOne: '{0} requires a maximum of {1} item',
        fieldMaxCountValidationMessageTwo: '{0} requires a maximum of {1} items',
        fieldMaxCountValidationMessageFew: '{0} requires a maximum of {1} items',
        fieldMaxCountValidationMessageMany: '{0} requires a maximum of {1} items',
        fieldMaxCountValidationMessageOther: '{0} requires a maximum of {1} items',
        fieldMinMaxCountValidationMessage: '{0} requires between {1} and {2} items',
        fieldRegExValidationMessage: '{0} has an invalid format',
        fieldAllowedValuesValidationMessage: '{0} has an invalid value',
        fieldPastDateTimeValidationMessage: '{0} must be in the past',
        errorLabel: 'Error',
        errorSummaryTitle: 'There is a problem',
        dateInputDayLabel: 'Day',
        dateInputMonthLabel: 'Month',
        dateInputYearLabel: 'Year',
        dateInputHourLabel: 'Hour',
        dateInputMinuteLabel: 'Minute',
        formLoading: 'Loading...',
        formLoadError: 'Error loading form',
        formDisabled: 'Form is disabled',
        confirmationMessage: 'Form submitted successfully',
        errorPageTitle: 'Error',
        pleaseSelect: 'Please select',
        requiredLabel: 'required',
        characterCountMessageRemainingZero: 'You have {0} characters remaining',
        characterCountMessageRemainingOne: 'You have {0} character remaining',
        characterCountMessageRemainingTwo: 'You have {0} characters remaining',
        characterCountMessageRemainingFew: 'You have {0} characters remaining',
        characterCountMessageRemainingMany: 'You have {0} characters remaining',
        characterCountMessageRemainingOther: 'You have {0} characters remaining',
        characterCountMessageExceededZero: 'You have {0} characters too many',
        characterCountMessageExceededOne: 'You have {0} character too many',
        characterCountMessageExceededTwo: 'You have {0} characters too many',
        characterCountMessageExceededFew: 'You have {0} characters too many',
        characterCountMessageExceededMany: 'You have {0} characters too many',
        characterCountMessageExceededOther: 'You have {0} characters too many'
    };
    function format(s, ...args) {
        if (args.length === 0 || !s) {
            return '';
        }
        return s.replace(/{([^{}]*)}/g, (_a2, b) => {
            const bValue = parseInt(b, 10);
            if (!isNaN(bValue) && bValue < args.length) {
                return args[bValue];
            }
            return '';
        });
    }
    var pluralRules = new Intl.PluralRules();
    function plural(value, fns) {
        const rule = pluralRules.select(value);
        const fn = fns[rule];
        return fn();
    }
    function getPageTitle(defaultPageTitle, pageTitle, pageNo, pageCount, hasError) {
        let result = defaultPageTitle;
        if (pageCount > 1) {
            const pageProgress = format(localisations.pagingMessage, pageNo, pageCount);
            result = `${defaultPageTitle} - ${pageProgress}`;
            if (pageTitle) {
                result = `${result} - ${pageTitle}`;
            }
        }
        if (hasError) {
            result = `${localisations.errorPageTitle}: ${result}`;
        }
        return result;
    }

    // src/state/store.ts
    function memo(projector) {
        let lastArgs = null;
        let lastResult = null;
        return function (...args) {
            if (lastArgs && lastArgs.length === args.length && lastArgs.every((a, index) => Object.is(a, args[index]))) {
                return lastResult;
            }
            lastArgs = args;
            lastResult = projector.apply(null, args);
            return lastResult;
        };
    }

    // src/state/validation.ts
    var DATA_TYPE_MESSAGES = {
        boolean: localisations.fieldDataTypeBooleanValidationMessage,
        dateTime: localisations.fieldDataTypeDateTimeValidationMessage,
        decimal: localisations.fieldDataTypeDecimalValidationMessage,
        integer: localisations.fieldDataTypeIntegerValidationMessage,
        string: localisations.fieldDataTypeStringValidationMessage,
        stringArray: localisations.fieldDataTypeStringArrayValidationMessage
    };
    var DATA_FORMAT_MESSAGES = {
        email: localisations.fieldDataFormatEmailValidationMessage,
        phone: localisations.fieldDataFormatPhoneValidationMessage,
        reference: '',
        time: localisations.fieldDataFormatTimeValidationMessage,
        url: localisations.fieldDataFormatUrlValidationMessage
    };
    var createFieldValidator = memo((field) => {
        const validators = [
            ['dataType', createDataTypeValidator(field.dataType), format(DATA_TYPE_MESSAGES[field.dataType], field.name)],
            ['dataFormat', createDataFormatValidator(field.dataFormat), field.dataFormat ? format(DATA_FORMAT_MESSAGES[field.dataFormat], field.name) : ''],
            [
                'required',
                createRequiredValidator(field.validations?.required),
                field.validations?.required?.message || format(localisations.fieldRequiredValidationMessage, field.name)
            ],
            [
                'allowedValue',
                createAllowedValueValidator(field.validations?.allowedValue),
                field.validations?.allowedValue?.message || format(localisations.fieldAllowedValueValidationMessage, field.name)
            ],
            [
                'size',
                createSizeValidator(field.validations?.min, field.validations?.max),
                getRangeErrorMessage(
                    field.validations?.min,
                    field.validations?.max,
                    format(localisations.fieldMinValidationMessage, field.name, field.validations?.min?.value),
                    format(localisations.fieldMaxValidationMessage, field.name, field.validations?.max?.value),
                    format(localisations.fieldMinMaxValidationMessage, field.name, field.validations?.min?.value, field.validations?.max?.value)
                )
            ],
            [
                'length',
                createLengthValidator(field.validations?.minLength, field.validations?.maxLength),
                getRangeErrorMessage(
                    field.validations?.minLength,
                    field.validations?.maxLength,
                    format(localisations.fieldMinLengthValidationMessage, field.name, field.validations?.minLength?.value),
                    format(localisations.fieldMaxLengthValidationMessage, field.name, field.validations?.maxLength?.value),
                    format(
                        localisations.fieldMinMaxLengthValidationMessage,
                        field.name,
                        field.validations?.minLength?.value,
                        field.validations?.maxLength?.value
                    )
                )
            ],
            [
                'count',
                createCountValidator(field.validations?.minCount, field.validations?.maxCount),
                getRangeErrorMessage(
                    field.validations?.minCount,
                    field.validations?.maxCount,
                    minCountMessage(field.validations?.minCount?.value, field),
                    maxCountMessage(field.validations?.maxCount?.value, field),
                    format(localisations.fieldMinMaxCountValidationMessage, field.name, field.validations?.minCount?.value, field.validations?.maxCount?.value)
                )
            ],
            [
                'regex',
                createRegExValidator(field.validations?.regex),
                field.validations?.regex?.message || format(localisations.fieldRegExValidationMessage, field.name)
            ],
            [
                'allowedValues',
                createAllowedValuesValidator(field.validations?.allowedValues),
                field.validations?.allowedValues?.message || format(localisations.fieldAllowedValuesValidationMessage, field.name)
            ],
            [
                'pastDateTime',
                createPastDateTimeValidator(field.dataType, field.validations?.pastDateTime),
                field.validations?.pastDateTime?.message || format(localisations.fieldPastDateTimeValidationMessage, field.name)
            ]
        ];
        return function (value) {
            return validators.reduce((prev, [key, validator, message]) => {
                const error2 = validator(value);
                if (error2) {
                    prev = prev || {};
                    prev = {
                        ...prev,
                        [key]: {
                            ...error2,
                            message
                        }
                    };
                }
                return prev;
            }, null);
        };
    });
    function noopValidator() {
        return null;
    }
    function isNull(value) {
        return value == null;
    }
    function isEmpty(value) {
        return isNull(value) || value.length === 0;
    }
    function hasLength(value) {
        return typeof value === 'string' || Array.isArray(value);
    }
    function fromValid(fn, getResult) {
        return (value) => {
            const isValid = fn(value);
            return isValid ? null : getResult();
        };
    }
    function createDataTypeValidator(dataType) {
        return fromValid(
            (value) => {
                if (isNull(value)) {
                    return true;
                }
                switch (dataType) {
                    case 'boolean': {
                        return typeof value === 'boolean';
                    }
                    case 'dateTime': {
                        if (typeof value !== 'string') {
                            return false;
                        }
                        const d = new Date(value);
                        return !Number.isNaN(d.getTime());
                    }
                    case 'decimal': {
                        return typeof value === 'number';
                    }
                    case 'integer': {
                        return typeof value === 'number' && Number.isSafeInteger(value);
                    }
                    case 'string': {
                        return typeof value === 'string';
                    }
                    case 'stringArray': {
                        return Array.isArray(value);
                    }
                }
            },
            () => ({})
        );
    }
    function createDataFormatValidator(dataFormat) {
        return fromValid(
            (value) => {
                if (isEmpty(value) || !dataFormat) {
                    return true;
                }
                switch (dataFormat) {
                    case 'email': {
                        const emailRegex = new RegExp(
                            '^(([^<>()\\[\\]\\.,;:\\s@\\"]+(\\.[^<>()\\[\\]\\.,;:\\s@\\"]+)*)|(\\".+\\"))@(([^<>()[\\]\\.,;:\\s@\\"]+\\.)+[^<>()[\\]\\.,;:\\s@\\"]{2,})$',
                            'i'
                        );
                        return typeof value === 'string' && emailRegex.test(value);
                    }
                    case 'phone': {
                        return true;
                    }
                    case 'reference': {
                        return true;
                    }
                    case 'time': {
                        const timeRegex = new RegExp('^([01]?[0-9]|2[0-3])([:. ])([0-5]\\d)(\\2[0-5]\\d)?$');
                        return typeof value === 'string' && timeRegex.test(value);
                    }
                    case 'url': {
                        const urlRegex = new RegExp(
                            '^(?:(?:(?:https?|ftp):)?\\/\\/)(?:\\S+(?::\\S*)?@)?(?:(?!(?:10|127)(?:\\.\\d{1,3}){3})(?!(?:169\\.254|192\\.168)(?:\\.\\d{1,3}){2})(?!172\\.(?:1[6-9]|2\\d|3[0-1])(?:\\.\\d{1,3}){2})(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}(?:\\.(?:[1-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))|(?:(?:[a-z0-9\\u00a1-\\uffff][a-z0-9\\u00a1-\\uffff-]{0,62})?[a-z0-9\\u00a1-\\uffff]\\.)+(?:[a-z\\u00a1-\\uffff]{2,}\\.?))(?::\\d{2,5})?(?:[/?#]\\S*)?$'
                        );
                        return typeof value === 'string' && urlRegex.test(value);
                    }
                }
            },
            () => ({})
        );
    }
    function createRequiredValidator(required) {
        return !!required
            ? fromValid(
                  (value) => !isEmpty(value),
                  () => ({})
              )
            : noopValidator;
    }
    function createSizeValidator(min, max) {
        return !!min || !!max
            ? fromValid(
                  (value) => {
                      let valid = true;
                      if (typeof value === 'number') {
                          if (min) {
                              valid = value >= min.value;
                          }
                          if (valid && max) {
                              valid = value <= max.value;
                          }
                      }
                      return valid;
                  },
                  () => ({ min: min?.value, max: max?.value })
              )
            : noopValidator;
    }
    function createLengthValidator(minLength, maxLength) {
        return !!minLength || !!maxLength
            ? fromValid(
                  (value) => {
                      let valid = true;
                      if (hasLength(value)) {
                          if (minLength) {
                              valid = value.length >= minLength.value;
                          }
                          if (valid && maxLength) {
                              valid = value.length <= maxLength.value;
                          }
                      }
                      return valid;
                  },
                  () => ({ minLength: minLength?.value, maxLength: maxLength?.value })
              )
            : noopValidator;
    }
    function createCountValidator(minCount, maxCount) {
        return !!minCount || !!maxCount
            ? fromValid(
                  (value) => {
                      let valid = true;
                      if (hasLength(value)) {
                          if (minCount) {
                              valid = value.length >= minCount.value;
                          }
                          if (valid && maxCount) {
                              valid = value.length <= maxCount.value;
                          }
                      }
                      return valid;
                  },
                  () => ({ minCount: minCount?.value, maxCount: maxCount?.value })
              )
            : noopValidator;
    }
    function createRegExValidator(regex) {
        if (!regex?.pattern) {
            return noopValidator;
        }
        const pattern = regex.pattern;
        const isValidPattern = pattern && pattern.length > 3 && pattern.startsWith('/');
        const flagsIndex = pattern.lastIndexOf('/');
        const patternWithoutFlags = isValidPattern ? pattern.substring(1, flagsIndex) : pattern;
        const flags = !isValidPattern || flagsIndex === pattern.length - 1 || flagsIndex < 0 ? '' : pattern.substring(flagsIndex + 1);
        return fromValid(
            (value) => {
                if (isEmpty(value)) {
                    return true;
                }
                const regex2 = new RegExp(patternWithoutFlags, flags);
                return typeof value === 'string' && regex2.test(value);
            },
            () => ({ pattern })
        );
    }
    function createAllowedValueValidator(allowedValue) {
        const allowed = allowedValue?.value;
        if (isNull(allowed)) {
            return noopValidator;
        }
        return fromValid(
            (value) => {
                return value === allowed;
            },
            () => ({ allowed })
        );
    }
    function createAllowedValuesValidator(allowedValues) {
        const allowed = allowedValues?.labeledValues ? allowedValues.labeledValues.map((value) => value.value) : allowedValues?.values;
        if (!allowed?.length) {
            return noopValidator;
        }
        return fromValid(
            (value) => {
                if (isEmpty(value)) {
                    return true;
                }
                return Array.isArray(value) ? value.every((v) => allowed.includes(v)) : allowed.includes(value);
            },
            () => ({ allowed })
        );
    }
    function createPastDateTimeValidator(dataType, pastDateTime) {
        return !!pastDateTime
            ? fromValid(
                  (value) => {
                      if (isNull(value)) {
                          return true;
                      }
                      if (dataType === 'dateTime') {
                          const now = /* @__PURE__ */ new Date();
                          const dt = /* @__PURE__ */ new Date(`${value}`);
                          return dt.getTime() <= now.getTime();
                      }
                      return true;
                  },
                  () => ({})
              )
            : noopValidator;
    }
    function validate(value, field) {
        const validator = createFieldValidator(field);
        return validator(value);
    }
    function minCountMessage(value, field) {
        value = value || 0;
        return plural(value, {
            zero: () => format(localisations.fieldMinCountValidationMessageZero, field.name, value),
            one: () => format(localisations.fieldMinCountValidationMessageOne, field.name, value),
            two: () => format(localisations.fieldMinCountValidationMessageTwo, field.name, value),
            few: () => format(localisations.fieldMinCountValidationMessageFew, field.name, value),
            many: () => format(localisations.fieldMinCountValidationMessageMany, field.name, value),
            other: () => format(localisations.fieldMinCountValidationMessageOther, field.name, value)
        });
    }
    function maxCountMessage(value, field) {
        value = value || 0;
        return plural(value, {
            zero: () => format(localisations.fieldMaxCountValidationMessageZero, field.name, value),
            one: () => format(localisations.fieldMaxCountValidationMessageOne, field.name, value),
            two: () => format(localisations.fieldMaxCountValidationMessageTwo, field.name, value),
            few: () => format(localisations.fieldMaxCountValidationMessageFew, field.name, value),
            many: () => format(localisations.fieldMaxCountValidationMessageMany, field.name, value),
            other: () => format(localisations.fieldMaxCountValidationMessageOther, field.name, value)
        });
    }
    function getRangeErrorMessage(min, max, defaultMinMessage, defaultMaxMessage, defaultRangeMessage) {
        if (min?.message) {
            return min.message;
        }
        if (max?.message) {
            return max.message;
        }
        if (min && max) {
            return defaultRangeMessage;
        }
        if (min) {
            return defaultMinMessage;
        }
        if (max) {
            return defaultMaxMessage;
        }
        return '';
    }
    var Validation = {
        validate
    };

    // src/state/fields.ts
    var DEFAULT_DATA_TYPE_EDITOR_TYPES = {
        boolean: 'checkbox',
        dateTime: 'date',
        decimal: 'decimal',
        integer: 'integer',
        string: 'text',
        stringArray: 'radio'
    };
    var DEFAULT_DATA_FORMAT_EDITOR_TYPES = {
        email: 'email',
        phone: 'tel',
        reference: 'reference',
        time: 'time',
        url: 'url'
    };
    var DEFAULT_EDITOR_ID_EDITOR_TYPES = {
        date: 'date',
        datetime: 'datetime',
        decimal: 'decimal',
        integer: 'integer',
        list: 'radio',
        'list-dropdown': 'select',
        multiline: 'multiline',
        text: 'text'
    };
    function getEditorType(field) {
        let editorType = field.editor?.id ? DEFAULT_EDITOR_ID_EDITOR_TYPES[field.editor.id] : null;
        if (!editorType && field.dataFormat) {
            editorType = DEFAULT_DATA_FORMAT_EDITOR_TYPES[field.dataFormat];
        }
        if (!editorType && (field.validations?.allowedValues?.values || field.validations?.allowedValues?.labeledValues)) {
            editorType = field.dataType === 'stringArray' ? 'multiselect' : 'radio';
        }
        editorType = editorType || DEFAULT_DATA_TYPE_EDITOR_TYPES[field.dataType];
        return editorType || 'text';
    }
    var EMPTY_FIELD_VALUES = {
        boolean: false,
        dateTime: null,
        decimal: null,
        integer: null,
        string: '',
        stringArray: null
    };
    function getEmptyFieldValue(field) {
        return EMPTY_FIELD_VALUES[field.dataType];
    }
    function getOptions(field, htmlId) {
        const pairs = field?.validations?.allowedValues?.labeledValues
            ? field?.validations?.allowedValues?.labeledValues?.map((value) => value)
            : field?.validations?.allowedValues?.values?.map((value) => ({ value, label: value }));
        let options = pairs
            ?.filter((pair) => !!pair.value)
            .map((pair, index) => {
                return {
                    key: `${index}`,
                    htmlId: `${htmlId}-option-${index}`,
                    value: pair.value || '',
                    label: pair.label
                };
            });
        if (getEditorType(field) === 'select') {
            options = [
                {
                    key: '',
                    htmlId: `${htmlId}-option--1`,
                    value: '',
                    label: field?.editor?.properties?.placeholderText || localisations.pleaseSelect
                },
                ...(options || [])
            ];
        }
        return options;
    }
    function getDefaultValue(field) {
        const defaultValue = typeof field?.default !== 'undefined' && field?.default !== null ? field.default : getEmptyFieldValue(field);
        if (field.dataType === 'dateTime' && defaultValue === 'now()') {
            return getEditorType(field) === 'datetime' ? DateTime.getNowDateTime() : DateTime.getNowDate();
        } else if (field.dataType === 'string' && field.dataFormat === 'time' && defaultValue === 'now()') {
            return DateTime.getNowTime();
        }
        return defaultValue;
    }
    function getInputValue(field, value) {
        if (field.dataType === 'dateTime') {
            const editor = getEditorType(field);
            if (editor === 'datetime') {
                return DateTime.localeInfo().toShortDateTimeString(value);
            } else {
                return DateTime.localeInfo().toShortDateString(value);
            }
        }
        return value;
    }
    function reduceFields(form, fn) {
        return form?.fields ? form.fields.reduce((prev, field, index) => ({ ...prev, [field.id]: fn(field, index) }), {}) : {};
    }
    function validate2(field, value) {
        return Validation.validate(value, field);
    }
    function isNullish(o) {
        return o === null || typeof o === 'undefined';
    }
    function getInitialValue(field, query, progressValue) {
        let value = null;
        if (typeof progressValue !== 'undefined') {
            const errors2 = validate2(field, progressValue);
            if (!errors2?.dataType && !errors2?.allowedValues) {
                value = progressValue;
            }
        }
        if (isNullish(value)) {
            let queryValue = null;
            const firstQuery = query?.[0];
            switch (field.dataType) {
                case 'boolean': {
                    if (firstQuery === 'true' || firstQuery === 'checked' || firstQuery === 'on') {
                        queryValue = true;
                    } else if (firstQuery === 'false' || firstQuery === 'unchecked' || firstQuery === 'off') {
                        queryValue = false;
                    }
                    break;
                }
                case 'dateTime': {
                    if (firstQuery) {
                        if (field.dataType === 'dateTime') {
                            return getEditorType(field) === 'datetime' ? DateTime.parseDateTime(firstQuery) : DateTime.parseDate(firstQuery);
                        } else if (field.dataType === 'string' && field.dataFormat === 'time') {
                            return DateTime.parseTime(firstQuery);
                        }
                    }
                    break;
                }
                case 'decimal': {
                    queryValue = !!firstQuery ? parseFloat(firstQuery) : null;
                    break;
                }
                case 'integer': {
                    queryValue = !!firstQuery ? parseInt(firstQuery, 10) : null;
                    break;
                }
                case 'string': {
                    queryValue = firstQuery;
                    break;
                }
                case 'stringArray': {
                    if (query) {
                        if (field.validations?.allowedValues) {
                            const allowed = field.validations.allowedValues.labeledValues
                                ? field.validations.allowedValues.labeledValues.map((value2) => value2.value)
                                : field.validations.allowedValues.values;
                            if (allowed) {
                                queryValue = query.filter((item) => allowed.includes(item));
                            }
                        } else {
                            queryValue = query;
                        }
                    }
                    break;
                }
            }
            if (queryValue !== null) {
                const errors2 = validate2(field, queryValue);
                if (!errors2?.dataType && !errors2?.allowedValues) {
                    value = queryValue;
                }
            }
        }
        if (isNullish(value)) {
            value = getDefaultValue(field);
        }
        return value;
    }
    var Fields = {
        getEditorType,
        getOptions,
        getInitialValue,
        getInputValue,
        reduceFields,
        validate: validate2
    };

    // src/state/progress.ts
    var AUTO_SAVE_PROGRESS_EXPIRY_DAYS = 30;
    function getProgressExpiry() {
        const d = /* @__PURE__ */ new Date();
        d.setDate(d.getDate() + AUTO_SAVE_PROGRESS_EXPIRY_DAYS);
        return DateTime.toLocalIsoDateTime(d);
    }
    function autoSave(form, value) {
        if (form?.id && form?.properties?.autoSaveProgress) {
            localStorage.setItem(`contensis-form-${form?.id}-expiry`, getProgressExpiry());
            localStorage.setItem(`contensis-form-${form?.id}-value`, !!value ? JSON.stringify(value) : '');
        }
    }
    function reset(form) {
        if (form?.id) {
            localStorage.removeItem(`contensis-form-${form?.id}-expiry`);
            localStorage.removeItem(`contensis-form-${form?.id}-value`);
        }
    }
    function load2(form) {
        if (!!form) {
            const expiry = localStorage.getItem(`contensis-form-${form.id}-expiry`);
            const jsonValue = localStorage.getItem(`contensis-form-${form.id}-value`);
            const d = DateTime.getNowDateTime();
            if (expiry && jsonValue && d < expiry) {
                try {
                    const value = JSON.parse(jsonValue);
                    return {
                        value
                    };
                } catch {}
            }
        }
        return null;
    }
    function loadQuery() {
        if (window?.location?.search) {
            const params = new URLSearchParams(window.location.search);
            return [...params.keys()].reduce(
                (prev, key) => ({
                    ...prev,
                    [key]: params.getAll(key)
                }),
                {}
            );
        }
        return {};
    }
    var Progress = {
        autoSave,
        reset,
        load: load2,
        loadQuery
    };

    // src/state/form.ts
    function getInputValue2(form, value) {
        return Fields.reduceFields(form, (field) => Fields.getInputValue(field, value?.[field.id]));
    }
    function getLocalizations(form) {
        const l = form?.properties?.localizations;
        return {
            next: l?.next || localisations.nextButtonText,
            previous: l?.previous || localisations.previousButtonText,
            submit: l?.submit || localisations.submitButtonText,
            errorSummaryTitle: l?.errorSummaryTitle || localisations.errorSummaryTitle
        };
    }
    function validate3(form, value) {
        return Fields.reduceFields(form, (field) => Validation.validate(value?.[field.id], field));
    }
    function getPages(form) {
        if (!form) {
            return [];
        }
        if (form?.properties?.mode === 'survey') {
            return form.fields.map((field, index) => {
                const { id, name, description } = field;
                return {
                    pageNo: index + 1,
                    id,
                    title: name,
                    description,
                    fields: [field]
                };
            });
        } else if (!form.groups) {
            return [
                {
                    pageNo: 1,
                    id: 'page1',
                    title: '',
                    description: null,
                    fields: form.fields
                }
            ];
        } else {
            return form.groups.map((group, index) => {
                const { id, name, description } = group;
                return {
                    pageNo: index + 1,
                    id,
                    title: name,
                    description,
                    fields: (form?.fields || []).filter((field) => field.groupId === id)
                };
            });
        }
    }
    function getInitialValue2(form) {
        const query = Progress.loadQuery();
        const progress = Progress.load(form);
        return Fields.reduceFields(form, (field) => Fields.getInitialValue(field, query?.[field.id], progress?.value?.[field.id]));
    }
    function pageHasErrors(page, errors2) {
        return !!page && !!page.fields.some((field) => !!errors2?.[field.id]);
    }
    var Form = {
        // getDefaultValue,
        getInputValue: getInputValue2,
        getLocalizations,
        getPages,
        getInitialValue: getInitialValue2,
        pageHasErrors,
        validate: validate3
    };

    // src/state/rules.ts
    function isConfirmationRuleReturnUri(r) {
        return !!r?.link?.sys?.uri;
    }
    function isConfirmationRuleReturnContent(r) {
        return !!r?.content;
    }
    var Rules = {
        isConfirmationRuleReturnContent,
        isConfirmationRuleReturnUri
    };

    // src/components/FormConfirmation.tsx
    var import_jsx_runtime = __toESM(require_jsx_runtime());
    function FormConfirmation(props) {
        const confirmation = Rules.isConfirmationRuleReturnContent(props.rule) ? props.rule.content : null;
        return !!confirmation
            ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)('div', { className: 'form-confirmation-message', dangerouslySetInnerHTML: { __html: confirmation } })
            : /* @__PURE__ */ (0, import_jsx_runtime.jsx)('div', { className: 'form-confirmation-message', children: localisations.confirmationMessage });
    }

    // src/components/FormButtons.tsx
    var import_jsx_runtime2 = __toESM(require_jsx_runtime());
    function FormButtons({ pageIndex, pageCount, currentPage, form, previousPage }) {
        const isFirstPage = pageIndex === 0;
        const isLastPage = !!pageCount && pageIndex === pageCount - 1;
        const localizations = Form.getLocalizations(form);
        const pageProgress = pageCount > 1 ? format(localisations.pagingMessage, currentPage.pageNo, pageCount) : '';
        return /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)('div', {
            className: 'form-footer',
            children: [
                /* @__PURE__ */ (0, import_jsx_runtime2.jsx)('div', { className: 'form-footer-page', children: pageProgress }),
                /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)('div', {
                    className: 'form-actions',
                    children: [
                        isFirstPage
                            ? null
                            : /* @__PURE__ */ (0, import_jsx_runtime2.jsx)('button', {
                                  type: 'button',
                                  className: 'form-button form-button--secondary form-button--previous',
                                  onClick: previousPage,
                                  children: localizations.previous
                              }),
                        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)('button', {
                            type: 'submit',
                            className: isLastPage
                                ? 'form-button form-button--primary form-button--submit'
                                : 'form-button form-button--secondary form-button--next',
                            children: isLastPage ? localizations.submit : localizations.next
                        })
                    ]
                })
            ]
        });
    }

    // src/components/utils.ts
    function attr(...args) {
        const keys = args.reduce((prev, arg) => {
            if (arg) {
                if (typeof arg === 'string') {
                    prev.push(arg);
                } else if (Array.isArray(arg)) {
                    prev.push(...arg.filter((a) => !!a));
                } else {
                    Object.keys(arg)
                        .filter((key) => !!arg[key])
                        .forEach((key) => prev.push(key));
                }
            }
            return prev;
        }, []);
        return keys.length ? keys.join(' ') : void 0;
    }
    function progressId(htmlId) {
        return `${htmlId}-progress`;
    }
    function inputId(inputs) {
        return inputs.htmlId;
    }
    function instructionsId(inputs) {
        return `${inputs.htmlId}-instructions`;
    }
    function errorsId(inputs) {
        return `${inputs.htmlId}-errors`;
    }
    function charCountId(inputs) {
        return `${inputs.htmlId}-char-count`;
    }
    function inputClassname(inputs, fieldType, additionalCss) {
        return attr(
            `form-${fieldType}-input`,
            additionalCss?.filter((suffix) => !!suffix).map((suffix) => `form-${fieldType}-input-${suffix}`),
            {
                [`form-${fieldType}-input-has-error`]: inputs.showErrors && !!inputs.errors
            }
        );
    }
    function inputAttrs(inputs, fieldType, settings) {
        const invalid = inputs.showErrors && !!inputs.errors;
        return {
            ref: inputs.inputRef,
            className: !!fieldType ? inputClassname(inputs, fieldType, settings?.cssSuffix) : void 0,
            id: inputs.htmlId,
            name: inputs.htmlId,
            autoComplete: inputs.autoFill || settings?.autoComplete,
            rows: inputs.rows || void 0,
            placeholder: (settings.placeholder && inputs.placeholder) || void 0,
            'aria-invalid': invalid,
            'aria-describedby': attr({
                [instructionsId(inputs)]: !!inputs.instructions,
                [errorsId(inputs)]: invalid,
                [charCountId(inputs)]: !!inputs.maxLength
            })
        };
    }
    function textValue(value) {
        if (typeof value === 'string') {
            return value;
        }
        if (typeof value === 'number') {
            return `${value}`;
        }
        return '';
    }
    function formFieldCss(inputs, formFieldType) {
        return attr(
            `form-${formFieldType}`,
            [
                inputs.cssClass || '',
                inputs.labelPosition === 'top' ? `form-${formFieldType}-label-top` : '',
                inputs.labelPosition === 'leftAligned' ? `form-${formFieldType}-label-left` : ''
            ],
            {
                [`form-${formFieldType}-has-error`]: inputs.showErrors && !!inputs.errors
            }
        );
    }

    // src/components/FormFieldErrors.tsx
    var import_jsx_runtime3 = __toESM(require_jsx_runtime());
    function FormFieldErrors({ showErrors, errors: errors2, errorMessage, ...attrs }) {
        return showErrors && errors2
            ? /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)('div', {
                  id: errorsId(attrs),
                  className: 'form-field-error',
                  children: [
                      /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)('span', { className: 'visually-hidden', children: [localisations.errorLabel, ':'] }),
                      ' ',
                      errorMessage
                  ]
              })
            : null;
    }

    // src/components/FormFieldFooter.tsx
    var import_jsx_runtime4 = __toESM(require_jsx_runtime());
    function FormFieldFooter({ value, maxLength, ...attrs }) {
        let message = '';
        let remaining = 0;
        if (maxLength) {
            const v = !!value ? `${value}` : '';
            remaining = maxLength - v.length;
            message = getCharCountMessage(remaining);
        }
        return message
            ? /* @__PURE__ */ (0, import_jsx_runtime4.jsx)('div', {
                  id: charCountId(attrs),
                  className: attr('form-field-char-count', { 'field-char-count-error': remaining < 0 }),
                  children: message
              })
            : null;
    }
    function getCharCountMessage(remaining) {
        const exceeded = -1 * remaining;
        return remaining < 0
            ? plural(exceeded, {
                  zero: () => format(localisations.characterCountMessageExceededZero, exceeded),
                  one: () => format(localisations.characterCountMessageExceededOne, exceeded),
                  two: () => format(localisations.characterCountMessageExceededTwo, exceeded),
                  few: () => format(localisations.characterCountMessageExceededFew, exceeded),
                  many: () => format(localisations.characterCountMessageExceededMany, exceeded),
                  other: () => format(localisations.characterCountMessageExceededOther, exceeded)
              })
            : plural(remaining, {
                  zero: () => format(localisations.characterCountMessageRemainingZero, remaining),
                  one: () => format(localisations.characterCountMessageRemainingOne, remaining),
                  two: () => format(localisations.characterCountMessageRemainingTwo, remaining),
                  few: () => format(localisations.characterCountMessageRemainingFew, remaining),
                  many: () => format(localisations.characterCountMessageRemainingMany, remaining),
                  other: () => format(localisations.characterCountMessageRemainingOther, remaining)
              });
    }

    // ../../node_modules/markdown-it/lib/common/utils.mjs
    var utils_exports = {};
    __export(utils_exports, {
        arrayReplaceAt: () => arrayReplaceAt,
        assign: () => assign,
        escapeHtml: () => escapeHtml,
        escapeRE: () => escapeRE,
        fromCodePoint: () => fromCodePoint2,
        has: () => has,
        isMdAsciiPunct: () => isMdAsciiPunct,
        isPunctChar: () => isPunctChar,
        isSpace: () => isSpace,
        isString: () => isString,
        isValidEntityCode: () => isValidEntityCode,
        isWhiteSpace: () => isWhiteSpace,
        lib: () => lib,
        normalizeReference: () => normalizeReference,
        unescapeAll: () => unescapeAll,
        unescapeMd: () => unescapeMd
    });

    // ../../node_modules/mdurl/index.mjs
    var mdurl_exports = {};
    __export(mdurl_exports, {
        decode: () => decode_default,
        encode: () => encode_default,
        format: () => format2,
        parse: () => parse_default
    });

    // ../../node_modules/mdurl/lib/decode.mjs
    var decodeCache = {};
    function getDecodeCache(exclude) {
        let cache = decodeCache[exclude];
        if (cache) {
            return cache;
        }
        cache = decodeCache[exclude] = [];
        for (let i = 0; i < 128; i++) {
            const ch = String.fromCharCode(i);
            cache.push(ch);
        }
        for (let i = 0; i < exclude.length; i++) {
            const ch = exclude.charCodeAt(i);
            cache[ch] = '%' + ('0' + ch.toString(16).toUpperCase()).slice(-2);
        }
        return cache;
    }
    function decode2(string, exclude) {
        if (typeof exclude !== 'string') {
            exclude = decode2.defaultChars;
        }
        const cache = getDecodeCache(exclude);
        return string.replace(/(%[a-f0-9]{2})+/gi, function (seq) {
            let result = '';
            for (let i = 0, l = seq.length; i < l; i += 3) {
                const b1 = parseInt(seq.slice(i + 1, i + 3), 16);
                if (b1 < 128) {
                    result += cache[b1];
                    continue;
                }
                if ((b1 & 224) === 192 && i + 3 < l) {
                    const b2 = parseInt(seq.slice(i + 4, i + 6), 16);
                    if ((b2 & 192) === 128) {
                        const chr = ((b1 << 6) & 1984) | (b2 & 63);
                        if (chr < 128) {
                            result += '\uFFFD\uFFFD';
                        } else {
                            result += String.fromCharCode(chr);
                        }
                        i += 3;
                        continue;
                    }
                }
                if ((b1 & 240) === 224 && i + 6 < l) {
                    const b2 = parseInt(seq.slice(i + 4, i + 6), 16);
                    const b3 = parseInt(seq.slice(i + 7, i + 9), 16);
                    if ((b2 & 192) === 128 && (b3 & 192) === 128) {
                        const chr = ((b1 << 12) & 61440) | ((b2 << 6) & 4032) | (b3 & 63);
                        if (chr < 2048 || (chr >= 55296 && chr <= 57343)) {
                            result += '\uFFFD\uFFFD\uFFFD';
                        } else {
                            result += String.fromCharCode(chr);
                        }
                        i += 6;
                        continue;
                    }
                }
                if ((b1 & 248) === 240 && i + 9 < l) {
                    const b2 = parseInt(seq.slice(i + 4, i + 6), 16);
                    const b3 = parseInt(seq.slice(i + 7, i + 9), 16);
                    const b4 = parseInt(seq.slice(i + 10, i + 12), 16);
                    if ((b2 & 192) === 128 && (b3 & 192) === 128 && (b4 & 192) === 128) {
                        let chr = ((b1 << 18) & 1835008) | ((b2 << 12) & 258048) | ((b3 << 6) & 4032) | (b4 & 63);
                        if (chr < 65536 || chr > 1114111) {
                            result += '\uFFFD\uFFFD\uFFFD\uFFFD';
                        } else {
                            chr -= 65536;
                            result += String.fromCharCode(55296 + (chr >> 10), 56320 + (chr & 1023));
                        }
                        i += 9;
                        continue;
                    }
                }
                result += '\uFFFD';
            }
            return result;
        });
    }
    decode2.defaultChars = ';/?:@&=+$,#';
    decode2.componentChars = '';
    var decode_default = decode2;

    // ../../node_modules/mdurl/lib/encode.mjs
    var encodeCache = {};
    function getEncodeCache(exclude) {
        let cache = encodeCache[exclude];
        if (cache) {
            return cache;
        }
        cache = encodeCache[exclude] = [];
        for (let i = 0; i < 128; i++) {
            const ch = String.fromCharCode(i);
            if (/^[0-9a-z]$/i.test(ch)) {
                cache.push(ch);
            } else {
                cache.push('%' + ('0' + i.toString(16).toUpperCase()).slice(-2));
            }
        }
        for (let i = 0; i < exclude.length; i++) {
            cache[exclude.charCodeAt(i)] = exclude[i];
        }
        return cache;
    }
    function encode(string, exclude, keepEscaped) {
        if (typeof exclude !== 'string') {
            keepEscaped = exclude;
            exclude = encode.defaultChars;
        }
        if (typeof keepEscaped === 'undefined') {
            keepEscaped = true;
        }
        const cache = getEncodeCache(exclude);
        let result = '';
        for (let i = 0, l = string.length; i < l; i++) {
            const code2 = string.charCodeAt(i);
            if (keepEscaped && code2 === 37 && i + 2 < l) {
                if (/^[0-9a-f]{2}$/i.test(string.slice(i + 1, i + 3))) {
                    result += string.slice(i, i + 3);
                    i += 2;
                    continue;
                }
            }
            if (code2 < 128) {
                result += cache[code2];
                continue;
            }
            if (code2 >= 55296 && code2 <= 57343) {
                if (code2 >= 55296 && code2 <= 56319 && i + 1 < l) {
                    const nextCode = string.charCodeAt(i + 1);
                    if (nextCode >= 56320 && nextCode <= 57343) {
                        result += encodeURIComponent(string[i] + string[i + 1]);
                        i++;
                        continue;
                    }
                }
                result += '%EF%BF%BD';
                continue;
            }
            result += encodeURIComponent(string[i]);
        }
        return result;
    }
    encode.defaultChars = ";/?:@&=+$,-_.!~*'()#";
    encode.componentChars = "-_.!~*'()";
    var encode_default = encode;

    // ../../node_modules/mdurl/lib/format.mjs
    function format2(url) {
        let result = '';
        result += url.protocol || '';
        result += url.slashes ? '//' : '';
        result += url.auth ? url.auth + '@' : '';
        if (url.hostname && url.hostname.indexOf(':') !== -1) {
            result += '[' + url.hostname + ']';
        } else {
            result += url.hostname || '';
        }
        result += url.port ? ':' + url.port : '';
        result += url.pathname || '';
        result += url.search || '';
        result += url.hash || '';
        return result;
    }

    // ../../node_modules/mdurl/lib/parse.mjs
    function Url() {
        this.protocol = null;
        this.slashes = null;
        this.auth = null;
        this.port = null;
        this.hostname = null;
        this.hash = null;
        this.search = null;
        this.pathname = null;
    }
    var protocolPattern = /^([a-z0-9.+-]+:)/i;
    var portPattern = /:[0-9]*$/;
    var simplePathPattern = /^(\/\/?(?!\/)[^\?\s]*)(\?[^\s]*)?$/;
    var delims = ['<', '>', '"', '`', ' ', '\r', '\n', '	'];
    var unwise = ['{', '}', '|', '\\', '^', '`'].concat(delims);
    var autoEscape = ["'"].concat(unwise);
    var nonHostChars = ['%', '/', '?', ';', '#'].concat(autoEscape);
    var hostEndingChars = ['/', '?', '#'];
    var hostnameMaxLen = 255;
    var hostnamePartPattern = /^[+a-z0-9A-Z_-]{0,63}$/;
    var hostnamePartStart = /^([+a-z0-9A-Z_-]{0,63})(.*)$/;
    var hostlessProtocol = {
        javascript: true,
        'javascript:': true
    };
    var slashedProtocol = {
        http: true,
        https: true,
        ftp: true,
        gopher: true,
        file: true,
        'http:': true,
        'https:': true,
        'ftp:': true,
        'gopher:': true,
        'file:': true
    };
    function urlParse(url, slashesDenoteHost) {
        if (url && url instanceof Url) return url;
        const u = new Url();
        u.parse(url, slashesDenoteHost);
        return u;
    }
    Url.prototype.parse = function (url, slashesDenoteHost) {
        let lowerProto, hec, slashes;
        let rest = url;
        rest = rest.trim();
        if (!slashesDenoteHost && url.split('#').length === 1) {
            const simplePath = simplePathPattern.exec(rest);
            if (simplePath) {
                this.pathname = simplePath[1];
                if (simplePath[2]) {
                    this.search = simplePath[2];
                }
                return this;
            }
        }
        let proto = protocolPattern.exec(rest);
        if (proto) {
            proto = proto[0];
            lowerProto = proto.toLowerCase();
            this.protocol = proto;
            rest = rest.substr(proto.length);
        }
        if (slashesDenoteHost || proto || rest.match(/^\/\/[^@\/]+@[^@\/]+/)) {
            slashes = rest.substr(0, 2) === '//';
            if (slashes && !(proto && hostlessProtocol[proto])) {
                rest = rest.substr(2);
                this.slashes = true;
            }
        }
        if (!hostlessProtocol[proto] && (slashes || (proto && !slashedProtocol[proto]))) {
            let hostEnd = -1;
            for (let i = 0; i < hostEndingChars.length; i++) {
                hec = rest.indexOf(hostEndingChars[i]);
                if (hec !== -1 && (hostEnd === -1 || hec < hostEnd)) {
                    hostEnd = hec;
                }
            }
            let auth, atSign;
            if (hostEnd === -1) {
                atSign = rest.lastIndexOf('@');
            } else {
                atSign = rest.lastIndexOf('@', hostEnd);
            }
            if (atSign !== -1) {
                auth = rest.slice(0, atSign);
                rest = rest.slice(atSign + 1);
                this.auth = auth;
            }
            hostEnd = -1;
            for (let i = 0; i < nonHostChars.length; i++) {
                hec = rest.indexOf(nonHostChars[i]);
                if (hec !== -1 && (hostEnd === -1 || hec < hostEnd)) {
                    hostEnd = hec;
                }
            }
            if (hostEnd === -1) {
                hostEnd = rest.length;
            }
            if (rest[hostEnd - 1] === ':') {
                hostEnd--;
            }
            const host = rest.slice(0, hostEnd);
            rest = rest.slice(hostEnd);
            this.parseHost(host);
            this.hostname = this.hostname || '';
            const ipv6Hostname = this.hostname[0] === '[' && this.hostname[this.hostname.length - 1] === ']';
            if (!ipv6Hostname) {
                const hostparts = this.hostname.split(/\./);
                for (let i = 0, l = hostparts.length; i < l; i++) {
                    const part = hostparts[i];
                    if (!part) {
                        continue;
                    }
                    if (!part.match(hostnamePartPattern)) {
                        let newpart = '';
                        for (let j = 0, k = part.length; j < k; j++) {
                            if (part.charCodeAt(j) > 127) {
                                newpart += 'x';
                            } else {
                                newpart += part[j];
                            }
                        }
                        if (!newpart.match(hostnamePartPattern)) {
                            const validParts = hostparts.slice(0, i);
                            const notHost = hostparts.slice(i + 1);
                            const bit = part.match(hostnamePartStart);
                            if (bit) {
                                validParts.push(bit[1]);
                                notHost.unshift(bit[2]);
                            }
                            if (notHost.length) {
                                rest = notHost.join('.') + rest;
                            }
                            this.hostname = validParts.join('.');
                            break;
                        }
                    }
                }
            }
            if (this.hostname.length > hostnameMaxLen) {
                this.hostname = '';
            }
            if (ipv6Hostname) {
                this.hostname = this.hostname.substr(1, this.hostname.length - 2);
            }
        }
        const hash = rest.indexOf('#');
        if (hash !== -1) {
            this.hash = rest.substr(hash);
            rest = rest.slice(0, hash);
        }
        const qm = rest.indexOf('?');
        if (qm !== -1) {
            this.search = rest.substr(qm);
            rest = rest.slice(0, qm);
        }
        if (rest) {
            this.pathname = rest;
        }
        if (slashedProtocol[lowerProto] && this.hostname && !this.pathname) {
            this.pathname = '';
        }
        return this;
    };
    Url.prototype.parseHost = function (host) {
        let port = portPattern.exec(host);
        if (port) {
            port = port[0];
            if (port !== ':') {
                this.port = port.substr(1);
            }
            host = host.substr(0, host.length - port.length);
        }
        if (host) {
            this.hostname = host;
        }
    };
    var parse_default = urlParse;

    // ../../node_modules/uc.micro/index.mjs
    var uc_exports = {};
    __export(uc_exports, {
        Any: () => regex_default,
        Cc: () => regex_default2,
        Cf: () => regex_default3,
        P: () => regex_default4,
        S: () => regex_default5,
        Z: () => regex_default6
    });

    // ../../node_modules/uc.micro/properties/Any/regex.mjs
    var regex_default = /[\0-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/;

    // ../../node_modules/uc.micro/categories/Cc/regex.mjs
    var regex_default2 = /[\0-\x1F\x7F-\x9F]/;

    // ../../node_modules/uc.micro/categories/Cf/regex.mjs
    var regex_default3 =
        /[\xAD\u0600-\u0605\u061C\u06DD\u070F\u0890\u0891\u08E2\u180E\u200B-\u200F\u202A-\u202E\u2060-\u2064\u2066-\u206F\uFEFF\uFFF9-\uFFFB]|\uD804[\uDCBD\uDCCD]|\uD80D[\uDC30-\uDC3F]|\uD82F[\uDCA0-\uDCA3]|\uD834[\uDD73-\uDD7A]|\uDB40[\uDC01\uDC20-\uDC7F]/;

    // ../../node_modules/uc.micro/categories/P/regex.mjs
    var regex_default4 =
        /[!-#%-\*,-\/:;\?@\[-\]_\{\}\xA1\xA7\xAB\xB6\xB7\xBB\xBF\u037E\u0387\u055A-\u055F\u0589\u058A\u05BE\u05C0\u05C3\u05C6\u05F3\u05F4\u0609\u060A\u060C\u060D\u061B\u061D-\u061F\u066A-\u066D\u06D4\u0700-\u070D\u07F7-\u07F9\u0830-\u083E\u085E\u0964\u0965\u0970\u09FD\u0A76\u0AF0\u0C77\u0C84\u0DF4\u0E4F\u0E5A\u0E5B\u0F04-\u0F12\u0F14\u0F3A-\u0F3D\u0F85\u0FD0-\u0FD4\u0FD9\u0FDA\u104A-\u104F\u10FB\u1360-\u1368\u1400\u166E\u169B\u169C\u16EB-\u16ED\u1735\u1736\u17D4-\u17D6\u17D8-\u17DA\u1800-\u180A\u1944\u1945\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B5A-\u1B60\u1B7D\u1B7E\u1BFC-\u1BFF\u1C3B-\u1C3F\u1C7E\u1C7F\u1CC0-\u1CC7\u1CD3\u2010-\u2027\u2030-\u2043\u2045-\u2051\u2053-\u205E\u207D\u207E\u208D\u208E\u2308-\u230B\u2329\u232A\u2768-\u2775\u27C5\u27C6\u27E6-\u27EF\u2983-\u2998\u29D8-\u29DB\u29FC\u29FD\u2CF9-\u2CFC\u2CFE\u2CFF\u2D70\u2E00-\u2E2E\u2E30-\u2E4F\u2E52-\u2E5D\u3001-\u3003\u3008-\u3011\u3014-\u301F\u3030\u303D\u30A0\u30FB\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA95F\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAADE\uAADF\uAAF0\uAAF1\uABEB\uFD3E\uFD3F\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE61\uFE63\uFE68\uFE6A\uFE6B\uFF01-\uFF03\uFF05-\uFF0A\uFF0C-\uFF0F\uFF1A\uFF1B\uFF1F\uFF20\uFF3B-\uFF3D\uFF3F\uFF5B\uFF5D\uFF5F-\uFF65]|\uD800[\uDD00-\uDD02\uDF9F\uDFD0]|\uD801\uDD6F|\uD802[\uDC57\uDD1F\uDD3F\uDE50-\uDE58\uDE7F\uDEF0-\uDEF6\uDF39-\uDF3F\uDF99-\uDF9C]|\uD803[\uDEAD\uDF55-\uDF59\uDF86-\uDF89]|\uD804[\uDC47-\uDC4D\uDCBB\uDCBC\uDCBE-\uDCC1\uDD40-\uDD43\uDD74\uDD75\uDDC5-\uDDC8\uDDCD\uDDDB\uDDDD-\uDDDF\uDE38-\uDE3D\uDEA9]|\uD805[\uDC4B-\uDC4F\uDC5A\uDC5B\uDC5D\uDCC6\uDDC1-\uDDD7\uDE41-\uDE43\uDE60-\uDE6C\uDEB9\uDF3C-\uDF3E]|\uD806[\uDC3B\uDD44-\uDD46\uDDE2\uDE3F-\uDE46\uDE9A-\uDE9C\uDE9E-\uDEA2\uDF00-\uDF09]|\uD807[\uDC41-\uDC45\uDC70\uDC71\uDEF7\uDEF8\uDF43-\uDF4F\uDFFF]|\uD809[\uDC70-\uDC74]|\uD80B[\uDFF1\uDFF2]|\uD81A[\uDE6E\uDE6F\uDEF5\uDF37-\uDF3B\uDF44]|\uD81B[\uDE97-\uDE9A\uDFE2]|\uD82F\uDC9F|\uD836[\uDE87-\uDE8B]|\uD83A[\uDD5E\uDD5F]/;

    // ../../node_modules/uc.micro/categories/S/regex.mjs
    var regex_default5 =
        /[\$\+<->\^`\|~\xA2-\xA6\xA8\xA9\xAC\xAE-\xB1\xB4\xB8\xD7\xF7\u02C2-\u02C5\u02D2-\u02DF\u02E5-\u02EB\u02ED\u02EF-\u02FF\u0375\u0384\u0385\u03F6\u0482\u058D-\u058F\u0606-\u0608\u060B\u060E\u060F\u06DE\u06E9\u06FD\u06FE\u07F6\u07FE\u07FF\u0888\u09F2\u09F3\u09FA\u09FB\u0AF1\u0B70\u0BF3-\u0BFA\u0C7F\u0D4F\u0D79\u0E3F\u0F01-\u0F03\u0F13\u0F15-\u0F17\u0F1A-\u0F1F\u0F34\u0F36\u0F38\u0FBE-\u0FC5\u0FC7-\u0FCC\u0FCE\u0FCF\u0FD5-\u0FD8\u109E\u109F\u1390-\u1399\u166D\u17DB\u1940\u19DE-\u19FF\u1B61-\u1B6A\u1B74-\u1B7C\u1FBD\u1FBF-\u1FC1\u1FCD-\u1FCF\u1FDD-\u1FDF\u1FED-\u1FEF\u1FFD\u1FFE\u2044\u2052\u207A-\u207C\u208A-\u208C\u20A0-\u20C0\u2100\u2101\u2103-\u2106\u2108\u2109\u2114\u2116-\u2118\u211E-\u2123\u2125\u2127\u2129\u212E\u213A\u213B\u2140-\u2144\u214A-\u214D\u214F\u218A\u218B\u2190-\u2307\u230C-\u2328\u232B-\u2426\u2440-\u244A\u249C-\u24E9\u2500-\u2767\u2794-\u27C4\u27C7-\u27E5\u27F0-\u2982\u2999-\u29D7\u29DC-\u29FB\u29FE-\u2B73\u2B76-\u2B95\u2B97-\u2BFF\u2CE5-\u2CEA\u2E50\u2E51\u2E80-\u2E99\u2E9B-\u2EF3\u2F00-\u2FD5\u2FF0-\u2FFF\u3004\u3012\u3013\u3020\u3036\u3037\u303E\u303F\u309B\u309C\u3190\u3191\u3196-\u319F\u31C0-\u31E3\u31EF\u3200-\u321E\u322A-\u3247\u3250\u3260-\u327F\u328A-\u32B0\u32C0-\u33FF\u4DC0-\u4DFF\uA490-\uA4C6\uA700-\uA716\uA720\uA721\uA789\uA78A\uA828-\uA82B\uA836-\uA839\uAA77-\uAA79\uAB5B\uAB6A\uAB6B\uFB29\uFBB2-\uFBC2\uFD40-\uFD4F\uFDCF\uFDFC-\uFDFF\uFE62\uFE64-\uFE66\uFE69\uFF04\uFF0B\uFF1C-\uFF1E\uFF3E\uFF40\uFF5C\uFF5E\uFFE0-\uFFE6\uFFE8-\uFFEE\uFFFC\uFFFD]|\uD800[\uDD37-\uDD3F\uDD79-\uDD89\uDD8C-\uDD8E\uDD90-\uDD9C\uDDA0\uDDD0-\uDDFC]|\uD802[\uDC77\uDC78\uDEC8]|\uD805\uDF3F|\uD807[\uDFD5-\uDFF1]|\uD81A[\uDF3C-\uDF3F\uDF45]|\uD82F\uDC9C|\uD833[\uDF50-\uDFC3]|\uD834[\uDC00-\uDCF5\uDD00-\uDD26\uDD29-\uDD64\uDD6A-\uDD6C\uDD83\uDD84\uDD8C-\uDDA9\uDDAE-\uDDEA\uDE00-\uDE41\uDE45\uDF00-\uDF56]|\uD835[\uDEC1\uDEDB\uDEFB\uDF15\uDF35\uDF4F\uDF6F\uDF89\uDFA9\uDFC3]|\uD836[\uDC00-\uDDFF\uDE37-\uDE3A\uDE6D-\uDE74\uDE76-\uDE83\uDE85\uDE86]|\uD838[\uDD4F\uDEFF]|\uD83B[\uDCAC\uDCB0\uDD2E\uDEF0\uDEF1]|\uD83C[\uDC00-\uDC2B\uDC30-\uDC93\uDCA0-\uDCAE\uDCB1-\uDCBF\uDCC1-\uDCCF\uDCD1-\uDCF5\uDD0D-\uDDAD\uDDE6-\uDE02\uDE10-\uDE3B\uDE40-\uDE48\uDE50\uDE51\uDE60-\uDE65\uDF00-\uDFFF]|\uD83D[\uDC00-\uDED7\uDEDC-\uDEEC\uDEF0-\uDEFC\uDF00-\uDF76\uDF7B-\uDFD9\uDFE0-\uDFEB\uDFF0]|\uD83E[\uDC00-\uDC0B\uDC10-\uDC47\uDC50-\uDC59\uDC60-\uDC87\uDC90-\uDCAD\uDCB0\uDCB1\uDD00-\uDE53\uDE60-\uDE6D\uDE70-\uDE7C\uDE80-\uDE88\uDE90-\uDEBD\uDEBF-\uDEC5\uDECE-\uDEDB\uDEE0-\uDEE8\uDEF0-\uDEF8\uDF00-\uDF92\uDF94-\uDFCA]/;

    // ../../node_modules/uc.micro/categories/Z/regex.mjs
    var regex_default6 = /[ \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000]/;

    // ../../node_modules/entities/lib/esm/generated/decode-data-html.js
    var decode_data_html_default = new Uint16Array(
        // prettier-ignore
        '\u1D41<\xD5\u0131\u028A\u049D\u057B\u05D0\u0675\u06DE\u07A2\u07D6\u080F\u0A4A\u0A91\u0DA1\u0E6D\u0F09\u0F26\u10CA\u1228\u12E1\u1415\u149D\u14C3\u14DF\u1525\0\0\0\0\0\0\u156B\u16CD\u198D\u1C12\u1DDD\u1F7E\u2060\u21B0\u228D\u23C0\u23FB\u2442\u2824\u2912\u2D08\u2E48\u2FCE\u3016\u32BA\u3639\u37AC\u38FE\u3A28\u3A71\u3AE0\u3B2E\u0800EMabcfglmnoprstu\\bfms\x7F\x84\x8B\x90\x95\x98\xA6\xB3\xB9\xC8\xCFlig\u803B\xC6\u40C6P\u803B&\u4026cute\u803B\xC1\u40C1reve;\u4102\u0100iyx}rc\u803B\xC2\u40C2;\u4410r;\uC000\u{1D504}rave\u803B\xC0\u40C0pha;\u4391acr;\u4100d;\u6A53\u0100gp\x9D\xA1on;\u4104f;\uC000\u{1D538}plyFunction;\u6061ing\u803B\xC5\u40C5\u0100cs\xBE\xC3r;\uC000\u{1D49C}ign;\u6254ilde\u803B\xC3\u40C3ml\u803B\xC4\u40C4\u0400aceforsu\xE5\xFB\xFE\u0117\u011C\u0122\u0127\u012A\u0100cr\xEA\xF2kslash;\u6216\u0176\xF6\xF8;\u6AE7ed;\u6306y;\u4411\u0180crt\u0105\u010B\u0114ause;\u6235noullis;\u612Ca;\u4392r;\uC000\u{1D505}pf;\uC000\u{1D539}eve;\u42D8c\xF2\u0113mpeq;\u624E\u0700HOacdefhilorsu\u014D\u0151\u0156\u0180\u019E\u01A2\u01B5\u01B7\u01BA\u01DC\u0215\u0273\u0278\u027Ecy;\u4427PY\u803B\xA9\u40A9\u0180cpy\u015D\u0162\u017Aute;\u4106\u0100;i\u0167\u0168\u62D2talDifferentialD;\u6145leys;\u612D\u0200aeio\u0189\u018E\u0194\u0198ron;\u410Cdil\u803B\xC7\u40C7rc;\u4108nint;\u6230ot;\u410A\u0100dn\u01A7\u01ADilla;\u40B8terDot;\u40B7\xF2\u017Fi;\u43A7rcle\u0200DMPT\u01C7\u01CB\u01D1\u01D6ot;\u6299inus;\u6296lus;\u6295imes;\u6297o\u0100cs\u01E2\u01F8kwiseContourIntegral;\u6232eCurly\u0100DQ\u0203\u020FoubleQuote;\u601Duote;\u6019\u0200lnpu\u021E\u0228\u0247\u0255on\u0100;e\u0225\u0226\u6237;\u6A74\u0180git\u022F\u0236\u023Aruent;\u6261nt;\u622FourIntegral;\u622E\u0100fr\u024C\u024E;\u6102oduct;\u6210nterClockwiseContourIntegral;\u6233oss;\u6A2Fcr;\uC000\u{1D49E}p\u0100;C\u0284\u0285\u62D3ap;\u624D\u0580DJSZacefios\u02A0\u02AC\u02B0\u02B4\u02B8\u02CB\u02D7\u02E1\u02E6\u0333\u048D\u0100;o\u0179\u02A5trahd;\u6911cy;\u4402cy;\u4405cy;\u440F\u0180grs\u02BF\u02C4\u02C7ger;\u6021r;\u61A1hv;\u6AE4\u0100ay\u02D0\u02D5ron;\u410E;\u4414l\u0100;t\u02DD\u02DE\u6207a;\u4394r;\uC000\u{1D507}\u0100af\u02EB\u0327\u0100cm\u02F0\u0322ritical\u0200ADGT\u0300\u0306\u0316\u031Ccute;\u40B4o\u0174\u030B\u030D;\u42D9bleAcute;\u42DDrave;\u4060ilde;\u42DCond;\u62C4ferentialD;\u6146\u0470\u033D\0\0\0\u0342\u0354\0\u0405f;\uC000\u{1D53B}\u0180;DE\u0348\u0349\u034D\u40A8ot;\u60DCqual;\u6250ble\u0300CDLRUV\u0363\u0372\u0382\u03CF\u03E2\u03F8ontourIntegra\xEC\u0239o\u0274\u0379\0\0\u037B\xBB\u0349nArrow;\u61D3\u0100eo\u0387\u03A4ft\u0180ART\u0390\u0396\u03A1rrow;\u61D0ightArrow;\u61D4e\xE5\u02CAng\u0100LR\u03AB\u03C4eft\u0100AR\u03B3\u03B9rrow;\u67F8ightArrow;\u67FAightArrow;\u67F9ight\u0100AT\u03D8\u03DErrow;\u61D2ee;\u62A8p\u0241\u03E9\0\0\u03EFrrow;\u61D1ownArrow;\u61D5erticalBar;\u6225n\u0300ABLRTa\u0412\u042A\u0430\u045E\u047F\u037Crrow\u0180;BU\u041D\u041E\u0422\u6193ar;\u6913pArrow;\u61F5reve;\u4311eft\u02D2\u043A\0\u0446\0\u0450ightVector;\u6950eeVector;\u695Eector\u0100;B\u0459\u045A\u61BDar;\u6956ight\u01D4\u0467\0\u0471eeVector;\u695Fector\u0100;B\u047A\u047B\u61C1ar;\u6957ee\u0100;A\u0486\u0487\u62A4rrow;\u61A7\u0100ct\u0492\u0497r;\uC000\u{1D49F}rok;\u4110\u0800NTacdfglmopqstux\u04BD\u04C0\u04C4\u04CB\u04DE\u04E2\u04E7\u04EE\u04F5\u0521\u052F\u0536\u0552\u055D\u0560\u0565G;\u414AH\u803B\xD0\u40D0cute\u803B\xC9\u40C9\u0180aiy\u04D2\u04D7\u04DCron;\u411Arc\u803B\xCA\u40CA;\u442Dot;\u4116r;\uC000\u{1D508}rave\u803B\xC8\u40C8ement;\u6208\u0100ap\u04FA\u04FEcr;\u4112ty\u0253\u0506\0\0\u0512mallSquare;\u65FBerySmallSquare;\u65AB\u0100gp\u0526\u052Aon;\u4118f;\uC000\u{1D53C}silon;\u4395u\u0100ai\u053C\u0549l\u0100;T\u0542\u0543\u6A75ilde;\u6242librium;\u61CC\u0100ci\u0557\u055Ar;\u6130m;\u6A73a;\u4397ml\u803B\xCB\u40CB\u0100ip\u056A\u056Fsts;\u6203onentialE;\u6147\u0280cfios\u0585\u0588\u058D\u05B2\u05CCy;\u4424r;\uC000\u{1D509}lled\u0253\u0597\0\0\u05A3mallSquare;\u65FCerySmallSquare;\u65AA\u0370\u05BA\0\u05BF\0\0\u05C4f;\uC000\u{1D53D}All;\u6200riertrf;\u6131c\xF2\u05CB\u0600JTabcdfgorst\u05E8\u05EC\u05EF\u05FA\u0600\u0612\u0616\u061B\u061D\u0623\u066C\u0672cy;\u4403\u803B>\u403Emma\u0100;d\u05F7\u05F8\u4393;\u43DCreve;\u411E\u0180eiy\u0607\u060C\u0610dil;\u4122rc;\u411C;\u4413ot;\u4120r;\uC000\u{1D50A};\u62D9pf;\uC000\u{1D53E}eater\u0300EFGLST\u0635\u0644\u064E\u0656\u065B\u0666qual\u0100;L\u063E\u063F\u6265ess;\u62DBullEqual;\u6267reater;\u6AA2ess;\u6277lantEqual;\u6A7Eilde;\u6273cr;\uC000\u{1D4A2};\u626B\u0400Aacfiosu\u0685\u068B\u0696\u069B\u069E\u06AA\u06BE\u06CARDcy;\u442A\u0100ct\u0690\u0694ek;\u42C7;\u405Eirc;\u4124r;\u610ClbertSpace;\u610B\u01F0\u06AF\0\u06B2f;\u610DizontalLine;\u6500\u0100ct\u06C3\u06C5\xF2\u06A9rok;\u4126mp\u0144\u06D0\u06D8ownHum\xF0\u012Fqual;\u624F\u0700EJOacdfgmnostu\u06FA\u06FE\u0703\u0707\u070E\u071A\u071E\u0721\u0728\u0744\u0778\u078B\u078F\u0795cy;\u4415lig;\u4132cy;\u4401cute\u803B\xCD\u40CD\u0100iy\u0713\u0718rc\u803B\xCE\u40CE;\u4418ot;\u4130r;\u6111rave\u803B\xCC\u40CC\u0180;ap\u0720\u072F\u073F\u0100cg\u0734\u0737r;\u412AinaryI;\u6148lie\xF3\u03DD\u01F4\u0749\0\u0762\u0100;e\u074D\u074E\u622C\u0100gr\u0753\u0758ral;\u622Bsection;\u62C2isible\u0100CT\u076C\u0772omma;\u6063imes;\u6062\u0180gpt\u077F\u0783\u0788on;\u412Ef;\uC000\u{1D540}a;\u4399cr;\u6110ilde;\u4128\u01EB\u079A\0\u079Ecy;\u4406l\u803B\xCF\u40CF\u0280cfosu\u07AC\u07B7\u07BC\u07C2\u07D0\u0100iy\u07B1\u07B5rc;\u4134;\u4419r;\uC000\u{1D50D}pf;\uC000\u{1D541}\u01E3\u07C7\0\u07CCr;\uC000\u{1D4A5}rcy;\u4408kcy;\u4404\u0380HJacfos\u07E4\u07E8\u07EC\u07F1\u07FD\u0802\u0808cy;\u4425cy;\u440Cppa;\u439A\u0100ey\u07F6\u07FBdil;\u4136;\u441Ar;\uC000\u{1D50E}pf;\uC000\u{1D542}cr;\uC000\u{1D4A6}\u0580JTaceflmost\u0825\u0829\u082C\u0850\u0863\u09B3\u09B8\u09C7\u09CD\u0A37\u0A47cy;\u4409\u803B<\u403C\u0280cmnpr\u0837\u083C\u0841\u0844\u084Dute;\u4139bda;\u439Bg;\u67EAlacetrf;\u6112r;\u619E\u0180aey\u0857\u085C\u0861ron;\u413Ddil;\u413B;\u441B\u0100fs\u0868\u0970t\u0500ACDFRTUVar\u087E\u08A9\u08B1\u08E0\u08E6\u08FC\u092F\u095B\u0390\u096A\u0100nr\u0883\u088FgleBracket;\u67E8row\u0180;BR\u0899\u089A\u089E\u6190ar;\u61E4ightArrow;\u61C6eiling;\u6308o\u01F5\u08B7\0\u08C3bleBracket;\u67E6n\u01D4\u08C8\0\u08D2eeVector;\u6961ector\u0100;B\u08DB\u08DC\u61C3ar;\u6959loor;\u630Aight\u0100AV\u08EF\u08F5rrow;\u6194ector;\u694E\u0100er\u0901\u0917e\u0180;AV\u0909\u090A\u0910\u62A3rrow;\u61A4ector;\u695Aiangle\u0180;BE\u0924\u0925\u0929\u62B2ar;\u69CFqual;\u62B4p\u0180DTV\u0937\u0942\u094CownVector;\u6951eeVector;\u6960ector\u0100;B\u0956\u0957\u61BFar;\u6958ector\u0100;B\u0965\u0966\u61BCar;\u6952ight\xE1\u039Cs\u0300EFGLST\u097E\u098B\u0995\u099D\u09A2\u09ADqualGreater;\u62DAullEqual;\u6266reater;\u6276ess;\u6AA1lantEqual;\u6A7Dilde;\u6272r;\uC000\u{1D50F}\u0100;e\u09BD\u09BE\u62D8ftarrow;\u61DAidot;\u413F\u0180npw\u09D4\u0A16\u0A1Bg\u0200LRlr\u09DE\u09F7\u0A02\u0A10eft\u0100AR\u09E6\u09ECrrow;\u67F5ightArrow;\u67F7ightArrow;\u67F6eft\u0100ar\u03B3\u0A0Aight\xE1\u03BFight\xE1\u03CAf;\uC000\u{1D543}er\u0100LR\u0A22\u0A2CeftArrow;\u6199ightArrow;\u6198\u0180cht\u0A3E\u0A40\u0A42\xF2\u084C;\u61B0rok;\u4141;\u626A\u0400acefiosu\u0A5A\u0A5D\u0A60\u0A77\u0A7C\u0A85\u0A8B\u0A8Ep;\u6905y;\u441C\u0100dl\u0A65\u0A6FiumSpace;\u605Flintrf;\u6133r;\uC000\u{1D510}nusPlus;\u6213pf;\uC000\u{1D544}c\xF2\u0A76;\u439C\u0480Jacefostu\u0AA3\u0AA7\u0AAD\u0AC0\u0B14\u0B19\u0D91\u0D97\u0D9Ecy;\u440Acute;\u4143\u0180aey\u0AB4\u0AB9\u0ABEron;\u4147dil;\u4145;\u441D\u0180gsw\u0AC7\u0AF0\u0B0Eative\u0180MTV\u0AD3\u0ADF\u0AE8ediumSpace;\u600Bhi\u0100cn\u0AE6\u0AD8\xEB\u0AD9eryThi\xEE\u0AD9ted\u0100GL\u0AF8\u0B06reaterGreate\xF2\u0673essLes\xF3\u0A48Line;\u400Ar;\uC000\u{1D511}\u0200Bnpt\u0B22\u0B28\u0B37\u0B3Areak;\u6060BreakingSpace;\u40A0f;\u6115\u0680;CDEGHLNPRSTV\u0B55\u0B56\u0B6A\u0B7C\u0BA1\u0BEB\u0C04\u0C5E\u0C84\u0CA6\u0CD8\u0D61\u0D85\u6AEC\u0100ou\u0B5B\u0B64ngruent;\u6262pCap;\u626DoubleVerticalBar;\u6226\u0180lqx\u0B83\u0B8A\u0B9Bement;\u6209ual\u0100;T\u0B92\u0B93\u6260ilde;\uC000\u2242\u0338ists;\u6204reater\u0380;EFGLST\u0BB6\u0BB7\u0BBD\u0BC9\u0BD3\u0BD8\u0BE5\u626Fqual;\u6271ullEqual;\uC000\u2267\u0338reater;\uC000\u226B\u0338ess;\u6279lantEqual;\uC000\u2A7E\u0338ilde;\u6275ump\u0144\u0BF2\u0BFDownHump;\uC000\u224E\u0338qual;\uC000\u224F\u0338e\u0100fs\u0C0A\u0C27tTriangle\u0180;BE\u0C1A\u0C1B\u0C21\u62EAar;\uC000\u29CF\u0338qual;\u62ECs\u0300;EGLST\u0C35\u0C36\u0C3C\u0C44\u0C4B\u0C58\u626Equal;\u6270reater;\u6278ess;\uC000\u226A\u0338lantEqual;\uC000\u2A7D\u0338ilde;\u6274ested\u0100GL\u0C68\u0C79reaterGreater;\uC000\u2AA2\u0338essLess;\uC000\u2AA1\u0338recedes\u0180;ES\u0C92\u0C93\u0C9B\u6280qual;\uC000\u2AAF\u0338lantEqual;\u62E0\u0100ei\u0CAB\u0CB9verseElement;\u620CghtTriangle\u0180;BE\u0CCB\u0CCC\u0CD2\u62EBar;\uC000\u29D0\u0338qual;\u62ED\u0100qu\u0CDD\u0D0CuareSu\u0100bp\u0CE8\u0CF9set\u0100;E\u0CF0\u0CF3\uC000\u228F\u0338qual;\u62E2erset\u0100;E\u0D03\u0D06\uC000\u2290\u0338qual;\u62E3\u0180bcp\u0D13\u0D24\u0D4Eset\u0100;E\u0D1B\u0D1E\uC000\u2282\u20D2qual;\u6288ceeds\u0200;EST\u0D32\u0D33\u0D3B\u0D46\u6281qual;\uC000\u2AB0\u0338lantEqual;\u62E1ilde;\uC000\u227F\u0338erset\u0100;E\u0D58\u0D5B\uC000\u2283\u20D2qual;\u6289ilde\u0200;EFT\u0D6E\u0D6F\u0D75\u0D7F\u6241qual;\u6244ullEqual;\u6247ilde;\u6249erticalBar;\u6224cr;\uC000\u{1D4A9}ilde\u803B\xD1\u40D1;\u439D\u0700Eacdfgmoprstuv\u0DBD\u0DC2\u0DC9\u0DD5\u0DDB\u0DE0\u0DE7\u0DFC\u0E02\u0E20\u0E22\u0E32\u0E3F\u0E44lig;\u4152cute\u803B\xD3\u40D3\u0100iy\u0DCE\u0DD3rc\u803B\xD4\u40D4;\u441Eblac;\u4150r;\uC000\u{1D512}rave\u803B\xD2\u40D2\u0180aei\u0DEE\u0DF2\u0DF6cr;\u414Cga;\u43A9cron;\u439Fpf;\uC000\u{1D546}enCurly\u0100DQ\u0E0E\u0E1AoubleQuote;\u601Cuote;\u6018;\u6A54\u0100cl\u0E27\u0E2Cr;\uC000\u{1D4AA}ash\u803B\xD8\u40D8i\u016C\u0E37\u0E3Cde\u803B\xD5\u40D5es;\u6A37ml\u803B\xD6\u40D6er\u0100BP\u0E4B\u0E60\u0100ar\u0E50\u0E53r;\u603Eac\u0100ek\u0E5A\u0E5C;\u63DEet;\u63B4arenthesis;\u63DC\u0480acfhilors\u0E7F\u0E87\u0E8A\u0E8F\u0E92\u0E94\u0E9D\u0EB0\u0EFCrtialD;\u6202y;\u441Fr;\uC000\u{1D513}i;\u43A6;\u43A0usMinus;\u40B1\u0100ip\u0EA2\u0EADncareplan\xE5\u069Df;\u6119\u0200;eio\u0EB9\u0EBA\u0EE0\u0EE4\u6ABBcedes\u0200;EST\u0EC8\u0EC9\u0ECF\u0EDA\u627Aqual;\u6AAFlantEqual;\u627Cilde;\u627Eme;\u6033\u0100dp\u0EE9\u0EEEuct;\u620Fortion\u0100;a\u0225\u0EF9l;\u621D\u0100ci\u0F01\u0F06r;\uC000\u{1D4AB};\u43A8\u0200Ufos\u0F11\u0F16\u0F1B\u0F1FOT\u803B"\u4022r;\uC000\u{1D514}pf;\u611Acr;\uC000\u{1D4AC}\u0600BEacefhiorsu\u0F3E\u0F43\u0F47\u0F60\u0F73\u0FA7\u0FAA\u0FAD\u1096\u10A9\u10B4\u10BEarr;\u6910G\u803B\xAE\u40AE\u0180cnr\u0F4E\u0F53\u0F56ute;\u4154g;\u67EBr\u0100;t\u0F5C\u0F5D\u61A0l;\u6916\u0180aey\u0F67\u0F6C\u0F71ron;\u4158dil;\u4156;\u4420\u0100;v\u0F78\u0F79\u611Cerse\u0100EU\u0F82\u0F99\u0100lq\u0F87\u0F8Eement;\u620Builibrium;\u61CBpEquilibrium;\u696Fr\xBB\u0F79o;\u43A1ght\u0400ACDFTUVa\u0FC1\u0FEB\u0FF3\u1022\u1028\u105B\u1087\u03D8\u0100nr\u0FC6\u0FD2gleBracket;\u67E9row\u0180;BL\u0FDC\u0FDD\u0FE1\u6192ar;\u61E5eftArrow;\u61C4eiling;\u6309o\u01F5\u0FF9\0\u1005bleBracket;\u67E7n\u01D4\u100A\0\u1014eeVector;\u695Dector\u0100;B\u101D\u101E\u61C2ar;\u6955loor;\u630B\u0100er\u102D\u1043e\u0180;AV\u1035\u1036\u103C\u62A2rrow;\u61A6ector;\u695Biangle\u0180;BE\u1050\u1051\u1055\u62B3ar;\u69D0qual;\u62B5p\u0180DTV\u1063\u106E\u1078ownVector;\u694FeeVector;\u695Cector\u0100;B\u1082\u1083\u61BEar;\u6954ector\u0100;B\u1091\u1092\u61C0ar;\u6953\u0100pu\u109B\u109Ef;\u611DndImplies;\u6970ightarrow;\u61DB\u0100ch\u10B9\u10BCr;\u611B;\u61B1leDelayed;\u69F4\u0680HOacfhimoqstu\u10E4\u10F1\u10F7\u10FD\u1119\u111E\u1151\u1156\u1161\u1167\u11B5\u11BB\u11BF\u0100Cc\u10E9\u10EEHcy;\u4429y;\u4428FTcy;\u442Ccute;\u415A\u0280;aeiy\u1108\u1109\u110E\u1113\u1117\u6ABCron;\u4160dil;\u415Erc;\u415C;\u4421r;\uC000\u{1D516}ort\u0200DLRU\u112A\u1134\u113E\u1149ownArrow\xBB\u041EeftArrow\xBB\u089AightArrow\xBB\u0FDDpArrow;\u6191gma;\u43A3allCircle;\u6218pf;\uC000\u{1D54A}\u0272\u116D\0\0\u1170t;\u621Aare\u0200;ISU\u117B\u117C\u1189\u11AF\u65A1ntersection;\u6293u\u0100bp\u118F\u119Eset\u0100;E\u1197\u1198\u628Fqual;\u6291erset\u0100;E\u11A8\u11A9\u6290qual;\u6292nion;\u6294cr;\uC000\u{1D4AE}ar;\u62C6\u0200bcmp\u11C8\u11DB\u1209\u120B\u0100;s\u11CD\u11CE\u62D0et\u0100;E\u11CD\u11D5qual;\u6286\u0100ch\u11E0\u1205eeds\u0200;EST\u11ED\u11EE\u11F4\u11FF\u627Bqual;\u6AB0lantEqual;\u627Dilde;\u627FTh\xE1\u0F8C;\u6211\u0180;es\u1212\u1213\u1223\u62D1rset\u0100;E\u121C\u121D\u6283qual;\u6287et\xBB\u1213\u0580HRSacfhiors\u123E\u1244\u1249\u1255\u125E\u1271\u1276\u129F\u12C2\u12C8\u12D1ORN\u803B\xDE\u40DEADE;\u6122\u0100Hc\u124E\u1252cy;\u440By;\u4426\u0100bu\u125A\u125C;\u4009;\u43A4\u0180aey\u1265\u126A\u126Fron;\u4164dil;\u4162;\u4422r;\uC000\u{1D517}\u0100ei\u127B\u1289\u01F2\u1280\0\u1287efore;\u6234a;\u4398\u0100cn\u128E\u1298kSpace;\uC000\u205F\u200ASpace;\u6009lde\u0200;EFT\u12AB\u12AC\u12B2\u12BC\u623Cqual;\u6243ullEqual;\u6245ilde;\u6248pf;\uC000\u{1D54B}ipleDot;\u60DB\u0100ct\u12D6\u12DBr;\uC000\u{1D4AF}rok;\u4166\u0AE1\u12F7\u130E\u131A\u1326\0\u132C\u1331\0\0\0\0\0\u1338\u133D\u1377\u1385\0\u13FF\u1404\u140A\u1410\u0100cr\u12FB\u1301ute\u803B\xDA\u40DAr\u0100;o\u1307\u1308\u619Fcir;\u6949r\u01E3\u1313\0\u1316y;\u440Eve;\u416C\u0100iy\u131E\u1323rc\u803B\xDB\u40DB;\u4423blac;\u4170r;\uC000\u{1D518}rave\u803B\xD9\u40D9acr;\u416A\u0100di\u1341\u1369er\u0100BP\u1348\u135D\u0100ar\u134D\u1350r;\u405Fac\u0100ek\u1357\u1359;\u63DFet;\u63B5arenthesis;\u63DDon\u0100;P\u1370\u1371\u62C3lus;\u628E\u0100gp\u137B\u137Fon;\u4172f;\uC000\u{1D54C}\u0400ADETadps\u1395\u13AE\u13B8\u13C4\u03E8\u13D2\u13D7\u13F3rrow\u0180;BD\u1150\u13A0\u13A4ar;\u6912ownArrow;\u61C5ownArrow;\u6195quilibrium;\u696Eee\u0100;A\u13CB\u13CC\u62A5rrow;\u61A5own\xE1\u03F3er\u0100LR\u13DE\u13E8eftArrow;\u6196ightArrow;\u6197i\u0100;l\u13F9\u13FA\u43D2on;\u43A5ing;\u416Ecr;\uC000\u{1D4B0}ilde;\u4168ml\u803B\xDC\u40DC\u0480Dbcdefosv\u1427\u142C\u1430\u1433\u143E\u1485\u148A\u1490\u1496ash;\u62ABar;\u6AEBy;\u4412ash\u0100;l\u143B\u143C\u62A9;\u6AE6\u0100er\u1443\u1445;\u62C1\u0180bty\u144C\u1450\u147Aar;\u6016\u0100;i\u144F\u1455cal\u0200BLST\u1461\u1465\u146A\u1474ar;\u6223ine;\u407Ceparator;\u6758ilde;\u6240ThinSpace;\u600Ar;\uC000\u{1D519}pf;\uC000\u{1D54D}cr;\uC000\u{1D4B1}dash;\u62AA\u0280cefos\u14A7\u14AC\u14B1\u14B6\u14BCirc;\u4174dge;\u62C0r;\uC000\u{1D51A}pf;\uC000\u{1D54E}cr;\uC000\u{1D4B2}\u0200fios\u14CB\u14D0\u14D2\u14D8r;\uC000\u{1D51B};\u439Epf;\uC000\u{1D54F}cr;\uC000\u{1D4B3}\u0480AIUacfosu\u14F1\u14F5\u14F9\u14FD\u1504\u150F\u1514\u151A\u1520cy;\u442Fcy;\u4407cy;\u442Ecute\u803B\xDD\u40DD\u0100iy\u1509\u150Drc;\u4176;\u442Br;\uC000\u{1D51C}pf;\uC000\u{1D550}cr;\uC000\u{1D4B4}ml;\u4178\u0400Hacdefos\u1535\u1539\u153F\u154B\u154F\u155D\u1560\u1564cy;\u4416cute;\u4179\u0100ay\u1544\u1549ron;\u417D;\u4417ot;\u417B\u01F2\u1554\0\u155BoWidt\xE8\u0AD9a;\u4396r;\u6128pf;\u6124cr;\uC000\u{1D4B5}\u0BE1\u1583\u158A\u1590\0\u15B0\u15B6\u15BF\0\0\0\0\u15C6\u15DB\u15EB\u165F\u166D\0\u1695\u169B\u16B2\u16B9\0\u16BEcute\u803B\xE1\u40E1reve;\u4103\u0300;Ediuy\u159C\u159D\u15A1\u15A3\u15A8\u15AD\u623E;\uC000\u223E\u0333;\u623Frc\u803B\xE2\u40E2te\u80BB\xB4\u0306;\u4430lig\u803B\xE6\u40E6\u0100;r\xB2\u15BA;\uC000\u{1D51E}rave\u803B\xE0\u40E0\u0100ep\u15CA\u15D6\u0100fp\u15CF\u15D4sym;\u6135\xE8\u15D3ha;\u43B1\u0100ap\u15DFc\u0100cl\u15E4\u15E7r;\u4101g;\u6A3F\u0264\u15F0\0\0\u160A\u0280;adsv\u15FA\u15FB\u15FF\u1601\u1607\u6227nd;\u6A55;\u6A5Clope;\u6A58;\u6A5A\u0380;elmrsz\u1618\u1619\u161B\u161E\u163F\u164F\u1659\u6220;\u69A4e\xBB\u1619sd\u0100;a\u1625\u1626\u6221\u0461\u1630\u1632\u1634\u1636\u1638\u163A\u163C\u163E;\u69A8;\u69A9;\u69AA;\u69AB;\u69AC;\u69AD;\u69AE;\u69AFt\u0100;v\u1645\u1646\u621Fb\u0100;d\u164C\u164D\u62BE;\u699D\u0100pt\u1654\u1657h;\u6222\xBB\xB9arr;\u637C\u0100gp\u1663\u1667on;\u4105f;\uC000\u{1D552}\u0380;Eaeiop\u12C1\u167B\u167D\u1682\u1684\u1687\u168A;\u6A70cir;\u6A6F;\u624Ad;\u624Bs;\u4027rox\u0100;e\u12C1\u1692\xF1\u1683ing\u803B\xE5\u40E5\u0180cty\u16A1\u16A6\u16A8r;\uC000\u{1D4B6};\u402Amp\u0100;e\u12C1\u16AF\xF1\u0288ilde\u803B\xE3\u40E3ml\u803B\xE4\u40E4\u0100ci\u16C2\u16C8onin\xF4\u0272nt;\u6A11\u0800Nabcdefiklnoprsu\u16ED\u16F1\u1730\u173C\u1743\u1748\u1778\u177D\u17E0\u17E6\u1839\u1850\u170D\u193D\u1948\u1970ot;\u6AED\u0100cr\u16F6\u171Ek\u0200ceps\u1700\u1705\u170D\u1713ong;\u624Cpsilon;\u43F6rime;\u6035im\u0100;e\u171A\u171B\u623Dq;\u62CD\u0176\u1722\u1726ee;\u62BDed\u0100;g\u172C\u172D\u6305e\xBB\u172Drk\u0100;t\u135C\u1737brk;\u63B6\u0100oy\u1701\u1741;\u4431quo;\u601E\u0280cmprt\u1753\u175B\u1761\u1764\u1768aus\u0100;e\u010A\u0109ptyv;\u69B0s\xE9\u170Cno\xF5\u0113\u0180ahw\u176F\u1771\u1773;\u43B2;\u6136een;\u626Cr;\uC000\u{1D51F}g\u0380costuvw\u178D\u179D\u17B3\u17C1\u17D5\u17DB\u17DE\u0180aiu\u1794\u1796\u179A\xF0\u0760rc;\u65EFp\xBB\u1371\u0180dpt\u17A4\u17A8\u17ADot;\u6A00lus;\u6A01imes;\u6A02\u0271\u17B9\0\0\u17BEcup;\u6A06ar;\u6605riangle\u0100du\u17CD\u17D2own;\u65BDp;\u65B3plus;\u6A04e\xE5\u1444\xE5\u14ADarow;\u690D\u0180ako\u17ED\u1826\u1835\u0100cn\u17F2\u1823k\u0180lst\u17FA\u05AB\u1802ozenge;\u69EBriangle\u0200;dlr\u1812\u1813\u1818\u181D\u65B4own;\u65BEeft;\u65C2ight;\u65B8k;\u6423\u01B1\u182B\0\u1833\u01B2\u182F\0\u1831;\u6592;\u65914;\u6593ck;\u6588\u0100eo\u183E\u184D\u0100;q\u1843\u1846\uC000=\u20E5uiv;\uC000\u2261\u20E5t;\u6310\u0200ptwx\u1859\u185E\u1867\u186Cf;\uC000\u{1D553}\u0100;t\u13CB\u1863om\xBB\u13CCtie;\u62C8\u0600DHUVbdhmptuv\u1885\u1896\u18AA\u18BB\u18D7\u18DB\u18EC\u18FF\u1905\u190A\u1910\u1921\u0200LRlr\u188E\u1890\u1892\u1894;\u6557;\u6554;\u6556;\u6553\u0280;DUdu\u18A1\u18A2\u18A4\u18A6\u18A8\u6550;\u6566;\u6569;\u6564;\u6567\u0200LRlr\u18B3\u18B5\u18B7\u18B9;\u655D;\u655A;\u655C;\u6559\u0380;HLRhlr\u18CA\u18CB\u18CD\u18CF\u18D1\u18D3\u18D5\u6551;\u656C;\u6563;\u6560;\u656B;\u6562;\u655Fox;\u69C9\u0200LRlr\u18E4\u18E6\u18E8\u18EA;\u6555;\u6552;\u6510;\u650C\u0280;DUdu\u06BD\u18F7\u18F9\u18FB\u18FD;\u6565;\u6568;\u652C;\u6534inus;\u629Flus;\u629Eimes;\u62A0\u0200LRlr\u1919\u191B\u191D\u191F;\u655B;\u6558;\u6518;\u6514\u0380;HLRhlr\u1930\u1931\u1933\u1935\u1937\u1939\u193B\u6502;\u656A;\u6561;\u655E;\u653C;\u6524;\u651C\u0100ev\u0123\u1942bar\u803B\xA6\u40A6\u0200ceio\u1951\u1956\u195A\u1960r;\uC000\u{1D4B7}mi;\u604Fm\u0100;e\u171A\u171Cl\u0180;bh\u1968\u1969\u196B\u405C;\u69C5sub;\u67C8\u016C\u1974\u197El\u0100;e\u1979\u197A\u6022t\xBB\u197Ap\u0180;Ee\u012F\u1985\u1987;\u6AAE\u0100;q\u06DC\u06DB\u0CE1\u19A7\0\u19E8\u1A11\u1A15\u1A32\0\u1A37\u1A50\0\0\u1AB4\0\0\u1AC1\0\0\u1B21\u1B2E\u1B4D\u1B52\0\u1BFD\0\u1C0C\u0180cpr\u19AD\u19B2\u19DDute;\u4107\u0300;abcds\u19BF\u19C0\u19C4\u19CA\u19D5\u19D9\u6229nd;\u6A44rcup;\u6A49\u0100au\u19CF\u19D2p;\u6A4Bp;\u6A47ot;\u6A40;\uC000\u2229\uFE00\u0100eo\u19E2\u19E5t;\u6041\xEE\u0693\u0200aeiu\u19F0\u19FB\u1A01\u1A05\u01F0\u19F5\0\u19F8s;\u6A4Don;\u410Ddil\u803B\xE7\u40E7rc;\u4109ps\u0100;s\u1A0C\u1A0D\u6A4Cm;\u6A50ot;\u410B\u0180dmn\u1A1B\u1A20\u1A26il\u80BB\xB8\u01ADptyv;\u69B2t\u8100\xA2;e\u1A2D\u1A2E\u40A2r\xE4\u01B2r;\uC000\u{1D520}\u0180cei\u1A3D\u1A40\u1A4Dy;\u4447ck\u0100;m\u1A47\u1A48\u6713ark\xBB\u1A48;\u43C7r\u0380;Ecefms\u1A5F\u1A60\u1A62\u1A6B\u1AA4\u1AAA\u1AAE\u65CB;\u69C3\u0180;el\u1A69\u1A6A\u1A6D\u42C6q;\u6257e\u0261\u1A74\0\0\u1A88rrow\u0100lr\u1A7C\u1A81eft;\u61BAight;\u61BB\u0280RSacd\u1A92\u1A94\u1A96\u1A9A\u1A9F\xBB\u0F47;\u64C8st;\u629Birc;\u629Aash;\u629Dnint;\u6A10id;\u6AEFcir;\u69C2ubs\u0100;u\u1ABB\u1ABC\u6663it\xBB\u1ABC\u02EC\u1AC7\u1AD4\u1AFA\0\u1B0Aon\u0100;e\u1ACD\u1ACE\u403A\u0100;q\xC7\xC6\u026D\u1AD9\0\0\u1AE2a\u0100;t\u1ADE\u1ADF\u402C;\u4040\u0180;fl\u1AE8\u1AE9\u1AEB\u6201\xEE\u1160e\u0100mx\u1AF1\u1AF6ent\xBB\u1AE9e\xF3\u024D\u01E7\u1AFE\0\u1B07\u0100;d\u12BB\u1B02ot;\u6A6Dn\xF4\u0246\u0180fry\u1B10\u1B14\u1B17;\uC000\u{1D554}o\xE4\u0254\u8100\xA9;s\u0155\u1B1Dr;\u6117\u0100ao\u1B25\u1B29rr;\u61B5ss;\u6717\u0100cu\u1B32\u1B37r;\uC000\u{1D4B8}\u0100bp\u1B3C\u1B44\u0100;e\u1B41\u1B42\u6ACF;\u6AD1\u0100;e\u1B49\u1B4A\u6AD0;\u6AD2dot;\u62EF\u0380delprvw\u1B60\u1B6C\u1B77\u1B82\u1BAC\u1BD4\u1BF9arr\u0100lr\u1B68\u1B6A;\u6938;\u6935\u0270\u1B72\0\0\u1B75r;\u62DEc;\u62DFarr\u0100;p\u1B7F\u1B80\u61B6;\u693D\u0300;bcdos\u1B8F\u1B90\u1B96\u1BA1\u1BA5\u1BA8\u622Arcap;\u6A48\u0100au\u1B9B\u1B9Ep;\u6A46p;\u6A4Aot;\u628Dr;\u6A45;\uC000\u222A\uFE00\u0200alrv\u1BB5\u1BBF\u1BDE\u1BE3rr\u0100;m\u1BBC\u1BBD\u61B7;\u693Cy\u0180evw\u1BC7\u1BD4\u1BD8q\u0270\u1BCE\0\0\u1BD2re\xE3\u1B73u\xE3\u1B75ee;\u62CEedge;\u62CFen\u803B\xA4\u40A4earrow\u0100lr\u1BEE\u1BF3eft\xBB\u1B80ight\xBB\u1BBDe\xE4\u1BDD\u0100ci\u1C01\u1C07onin\xF4\u01F7nt;\u6231lcty;\u632D\u0980AHabcdefhijlorstuwz\u1C38\u1C3B\u1C3F\u1C5D\u1C69\u1C75\u1C8A\u1C9E\u1CAC\u1CB7\u1CFB\u1CFF\u1D0D\u1D7B\u1D91\u1DAB\u1DBB\u1DC6\u1DCDr\xF2\u0381ar;\u6965\u0200glrs\u1C48\u1C4D\u1C52\u1C54ger;\u6020eth;\u6138\xF2\u1133h\u0100;v\u1C5A\u1C5B\u6010\xBB\u090A\u016B\u1C61\u1C67arow;\u690Fa\xE3\u0315\u0100ay\u1C6E\u1C73ron;\u410F;\u4434\u0180;ao\u0332\u1C7C\u1C84\u0100gr\u02BF\u1C81r;\u61CAtseq;\u6A77\u0180glm\u1C91\u1C94\u1C98\u803B\xB0\u40B0ta;\u43B4ptyv;\u69B1\u0100ir\u1CA3\u1CA8sht;\u697F;\uC000\u{1D521}ar\u0100lr\u1CB3\u1CB5\xBB\u08DC\xBB\u101E\u0280aegsv\u1CC2\u0378\u1CD6\u1CDC\u1CE0m\u0180;os\u0326\u1CCA\u1CD4nd\u0100;s\u0326\u1CD1uit;\u6666amma;\u43DDin;\u62F2\u0180;io\u1CE7\u1CE8\u1CF8\u40F7de\u8100\xF7;o\u1CE7\u1CF0ntimes;\u62C7n\xF8\u1CF7cy;\u4452c\u026F\u1D06\0\0\u1D0Arn;\u631Eop;\u630D\u0280lptuw\u1D18\u1D1D\u1D22\u1D49\u1D55lar;\u4024f;\uC000\u{1D555}\u0280;emps\u030B\u1D2D\u1D37\u1D3D\u1D42q\u0100;d\u0352\u1D33ot;\u6251inus;\u6238lus;\u6214quare;\u62A1blebarwedg\xE5\xFAn\u0180adh\u112E\u1D5D\u1D67ownarrow\xF3\u1C83arpoon\u0100lr\u1D72\u1D76ef\xF4\u1CB4igh\xF4\u1CB6\u0162\u1D7F\u1D85karo\xF7\u0F42\u026F\u1D8A\0\0\u1D8Ern;\u631Fop;\u630C\u0180cot\u1D98\u1DA3\u1DA6\u0100ry\u1D9D\u1DA1;\uC000\u{1D4B9};\u4455l;\u69F6rok;\u4111\u0100dr\u1DB0\u1DB4ot;\u62F1i\u0100;f\u1DBA\u1816\u65BF\u0100ah\u1DC0\u1DC3r\xF2\u0429a\xF2\u0FA6angle;\u69A6\u0100ci\u1DD2\u1DD5y;\u445Fgrarr;\u67FF\u0900Dacdefglmnopqrstux\u1E01\u1E09\u1E19\u1E38\u0578\u1E3C\u1E49\u1E61\u1E7E\u1EA5\u1EAF\u1EBD\u1EE1\u1F2A\u1F37\u1F44\u1F4E\u1F5A\u0100Do\u1E06\u1D34o\xF4\u1C89\u0100cs\u1E0E\u1E14ute\u803B\xE9\u40E9ter;\u6A6E\u0200aioy\u1E22\u1E27\u1E31\u1E36ron;\u411Br\u0100;c\u1E2D\u1E2E\u6256\u803B\xEA\u40EAlon;\u6255;\u444Dot;\u4117\u0100Dr\u1E41\u1E45ot;\u6252;\uC000\u{1D522}\u0180;rs\u1E50\u1E51\u1E57\u6A9Aave\u803B\xE8\u40E8\u0100;d\u1E5C\u1E5D\u6A96ot;\u6A98\u0200;ils\u1E6A\u1E6B\u1E72\u1E74\u6A99nters;\u63E7;\u6113\u0100;d\u1E79\u1E7A\u6A95ot;\u6A97\u0180aps\u1E85\u1E89\u1E97cr;\u4113ty\u0180;sv\u1E92\u1E93\u1E95\u6205et\xBB\u1E93p\u01001;\u1E9D\u1EA4\u0133\u1EA1\u1EA3;\u6004;\u6005\u6003\u0100gs\u1EAA\u1EAC;\u414Bp;\u6002\u0100gp\u1EB4\u1EB8on;\u4119f;\uC000\u{1D556}\u0180als\u1EC4\u1ECE\u1ED2r\u0100;s\u1ECA\u1ECB\u62D5l;\u69E3us;\u6A71i\u0180;lv\u1EDA\u1EDB\u1EDF\u43B5on\xBB\u1EDB;\u43F5\u0200csuv\u1EEA\u1EF3\u1F0B\u1F23\u0100io\u1EEF\u1E31rc\xBB\u1E2E\u0269\u1EF9\0\0\u1EFB\xED\u0548ant\u0100gl\u1F02\u1F06tr\xBB\u1E5Dess\xBB\u1E7A\u0180aei\u1F12\u1F16\u1F1Als;\u403Dst;\u625Fv\u0100;D\u0235\u1F20D;\u6A78parsl;\u69E5\u0100Da\u1F2F\u1F33ot;\u6253rr;\u6971\u0180cdi\u1F3E\u1F41\u1EF8r;\u612Fo\xF4\u0352\u0100ah\u1F49\u1F4B;\u43B7\u803B\xF0\u40F0\u0100mr\u1F53\u1F57l\u803B\xEB\u40EBo;\u60AC\u0180cip\u1F61\u1F64\u1F67l;\u4021s\xF4\u056E\u0100eo\u1F6C\u1F74ctatio\xEE\u0559nential\xE5\u0579\u09E1\u1F92\0\u1F9E\0\u1FA1\u1FA7\0\0\u1FC6\u1FCC\0\u1FD3\0\u1FE6\u1FEA\u2000\0\u2008\u205Allingdotse\xF1\u1E44y;\u4444male;\u6640\u0180ilr\u1FAD\u1FB3\u1FC1lig;\u8000\uFB03\u0269\u1FB9\0\0\u1FBDg;\u8000\uFB00ig;\u8000\uFB04;\uC000\u{1D523}lig;\u8000\uFB01lig;\uC000fj\u0180alt\u1FD9\u1FDC\u1FE1t;\u666Dig;\u8000\uFB02ns;\u65B1of;\u4192\u01F0\u1FEE\0\u1FF3f;\uC000\u{1D557}\u0100ak\u05BF\u1FF7\u0100;v\u1FFC\u1FFD\u62D4;\u6AD9artint;\u6A0D\u0100ao\u200C\u2055\u0100cs\u2011\u2052\u03B1\u201A\u2030\u2038\u2045\u2048\0\u2050\u03B2\u2022\u2025\u2027\u202A\u202C\0\u202E\u803B\xBD\u40BD;\u6153\u803B\xBC\u40BC;\u6155;\u6159;\u615B\u01B3\u2034\0\u2036;\u6154;\u6156\u02B4\u203E\u2041\0\0\u2043\u803B\xBE\u40BE;\u6157;\u615C5;\u6158\u01B6\u204C\0\u204E;\u615A;\u615D8;\u615El;\u6044wn;\u6322cr;\uC000\u{1D4BB}\u0880Eabcdefgijlnorstv\u2082\u2089\u209F\u20A5\u20B0\u20B4\u20F0\u20F5\u20FA\u20FF\u2103\u2112\u2138\u0317\u213E\u2152\u219E\u0100;l\u064D\u2087;\u6A8C\u0180cmp\u2090\u2095\u209Dute;\u41F5ma\u0100;d\u209C\u1CDA\u43B3;\u6A86reve;\u411F\u0100iy\u20AA\u20AErc;\u411D;\u4433ot;\u4121\u0200;lqs\u063E\u0642\u20BD\u20C9\u0180;qs\u063E\u064C\u20C4lan\xF4\u0665\u0200;cdl\u0665\u20D2\u20D5\u20E5c;\u6AA9ot\u0100;o\u20DC\u20DD\u6A80\u0100;l\u20E2\u20E3\u6A82;\u6A84\u0100;e\u20EA\u20ED\uC000\u22DB\uFE00s;\u6A94r;\uC000\u{1D524}\u0100;g\u0673\u061Bmel;\u6137cy;\u4453\u0200;Eaj\u065A\u210C\u210E\u2110;\u6A92;\u6AA5;\u6AA4\u0200Eaes\u211B\u211D\u2129\u2134;\u6269p\u0100;p\u2123\u2124\u6A8Arox\xBB\u2124\u0100;q\u212E\u212F\u6A88\u0100;q\u212E\u211Bim;\u62E7pf;\uC000\u{1D558}\u0100ci\u2143\u2146r;\u610Am\u0180;el\u066B\u214E\u2150;\u6A8E;\u6A90\u8300>;cdlqr\u05EE\u2160\u216A\u216E\u2173\u2179\u0100ci\u2165\u2167;\u6AA7r;\u6A7Aot;\u62D7Par;\u6995uest;\u6A7C\u0280adels\u2184\u216A\u2190\u0656\u219B\u01F0\u2189\0\u218Epro\xF8\u209Er;\u6978q\u0100lq\u063F\u2196les\xF3\u2088i\xED\u066B\u0100en\u21A3\u21ADrtneqq;\uC000\u2269\uFE00\xC5\u21AA\u0500Aabcefkosy\u21C4\u21C7\u21F1\u21F5\u21FA\u2218\u221D\u222F\u2268\u227Dr\xF2\u03A0\u0200ilmr\u21D0\u21D4\u21D7\u21DBrs\xF0\u1484f\xBB\u2024il\xF4\u06A9\u0100dr\u21E0\u21E4cy;\u444A\u0180;cw\u08F4\u21EB\u21EFir;\u6948;\u61ADar;\u610Firc;\u4125\u0180alr\u2201\u220E\u2213rts\u0100;u\u2209\u220A\u6665it\xBB\u220Alip;\u6026con;\u62B9r;\uC000\u{1D525}s\u0100ew\u2223\u2229arow;\u6925arow;\u6926\u0280amopr\u223A\u223E\u2243\u225E\u2263rr;\u61FFtht;\u623Bk\u0100lr\u2249\u2253eftarrow;\u61A9ightarrow;\u61AAf;\uC000\u{1D559}bar;\u6015\u0180clt\u226F\u2274\u2278r;\uC000\u{1D4BD}as\xE8\u21F4rok;\u4127\u0100bp\u2282\u2287ull;\u6043hen\xBB\u1C5B\u0AE1\u22A3\0\u22AA\0\u22B8\u22C5\u22CE\0\u22D5\u22F3\0\0\u22F8\u2322\u2367\u2362\u237F\0\u2386\u23AA\u23B4cute\u803B\xED\u40ED\u0180;iy\u0771\u22B0\u22B5rc\u803B\xEE\u40EE;\u4438\u0100cx\u22BC\u22BFy;\u4435cl\u803B\xA1\u40A1\u0100fr\u039F\u22C9;\uC000\u{1D526}rave\u803B\xEC\u40EC\u0200;ino\u073E\u22DD\u22E9\u22EE\u0100in\u22E2\u22E6nt;\u6A0Ct;\u622Dfin;\u69DCta;\u6129lig;\u4133\u0180aop\u22FE\u231A\u231D\u0180cgt\u2305\u2308\u2317r;\u412B\u0180elp\u071F\u230F\u2313in\xE5\u078Ear\xF4\u0720h;\u4131f;\u62B7ed;\u41B5\u0280;cfot\u04F4\u232C\u2331\u233D\u2341are;\u6105in\u0100;t\u2338\u2339\u621Eie;\u69DDdo\xF4\u2319\u0280;celp\u0757\u234C\u2350\u235B\u2361al;\u62BA\u0100gr\u2355\u2359er\xF3\u1563\xE3\u234Darhk;\u6A17rod;\u6A3C\u0200cgpt\u236F\u2372\u2376\u237By;\u4451on;\u412Ff;\uC000\u{1D55A}a;\u43B9uest\u803B\xBF\u40BF\u0100ci\u238A\u238Fr;\uC000\u{1D4BE}n\u0280;Edsv\u04F4\u239B\u239D\u23A1\u04F3;\u62F9ot;\u62F5\u0100;v\u23A6\u23A7\u62F4;\u62F3\u0100;i\u0777\u23AElde;\u4129\u01EB\u23B8\0\u23BCcy;\u4456l\u803B\xEF\u40EF\u0300cfmosu\u23CC\u23D7\u23DC\u23E1\u23E7\u23F5\u0100iy\u23D1\u23D5rc;\u4135;\u4439r;\uC000\u{1D527}ath;\u4237pf;\uC000\u{1D55B}\u01E3\u23EC\0\u23F1r;\uC000\u{1D4BF}rcy;\u4458kcy;\u4454\u0400acfghjos\u240B\u2416\u2422\u2427\u242D\u2431\u2435\u243Bppa\u0100;v\u2413\u2414\u43BA;\u43F0\u0100ey\u241B\u2420dil;\u4137;\u443Ar;\uC000\u{1D528}reen;\u4138cy;\u4445cy;\u445Cpf;\uC000\u{1D55C}cr;\uC000\u{1D4C0}\u0B80ABEHabcdefghjlmnoprstuv\u2470\u2481\u2486\u248D\u2491\u250E\u253D\u255A\u2580\u264E\u265E\u2665\u2679\u267D\u269A\u26B2\u26D8\u275D\u2768\u278B\u27C0\u2801\u2812\u0180art\u2477\u247A\u247Cr\xF2\u09C6\xF2\u0395ail;\u691Barr;\u690E\u0100;g\u0994\u248B;\u6A8Bar;\u6962\u0963\u24A5\0\u24AA\0\u24B1\0\0\0\0\0\u24B5\u24BA\0\u24C6\u24C8\u24CD\0\u24F9ute;\u413Amptyv;\u69B4ra\xEE\u084Cbda;\u43BBg\u0180;dl\u088E\u24C1\u24C3;\u6991\xE5\u088E;\u6A85uo\u803B\xAB\u40ABr\u0400;bfhlpst\u0899\u24DE\u24E6\u24E9\u24EB\u24EE\u24F1\u24F5\u0100;f\u089D\u24E3s;\u691Fs;\u691D\xEB\u2252p;\u61ABl;\u6939im;\u6973l;\u61A2\u0180;ae\u24FF\u2500\u2504\u6AABil;\u6919\u0100;s\u2509\u250A\u6AAD;\uC000\u2AAD\uFE00\u0180abr\u2515\u2519\u251Drr;\u690Crk;\u6772\u0100ak\u2522\u252Cc\u0100ek\u2528\u252A;\u407B;\u405B\u0100es\u2531\u2533;\u698Bl\u0100du\u2539\u253B;\u698F;\u698D\u0200aeuy\u2546\u254B\u2556\u2558ron;\u413E\u0100di\u2550\u2554il;\u413C\xEC\u08B0\xE2\u2529;\u443B\u0200cqrs\u2563\u2566\u256D\u257Da;\u6936uo\u0100;r\u0E19\u1746\u0100du\u2572\u2577har;\u6967shar;\u694Bh;\u61B2\u0280;fgqs\u258B\u258C\u0989\u25F3\u25FF\u6264t\u0280ahlrt\u2598\u25A4\u25B7\u25C2\u25E8rrow\u0100;t\u0899\u25A1a\xE9\u24F6arpoon\u0100du\u25AF\u25B4own\xBB\u045Ap\xBB\u0966eftarrows;\u61C7ight\u0180ahs\u25CD\u25D6\u25DErrow\u0100;s\u08F4\u08A7arpoon\xF3\u0F98quigarro\xF7\u21F0hreetimes;\u62CB\u0180;qs\u258B\u0993\u25FAlan\xF4\u09AC\u0280;cdgs\u09AC\u260A\u260D\u261D\u2628c;\u6AA8ot\u0100;o\u2614\u2615\u6A7F\u0100;r\u261A\u261B\u6A81;\u6A83\u0100;e\u2622\u2625\uC000\u22DA\uFE00s;\u6A93\u0280adegs\u2633\u2639\u263D\u2649\u264Bppro\xF8\u24C6ot;\u62D6q\u0100gq\u2643\u2645\xF4\u0989gt\xF2\u248C\xF4\u099Bi\xED\u09B2\u0180ilr\u2655\u08E1\u265Asht;\u697C;\uC000\u{1D529}\u0100;E\u099C\u2663;\u6A91\u0161\u2669\u2676r\u0100du\u25B2\u266E\u0100;l\u0965\u2673;\u696Alk;\u6584cy;\u4459\u0280;acht\u0A48\u2688\u268B\u2691\u2696r\xF2\u25C1orne\xF2\u1D08ard;\u696Bri;\u65FA\u0100io\u269F\u26A4dot;\u4140ust\u0100;a\u26AC\u26AD\u63B0che\xBB\u26AD\u0200Eaes\u26BB\u26BD\u26C9\u26D4;\u6268p\u0100;p\u26C3\u26C4\u6A89rox\xBB\u26C4\u0100;q\u26CE\u26CF\u6A87\u0100;q\u26CE\u26BBim;\u62E6\u0400abnoptwz\u26E9\u26F4\u26F7\u271A\u272F\u2741\u2747\u2750\u0100nr\u26EE\u26F1g;\u67ECr;\u61FDr\xEB\u08C1g\u0180lmr\u26FF\u270D\u2714eft\u0100ar\u09E6\u2707ight\xE1\u09F2apsto;\u67FCight\xE1\u09FDparrow\u0100lr\u2725\u2729ef\xF4\u24EDight;\u61AC\u0180afl\u2736\u2739\u273Dr;\u6985;\uC000\u{1D55D}us;\u6A2Dimes;\u6A34\u0161\u274B\u274Fst;\u6217\xE1\u134E\u0180;ef\u2757\u2758\u1800\u65CAnge\xBB\u2758ar\u0100;l\u2764\u2765\u4028t;\u6993\u0280achmt\u2773\u2776\u277C\u2785\u2787r\xF2\u08A8orne\xF2\u1D8Car\u0100;d\u0F98\u2783;\u696D;\u600Eri;\u62BF\u0300achiqt\u2798\u279D\u0A40\u27A2\u27AE\u27BBquo;\u6039r;\uC000\u{1D4C1}m\u0180;eg\u09B2\u27AA\u27AC;\u6A8D;\u6A8F\u0100bu\u252A\u27B3o\u0100;r\u0E1F\u27B9;\u601Arok;\u4142\u8400<;cdhilqr\u082B\u27D2\u2639\u27DC\u27E0\u27E5\u27EA\u27F0\u0100ci\u27D7\u27D9;\u6AA6r;\u6A79re\xE5\u25F2mes;\u62C9arr;\u6976uest;\u6A7B\u0100Pi\u27F5\u27F9ar;\u6996\u0180;ef\u2800\u092D\u181B\u65C3r\u0100du\u2807\u280Dshar;\u694Ahar;\u6966\u0100en\u2817\u2821rtneqq;\uC000\u2268\uFE00\xC5\u281E\u0700Dacdefhilnopsu\u2840\u2845\u2882\u288E\u2893\u28A0\u28A5\u28A8\u28DA\u28E2\u28E4\u0A83\u28F3\u2902Dot;\u623A\u0200clpr\u284E\u2852\u2863\u287Dr\u803B\xAF\u40AF\u0100et\u2857\u2859;\u6642\u0100;e\u285E\u285F\u6720se\xBB\u285F\u0100;s\u103B\u2868to\u0200;dlu\u103B\u2873\u2877\u287Bow\xEE\u048Cef\xF4\u090F\xF0\u13D1ker;\u65AE\u0100oy\u2887\u288Cmma;\u6A29;\u443Cash;\u6014asuredangle\xBB\u1626r;\uC000\u{1D52A}o;\u6127\u0180cdn\u28AF\u28B4\u28C9ro\u803B\xB5\u40B5\u0200;acd\u1464\u28BD\u28C0\u28C4s\xF4\u16A7ir;\u6AF0ot\u80BB\xB7\u01B5us\u0180;bd\u28D2\u1903\u28D3\u6212\u0100;u\u1D3C\u28D8;\u6A2A\u0163\u28DE\u28E1p;\u6ADB\xF2\u2212\xF0\u0A81\u0100dp\u28E9\u28EEels;\u62A7f;\uC000\u{1D55E}\u0100ct\u28F8\u28FDr;\uC000\u{1D4C2}pos\xBB\u159D\u0180;lm\u2909\u290A\u290D\u43BCtimap;\u62B8\u0C00GLRVabcdefghijlmoprstuvw\u2942\u2953\u297E\u2989\u2998\u29DA\u29E9\u2A15\u2A1A\u2A58\u2A5D\u2A83\u2A95\u2AA4\u2AA8\u2B04\u2B07\u2B44\u2B7F\u2BAE\u2C34\u2C67\u2C7C\u2CE9\u0100gt\u2947\u294B;\uC000\u22D9\u0338\u0100;v\u2950\u0BCF\uC000\u226B\u20D2\u0180elt\u295A\u2972\u2976ft\u0100ar\u2961\u2967rrow;\u61CDightarrow;\u61CE;\uC000\u22D8\u0338\u0100;v\u297B\u0C47\uC000\u226A\u20D2ightarrow;\u61CF\u0100Dd\u298E\u2993ash;\u62AFash;\u62AE\u0280bcnpt\u29A3\u29A7\u29AC\u29B1\u29CCla\xBB\u02DEute;\u4144g;\uC000\u2220\u20D2\u0280;Eiop\u0D84\u29BC\u29C0\u29C5\u29C8;\uC000\u2A70\u0338d;\uC000\u224B\u0338s;\u4149ro\xF8\u0D84ur\u0100;a\u29D3\u29D4\u666El\u0100;s\u29D3\u0B38\u01F3\u29DF\0\u29E3p\u80BB\xA0\u0B37mp\u0100;e\u0BF9\u0C00\u0280aeouy\u29F4\u29FE\u2A03\u2A10\u2A13\u01F0\u29F9\0\u29FB;\u6A43on;\u4148dil;\u4146ng\u0100;d\u0D7E\u2A0Aot;\uC000\u2A6D\u0338p;\u6A42;\u443Dash;\u6013\u0380;Aadqsx\u0B92\u2A29\u2A2D\u2A3B\u2A41\u2A45\u2A50rr;\u61D7r\u0100hr\u2A33\u2A36k;\u6924\u0100;o\u13F2\u13F0ot;\uC000\u2250\u0338ui\xF6\u0B63\u0100ei\u2A4A\u2A4Ear;\u6928\xED\u0B98ist\u0100;s\u0BA0\u0B9Fr;\uC000\u{1D52B}\u0200Eest\u0BC5\u2A66\u2A79\u2A7C\u0180;qs\u0BBC\u2A6D\u0BE1\u0180;qs\u0BBC\u0BC5\u2A74lan\xF4\u0BE2i\xED\u0BEA\u0100;r\u0BB6\u2A81\xBB\u0BB7\u0180Aap\u2A8A\u2A8D\u2A91r\xF2\u2971rr;\u61AEar;\u6AF2\u0180;sv\u0F8D\u2A9C\u0F8C\u0100;d\u2AA1\u2AA2\u62FC;\u62FAcy;\u445A\u0380AEadest\u2AB7\u2ABA\u2ABE\u2AC2\u2AC5\u2AF6\u2AF9r\xF2\u2966;\uC000\u2266\u0338rr;\u619Ar;\u6025\u0200;fqs\u0C3B\u2ACE\u2AE3\u2AEFt\u0100ar\u2AD4\u2AD9rro\xF7\u2AC1ightarro\xF7\u2A90\u0180;qs\u0C3B\u2ABA\u2AEAlan\xF4\u0C55\u0100;s\u0C55\u2AF4\xBB\u0C36i\xED\u0C5D\u0100;r\u0C35\u2AFEi\u0100;e\u0C1A\u0C25i\xE4\u0D90\u0100pt\u2B0C\u2B11f;\uC000\u{1D55F}\u8180\xAC;in\u2B19\u2B1A\u2B36\u40ACn\u0200;Edv\u0B89\u2B24\u2B28\u2B2E;\uC000\u22F9\u0338ot;\uC000\u22F5\u0338\u01E1\u0B89\u2B33\u2B35;\u62F7;\u62F6i\u0100;v\u0CB8\u2B3C\u01E1\u0CB8\u2B41\u2B43;\u62FE;\u62FD\u0180aor\u2B4B\u2B63\u2B69r\u0200;ast\u0B7B\u2B55\u2B5A\u2B5Flle\xEC\u0B7Bl;\uC000\u2AFD\u20E5;\uC000\u2202\u0338lint;\u6A14\u0180;ce\u0C92\u2B70\u2B73u\xE5\u0CA5\u0100;c\u0C98\u2B78\u0100;e\u0C92\u2B7D\xF1\u0C98\u0200Aait\u2B88\u2B8B\u2B9D\u2BA7r\xF2\u2988rr\u0180;cw\u2B94\u2B95\u2B99\u619B;\uC000\u2933\u0338;\uC000\u219D\u0338ghtarrow\xBB\u2B95ri\u0100;e\u0CCB\u0CD6\u0380chimpqu\u2BBD\u2BCD\u2BD9\u2B04\u0B78\u2BE4\u2BEF\u0200;cer\u0D32\u2BC6\u0D37\u2BC9u\xE5\u0D45;\uC000\u{1D4C3}ort\u026D\u2B05\0\0\u2BD6ar\xE1\u2B56m\u0100;e\u0D6E\u2BDF\u0100;q\u0D74\u0D73su\u0100bp\u2BEB\u2BED\xE5\u0CF8\xE5\u0D0B\u0180bcp\u2BF6\u2C11\u2C19\u0200;Ees\u2BFF\u2C00\u0D22\u2C04\u6284;\uC000\u2AC5\u0338et\u0100;e\u0D1B\u2C0Bq\u0100;q\u0D23\u2C00c\u0100;e\u0D32\u2C17\xF1\u0D38\u0200;Ees\u2C22\u2C23\u0D5F\u2C27\u6285;\uC000\u2AC6\u0338et\u0100;e\u0D58\u2C2Eq\u0100;q\u0D60\u2C23\u0200gilr\u2C3D\u2C3F\u2C45\u2C47\xEC\u0BD7lde\u803B\xF1\u40F1\xE7\u0C43iangle\u0100lr\u2C52\u2C5Ceft\u0100;e\u0C1A\u2C5A\xF1\u0C26ight\u0100;e\u0CCB\u2C65\xF1\u0CD7\u0100;m\u2C6C\u2C6D\u43BD\u0180;es\u2C74\u2C75\u2C79\u4023ro;\u6116p;\u6007\u0480DHadgilrs\u2C8F\u2C94\u2C99\u2C9E\u2CA3\u2CB0\u2CB6\u2CD3\u2CE3ash;\u62ADarr;\u6904p;\uC000\u224D\u20D2ash;\u62AC\u0100et\u2CA8\u2CAC;\uC000\u2265\u20D2;\uC000>\u20D2nfin;\u69DE\u0180Aet\u2CBD\u2CC1\u2CC5rr;\u6902;\uC000\u2264\u20D2\u0100;r\u2CCA\u2CCD\uC000<\u20D2ie;\uC000\u22B4\u20D2\u0100At\u2CD8\u2CDCrr;\u6903rie;\uC000\u22B5\u20D2im;\uC000\u223C\u20D2\u0180Aan\u2CF0\u2CF4\u2D02rr;\u61D6r\u0100hr\u2CFA\u2CFDk;\u6923\u0100;o\u13E7\u13E5ear;\u6927\u1253\u1A95\0\0\0\0\0\0\0\0\0\0\0\0\0\u2D2D\0\u2D38\u2D48\u2D60\u2D65\u2D72\u2D84\u1B07\0\0\u2D8D\u2DAB\0\u2DC8\u2DCE\0\u2DDC\u2E19\u2E2B\u2E3E\u2E43\u0100cs\u2D31\u1A97ute\u803B\xF3\u40F3\u0100iy\u2D3C\u2D45r\u0100;c\u1A9E\u2D42\u803B\xF4\u40F4;\u443E\u0280abios\u1AA0\u2D52\u2D57\u01C8\u2D5Alac;\u4151v;\u6A38old;\u69BClig;\u4153\u0100cr\u2D69\u2D6Dir;\u69BF;\uC000\u{1D52C}\u036F\u2D79\0\0\u2D7C\0\u2D82n;\u42DBave\u803B\xF2\u40F2;\u69C1\u0100bm\u2D88\u0DF4ar;\u69B5\u0200acit\u2D95\u2D98\u2DA5\u2DA8r\xF2\u1A80\u0100ir\u2D9D\u2DA0r;\u69BEoss;\u69BBn\xE5\u0E52;\u69C0\u0180aei\u2DB1\u2DB5\u2DB9cr;\u414Dga;\u43C9\u0180cdn\u2DC0\u2DC5\u01CDron;\u43BF;\u69B6pf;\uC000\u{1D560}\u0180ael\u2DD4\u2DD7\u01D2r;\u69B7rp;\u69B9\u0380;adiosv\u2DEA\u2DEB\u2DEE\u2E08\u2E0D\u2E10\u2E16\u6228r\xF2\u1A86\u0200;efm\u2DF7\u2DF8\u2E02\u2E05\u6A5Dr\u0100;o\u2DFE\u2DFF\u6134f\xBB\u2DFF\u803B\xAA\u40AA\u803B\xBA\u40BAgof;\u62B6r;\u6A56lope;\u6A57;\u6A5B\u0180clo\u2E1F\u2E21\u2E27\xF2\u2E01ash\u803B\xF8\u40F8l;\u6298i\u016C\u2E2F\u2E34de\u803B\xF5\u40F5es\u0100;a\u01DB\u2E3As;\u6A36ml\u803B\xF6\u40F6bar;\u633D\u0AE1\u2E5E\0\u2E7D\0\u2E80\u2E9D\0\u2EA2\u2EB9\0\0\u2ECB\u0E9C\0\u2F13\0\0\u2F2B\u2FBC\0\u2FC8r\u0200;ast\u0403\u2E67\u2E72\u0E85\u8100\xB6;l\u2E6D\u2E6E\u40B6le\xEC\u0403\u0269\u2E78\0\0\u2E7Bm;\u6AF3;\u6AFDy;\u443Fr\u0280cimpt\u2E8B\u2E8F\u2E93\u1865\u2E97nt;\u4025od;\u402Eil;\u6030enk;\u6031r;\uC000\u{1D52D}\u0180imo\u2EA8\u2EB0\u2EB4\u0100;v\u2EAD\u2EAE\u43C6;\u43D5ma\xF4\u0A76ne;\u660E\u0180;tv\u2EBF\u2EC0\u2EC8\u43C0chfork\xBB\u1FFD;\u43D6\u0100au\u2ECF\u2EDFn\u0100ck\u2ED5\u2EDDk\u0100;h\u21F4\u2EDB;\u610E\xF6\u21F4s\u0480;abcdemst\u2EF3\u2EF4\u1908\u2EF9\u2EFD\u2F04\u2F06\u2F0A\u2F0E\u402Bcir;\u6A23ir;\u6A22\u0100ou\u1D40\u2F02;\u6A25;\u6A72n\u80BB\xB1\u0E9Dim;\u6A26wo;\u6A27\u0180ipu\u2F19\u2F20\u2F25ntint;\u6A15f;\uC000\u{1D561}nd\u803B\xA3\u40A3\u0500;Eaceinosu\u0EC8\u2F3F\u2F41\u2F44\u2F47\u2F81\u2F89\u2F92\u2F7E\u2FB6;\u6AB3p;\u6AB7u\xE5\u0ED9\u0100;c\u0ECE\u2F4C\u0300;acens\u0EC8\u2F59\u2F5F\u2F66\u2F68\u2F7Eppro\xF8\u2F43urlye\xF1\u0ED9\xF1\u0ECE\u0180aes\u2F6F\u2F76\u2F7Approx;\u6AB9qq;\u6AB5im;\u62E8i\xED\u0EDFme\u0100;s\u2F88\u0EAE\u6032\u0180Eas\u2F78\u2F90\u2F7A\xF0\u2F75\u0180dfp\u0EEC\u2F99\u2FAF\u0180als\u2FA0\u2FA5\u2FAAlar;\u632Eine;\u6312urf;\u6313\u0100;t\u0EFB\u2FB4\xEF\u0EFBrel;\u62B0\u0100ci\u2FC0\u2FC5r;\uC000\u{1D4C5};\u43C8ncsp;\u6008\u0300fiopsu\u2FDA\u22E2\u2FDF\u2FE5\u2FEB\u2FF1r;\uC000\u{1D52E}pf;\uC000\u{1D562}rime;\u6057cr;\uC000\u{1D4C6}\u0180aeo\u2FF8\u3009\u3013t\u0100ei\u2FFE\u3005rnion\xF3\u06B0nt;\u6A16st\u0100;e\u3010\u3011\u403F\xF1\u1F19\xF4\u0F14\u0A80ABHabcdefhilmnoprstux\u3040\u3051\u3055\u3059\u30E0\u310E\u312B\u3147\u3162\u3172\u318E\u3206\u3215\u3224\u3229\u3258\u326E\u3272\u3290\u32B0\u32B7\u0180art\u3047\u304A\u304Cr\xF2\u10B3\xF2\u03DDail;\u691Car\xF2\u1C65ar;\u6964\u0380cdenqrt\u3068\u3075\u3078\u307F\u308F\u3094\u30CC\u0100eu\u306D\u3071;\uC000\u223D\u0331te;\u4155i\xE3\u116Emptyv;\u69B3g\u0200;del\u0FD1\u3089\u308B\u308D;\u6992;\u69A5\xE5\u0FD1uo\u803B\xBB\u40BBr\u0580;abcfhlpstw\u0FDC\u30AC\u30AF\u30B7\u30B9\u30BC\u30BE\u30C0\u30C3\u30C7\u30CAp;\u6975\u0100;f\u0FE0\u30B4s;\u6920;\u6933s;\u691E\xEB\u225D\xF0\u272El;\u6945im;\u6974l;\u61A3;\u619D\u0100ai\u30D1\u30D5il;\u691Ao\u0100;n\u30DB\u30DC\u6236al\xF3\u0F1E\u0180abr\u30E7\u30EA\u30EEr\xF2\u17E5rk;\u6773\u0100ak\u30F3\u30FDc\u0100ek\u30F9\u30FB;\u407D;\u405D\u0100es\u3102\u3104;\u698Cl\u0100du\u310A\u310C;\u698E;\u6990\u0200aeuy\u3117\u311C\u3127\u3129ron;\u4159\u0100di\u3121\u3125il;\u4157\xEC\u0FF2\xE2\u30FA;\u4440\u0200clqs\u3134\u3137\u313D\u3144a;\u6937dhar;\u6969uo\u0100;r\u020E\u020Dh;\u61B3\u0180acg\u314E\u315F\u0F44l\u0200;ips\u0F78\u3158\u315B\u109Cn\xE5\u10BBar\xF4\u0FA9t;\u65AD\u0180ilr\u3169\u1023\u316Esht;\u697D;\uC000\u{1D52F}\u0100ao\u3177\u3186r\u0100du\u317D\u317F\xBB\u047B\u0100;l\u1091\u3184;\u696C\u0100;v\u318B\u318C\u43C1;\u43F1\u0180gns\u3195\u31F9\u31FCht\u0300ahlrst\u31A4\u31B0\u31C2\u31D8\u31E4\u31EErrow\u0100;t\u0FDC\u31ADa\xE9\u30C8arpoon\u0100du\u31BB\u31BFow\xEE\u317Ep\xBB\u1092eft\u0100ah\u31CA\u31D0rrow\xF3\u0FEAarpoon\xF3\u0551ightarrows;\u61C9quigarro\xF7\u30CBhreetimes;\u62CCg;\u42DAingdotse\xF1\u1F32\u0180ahm\u320D\u3210\u3213r\xF2\u0FEAa\xF2\u0551;\u600Foust\u0100;a\u321E\u321F\u63B1che\xBB\u321Fmid;\u6AEE\u0200abpt\u3232\u323D\u3240\u3252\u0100nr\u3237\u323Ag;\u67EDr;\u61FEr\xEB\u1003\u0180afl\u3247\u324A\u324Er;\u6986;\uC000\u{1D563}us;\u6A2Eimes;\u6A35\u0100ap\u325D\u3267r\u0100;g\u3263\u3264\u4029t;\u6994olint;\u6A12ar\xF2\u31E3\u0200achq\u327B\u3280\u10BC\u3285quo;\u603Ar;\uC000\u{1D4C7}\u0100bu\u30FB\u328Ao\u0100;r\u0214\u0213\u0180hir\u3297\u329B\u32A0re\xE5\u31F8mes;\u62CAi\u0200;efl\u32AA\u1059\u1821\u32AB\u65B9tri;\u69CEluhar;\u6968;\u611E\u0D61\u32D5\u32DB\u32DF\u332C\u3338\u3371\0\u337A\u33A4\0\0\u33EC\u33F0\0\u3428\u3448\u345A\u34AD\u34B1\u34CA\u34F1\0\u3616\0\0\u3633cute;\u415Bqu\xEF\u27BA\u0500;Eaceinpsy\u11ED\u32F3\u32F5\u32FF\u3302\u330B\u330F\u331F\u3326\u3329;\u6AB4\u01F0\u32FA\0\u32FC;\u6AB8on;\u4161u\xE5\u11FE\u0100;d\u11F3\u3307il;\u415Frc;\u415D\u0180Eas\u3316\u3318\u331B;\u6AB6p;\u6ABAim;\u62E9olint;\u6A13i\xED\u1204;\u4441ot\u0180;be\u3334\u1D47\u3335\u62C5;\u6A66\u0380Aacmstx\u3346\u334A\u3357\u335B\u335E\u3363\u336Drr;\u61D8r\u0100hr\u3350\u3352\xEB\u2228\u0100;o\u0A36\u0A34t\u803B\xA7\u40A7i;\u403Bwar;\u6929m\u0100in\u3369\xF0nu\xF3\xF1t;\u6736r\u0100;o\u3376\u2055\uC000\u{1D530}\u0200acoy\u3382\u3386\u3391\u33A0rp;\u666F\u0100hy\u338B\u338Fcy;\u4449;\u4448rt\u026D\u3399\0\0\u339Ci\xE4\u1464ara\xEC\u2E6F\u803B\xAD\u40AD\u0100gm\u33A8\u33B4ma\u0180;fv\u33B1\u33B2\u33B2\u43C3;\u43C2\u0400;deglnpr\u12AB\u33C5\u33C9\u33CE\u33D6\u33DE\u33E1\u33E6ot;\u6A6A\u0100;q\u12B1\u12B0\u0100;E\u33D3\u33D4\u6A9E;\u6AA0\u0100;E\u33DB\u33DC\u6A9D;\u6A9Fe;\u6246lus;\u6A24arr;\u6972ar\xF2\u113D\u0200aeit\u33F8\u3408\u340F\u3417\u0100ls\u33FD\u3404lsetm\xE9\u336Ahp;\u6A33parsl;\u69E4\u0100dl\u1463\u3414e;\u6323\u0100;e\u341C\u341D\u6AAA\u0100;s\u3422\u3423\u6AAC;\uC000\u2AAC\uFE00\u0180flp\u342E\u3433\u3442tcy;\u444C\u0100;b\u3438\u3439\u402F\u0100;a\u343E\u343F\u69C4r;\u633Ff;\uC000\u{1D564}a\u0100dr\u344D\u0402es\u0100;u\u3454\u3455\u6660it\xBB\u3455\u0180csu\u3460\u3479\u349F\u0100au\u3465\u346Fp\u0100;s\u1188\u346B;\uC000\u2293\uFE00p\u0100;s\u11B4\u3475;\uC000\u2294\uFE00u\u0100bp\u347F\u348F\u0180;es\u1197\u119C\u3486et\u0100;e\u1197\u348D\xF1\u119D\u0180;es\u11A8\u11AD\u3496et\u0100;e\u11A8\u349D\xF1\u11AE\u0180;af\u117B\u34A6\u05B0r\u0165\u34AB\u05B1\xBB\u117Car\xF2\u1148\u0200cemt\u34B9\u34BE\u34C2\u34C5r;\uC000\u{1D4C8}tm\xEE\xF1i\xEC\u3415ar\xE6\u11BE\u0100ar\u34CE\u34D5r\u0100;f\u34D4\u17BF\u6606\u0100an\u34DA\u34EDight\u0100ep\u34E3\u34EApsilo\xEE\u1EE0h\xE9\u2EAFs\xBB\u2852\u0280bcmnp\u34FB\u355E\u1209\u358B\u358E\u0480;Edemnprs\u350E\u350F\u3511\u3515\u351E\u3523\u352C\u3531\u3536\u6282;\u6AC5ot;\u6ABD\u0100;d\u11DA\u351Aot;\u6AC3ult;\u6AC1\u0100Ee\u3528\u352A;\u6ACB;\u628Alus;\u6ABFarr;\u6979\u0180eiu\u353D\u3552\u3555t\u0180;en\u350E\u3545\u354Bq\u0100;q\u11DA\u350Feq\u0100;q\u352B\u3528m;\u6AC7\u0100bp\u355A\u355C;\u6AD5;\u6AD3c\u0300;acens\u11ED\u356C\u3572\u3579\u357B\u3326ppro\xF8\u32FAurlye\xF1\u11FE\xF1\u11F3\u0180aes\u3582\u3588\u331Bppro\xF8\u331Aq\xF1\u3317g;\u666A\u0680123;Edehlmnps\u35A9\u35AC\u35AF\u121C\u35B2\u35B4\u35C0\u35C9\u35D5\u35DA\u35DF\u35E8\u35ED\u803B\xB9\u40B9\u803B\xB2\u40B2\u803B\xB3\u40B3;\u6AC6\u0100os\u35B9\u35BCt;\u6ABEub;\u6AD8\u0100;d\u1222\u35C5ot;\u6AC4s\u0100ou\u35CF\u35D2l;\u67C9b;\u6AD7arr;\u697Bult;\u6AC2\u0100Ee\u35E4\u35E6;\u6ACC;\u628Blus;\u6AC0\u0180eiu\u35F4\u3609\u360Ct\u0180;en\u121C\u35FC\u3602q\u0100;q\u1222\u35B2eq\u0100;q\u35E7\u35E4m;\u6AC8\u0100bp\u3611\u3613;\u6AD4;\u6AD6\u0180Aan\u361C\u3620\u362Drr;\u61D9r\u0100hr\u3626\u3628\xEB\u222E\u0100;o\u0A2B\u0A29war;\u692Alig\u803B\xDF\u40DF\u0BE1\u3651\u365D\u3660\u12CE\u3673\u3679\0\u367E\u36C2\0\0\0\0\0\u36DB\u3703\0\u3709\u376C\0\0\0\u3787\u0272\u3656\0\0\u365Bget;\u6316;\u43C4r\xEB\u0E5F\u0180aey\u3666\u366B\u3670ron;\u4165dil;\u4163;\u4442lrec;\u6315r;\uC000\u{1D531}\u0200eiko\u3686\u369D\u36B5\u36BC\u01F2\u368B\0\u3691e\u01004f\u1284\u1281a\u0180;sv\u3698\u3699\u369B\u43B8ym;\u43D1\u0100cn\u36A2\u36B2k\u0100as\u36A8\u36AEppro\xF8\u12C1im\xBB\u12ACs\xF0\u129E\u0100as\u36BA\u36AE\xF0\u12C1rn\u803B\xFE\u40FE\u01EC\u031F\u36C6\u22E7es\u8180\xD7;bd\u36CF\u36D0\u36D8\u40D7\u0100;a\u190F\u36D5r;\u6A31;\u6A30\u0180eps\u36E1\u36E3\u3700\xE1\u2A4D\u0200;bcf\u0486\u36EC\u36F0\u36F4ot;\u6336ir;\u6AF1\u0100;o\u36F9\u36FC\uC000\u{1D565}rk;\u6ADA\xE1\u3362rime;\u6034\u0180aip\u370F\u3712\u3764d\xE5\u1248\u0380adempst\u3721\u374D\u3740\u3751\u3757\u375C\u375Fngle\u0280;dlqr\u3730\u3731\u3736\u3740\u3742\u65B5own\xBB\u1DBBeft\u0100;e\u2800\u373E\xF1\u092E;\u625Cight\u0100;e\u32AA\u374B\xF1\u105Aot;\u65ECinus;\u6A3Alus;\u6A39b;\u69CDime;\u6A3Bezium;\u63E2\u0180cht\u3772\u377D\u3781\u0100ry\u3777\u377B;\uC000\u{1D4C9};\u4446cy;\u445Brok;\u4167\u0100io\u378B\u378Ex\xF4\u1777head\u0100lr\u3797\u37A0eftarro\xF7\u084Fightarrow\xBB\u0F5D\u0900AHabcdfghlmoprstuw\u37D0\u37D3\u37D7\u37E4\u37F0\u37FC\u380E\u381C\u3823\u3834\u3851\u385D\u386B\u38A9\u38CC\u38D2\u38EA\u38F6r\xF2\u03EDar;\u6963\u0100cr\u37DC\u37E2ute\u803B\xFA\u40FA\xF2\u1150r\u01E3\u37EA\0\u37EDy;\u445Eve;\u416D\u0100iy\u37F5\u37FArc\u803B\xFB\u40FB;\u4443\u0180abh\u3803\u3806\u380Br\xF2\u13ADlac;\u4171a\xF2\u13C3\u0100ir\u3813\u3818sht;\u697E;\uC000\u{1D532}rave\u803B\xF9\u40F9\u0161\u3827\u3831r\u0100lr\u382C\u382E\xBB\u0957\xBB\u1083lk;\u6580\u0100ct\u3839\u384D\u026F\u383F\0\0\u384Arn\u0100;e\u3845\u3846\u631Cr\xBB\u3846op;\u630Fri;\u65F8\u0100al\u3856\u385Acr;\u416B\u80BB\xA8\u0349\u0100gp\u3862\u3866on;\u4173f;\uC000\u{1D566}\u0300adhlsu\u114B\u3878\u387D\u1372\u3891\u38A0own\xE1\u13B3arpoon\u0100lr\u3888\u388Cef\xF4\u382Digh\xF4\u382Fi\u0180;hl\u3899\u389A\u389C\u43C5\xBB\u13FAon\xBB\u389Aparrows;\u61C8\u0180cit\u38B0\u38C4\u38C8\u026F\u38B6\0\0\u38C1rn\u0100;e\u38BC\u38BD\u631Dr\xBB\u38BDop;\u630Eng;\u416Fri;\u65F9cr;\uC000\u{1D4CA}\u0180dir\u38D9\u38DD\u38E2ot;\u62F0lde;\u4169i\u0100;f\u3730\u38E8\xBB\u1813\u0100am\u38EF\u38F2r\xF2\u38A8l\u803B\xFC\u40FCangle;\u69A7\u0780ABDacdeflnoprsz\u391C\u391F\u3929\u392D\u39B5\u39B8\u39BD\u39DF\u39E4\u39E8\u39F3\u39F9\u39FD\u3A01\u3A20r\xF2\u03F7ar\u0100;v\u3926\u3927\u6AE8;\u6AE9as\xE8\u03E1\u0100nr\u3932\u3937grt;\u699C\u0380eknprst\u34E3\u3946\u394B\u3952\u395D\u3964\u3996app\xE1\u2415othin\xE7\u1E96\u0180hir\u34EB\u2EC8\u3959op\xF4\u2FB5\u0100;h\u13B7\u3962\xEF\u318D\u0100iu\u3969\u396Dgm\xE1\u33B3\u0100bp\u3972\u3984setneq\u0100;q\u397D\u3980\uC000\u228A\uFE00;\uC000\u2ACB\uFE00setneq\u0100;q\u398F\u3992\uC000\u228B\uFE00;\uC000\u2ACC\uFE00\u0100hr\u399B\u399Fet\xE1\u369Ciangle\u0100lr\u39AA\u39AFeft\xBB\u0925ight\xBB\u1051y;\u4432ash\xBB\u1036\u0180elr\u39C4\u39D2\u39D7\u0180;be\u2DEA\u39CB\u39CFar;\u62BBq;\u625Alip;\u62EE\u0100bt\u39DC\u1468a\xF2\u1469r;\uC000\u{1D533}tr\xE9\u39AEsu\u0100bp\u39EF\u39F1\xBB\u0D1C\xBB\u0D59pf;\uC000\u{1D567}ro\xF0\u0EFBtr\xE9\u39B4\u0100cu\u3A06\u3A0Br;\uC000\u{1D4CB}\u0100bp\u3A10\u3A18n\u0100Ee\u3980\u3A16\xBB\u397En\u0100Ee\u3992\u3A1E\xBB\u3990igzag;\u699A\u0380cefoprs\u3A36\u3A3B\u3A56\u3A5B\u3A54\u3A61\u3A6Airc;\u4175\u0100di\u3A40\u3A51\u0100bg\u3A45\u3A49ar;\u6A5Fe\u0100;q\u15FA\u3A4F;\u6259erp;\u6118r;\uC000\u{1D534}pf;\uC000\u{1D568}\u0100;e\u1479\u3A66at\xE8\u1479cr;\uC000\u{1D4CC}\u0AE3\u178E\u3A87\0\u3A8B\0\u3A90\u3A9B\0\0\u3A9D\u3AA8\u3AAB\u3AAF\0\0\u3AC3\u3ACE\0\u3AD8\u17DC\u17DFtr\xE9\u17D1r;\uC000\u{1D535}\u0100Aa\u3A94\u3A97r\xF2\u03C3r\xF2\u09F6;\u43BE\u0100Aa\u3AA1\u3AA4r\xF2\u03B8r\xF2\u09EBa\xF0\u2713is;\u62FB\u0180dpt\u17A4\u3AB5\u3ABE\u0100fl\u3ABA\u17A9;\uC000\u{1D569}im\xE5\u17B2\u0100Aa\u3AC7\u3ACAr\xF2\u03CEr\xF2\u0A01\u0100cq\u3AD2\u17B8r;\uC000\u{1D4CD}\u0100pt\u17D6\u3ADCr\xE9\u17D4\u0400acefiosu\u3AF0\u3AFD\u3B08\u3B0C\u3B11\u3B15\u3B1B\u3B21c\u0100uy\u3AF6\u3AFBte\u803B\xFD\u40FD;\u444F\u0100iy\u3B02\u3B06rc;\u4177;\u444Bn\u803B\xA5\u40A5r;\uC000\u{1D536}cy;\u4457pf;\uC000\u{1D56A}cr;\uC000\u{1D4CE}\u0100cm\u3B26\u3B29y;\u444El\u803B\xFF\u40FF\u0500acdefhiosw\u3B42\u3B48\u3B54\u3B58\u3B64\u3B69\u3B6D\u3B74\u3B7A\u3B80cute;\u417A\u0100ay\u3B4D\u3B52ron;\u417E;\u4437ot;\u417C\u0100et\u3B5D\u3B61tr\xE6\u155Fa;\u43B6r;\uC000\u{1D537}cy;\u4436grarr;\u61DDpf;\uC000\u{1D56B}cr;\uC000\u{1D4CF}\u0100jn\u3B85\u3B87;\u600Dj;\u600C'.split("").map((c) => c.charCodeAt(0))
    );

    // ../../node_modules/entities/lib/esm/generated/decode-data-xml.js
    var decode_data_xml_default = new Uint16Array(
        // prettier-ignore
        "\u0200aglq	\x1B\u026D\0\0p;\u4026os;\u4027t;\u403Et;\u403Cuot;\u4022".split("").map((c) => c.charCodeAt(0))
    );

    // ../../node_modules/entities/lib/esm/decode_codepoint.js
    var _a;
    var decodeMap = /* @__PURE__ */ new Map([
        [0, 65533],
        // C1 Unicode control character reference replacements
        [128, 8364],
        [130, 8218],
        [131, 402],
        [132, 8222],
        [133, 8230],
        [134, 8224],
        [135, 8225],
        [136, 710],
        [137, 8240],
        [138, 352],
        [139, 8249],
        [140, 338],
        [142, 381],
        [145, 8216],
        [146, 8217],
        [147, 8220],
        [148, 8221],
        [149, 8226],
        [150, 8211],
        [151, 8212],
        [152, 732],
        [153, 8482],
        [154, 353],
        [155, 8250],
        [156, 339],
        [158, 382],
        [159, 376]
    ]);
    var fromCodePoint =
        // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition, node/no-unsupported-features/es-builtins
        (_a = String.fromCodePoint) !== null && _a !== void 0
            ? _a
            : function (codePoint) {
                  let output = '';
                  if (codePoint > 65535) {
                      codePoint -= 65536;
                      output += String.fromCharCode(((codePoint >>> 10) & 1023) | 55296);
                      codePoint = 56320 | (codePoint & 1023);
                  }
                  output += String.fromCharCode(codePoint);
                  return output;
              };
    function replaceCodePoint(codePoint) {
        var _a2;
        if ((codePoint >= 55296 && codePoint <= 57343) || codePoint > 1114111) {
            return 65533;
        }
        return (_a2 = decodeMap.get(codePoint)) !== null && _a2 !== void 0 ? _a2 : codePoint;
    }

    // ../../node_modules/entities/lib/esm/decode.js
    var CharCodes;
    (function (CharCodes2) {
        CharCodes2[(CharCodes2['NUM'] = 35)] = 'NUM';
        CharCodes2[(CharCodes2['SEMI'] = 59)] = 'SEMI';
        CharCodes2[(CharCodes2['EQUALS'] = 61)] = 'EQUALS';
        CharCodes2[(CharCodes2['ZERO'] = 48)] = 'ZERO';
        CharCodes2[(CharCodes2['NINE'] = 57)] = 'NINE';
        CharCodes2[(CharCodes2['LOWER_A'] = 97)] = 'LOWER_A';
        CharCodes2[(CharCodes2['LOWER_F'] = 102)] = 'LOWER_F';
        CharCodes2[(CharCodes2['LOWER_X'] = 120)] = 'LOWER_X';
        CharCodes2[(CharCodes2['LOWER_Z'] = 122)] = 'LOWER_Z';
        CharCodes2[(CharCodes2['UPPER_A'] = 65)] = 'UPPER_A';
        CharCodes2[(CharCodes2['UPPER_F'] = 70)] = 'UPPER_F';
        CharCodes2[(CharCodes2['UPPER_Z'] = 90)] = 'UPPER_Z';
    })(CharCodes || (CharCodes = {}));
    var TO_LOWER_BIT = 32;
    var BinTrieFlags;
    (function (BinTrieFlags2) {
        BinTrieFlags2[(BinTrieFlags2['VALUE_LENGTH'] = 49152)] = 'VALUE_LENGTH';
        BinTrieFlags2[(BinTrieFlags2['BRANCH_LENGTH'] = 16256)] = 'BRANCH_LENGTH';
        BinTrieFlags2[(BinTrieFlags2['JUMP_TABLE'] = 127)] = 'JUMP_TABLE';
    })(BinTrieFlags || (BinTrieFlags = {}));
    function isNumber(code2) {
        return code2 >= CharCodes.ZERO && code2 <= CharCodes.NINE;
    }
    function isHexadecimalCharacter(code2) {
        return (code2 >= CharCodes.UPPER_A && code2 <= CharCodes.UPPER_F) || (code2 >= CharCodes.LOWER_A && code2 <= CharCodes.LOWER_F);
    }
    function isAsciiAlphaNumeric(code2) {
        return (code2 >= CharCodes.UPPER_A && code2 <= CharCodes.UPPER_Z) || (code2 >= CharCodes.LOWER_A && code2 <= CharCodes.LOWER_Z) || isNumber(code2);
    }
    function isEntityInAttributeInvalidEnd(code2) {
        return code2 === CharCodes.EQUALS || isAsciiAlphaNumeric(code2);
    }
    var EntityDecoderState;
    (function (EntityDecoderState2) {
        EntityDecoderState2[(EntityDecoderState2['EntityStart'] = 0)] = 'EntityStart';
        EntityDecoderState2[(EntityDecoderState2['NumericStart'] = 1)] = 'NumericStart';
        EntityDecoderState2[(EntityDecoderState2['NumericDecimal'] = 2)] = 'NumericDecimal';
        EntityDecoderState2[(EntityDecoderState2['NumericHex'] = 3)] = 'NumericHex';
        EntityDecoderState2[(EntityDecoderState2['NamedEntity'] = 4)] = 'NamedEntity';
    })(EntityDecoderState || (EntityDecoderState = {}));
    var DecodingMode;
    (function (DecodingMode2) {
        DecodingMode2[(DecodingMode2['Legacy'] = 0)] = 'Legacy';
        DecodingMode2[(DecodingMode2['Strict'] = 1)] = 'Strict';
        DecodingMode2[(DecodingMode2['Attribute'] = 2)] = 'Attribute';
    })(DecodingMode || (DecodingMode = {}));
    var EntityDecoder = class {
        constructor(decodeTree, emitCodePoint, errors2) {
            this.decodeTree = decodeTree;
            this.emitCodePoint = emitCodePoint;
            this.errors = errors2;
            this.state = EntityDecoderState.EntityStart;
            this.consumed = 1;
            this.result = 0;
            this.treeIndex = 0;
            this.excess = 1;
            this.decodeMode = DecodingMode.Strict;
        }
        /** Resets the instance to make it reusable. */
        startEntity(decodeMode) {
            this.decodeMode = decodeMode;
            this.state = EntityDecoderState.EntityStart;
            this.result = 0;
            this.treeIndex = 0;
            this.excess = 1;
            this.consumed = 1;
        }
        /**
         * Write an entity to the decoder. This can be called multiple times with partial entities.
         * If the entity is incomplete, the decoder will return -1.
         *
         * Mirrors the implementation of `getDecoder`, but with the ability to stop decoding if the
         * entity is incomplete, and resume when the next string is written.
         *
         * @param string The string containing the entity (or a continuation of the entity).
         * @param offset The offset at which the entity begins. Should be 0 if this is not the first call.
         * @returns The number of characters that were consumed, or -1 if the entity is incomplete.
         */
        write(str, offset) {
            switch (this.state) {
                case EntityDecoderState.EntityStart: {
                    if (str.charCodeAt(offset) === CharCodes.NUM) {
                        this.state = EntityDecoderState.NumericStart;
                        this.consumed += 1;
                        return this.stateNumericStart(str, offset + 1);
                    }
                    this.state = EntityDecoderState.NamedEntity;
                    return this.stateNamedEntity(str, offset);
                }
                case EntityDecoderState.NumericStart: {
                    return this.stateNumericStart(str, offset);
                }
                case EntityDecoderState.NumericDecimal: {
                    return this.stateNumericDecimal(str, offset);
                }
                case EntityDecoderState.NumericHex: {
                    return this.stateNumericHex(str, offset);
                }
                case EntityDecoderState.NamedEntity: {
                    return this.stateNamedEntity(str, offset);
                }
            }
        }
        /**
         * Switches between the numeric decimal and hexadecimal states.
         *
         * Equivalent to the `Numeric character reference state` in the HTML spec.
         *
         * @param str The string containing the entity (or a continuation of the entity).
         * @param offset The current offset.
         * @returns The number of characters that were consumed, or -1 if the entity is incomplete.
         */
        stateNumericStart(str, offset) {
            if (offset >= str.length) {
                return -1;
            }
            if ((str.charCodeAt(offset) | TO_LOWER_BIT) === CharCodes.LOWER_X) {
                this.state = EntityDecoderState.NumericHex;
                this.consumed += 1;
                return this.stateNumericHex(str, offset + 1);
            }
            this.state = EntityDecoderState.NumericDecimal;
            return this.stateNumericDecimal(str, offset);
        }
        addToNumericResult(str, start, end, base2) {
            if (start !== end) {
                const digitCount = end - start;
                this.result = this.result * Math.pow(base2, digitCount) + parseInt(str.substr(start, digitCount), base2);
                this.consumed += digitCount;
            }
        }
        /**
         * Parses a hexadecimal numeric entity.
         *
         * Equivalent to the `Hexademical character reference state` in the HTML spec.
         *
         * @param str The string containing the entity (or a continuation of the entity).
         * @param offset The current offset.
         * @returns The number of characters that were consumed, or -1 if the entity is incomplete.
         */
        stateNumericHex(str, offset) {
            const startIdx = offset;
            while (offset < str.length) {
                const char = str.charCodeAt(offset);
                if (isNumber(char) || isHexadecimalCharacter(char)) {
                    offset += 1;
                } else {
                    this.addToNumericResult(str, startIdx, offset, 16);
                    return this.emitNumericEntity(char, 3);
                }
            }
            this.addToNumericResult(str, startIdx, offset, 16);
            return -1;
        }
        /**
         * Parses a decimal numeric entity.
         *
         * Equivalent to the `Decimal character reference state` in the HTML spec.
         *
         * @param str The string containing the entity (or a continuation of the entity).
         * @param offset The current offset.
         * @returns The number of characters that were consumed, or -1 if the entity is incomplete.
         */
        stateNumericDecimal(str, offset) {
            const startIdx = offset;
            while (offset < str.length) {
                const char = str.charCodeAt(offset);
                if (isNumber(char)) {
                    offset += 1;
                } else {
                    this.addToNumericResult(str, startIdx, offset, 10);
                    return this.emitNumericEntity(char, 2);
                }
            }
            this.addToNumericResult(str, startIdx, offset, 10);
            return -1;
        }
        /**
         * Validate and emit a numeric entity.
         *
         * Implements the logic from the `Hexademical character reference start
         * state` and `Numeric character reference end state` in the HTML spec.
         *
         * @param lastCp The last code point of the entity. Used to see if the
         *               entity was terminated with a semicolon.
         * @param expectedLength The minimum number of characters that should be
         *                       consumed. Used to validate that at least one digit
         *                       was consumed.
         * @returns The number of characters that were consumed.
         */
        emitNumericEntity(lastCp, expectedLength) {
            var _a2;
            if (this.consumed <= expectedLength) {
                (_a2 = this.errors) === null || _a2 === void 0 ? void 0 : _a2.absenceOfDigitsInNumericCharacterReference(this.consumed);
                return 0;
            }
            if (lastCp === CharCodes.SEMI) {
                this.consumed += 1;
            } else if (this.decodeMode === DecodingMode.Strict) {
                return 0;
            }
            this.emitCodePoint(replaceCodePoint(this.result), this.consumed);
            if (this.errors) {
                if (lastCp !== CharCodes.SEMI) {
                    this.errors.missingSemicolonAfterCharacterReference();
                }
                this.errors.validateNumericCharacterReference(this.result);
            }
            return this.consumed;
        }
        /**
         * Parses a named entity.
         *
         * Equivalent to the `Named character reference state` in the HTML spec.
         *
         * @param str The string containing the entity (or a continuation of the entity).
         * @param offset The current offset.
         * @returns The number of characters that were consumed, or -1 if the entity is incomplete.
         */
        stateNamedEntity(str, offset) {
            const { decodeTree } = this;
            let current = decodeTree[this.treeIndex];
            let valueLength = (current & BinTrieFlags.VALUE_LENGTH) >> 14;
            for (; offset < str.length; offset++, this.excess++) {
                const char = str.charCodeAt(offset);
                this.treeIndex = determineBranch(decodeTree, current, this.treeIndex + Math.max(1, valueLength), char);
                if (this.treeIndex < 0) {
                    return this.result === 0 || // If we are parsing an attribute
                        (this.decodeMode === DecodingMode.Attribute && // We shouldn't have consumed any characters after the entity,
                            (valueLength === 0 || // And there should be no invalid characters.
                                isEntityInAttributeInvalidEnd(char)))
                        ? 0
                        : this.emitNotTerminatedNamedEntity();
                }
                current = decodeTree[this.treeIndex];
                valueLength = (current & BinTrieFlags.VALUE_LENGTH) >> 14;
                if (valueLength !== 0) {
                    if (char === CharCodes.SEMI) {
                        return this.emitNamedEntityData(this.treeIndex, valueLength, this.consumed + this.excess);
                    }
                    if (this.decodeMode !== DecodingMode.Strict) {
                        this.result = this.treeIndex;
                        this.consumed += this.excess;
                        this.excess = 0;
                    }
                }
            }
            return -1;
        }
        /**
         * Emit a named entity that was not terminated with a semicolon.
         *
         * @returns The number of characters consumed.
         */
        emitNotTerminatedNamedEntity() {
            var _a2;
            const { result, decodeTree } = this;
            const valueLength = (decodeTree[result] & BinTrieFlags.VALUE_LENGTH) >> 14;
            this.emitNamedEntityData(result, valueLength, this.consumed);
            (_a2 = this.errors) === null || _a2 === void 0 ? void 0 : _a2.missingSemicolonAfterCharacterReference();
            return this.consumed;
        }
        /**
         * Emit a named entity.
         *
         * @param result The index of the entity in the decode tree.
         * @param valueLength The number of bytes in the entity.
         * @param consumed The number of characters consumed.
         *
         * @returns The number of characters consumed.
         */
        emitNamedEntityData(result, valueLength, consumed) {
            const { decodeTree } = this;
            this.emitCodePoint(valueLength === 1 ? decodeTree[result] & ~BinTrieFlags.VALUE_LENGTH : decodeTree[result + 1], consumed);
            if (valueLength === 3) {
                this.emitCodePoint(decodeTree[result + 2], consumed);
            }
            return consumed;
        }
        /**
         * Signal to the parser that the end of the input was reached.
         *
         * Remaining data will be emitted and relevant errors will be produced.
         *
         * @returns The number of characters consumed.
         */
        end() {
            var _a2;
            switch (this.state) {
                case EntityDecoderState.NamedEntity: {
                    return this.result !== 0 && (this.decodeMode !== DecodingMode.Attribute || this.result === this.treeIndex)
                        ? this.emitNotTerminatedNamedEntity()
                        : 0;
                }
                case EntityDecoderState.NumericDecimal: {
                    return this.emitNumericEntity(0, 2);
                }
                case EntityDecoderState.NumericHex: {
                    return this.emitNumericEntity(0, 3);
                }
                case EntityDecoderState.NumericStart: {
                    (_a2 = this.errors) === null || _a2 === void 0 ? void 0 : _a2.absenceOfDigitsInNumericCharacterReference(this.consumed);
                    return 0;
                }
                case EntityDecoderState.EntityStart: {
                    return 0;
                }
            }
        }
    };
    function getDecoder(decodeTree) {
        let ret = '';
        const decoder = new EntityDecoder(decodeTree, (str) => (ret += fromCodePoint(str)));
        return function decodeWithTrie(str, decodeMode) {
            let lastIndex = 0;
            let offset = 0;
            while ((offset = str.indexOf('&', offset)) >= 0) {
                ret += str.slice(lastIndex, offset);
                decoder.startEntity(decodeMode);
                const len = decoder.write(
                    str,
                    // Skip the "&"
                    offset + 1
                );
                if (len < 0) {
                    lastIndex = offset + decoder.end();
                    break;
                }
                lastIndex = offset + len;
                offset = len === 0 ? lastIndex + 1 : lastIndex;
            }
            const result = ret + str.slice(lastIndex);
            ret = '';
            return result;
        };
    }
    function determineBranch(decodeTree, current, nodeIdx, char) {
        const branchCount = (current & BinTrieFlags.BRANCH_LENGTH) >> 7;
        const jumpOffset = current & BinTrieFlags.JUMP_TABLE;
        if (branchCount === 0) {
            return jumpOffset !== 0 && char === jumpOffset ? nodeIdx : -1;
        }
        if (jumpOffset) {
            const value = char - jumpOffset;
            return value < 0 || value >= branchCount ? -1 : decodeTree[nodeIdx + value] - 1;
        }
        let lo = nodeIdx;
        let hi = lo + branchCount - 1;
        while (lo <= hi) {
            const mid = (lo + hi) >>> 1;
            const midVal = decodeTree[mid];
            if (midVal < char) {
                lo = mid + 1;
            } else if (midVal > char) {
                hi = mid - 1;
            } else {
                return decodeTree[mid + branchCount];
            }
        }
        return -1;
    }
    var htmlDecoder = getDecoder(decode_data_html_default);
    var xmlDecoder = getDecoder(decode_data_xml_default);
    function decodeHTML(str, mode = DecodingMode.Legacy) {
        return htmlDecoder(str, mode);
    }

    // ../../node_modules/entities/lib/esm/generated/encode-html.js
    function restoreDiff(arr) {
        for (let i = 1; i < arr.length; i++) {
            arr[i][0] += arr[i - 1][0] + 1;
        }
        return arr;
    }
    var encode_html_default = new Map(
        /* @__PURE__ */ restoreDiff([
            [9, '&Tab;'],
            [0, '&NewLine;'],
            [22, '&excl;'],
            [0, '&quot;'],
            [0, '&num;'],
            [0, '&dollar;'],
            [0, '&percnt;'],
            [0, '&amp;'],
            [0, '&apos;'],
            [0, '&lpar;'],
            [0, '&rpar;'],
            [0, '&ast;'],
            [0, '&plus;'],
            [0, '&comma;'],
            [1, '&period;'],
            [0, '&sol;'],
            [10, '&colon;'],
            [0, '&semi;'],
            [0, { v: '&lt;', n: 8402, o: '&nvlt;' }],
            [0, { v: '&equals;', n: 8421, o: '&bne;' }],
            [0, { v: '&gt;', n: 8402, o: '&nvgt;' }],
            [0, '&quest;'],
            [0, '&commat;'],
            [26, '&lbrack;'],
            [0, '&bsol;'],
            [0, '&rbrack;'],
            [0, '&Hat;'],
            [0, '&lowbar;'],
            [0, '&DiacriticalGrave;'],
            [5, { n: 106, o: '&fjlig;' }],
            [20, '&lbrace;'],
            [0, '&verbar;'],
            [0, '&rbrace;'],
            [34, '&nbsp;'],
            [0, '&iexcl;'],
            [0, '&cent;'],
            [0, '&pound;'],
            [0, '&curren;'],
            [0, '&yen;'],
            [0, '&brvbar;'],
            [0, '&sect;'],
            [0, '&die;'],
            [0, '&copy;'],
            [0, '&ordf;'],
            [0, '&laquo;'],
            [0, '&not;'],
            [0, '&shy;'],
            [0, '&circledR;'],
            [0, '&macr;'],
            [0, '&deg;'],
            [0, '&PlusMinus;'],
            [0, '&sup2;'],
            [0, '&sup3;'],
            [0, '&acute;'],
            [0, '&micro;'],
            [0, '&para;'],
            [0, '&centerdot;'],
            [0, '&cedil;'],
            [0, '&sup1;'],
            [0, '&ordm;'],
            [0, '&raquo;'],
            [0, '&frac14;'],
            [0, '&frac12;'],
            [0, '&frac34;'],
            [0, '&iquest;'],
            [0, '&Agrave;'],
            [0, '&Aacute;'],
            [0, '&Acirc;'],
            [0, '&Atilde;'],
            [0, '&Auml;'],
            [0, '&angst;'],
            [0, '&AElig;'],
            [0, '&Ccedil;'],
            [0, '&Egrave;'],
            [0, '&Eacute;'],
            [0, '&Ecirc;'],
            [0, '&Euml;'],
            [0, '&Igrave;'],
            [0, '&Iacute;'],
            [0, '&Icirc;'],
            [0, '&Iuml;'],
            [0, '&ETH;'],
            [0, '&Ntilde;'],
            [0, '&Ograve;'],
            [0, '&Oacute;'],
            [0, '&Ocirc;'],
            [0, '&Otilde;'],
            [0, '&Ouml;'],
            [0, '&times;'],
            [0, '&Oslash;'],
            [0, '&Ugrave;'],
            [0, '&Uacute;'],
            [0, '&Ucirc;'],
            [0, '&Uuml;'],
            [0, '&Yacute;'],
            [0, '&THORN;'],
            [0, '&szlig;'],
            [0, '&agrave;'],
            [0, '&aacute;'],
            [0, '&acirc;'],
            [0, '&atilde;'],
            [0, '&auml;'],
            [0, '&aring;'],
            [0, '&aelig;'],
            [0, '&ccedil;'],
            [0, '&egrave;'],
            [0, '&eacute;'],
            [0, '&ecirc;'],
            [0, '&euml;'],
            [0, '&igrave;'],
            [0, '&iacute;'],
            [0, '&icirc;'],
            [0, '&iuml;'],
            [0, '&eth;'],
            [0, '&ntilde;'],
            [0, '&ograve;'],
            [0, '&oacute;'],
            [0, '&ocirc;'],
            [0, '&otilde;'],
            [0, '&ouml;'],
            [0, '&div;'],
            [0, '&oslash;'],
            [0, '&ugrave;'],
            [0, '&uacute;'],
            [0, '&ucirc;'],
            [0, '&uuml;'],
            [0, '&yacute;'],
            [0, '&thorn;'],
            [0, '&yuml;'],
            [0, '&Amacr;'],
            [0, '&amacr;'],
            [0, '&Abreve;'],
            [0, '&abreve;'],
            [0, '&Aogon;'],
            [0, '&aogon;'],
            [0, '&Cacute;'],
            [0, '&cacute;'],
            [0, '&Ccirc;'],
            [0, '&ccirc;'],
            [0, '&Cdot;'],
            [0, '&cdot;'],
            [0, '&Ccaron;'],
            [0, '&ccaron;'],
            [0, '&Dcaron;'],
            [0, '&dcaron;'],
            [0, '&Dstrok;'],
            [0, '&dstrok;'],
            [0, '&Emacr;'],
            [0, '&emacr;'],
            [2, '&Edot;'],
            [0, '&edot;'],
            [0, '&Eogon;'],
            [0, '&eogon;'],
            [0, '&Ecaron;'],
            [0, '&ecaron;'],
            [0, '&Gcirc;'],
            [0, '&gcirc;'],
            [0, '&Gbreve;'],
            [0, '&gbreve;'],
            [0, '&Gdot;'],
            [0, '&gdot;'],
            [0, '&Gcedil;'],
            [1, '&Hcirc;'],
            [0, '&hcirc;'],
            [0, '&Hstrok;'],
            [0, '&hstrok;'],
            [0, '&Itilde;'],
            [0, '&itilde;'],
            [0, '&Imacr;'],
            [0, '&imacr;'],
            [2, '&Iogon;'],
            [0, '&iogon;'],
            [0, '&Idot;'],
            [0, '&imath;'],
            [0, '&IJlig;'],
            [0, '&ijlig;'],
            [0, '&Jcirc;'],
            [0, '&jcirc;'],
            [0, '&Kcedil;'],
            [0, '&kcedil;'],
            [0, '&kgreen;'],
            [0, '&Lacute;'],
            [0, '&lacute;'],
            [0, '&Lcedil;'],
            [0, '&lcedil;'],
            [0, '&Lcaron;'],
            [0, '&lcaron;'],
            [0, '&Lmidot;'],
            [0, '&lmidot;'],
            [0, '&Lstrok;'],
            [0, '&lstrok;'],
            [0, '&Nacute;'],
            [0, '&nacute;'],
            [0, '&Ncedil;'],
            [0, '&ncedil;'],
            [0, '&Ncaron;'],
            [0, '&ncaron;'],
            [0, '&napos;'],
            [0, '&ENG;'],
            [0, '&eng;'],
            [0, '&Omacr;'],
            [0, '&omacr;'],
            [2, '&Odblac;'],
            [0, '&odblac;'],
            [0, '&OElig;'],
            [0, '&oelig;'],
            [0, '&Racute;'],
            [0, '&racute;'],
            [0, '&Rcedil;'],
            [0, '&rcedil;'],
            [0, '&Rcaron;'],
            [0, '&rcaron;'],
            [0, '&Sacute;'],
            [0, '&sacute;'],
            [0, '&Scirc;'],
            [0, '&scirc;'],
            [0, '&Scedil;'],
            [0, '&scedil;'],
            [0, '&Scaron;'],
            [0, '&scaron;'],
            [0, '&Tcedil;'],
            [0, '&tcedil;'],
            [0, '&Tcaron;'],
            [0, '&tcaron;'],
            [0, '&Tstrok;'],
            [0, '&tstrok;'],
            [0, '&Utilde;'],
            [0, '&utilde;'],
            [0, '&Umacr;'],
            [0, '&umacr;'],
            [0, '&Ubreve;'],
            [0, '&ubreve;'],
            [0, '&Uring;'],
            [0, '&uring;'],
            [0, '&Udblac;'],
            [0, '&udblac;'],
            [0, '&Uogon;'],
            [0, '&uogon;'],
            [0, '&Wcirc;'],
            [0, '&wcirc;'],
            [0, '&Ycirc;'],
            [0, '&ycirc;'],
            [0, '&Yuml;'],
            [0, '&Zacute;'],
            [0, '&zacute;'],
            [0, '&Zdot;'],
            [0, '&zdot;'],
            [0, '&Zcaron;'],
            [0, '&zcaron;'],
            [19, '&fnof;'],
            [34, '&imped;'],
            [63, '&gacute;'],
            [65, '&jmath;'],
            [142, '&circ;'],
            [0, '&caron;'],
            [16, '&breve;'],
            [0, '&DiacriticalDot;'],
            [0, '&ring;'],
            [0, '&ogon;'],
            [0, '&DiacriticalTilde;'],
            [0, '&dblac;'],
            [51, '&DownBreve;'],
            [127, '&Alpha;'],
            [0, '&Beta;'],
            [0, '&Gamma;'],
            [0, '&Delta;'],
            [0, '&Epsilon;'],
            [0, '&Zeta;'],
            [0, '&Eta;'],
            [0, '&Theta;'],
            [0, '&Iota;'],
            [0, '&Kappa;'],
            [0, '&Lambda;'],
            [0, '&Mu;'],
            [0, '&Nu;'],
            [0, '&Xi;'],
            [0, '&Omicron;'],
            [0, '&Pi;'],
            [0, '&Rho;'],
            [1, '&Sigma;'],
            [0, '&Tau;'],
            [0, '&Upsilon;'],
            [0, '&Phi;'],
            [0, '&Chi;'],
            [0, '&Psi;'],
            [0, '&ohm;'],
            [7, '&alpha;'],
            [0, '&beta;'],
            [0, '&gamma;'],
            [0, '&delta;'],
            [0, '&epsi;'],
            [0, '&zeta;'],
            [0, '&eta;'],
            [0, '&theta;'],
            [0, '&iota;'],
            [0, '&kappa;'],
            [0, '&lambda;'],
            [0, '&mu;'],
            [0, '&nu;'],
            [0, '&xi;'],
            [0, '&omicron;'],
            [0, '&pi;'],
            [0, '&rho;'],
            [0, '&sigmaf;'],
            [0, '&sigma;'],
            [0, '&tau;'],
            [0, '&upsi;'],
            [0, '&phi;'],
            [0, '&chi;'],
            [0, '&psi;'],
            [0, '&omega;'],
            [7, '&thetasym;'],
            [0, '&Upsi;'],
            [2, '&phiv;'],
            [0, '&piv;'],
            [5, '&Gammad;'],
            [0, '&digamma;'],
            [18, '&kappav;'],
            [0, '&rhov;'],
            [3, '&epsiv;'],
            [0, '&backepsilon;'],
            [10, '&IOcy;'],
            [0, '&DJcy;'],
            [0, '&GJcy;'],
            [0, '&Jukcy;'],
            [0, '&DScy;'],
            [0, '&Iukcy;'],
            [0, '&YIcy;'],
            [0, '&Jsercy;'],
            [0, '&LJcy;'],
            [0, '&NJcy;'],
            [0, '&TSHcy;'],
            [0, '&KJcy;'],
            [1, '&Ubrcy;'],
            [0, '&DZcy;'],
            [0, '&Acy;'],
            [0, '&Bcy;'],
            [0, '&Vcy;'],
            [0, '&Gcy;'],
            [0, '&Dcy;'],
            [0, '&IEcy;'],
            [0, '&ZHcy;'],
            [0, '&Zcy;'],
            [0, '&Icy;'],
            [0, '&Jcy;'],
            [0, '&Kcy;'],
            [0, '&Lcy;'],
            [0, '&Mcy;'],
            [0, '&Ncy;'],
            [0, '&Ocy;'],
            [0, '&Pcy;'],
            [0, '&Rcy;'],
            [0, '&Scy;'],
            [0, '&Tcy;'],
            [0, '&Ucy;'],
            [0, '&Fcy;'],
            [0, '&KHcy;'],
            [0, '&TScy;'],
            [0, '&CHcy;'],
            [0, '&SHcy;'],
            [0, '&SHCHcy;'],
            [0, '&HARDcy;'],
            [0, '&Ycy;'],
            [0, '&SOFTcy;'],
            [0, '&Ecy;'],
            [0, '&YUcy;'],
            [0, '&YAcy;'],
            [0, '&acy;'],
            [0, '&bcy;'],
            [0, '&vcy;'],
            [0, '&gcy;'],
            [0, '&dcy;'],
            [0, '&iecy;'],
            [0, '&zhcy;'],
            [0, '&zcy;'],
            [0, '&icy;'],
            [0, '&jcy;'],
            [0, '&kcy;'],
            [0, '&lcy;'],
            [0, '&mcy;'],
            [0, '&ncy;'],
            [0, '&ocy;'],
            [0, '&pcy;'],
            [0, '&rcy;'],
            [0, '&scy;'],
            [0, '&tcy;'],
            [0, '&ucy;'],
            [0, '&fcy;'],
            [0, '&khcy;'],
            [0, '&tscy;'],
            [0, '&chcy;'],
            [0, '&shcy;'],
            [0, '&shchcy;'],
            [0, '&hardcy;'],
            [0, '&ycy;'],
            [0, '&softcy;'],
            [0, '&ecy;'],
            [0, '&yucy;'],
            [0, '&yacy;'],
            [1, '&iocy;'],
            [0, '&djcy;'],
            [0, '&gjcy;'],
            [0, '&jukcy;'],
            [0, '&dscy;'],
            [0, '&iukcy;'],
            [0, '&yicy;'],
            [0, '&jsercy;'],
            [0, '&ljcy;'],
            [0, '&njcy;'],
            [0, '&tshcy;'],
            [0, '&kjcy;'],
            [1, '&ubrcy;'],
            [0, '&dzcy;'],
            [7074, '&ensp;'],
            [0, '&emsp;'],
            [0, '&emsp13;'],
            [0, '&emsp14;'],
            [1, '&numsp;'],
            [0, '&puncsp;'],
            [0, '&ThinSpace;'],
            [0, '&hairsp;'],
            [0, '&NegativeMediumSpace;'],
            [0, '&zwnj;'],
            [0, '&zwj;'],
            [0, '&lrm;'],
            [0, '&rlm;'],
            [0, '&dash;'],
            [2, '&ndash;'],
            [0, '&mdash;'],
            [0, '&horbar;'],
            [0, '&Verbar;'],
            [1, '&lsquo;'],
            [0, '&CloseCurlyQuote;'],
            [0, '&lsquor;'],
            [1, '&ldquo;'],
            [0, '&CloseCurlyDoubleQuote;'],
            [0, '&bdquo;'],
            [1, '&dagger;'],
            [0, '&Dagger;'],
            [0, '&bull;'],
            [2, '&nldr;'],
            [0, '&hellip;'],
            [9, '&permil;'],
            [0, '&pertenk;'],
            [0, '&prime;'],
            [0, '&Prime;'],
            [0, '&tprime;'],
            [0, '&backprime;'],
            [3, '&lsaquo;'],
            [0, '&rsaquo;'],
            [3, '&oline;'],
            [2, '&caret;'],
            [1, '&hybull;'],
            [0, '&frasl;'],
            [10, '&bsemi;'],
            [7, '&qprime;'],
            [7, { v: '&MediumSpace;', n: 8202, o: '&ThickSpace;' }],
            [0, '&NoBreak;'],
            [0, '&af;'],
            [0, '&InvisibleTimes;'],
            [0, '&ic;'],
            [72, '&euro;'],
            [46, '&tdot;'],
            [0, '&DotDot;'],
            [37, '&complexes;'],
            [2, '&incare;'],
            [4, '&gscr;'],
            [0, '&hamilt;'],
            [0, '&Hfr;'],
            [0, '&Hopf;'],
            [0, '&planckh;'],
            [0, '&hbar;'],
            [0, '&imagline;'],
            [0, '&Ifr;'],
            [0, '&lagran;'],
            [0, '&ell;'],
            [1, '&naturals;'],
            [0, '&numero;'],
            [0, '&copysr;'],
            [0, '&weierp;'],
            [0, '&Popf;'],
            [0, '&Qopf;'],
            [0, '&realine;'],
            [0, '&real;'],
            [0, '&reals;'],
            [0, '&rx;'],
            [3, '&trade;'],
            [1, '&integers;'],
            [2, '&mho;'],
            [0, '&zeetrf;'],
            [0, '&iiota;'],
            [2, '&bernou;'],
            [0, '&Cayleys;'],
            [1, '&escr;'],
            [0, '&Escr;'],
            [0, '&Fouriertrf;'],
            [1, '&Mellintrf;'],
            [0, '&order;'],
            [0, '&alefsym;'],
            [0, '&beth;'],
            [0, '&gimel;'],
            [0, '&daleth;'],
            [12, '&CapitalDifferentialD;'],
            [0, '&dd;'],
            [0, '&ee;'],
            [0, '&ii;'],
            [10, '&frac13;'],
            [0, '&frac23;'],
            [0, '&frac15;'],
            [0, '&frac25;'],
            [0, '&frac35;'],
            [0, '&frac45;'],
            [0, '&frac16;'],
            [0, '&frac56;'],
            [0, '&frac18;'],
            [0, '&frac38;'],
            [0, '&frac58;'],
            [0, '&frac78;'],
            [49, '&larr;'],
            [0, '&ShortUpArrow;'],
            [0, '&rarr;'],
            [0, '&darr;'],
            [0, '&harr;'],
            [0, '&updownarrow;'],
            [0, '&nwarr;'],
            [0, '&nearr;'],
            [0, '&LowerRightArrow;'],
            [0, '&LowerLeftArrow;'],
            [0, '&nlarr;'],
            [0, '&nrarr;'],
            [1, { v: '&rarrw;', n: 824, o: '&nrarrw;' }],
            [0, '&Larr;'],
            [0, '&Uarr;'],
            [0, '&Rarr;'],
            [0, '&Darr;'],
            [0, '&larrtl;'],
            [0, '&rarrtl;'],
            [0, '&LeftTeeArrow;'],
            [0, '&mapstoup;'],
            [0, '&map;'],
            [0, '&DownTeeArrow;'],
            [1, '&hookleftarrow;'],
            [0, '&hookrightarrow;'],
            [0, '&larrlp;'],
            [0, '&looparrowright;'],
            [0, '&harrw;'],
            [0, '&nharr;'],
            [1, '&lsh;'],
            [0, '&rsh;'],
            [0, '&ldsh;'],
            [0, '&rdsh;'],
            [1, '&crarr;'],
            [0, '&cularr;'],
            [0, '&curarr;'],
            [2, '&circlearrowleft;'],
            [0, '&circlearrowright;'],
            [0, '&leftharpoonup;'],
            [0, '&DownLeftVector;'],
            [0, '&RightUpVector;'],
            [0, '&LeftUpVector;'],
            [0, '&rharu;'],
            [0, '&DownRightVector;'],
            [0, '&dharr;'],
            [0, '&dharl;'],
            [0, '&RightArrowLeftArrow;'],
            [0, '&udarr;'],
            [0, '&LeftArrowRightArrow;'],
            [0, '&leftleftarrows;'],
            [0, '&upuparrows;'],
            [0, '&rightrightarrows;'],
            [0, '&ddarr;'],
            [0, '&leftrightharpoons;'],
            [0, '&Equilibrium;'],
            [0, '&nlArr;'],
            [0, '&nhArr;'],
            [0, '&nrArr;'],
            [0, '&DoubleLeftArrow;'],
            [0, '&DoubleUpArrow;'],
            [0, '&DoubleRightArrow;'],
            [0, '&dArr;'],
            [0, '&DoubleLeftRightArrow;'],
            [0, '&DoubleUpDownArrow;'],
            [0, '&nwArr;'],
            [0, '&neArr;'],
            [0, '&seArr;'],
            [0, '&swArr;'],
            [0, '&lAarr;'],
            [0, '&rAarr;'],
            [1, '&zigrarr;'],
            [6, '&larrb;'],
            [0, '&rarrb;'],
            [15, '&DownArrowUpArrow;'],
            [7, '&loarr;'],
            [0, '&roarr;'],
            [0, '&hoarr;'],
            [0, '&forall;'],
            [0, '&comp;'],
            [0, { v: '&part;', n: 824, o: '&npart;' }],
            [0, '&exist;'],
            [0, '&nexist;'],
            [0, '&empty;'],
            [1, '&Del;'],
            [0, '&Element;'],
            [0, '&NotElement;'],
            [1, '&ni;'],
            [0, '&notni;'],
            [2, '&prod;'],
            [0, '&coprod;'],
            [0, '&sum;'],
            [0, '&minus;'],
            [0, '&MinusPlus;'],
            [0, '&dotplus;'],
            [1, '&Backslash;'],
            [0, '&lowast;'],
            [0, '&compfn;'],
            [1, '&radic;'],
            [2, '&prop;'],
            [0, '&infin;'],
            [0, '&angrt;'],
            [0, { v: '&ang;', n: 8402, o: '&nang;' }],
            [0, '&angmsd;'],
            [0, '&angsph;'],
            [0, '&mid;'],
            [0, '&nmid;'],
            [0, '&DoubleVerticalBar;'],
            [0, '&NotDoubleVerticalBar;'],
            [0, '&and;'],
            [0, '&or;'],
            [0, { v: '&cap;', n: 65024, o: '&caps;' }],
            [0, { v: '&cup;', n: 65024, o: '&cups;' }],
            [0, '&int;'],
            [0, '&Int;'],
            [0, '&iiint;'],
            [0, '&conint;'],
            [0, '&Conint;'],
            [0, '&Cconint;'],
            [0, '&cwint;'],
            [0, '&ClockwiseContourIntegral;'],
            [0, '&awconint;'],
            [0, '&there4;'],
            [0, '&becaus;'],
            [0, '&ratio;'],
            [0, '&Colon;'],
            [0, '&dotminus;'],
            [1, '&mDDot;'],
            [0, '&homtht;'],
            [0, { v: '&sim;', n: 8402, o: '&nvsim;' }],
            [0, { v: '&backsim;', n: 817, o: '&race;' }],
            [0, { v: '&ac;', n: 819, o: '&acE;' }],
            [0, '&acd;'],
            [0, '&VerticalTilde;'],
            [0, '&NotTilde;'],
            [0, { v: '&eqsim;', n: 824, o: '&nesim;' }],
            [0, '&sime;'],
            [0, '&NotTildeEqual;'],
            [0, '&cong;'],
            [0, '&simne;'],
            [0, '&ncong;'],
            [0, '&ap;'],
            [0, '&nap;'],
            [0, '&ape;'],
            [0, { v: '&apid;', n: 824, o: '&napid;' }],
            [0, '&backcong;'],
            [0, { v: '&asympeq;', n: 8402, o: '&nvap;' }],
            [0, { v: '&bump;', n: 824, o: '&nbump;' }],
            [0, { v: '&bumpe;', n: 824, o: '&nbumpe;' }],
            [0, { v: '&doteq;', n: 824, o: '&nedot;' }],
            [0, '&doteqdot;'],
            [0, '&efDot;'],
            [0, '&erDot;'],
            [0, '&Assign;'],
            [0, '&ecolon;'],
            [0, '&ecir;'],
            [0, '&circeq;'],
            [1, '&wedgeq;'],
            [0, '&veeeq;'],
            [1, '&triangleq;'],
            [2, '&equest;'],
            [0, '&ne;'],
            [0, { v: '&Congruent;', n: 8421, o: '&bnequiv;' }],
            [0, '&nequiv;'],
            [1, { v: '&le;', n: 8402, o: '&nvle;' }],
            [0, { v: '&ge;', n: 8402, o: '&nvge;' }],
            [0, { v: '&lE;', n: 824, o: '&nlE;' }],
            [0, { v: '&gE;', n: 824, o: '&ngE;' }],
            [0, { v: '&lnE;', n: 65024, o: '&lvertneqq;' }],
            [0, { v: '&gnE;', n: 65024, o: '&gvertneqq;' }],
            [
                0,
                {
                    v: '&ll;',
                    n: new Map(
                        /* @__PURE__ */ restoreDiff([
                            [824, '&nLtv;'],
                            [7577, '&nLt;']
                        ])
                    )
                }
            ],
            [
                0,
                {
                    v: '&gg;',
                    n: new Map(
                        /* @__PURE__ */ restoreDiff([
                            [824, '&nGtv;'],
                            [7577, '&nGt;']
                        ])
                    )
                }
            ],
            [0, '&between;'],
            [0, '&NotCupCap;'],
            [0, '&nless;'],
            [0, '&ngt;'],
            [0, '&nle;'],
            [0, '&nge;'],
            [0, '&lesssim;'],
            [0, '&GreaterTilde;'],
            [0, '&nlsim;'],
            [0, '&ngsim;'],
            [0, '&LessGreater;'],
            [0, '&gl;'],
            [0, '&NotLessGreater;'],
            [0, '&NotGreaterLess;'],
            [0, '&pr;'],
            [0, '&sc;'],
            [0, '&prcue;'],
            [0, '&sccue;'],
            [0, '&PrecedesTilde;'],
            [0, { v: '&scsim;', n: 824, o: '&NotSucceedsTilde;' }],
            [0, '&NotPrecedes;'],
            [0, '&NotSucceeds;'],
            [0, { v: '&sub;', n: 8402, o: '&NotSubset;' }],
            [0, { v: '&sup;', n: 8402, o: '&NotSuperset;' }],
            [0, '&nsub;'],
            [0, '&nsup;'],
            [0, '&sube;'],
            [0, '&supe;'],
            [0, '&NotSubsetEqual;'],
            [0, '&NotSupersetEqual;'],
            [0, { v: '&subne;', n: 65024, o: '&varsubsetneq;' }],
            [0, { v: '&supne;', n: 65024, o: '&varsupsetneq;' }],
            [1, '&cupdot;'],
            [0, '&UnionPlus;'],
            [0, { v: '&sqsub;', n: 824, o: '&NotSquareSubset;' }],
            [0, { v: '&sqsup;', n: 824, o: '&NotSquareSuperset;' }],
            [0, '&sqsube;'],
            [0, '&sqsupe;'],
            [0, { v: '&sqcap;', n: 65024, o: '&sqcaps;' }],
            [0, { v: '&sqcup;', n: 65024, o: '&sqcups;' }],
            [0, '&CirclePlus;'],
            [0, '&CircleMinus;'],
            [0, '&CircleTimes;'],
            [0, '&osol;'],
            [0, '&CircleDot;'],
            [0, '&circledcirc;'],
            [0, '&circledast;'],
            [1, '&circleddash;'],
            [0, '&boxplus;'],
            [0, '&boxminus;'],
            [0, '&boxtimes;'],
            [0, '&dotsquare;'],
            [0, '&RightTee;'],
            [0, '&dashv;'],
            [0, '&DownTee;'],
            [0, '&bot;'],
            [1, '&models;'],
            [0, '&DoubleRightTee;'],
            [0, '&Vdash;'],
            [0, '&Vvdash;'],
            [0, '&VDash;'],
            [0, '&nvdash;'],
            [0, '&nvDash;'],
            [0, '&nVdash;'],
            [0, '&nVDash;'],
            [0, '&prurel;'],
            [1, '&LeftTriangle;'],
            [0, '&RightTriangle;'],
            [0, { v: '&LeftTriangleEqual;', n: 8402, o: '&nvltrie;' }],
            [0, { v: '&RightTriangleEqual;', n: 8402, o: '&nvrtrie;' }],
            [0, '&origof;'],
            [0, '&imof;'],
            [0, '&multimap;'],
            [0, '&hercon;'],
            [0, '&intcal;'],
            [0, '&veebar;'],
            [1, '&barvee;'],
            [0, '&angrtvb;'],
            [0, '&lrtri;'],
            [0, '&bigwedge;'],
            [0, '&bigvee;'],
            [0, '&bigcap;'],
            [0, '&bigcup;'],
            [0, '&diam;'],
            [0, '&sdot;'],
            [0, '&sstarf;'],
            [0, '&divideontimes;'],
            [0, '&bowtie;'],
            [0, '&ltimes;'],
            [0, '&rtimes;'],
            [0, '&leftthreetimes;'],
            [0, '&rightthreetimes;'],
            [0, '&backsimeq;'],
            [0, '&curlyvee;'],
            [0, '&curlywedge;'],
            [0, '&Sub;'],
            [0, '&Sup;'],
            [0, '&Cap;'],
            [0, '&Cup;'],
            [0, '&fork;'],
            [0, '&epar;'],
            [0, '&lessdot;'],
            [0, '&gtdot;'],
            [0, { v: '&Ll;', n: 824, o: '&nLl;' }],
            [0, { v: '&Gg;', n: 824, o: '&nGg;' }],
            [0, { v: '&leg;', n: 65024, o: '&lesg;' }],
            [0, { v: '&gel;', n: 65024, o: '&gesl;' }],
            [2, '&cuepr;'],
            [0, '&cuesc;'],
            [0, '&NotPrecedesSlantEqual;'],
            [0, '&NotSucceedsSlantEqual;'],
            [0, '&NotSquareSubsetEqual;'],
            [0, '&NotSquareSupersetEqual;'],
            [2, '&lnsim;'],
            [0, '&gnsim;'],
            [0, '&precnsim;'],
            [0, '&scnsim;'],
            [0, '&nltri;'],
            [0, '&NotRightTriangle;'],
            [0, '&nltrie;'],
            [0, '&NotRightTriangleEqual;'],
            [0, '&vellip;'],
            [0, '&ctdot;'],
            [0, '&utdot;'],
            [0, '&dtdot;'],
            [0, '&disin;'],
            [0, '&isinsv;'],
            [0, '&isins;'],
            [0, { v: '&isindot;', n: 824, o: '&notindot;' }],
            [0, '&notinvc;'],
            [0, '&notinvb;'],
            [1, { v: '&isinE;', n: 824, o: '&notinE;' }],
            [0, '&nisd;'],
            [0, '&xnis;'],
            [0, '&nis;'],
            [0, '&notnivc;'],
            [0, '&notnivb;'],
            [6, '&barwed;'],
            [0, '&Barwed;'],
            [1, '&lceil;'],
            [0, '&rceil;'],
            [0, '&LeftFloor;'],
            [0, '&rfloor;'],
            [0, '&drcrop;'],
            [0, '&dlcrop;'],
            [0, '&urcrop;'],
            [0, '&ulcrop;'],
            [0, '&bnot;'],
            [1, '&profline;'],
            [0, '&profsurf;'],
            [1, '&telrec;'],
            [0, '&target;'],
            [5, '&ulcorn;'],
            [0, '&urcorn;'],
            [0, '&dlcorn;'],
            [0, '&drcorn;'],
            [2, '&frown;'],
            [0, '&smile;'],
            [9, '&cylcty;'],
            [0, '&profalar;'],
            [7, '&topbot;'],
            [6, '&ovbar;'],
            [1, '&solbar;'],
            [60, '&angzarr;'],
            [51, '&lmoustache;'],
            [0, '&rmoustache;'],
            [2, '&OverBracket;'],
            [0, '&bbrk;'],
            [0, '&bbrktbrk;'],
            [37, '&OverParenthesis;'],
            [0, '&UnderParenthesis;'],
            [0, '&OverBrace;'],
            [0, '&UnderBrace;'],
            [2, '&trpezium;'],
            [4, '&elinters;'],
            [59, '&blank;'],
            [164, '&circledS;'],
            [55, '&boxh;'],
            [1, '&boxv;'],
            [9, '&boxdr;'],
            [3, '&boxdl;'],
            [3, '&boxur;'],
            [3, '&boxul;'],
            [3, '&boxvr;'],
            [7, '&boxvl;'],
            [7, '&boxhd;'],
            [7, '&boxhu;'],
            [7, '&boxvh;'],
            [19, '&boxH;'],
            [0, '&boxV;'],
            [0, '&boxdR;'],
            [0, '&boxDr;'],
            [0, '&boxDR;'],
            [0, '&boxdL;'],
            [0, '&boxDl;'],
            [0, '&boxDL;'],
            [0, '&boxuR;'],
            [0, '&boxUr;'],
            [0, '&boxUR;'],
            [0, '&boxuL;'],
            [0, '&boxUl;'],
            [0, '&boxUL;'],
            [0, '&boxvR;'],
            [0, '&boxVr;'],
            [0, '&boxVR;'],
            [0, '&boxvL;'],
            [0, '&boxVl;'],
            [0, '&boxVL;'],
            [0, '&boxHd;'],
            [0, '&boxhD;'],
            [0, '&boxHD;'],
            [0, '&boxHu;'],
            [0, '&boxhU;'],
            [0, '&boxHU;'],
            [0, '&boxvH;'],
            [0, '&boxVh;'],
            [0, '&boxVH;'],
            [19, '&uhblk;'],
            [3, '&lhblk;'],
            [3, '&block;'],
            [8, '&blk14;'],
            [0, '&blk12;'],
            [0, '&blk34;'],
            [13, '&square;'],
            [8, '&blacksquare;'],
            [0, '&EmptyVerySmallSquare;'],
            [1, '&rect;'],
            [0, '&marker;'],
            [2, '&fltns;'],
            [1, '&bigtriangleup;'],
            [0, '&blacktriangle;'],
            [0, '&triangle;'],
            [2, '&blacktriangleright;'],
            [0, '&rtri;'],
            [3, '&bigtriangledown;'],
            [0, '&blacktriangledown;'],
            [0, '&dtri;'],
            [2, '&blacktriangleleft;'],
            [0, '&ltri;'],
            [6, '&loz;'],
            [0, '&cir;'],
            [32, '&tridot;'],
            [2, '&bigcirc;'],
            [8, '&ultri;'],
            [0, '&urtri;'],
            [0, '&lltri;'],
            [0, '&EmptySmallSquare;'],
            [0, '&FilledSmallSquare;'],
            [8, '&bigstar;'],
            [0, '&star;'],
            [7, '&phone;'],
            [49, '&female;'],
            [1, '&male;'],
            [29, '&spades;'],
            [2, '&clubs;'],
            [1, '&hearts;'],
            [0, '&diamondsuit;'],
            [3, '&sung;'],
            [2, '&flat;'],
            [0, '&natural;'],
            [0, '&sharp;'],
            [163, '&check;'],
            [3, '&cross;'],
            [8, '&malt;'],
            [21, '&sext;'],
            [33, '&VerticalSeparator;'],
            [25, '&lbbrk;'],
            [0, '&rbbrk;'],
            [84, '&bsolhsub;'],
            [0, '&suphsol;'],
            [28, '&LeftDoubleBracket;'],
            [0, '&RightDoubleBracket;'],
            [0, '&lang;'],
            [0, '&rang;'],
            [0, '&Lang;'],
            [0, '&Rang;'],
            [0, '&loang;'],
            [0, '&roang;'],
            [7, '&longleftarrow;'],
            [0, '&longrightarrow;'],
            [0, '&longleftrightarrow;'],
            [0, '&DoubleLongLeftArrow;'],
            [0, '&DoubleLongRightArrow;'],
            [0, '&DoubleLongLeftRightArrow;'],
            [1, '&longmapsto;'],
            [2, '&dzigrarr;'],
            [258, '&nvlArr;'],
            [0, '&nvrArr;'],
            [0, '&nvHarr;'],
            [0, '&Map;'],
            [6, '&lbarr;'],
            [0, '&bkarow;'],
            [0, '&lBarr;'],
            [0, '&dbkarow;'],
            [0, '&drbkarow;'],
            [0, '&DDotrahd;'],
            [0, '&UpArrowBar;'],
            [0, '&DownArrowBar;'],
            [2, '&Rarrtl;'],
            [2, '&latail;'],
            [0, '&ratail;'],
            [0, '&lAtail;'],
            [0, '&rAtail;'],
            [0, '&larrfs;'],
            [0, '&rarrfs;'],
            [0, '&larrbfs;'],
            [0, '&rarrbfs;'],
            [2, '&nwarhk;'],
            [0, '&nearhk;'],
            [0, '&hksearow;'],
            [0, '&hkswarow;'],
            [0, '&nwnear;'],
            [0, '&nesear;'],
            [0, '&seswar;'],
            [0, '&swnwar;'],
            [8, { v: '&rarrc;', n: 824, o: '&nrarrc;' }],
            [1, '&cudarrr;'],
            [0, '&ldca;'],
            [0, '&rdca;'],
            [0, '&cudarrl;'],
            [0, '&larrpl;'],
            [2, '&curarrm;'],
            [0, '&cularrp;'],
            [7, '&rarrpl;'],
            [2, '&harrcir;'],
            [0, '&Uarrocir;'],
            [0, '&lurdshar;'],
            [0, '&ldrushar;'],
            [2, '&LeftRightVector;'],
            [0, '&RightUpDownVector;'],
            [0, '&DownLeftRightVector;'],
            [0, '&LeftUpDownVector;'],
            [0, '&LeftVectorBar;'],
            [0, '&RightVectorBar;'],
            [0, '&RightUpVectorBar;'],
            [0, '&RightDownVectorBar;'],
            [0, '&DownLeftVectorBar;'],
            [0, '&DownRightVectorBar;'],
            [0, '&LeftUpVectorBar;'],
            [0, '&LeftDownVectorBar;'],
            [0, '&LeftTeeVector;'],
            [0, '&RightTeeVector;'],
            [0, '&RightUpTeeVector;'],
            [0, '&RightDownTeeVector;'],
            [0, '&DownLeftTeeVector;'],
            [0, '&DownRightTeeVector;'],
            [0, '&LeftUpTeeVector;'],
            [0, '&LeftDownTeeVector;'],
            [0, '&lHar;'],
            [0, '&uHar;'],
            [0, '&rHar;'],
            [0, '&dHar;'],
            [0, '&luruhar;'],
            [0, '&ldrdhar;'],
            [0, '&ruluhar;'],
            [0, '&rdldhar;'],
            [0, '&lharul;'],
            [0, '&llhard;'],
            [0, '&rharul;'],
            [0, '&lrhard;'],
            [0, '&udhar;'],
            [0, '&duhar;'],
            [0, '&RoundImplies;'],
            [0, '&erarr;'],
            [0, '&simrarr;'],
            [0, '&larrsim;'],
            [0, '&rarrsim;'],
            [0, '&rarrap;'],
            [0, '&ltlarr;'],
            [1, '&gtrarr;'],
            [0, '&subrarr;'],
            [1, '&suplarr;'],
            [0, '&lfisht;'],
            [0, '&rfisht;'],
            [0, '&ufisht;'],
            [0, '&dfisht;'],
            [5, '&lopar;'],
            [0, '&ropar;'],
            [4, '&lbrke;'],
            [0, '&rbrke;'],
            [0, '&lbrkslu;'],
            [0, '&rbrksld;'],
            [0, '&lbrksld;'],
            [0, '&rbrkslu;'],
            [0, '&langd;'],
            [0, '&rangd;'],
            [0, '&lparlt;'],
            [0, '&rpargt;'],
            [0, '&gtlPar;'],
            [0, '&ltrPar;'],
            [3, '&vzigzag;'],
            [1, '&vangrt;'],
            [0, '&angrtvbd;'],
            [6, '&ange;'],
            [0, '&range;'],
            [0, '&dwangle;'],
            [0, '&uwangle;'],
            [0, '&angmsdaa;'],
            [0, '&angmsdab;'],
            [0, '&angmsdac;'],
            [0, '&angmsdad;'],
            [0, '&angmsdae;'],
            [0, '&angmsdaf;'],
            [0, '&angmsdag;'],
            [0, '&angmsdah;'],
            [0, '&bemptyv;'],
            [0, '&demptyv;'],
            [0, '&cemptyv;'],
            [0, '&raemptyv;'],
            [0, '&laemptyv;'],
            [0, '&ohbar;'],
            [0, '&omid;'],
            [0, '&opar;'],
            [1, '&operp;'],
            [1, '&olcross;'],
            [0, '&odsold;'],
            [1, '&olcir;'],
            [0, '&ofcir;'],
            [0, '&olt;'],
            [0, '&ogt;'],
            [0, '&cirscir;'],
            [0, '&cirE;'],
            [0, '&solb;'],
            [0, '&bsolb;'],
            [3, '&boxbox;'],
            [3, '&trisb;'],
            [0, '&rtriltri;'],
            [0, { v: '&LeftTriangleBar;', n: 824, o: '&NotLeftTriangleBar;' }],
            [0, { v: '&RightTriangleBar;', n: 824, o: '&NotRightTriangleBar;' }],
            [11, '&iinfin;'],
            [0, '&infintie;'],
            [0, '&nvinfin;'],
            [4, '&eparsl;'],
            [0, '&smeparsl;'],
            [0, '&eqvparsl;'],
            [5, '&blacklozenge;'],
            [8, '&RuleDelayed;'],
            [1, '&dsol;'],
            [9, '&bigodot;'],
            [0, '&bigoplus;'],
            [0, '&bigotimes;'],
            [1, '&biguplus;'],
            [1, '&bigsqcup;'],
            [5, '&iiiint;'],
            [0, '&fpartint;'],
            [2, '&cirfnint;'],
            [0, '&awint;'],
            [0, '&rppolint;'],
            [0, '&scpolint;'],
            [0, '&npolint;'],
            [0, '&pointint;'],
            [0, '&quatint;'],
            [0, '&intlarhk;'],
            [10, '&pluscir;'],
            [0, '&plusacir;'],
            [0, '&simplus;'],
            [0, '&plusdu;'],
            [0, '&plussim;'],
            [0, '&plustwo;'],
            [1, '&mcomma;'],
            [0, '&minusdu;'],
            [2, '&loplus;'],
            [0, '&roplus;'],
            [0, '&Cross;'],
            [0, '&timesd;'],
            [0, '&timesbar;'],
            [1, '&smashp;'],
            [0, '&lotimes;'],
            [0, '&rotimes;'],
            [0, '&otimesas;'],
            [0, '&Otimes;'],
            [0, '&odiv;'],
            [0, '&triplus;'],
            [0, '&triminus;'],
            [0, '&tritime;'],
            [0, '&intprod;'],
            [2, '&amalg;'],
            [0, '&capdot;'],
            [1, '&ncup;'],
            [0, '&ncap;'],
            [0, '&capand;'],
            [0, '&cupor;'],
            [0, '&cupcap;'],
            [0, '&capcup;'],
            [0, '&cupbrcap;'],
            [0, '&capbrcup;'],
            [0, '&cupcup;'],
            [0, '&capcap;'],
            [0, '&ccups;'],
            [0, '&ccaps;'],
            [2, '&ccupssm;'],
            [2, '&And;'],
            [0, '&Or;'],
            [0, '&andand;'],
            [0, '&oror;'],
            [0, '&orslope;'],
            [0, '&andslope;'],
            [1, '&andv;'],
            [0, '&orv;'],
            [0, '&andd;'],
            [0, '&ord;'],
            [1, '&wedbar;'],
            [6, '&sdote;'],
            [3, '&simdot;'],
            [2, { v: '&congdot;', n: 824, o: '&ncongdot;' }],
            [0, '&easter;'],
            [0, '&apacir;'],
            [0, { v: '&apE;', n: 824, o: '&napE;' }],
            [0, '&eplus;'],
            [0, '&pluse;'],
            [0, '&Esim;'],
            [0, '&Colone;'],
            [0, '&Equal;'],
            [1, '&ddotseq;'],
            [0, '&equivDD;'],
            [0, '&ltcir;'],
            [0, '&gtcir;'],
            [0, '&ltquest;'],
            [0, '&gtquest;'],
            [0, { v: '&leqslant;', n: 824, o: '&nleqslant;' }],
            [0, { v: '&geqslant;', n: 824, o: '&ngeqslant;' }],
            [0, '&lesdot;'],
            [0, '&gesdot;'],
            [0, '&lesdoto;'],
            [0, '&gesdoto;'],
            [0, '&lesdotor;'],
            [0, '&gesdotol;'],
            [0, '&lap;'],
            [0, '&gap;'],
            [0, '&lne;'],
            [0, '&gne;'],
            [0, '&lnap;'],
            [0, '&gnap;'],
            [0, '&lEg;'],
            [0, '&gEl;'],
            [0, '&lsime;'],
            [0, '&gsime;'],
            [0, '&lsimg;'],
            [0, '&gsiml;'],
            [0, '&lgE;'],
            [0, '&glE;'],
            [0, '&lesges;'],
            [0, '&gesles;'],
            [0, '&els;'],
            [0, '&egs;'],
            [0, '&elsdot;'],
            [0, '&egsdot;'],
            [0, '&el;'],
            [0, '&eg;'],
            [2, '&siml;'],
            [0, '&simg;'],
            [0, '&simlE;'],
            [0, '&simgE;'],
            [0, { v: '&LessLess;', n: 824, o: '&NotNestedLessLess;' }],
            [0, { v: '&GreaterGreater;', n: 824, o: '&NotNestedGreaterGreater;' }],
            [1, '&glj;'],
            [0, '&gla;'],
            [0, '&ltcc;'],
            [0, '&gtcc;'],
            [0, '&lescc;'],
            [0, '&gescc;'],
            [0, '&smt;'],
            [0, '&lat;'],
            [0, { v: '&smte;', n: 65024, o: '&smtes;' }],
            [0, { v: '&late;', n: 65024, o: '&lates;' }],
            [0, '&bumpE;'],
            [0, { v: '&PrecedesEqual;', n: 824, o: '&NotPrecedesEqual;' }],
            [0, { v: '&sce;', n: 824, o: '&NotSucceedsEqual;' }],
            [2, '&prE;'],
            [0, '&scE;'],
            [0, '&precneqq;'],
            [0, '&scnE;'],
            [0, '&prap;'],
            [0, '&scap;'],
            [0, '&precnapprox;'],
            [0, '&scnap;'],
            [0, '&Pr;'],
            [0, '&Sc;'],
            [0, '&subdot;'],
            [0, '&supdot;'],
            [0, '&subplus;'],
            [0, '&supplus;'],
            [0, '&submult;'],
            [0, '&supmult;'],
            [0, '&subedot;'],
            [0, '&supedot;'],
            [0, { v: '&subE;', n: 824, o: '&nsubE;' }],
            [0, { v: '&supE;', n: 824, o: '&nsupE;' }],
            [0, '&subsim;'],
            [0, '&supsim;'],
            [2, { v: '&subnE;', n: 65024, o: '&varsubsetneqq;' }],
            [0, { v: '&supnE;', n: 65024, o: '&varsupsetneqq;' }],
            [2, '&csub;'],
            [0, '&csup;'],
            [0, '&csube;'],
            [0, '&csupe;'],
            [0, '&subsup;'],
            [0, '&supsub;'],
            [0, '&subsub;'],
            [0, '&supsup;'],
            [0, '&suphsub;'],
            [0, '&supdsub;'],
            [0, '&forkv;'],
            [0, '&topfork;'],
            [0, '&mlcp;'],
            [8, '&Dashv;'],
            [1, '&Vdashl;'],
            [0, '&Barv;'],
            [0, '&vBar;'],
            [0, '&vBarv;'],
            [1, '&Vbar;'],
            [0, '&Not;'],
            [0, '&bNot;'],
            [0, '&rnmid;'],
            [0, '&cirmid;'],
            [0, '&midcir;'],
            [0, '&topcir;'],
            [0, '&nhpar;'],
            [0, '&parsim;'],
            [9, { v: '&parsl;', n: 8421, o: '&nparsl;' }],
            [
                44343,
                {
                    n: new Map(
                        /* @__PURE__ */ restoreDiff([
                            [56476, '&Ascr;'],
                            [1, '&Cscr;'],
                            [0, '&Dscr;'],
                            [2, '&Gscr;'],
                            [2, '&Jscr;'],
                            [0, '&Kscr;'],
                            [2, '&Nscr;'],
                            [0, '&Oscr;'],
                            [0, '&Pscr;'],
                            [0, '&Qscr;'],
                            [1, '&Sscr;'],
                            [0, '&Tscr;'],
                            [0, '&Uscr;'],
                            [0, '&Vscr;'],
                            [0, '&Wscr;'],
                            [0, '&Xscr;'],
                            [0, '&Yscr;'],
                            [0, '&Zscr;'],
                            [0, '&ascr;'],
                            [0, '&bscr;'],
                            [0, '&cscr;'],
                            [0, '&dscr;'],
                            [1, '&fscr;'],
                            [1, '&hscr;'],
                            [0, '&iscr;'],
                            [0, '&jscr;'],
                            [0, '&kscr;'],
                            [0, '&lscr;'],
                            [0, '&mscr;'],
                            [0, '&nscr;'],
                            [1, '&pscr;'],
                            [0, '&qscr;'],
                            [0, '&rscr;'],
                            [0, '&sscr;'],
                            [0, '&tscr;'],
                            [0, '&uscr;'],
                            [0, '&vscr;'],
                            [0, '&wscr;'],
                            [0, '&xscr;'],
                            [0, '&yscr;'],
                            [0, '&zscr;'],
                            [52, '&Afr;'],
                            [0, '&Bfr;'],
                            [1, '&Dfr;'],
                            [0, '&Efr;'],
                            [0, '&Ffr;'],
                            [0, '&Gfr;'],
                            [2, '&Jfr;'],
                            [0, '&Kfr;'],
                            [0, '&Lfr;'],
                            [0, '&Mfr;'],
                            [0, '&Nfr;'],
                            [0, '&Ofr;'],
                            [0, '&Pfr;'],
                            [0, '&Qfr;'],
                            [1, '&Sfr;'],
                            [0, '&Tfr;'],
                            [0, '&Ufr;'],
                            [0, '&Vfr;'],
                            [0, '&Wfr;'],
                            [0, '&Xfr;'],
                            [0, '&Yfr;'],
                            [1, '&afr;'],
                            [0, '&bfr;'],
                            [0, '&cfr;'],
                            [0, '&dfr;'],
                            [0, '&efr;'],
                            [0, '&ffr;'],
                            [0, '&gfr;'],
                            [0, '&hfr;'],
                            [0, '&ifr;'],
                            [0, '&jfr;'],
                            [0, '&kfr;'],
                            [0, '&lfr;'],
                            [0, '&mfr;'],
                            [0, '&nfr;'],
                            [0, '&ofr;'],
                            [0, '&pfr;'],
                            [0, '&qfr;'],
                            [0, '&rfr;'],
                            [0, '&sfr;'],
                            [0, '&tfr;'],
                            [0, '&ufr;'],
                            [0, '&vfr;'],
                            [0, '&wfr;'],
                            [0, '&xfr;'],
                            [0, '&yfr;'],
                            [0, '&zfr;'],
                            [0, '&Aopf;'],
                            [0, '&Bopf;'],
                            [1, '&Dopf;'],
                            [0, '&Eopf;'],
                            [0, '&Fopf;'],
                            [0, '&Gopf;'],
                            [1, '&Iopf;'],
                            [0, '&Jopf;'],
                            [0, '&Kopf;'],
                            [0, '&Lopf;'],
                            [0, '&Mopf;'],
                            [1, '&Oopf;'],
                            [3, '&Sopf;'],
                            [0, '&Topf;'],
                            [0, '&Uopf;'],
                            [0, '&Vopf;'],
                            [0, '&Wopf;'],
                            [0, '&Xopf;'],
                            [0, '&Yopf;'],
                            [1, '&aopf;'],
                            [0, '&bopf;'],
                            [0, '&copf;'],
                            [0, '&dopf;'],
                            [0, '&eopf;'],
                            [0, '&fopf;'],
                            [0, '&gopf;'],
                            [0, '&hopf;'],
                            [0, '&iopf;'],
                            [0, '&jopf;'],
                            [0, '&kopf;'],
                            [0, '&lopf;'],
                            [0, '&mopf;'],
                            [0, '&nopf;'],
                            [0, '&oopf;'],
                            [0, '&popf;'],
                            [0, '&qopf;'],
                            [0, '&ropf;'],
                            [0, '&sopf;'],
                            [0, '&topf;'],
                            [0, '&uopf;'],
                            [0, '&vopf;'],
                            [0, '&wopf;'],
                            [0, '&xopf;'],
                            [0, '&yopf;'],
                            [0, '&zopf;']
                        ])
                    )
                }
            ],
            [8906, '&fflig;'],
            [0, '&filig;'],
            [0, '&fllig;'],
            [0, '&ffilig;'],
            [0, '&ffllig;']
        ])
    );

    // ../../node_modules/entities/lib/esm/escape.js
    var xmlCodeMap = /* @__PURE__ */ new Map([
        [34, '&quot;'],
        [38, '&amp;'],
        [39, '&apos;'],
        [60, '&lt;'],
        [62, '&gt;']
    ]);
    var getCodePoint =
        // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
        String.prototype.codePointAt != null
            ? (str, index) => str.codePointAt(index)
            : // http://mathiasbynens.be/notes/javascript-encoding#surrogate-formulae
              (c, index) =>
                  (c.charCodeAt(index) & 64512) === 55296
                      ? (c.charCodeAt(index) - 55296) * 1024 + c.charCodeAt(index + 1) - 56320 + 65536
                      : c.charCodeAt(index);
    function getEscaper(regex, map2) {
        return function escape3(data) {
            let match2;
            let lastIdx = 0;
            let result = '';
            while ((match2 = regex.exec(data))) {
                if (lastIdx !== match2.index) {
                    result += data.substring(lastIdx, match2.index);
                }
                result += map2.get(match2[0].charCodeAt(0));
                lastIdx = match2.index + 1;
            }
            return result + data.substring(lastIdx);
        };
    }
    var escapeUTF8 = getEscaper(/[&<>'"]/g, xmlCodeMap);
    var escapeAttribute = getEscaper(
        /["&\u00A0]/g,
        /* @__PURE__ */ new Map([
            [34, '&quot;'],
            [38, '&amp;'],
            [160, '&nbsp;']
        ])
    );
    var escapeText = getEscaper(
        /[&<>\u00A0]/g,
        /* @__PURE__ */ new Map([
            [38, '&amp;'],
            [60, '&lt;'],
            [62, '&gt;'],
            [160, '&nbsp;']
        ])
    );

    // ../../node_modules/entities/lib/esm/index.js
    var EntityLevel;
    (function (EntityLevel2) {
        EntityLevel2[(EntityLevel2['XML'] = 0)] = 'XML';
        EntityLevel2[(EntityLevel2['HTML'] = 1)] = 'HTML';
    })(EntityLevel || (EntityLevel = {}));
    var EncodingMode;
    (function (EncodingMode2) {
        EncodingMode2[(EncodingMode2['UTF8'] = 0)] = 'UTF8';
        EncodingMode2[(EncodingMode2['ASCII'] = 1)] = 'ASCII';
        EncodingMode2[(EncodingMode2['Extensive'] = 2)] = 'Extensive';
        EncodingMode2[(EncodingMode2['Attribute'] = 3)] = 'Attribute';
        EncodingMode2[(EncodingMode2['Text'] = 4)] = 'Text';
    })(EncodingMode || (EncodingMode = {}));

    // ../../node_modules/markdown-it/lib/common/utils.mjs
    function _class(obj) {
        return Object.prototype.toString.call(obj);
    }
    function isString(obj) {
        return _class(obj) === '[object String]';
    }
    var _hasOwnProperty = Object.prototype.hasOwnProperty;
    function has(object, key) {
        return _hasOwnProperty.call(object, key);
    }
    function assign(obj) {
        const sources = Array.prototype.slice.call(arguments, 1);
        sources.forEach(function (source) {
            if (!source) {
                return;
            }
            if (typeof source !== 'object') {
                throw new TypeError(source + 'must be object');
            }
            Object.keys(source).forEach(function (key) {
                obj[key] = source[key];
            });
        });
        return obj;
    }
    function arrayReplaceAt(src, pos, newElements) {
        return [].concat(src.slice(0, pos), newElements, src.slice(pos + 1));
    }
    function isValidEntityCode(c) {
        if (c >= 55296 && c <= 57343) {
            return false;
        }
        if (c >= 64976 && c <= 65007) {
            return false;
        }
        if ((c & 65535) === 65535 || (c & 65535) === 65534) {
            return false;
        }
        if (c >= 0 && c <= 8) {
            return false;
        }
        if (c === 11) {
            return false;
        }
        if (c >= 14 && c <= 31) {
            return false;
        }
        if (c >= 127 && c <= 159) {
            return false;
        }
        if (c > 1114111) {
            return false;
        }
        return true;
    }
    function fromCodePoint2(c) {
        if (c > 65535) {
            c -= 65536;
            const surrogate1 = 55296 + (c >> 10);
            const surrogate2 = 56320 + (c & 1023);
            return String.fromCharCode(surrogate1, surrogate2);
        }
        return String.fromCharCode(c);
    }
    var UNESCAPE_MD_RE = /\\([!"#$%&'()*+,\-./:;<=>?@[\\\]^_`{|}~])/g;
    var ENTITY_RE = /&([a-z#][a-z0-9]{1,31});/gi;
    var UNESCAPE_ALL_RE = new RegExp(UNESCAPE_MD_RE.source + '|' + ENTITY_RE.source, 'gi');
    var DIGITAL_ENTITY_TEST_RE = /^#((?:x[a-f0-9]{1,8}|[0-9]{1,8}))$/i;
    function replaceEntityPattern(match2, name) {
        if (name.charCodeAt(0) === 35 && DIGITAL_ENTITY_TEST_RE.test(name)) {
            const code2 = name[1].toLowerCase() === 'x' ? parseInt(name.slice(2), 16) : parseInt(name.slice(1), 10);
            if (isValidEntityCode(code2)) {
                return fromCodePoint2(code2);
            }
            return match2;
        }
        const decoded = decodeHTML(match2);
        if (decoded !== match2) {
            return decoded;
        }
        return match2;
    }
    function unescapeMd(str) {
        if (str.indexOf('\\') < 0) {
            return str;
        }
        return str.replace(UNESCAPE_MD_RE, '$1');
    }
    function unescapeAll(str) {
        if (str.indexOf('\\') < 0 && str.indexOf('&') < 0) {
            return str;
        }
        return str.replace(UNESCAPE_ALL_RE, function (match2, escaped, entity2) {
            if (escaped) {
                return escaped;
            }
            return replaceEntityPattern(match2, entity2);
        });
    }
    var HTML_ESCAPE_TEST_RE = /[&<>"]/;
    var HTML_ESCAPE_REPLACE_RE = /[&<>"]/g;
    var HTML_REPLACEMENTS = {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;'
    };
    function replaceUnsafeChar(ch) {
        return HTML_REPLACEMENTS[ch];
    }
    function escapeHtml(str) {
        if (HTML_ESCAPE_TEST_RE.test(str)) {
            return str.replace(HTML_ESCAPE_REPLACE_RE, replaceUnsafeChar);
        }
        return str;
    }
    var REGEXP_ESCAPE_RE = /[.?*+^$[\]\\(){}|-]/g;
    function escapeRE(str) {
        return str.replace(REGEXP_ESCAPE_RE, '\\$&');
    }
    function isSpace(code2) {
        switch (code2) {
            case 9:
            case 32:
                return true;
        }
        return false;
    }
    function isWhiteSpace(code2) {
        if (code2 >= 8192 && code2 <= 8202) {
            return true;
        }
        switch (code2) {
            case 9:
            case 10:
            case 11:
            case 12:
            case 13:
            case 32:
            case 160:
            case 5760:
            case 8239:
            case 8287:
            case 12288:
                return true;
        }
        return false;
    }
    function isPunctChar(ch) {
        return regex_default4.test(ch);
    }
    function isMdAsciiPunct(ch) {
        switch (ch) {
            case 33:
            case 34:
            case 35:
            case 36:
            case 37:
            case 38:
            case 39:
            case 40:
            case 41:
            case 42:
            case 43:
            case 44:
            case 45:
            case 46:
            case 47:
            case 58:
            case 59:
            case 60:
            case 61:
            case 62:
            case 63:
            case 64:
            case 91:
            case 92:
            case 93:
            case 94:
            case 95:
            case 96:
            case 123:
            case 124:
            case 125:
            case 126:
                return true;
            default:
                return false;
        }
    }
    function normalizeReference(str) {
        str = str.trim().replace(/\s+/g, ' ');
        if ('\u1E9E'.toLowerCase() === '\u1E7E') {
            str = str.replace(/ẞ/g, '\xDF');
        }
        return str.toLowerCase().toUpperCase();
    }
    var lib = { mdurl: mdurl_exports, ucmicro: uc_exports };

    // ../../node_modules/markdown-it/lib/helpers/index.mjs
    var helpers_exports = {};
    __export(helpers_exports, {
        parseLinkDestination: () => parseLinkDestination,
        parseLinkLabel: () => parseLinkLabel,
        parseLinkTitle: () => parseLinkTitle
    });

    // ../../node_modules/markdown-it/lib/helpers/parse_link_label.mjs
    function parseLinkLabel(state, start, disableNested) {
        let level, found, marker, prevPos;
        const max = state.posMax;
        const oldPos = state.pos;
        state.pos = start + 1;
        level = 1;
        while (state.pos < max) {
            marker = state.src.charCodeAt(state.pos);
            if (marker === 93) {
                level--;
                if (level === 0) {
                    found = true;
                    break;
                }
            }
            prevPos = state.pos;
            state.md.inline.skipToken(state);
            if (marker === 91) {
                if (prevPos === state.pos - 1) {
                    level++;
                } else if (disableNested) {
                    state.pos = oldPos;
                    return -1;
                }
            }
        }
        let labelEnd = -1;
        if (found) {
            labelEnd = state.pos;
        }
        state.pos = oldPos;
        return labelEnd;
    }

    // ../../node_modules/markdown-it/lib/helpers/parse_link_destination.mjs
    function parseLinkDestination(str, start, max) {
        let code2;
        let pos = start;
        const result = {
            ok: false,
            pos: 0,
            lines: 0,
            str: ''
        };
        if (str.charCodeAt(pos) === 60) {
            pos++;
            while (pos < max) {
                code2 = str.charCodeAt(pos);
                if (code2 === 10) {
                    return result;
                }
                if (code2 === 60) {
                    return result;
                }
                if (code2 === 62) {
                    result.pos = pos + 1;
                    result.str = unescapeAll(str.slice(start + 1, pos));
                    result.ok = true;
                    return result;
                }
                if (code2 === 92 && pos + 1 < max) {
                    pos += 2;
                    continue;
                }
                pos++;
            }
            return result;
        }
        let level = 0;
        while (pos < max) {
            code2 = str.charCodeAt(pos);
            if (code2 === 32) {
                break;
            }
            if (code2 < 32 || code2 === 127) {
                break;
            }
            if (code2 === 92 && pos + 1 < max) {
                if (str.charCodeAt(pos + 1) === 32) {
                    break;
                }
                pos += 2;
                continue;
            }
            if (code2 === 40) {
                level++;
                if (level > 32) {
                    return result;
                }
            }
            if (code2 === 41) {
                if (level === 0) {
                    break;
                }
                level--;
            }
            pos++;
        }
        if (start === pos) {
            return result;
        }
        if (level !== 0) {
            return result;
        }
        result.str = unescapeAll(str.slice(start, pos));
        result.pos = pos;
        result.ok = true;
        return result;
    }

    // ../../node_modules/markdown-it/lib/helpers/parse_link_title.mjs
    function parseLinkTitle(str, start, max) {
        let code2, marker;
        let lines = 0;
        let pos = start;
        const result = {
            ok: false,
            pos: 0,
            lines: 0,
            str: ''
        };
        if (pos >= max) {
            return result;
        }
        marker = str.charCodeAt(pos);
        if (marker !== 34 && marker !== 39 && marker !== 40) {
            return result;
        }
        pos++;
        if (marker === 40) {
            marker = 41;
        }
        while (pos < max) {
            code2 = str.charCodeAt(pos);
            if (code2 === marker) {
                result.pos = pos + 1;
                result.lines = lines;
                result.str = unescapeAll(str.slice(start + 1, pos));
                result.ok = true;
                return result;
            } else if (code2 === 40 && marker === 41) {
                return result;
            } else if (code2 === 10) {
                lines++;
            } else if (code2 === 92 && pos + 1 < max) {
                pos++;
                if (str.charCodeAt(pos) === 10) {
                    lines++;
                }
            }
            pos++;
        }
        return result;
    }

    // ../../node_modules/markdown-it/lib/renderer.mjs
    var default_rules = {};
    default_rules.code_inline = function (tokens, idx, options, env, slf) {
        const token = tokens[idx];
        return '<code' + slf.renderAttrs(token) + '>' + escapeHtml(token.content) + '</code>';
    };
    default_rules.code_block = function (tokens, idx, options, env, slf) {
        const token = tokens[idx];
        return '<pre' + slf.renderAttrs(token) + '><code>' + escapeHtml(tokens[idx].content) + '</code></pre>\n';
    };
    default_rules.fence = function (tokens, idx, options, env, slf) {
        const token = tokens[idx];
        const info = token.info ? unescapeAll(token.info).trim() : '';
        let langName = '';
        let langAttrs = '';
        if (info) {
            const arr = info.split(/(\s+)/g);
            langName = arr[0];
            langAttrs = arr.slice(2).join('');
        }
        let highlighted;
        if (options.highlight) {
            highlighted = options.highlight(token.content, langName, langAttrs) || escapeHtml(token.content);
        } else {
            highlighted = escapeHtml(token.content);
        }
        if (highlighted.indexOf('<pre') === 0) {
            return highlighted + '\n';
        }
        if (info) {
            const i = token.attrIndex('class');
            const tmpAttrs = token.attrs ? token.attrs.slice() : [];
            if (i < 0) {
                tmpAttrs.push(['class', options.langPrefix + langName]);
            } else {
                tmpAttrs[i] = tmpAttrs[i].slice();
                tmpAttrs[i][1] += ' ' + options.langPrefix + langName;
            }
            const tmpToken = {
                attrs: tmpAttrs
            };
            return `<pre><code${slf.renderAttrs(tmpToken)}>${highlighted}</code></pre>
`;
        }
        return `<pre><code${slf.renderAttrs(token)}>${highlighted}</code></pre>
`;
    };
    default_rules.image = function (tokens, idx, options, env, slf) {
        const token = tokens[idx];
        token.attrs[token.attrIndex('alt')][1] = slf.renderInlineAsText(token.children, options, env);
        return slf.renderToken(tokens, idx, options);
    };
    default_rules.hardbreak = function (tokens, idx, options) {
        return options.xhtmlOut ? '<br />\n' : '<br>\n';
    };
    default_rules.softbreak = function (tokens, idx, options) {
        return options.breaks ? (options.xhtmlOut ? '<br />\n' : '<br>\n') : '\n';
    };
    default_rules.text = function (tokens, idx) {
        return escapeHtml(tokens[idx].content);
    };
    default_rules.html_block = function (tokens, idx) {
        return tokens[idx].content;
    };
    default_rules.html_inline = function (tokens, idx) {
        return tokens[idx].content;
    };
    function Renderer() {
        this.rules = assign({}, default_rules);
    }
    Renderer.prototype.renderAttrs = function renderAttrs(token) {
        let i, l, result;
        if (!token.attrs) {
            return '';
        }
        result = '';
        for (i = 0, l = token.attrs.length; i < l; i++) {
            result += ' ' + escapeHtml(token.attrs[i][0]) + '="' + escapeHtml(token.attrs[i][1]) + '"';
        }
        return result;
    };
    Renderer.prototype.renderToken = function renderToken(tokens, idx, options) {
        const token = tokens[idx];
        let result = '';
        if (token.hidden) {
            return '';
        }
        if (token.block && token.nesting !== -1 && idx && tokens[idx - 1].hidden) {
            result += '\n';
        }
        result += (token.nesting === -1 ? '</' : '<') + token.tag;
        result += this.renderAttrs(token);
        if (token.nesting === 0 && options.xhtmlOut) {
            result += ' /';
        }
        let needLf = false;
        if (token.block) {
            needLf = true;
            if (token.nesting === 1) {
                if (idx + 1 < tokens.length) {
                    const nextToken = tokens[idx + 1];
                    if (nextToken.type === 'inline' || nextToken.hidden) {
                        needLf = false;
                    } else if (nextToken.nesting === -1 && nextToken.tag === token.tag) {
                        needLf = false;
                    }
                }
            }
        }
        result += needLf ? '>\n' : '>';
        return result;
    };
    Renderer.prototype.renderInline = function (tokens, options, env) {
        let result = '';
        const rules = this.rules;
        for (let i = 0, len = tokens.length; i < len; i++) {
            const type = tokens[i].type;
            if (typeof rules[type] !== 'undefined') {
                result += rules[type](tokens, i, options, env, this);
            } else {
                result += this.renderToken(tokens, i, options);
            }
        }
        return result;
    };
    Renderer.prototype.renderInlineAsText = function (tokens, options, env) {
        let result = '';
        for (let i = 0, len = tokens.length; i < len; i++) {
            switch (tokens[i].type) {
                case 'text':
                    result += tokens[i].content;
                    break;
                case 'image':
                    result += this.renderInlineAsText(tokens[i].children, options, env);
                    break;
                case 'html_inline':
                case 'html_block':
                    result += tokens[i].content;
                    break;
                case 'softbreak':
                case 'hardbreak':
                    result += '\n';
                    break;
                default:
            }
        }
        return result;
    };
    Renderer.prototype.render = function (tokens, options, env) {
        let result = '';
        const rules = this.rules;
        for (let i = 0, len = tokens.length; i < len; i++) {
            const type = tokens[i].type;
            if (type === 'inline') {
                result += this.renderInline(tokens[i].children, options, env);
            } else if (typeof rules[type] !== 'undefined') {
                result += rules[type](tokens, i, options, env, this);
            } else {
                result += this.renderToken(tokens, i, options, env);
            }
        }
        return result;
    };
    var renderer_default = Renderer;

    // ../../node_modules/markdown-it/lib/ruler.mjs
    function Ruler() {
        this.__rules__ = [];
        this.__cache__ = null;
    }
    Ruler.prototype.__find__ = function (name) {
        for (let i = 0; i < this.__rules__.length; i++) {
            if (this.__rules__[i].name === name) {
                return i;
            }
        }
        return -1;
    };
    Ruler.prototype.__compile__ = function () {
        const self = this;
        const chains = [''];
        self.__rules__.forEach(function (rule) {
            if (!rule.enabled) {
                return;
            }
            rule.alt.forEach(function (altName) {
                if (chains.indexOf(altName) < 0) {
                    chains.push(altName);
                }
            });
        });
        self.__cache__ = {};
        chains.forEach(function (chain) {
            self.__cache__[chain] = [];
            self.__rules__.forEach(function (rule) {
                if (!rule.enabled) {
                    return;
                }
                if (chain && rule.alt.indexOf(chain) < 0) {
                    return;
                }
                self.__cache__[chain].push(rule.fn);
            });
        });
    };
    Ruler.prototype.at = function (name, fn, options) {
        const index = this.__find__(name);
        const opt = options || {};
        if (index === -1) {
            throw new Error('Parser rule not found: ' + name);
        }
        this.__rules__[index].fn = fn;
        this.__rules__[index].alt = opt.alt || [];
        this.__cache__ = null;
    };
    Ruler.prototype.before = function (beforeName, ruleName, fn, options) {
        const index = this.__find__(beforeName);
        const opt = options || {};
        if (index === -1) {
            throw new Error('Parser rule not found: ' + beforeName);
        }
        this.__rules__.splice(index, 0, {
            name: ruleName,
            enabled: true,
            fn,
            alt: opt.alt || []
        });
        this.__cache__ = null;
    };
    Ruler.prototype.after = function (afterName, ruleName, fn, options) {
        const index = this.__find__(afterName);
        const opt = options || {};
        if (index === -1) {
            throw new Error('Parser rule not found: ' + afterName);
        }
        this.__rules__.splice(index + 1, 0, {
            name: ruleName,
            enabled: true,
            fn,
            alt: opt.alt || []
        });
        this.__cache__ = null;
    };
    Ruler.prototype.push = function (ruleName, fn, options) {
        const opt = options || {};
        this.__rules__.push({
            name: ruleName,
            enabled: true,
            fn,
            alt: opt.alt || []
        });
        this.__cache__ = null;
    };
    Ruler.prototype.enable = function (list2, ignoreInvalid) {
        if (!Array.isArray(list2)) {
            list2 = [list2];
        }
        const result = [];
        list2.forEach(function (name) {
            const idx = this.__find__(name);
            if (idx < 0) {
                if (ignoreInvalid) {
                    return;
                }
                throw new Error('Rules manager: invalid rule name ' + name);
            }
            this.__rules__[idx].enabled = true;
            result.push(name);
        }, this);
        this.__cache__ = null;
        return result;
    };
    Ruler.prototype.enableOnly = function (list2, ignoreInvalid) {
        if (!Array.isArray(list2)) {
            list2 = [list2];
        }
        this.__rules__.forEach(function (rule) {
            rule.enabled = false;
        });
        this.enable(list2, ignoreInvalid);
    };
    Ruler.prototype.disable = function (list2, ignoreInvalid) {
        if (!Array.isArray(list2)) {
            list2 = [list2];
        }
        const result = [];
        list2.forEach(function (name) {
            const idx = this.__find__(name);
            if (idx < 0) {
                if (ignoreInvalid) {
                    return;
                }
                throw new Error('Rules manager: invalid rule name ' + name);
            }
            this.__rules__[idx].enabled = false;
            result.push(name);
        }, this);
        this.__cache__ = null;
        return result;
    };
    Ruler.prototype.getRules = function (chainName) {
        if (this.__cache__ === null) {
            this.__compile__();
        }
        return this.__cache__[chainName] || [];
    };
    var ruler_default = Ruler;

    // ../../node_modules/markdown-it/lib/token.mjs
    function Token(type, tag, nesting) {
        this.type = type;
        this.tag = tag;
        this.attrs = null;
        this.map = null;
        this.nesting = nesting;
        this.level = 0;
        this.children = null;
        this.content = '';
        this.markup = '';
        this.info = '';
        this.meta = null;
        this.block = false;
        this.hidden = false;
    }
    Token.prototype.attrIndex = function attrIndex(name) {
        if (!this.attrs) {
            return -1;
        }
        const attrs = this.attrs;
        for (let i = 0, len = attrs.length; i < len; i++) {
            if (attrs[i][0] === name) {
                return i;
            }
        }
        return -1;
    };
    Token.prototype.attrPush = function attrPush(attrData) {
        if (this.attrs) {
            this.attrs.push(attrData);
        } else {
            this.attrs = [attrData];
        }
    };
    Token.prototype.attrSet = function attrSet(name, value) {
        const idx = this.attrIndex(name);
        const attrData = [name, value];
        if (idx < 0) {
            this.attrPush(attrData);
        } else {
            this.attrs[idx] = attrData;
        }
    };
    Token.prototype.attrGet = function attrGet(name) {
        const idx = this.attrIndex(name);
        let value = null;
        if (idx >= 0) {
            value = this.attrs[idx][1];
        }
        return value;
    };
    Token.prototype.attrJoin = function attrJoin(name, value) {
        const idx = this.attrIndex(name);
        if (idx < 0) {
            this.attrPush([name, value]);
        } else {
            this.attrs[idx][1] = this.attrs[idx][1] + ' ' + value;
        }
    };
    var token_default = Token;

    // ../../node_modules/markdown-it/lib/rules_core/state_core.mjs
    function StateCore(src, md, env) {
        this.src = src;
        this.env = env;
        this.tokens = [];
        this.inlineMode = false;
        this.md = md;
    }
    StateCore.prototype.Token = token_default;
    var state_core_default = StateCore;

    // ../../node_modules/markdown-it/lib/rules_core/normalize.mjs
    var NEWLINES_RE = /\r\n?|\n/g;
    var NULL_RE = /\0/g;
    function normalize(state) {
        let str;
        str = state.src.replace(NEWLINES_RE, '\n');
        str = str.replace(NULL_RE, '\uFFFD');
        state.src = str;
    }

    // ../../node_modules/markdown-it/lib/rules_core/block.mjs
    function block(state) {
        let token;
        if (state.inlineMode) {
            token = new state.Token('inline', '', 0);
            token.content = state.src;
            token.map = [0, 1];
            token.children = [];
            state.tokens.push(token);
        } else {
            state.md.block.parse(state.src, state.md, state.env, state.tokens);
        }
    }

    // ../../node_modules/markdown-it/lib/rules_core/inline.mjs
    function inline(state) {
        const tokens = state.tokens;
        for (let i = 0, l = tokens.length; i < l; i++) {
            const tok = tokens[i];
            if (tok.type === 'inline') {
                state.md.inline.parse(tok.content, state.md, state.env, tok.children);
            }
        }
    }

    // ../../node_modules/markdown-it/lib/rules_core/linkify.mjs
    function isLinkOpen(str) {
        return /^<a[>\s]/i.test(str);
    }
    function isLinkClose(str) {
        return /^<\/a\s*>/i.test(str);
    }
    function linkify(state) {
        const blockTokens = state.tokens;
        if (!state.md.options.linkify) {
            return;
        }
        for (let j = 0, l = blockTokens.length; j < l; j++) {
            if (blockTokens[j].type !== 'inline' || !state.md.linkify.pretest(blockTokens[j].content)) {
                continue;
            }
            let tokens = blockTokens[j].children;
            let htmlLinkLevel = 0;
            for (let i = tokens.length - 1; i >= 0; i--) {
                const currentToken = tokens[i];
                if (currentToken.type === 'link_close') {
                    i--;
                    while (tokens[i].level !== currentToken.level && tokens[i].type !== 'link_open') {
                        i--;
                    }
                    continue;
                }
                if (currentToken.type === 'html_inline') {
                    if (isLinkOpen(currentToken.content) && htmlLinkLevel > 0) {
                        htmlLinkLevel--;
                    }
                    if (isLinkClose(currentToken.content)) {
                        htmlLinkLevel++;
                    }
                }
                if (htmlLinkLevel > 0) {
                    continue;
                }
                if (currentToken.type === 'text' && state.md.linkify.test(currentToken.content)) {
                    const text2 = currentToken.content;
                    let links = state.md.linkify.match(text2);
                    const nodes = [];
                    let level = currentToken.level;
                    let lastPos = 0;
                    if (links.length > 0 && links[0].index === 0 && i > 0 && tokens[i - 1].type === 'text_special') {
                        links = links.slice(1);
                    }
                    for (let ln = 0; ln < links.length; ln++) {
                        const url = links[ln].url;
                        const fullUrl = state.md.normalizeLink(url);
                        if (!state.md.validateLink(fullUrl)) {
                            continue;
                        }
                        let urlText = links[ln].text;
                        if (!links[ln].schema) {
                            urlText = state.md.normalizeLinkText('http://' + urlText).replace(/^http:\/\//, '');
                        } else if (links[ln].schema === 'mailto:' && !/^mailto:/i.test(urlText)) {
                            urlText = state.md.normalizeLinkText('mailto:' + urlText).replace(/^mailto:/, '');
                        } else {
                            urlText = state.md.normalizeLinkText(urlText);
                        }
                        const pos = links[ln].index;
                        if (pos > lastPos) {
                            const token = new state.Token('text', '', 0);
                            token.content = text2.slice(lastPos, pos);
                            token.level = level;
                            nodes.push(token);
                        }
                        const token_o = new state.Token('link_open', 'a', 1);
                        token_o.attrs = [['href', fullUrl]];
                        token_o.level = level++;
                        token_o.markup = 'linkify';
                        token_o.info = 'auto';
                        nodes.push(token_o);
                        const token_t = new state.Token('text', '', 0);
                        token_t.content = urlText;
                        token_t.level = level;
                        nodes.push(token_t);
                        const token_c = new state.Token('link_close', 'a', -1);
                        token_c.level = --level;
                        token_c.markup = 'linkify';
                        token_c.info = 'auto';
                        nodes.push(token_c);
                        lastPos = links[ln].lastIndex;
                    }
                    if (lastPos < text2.length) {
                        const token = new state.Token('text', '', 0);
                        token.content = text2.slice(lastPos);
                        token.level = level;
                        nodes.push(token);
                    }
                    blockTokens[j].children = tokens = arrayReplaceAt(tokens, i, nodes);
                }
            }
        }
    }

    // ../../node_modules/markdown-it/lib/rules_core/replacements.mjs
    var RARE_RE = /\+-|\.\.|\?\?\?\?|!!!!|,,|--/;
    var SCOPED_ABBR_TEST_RE = /\((c|tm|r)\)/i;
    var SCOPED_ABBR_RE = /\((c|tm|r)\)/gi;
    var SCOPED_ABBR = {
        c: '\xA9',
        r: '\xAE',
        tm: '\u2122'
    };
    function replaceFn(match2, name) {
        return SCOPED_ABBR[name.toLowerCase()];
    }
    function replace_scoped(inlineTokens) {
        let inside_autolink = 0;
        for (let i = inlineTokens.length - 1; i >= 0; i--) {
            const token = inlineTokens[i];
            if (token.type === 'text' && !inside_autolink) {
                token.content = token.content.replace(SCOPED_ABBR_RE, replaceFn);
            }
            if (token.type === 'link_open' && token.info === 'auto') {
                inside_autolink--;
            }
            if (token.type === 'link_close' && token.info === 'auto') {
                inside_autolink++;
            }
        }
    }
    function replace_rare(inlineTokens) {
        let inside_autolink = 0;
        for (let i = inlineTokens.length - 1; i >= 0; i--) {
            const token = inlineTokens[i];
            if (token.type === 'text' && !inside_autolink) {
                if (RARE_RE.test(token.content)) {
                    token.content = token.content
                        .replace(/\+-/g, '\xB1')
                        .replace(/\.{2,}/g, '\u2026')
                        .replace(/([?!])…/g, '$1..')
                        .replace(/([?!]){4,}/g, '$1$1$1')
                        .replace(/,{2,}/g, ',')
                        .replace(/(^|[^-])---(?=[^-]|$)/gm, '$1\u2014')
                        .replace(/(^|\s)--(?=\s|$)/gm, '$1\u2013')
                        .replace(/(^|[^-\s])--(?=[^-\s]|$)/gm, '$1\u2013');
                }
            }
            if (token.type === 'link_open' && token.info === 'auto') {
                inside_autolink--;
            }
            if (token.type === 'link_close' && token.info === 'auto') {
                inside_autolink++;
            }
        }
    }
    function replace(state) {
        let blkIdx;
        if (!state.md.options.typographer) {
            return;
        }
        for (blkIdx = state.tokens.length - 1; blkIdx >= 0; blkIdx--) {
            if (state.tokens[blkIdx].type !== 'inline') {
                continue;
            }
            if (SCOPED_ABBR_TEST_RE.test(state.tokens[blkIdx].content)) {
                replace_scoped(state.tokens[blkIdx].children);
            }
            if (RARE_RE.test(state.tokens[blkIdx].content)) {
                replace_rare(state.tokens[blkIdx].children);
            }
        }
    }

    // ../../node_modules/markdown-it/lib/rules_core/smartquotes.mjs
    var QUOTE_TEST_RE = /['"]/;
    var QUOTE_RE = /['"]/g;
    var APOSTROPHE = '\u2019';
    function replaceAt(str, index, ch) {
        return str.slice(0, index) + ch + str.slice(index + 1);
    }
    function process_inlines(tokens, state) {
        let j;
        const stack = [];
        for (let i = 0; i < tokens.length; i++) {
            const token = tokens[i];
            const thisLevel = tokens[i].level;
            for (j = stack.length - 1; j >= 0; j--) {
                if (stack[j].level <= thisLevel) {
                    break;
                }
            }
            stack.length = j + 1;
            if (token.type !== 'text') {
                continue;
            }
            let text2 = token.content;
            let pos = 0;
            let max = text2.length;
            OUTER: while (pos < max) {
                QUOTE_RE.lastIndex = pos;
                const t = QUOTE_RE.exec(text2);
                if (!t) {
                    break;
                }
                let canOpen = true;
                let canClose = true;
                pos = t.index + 1;
                const isSingle = t[0] === "'";
                let lastChar = 32;
                if (t.index - 1 >= 0) {
                    lastChar = text2.charCodeAt(t.index - 1);
                } else {
                    for (j = i - 1; j >= 0; j--) {
                        if (tokens[j].type === 'softbreak' || tokens[j].type === 'hardbreak') break;
                        if (!tokens[j].content) continue;
                        lastChar = tokens[j].content.charCodeAt(tokens[j].content.length - 1);
                        break;
                    }
                }
                let nextChar = 32;
                if (pos < max) {
                    nextChar = text2.charCodeAt(pos);
                } else {
                    for (j = i + 1; j < tokens.length; j++) {
                        if (tokens[j].type === 'softbreak' || tokens[j].type === 'hardbreak') break;
                        if (!tokens[j].content) continue;
                        nextChar = tokens[j].content.charCodeAt(0);
                        break;
                    }
                }
                const isLastPunctChar = isMdAsciiPunct(lastChar) || isPunctChar(String.fromCharCode(lastChar));
                const isNextPunctChar = isMdAsciiPunct(nextChar) || isPunctChar(String.fromCharCode(nextChar));
                const isLastWhiteSpace = isWhiteSpace(lastChar);
                const isNextWhiteSpace = isWhiteSpace(nextChar);
                if (isNextWhiteSpace) {
                    canOpen = false;
                } else if (isNextPunctChar) {
                    if (!(isLastWhiteSpace || isLastPunctChar)) {
                        canOpen = false;
                    }
                }
                if (isLastWhiteSpace) {
                    canClose = false;
                } else if (isLastPunctChar) {
                    if (!(isNextWhiteSpace || isNextPunctChar)) {
                        canClose = false;
                    }
                }
                if (nextChar === 34 && t[0] === '"') {
                    if (lastChar >= 48 && lastChar <= 57) {
                        canClose = canOpen = false;
                    }
                }
                if (canOpen && canClose) {
                    canOpen = isLastPunctChar;
                    canClose = isNextPunctChar;
                }
                if (!canOpen && !canClose) {
                    if (isSingle) {
                        token.content = replaceAt(token.content, t.index, APOSTROPHE);
                    }
                    continue;
                }
                if (canClose) {
                    for (j = stack.length - 1; j >= 0; j--) {
                        let item = stack[j];
                        if (stack[j].level < thisLevel) {
                            break;
                        }
                        if (item.single === isSingle && stack[j].level === thisLevel) {
                            item = stack[j];
                            let openQuote;
                            let closeQuote;
                            if (isSingle) {
                                openQuote = state.md.options.quotes[2];
                                closeQuote = state.md.options.quotes[3];
                            } else {
                                openQuote = state.md.options.quotes[0];
                                closeQuote = state.md.options.quotes[1];
                            }
                            token.content = replaceAt(token.content, t.index, closeQuote);
                            tokens[item.token].content = replaceAt(tokens[item.token].content, item.pos, openQuote);
                            pos += closeQuote.length - 1;
                            if (item.token === i) {
                                pos += openQuote.length - 1;
                            }
                            text2 = token.content;
                            max = text2.length;
                            stack.length = j;
                            continue OUTER;
                        }
                    }
                }
                if (canOpen) {
                    stack.push({
                        token: i,
                        pos: t.index,
                        single: isSingle,
                        level: thisLevel
                    });
                } else if (canClose && isSingle) {
                    token.content = replaceAt(token.content, t.index, APOSTROPHE);
                }
            }
        }
    }
    function smartquotes(state) {
        if (!state.md.options.typographer) {
            return;
        }
        for (let blkIdx = state.tokens.length - 1; blkIdx >= 0; blkIdx--) {
            if (state.tokens[blkIdx].type !== 'inline' || !QUOTE_TEST_RE.test(state.tokens[blkIdx].content)) {
                continue;
            }
            process_inlines(state.tokens[blkIdx].children, state);
        }
    }

    // ../../node_modules/markdown-it/lib/rules_core/text_join.mjs
    function text_join(state) {
        let curr, last;
        const blockTokens = state.tokens;
        const l = blockTokens.length;
        for (let j = 0; j < l; j++) {
            if (blockTokens[j].type !== 'inline') continue;
            const tokens = blockTokens[j].children;
            const max = tokens.length;
            for (curr = 0; curr < max; curr++) {
                if (tokens[curr].type === 'text_special') {
                    tokens[curr].type = 'text';
                }
            }
            for (curr = last = 0; curr < max; curr++) {
                if (tokens[curr].type === 'text' && curr + 1 < max && tokens[curr + 1].type === 'text') {
                    tokens[curr + 1].content = tokens[curr].content + tokens[curr + 1].content;
                } else {
                    if (curr !== last) {
                        tokens[last] = tokens[curr];
                    }
                    last++;
                }
            }
            if (curr !== last) {
                tokens.length = last;
            }
        }
    }

    // ../../node_modules/markdown-it/lib/parser_core.mjs
    var _rules = [
        ['normalize', normalize],
        ['block', block],
        ['inline', inline],
        ['linkify', linkify],
        ['replacements', replace],
        ['smartquotes', smartquotes],
        // `text_join` finds `text_special` tokens (for escape sequences)
        // and joins them with the rest of the text
        ['text_join', text_join]
    ];
    function Core() {
        this.ruler = new ruler_default();
        for (let i = 0; i < _rules.length; i++) {
            this.ruler.push(_rules[i][0], _rules[i][1]);
        }
    }
    Core.prototype.process = function (state) {
        const rules = this.ruler.getRules('');
        for (let i = 0, l = rules.length; i < l; i++) {
            rules[i](state);
        }
    };
    Core.prototype.State = state_core_default;
    var parser_core_default = Core;

    // ../../node_modules/markdown-it/lib/rules_block/state_block.mjs
    function StateBlock(src, md, env, tokens) {
        this.src = src;
        this.md = md;
        this.env = env;
        this.tokens = tokens;
        this.bMarks = [];
        this.eMarks = [];
        this.tShift = [];
        this.sCount = [];
        this.bsCount = [];
        this.blkIndent = 0;
        this.line = 0;
        this.lineMax = 0;
        this.tight = false;
        this.ddIndent = -1;
        this.listIndent = -1;
        this.parentType = 'root';
        this.level = 0;
        const s = this.src;
        for (let start = 0, pos = 0, indent = 0, offset = 0, len = s.length, indent_found = false; pos < len; pos++) {
            const ch = s.charCodeAt(pos);
            if (!indent_found) {
                if (isSpace(ch)) {
                    indent++;
                    if (ch === 9) {
                        offset += 4 - (offset % 4);
                    } else {
                        offset++;
                    }
                    continue;
                } else {
                    indent_found = true;
                }
            }
            if (ch === 10 || pos === len - 1) {
                if (ch !== 10) {
                    pos++;
                }
                this.bMarks.push(start);
                this.eMarks.push(pos);
                this.tShift.push(indent);
                this.sCount.push(offset);
                this.bsCount.push(0);
                indent_found = false;
                indent = 0;
                offset = 0;
                start = pos + 1;
            }
        }
        this.bMarks.push(s.length);
        this.eMarks.push(s.length);
        this.tShift.push(0);
        this.sCount.push(0);
        this.bsCount.push(0);
        this.lineMax = this.bMarks.length - 1;
    }
    StateBlock.prototype.push = function (type, tag, nesting) {
        const token = new token_default(type, tag, nesting);
        token.block = true;
        if (nesting < 0) this.level--;
        token.level = this.level;
        if (nesting > 0) this.level++;
        this.tokens.push(token);
        return token;
    };
    StateBlock.prototype.isEmpty = function isEmpty2(line) {
        return this.bMarks[line] + this.tShift[line] >= this.eMarks[line];
    };
    StateBlock.prototype.skipEmptyLines = function skipEmptyLines(from) {
        for (let max = this.lineMax; from < max; from++) {
            if (this.bMarks[from] + this.tShift[from] < this.eMarks[from]) {
                break;
            }
        }
        return from;
    };
    StateBlock.prototype.skipSpaces = function skipSpaces(pos) {
        for (let max = this.src.length; pos < max; pos++) {
            const ch = this.src.charCodeAt(pos);
            if (!isSpace(ch)) {
                break;
            }
        }
        return pos;
    };
    StateBlock.prototype.skipSpacesBack = function skipSpacesBack(pos, min) {
        if (pos <= min) {
            return pos;
        }
        while (pos > min) {
            if (!isSpace(this.src.charCodeAt(--pos))) {
                return pos + 1;
            }
        }
        return pos;
    };
    StateBlock.prototype.skipChars = function skipChars(pos, code2) {
        for (let max = this.src.length; pos < max; pos++) {
            if (this.src.charCodeAt(pos) !== code2) {
                break;
            }
        }
        return pos;
    };
    StateBlock.prototype.skipCharsBack = function skipCharsBack(pos, code2, min) {
        if (pos <= min) {
            return pos;
        }
        while (pos > min) {
            if (code2 !== this.src.charCodeAt(--pos)) {
                return pos + 1;
            }
        }
        return pos;
    };
    StateBlock.prototype.getLines = function getLines(begin, end, indent, keepLastLF) {
        if (begin >= end) {
            return '';
        }
        const queue = new Array(end - begin);
        for (let i = 0, line = begin; line < end; line++, i++) {
            let lineIndent = 0;
            const lineStart = this.bMarks[line];
            let first = lineStart;
            let last;
            if (line + 1 < end || keepLastLF) {
                last = this.eMarks[line] + 1;
            } else {
                last = this.eMarks[line];
            }
            while (first < last && lineIndent < indent) {
                const ch = this.src.charCodeAt(first);
                if (isSpace(ch)) {
                    if (ch === 9) {
                        lineIndent += 4 - ((lineIndent + this.bsCount[line]) % 4);
                    } else {
                        lineIndent++;
                    }
                } else if (first - lineStart < this.tShift[line]) {
                    lineIndent++;
                } else {
                    break;
                }
                first++;
            }
            if (lineIndent > indent) {
                queue[i] = new Array(lineIndent - indent + 1).join(' ') + this.src.slice(first, last);
            } else {
                queue[i] = this.src.slice(first, last);
            }
        }
        return queue.join('');
    };
    StateBlock.prototype.Token = token_default;
    var state_block_default = StateBlock;

    // ../../node_modules/markdown-it/lib/rules_block/table.mjs
    function getLine(state, line) {
        const pos = state.bMarks[line] + state.tShift[line];
        const max = state.eMarks[line];
        return state.src.slice(pos, max);
    }
    function escapedSplit(str) {
        const result = [];
        const max = str.length;
        let pos = 0;
        let ch = str.charCodeAt(pos);
        let isEscaped = false;
        let lastPos = 0;
        let current = '';
        while (pos < max) {
            if (ch === 124) {
                if (!isEscaped) {
                    result.push(current + str.substring(lastPos, pos));
                    current = '';
                    lastPos = pos + 1;
                } else {
                    current += str.substring(lastPos, pos - 1);
                    lastPos = pos;
                }
            }
            isEscaped = ch === 92;
            pos++;
            ch = str.charCodeAt(pos);
        }
        result.push(current + str.substring(lastPos));
        return result;
    }
    function table(state, startLine, endLine, silent) {
        if (startLine + 2 > endLine) {
            return false;
        }
        let nextLine = startLine + 1;
        if (state.sCount[nextLine] < state.blkIndent) {
            return false;
        }
        if (state.sCount[nextLine] - state.blkIndent >= 4) {
            return false;
        }
        let pos = state.bMarks[nextLine] + state.tShift[nextLine];
        if (pos >= state.eMarks[nextLine]) {
            return false;
        }
        const firstCh = state.src.charCodeAt(pos++);
        if (firstCh !== 124 && firstCh !== 45 && firstCh !== 58) {
            return false;
        }
        if (pos >= state.eMarks[nextLine]) {
            return false;
        }
        const secondCh = state.src.charCodeAt(pos++);
        if (secondCh !== 124 && secondCh !== 45 && secondCh !== 58 && !isSpace(secondCh)) {
            return false;
        }
        if (firstCh === 45 && isSpace(secondCh)) {
            return false;
        }
        while (pos < state.eMarks[nextLine]) {
            const ch = state.src.charCodeAt(pos);
            if (ch !== 124 && ch !== 45 && ch !== 58 && !isSpace(ch)) {
                return false;
            }
            pos++;
        }
        let lineText = getLine(state, startLine + 1);
        let columns = lineText.split('|');
        const aligns = [];
        for (let i = 0; i < columns.length; i++) {
            const t = columns[i].trim();
            if (!t) {
                if (i === 0 || i === columns.length - 1) {
                    continue;
                } else {
                    return false;
                }
            }
            if (!/^:?-+:?$/.test(t)) {
                return false;
            }
            if (t.charCodeAt(t.length - 1) === 58) {
                aligns.push(t.charCodeAt(0) === 58 ? 'center' : 'right');
            } else if (t.charCodeAt(0) === 58) {
                aligns.push('left');
            } else {
                aligns.push('');
            }
        }
        lineText = getLine(state, startLine).trim();
        if (lineText.indexOf('|') === -1) {
            return false;
        }
        if (state.sCount[startLine] - state.blkIndent >= 4) {
            return false;
        }
        columns = escapedSplit(lineText);
        if (columns.length && columns[0] === '') columns.shift();
        if (columns.length && columns[columns.length - 1] === '') columns.pop();
        const columnCount = columns.length;
        if (columnCount === 0 || columnCount !== aligns.length) {
            return false;
        }
        if (silent) {
            return true;
        }
        const oldParentType = state.parentType;
        state.parentType = 'table';
        const terminatorRules = state.md.block.ruler.getRules('blockquote');
        const token_to = state.push('table_open', 'table', 1);
        const tableLines = [startLine, 0];
        token_to.map = tableLines;
        const token_tho = state.push('thead_open', 'thead', 1);
        token_tho.map = [startLine, startLine + 1];
        const token_htro = state.push('tr_open', 'tr', 1);
        token_htro.map = [startLine, startLine + 1];
        for (let i = 0; i < columns.length; i++) {
            const token_ho = state.push('th_open', 'th', 1);
            if (aligns[i]) {
                token_ho.attrs = [['style', 'text-align:' + aligns[i]]];
            }
            const token_il = state.push('inline', '', 0);
            token_il.content = columns[i].trim();
            token_il.children = [];
            state.push('th_close', 'th', -1);
        }
        state.push('tr_close', 'tr', -1);
        state.push('thead_close', 'thead', -1);
        let tbodyLines;
        for (nextLine = startLine + 2; nextLine < endLine; nextLine++) {
            if (state.sCount[nextLine] < state.blkIndent) {
                break;
            }
            let terminate = false;
            for (let i = 0, l = terminatorRules.length; i < l; i++) {
                if (terminatorRules[i](state, nextLine, endLine, true)) {
                    terminate = true;
                    break;
                }
            }
            if (terminate) {
                break;
            }
            lineText = getLine(state, nextLine).trim();
            if (!lineText) {
                break;
            }
            if (state.sCount[nextLine] - state.blkIndent >= 4) {
                break;
            }
            columns = escapedSplit(lineText);
            if (columns.length && columns[0] === '') columns.shift();
            if (columns.length && columns[columns.length - 1] === '') columns.pop();
            if (nextLine === startLine + 2) {
                const token_tbo = state.push('tbody_open', 'tbody', 1);
                token_tbo.map = tbodyLines = [startLine + 2, 0];
            }
            const token_tro = state.push('tr_open', 'tr', 1);
            token_tro.map = [nextLine, nextLine + 1];
            for (let i = 0; i < columnCount; i++) {
                const token_tdo = state.push('td_open', 'td', 1);
                if (aligns[i]) {
                    token_tdo.attrs = [['style', 'text-align:' + aligns[i]]];
                }
                const token_il = state.push('inline', '', 0);
                token_il.content = columns[i] ? columns[i].trim() : '';
                token_il.children = [];
                state.push('td_close', 'td', -1);
            }
            state.push('tr_close', 'tr', -1);
        }
        if (tbodyLines) {
            state.push('tbody_close', 'tbody', -1);
            tbodyLines[1] = nextLine;
        }
        state.push('table_close', 'table', -1);
        tableLines[1] = nextLine;
        state.parentType = oldParentType;
        state.line = nextLine;
        return true;
    }

    // ../../node_modules/markdown-it/lib/rules_block/code.mjs
    function code(state, startLine, endLine) {
        if (state.sCount[startLine] - state.blkIndent < 4) {
            return false;
        }
        let nextLine = startLine + 1;
        let last = nextLine;
        while (nextLine < endLine) {
            if (state.isEmpty(nextLine)) {
                nextLine++;
                continue;
            }
            if (state.sCount[nextLine] - state.blkIndent >= 4) {
                nextLine++;
                last = nextLine;
                continue;
            }
            break;
        }
        state.line = last;
        const token = state.push('code_block', 'code', 0);
        token.content = state.getLines(startLine, last, 4 + state.blkIndent, false) + '\n';
        token.map = [startLine, state.line];
        return true;
    }

    // ../../node_modules/markdown-it/lib/rules_block/fence.mjs
    function fence(state, startLine, endLine, silent) {
        let pos = state.bMarks[startLine] + state.tShift[startLine];
        let max = state.eMarks[startLine];
        if (state.sCount[startLine] - state.blkIndent >= 4) {
            return false;
        }
        if (pos + 3 > max) {
            return false;
        }
        const marker = state.src.charCodeAt(pos);
        if (marker !== 126 && marker !== 96) {
            return false;
        }
        let mem = pos;
        pos = state.skipChars(pos, marker);
        let len = pos - mem;
        if (len < 3) {
            return false;
        }
        const markup = state.src.slice(mem, pos);
        const params = state.src.slice(pos, max);
        if (marker === 96) {
            if (params.indexOf(String.fromCharCode(marker)) >= 0) {
                return false;
            }
        }
        if (silent) {
            return true;
        }
        let nextLine = startLine;
        let haveEndMarker = false;
        for (;;) {
            nextLine++;
            if (nextLine >= endLine) {
                break;
            }
            pos = mem = state.bMarks[nextLine] + state.tShift[nextLine];
            max = state.eMarks[nextLine];
            if (pos < max && state.sCount[nextLine] < state.blkIndent) {
                break;
            }
            if (state.src.charCodeAt(pos) !== marker) {
                continue;
            }
            if (state.sCount[nextLine] - state.blkIndent >= 4) {
                continue;
            }
            pos = state.skipChars(pos, marker);
            if (pos - mem < len) {
                continue;
            }
            pos = state.skipSpaces(pos);
            if (pos < max) {
                continue;
            }
            haveEndMarker = true;
            break;
        }
        len = state.sCount[startLine];
        state.line = nextLine + (haveEndMarker ? 1 : 0);
        const token = state.push('fence', 'code', 0);
        token.info = params;
        token.content = state.getLines(startLine + 1, nextLine, len, true);
        token.markup = markup;
        token.map = [startLine, state.line];
        return true;
    }

    // ../../node_modules/markdown-it/lib/rules_block/blockquote.mjs
    function blockquote(state, startLine, endLine, silent) {
        let pos = state.bMarks[startLine] + state.tShift[startLine];
        let max = state.eMarks[startLine];
        const oldLineMax = state.lineMax;
        if (state.sCount[startLine] - state.blkIndent >= 4) {
            return false;
        }
        if (state.src.charCodeAt(pos) !== 62) {
            return false;
        }
        if (silent) {
            return true;
        }
        const oldBMarks = [];
        const oldBSCount = [];
        const oldSCount = [];
        const oldTShift = [];
        const terminatorRules = state.md.block.ruler.getRules('blockquote');
        const oldParentType = state.parentType;
        state.parentType = 'blockquote';
        let lastLineEmpty = false;
        let nextLine;
        for (nextLine = startLine; nextLine < endLine; nextLine++) {
            const isOutdented = state.sCount[nextLine] < state.blkIndent;
            pos = state.bMarks[nextLine] + state.tShift[nextLine];
            max = state.eMarks[nextLine];
            if (pos >= max) {
                break;
            }
            if (state.src.charCodeAt(pos++) === 62 && !isOutdented) {
                let initial = state.sCount[nextLine] + 1;
                let spaceAfterMarker;
                let adjustTab;
                if (state.src.charCodeAt(pos) === 32) {
                    pos++;
                    initial++;
                    adjustTab = false;
                    spaceAfterMarker = true;
                } else if (state.src.charCodeAt(pos) === 9) {
                    spaceAfterMarker = true;
                    if ((state.bsCount[nextLine] + initial) % 4 === 3) {
                        pos++;
                        initial++;
                        adjustTab = false;
                    } else {
                        adjustTab = true;
                    }
                } else {
                    spaceAfterMarker = false;
                }
                let offset = initial;
                oldBMarks.push(state.bMarks[nextLine]);
                state.bMarks[nextLine] = pos;
                while (pos < max) {
                    const ch = state.src.charCodeAt(pos);
                    if (isSpace(ch)) {
                        if (ch === 9) {
                            offset += 4 - ((offset + state.bsCount[nextLine] + (adjustTab ? 1 : 0)) % 4);
                        } else {
                            offset++;
                        }
                    } else {
                        break;
                    }
                    pos++;
                }
                lastLineEmpty = pos >= max;
                oldBSCount.push(state.bsCount[nextLine]);
                state.bsCount[nextLine] = state.sCount[nextLine] + 1 + (spaceAfterMarker ? 1 : 0);
                oldSCount.push(state.sCount[nextLine]);
                state.sCount[nextLine] = offset - initial;
                oldTShift.push(state.tShift[nextLine]);
                state.tShift[nextLine] = pos - state.bMarks[nextLine];
                continue;
            }
            if (lastLineEmpty) {
                break;
            }
            let terminate = false;
            for (let i = 0, l = terminatorRules.length; i < l; i++) {
                if (terminatorRules[i](state, nextLine, endLine, true)) {
                    terminate = true;
                    break;
                }
            }
            if (terminate) {
                state.lineMax = nextLine;
                if (state.blkIndent !== 0) {
                    oldBMarks.push(state.bMarks[nextLine]);
                    oldBSCount.push(state.bsCount[nextLine]);
                    oldTShift.push(state.tShift[nextLine]);
                    oldSCount.push(state.sCount[nextLine]);
                    state.sCount[nextLine] -= state.blkIndent;
                }
                break;
            }
            oldBMarks.push(state.bMarks[nextLine]);
            oldBSCount.push(state.bsCount[nextLine]);
            oldTShift.push(state.tShift[nextLine]);
            oldSCount.push(state.sCount[nextLine]);
            state.sCount[nextLine] = -1;
        }
        const oldIndent = state.blkIndent;
        state.blkIndent = 0;
        const token_o = state.push('blockquote_open', 'blockquote', 1);
        token_o.markup = '>';
        const lines = [startLine, 0];
        token_o.map = lines;
        state.md.block.tokenize(state, startLine, nextLine);
        const token_c = state.push('blockquote_close', 'blockquote', -1);
        token_c.markup = '>';
        state.lineMax = oldLineMax;
        state.parentType = oldParentType;
        lines[1] = state.line;
        for (let i = 0; i < oldTShift.length; i++) {
            state.bMarks[i + startLine] = oldBMarks[i];
            state.tShift[i + startLine] = oldTShift[i];
            state.sCount[i + startLine] = oldSCount[i];
            state.bsCount[i + startLine] = oldBSCount[i];
        }
        state.blkIndent = oldIndent;
        return true;
    }

    // ../../node_modules/markdown-it/lib/rules_block/hr.mjs
    function hr(state, startLine, endLine, silent) {
        const max = state.eMarks[startLine];
        if (state.sCount[startLine] - state.blkIndent >= 4) {
            return false;
        }
        let pos = state.bMarks[startLine] + state.tShift[startLine];
        const marker = state.src.charCodeAt(pos++);
        if (marker !== 42 && marker !== 45 && marker !== 95) {
            return false;
        }
        let cnt = 1;
        while (pos < max) {
            const ch = state.src.charCodeAt(pos++);
            if (ch !== marker && !isSpace(ch)) {
                return false;
            }
            if (ch === marker) {
                cnt++;
            }
        }
        if (cnt < 3) {
            return false;
        }
        if (silent) {
            return true;
        }
        state.line = startLine + 1;
        const token = state.push('hr', 'hr', 0);
        token.map = [startLine, state.line];
        token.markup = Array(cnt + 1).join(String.fromCharCode(marker));
        return true;
    }

    // ../../node_modules/markdown-it/lib/rules_block/list.mjs
    function skipBulletListMarker(state, startLine) {
        const max = state.eMarks[startLine];
        let pos = state.bMarks[startLine] + state.tShift[startLine];
        const marker = state.src.charCodeAt(pos++);
        if (marker !== 42 && marker !== 45 && marker !== 43) {
            return -1;
        }
        if (pos < max) {
            const ch = state.src.charCodeAt(pos);
            if (!isSpace(ch)) {
                return -1;
            }
        }
        return pos;
    }
    function skipOrderedListMarker(state, startLine) {
        const start = state.bMarks[startLine] + state.tShift[startLine];
        const max = state.eMarks[startLine];
        let pos = start;
        if (pos + 1 >= max) {
            return -1;
        }
        let ch = state.src.charCodeAt(pos++);
        if (ch < 48 || ch > 57) {
            return -1;
        }
        for (;;) {
            if (pos >= max) {
                return -1;
            }
            ch = state.src.charCodeAt(pos++);
            if (ch >= 48 && ch <= 57) {
                if (pos - start >= 10) {
                    return -1;
                }
                continue;
            }
            if (ch === 41 || ch === 46) {
                break;
            }
            return -1;
        }
        if (pos < max) {
            ch = state.src.charCodeAt(pos);
            if (!isSpace(ch)) {
                return -1;
            }
        }
        return pos;
    }
    function markTightParagraphs(state, idx) {
        const level = state.level + 2;
        for (let i = idx + 2, l = state.tokens.length - 2; i < l; i++) {
            if (state.tokens[i].level === level && state.tokens[i].type === 'paragraph_open') {
                state.tokens[i + 2].hidden = true;
                state.tokens[i].hidden = true;
                i += 2;
            }
        }
    }
    function list(state, startLine, endLine, silent) {
        let max, pos, start, token;
        let nextLine = startLine;
        let tight = true;
        if (state.sCount[nextLine] - state.blkIndent >= 4) {
            return false;
        }
        if (state.listIndent >= 0 && state.sCount[nextLine] - state.listIndent >= 4 && state.sCount[nextLine] < state.blkIndent) {
            return false;
        }
        let isTerminatingParagraph = false;
        if (silent && state.parentType === 'paragraph') {
            if (state.sCount[nextLine] >= state.blkIndent) {
                isTerminatingParagraph = true;
            }
        }
        let isOrdered;
        let markerValue;
        let posAfterMarker;
        if ((posAfterMarker = skipOrderedListMarker(state, nextLine)) >= 0) {
            isOrdered = true;
            start = state.bMarks[nextLine] + state.tShift[nextLine];
            markerValue = Number(state.src.slice(start, posAfterMarker - 1));
            if (isTerminatingParagraph && markerValue !== 1) return false;
        } else if ((posAfterMarker = skipBulletListMarker(state, nextLine)) >= 0) {
            isOrdered = false;
        } else {
            return false;
        }
        if (isTerminatingParagraph) {
            if (state.skipSpaces(posAfterMarker) >= state.eMarks[nextLine]) return false;
        }
        if (silent) {
            return true;
        }
        const markerCharCode = state.src.charCodeAt(posAfterMarker - 1);
        const listTokIdx = state.tokens.length;
        if (isOrdered) {
            token = state.push('ordered_list_open', 'ol', 1);
            if (markerValue !== 1) {
                token.attrs = [['start', markerValue]];
            }
        } else {
            token = state.push('bullet_list_open', 'ul', 1);
        }
        const listLines = [nextLine, 0];
        token.map = listLines;
        token.markup = String.fromCharCode(markerCharCode);
        let prevEmptyEnd = false;
        const terminatorRules = state.md.block.ruler.getRules('list');
        const oldParentType = state.parentType;
        state.parentType = 'list';
        while (nextLine < endLine) {
            pos = posAfterMarker;
            max = state.eMarks[nextLine];
            const initial = state.sCount[nextLine] + posAfterMarker - (state.bMarks[nextLine] + state.tShift[nextLine]);
            let offset = initial;
            while (pos < max) {
                const ch = state.src.charCodeAt(pos);
                if (ch === 9) {
                    offset += 4 - ((offset + state.bsCount[nextLine]) % 4);
                } else if (ch === 32) {
                    offset++;
                } else {
                    break;
                }
                pos++;
            }
            const contentStart = pos;
            let indentAfterMarker;
            if (contentStart >= max) {
                indentAfterMarker = 1;
            } else {
                indentAfterMarker = offset - initial;
            }
            if (indentAfterMarker > 4) {
                indentAfterMarker = 1;
            }
            const indent = initial + indentAfterMarker;
            token = state.push('list_item_open', 'li', 1);
            token.markup = String.fromCharCode(markerCharCode);
            const itemLines = [nextLine, 0];
            token.map = itemLines;
            if (isOrdered) {
                token.info = state.src.slice(start, posAfterMarker - 1);
            }
            const oldTight = state.tight;
            const oldTShift = state.tShift[nextLine];
            const oldSCount = state.sCount[nextLine];
            const oldListIndent = state.listIndent;
            state.listIndent = state.blkIndent;
            state.blkIndent = indent;
            state.tight = true;
            state.tShift[nextLine] = contentStart - state.bMarks[nextLine];
            state.sCount[nextLine] = offset;
            if (contentStart >= max && state.isEmpty(nextLine + 1)) {
                state.line = Math.min(state.line + 2, endLine);
            } else {
                state.md.block.tokenize(state, nextLine, endLine, true);
            }
            if (!state.tight || prevEmptyEnd) {
                tight = false;
            }
            prevEmptyEnd = state.line - nextLine > 1 && state.isEmpty(state.line - 1);
            state.blkIndent = state.listIndent;
            state.listIndent = oldListIndent;
            state.tShift[nextLine] = oldTShift;
            state.sCount[nextLine] = oldSCount;
            state.tight = oldTight;
            token = state.push('list_item_close', 'li', -1);
            token.markup = String.fromCharCode(markerCharCode);
            nextLine = state.line;
            itemLines[1] = nextLine;
            if (nextLine >= endLine) {
                break;
            }
            if (state.sCount[nextLine] < state.blkIndent) {
                break;
            }
            if (state.sCount[nextLine] - state.blkIndent >= 4) {
                break;
            }
            let terminate = false;
            for (let i = 0, l = terminatorRules.length; i < l; i++) {
                if (terminatorRules[i](state, nextLine, endLine, true)) {
                    terminate = true;
                    break;
                }
            }
            if (terminate) {
                break;
            }
            if (isOrdered) {
                posAfterMarker = skipOrderedListMarker(state, nextLine);
                if (posAfterMarker < 0) {
                    break;
                }
                start = state.bMarks[nextLine] + state.tShift[nextLine];
            } else {
                posAfterMarker = skipBulletListMarker(state, nextLine);
                if (posAfterMarker < 0) {
                    break;
                }
            }
            if (markerCharCode !== state.src.charCodeAt(posAfterMarker - 1)) {
                break;
            }
        }
        if (isOrdered) {
            token = state.push('ordered_list_close', 'ol', -1);
        } else {
            token = state.push('bullet_list_close', 'ul', -1);
        }
        token.markup = String.fromCharCode(markerCharCode);
        listLines[1] = nextLine;
        state.line = nextLine;
        state.parentType = oldParentType;
        if (tight) {
            markTightParagraphs(state, listTokIdx);
        }
        return true;
    }

    // ../../node_modules/markdown-it/lib/rules_block/reference.mjs
    function reference(state, startLine, _endLine, silent) {
        let lines = 0;
        let pos = state.bMarks[startLine] + state.tShift[startLine];
        let max = state.eMarks[startLine];
        let nextLine = startLine + 1;
        if (state.sCount[startLine] - state.blkIndent >= 4) {
            return false;
        }
        if (state.src.charCodeAt(pos) !== 91) {
            return false;
        }
        while (++pos < max) {
            if (state.src.charCodeAt(pos) === 93 && state.src.charCodeAt(pos - 1) !== 92) {
                if (pos + 1 === max) {
                    return false;
                }
                if (state.src.charCodeAt(pos + 1) !== 58) {
                    return false;
                }
                break;
            }
        }
        const endLine = state.lineMax;
        const terminatorRules = state.md.block.ruler.getRules('reference');
        const oldParentType = state.parentType;
        state.parentType = 'reference';
        for (; nextLine < endLine && !state.isEmpty(nextLine); nextLine++) {
            if (state.sCount[nextLine] - state.blkIndent > 3) {
                continue;
            }
            if (state.sCount[nextLine] < 0) {
                continue;
            }
            let terminate = false;
            for (let i = 0, l = terminatorRules.length; i < l; i++) {
                if (terminatorRules[i](state, nextLine, endLine, true)) {
                    terminate = true;
                    break;
                }
            }
            if (terminate) {
                break;
            }
        }
        const str = state.getLines(startLine, nextLine, state.blkIndent, false).trim();
        max = str.length;
        let labelEnd = -1;
        for (pos = 1; pos < max; pos++) {
            const ch = str.charCodeAt(pos);
            if (ch === 91) {
                return false;
            } else if (ch === 93) {
                labelEnd = pos;
                break;
            } else if (ch === 10) {
                lines++;
            } else if (ch === 92) {
                pos++;
                if (pos < max && str.charCodeAt(pos) === 10) {
                    lines++;
                }
            }
        }
        if (labelEnd < 0 || str.charCodeAt(labelEnd + 1) !== 58) {
            return false;
        }
        for (pos = labelEnd + 2; pos < max; pos++) {
            const ch = str.charCodeAt(pos);
            if (ch === 10) {
                lines++;
            } else if (isSpace(ch)) {
            } else {
                break;
            }
        }
        const destRes = state.md.helpers.parseLinkDestination(str, pos, max);
        if (!destRes.ok) {
            return false;
        }
        const href = state.md.normalizeLink(destRes.str);
        if (!state.md.validateLink(href)) {
            return false;
        }
        pos = destRes.pos;
        lines += destRes.lines;
        const destEndPos = pos;
        const destEndLineNo = lines;
        const start = pos;
        for (; pos < max; pos++) {
            const ch = str.charCodeAt(pos);
            if (ch === 10) {
                lines++;
            } else if (isSpace(ch)) {
            } else {
                break;
            }
        }
        const titleRes = state.md.helpers.parseLinkTitle(str, pos, max);
        let title;
        if (pos < max && start !== pos && titleRes.ok) {
            title = titleRes.str;
            pos = titleRes.pos;
            lines += titleRes.lines;
        } else {
            title = '';
            pos = destEndPos;
            lines = destEndLineNo;
        }
        while (pos < max) {
            const ch = str.charCodeAt(pos);
            if (!isSpace(ch)) {
                break;
            }
            pos++;
        }
        if (pos < max && str.charCodeAt(pos) !== 10) {
            if (title) {
                title = '';
                pos = destEndPos;
                lines = destEndLineNo;
                while (pos < max) {
                    const ch = str.charCodeAt(pos);
                    if (!isSpace(ch)) {
                        break;
                    }
                    pos++;
                }
            }
        }
        if (pos < max && str.charCodeAt(pos) !== 10) {
            return false;
        }
        const label = normalizeReference(str.slice(1, labelEnd));
        if (!label) {
            return false;
        }
        if (silent) {
            return true;
        }
        if (typeof state.env.references === 'undefined') {
            state.env.references = {};
        }
        if (typeof state.env.references[label] === 'undefined') {
            state.env.references[label] = { title, href };
        }
        state.parentType = oldParentType;
        state.line = startLine + lines + 1;
        return true;
    }

    // ../../node_modules/markdown-it/lib/common/html_blocks.mjs
    var html_blocks_default = [
        'address',
        'article',
        'aside',
        'base',
        'basefont',
        'blockquote',
        'body',
        'caption',
        'center',
        'col',
        'colgroup',
        'dd',
        'details',
        'dialog',
        'dir',
        'div',
        'dl',
        'dt',
        'fieldset',
        'figcaption',
        'figure',
        'footer',
        'form',
        'frame',
        'frameset',
        'h1',
        'h2',
        'h3',
        'h4',
        'h5',
        'h6',
        'head',
        'header',
        'hr',
        'html',
        'iframe',
        'legend',
        'li',
        'link',
        'main',
        'menu',
        'menuitem',
        'nav',
        'noframes',
        'ol',
        'optgroup',
        'option',
        'p',
        'param',
        'section',
        'source',
        'summary',
        'table',
        'tbody',
        'td',
        'tfoot',
        'th',
        'thead',
        'title',
        'tr',
        'track',
        'ul'
    ];

    // ../../node_modules/markdown-it/lib/common/html_re.mjs
    var attr_name = '[a-zA-Z_:][a-zA-Z0-9:._-]*';
    var unquoted = '[^"\'=<>`\\x00-\\x20]+';
    var single_quoted = "'[^']*'";
    var double_quoted = '"[^"]*"';
    var attr_value = '(?:' + unquoted + '|' + single_quoted + '|' + double_quoted + ')';
    var attribute = '(?:\\s+' + attr_name + '(?:\\s*=\\s*' + attr_value + ')?)';
    var open_tag = '<[A-Za-z][A-Za-z0-9\\-]*' + attribute + '*\\s*\\/?>';
    var close_tag = '<\\/[A-Za-z][A-Za-z0-9\\-]*\\s*>';
    var comment = '<!---->|<!--(?:-?[^>-])(?:-?[^-])*-->';
    var processing = '<[?][\\s\\S]*?[?]>';
    var declaration = '<![A-Z]+\\s+[^>]*>';
    var cdata = '<!\\[CDATA\\[[\\s\\S]*?\\]\\]>';
    var HTML_TAG_RE = new RegExp('^(?:' + open_tag + '|' + close_tag + '|' + comment + '|' + processing + '|' + declaration + '|' + cdata + ')');
    var HTML_OPEN_CLOSE_TAG_RE = new RegExp('^(?:' + open_tag + '|' + close_tag + ')');

    // ../../node_modules/markdown-it/lib/rules_block/html_block.mjs
    var HTML_SEQUENCES = [
        [/^<(script|pre|style|textarea)(?=(\s|>|$))/i, /<\/(script|pre|style|textarea)>/i, true],
        [/^<!--/, /-->/, true],
        [/^<\?/, /\?>/, true],
        [/^<![A-Z]/, />/, true],
        [/^<!\[CDATA\[/, /\]\]>/, true],
        [new RegExp('^</?(' + html_blocks_default.join('|') + ')(?=(\\s|/?>|$))', 'i'), /^$/, true],
        [new RegExp(HTML_OPEN_CLOSE_TAG_RE.source + '\\s*$'), /^$/, false]
    ];
    function html_block(state, startLine, endLine, silent) {
        let pos = state.bMarks[startLine] + state.tShift[startLine];
        let max = state.eMarks[startLine];
        if (state.sCount[startLine] - state.blkIndent >= 4) {
            return false;
        }
        if (!state.md.options.html) {
            return false;
        }
        if (state.src.charCodeAt(pos) !== 60) {
            return false;
        }
        let lineText = state.src.slice(pos, max);
        let i = 0;
        for (; i < HTML_SEQUENCES.length; i++) {
            if (HTML_SEQUENCES[i][0].test(lineText)) {
                break;
            }
        }
        if (i === HTML_SEQUENCES.length) {
            return false;
        }
        if (silent) {
            return HTML_SEQUENCES[i][2];
        }
        let nextLine = startLine + 1;
        if (!HTML_SEQUENCES[i][1].test(lineText)) {
            for (; nextLine < endLine; nextLine++) {
                if (state.sCount[nextLine] < state.blkIndent) {
                    break;
                }
                pos = state.bMarks[nextLine] + state.tShift[nextLine];
                max = state.eMarks[nextLine];
                lineText = state.src.slice(pos, max);
                if (HTML_SEQUENCES[i][1].test(lineText)) {
                    if (lineText.length !== 0) {
                        nextLine++;
                    }
                    break;
                }
            }
        }
        state.line = nextLine;
        const token = state.push('html_block', '', 0);
        token.map = [startLine, nextLine];
        token.content = state.getLines(startLine, nextLine, state.blkIndent, true);
        return true;
    }

    // ../../node_modules/markdown-it/lib/rules_block/heading.mjs
    function heading(state, startLine, endLine, silent) {
        let pos = state.bMarks[startLine] + state.tShift[startLine];
        let max = state.eMarks[startLine];
        if (state.sCount[startLine] - state.blkIndent >= 4) {
            return false;
        }
        let ch = state.src.charCodeAt(pos);
        if (ch !== 35 || pos >= max) {
            return false;
        }
        let level = 1;
        ch = state.src.charCodeAt(++pos);
        while (ch === 35 && pos < max && level <= 6) {
            level++;
            ch = state.src.charCodeAt(++pos);
        }
        if (level > 6 || (pos < max && !isSpace(ch))) {
            return false;
        }
        if (silent) {
            return true;
        }
        max = state.skipSpacesBack(max, pos);
        const tmp = state.skipCharsBack(max, 35, pos);
        if (tmp > pos && isSpace(state.src.charCodeAt(tmp - 1))) {
            max = tmp;
        }
        state.line = startLine + 1;
        const token_o = state.push('heading_open', 'h' + String(level), 1);
        token_o.markup = '########'.slice(0, level);
        token_o.map = [startLine, state.line];
        const token_i = state.push('inline', '', 0);
        token_i.content = state.src.slice(pos, max).trim();
        token_i.map = [startLine, state.line];
        token_i.children = [];
        const token_c = state.push('heading_close', 'h' + String(level), -1);
        token_c.markup = '########'.slice(0, level);
        return true;
    }

    // ../../node_modules/markdown-it/lib/rules_block/lheading.mjs
    function lheading(state, startLine, endLine) {
        const terminatorRules = state.md.block.ruler.getRules('paragraph');
        if (state.sCount[startLine] - state.blkIndent >= 4) {
            return false;
        }
        const oldParentType = state.parentType;
        state.parentType = 'paragraph';
        let level = 0;
        let marker;
        let nextLine = startLine + 1;
        for (; nextLine < endLine && !state.isEmpty(nextLine); nextLine++) {
            if (state.sCount[nextLine] - state.blkIndent > 3) {
                continue;
            }
            if (state.sCount[nextLine] >= state.blkIndent) {
                let pos = state.bMarks[nextLine] + state.tShift[nextLine];
                const max = state.eMarks[nextLine];
                if (pos < max) {
                    marker = state.src.charCodeAt(pos);
                    if (marker === 45 || marker === 61) {
                        pos = state.skipChars(pos, marker);
                        pos = state.skipSpaces(pos);
                        if (pos >= max) {
                            level = marker === 61 ? 1 : 2;
                            break;
                        }
                    }
                }
            }
            if (state.sCount[nextLine] < 0) {
                continue;
            }
            let terminate = false;
            for (let i = 0, l = terminatorRules.length; i < l; i++) {
                if (terminatorRules[i](state, nextLine, endLine, true)) {
                    terminate = true;
                    break;
                }
            }
            if (terminate) {
                break;
            }
        }
        if (!level) {
            return false;
        }
        const content = state.getLines(startLine, nextLine, state.blkIndent, false).trim();
        state.line = nextLine + 1;
        const token_o = state.push('heading_open', 'h' + String(level), 1);
        token_o.markup = String.fromCharCode(marker);
        token_o.map = [startLine, state.line];
        const token_i = state.push('inline', '', 0);
        token_i.content = content;
        token_i.map = [startLine, state.line - 1];
        token_i.children = [];
        const token_c = state.push('heading_close', 'h' + String(level), -1);
        token_c.markup = String.fromCharCode(marker);
        state.parentType = oldParentType;
        return true;
    }

    // ../../node_modules/markdown-it/lib/rules_block/paragraph.mjs
    function paragraph(state, startLine, endLine) {
        const terminatorRules = state.md.block.ruler.getRules('paragraph');
        const oldParentType = state.parentType;
        let nextLine = startLine + 1;
        state.parentType = 'paragraph';
        for (; nextLine < endLine && !state.isEmpty(nextLine); nextLine++) {
            if (state.sCount[nextLine] - state.blkIndent > 3) {
                continue;
            }
            if (state.sCount[nextLine] < 0) {
                continue;
            }
            let terminate = false;
            for (let i = 0, l = terminatorRules.length; i < l; i++) {
                if (terminatorRules[i](state, nextLine, endLine, true)) {
                    terminate = true;
                    break;
                }
            }
            if (terminate) {
                break;
            }
        }
        const content = state.getLines(startLine, nextLine, state.blkIndent, false).trim();
        state.line = nextLine;
        const token_o = state.push('paragraph_open', 'p', 1);
        token_o.map = [startLine, state.line];
        const token_i = state.push('inline', '', 0);
        token_i.content = content;
        token_i.map = [startLine, state.line];
        token_i.children = [];
        state.push('paragraph_close', 'p', -1);
        state.parentType = oldParentType;
        return true;
    }

    // ../../node_modules/markdown-it/lib/parser_block.mjs
    var _rules2 = [
        // First 2 params - rule name & source. Secondary array - list of rules,
        // which can be terminated by this one.
        ['table', table, ['paragraph', 'reference']],
        ['code', code],
        ['fence', fence, ['paragraph', 'reference', 'blockquote', 'list']],
        ['blockquote', blockquote, ['paragraph', 'reference', 'blockquote', 'list']],
        ['hr', hr, ['paragraph', 'reference', 'blockquote', 'list']],
        ['list', list, ['paragraph', 'reference', 'blockquote']],
        ['reference', reference],
        ['html_block', html_block, ['paragraph', 'reference', 'blockquote']],
        ['heading', heading, ['paragraph', 'reference', 'blockquote']],
        ['lheading', lheading],
        ['paragraph', paragraph]
    ];
    function ParserBlock() {
        this.ruler = new ruler_default();
        for (let i = 0; i < _rules2.length; i++) {
            this.ruler.push(_rules2[i][0], _rules2[i][1], { alt: (_rules2[i][2] || []).slice() });
        }
    }
    ParserBlock.prototype.tokenize = function (state, startLine, endLine) {
        const rules = this.ruler.getRules('');
        const len = rules.length;
        const maxNesting = state.md.options.maxNesting;
        let line = startLine;
        let hasEmptyLines = false;
        while (line < endLine) {
            state.line = line = state.skipEmptyLines(line);
            if (line >= endLine) {
                break;
            }
            if (state.sCount[line] < state.blkIndent) {
                break;
            }
            if (state.level >= maxNesting) {
                state.line = endLine;
                break;
            }
            const prevLine = state.line;
            let ok = false;
            for (let i = 0; i < len; i++) {
                ok = rules[i](state, line, endLine, false);
                if (ok) {
                    if (prevLine >= state.line) {
                        throw new Error("block rule didn't increment state.line");
                    }
                    break;
                }
            }
            if (!ok) throw new Error('none of the block rules matched');
            state.tight = !hasEmptyLines;
            if (state.isEmpty(state.line - 1)) {
                hasEmptyLines = true;
            }
            line = state.line;
            if (line < endLine && state.isEmpty(line)) {
                hasEmptyLines = true;
                line++;
                state.line = line;
            }
        }
    };
    ParserBlock.prototype.parse = function (src, md, env, outTokens) {
        if (!src) {
            return;
        }
        const state = new this.State(src, md, env, outTokens);
        this.tokenize(state, state.line, state.lineMax);
    };
    ParserBlock.prototype.State = state_block_default;
    var parser_block_default = ParserBlock;

    // ../../node_modules/markdown-it/lib/rules_inline/state_inline.mjs
    function StateInline(src, md, env, outTokens) {
        this.src = src;
        this.env = env;
        this.md = md;
        this.tokens = outTokens;
        this.tokens_meta = Array(outTokens.length);
        this.pos = 0;
        this.posMax = this.src.length;
        this.level = 0;
        this.pending = '';
        this.pendingLevel = 0;
        this.cache = {};
        this.delimiters = [];
        this._prev_delimiters = [];
        this.backticks = {};
        this.backticksScanned = false;
        this.linkLevel = 0;
    }
    StateInline.prototype.pushPending = function () {
        const token = new token_default('text', '', 0);
        token.content = this.pending;
        token.level = this.pendingLevel;
        this.tokens.push(token);
        this.pending = '';
        return token;
    };
    StateInline.prototype.push = function (type, tag, nesting) {
        if (this.pending) {
            this.pushPending();
        }
        const token = new token_default(type, tag, nesting);
        let token_meta = null;
        if (nesting < 0) {
            this.level--;
            this.delimiters = this._prev_delimiters.pop();
        }
        token.level = this.level;
        if (nesting > 0) {
            this.level++;
            this._prev_delimiters.push(this.delimiters);
            this.delimiters = [];
            token_meta = { delimiters: this.delimiters };
        }
        this.pendingLevel = this.level;
        this.tokens.push(token);
        this.tokens_meta.push(token_meta);
        return token;
    };
    StateInline.prototype.scanDelims = function (start, canSplitWord) {
        let can_open, can_close;
        let left_flanking = true;
        let right_flanking = true;
        const max = this.posMax;
        const marker = this.src.charCodeAt(start);
        const lastChar = start > 0 ? this.src.charCodeAt(start - 1) : 32;
        let pos = start;
        while (pos < max && this.src.charCodeAt(pos) === marker) {
            pos++;
        }
        const count = pos - start;
        const nextChar = pos < max ? this.src.charCodeAt(pos) : 32;
        const isLastPunctChar = isMdAsciiPunct(lastChar) || isPunctChar(String.fromCharCode(lastChar));
        const isNextPunctChar = isMdAsciiPunct(nextChar) || isPunctChar(String.fromCharCode(nextChar));
        const isLastWhiteSpace = isWhiteSpace(lastChar);
        const isNextWhiteSpace = isWhiteSpace(nextChar);
        if (isNextWhiteSpace) {
            left_flanking = false;
        } else if (isNextPunctChar) {
            if (!(isLastWhiteSpace || isLastPunctChar)) {
                left_flanking = false;
            }
        }
        if (isLastWhiteSpace) {
            right_flanking = false;
        } else if (isLastPunctChar) {
            if (!(isNextWhiteSpace || isNextPunctChar)) {
                right_flanking = false;
            }
        }
        if (!canSplitWord) {
            can_open = left_flanking && (!right_flanking || isLastPunctChar);
            can_close = right_flanking && (!left_flanking || isNextPunctChar);
        } else {
            can_open = left_flanking;
            can_close = right_flanking;
        }
        return { can_open, can_close, length: count };
    };
    StateInline.prototype.Token = token_default;
    var state_inline_default = StateInline;

    // ../../node_modules/markdown-it/lib/rules_inline/text.mjs
    function isTerminatorChar(ch) {
        switch (ch) {
            case 10:
            case 33:
            case 35:
            case 36:
            case 37:
            case 38:
            case 42:
            case 43:
            case 45:
            case 58:
            case 60:
            case 61:
            case 62:
            case 64:
            case 91:
            case 92:
            case 93:
            case 94:
            case 95:
            case 96:
            case 123:
            case 125:
            case 126:
                return true;
            default:
                return false;
        }
    }
    function text(state, silent) {
        let pos = state.pos;
        while (pos < state.posMax && !isTerminatorChar(state.src.charCodeAt(pos))) {
            pos++;
        }
        if (pos === state.pos) {
            return false;
        }
        if (!silent) {
            state.pending += state.src.slice(state.pos, pos);
        }
        state.pos = pos;
        return true;
    }

    // ../../node_modules/markdown-it/lib/rules_inline/linkify.mjs
    var SCHEME_RE = /(?:^|[^a-z0-9.+-])([a-z][a-z0-9.+-]*)$/i;
    function linkify2(state, silent) {
        if (!state.md.options.linkify) return false;
        if (state.linkLevel > 0) return false;
        const pos = state.pos;
        const max = state.posMax;
        if (pos + 3 > max) return false;
        if (state.src.charCodeAt(pos) !== 58) return false;
        if (state.src.charCodeAt(pos + 1) !== 47) return false;
        if (state.src.charCodeAt(pos + 2) !== 47) return false;
        const match2 = state.pending.match(SCHEME_RE);
        if (!match2) return false;
        const proto = match2[1];
        const link2 = state.md.linkify.matchAtStart(state.src.slice(pos - proto.length));
        if (!link2) return false;
        let url = link2.url;
        if (url.length <= proto.length) return false;
        url = url.replace(/\*+$/, '');
        const fullUrl = state.md.normalizeLink(url);
        if (!state.md.validateLink(fullUrl)) return false;
        if (!silent) {
            state.pending = state.pending.slice(0, -proto.length);
            const token_o = state.push('link_open', 'a', 1);
            token_o.attrs = [['href', fullUrl]];
            token_o.markup = 'linkify';
            token_o.info = 'auto';
            const token_t = state.push('text', '', 0);
            token_t.content = state.md.normalizeLinkText(url);
            const token_c = state.push('link_close', 'a', -1);
            token_c.markup = 'linkify';
            token_c.info = 'auto';
        }
        state.pos += url.length - proto.length;
        return true;
    }

    // ../../node_modules/markdown-it/lib/rules_inline/newline.mjs
    function newline(state, silent) {
        let pos = state.pos;
        if (state.src.charCodeAt(pos) !== 10) {
            return false;
        }
        const pmax = state.pending.length - 1;
        const max = state.posMax;
        if (!silent) {
            if (pmax >= 0 && state.pending.charCodeAt(pmax) === 32) {
                if (pmax >= 1 && state.pending.charCodeAt(pmax - 1) === 32) {
                    let ws = pmax - 1;
                    while (ws >= 1 && state.pending.charCodeAt(ws - 1) === 32) ws--;
                    state.pending = state.pending.slice(0, ws);
                    state.push('hardbreak', 'br', 0);
                } else {
                    state.pending = state.pending.slice(0, -1);
                    state.push('softbreak', 'br', 0);
                }
            } else {
                state.push('softbreak', 'br', 0);
            }
        }
        pos++;
        while (pos < max && isSpace(state.src.charCodeAt(pos))) {
            pos++;
        }
        state.pos = pos;
        return true;
    }

    // ../../node_modules/markdown-it/lib/rules_inline/escape.mjs
    var ESCAPED = [];
    for (let i = 0; i < 256; i++) {
        ESCAPED.push(0);
    }
    '\\!"#$%&\'()*+,./:;<=>?@[]^_`{|}~-'.split('').forEach(function (ch) {
        ESCAPED[ch.charCodeAt(0)] = 1;
    });
    function escape2(state, silent) {
        let pos = state.pos;
        const max = state.posMax;
        if (state.src.charCodeAt(pos) !== 92) return false;
        pos++;
        if (pos >= max) return false;
        let ch1 = state.src.charCodeAt(pos);
        if (ch1 === 10) {
            if (!silent) {
                state.push('hardbreak', 'br', 0);
            }
            pos++;
            while (pos < max) {
                ch1 = state.src.charCodeAt(pos);
                if (!isSpace(ch1)) break;
                pos++;
            }
            state.pos = pos;
            return true;
        }
        let escapedStr = state.src[pos];
        if (ch1 >= 55296 && ch1 <= 56319 && pos + 1 < max) {
            const ch2 = state.src.charCodeAt(pos + 1);
            if (ch2 >= 56320 && ch2 <= 57343) {
                escapedStr += state.src[pos + 1];
                pos++;
            }
        }
        const origStr = '\\' + escapedStr;
        if (!silent) {
            const token = state.push('text_special', '', 0);
            if (ch1 < 256 && ESCAPED[ch1] !== 0) {
                token.content = escapedStr;
            } else {
                token.content = origStr;
            }
            token.markup = origStr;
            token.info = 'escape';
        }
        state.pos = pos + 1;
        return true;
    }

    // ../../node_modules/markdown-it/lib/rules_inline/backticks.mjs
    function backtick(state, silent) {
        let pos = state.pos;
        const ch = state.src.charCodeAt(pos);
        if (ch !== 96) {
            return false;
        }
        const start = pos;
        pos++;
        const max = state.posMax;
        while (pos < max && state.src.charCodeAt(pos) === 96) {
            pos++;
        }
        const marker = state.src.slice(start, pos);
        const openerLength = marker.length;
        if (state.backticksScanned && (state.backticks[openerLength] || 0) <= start) {
            if (!silent) state.pending += marker;
            state.pos += openerLength;
            return true;
        }
        let matchEnd = pos;
        let matchStart;
        while ((matchStart = state.src.indexOf('`', matchEnd)) !== -1) {
            matchEnd = matchStart + 1;
            while (matchEnd < max && state.src.charCodeAt(matchEnd) === 96) {
                matchEnd++;
            }
            const closerLength = matchEnd - matchStart;
            if (closerLength === openerLength) {
                if (!silent) {
                    const token = state.push('code_inline', 'code', 0);
                    token.markup = marker;
                    token.content = state.src
                        .slice(pos, matchStart)
                        .replace(/\n/g, ' ')
                        .replace(/^ (.+) $/, '$1');
                }
                state.pos = matchEnd;
                return true;
            }
            state.backticks[closerLength] = matchStart;
        }
        state.backticksScanned = true;
        if (!silent) state.pending += marker;
        state.pos += openerLength;
        return true;
    }

    // ../../node_modules/markdown-it/lib/rules_inline/strikethrough.mjs
    function strikethrough_tokenize(state, silent) {
        const start = state.pos;
        const marker = state.src.charCodeAt(start);
        if (silent) {
            return false;
        }
        if (marker !== 126) {
            return false;
        }
        const scanned = state.scanDelims(state.pos, true);
        let len = scanned.length;
        const ch = String.fromCharCode(marker);
        if (len < 2) {
            return false;
        }
        let token;
        if (len % 2) {
            token = state.push('text', '', 0);
            token.content = ch;
            len--;
        }
        for (let i = 0; i < len; i += 2) {
            token = state.push('text', '', 0);
            token.content = ch + ch;
            state.delimiters.push({
                marker,
                length: 0,
                // disable "rule of 3" length checks meant for emphasis
                token: state.tokens.length - 1,
                end: -1,
                open: scanned.can_open,
                close: scanned.can_close
            });
        }
        state.pos += scanned.length;
        return true;
    }
    function postProcess(state, delimiters) {
        let token;
        const loneMarkers = [];
        const max = delimiters.length;
        for (let i = 0; i < max; i++) {
            const startDelim = delimiters[i];
            if (startDelim.marker !== 126) {
                continue;
            }
            if (startDelim.end === -1) {
                continue;
            }
            const endDelim = delimiters[startDelim.end];
            token = state.tokens[startDelim.token];
            token.type = 's_open';
            token.tag = 's';
            token.nesting = 1;
            token.markup = '~~';
            token.content = '';
            token = state.tokens[endDelim.token];
            token.type = 's_close';
            token.tag = 's';
            token.nesting = -1;
            token.markup = '~~';
            token.content = '';
            if (state.tokens[endDelim.token - 1].type === 'text' && state.tokens[endDelim.token - 1].content === '~') {
                loneMarkers.push(endDelim.token - 1);
            }
        }
        while (loneMarkers.length) {
            const i = loneMarkers.pop();
            let j = i + 1;
            while (j < state.tokens.length && state.tokens[j].type === 's_close') {
                j++;
            }
            j--;
            if (i !== j) {
                token = state.tokens[j];
                state.tokens[j] = state.tokens[i];
                state.tokens[i] = token;
            }
        }
    }
    function strikethrough_postProcess(state) {
        const tokens_meta = state.tokens_meta;
        const max = state.tokens_meta.length;
        postProcess(state, state.delimiters);
        for (let curr = 0; curr < max; curr++) {
            if (tokens_meta[curr] && tokens_meta[curr].delimiters) {
                postProcess(state, tokens_meta[curr].delimiters);
            }
        }
    }
    var strikethrough_default = {
        tokenize: strikethrough_tokenize,
        postProcess: strikethrough_postProcess
    };

    // ../../node_modules/markdown-it/lib/rules_inline/emphasis.mjs
    function emphasis_tokenize(state, silent) {
        const start = state.pos;
        const marker = state.src.charCodeAt(start);
        if (silent) {
            return false;
        }
        if (marker !== 95 && marker !== 42) {
            return false;
        }
        const scanned = state.scanDelims(state.pos, marker === 42);
        for (let i = 0; i < scanned.length; i++) {
            const token = state.push('text', '', 0);
            token.content = String.fromCharCode(marker);
            state.delimiters.push({
                // Char code of the starting marker (number).
                //
                marker,
                // Total length of these series of delimiters.
                //
                length: scanned.length,
                // A position of the token this delimiter corresponds to.
                //
                token: state.tokens.length - 1,
                // If this delimiter is matched as a valid opener, `end` will be
                // equal to its position, otherwise it's `-1`.
                //
                end: -1,
                // Boolean flags that determine if this delimiter could open or close
                // an emphasis.
                //
                open: scanned.can_open,
                close: scanned.can_close
            });
        }
        state.pos += scanned.length;
        return true;
    }
    function postProcess2(state, delimiters) {
        const max = delimiters.length;
        for (let i = max - 1; i >= 0; i--) {
            const startDelim = delimiters[i];
            if (startDelim.marker !== 95 && startDelim.marker !== 42) {
                continue;
            }
            if (startDelim.end === -1) {
                continue;
            }
            const endDelim = delimiters[startDelim.end];
            const isStrong =
                i > 0 &&
                delimiters[i - 1].end === startDelim.end + 1 && // check that first two markers match and adjacent
                delimiters[i - 1].marker === startDelim.marker &&
                delimiters[i - 1].token === startDelim.token - 1 && // check that last two markers are adjacent (we can safely assume they match)
                delimiters[startDelim.end + 1].token === endDelim.token + 1;
            const ch = String.fromCharCode(startDelim.marker);
            const token_o = state.tokens[startDelim.token];
            token_o.type = isStrong ? 'strong_open' : 'em_open';
            token_o.tag = isStrong ? 'strong' : 'em';
            token_o.nesting = 1;
            token_o.markup = isStrong ? ch + ch : ch;
            token_o.content = '';
            const token_c = state.tokens[endDelim.token];
            token_c.type = isStrong ? 'strong_close' : 'em_close';
            token_c.tag = isStrong ? 'strong' : 'em';
            token_c.nesting = -1;
            token_c.markup = isStrong ? ch + ch : ch;
            token_c.content = '';
            if (isStrong) {
                state.tokens[delimiters[i - 1].token].content = '';
                state.tokens[delimiters[startDelim.end + 1].token].content = '';
                i--;
            }
        }
    }
    function emphasis_post_process(state) {
        const tokens_meta = state.tokens_meta;
        const max = state.tokens_meta.length;
        postProcess2(state, state.delimiters);
        for (let curr = 0; curr < max; curr++) {
            if (tokens_meta[curr] && tokens_meta[curr].delimiters) {
                postProcess2(state, tokens_meta[curr].delimiters);
            }
        }
    }
    var emphasis_default = {
        tokenize: emphasis_tokenize,
        postProcess: emphasis_post_process
    };

    // ../../node_modules/markdown-it/lib/rules_inline/link.mjs
    function link(state, silent) {
        let code2, label, res, ref;
        let href = '';
        let title = '';
        let start = state.pos;
        let parseReference = true;
        if (state.src.charCodeAt(state.pos) !== 91) {
            return false;
        }
        const oldPos = state.pos;
        const max = state.posMax;
        const labelStart = state.pos + 1;
        const labelEnd = state.md.helpers.parseLinkLabel(state, state.pos, true);
        if (labelEnd < 0) {
            return false;
        }
        let pos = labelEnd + 1;
        if (pos < max && state.src.charCodeAt(pos) === 40) {
            parseReference = false;
            pos++;
            for (; pos < max; pos++) {
                code2 = state.src.charCodeAt(pos);
                if (!isSpace(code2) && code2 !== 10) {
                    break;
                }
            }
            if (pos >= max) {
                return false;
            }
            start = pos;
            res = state.md.helpers.parseLinkDestination(state.src, pos, state.posMax);
            if (res.ok) {
                href = state.md.normalizeLink(res.str);
                if (state.md.validateLink(href)) {
                    pos = res.pos;
                } else {
                    href = '';
                }
                start = pos;
                for (; pos < max; pos++) {
                    code2 = state.src.charCodeAt(pos);
                    if (!isSpace(code2) && code2 !== 10) {
                        break;
                    }
                }
                res = state.md.helpers.parseLinkTitle(state.src, pos, state.posMax);
                if (pos < max && start !== pos && res.ok) {
                    title = res.str;
                    pos = res.pos;
                    for (; pos < max; pos++) {
                        code2 = state.src.charCodeAt(pos);
                        if (!isSpace(code2) && code2 !== 10) {
                            break;
                        }
                    }
                }
            }
            if (pos >= max || state.src.charCodeAt(pos) !== 41) {
                parseReference = true;
            }
            pos++;
        }
        if (parseReference) {
            if (typeof state.env.references === 'undefined') {
                return false;
            }
            if (pos < max && state.src.charCodeAt(pos) === 91) {
                start = pos + 1;
                pos = state.md.helpers.parseLinkLabel(state, pos);
                if (pos >= 0) {
                    label = state.src.slice(start, pos++);
                } else {
                    pos = labelEnd + 1;
                }
            } else {
                pos = labelEnd + 1;
            }
            if (!label) {
                label = state.src.slice(labelStart, labelEnd);
            }
            ref = state.env.references[normalizeReference(label)];
            if (!ref) {
                state.pos = oldPos;
                return false;
            }
            href = ref.href;
            title = ref.title;
        }
        if (!silent) {
            state.pos = labelStart;
            state.posMax = labelEnd;
            const token_o = state.push('link_open', 'a', 1);
            const attrs = [['href', href]];
            token_o.attrs = attrs;
            if (title) {
                attrs.push(['title', title]);
            }
            state.linkLevel++;
            state.md.inline.tokenize(state);
            state.linkLevel--;
            state.push('link_close', 'a', -1);
        }
        state.pos = pos;
        state.posMax = max;
        return true;
    }

    // ../../node_modules/markdown-it/lib/rules_inline/image.mjs
    function image(state, silent) {
        let code2, content, label, pos, ref, res, title, start;
        let href = '';
        const oldPos = state.pos;
        const max = state.posMax;
        if (state.src.charCodeAt(state.pos) !== 33) {
            return false;
        }
        if (state.src.charCodeAt(state.pos + 1) !== 91) {
            return false;
        }
        const labelStart = state.pos + 2;
        const labelEnd = state.md.helpers.parseLinkLabel(state, state.pos + 1, false);
        if (labelEnd < 0) {
            return false;
        }
        pos = labelEnd + 1;
        if (pos < max && state.src.charCodeAt(pos) === 40) {
            pos++;
            for (; pos < max; pos++) {
                code2 = state.src.charCodeAt(pos);
                if (!isSpace(code2) && code2 !== 10) {
                    break;
                }
            }
            if (pos >= max) {
                return false;
            }
            start = pos;
            res = state.md.helpers.parseLinkDestination(state.src, pos, state.posMax);
            if (res.ok) {
                href = state.md.normalizeLink(res.str);
                if (state.md.validateLink(href)) {
                    pos = res.pos;
                } else {
                    href = '';
                }
            }
            start = pos;
            for (; pos < max; pos++) {
                code2 = state.src.charCodeAt(pos);
                if (!isSpace(code2) && code2 !== 10) {
                    break;
                }
            }
            res = state.md.helpers.parseLinkTitle(state.src, pos, state.posMax);
            if (pos < max && start !== pos && res.ok) {
                title = res.str;
                pos = res.pos;
                for (; pos < max; pos++) {
                    code2 = state.src.charCodeAt(pos);
                    if (!isSpace(code2) && code2 !== 10) {
                        break;
                    }
                }
            } else {
                title = '';
            }
            if (pos >= max || state.src.charCodeAt(pos) !== 41) {
                state.pos = oldPos;
                return false;
            }
            pos++;
        } else {
            if (typeof state.env.references === 'undefined') {
                return false;
            }
            if (pos < max && state.src.charCodeAt(pos) === 91) {
                start = pos + 1;
                pos = state.md.helpers.parseLinkLabel(state, pos);
                if (pos >= 0) {
                    label = state.src.slice(start, pos++);
                } else {
                    pos = labelEnd + 1;
                }
            } else {
                pos = labelEnd + 1;
            }
            if (!label) {
                label = state.src.slice(labelStart, labelEnd);
            }
            ref = state.env.references[normalizeReference(label)];
            if (!ref) {
                state.pos = oldPos;
                return false;
            }
            href = ref.href;
            title = ref.title;
        }
        if (!silent) {
            content = state.src.slice(labelStart, labelEnd);
            const tokens = [];
            state.md.inline.parse(content, state.md, state.env, tokens);
            const token = state.push('image', 'img', 0);
            const attrs = [
                ['src', href],
                ['alt', '']
            ];
            token.attrs = attrs;
            token.children = tokens;
            token.content = content;
            if (title) {
                attrs.push(['title', title]);
            }
        }
        state.pos = pos;
        state.posMax = max;
        return true;
    }

    // ../../node_modules/markdown-it/lib/rules_inline/autolink.mjs
    var EMAIL_RE = /^([a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*)$/;
    var AUTOLINK_RE = /^([a-zA-Z][a-zA-Z0-9+.-]{1,31}):([^<>\x00-\x20]*)$/;
    function autolink(state, silent) {
        let pos = state.pos;
        if (state.src.charCodeAt(pos) !== 60) {
            return false;
        }
        const start = state.pos;
        const max = state.posMax;
        for (;;) {
            if (++pos >= max) return false;
            const ch = state.src.charCodeAt(pos);
            if (ch === 60) return false;
            if (ch === 62) break;
        }
        const url = state.src.slice(start + 1, pos);
        if (AUTOLINK_RE.test(url)) {
            const fullUrl = state.md.normalizeLink(url);
            if (!state.md.validateLink(fullUrl)) {
                return false;
            }
            if (!silent) {
                const token_o = state.push('link_open', 'a', 1);
                token_o.attrs = [['href', fullUrl]];
                token_o.markup = 'autolink';
                token_o.info = 'auto';
                const token_t = state.push('text', '', 0);
                token_t.content = state.md.normalizeLinkText(url);
                const token_c = state.push('link_close', 'a', -1);
                token_c.markup = 'autolink';
                token_c.info = 'auto';
            }
            state.pos += url.length + 2;
            return true;
        }
        if (EMAIL_RE.test(url)) {
            const fullUrl = state.md.normalizeLink('mailto:' + url);
            if (!state.md.validateLink(fullUrl)) {
                return false;
            }
            if (!silent) {
                const token_o = state.push('link_open', 'a', 1);
                token_o.attrs = [['href', fullUrl]];
                token_o.markup = 'autolink';
                token_o.info = 'auto';
                const token_t = state.push('text', '', 0);
                token_t.content = state.md.normalizeLinkText(url);
                const token_c = state.push('link_close', 'a', -1);
                token_c.markup = 'autolink';
                token_c.info = 'auto';
            }
            state.pos += url.length + 2;
            return true;
        }
        return false;
    }

    // ../../node_modules/markdown-it/lib/rules_inline/html_inline.mjs
    function isLinkOpen2(str) {
        return /^<a[>\s]/i.test(str);
    }
    function isLinkClose2(str) {
        return /^<\/a\s*>/i.test(str);
    }
    function isLetter(ch) {
        const lc = ch | 32;
        return lc >= 97 && lc <= 122;
    }
    function html_inline(state, silent) {
        if (!state.md.options.html) {
            return false;
        }
        const max = state.posMax;
        const pos = state.pos;
        if (state.src.charCodeAt(pos) !== 60 || pos + 2 >= max) {
            return false;
        }
        const ch = state.src.charCodeAt(pos + 1);
        if (ch !== 33 && ch !== 63 && ch !== 47 && !isLetter(ch)) {
            return false;
        }
        const match2 = state.src.slice(pos).match(HTML_TAG_RE);
        if (!match2) {
            return false;
        }
        if (!silent) {
            const token = state.push('html_inline', '', 0);
            token.content = match2[0];
            if (isLinkOpen2(token.content)) state.linkLevel++;
            if (isLinkClose2(token.content)) state.linkLevel--;
        }
        state.pos += match2[0].length;
        return true;
    }

    // ../../node_modules/markdown-it/lib/rules_inline/entity.mjs
    var DIGITAL_RE = /^&#((?:x[a-f0-9]{1,6}|[0-9]{1,7}));/i;
    var NAMED_RE = /^&([a-z][a-z0-9]{1,31});/i;
    function entity(state, silent) {
        const pos = state.pos;
        const max = state.posMax;
        if (state.src.charCodeAt(pos) !== 38) return false;
        if (pos + 1 >= max) return false;
        const ch = state.src.charCodeAt(pos + 1);
        if (ch === 35) {
            const match2 = state.src.slice(pos).match(DIGITAL_RE);
            if (match2) {
                if (!silent) {
                    const code2 = match2[1][0].toLowerCase() === 'x' ? parseInt(match2[1].slice(1), 16) : parseInt(match2[1], 10);
                    const token = state.push('text_special', '', 0);
                    token.content = isValidEntityCode(code2) ? fromCodePoint2(code2) : fromCodePoint2(65533);
                    token.markup = match2[0];
                    token.info = 'entity';
                }
                state.pos += match2[0].length;
                return true;
            }
        } else {
            const match2 = state.src.slice(pos).match(NAMED_RE);
            if (match2) {
                const decoded = decodeHTML(match2[0]);
                if (decoded !== match2[0]) {
                    if (!silent) {
                        const token = state.push('text_special', '', 0);
                        token.content = decoded;
                        token.markup = match2[0];
                        token.info = 'entity';
                    }
                    state.pos += match2[0].length;
                    return true;
                }
            }
        }
        return false;
    }

    // ../../node_modules/markdown-it/lib/rules_inline/balance_pairs.mjs
    function processDelimiters(delimiters) {
        const openersBottom = {};
        const max = delimiters.length;
        if (!max) return;
        let headerIdx = 0;
        let lastTokenIdx = -2;
        const jumps = [];
        for (let closerIdx = 0; closerIdx < max; closerIdx++) {
            const closer = delimiters[closerIdx];
            jumps.push(0);
            if (delimiters[headerIdx].marker !== closer.marker || lastTokenIdx !== closer.token - 1) {
                headerIdx = closerIdx;
            }
            lastTokenIdx = closer.token;
            closer.length = closer.length || 0;
            if (!closer.close) continue;
            if (!openersBottom.hasOwnProperty(closer.marker)) {
                openersBottom[closer.marker] = [-1, -1, -1, -1, -1, -1];
            }
            const minOpenerIdx = openersBottom[closer.marker][(closer.open ? 3 : 0) + (closer.length % 3)];
            let openerIdx = headerIdx - jumps[headerIdx] - 1;
            let newMinOpenerIdx = openerIdx;
            for (; openerIdx > minOpenerIdx; openerIdx -= jumps[openerIdx] + 1) {
                const opener = delimiters[openerIdx];
                if (opener.marker !== closer.marker) continue;
                if (opener.open && opener.end < 0) {
                    let isOddMatch = false;
                    if (opener.close || closer.open) {
                        if ((opener.length + closer.length) % 3 === 0) {
                            if (opener.length % 3 !== 0 || closer.length % 3 !== 0) {
                                isOddMatch = true;
                            }
                        }
                    }
                    if (!isOddMatch) {
                        const lastJump = openerIdx > 0 && !delimiters[openerIdx - 1].open ? jumps[openerIdx - 1] + 1 : 0;
                        jumps[closerIdx] = closerIdx - openerIdx + lastJump;
                        jumps[openerIdx] = lastJump;
                        closer.open = false;
                        opener.end = closerIdx;
                        opener.close = false;
                        newMinOpenerIdx = -1;
                        lastTokenIdx = -2;
                        break;
                    }
                }
            }
            if (newMinOpenerIdx !== -1) {
                openersBottom[closer.marker][(closer.open ? 3 : 0) + ((closer.length || 0) % 3)] = newMinOpenerIdx;
            }
        }
    }
    function link_pairs(state) {
        const tokens_meta = state.tokens_meta;
        const max = state.tokens_meta.length;
        processDelimiters(state.delimiters);
        for (let curr = 0; curr < max; curr++) {
            if (tokens_meta[curr] && tokens_meta[curr].delimiters) {
                processDelimiters(tokens_meta[curr].delimiters);
            }
        }
    }

    // ../../node_modules/markdown-it/lib/rules_inline/fragments_join.mjs
    function fragments_join(state) {
        let curr, last;
        let level = 0;
        const tokens = state.tokens;
        const max = state.tokens.length;
        for (curr = last = 0; curr < max; curr++) {
            if (tokens[curr].nesting < 0) level--;
            tokens[curr].level = level;
            if (tokens[curr].nesting > 0) level++;
            if (tokens[curr].type === 'text' && curr + 1 < max && tokens[curr + 1].type === 'text') {
                tokens[curr + 1].content = tokens[curr].content + tokens[curr + 1].content;
            } else {
                if (curr !== last) {
                    tokens[last] = tokens[curr];
                }
                last++;
            }
        }
        if (curr !== last) {
            tokens.length = last;
        }
    }

    // ../../node_modules/markdown-it/lib/parser_inline.mjs
    var _rules3 = [
        ['text', text],
        ['linkify', linkify2],
        ['newline', newline],
        ['escape', escape2],
        ['backticks', backtick],
        ['strikethrough', strikethrough_default.tokenize],
        ['emphasis', emphasis_default.tokenize],
        ['link', link],
        ['image', image],
        ['autolink', autolink],
        ['html_inline', html_inline],
        ['entity', entity]
    ];
    var _rules22 = [
        ['balance_pairs', link_pairs],
        ['strikethrough', strikethrough_default.postProcess],
        ['emphasis', emphasis_default.postProcess],
        // rules for pairs separate '**' into its own text tokens, which may be left unused,
        // rule below merges unused segments back with the rest of the text
        ['fragments_join', fragments_join]
    ];
    function ParserInline() {
        this.ruler = new ruler_default();
        for (let i = 0; i < _rules3.length; i++) {
            this.ruler.push(_rules3[i][0], _rules3[i][1]);
        }
        this.ruler2 = new ruler_default();
        for (let i = 0; i < _rules22.length; i++) {
            this.ruler2.push(_rules22[i][0], _rules22[i][1]);
        }
    }
    ParserInline.prototype.skipToken = function (state) {
        const pos = state.pos;
        const rules = this.ruler.getRules('');
        const len = rules.length;
        const maxNesting = state.md.options.maxNesting;
        const cache = state.cache;
        if (typeof cache[pos] !== 'undefined') {
            state.pos = cache[pos];
            return;
        }
        let ok = false;
        if (state.level < maxNesting) {
            for (let i = 0; i < len; i++) {
                state.level++;
                ok = rules[i](state, true);
                state.level--;
                if (ok) {
                    if (pos >= state.pos) {
                        throw new Error("inline rule didn't increment state.pos");
                    }
                    break;
                }
            }
        } else {
            state.pos = state.posMax;
        }
        if (!ok) {
            state.pos++;
        }
        cache[pos] = state.pos;
    };
    ParserInline.prototype.tokenize = function (state) {
        const rules = this.ruler.getRules('');
        const len = rules.length;
        const end = state.posMax;
        const maxNesting = state.md.options.maxNesting;
        while (state.pos < end) {
            const prevPos = state.pos;
            let ok = false;
            if (state.level < maxNesting) {
                for (let i = 0; i < len; i++) {
                    ok = rules[i](state, false);
                    if (ok) {
                        if (prevPos >= state.pos) {
                            throw new Error("inline rule didn't increment state.pos");
                        }
                        break;
                    }
                }
            }
            if (ok) {
                if (state.pos >= end) {
                    break;
                }
                continue;
            }
            state.pending += state.src[state.pos++];
        }
        if (state.pending) {
            state.pushPending();
        }
    };
    ParserInline.prototype.parse = function (str, md, env, outTokens) {
        const state = new this.State(str, md, env, outTokens);
        this.tokenize(state);
        const rules = this.ruler2.getRules('');
        const len = rules.length;
        for (let i = 0; i < len; i++) {
            rules[i](state);
        }
    };
    ParserInline.prototype.State = state_inline_default;
    var parser_inline_default = ParserInline;

    // ../../node_modules/linkify-it/lib/re.mjs
    function re_default(opts) {
        const re = {};
        opts = opts || {};
        re.src_Any = regex_default.source;
        re.src_Cc = regex_default2.source;
        re.src_Z = regex_default6.source;
        re.src_P = regex_default4.source;
        re.src_ZPCc = [re.src_Z, re.src_P, re.src_Cc].join('|');
        re.src_ZCc = [re.src_Z, re.src_Cc].join('|');
        const text_separators = '[><\uFF5C]';
        re.src_pseudo_letter = '(?:(?!' + text_separators + '|' + re.src_ZPCc + ')' + re.src_Any + ')';
        re.src_ip4 = '(?:(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)';
        re.src_auth = '(?:(?:(?!' + re.src_ZCc + '|[@/\\[\\]()]).)+@)?';
        re.src_port = '(?::(?:6(?:[0-4]\\d{3}|5(?:[0-4]\\d{2}|5(?:[0-2]\\d|3[0-5])))|[1-5]?\\d{1,4}))?';
        re.src_host_terminator =
            '(?=$|' + text_separators + '|' + re.src_ZPCc + ')(?!' + (opts['---'] ? '-(?!--)|' : '-|') + '_|:\\d|\\.-|\\.(?!$|' + re.src_ZPCc + '))';
        re.src_path =
            '(?:[/?#](?:(?!' +
            re.src_ZCc +
            '|' +
            text_separators +
            `|[()[\\]{}.,"'?!\\-;]).|\\[(?:(?!` +
            re.src_ZCc +
            '|\\]).)*\\]|\\((?:(?!' +
            re.src_ZCc +
            '|[)]).)*\\)|\\{(?:(?!' +
            re.src_ZCc +
            '|[}]).)*\\}|\\"(?:(?!' +
            re.src_ZCc +
            `|["]).)+\\"|\\'(?:(?!` +
            re.src_ZCc +
            "|[']).)+\\'|\\'(?=" +
            re.src_pseudo_letter +
            '|[-])|\\.{2,}[a-zA-Z0-9%/&]|\\.(?!' +
            re.src_ZCc +
            '|[.]|$)|' +
            (opts['---'] ? '\\-(?!--(?:[^-]|$))(?:-*)|' : '\\-+|') + // allow `,,,` in paths
            ',(?!' +
            re.src_ZCc +
            '|$)|;(?!' +
            re.src_ZCc +
            '|$)|\\!+(?!' +
            re.src_ZCc +
            '|[!]|$)|\\?(?!' +
            re.src_ZCc +
            '|[?]|$))+|\\/)?';
        re.src_email_name = '[\\-;:&=\\+\\$,\\.a-zA-Z0-9_][\\-;:&=\\+\\$,\\"\\.a-zA-Z0-9_]*';
        re.src_xn = 'xn--[a-z0-9\\-]{1,59}';
        re.src_domain_root = '(?:' + re.src_xn + '|' + re.src_pseudo_letter + '{1,63})'; // Allow letters & digits (http://test1)
        re.src_domain =
            '(?:' +
            re.src_xn +
            '|(?:' +
            re.src_pseudo_letter +
            ')|(?:' +
            re.src_pseudo_letter +
            '(?:-|' +
            re.src_pseudo_letter +
            '){0,61}' +
            re.src_pseudo_letter +
            '))';
        re.src_host = '(?:(?:(?:(?:' + re.src_domain + ')\\.)*' + re.src_domain + '))';
        re.tpl_host_fuzzy = '(?:' + re.src_ip4 + '|(?:(?:(?:' + re.src_domain + ')\\.)+(?:%TLDS%)))';
        re.tpl_host_no_ip_fuzzy = '(?:(?:(?:' + re.src_domain + ')\\.)+(?:%TLDS%))';
        re.src_host_strict = re.src_host + re.src_host_terminator;
        re.tpl_host_fuzzy_strict = re.tpl_host_fuzzy + re.src_host_terminator;
        re.src_host_port_strict = re.src_host + re.src_port + re.src_host_terminator;
        re.tpl_host_port_fuzzy_strict = re.tpl_host_fuzzy + re.src_port + re.src_host_terminator;
        re.tpl_host_port_no_ip_fuzzy_strict = re.tpl_host_no_ip_fuzzy + re.src_port + re.src_host_terminator;
        re.tpl_host_fuzzy_test = 'localhost|www\\.|\\.\\d{1,3}\\.|(?:\\.(?:%TLDS%)(?:' + re.src_ZPCc + '|>|$))';
        re.tpl_email_fuzzy = '(^|' + text_separators + '|"|\\(|' + re.src_ZCc + ')(' + re.src_email_name + '@' + re.tpl_host_fuzzy_strict + ')';
        re.tpl_link_fuzzy = // Fuzzy link can't be prepended with .:/\- and non punctuation.
            // but can start with > (markdown blockquote)
            '(^|(?![.:/\\-_@])(?:[$+<=>^`|\uFF5C]|' + re.src_ZPCc + '))((?![$+<=>^`|\uFF5C])' + re.tpl_host_port_fuzzy_strict + re.src_path + ')';
        re.tpl_link_no_ip_fuzzy = // Fuzzy link can't be prepended with .:/\- and non punctuation.
            // but can start with > (markdown blockquote)
            '(^|(?![.:/\\-_@])(?:[$+<=>^`|\uFF5C]|' + re.src_ZPCc + '))((?![$+<=>^`|\uFF5C])' + re.tpl_host_port_no_ip_fuzzy_strict + re.src_path + ')';
        return re;
    }

    // ../../node_modules/linkify-it/index.mjs
    function assign2(obj) {
        const sources = Array.prototype.slice.call(arguments, 1);
        sources.forEach(function (source) {
            if (!source) {
                return;
            }
            Object.keys(source).forEach(function (key) {
                obj[key] = source[key];
            });
        });
        return obj;
    }
    function _class2(obj) {
        return Object.prototype.toString.call(obj);
    }
    function isString2(obj) {
        return _class2(obj) === '[object String]';
    }
    function isObject(obj) {
        return _class2(obj) === '[object Object]';
    }
    function isRegExp(obj) {
        return _class2(obj) === '[object RegExp]';
    }
    function isFunction(obj) {
        return _class2(obj) === '[object Function]';
    }
    function escapeRE2(str) {
        return str.replace(/[.?*+^$[\]\\(){}|-]/g, '\\$&');
    }
    var defaultOptions = {
        fuzzyLink: true,
        fuzzyEmail: true,
        fuzzyIP: false
    };
    function isOptionsObj(obj) {
        return Object.keys(obj || {}).reduce(function (acc, k) {
            return acc || defaultOptions.hasOwnProperty(k);
        }, false);
    }
    var defaultSchemas = {
        'http:': {
            validate: function (text2, pos, self) {
                const tail = text2.slice(pos);
                if (!self.re.http) {
                    self.re.http = new RegExp('^\\/\\/' + self.re.src_auth + self.re.src_host_port_strict + self.re.src_path, 'i');
                }
                if (self.re.http.test(tail)) {
                    return tail.match(self.re.http)[0].length;
                }
                return 0;
            }
        },
        'https:': 'http:',
        'ftp:': 'http:',
        '//': {
            validate: function (text2, pos, self) {
                const tail = text2.slice(pos);
                if (!self.re.no_http) {
                    self.re.no_http = new RegExp(
                        '^' +
                            self.re.src_auth + // Don't allow single-level domains, because of false positives like '//test'
                            // with code comments
                            '(?:localhost|(?:(?:' +
                            self.re.src_domain +
                            ')\\.)+' +
                            self.re.src_domain_root +
                            ')' +
                            self.re.src_port +
                            self.re.src_host_terminator +
                            self.re.src_path,
                        'i'
                    );
                }
                if (self.re.no_http.test(tail)) {
                    if (pos >= 3 && text2[pos - 3] === ':') {
                        return 0;
                    }
                    if (pos >= 3 && text2[pos - 3] === '/') {
                        return 0;
                    }
                    return tail.match(self.re.no_http)[0].length;
                }
                return 0;
            }
        },
        'mailto:': {
            validate: function (text2, pos, self) {
                const tail = text2.slice(pos);
                if (!self.re.mailto) {
                    self.re.mailto = new RegExp('^' + self.re.src_email_name + '@' + self.re.src_host_strict, 'i');
                }
                if (self.re.mailto.test(tail)) {
                    return tail.match(self.re.mailto)[0].length;
                }
                return 0;
            }
        }
    };
    var tlds_2ch_src_re =
        'a[cdefgilmnoqrstuwxz]|b[abdefghijmnorstvwyz]|c[acdfghiklmnoruvwxyz]|d[ejkmoz]|e[cegrstu]|f[ijkmor]|g[abdefghilmnpqrstuwy]|h[kmnrtu]|i[delmnoqrst]|j[emop]|k[eghimnprwyz]|l[abcikrstuvy]|m[acdeghklmnopqrstuvwxyz]|n[acefgilopruz]|om|p[aefghklmnrstwy]|qa|r[eosuw]|s[abcdeghijklmnortuvxyz]|t[cdfghjklmnortvwz]|u[agksyz]|v[aceginu]|w[fs]|y[et]|z[amw]';
    var tlds_default = 'biz|com|edu|gov|net|org|pro|web|xxx|aero|asia|coop|info|museum|name|shop|\u0440\u0444'.split('|');
    function resetScanCache(self) {
        self.__index__ = -1;
        self.__text_cache__ = '';
    }
    function createValidator(re) {
        return function (text2, pos) {
            const tail = text2.slice(pos);
            if (re.test(tail)) {
                return tail.match(re)[0].length;
            }
            return 0;
        };
    }
    function createNormalizer() {
        return function (match2, self) {
            self.normalize(match2);
        };
    }
    function compile(self) {
        const re = (self.re = re_default(self.__opts__));
        const tlds2 = self.__tlds__.slice();
        self.onCompile();
        if (!self.__tlds_replaced__) {
            tlds2.push(tlds_2ch_src_re);
        }
        tlds2.push(re.src_xn);
        re.src_tlds = tlds2.join('|');
        function untpl(tpl) {
            return tpl.replace('%TLDS%', re.src_tlds);
        }
        re.email_fuzzy = RegExp(untpl(re.tpl_email_fuzzy), 'i');
        re.link_fuzzy = RegExp(untpl(re.tpl_link_fuzzy), 'i');
        re.link_no_ip_fuzzy = RegExp(untpl(re.tpl_link_no_ip_fuzzy), 'i');
        re.host_fuzzy_test = RegExp(untpl(re.tpl_host_fuzzy_test), 'i');
        const aliases = [];
        self.__compiled__ = {};
        function schemaError(name, val) {
            throw new Error('(LinkifyIt) Invalid schema "' + name + '": ' + val);
        }
        Object.keys(self.__schemas__).forEach(function (name) {
            const val = self.__schemas__[name];
            if (val === null) {
                return;
            }
            const compiled = { validate: null, link: null };
            self.__compiled__[name] = compiled;
            if (isObject(val)) {
                if (isRegExp(val.validate)) {
                    compiled.validate = createValidator(val.validate);
                } else if (isFunction(val.validate)) {
                    compiled.validate = val.validate;
                } else {
                    schemaError(name, val);
                }
                if (isFunction(val.normalize)) {
                    compiled.normalize = val.normalize;
                } else if (!val.normalize) {
                    compiled.normalize = createNormalizer();
                } else {
                    schemaError(name, val);
                }
                return;
            }
            if (isString2(val)) {
                aliases.push(name);
                return;
            }
            schemaError(name, val);
        });
        aliases.forEach(function (alias) {
            if (!self.__compiled__[self.__schemas__[alias]]) {
                return;
            }
            self.__compiled__[alias].validate = self.__compiled__[self.__schemas__[alias]].validate;
            self.__compiled__[alias].normalize = self.__compiled__[self.__schemas__[alias]].normalize;
        });
        self.__compiled__[''] = { validate: null, normalize: createNormalizer() };
        const slist = Object.keys(self.__compiled__)
            .filter(function (name) {
                return name.length > 0 && self.__compiled__[name];
            })
            .map(escapeRE2)
            .join('|');
        self.re.schema_test = RegExp('(^|(?!_)(?:[><\uFF5C]|' + re.src_ZPCc + '))(' + slist + ')', 'i');
        self.re.schema_search = RegExp('(^|(?!_)(?:[><\uFF5C]|' + re.src_ZPCc + '))(' + slist + ')', 'ig');
        self.re.schema_at_start = RegExp('^' + self.re.schema_search.source, 'i');
        self.re.pretest = RegExp('(' + self.re.schema_test.source + ')|(' + self.re.host_fuzzy_test.source + ')|@', 'i');
        resetScanCache(self);
    }
    function Match(self, shift) {
        const start = self.__index__;
        const end = self.__last_index__;
        const text2 = self.__text_cache__.slice(start, end);
        this.schema = self.__schema__.toLowerCase();
        this.index = start + shift;
        this.lastIndex = end + shift;
        this.raw = text2;
        this.text = text2;
        this.url = text2;
    }
    function createMatch(self, shift) {
        const match2 = new Match(self, shift);
        self.__compiled__[match2.schema].normalize(match2, self);
        return match2;
    }
    function LinkifyIt(schemas, options) {
        if (!(this instanceof LinkifyIt)) {
            return new LinkifyIt(schemas, options);
        }
        if (!options) {
            if (isOptionsObj(schemas)) {
                options = schemas;
                schemas = {};
            }
        }
        this.__opts__ = assign2({}, defaultOptions, options);
        this.__index__ = -1;
        this.__last_index__ = -1;
        this.__schema__ = '';
        this.__text_cache__ = '';
        this.__schemas__ = assign2({}, defaultSchemas, schemas);
        this.__compiled__ = {};
        this.__tlds__ = tlds_default;
        this.__tlds_replaced__ = false;
        this.re = {};
        compile(this);
    }
    LinkifyIt.prototype.add = function add(schema, definition) {
        this.__schemas__[schema] = definition;
        compile(this);
        return this;
    };
    LinkifyIt.prototype.set = function set(options) {
        this.__opts__ = assign2(this.__opts__, options);
        return this;
    };
    LinkifyIt.prototype.test = function test(text2) {
        this.__text_cache__ = text2;
        this.__index__ = -1;
        if (!text2.length) {
            return false;
        }
        let m, ml, me, len, shift, next, re, tld_pos, at_pos;
        if (this.re.schema_test.test(text2)) {
            re = this.re.schema_search;
            re.lastIndex = 0;
            while ((m = re.exec(text2)) !== null) {
                len = this.testSchemaAt(text2, m[2], re.lastIndex);
                if (len) {
                    this.__schema__ = m[2];
                    this.__index__ = m.index + m[1].length;
                    this.__last_index__ = m.index + m[0].length + len;
                    break;
                }
            }
        }
        if (this.__opts__.fuzzyLink && this.__compiled__['http:']) {
            tld_pos = text2.search(this.re.host_fuzzy_test);
            if (tld_pos >= 0) {
                if (this.__index__ < 0 || tld_pos < this.__index__) {
                    if ((ml = text2.match(this.__opts__.fuzzyIP ? this.re.link_fuzzy : this.re.link_no_ip_fuzzy)) !== null) {
                        shift = ml.index + ml[1].length;
                        if (this.__index__ < 0 || shift < this.__index__) {
                            this.__schema__ = '';
                            this.__index__ = shift;
                            this.__last_index__ = ml.index + ml[0].length;
                        }
                    }
                }
            }
        }
        if (this.__opts__.fuzzyEmail && this.__compiled__['mailto:']) {
            at_pos = text2.indexOf('@');
            if (at_pos >= 0) {
                if ((me = text2.match(this.re.email_fuzzy)) !== null) {
                    shift = me.index + me[1].length;
                    next = me.index + me[0].length;
                    if (this.__index__ < 0 || shift < this.__index__ || (shift === this.__index__ && next > this.__last_index__)) {
                        this.__schema__ = 'mailto:';
                        this.__index__ = shift;
                        this.__last_index__ = next;
                    }
                }
            }
        }
        return this.__index__ >= 0;
    };
    LinkifyIt.prototype.pretest = function pretest(text2) {
        return this.re.pretest.test(text2);
    };
    LinkifyIt.prototype.testSchemaAt = function testSchemaAt(text2, schema, pos) {
        if (!this.__compiled__[schema.toLowerCase()]) {
            return 0;
        }
        return this.__compiled__[schema.toLowerCase()].validate(text2, pos, this);
    };
    LinkifyIt.prototype.match = function match(text2) {
        const result = [];
        let shift = 0;
        if (this.__index__ >= 0 && this.__text_cache__ === text2) {
            result.push(createMatch(this, shift));
            shift = this.__last_index__;
        }
        let tail = shift ? text2.slice(shift) : text2;
        while (this.test(tail)) {
            result.push(createMatch(this, shift));
            tail = tail.slice(this.__last_index__);
            shift += this.__last_index__;
        }
        if (result.length) {
            return result;
        }
        return null;
    };
    LinkifyIt.prototype.matchAtStart = function matchAtStart(text2) {
        this.__text_cache__ = text2;
        this.__index__ = -1;
        if (!text2.length) return null;
        const m = this.re.schema_at_start.exec(text2);
        if (!m) return null;
        const len = this.testSchemaAt(text2, m[2], m[0].length);
        if (!len) return null;
        this.__schema__ = m[2];
        this.__index__ = m.index + m[1].length;
        this.__last_index__ = m.index + m[0].length + len;
        return createMatch(this, 0);
    };
    LinkifyIt.prototype.tlds = function tlds(list2, keepOld) {
        list2 = Array.isArray(list2) ? list2 : [list2];
        if (!keepOld) {
            this.__tlds__ = list2.slice();
            this.__tlds_replaced__ = true;
            compile(this);
            return this;
        }
        this.__tlds__ = this.__tlds__
            .concat(list2)
            .sort()
            .filter(function (el, idx, arr) {
                return el !== arr[idx - 1];
            })
            .reverse();
        compile(this);
        return this;
    };
    LinkifyIt.prototype.normalize = function normalize2(match2) {
        if (!match2.schema) {
            match2.url = 'http://' + match2.url;
        }
        if (match2.schema === 'mailto:' && !/^mailto:/i.test(match2.url)) {
            match2.url = 'mailto:' + match2.url;
        }
    };
    LinkifyIt.prototype.onCompile = function onCompile() {};
    var linkify_it_default = LinkifyIt;

    // ../../node_modules/punycode.js/punycode.es6.js
    var maxInt = 2147483647;
    var base = 36;
    var tMin = 1;
    var tMax = 26;
    var skew = 38;
    var damp = 700;
    var initialBias = 72;
    var initialN = 128;
    var delimiter = '-';
    var regexPunycode = /^xn--/;
    var regexNonASCII = /[^\0-\x7F]/;
    var regexSeparators = /[\x2E\u3002\uFF0E\uFF61]/g;
    var errors = {
        overflow: 'Overflow: input needs wider integers to process',
        'not-basic': 'Illegal input >= 0x80 (not a basic code point)',
        'invalid-input': 'Invalid input'
    };
    var baseMinusTMin = base - tMin;
    var floor = Math.floor;
    var stringFromCharCode = String.fromCharCode;
    function error(type) {
        throw new RangeError(errors[type]);
    }
    function map(array, callback) {
        const result = [];
        let length = array.length;
        while (length--) {
            result[length] = callback(array[length]);
        }
        return result;
    }
    function mapDomain(domain, callback) {
        const parts = domain.split('@');
        let result = '';
        if (parts.length > 1) {
            result = parts[0] + '@';
            domain = parts[1];
        }
        domain = domain.replace(regexSeparators, '.');
        const labels = domain.split('.');
        const encoded = map(labels, callback).join('.');
        return result + encoded;
    }
    function ucs2decode(string) {
        const output = [];
        let counter = 0;
        const length = string.length;
        while (counter < length) {
            const value = string.charCodeAt(counter++);
            if (value >= 55296 && value <= 56319 && counter < length) {
                const extra = string.charCodeAt(counter++);
                if ((extra & 64512) == 56320) {
                    output.push(((value & 1023) << 10) + (extra & 1023) + 65536);
                } else {
                    output.push(value);
                    counter--;
                }
            } else {
                output.push(value);
            }
        }
        return output;
    }
    var ucs2encode = (codePoints) => String.fromCodePoint(...codePoints);
    var basicToDigit = function (codePoint) {
        if (codePoint >= 48 && codePoint < 58) {
            return 26 + (codePoint - 48);
        }
        if (codePoint >= 65 && codePoint < 91) {
            return codePoint - 65;
        }
        if (codePoint >= 97 && codePoint < 123) {
            return codePoint - 97;
        }
        return base;
    };
    var digitToBasic = function (digit, flag) {
        return digit + 22 + 75 * (digit < 26) - ((flag != 0) << 5);
    };
    var adapt = function (delta, numPoints, firstTime) {
        let k = 0;
        delta = firstTime ? floor(delta / damp) : delta >> 1;
        delta += floor(delta / numPoints);
        for (; delta > (baseMinusTMin * tMax) >> 1; k += base) {
            delta = floor(delta / baseMinusTMin);
        }
        return floor(k + ((baseMinusTMin + 1) * delta) / (delta + skew));
    };
    var decode3 = function (input) {
        const output = [];
        const inputLength = input.length;
        let i = 0;
        let n = initialN;
        let bias = initialBias;
        let basic = input.lastIndexOf(delimiter);
        if (basic < 0) {
            basic = 0;
        }
        for (let j = 0; j < basic; ++j) {
            if (input.charCodeAt(j) >= 128) {
                error('not-basic');
            }
            output.push(input.charCodeAt(j));
        }
        for (let index = basic > 0 ? basic + 1 : 0; index < inputLength; ) {
            const oldi = i;
            for (let w = 1, k = base; ; k += base) {
                if (index >= inputLength) {
                    error('invalid-input');
                }
                const digit = basicToDigit(input.charCodeAt(index++));
                if (digit >= base) {
                    error('invalid-input');
                }
                if (digit > floor((maxInt - i) / w)) {
                    error('overflow');
                }
                i += digit * w;
                const t = k <= bias ? tMin : k >= bias + tMax ? tMax : k - bias;
                if (digit < t) {
                    break;
                }
                const baseMinusT = base - t;
                if (w > floor(maxInt / baseMinusT)) {
                    error('overflow');
                }
                w *= baseMinusT;
            }
            const out = output.length + 1;
            bias = adapt(i - oldi, out, oldi == 0);
            if (floor(i / out) > maxInt - n) {
                error('overflow');
            }
            n += floor(i / out);
            i %= out;
            output.splice(i++, 0, n);
        }
        return String.fromCodePoint(...output);
    };
    var encode2 = function (input) {
        const output = [];
        input = ucs2decode(input);
        const inputLength = input.length;
        let n = initialN;
        let delta = 0;
        let bias = initialBias;
        for (const currentValue of input) {
            if (currentValue < 128) {
                output.push(stringFromCharCode(currentValue));
            }
        }
        const basicLength = output.length;
        let handledCPCount = basicLength;
        if (basicLength) {
            output.push(delimiter);
        }
        while (handledCPCount < inputLength) {
            let m = maxInt;
            for (const currentValue of input) {
                if (currentValue >= n && currentValue < m) {
                    m = currentValue;
                }
            }
            const handledCPCountPlusOne = handledCPCount + 1;
            if (m - n > floor((maxInt - delta) / handledCPCountPlusOne)) {
                error('overflow');
            }
            delta += (m - n) * handledCPCountPlusOne;
            n = m;
            for (const currentValue of input) {
                if (currentValue < n && ++delta > maxInt) {
                    error('overflow');
                }
                if (currentValue === n) {
                    let q = delta;
                    for (let k = base; ; k += base) {
                        const t = k <= bias ? tMin : k >= bias + tMax ? tMax : k - bias;
                        if (q < t) {
                            break;
                        }
                        const qMinusT = q - t;
                        const baseMinusT = base - t;
                        output.push(stringFromCharCode(digitToBasic(t + (qMinusT % baseMinusT), 0)));
                        q = floor(qMinusT / baseMinusT);
                    }
                    output.push(stringFromCharCode(digitToBasic(q, 0)));
                    bias = adapt(delta, handledCPCountPlusOne, handledCPCount === basicLength);
                    delta = 0;
                    ++handledCPCount;
                }
            }
            ++delta;
            ++n;
        }
        return output.join('');
    };
    var toUnicode = function (input) {
        return mapDomain(input, function (string) {
            return regexPunycode.test(string) ? decode3(string.slice(4).toLowerCase()) : string;
        });
    };
    var toASCII = function (input) {
        return mapDomain(input, function (string) {
            return regexNonASCII.test(string) ? 'xn--' + encode2(string) : string;
        });
    };
    var punycode = {
        /**
         * A string representing the current Punycode.js version number.
         * @memberOf punycode
         * @type String
         */
        version: '2.3.1',
        /**
         * An object of methods to convert from JavaScript's internal character
         * representation (UCS-2) to Unicode code points, and back.
         * @see <https://mathiasbynens.be/notes/javascript-encoding>
         * @memberOf punycode
         * @type Object
         */
        ucs2: {
            decode: ucs2decode,
            encode: ucs2encode
        },
        decode: decode3,
        encode: encode2,
        toASCII: toASCII,
        toUnicode: toUnicode
    };
    var punycode_es6_default = punycode;

    // ../../node_modules/markdown-it/lib/presets/default.mjs
    var default_default = {
        options: {
            // Enable HTML tags in source
            html: false,
            // Use '/' to close single tags (<br />)
            xhtmlOut: false,
            // Convert '\n' in paragraphs into <br>
            breaks: false,
            // CSS language prefix for fenced blocks
            langPrefix: 'language-',
            // autoconvert URL-like texts to links
            linkify: false,
            // Enable some language-neutral replacements + quotes beautification
            typographer: false,
            // Double + single quotes replacement pairs, when typographer enabled,
            // and smartquotes on. Could be either a String or an Array.
            //
            // For example, you can use '«»„“' for Russian, '„“‚‘' for German,
            // and ['«\xA0', '\xA0»', '‹\xA0', '\xA0›'] for French (including nbsp).
            quotes: '\u201C\u201D\u2018\u2019',
            /* “”‘’ */
            // Highlighter function. Should return escaped HTML,
            // or '' if the source string is not changed and should be escaped externaly.
            // If result starts with <pre... internal wrapper is skipped.
            //
            // function (/*str, lang*/) { return ''; }
            //
            highlight: null,
            // Internal protection, recursion limit
            maxNesting: 100
        },
        components: {
            core: {},
            block: {},
            inline: {}
        }
    };

    // ../../node_modules/markdown-it/lib/presets/zero.mjs
    var zero_default = {
        options: {
            // Enable HTML tags in source
            html: false,
            // Use '/' to close single tags (<br />)
            xhtmlOut: false,
            // Convert '\n' in paragraphs into <br>
            breaks: false,
            // CSS language prefix for fenced blocks
            langPrefix: 'language-',
            // autoconvert URL-like texts to links
            linkify: false,
            // Enable some language-neutral replacements + quotes beautification
            typographer: false,
            // Double + single quotes replacement pairs, when typographer enabled,
            // and smartquotes on. Could be either a String or an Array.
            //
            // For example, you can use '«»„“' for Russian, '„“‚‘' for German,
            // and ['«\xA0', '\xA0»', '‹\xA0', '\xA0›'] for French (including nbsp).
            quotes: '\u201C\u201D\u2018\u2019',
            /* “”‘’ */
            // Highlighter function. Should return escaped HTML,
            // or '' if the source string is not changed and should be escaped externaly.
            // If result starts with <pre... internal wrapper is skipped.
            //
            // function (/*str, lang*/) { return ''; }
            //
            highlight: null,
            // Internal protection, recursion limit
            maxNesting: 20
        },
        components: {
            core: {
                rules: ['normalize', 'block', 'inline', 'text_join']
            },
            block: {
                rules: ['paragraph']
            },
            inline: {
                rules: ['text'],
                rules2: ['balance_pairs', 'fragments_join']
            }
        }
    };

    // ../../node_modules/markdown-it/lib/presets/commonmark.mjs
    var commonmark_default = {
        options: {
            // Enable HTML tags in source
            html: true,
            // Use '/' to close single tags (<br />)
            xhtmlOut: true,
            // Convert '\n' in paragraphs into <br>
            breaks: false,
            // CSS language prefix for fenced blocks
            langPrefix: 'language-',
            // autoconvert URL-like texts to links
            linkify: false,
            // Enable some language-neutral replacements + quotes beautification
            typographer: false,
            // Double + single quotes replacement pairs, when typographer enabled,
            // and smartquotes on. Could be either a String or an Array.
            //
            // For example, you can use '«»„“' for Russian, '„“‚‘' for German,
            // and ['«\xA0', '\xA0»', '‹\xA0', '\xA0›'] for French (including nbsp).
            quotes: '\u201C\u201D\u2018\u2019',
            /* “”‘’ */
            // Highlighter function. Should return escaped HTML,
            // or '' if the source string is not changed and should be escaped externaly.
            // If result starts with <pre... internal wrapper is skipped.
            //
            // function (/*str, lang*/) { return ''; }
            //
            highlight: null,
            // Internal protection, recursion limit
            maxNesting: 20
        },
        components: {
            core: {
                rules: ['normalize', 'block', 'inline', 'text_join']
            },
            block: {
                rules: ['blockquote', 'code', 'fence', 'heading', 'hr', 'html_block', 'lheading', 'list', 'reference', 'paragraph']
            },
            inline: {
                rules: ['autolink', 'backticks', 'emphasis', 'entity', 'escape', 'html_inline', 'image', 'link', 'newline', 'text'],
                rules2: ['balance_pairs', 'emphasis', 'fragments_join']
            }
        }
    };

    // ../../node_modules/markdown-it/lib/index.mjs
    var config = {
        default: default_default,
        zero: zero_default,
        commonmark: commonmark_default
    };
    var BAD_PROTO_RE = /^(vbscript|javascript|file|data):/;
    var GOOD_DATA_RE = /^data:image\/(gif|png|jpeg|webp);/;
    function validateLink(url) {
        const str = url.trim().toLowerCase();
        return BAD_PROTO_RE.test(str) ? GOOD_DATA_RE.test(str) : true;
    }
    var RECODE_HOSTNAME_FOR = ['http:', 'https:', 'mailto:'];
    function normalizeLink(url) {
        const parsed = parse_default(url, true);
        if (parsed.hostname) {
            if (!parsed.protocol || RECODE_HOSTNAME_FOR.indexOf(parsed.protocol) >= 0) {
                try {
                    parsed.hostname = punycode_es6_default.toASCII(parsed.hostname);
                } catch (er) {}
            }
        }
        return encode_default(format2(parsed));
    }
    function normalizeLinkText(url) {
        const parsed = parse_default(url, true);
        if (parsed.hostname) {
            if (!parsed.protocol || RECODE_HOSTNAME_FOR.indexOf(parsed.protocol) >= 0) {
                try {
                    parsed.hostname = punycode_es6_default.toUnicode(parsed.hostname);
                } catch (er) {}
            }
        }
        return decode_default(format2(parsed), decode_default.defaultChars + '%');
    }
    function MarkdownIt(presetName, options) {
        if (!(this instanceof MarkdownIt)) {
            return new MarkdownIt(presetName, options);
        }
        if (!options) {
            if (!isString(presetName)) {
                options = presetName || {};
                presetName = 'default';
            }
        }
        this.inline = new parser_inline_default();
        this.block = new parser_block_default();
        this.core = new parser_core_default();
        this.renderer = new renderer_default();
        this.linkify = new linkify_it_default();
        this.validateLink = validateLink;
        this.normalizeLink = normalizeLink;
        this.normalizeLinkText = normalizeLinkText;
        this.utils = utils_exports;
        this.helpers = assign({}, helpers_exports);
        this.options = {};
        this.configure(presetName);
        if (options) {
            this.set(options);
        }
    }
    MarkdownIt.prototype.set = function (options) {
        assign(this.options, options);
        return this;
    };
    MarkdownIt.prototype.configure = function (presets) {
        const self = this;
        if (isString(presets)) {
            const presetName = presets;
            presets = config[presetName];
            if (!presets) {
                throw new Error('Wrong `markdown-it` preset "' + presetName + '", check name');
            }
        }
        if (!presets) {
            throw new Error("Wrong `markdown-it` preset, can't be empty");
        }
        if (presets.options) {
            self.set(presets.options);
        }
        if (presets.components) {
            Object.keys(presets.components).forEach(function (name) {
                if (presets.components[name].rules) {
                    self[name].ruler.enableOnly(presets.components[name].rules);
                }
                if (presets.components[name].rules2) {
                    self[name].ruler2.enableOnly(presets.components[name].rules2);
                }
            });
        }
        return this;
    };
    MarkdownIt.prototype.enable = function (list2, ignoreInvalid) {
        let result = [];
        if (!Array.isArray(list2)) {
            list2 = [list2];
        }
        ['core', 'block', 'inline'].forEach(function (chain) {
            result = result.concat(this[chain].ruler.enable(list2, true));
        }, this);
        result = result.concat(this.inline.ruler2.enable(list2, true));
        const missed = list2.filter(function (name) {
            return result.indexOf(name) < 0;
        });
        if (missed.length && !ignoreInvalid) {
            throw new Error('MarkdownIt. Failed to enable unknown rule(s): ' + missed);
        }
        return this;
    };
    MarkdownIt.prototype.disable = function (list2, ignoreInvalid) {
        let result = [];
        if (!Array.isArray(list2)) {
            list2 = [list2];
        }
        ['core', 'block', 'inline'].forEach(function (chain) {
            result = result.concat(this[chain].ruler.disable(list2, true));
        }, this);
        result = result.concat(this.inline.ruler2.disable(list2, true));
        const missed = list2.filter(function (name) {
            return result.indexOf(name) < 0;
        });
        if (missed.length && !ignoreInvalid) {
            throw new Error('MarkdownIt. Failed to disable unknown rule(s): ' + missed);
        }
        return this;
    };
    MarkdownIt.prototype.use = function (plugin) {
        const args = [this].concat(Array.prototype.slice.call(arguments, 1));
        plugin.apply(plugin, args);
        return this;
    };
    MarkdownIt.prototype.parse = function (src, env) {
        if (typeof src !== 'string') {
            throw new Error('Input data should be a String');
        }
        const state = new this.core.State(src, this, env);
        this.core.process(state);
        return state.tokens;
    };
    MarkdownIt.prototype.render = function (src, env) {
        env = env || {};
        return this.renderer.render(this.parse(src, env), this.options, env);
    };
    MarkdownIt.prototype.parseInline = function (src, env) {
        const state = new this.core.State(src, this, env);
        state.inlineMode = true;
        this.core.process(state);
        return state.tokens;
    };
    MarkdownIt.prototype.renderInline = function (src, env) {
        env = env || {};
        return this.renderer.render(this.parseInline(src, env), this.options, env);
    };
    var lib_default = MarkdownIt;

    // src/components/html/renderer.ts
    var markdownRenderer = lib_default();
    function markdown(markdown2) {
        return markdownRenderer.render(markdown2);
    }
    var Renderers = {
        markdown
    };

    // src/components/html/Description.tsx
    var import_react = __toESM(require_react());
    var import_jsx_runtime5 = __toESM(require_jsx_runtime());
    function Description(props) {
        const description = (0, import_react.useMemo)(() => getDescriptionHtml(props.description), [props.description]);
        return !!description
            ? /* @__PURE__ */ (0, import_jsx_runtime5.jsx)('div', {
                  id: props.id,
                  className: props.className,
                  dangerouslySetInnerHTML: { __html: description }
              })
            : null;
    }
    function getDescriptionHtml(description) {
        if (!description) {
            return '';
        }
        return Renderers.markdown(description);
    }

    // src/components/FormFieldInstructions.tsx
    var import_jsx_runtime6 = __toESM(require_jsx_runtime());
    function FormFieldInstructions(props) {
        return /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(Description, {
            id: instructionsId(props),
            className: 'form-field-instructions',
            description: props.instructions
        });
    }

    // src/components/FormFieldLabel.tsx
    var import_jsx_runtime7 = __toESM(require_jsx_runtime());
    function FormFieldLabel(props) {
        return /* @__PURE__ */ (0, import_jsx_runtime7.jsx)('div', {
            className: 'form-field-label-container',
            children: /* @__PURE__ */ (0, import_jsx_runtime7.jsx)('label', {
                className: 'form-field-label',
                htmlFor: inputId(props),
                children: /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(RequiredLabelText, {
                    label: props.label,
                    required: props.required,
                    requiredClassName: 'form-field-label-required'
                })
            })
        });
    }
    function RequiredLabelText(props) {
        return /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)(import_jsx_runtime7.Fragment, {
            children: [
                props.label,
                ' ',
                props.required
                    ? /* @__PURE__ */ (0, import_jsx_runtime7.jsx)('abbr', {
                          className: props.requiredClassName,
                          title: localisations.requiredLabel,
                          children: '*'
                      })
                    : ''
            ]
        });
    }

    // src/components/FormCheckbox.tsx
    var import_jsx_runtime8 = __toESM(require_jsx_runtime());
    function FormCheckbox(props) {
        return /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)('div', {
            className: formFieldCss(props, 'checkbox-field'),
            children: [
                /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(FormFieldInstructions, { ...props }),
                /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)('div', {
                    className: 'form-checkbox',
                    children: [
                        props.children,
                        /* @__PURE__ */ (0, import_jsx_runtime8.jsx)('label', {
                            className: 'form-checkbox-label form-checkbox-field-label',
                            htmlFor: inputId(props),
                            children: /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(RequiredLabelText, {
                                label: props.label,
                                required: props.required,
                                requiredClassName: 'form-checkbox-field-label-required'
                            })
                        })
                    ]
                }),
                /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(FormFieldErrors, { ...props }),
                /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(FormFieldFooter, { ...props })
            ]
        });
    }

    // src/components/FormField.tsx
    var import_jsx_runtime9 = __toESM(require_jsx_runtime());
    function FormField(props) {
        return /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)('div', {
            className: formFieldCss(props, 'field'),
            children: [
                /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(FormFieldLabel, { ...props }),
                /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(FormFieldInstructions, { ...props }),
                /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(FormFieldErrors, { ...props }),
                /* @__PURE__ */ (0, import_jsx_runtime9.jsx)('div', { className: 'form-field-input-container', children: props.children }),
                /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(FormFieldFooter, { ...props })
            ]
        });
    }

    // src/components/FormFieldset.tsx
    var import_jsx_runtime10 = __toESM(require_jsx_runtime());
    function FormFieldset(props) {
        return /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)('fieldset', {
            className: formFieldCss(props, 'fieldset'),
            'aria-describedby': instructionsId(props),
            children: [
                /* @__PURE__ */ (0, import_jsx_runtime10.jsx)('legend', {
                    className: 'form-field-legend',
                    children: /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(RequiredLabelText, {
                        label: props.label,
                        required: props.required,
                        requiredClassName: 'form-field-legend-required'
                    })
                }),
                /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(FormFieldInstructions, { ...props }),
                /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(FormFieldErrors, { ...props }),
                /* @__PURE__ */ (0, import_jsx_runtime10.jsx)('div', { className: 'form-fieldset-input-container', children: props.children })
            ]
        });
    }

    // src/components/inputs/CheckboxInput.tsx
    var import_jsx_runtime11 = __toESM(require_jsx_runtime());
    function CheckboxInput({ inputValue, onChange, onBlur, onFocus, ...attrs }) {
        const onInputChange = ($event) => {
            onChange($event.target.checked);
        };
        return /* @__PURE__ */ (0, import_jsx_runtime11.jsx)('input', {
            type: 'checkbox',
            ...inputAttrs(attrs, 'checkbox', {}),
            checked: !!inputValue,
            onChange: onInputChange,
            onFocus,
            onBlur
        });
    }

    // src/components/inputs/DateInput.tsx
    var import_jsx_runtime12 = __toESM(require_jsx_runtime());
    function DateInput({ inputValue, onChange, onBlur, onFocus, ...attrs }) {
        const onInputChange = ($event) => {
            const date = DateTime.parseDate($event.target.value);
            onChange($event.target.value, date);
        };
        return /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(import_jsx_runtime12.Fragment, {
            children: /* @__PURE__ */ (0, import_jsx_runtime12.jsx)('input', {
                type: 'text',
                ...inputAttrs(attrs, 'date', { autoComplete: 'bday' }),
                value: textValue(inputValue),
                onChange: onInputChange,
                onFocus,
                onBlur
            })
        });
    }

    // src/components/inputs/DateTimeInput.tsx
    var import_jsx_runtime13 = __toESM(require_jsx_runtime());
    function DateTimeInput({ inputValue, onChange, onBlur, onFocus, ...attrs }) {
        const onInputChange = ($event) => {
            const date = DateTime.parseDateTime($event.target.value);
            onChange($event.target.value, date);
        };
        return /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(import_jsx_runtime13.Fragment, {
            children: /* @__PURE__ */ (0, import_jsx_runtime13.jsx)('input', {
                type: 'text',
                ...inputAttrs(attrs, 'date-time', { autoComplete: 'bday' }),
                value: textValue(inputValue),
                onChange: onInputChange,
                onFocus,
                onBlur
            })
        });
    }

    // src/components/inputs/DecimalInput.tsx
    var import_jsx_runtime14 = __toESM(require_jsx_runtime());
    function DecimalInput({ inputValue, onChange, onBlur, onFocus, ...attrs }) {
        const onInputChange = ($event) => {
            const inputValue2 = $event.target.value;
            const decimalValue = !!inputValue2 ? Number(inputValue2) : null;
            const value = Number.isNaN(decimalValue) ? inputValue2 : decimalValue;
            onChange(inputValue2, value);
        };
        return /* @__PURE__ */ (0, import_jsx_runtime14.jsx)('input', {
            type: 'text',
            ...inputAttrs(attrs, 'decimal', { placeholder: true }),
            spellCheck: 'false',
            value: textValue(inputValue),
            onChange: onInputChange,
            onFocus,
            onBlur
        });
    }

    // src/components/inputs/EmailInput.tsx
    var import_jsx_runtime15 = __toESM(require_jsx_runtime());
    function EmailInput({ inputValue, onChange, onBlur, onFocus, ...attrs }) {
        const onInputChange = ($event) => {
            onChange($event.target.value);
        };
        return /* @__PURE__ */ (0, import_jsx_runtime15.jsx)('input', {
            type: 'email',
            ...inputAttrs(attrs, 'email', { autoComplete: 'email', placeholder: true }),
            spellCheck: 'false',
            value: textValue(inputValue),
            onChange: onInputChange,
            onFocus,
            onBlur
        });
    }

    // src/components/inputs/IntegerInput.tsx
    var import_jsx_runtime16 = __toESM(require_jsx_runtime());
    function IntegerInput({ inputValue, onChange, onBlur, onFocus, ...attrs }) {
        const onInputChange = ($event) => {
            const inputValue2 = $event.target.value;
            const integerValue = !!inputValue2 ? Number(inputValue2) : null;
            const value = Number.isNaN(integerValue) ? inputValue2 : integerValue;
            onChange(inputValue2, value);
        };
        return /* @__PURE__ */ (0, import_jsx_runtime16.jsx)('input', {
            type: 'text',
            ...inputAttrs(attrs, 'integer', { placeholder: true }),
            spellCheck: 'false',
            inputMode: 'numeric',
            pattern: '[0-9]*',
            value: textValue(inputValue),
            onChange: onInputChange,
            onFocus,
            onBlur
        });
    }

    // src/components/inputs/MultiSelectInput.tsx
    var import_jsx_runtime17 = __toESM(require_jsx_runtime());
    function MultiSelectInput({ value: unknownValue, options, inputRef, htmlId, onChange, onBlur, onFocus }) {
        const value = unknownValue;
        const onInputChange = ($event) => {
            let newValue = value || [];
            if ($event.target.checked) {
                if (!newValue.includes($event.target.value)) {
                    onChange([...newValue, $event.target.value]);
                }
            } else {
                if (newValue.includes($event.target.value)) {
                    onChange(newValue.filter((v) => v !== $event.target.value));
                }
            }
        };
        return /* @__PURE__ */ (0, import_jsx_runtime17.jsx)('div', {
            className: 'form-checkbox-list',
            children: options?.map((option, index) =>
                /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)(
                    'div',
                    {
                        className: 'form-checkbox',
                        children: [
                            /* @__PURE__ */ (0, import_jsx_runtime17.jsx)('input', {
                                type: 'checkbox',
                                ref: index === 0 ? inputRef : void 0,
                                className: 'form-checkbox-input',
                                id: option.htmlId,
                                name: htmlId,
                                value: option.value,
                                checked: !!value?.includes(option.value),
                                onChange: onInputChange,
                                onFocus,
                                onBlur
                            }),
                            /* @__PURE__ */ (0, import_jsx_runtime17.jsx)('label', {
                                className: 'form-checkbox-label',
                                htmlFor: option.htmlId,
                                children: option.label
                            })
                        ]
                    },
                    option.key
                )
            )
        });
    }

    // src/components/inputs/MultilineInput.tsx
    var import_jsx_runtime18 = __toESM(require_jsx_runtime());
    function MultilineInput({ inputValue, onChange, onBlur, onFocus, ...attrs }) {
        const onInputChange = ($event) => {
            onChange($event.target.value);
        };
        return /* @__PURE__ */ (0, import_jsx_runtime18.jsx)('textarea', {
            ...inputAttrs(attrs, 'multiline', { placeholder: true }),
            value: textValue(inputValue),
            onChange: onInputChange,
            onFocus,
            onBlur
        });
    }

    // src/components/inputs/RadioInput.tsx
    var import_jsx_runtime19 = __toESM(require_jsx_runtime());
    function RadioInput({ onChange, options, htmlId, inputRef, value, onBlur, onFocus }) {
        const onInputChange = ($event) => {
            onChange($event.target.value);
        };
        return /* @__PURE__ */ (0, import_jsx_runtime19.jsx)('div', {
            className: 'form-radio-list',
            children: options?.map((option, index) =>
                /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)(
                    'div',
                    {
                        className: 'form-radio',
                        children: [
                            /* @__PURE__ */ (0, import_jsx_runtime19.jsx)('input', {
                                type: 'radio',
                                ref: index === 0 ? inputRef : void 0,
                                className: 'form-radio-input',
                                id: option.htmlId,
                                name: htmlId,
                                value: option.value,
                                checked: value === option.value,
                                onChange: onInputChange,
                                onFocus,
                                onBlur
                            }),
                            /* @__PURE__ */ (0, import_jsx_runtime19.jsx)('label', {
                                className: 'form-radio-label',
                                htmlFor: option.htmlId,
                                children: option.label
                            })
                        ]
                    },
                    option.key
                )
            )
        });
    }

    // src/components/inputs/ReferenceInput.tsx
    function ReferenceInput() {
        return null;
    }

    // src/components/inputs/SelectInput.tsx
    var import_jsx_runtime20 = __toESM(require_jsx_runtime());
    function SelectInput({ inputValue, options, onChange, onBlur, onFocus, ...attrs }) {
        const onInputChange = ($event) => {
            onChange($event.target.value);
        };
        return /* @__PURE__ */ (0, import_jsx_runtime20.jsx)('select', {
            ...inputAttrs(attrs, 'select', {}),
            value: textValue(inputValue),
            onChange: onInputChange,
            onFocus,
            onBlur,
            children: options?.map((option) =>
                /* @__PURE__ */ (0, import_jsx_runtime20.jsx)('option', { value: option.value, children: option.label }, option.key)
            )
        });
    }

    // src/components/inputs/TelInput.tsx
    var import_jsx_runtime21 = __toESM(require_jsx_runtime());
    function TelInput({ inputValue, onChange, onBlur, onFocus, ...attrs }) {
        const onInputChange = ($event) => {
            onChange($event.target.value);
        };
        return /* @__PURE__ */ (0, import_jsx_runtime21.jsx)('input', {
            type: 'tel',
            ...inputAttrs(attrs, 'tel', { autoComplete: 'tel', placeholder: true }),
            spellCheck: 'false',
            value: textValue(inputValue),
            onChange: onInputChange,
            onFocus,
            onBlur
        });
    }

    // src/components/inputs/TextInput.tsx
    var import_jsx_runtime22 = __toESM(require_jsx_runtime());
    function TextInput({ inputValue, onChange, onBlur, onFocus, ...attrs }) {
        const onInputChange = ($event) => {
            onChange($event.target.value);
        };
        return /* @__PURE__ */ (0, import_jsx_runtime22.jsx)('input', {
            type: 'text',
            ...inputAttrs(attrs, 'text', { placeholder: true }),
            value: textValue(inputValue),
            onChange: onInputChange,
            onFocus,
            onBlur
        });
    }

    // src/components/inputs/TimeInput.tsx
    var import_jsx_runtime23 = __toESM(require_jsx_runtime());
    function TimeInput({ inputValue, onChange, onBlur, onFocus, ...attrs }) {
        const onInputChange = ($event) => {
            const time = DateTime.parseTime($event.target.value);
            onChange($event.target.value, time);
        };
        return /* @__PURE__ */ (0, import_jsx_runtime23.jsx)(import_jsx_runtime23.Fragment, {
            children: /* @__PURE__ */ (0, import_jsx_runtime23.jsx)('input', {
                type: 'text',
                ...inputAttrs(attrs, 'time', { autoComplete: 'off', placeholder: false }),
                value: textValue(inputValue),
                onChange: onInputChange,
                onFocus,
                onBlur
            })
        });
    }

    // src/components/inputs/UrlInput.tsx
    var import_jsx_runtime24 = __toESM(require_jsx_runtime());
    function UrlInput({ inputValue, onChange, onBlur, onFocus, ...attrs }) {
        const onInputChange = ($event) => {
            onChange($event.target.value);
        };
        return /* @__PURE__ */ (0, import_jsx_runtime24.jsx)('input', {
            type: 'url',
            ...inputAttrs(attrs, 'url', { autoComplete: 'url', placeholder: true }),
            spellCheck: 'false',
            value: textValue(inputValue),
            onChange: onInputChange,
            onFocus,
            onBlur
        });
    }

    // src/components/inputs/defaults.ts
    var DEFAULT_INPUTS = {
        checkbox: CheckboxInput,
        date: DateInput,
        datetime: DateTimeInput,
        decimal: DecimalInput,
        email: EmailInput,
        integer: IntegerInput,
        multiline: MultilineInput,
        multiselect: MultiSelectInput,
        radio: RadioInput,
        reference: ReferenceInput,
        select: SelectInput,
        tel: TelInput,
        text: TextInput,
        time: TimeInput,
        url: UrlInput
    };

    // src/components/FormFieldContainer.tsx
    var import_jsx_runtime25 = __toESM(require_jsx_runtime());
    var DEFAULT_CONTAINERS_TYPES = {
        checkbox: 'checkbox',
        date: 'control',
        datetime: 'control',
        decimal: 'control',
        email: 'control',
        integer: 'control',
        multiline: 'control',
        multiselect: 'fieldset',
        radio: 'fieldset',
        reference: 'control',
        select: 'control',
        tel: 'control',
        text: 'control',
        time: 'control',
        url: 'control'
    };
    var DEFAULT_CONTAINERS = {
        checkbox: FormCheckbox,
        control: FormField,
        fieldset: FormFieldset
    };
    function FormFieldContainer({ field, formHtmlId, formValue, formInputValue, formErrors, showErrors, inputRefs, setValue, setInputValue, setFocussed }) {
        const htmlId = `${formHtmlId}-${field.id}`;
        const editor = Fields.getEditorType(field);
        const errors2 = formErrors?.[field.id];
        const errorMessages = Errors.getErrorMessages(errors2);
        const formFieldContainer = DEFAULT_CONTAINERS_TYPES[editor];
        const inputProps = {
            htmlId,
            id: field.id,
            label: field?.editor?.label || field.name,
            instructions: field?.editor?.instructions,
            autoFill: field?.editor?.properties?.autoFill,
            placeholder: field?.editor?.properties?.placeholderText,
            rows: field?.editor?.properties?.rows,
            labelPosition: field?.editor?.properties?.labelPosition,
            cssClass: field?.editor?.properties?.cssClass,
            hidden: !!field?.editor?.properties?.readOnly || !!field?.editor?.properties?.hidden || editor === 'reference',
            options: Fields.getOptions(field, htmlId),
            field,
            editor,
            required: !!field?.validations?.required,
            maxLength: field?.validations?.maxLength?.value,
            inputValue: formInputValue?.[field.id],
            value: formValue?.[field.id],
            errors: errors2,
            errorMessages,
            errorMessage: errorMessages?.length ? errorMessages[0] : null,
            showErrors,
            inputRef: inputRefs?.[field.id],
            onChange: (inputValue, value) => {
                value = typeof value === 'undefined' ? inputValue : value;
                setInputValue(field.id, inputValue);
                setValue(field.id, value);
            },
            onFocus: () => {
                setFocussed(field.id, true);
            },
            onBlur: () => {
                setFocussed(field.id, false);
            }
        };
        const Field = DEFAULT_CONTAINERS[formFieldContainer];
        const Input = DEFAULT_INPUTS[inputProps.editor];
        return inputProps.hidden
            ? null
            : /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(Field, {
                  ...inputProps,
                  children: /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(Input, { ...inputProps })
              });
    }

    // src/components/FormValidationSummary.tsx
    var import_react2 = __toESM(require_react());
    var import_jsx_runtime26 = __toESM(require_jsx_runtime());
    function FormValidationSummary({ currentPage, form, showErrors, formErrors, inputRefs }) {
        const errors2 = getErrors({ currentPage, showErrors, formErrors });
        const summaryRef = (0, import_react2.useRef)(null);
        const localizations = Form.getLocalizations(form);
        const onNavigateToError = (e, id) => {
            e.preventDefault();
            inputRefs[id]?.current?.focus();
        };
        const onBlur = () => {
            if (summaryRef.current) {
                summaryRef.current.removeAttribute('tabindex');
            }
        };
        (0, import_react2.useEffect)(() => {
            if (!errors2.valid && summaryRef.current) {
                summaryRef.current.setAttribute('tabindex', '-1');
                summaryRef.current.focus();
            }
        }, [errors2.valid]);
        return errors2.valid
            ? null
            : /* @__PURE__ */ (0, import_jsx_runtime26.jsx)('div', {
                  className: 'form-validation-summary',
                  ref: summaryRef,
                  onBlur,
                  children: /* @__PURE__ */ (0, import_jsx_runtime26.jsxs)('div', {
                      role: 'alert',
                      children: [
                          /* @__PURE__ */ (0, import_jsx_runtime26.jsx)('h3', {
                              className: 'form-validation-summary-title',
                              children: localizations.errorSummaryTitle
                          }),
                          /* @__PURE__ */ (0, import_jsx_runtime26.jsx)('div', {
                              className: 'form-validation-summary-body',
                              children: /* @__PURE__ */ (0, import_jsx_runtime26.jsx)('ul', {
                                  className: 'form-validation-summary-list',
                                  children: errors2.errors.map((error2, index) =>
                                      /* @__PURE__ */ (0, import_jsx_runtime26.jsx)(
                                          'li',
                                          {
                                              children: /* @__PURE__ */ (0, import_jsx_runtime26.jsx)('a', {
                                                  href: `#${error2.id}`,
                                                  onClick: (e) => onNavigateToError(e, error2.id),
                                                  children: error2.message
                                              })
                                          },
                                          index
                                      )
                                  )
                              })
                          })
                      ]
                  })
              });
    }
    function getErrors({ currentPage, showErrors, formErrors }) {
        if (!showErrors || !formErrors) {
            return {
                valid: true,
                errors: []
            };
        }
        const errors2 = currentPage.fields
            .map(({ id }) => ({ id, messages: Errors.getErrorMessages(formErrors[id]) }))
            .reduce((prev, { id, messages }) => {
                if (messages?.length) {
                    prev = [...prev, ...(messages?.map((message) => ({ id, message })) || [])];
                }
                return prev;
            }, []);
        if (!errors2?.length) {
            return {
                valid: true,
                errors: []
            };
        }
        return {
            valid: false,
            errors: errors2
        };
    }

    // src/components/FormCurrentPage.tsx
    var import_jsx_runtime27 = __toESM(require_jsx_runtime());
    function FormCurrentPage({
        currentPage,
        form,
        formHtmlId,
        formValue,
        formInputValue,
        formErrors,
        showErrors,
        setFocussed,
        setInputValue,
        setValue,
        inputRefs
    }) {
        return /* @__PURE__ */ (0, import_jsx_runtime27.jsxs)('div', {
            className: 'form-current-page',
            children: [
                /* @__PURE__ */ (0, import_jsx_runtime27.jsxs)('div', {
                    className: 'form-current-page-header',
                    children: [
                        /* @__PURE__ */ (0, import_jsx_runtime27.jsx)('h3', { className: 'form-current-page-title', children: currentPage?.title }),
                        /* @__PURE__ */ (0, import_jsx_runtime27.jsx)(Description, {
                            className: 'form-current-page-description',
                            description: currentPage.description
                        })
                    ]
                }),
                /* @__PURE__ */ (0, import_jsx_runtime27.jsx)(FormValidationSummary, { currentPage, form, showErrors, formErrors, inputRefs }),
                /* @__PURE__ */ (0, import_jsx_runtime27.jsx)('div', {
                    className: 'form-fields-container',
                    children: currentPage?.fields
                        ? currentPage.fields.map((field) =>
                              /* @__PURE__ */ (0, import_jsx_runtime27.jsx)(
                                  FormFieldContainer,
                                  {
                                      field,
                                      formHtmlId,
                                      formValue,
                                      formInputValue,
                                      formErrors,
                                      showErrors,
                                      inputRefs,
                                      setFocussed,
                                      setInputValue,
                                      setValue
                                  },
                                  field.id
                              )
                          )
                        : null
                })
            ]
        });
    }

    // src/components/FormProgress.tsx
    var import_jsx_runtime28 = __toESM(require_jsx_runtime());
    function FormProgress({ formHtmlId, pageCount, currentPage }) {
        const pageProgress = format(localisations.pagingMessage, currentPage.pageNo, pageCount);
        const id = progressId(formHtmlId);
        return pageCount > 1
            ? /* @__PURE__ */ (0, import_jsx_runtime28.jsxs)('div', {
                  className: 'form-progress',
                  children: [
                      /* @__PURE__ */ (0, import_jsx_runtime28.jsx)('label', { htmlFor: id, className: 'form-progress-label', children: pageProgress }),
                      /* @__PURE__ */ (0, import_jsx_runtime28.jsx)('progress', {
                          id,
                          className: 'form-progress-indicator',
                          value: currentPage.pageNo,
                          max: pageCount
                      })
                  ]
              })
            : null;
    }

    // src/components/FormTitle.tsx
    var import_jsx_runtime29 = __toESM(require_jsx_runtime());
    function FormTitle({ form }) {
        return /* @__PURE__ */ (0, import_jsx_runtime29.jsxs)('div', {
            className: 'form-header',
            children: [
                /* @__PURE__ */ (0, import_jsx_runtime29.jsx)('h3', { className: 'form-title', children: form?.name }),
                /* @__PURE__ */ (0, import_jsx_runtime29.jsx)(Description, { className: 'form-description', description: form?.description })
            ]
        });
    }

    // src/components/FormLoader.tsx
    var import_jsx_runtime30 = __toESM(require_jsx_runtime());
    function FormLoader({
        loading,
        error: error2,
        onFormSubmit,
        isLoading,
        apiError,
        form,
        versionStatus,
        formHtmlId,
        pageIndex,
        pageCount,
        currentPage,
        previousPage,
        formValue,
        formInputValue,
        formErrors,
        showErrors,
        inputRefs,
        setValue,
        setInputValue,
        setFocussed
    }) {
        if (isLoading) {
            return loading || /* @__PURE__ */ (0, import_jsx_runtime30.jsx)(FormLoading, {});
        }
        if (apiError) {
            return error2 ? error2(apiError) : /* @__PURE__ */ (0, import_jsx_runtime30.jsx)(FormLoadError, { error: apiError });
        }
        if (form?.properties?.captcha && Version.isPublishedVersion(versionStatus) && !Api.isLoggedIn()) {
            Captcha.load(form.properties.captcha);
        }
        return /* @__PURE__ */ (0, import_jsx_runtime30.jsxs)('form', {
            noValidate: true,
            onSubmit: onFormSubmit,
            children: [
                /* @__PURE__ */ (0, import_jsx_runtime30.jsx)(FormTitle, { form }),
                /* @__PURE__ */ (0, import_jsx_runtime30.jsx)(FormProgress, { formHtmlId, pageCount, currentPage }),
                /* @__PURE__ */ (0, import_jsx_runtime30.jsx)(FormCurrentPage, {
                    currentPage,
                    form,
                    formHtmlId,
                    formValue,
                    formInputValue,
                    formErrors,
                    showErrors,
                    inputRefs,
                    setFocussed,
                    setInputValue,
                    setValue
                }),
                /* @__PURE__ */ (0, import_jsx_runtime30.jsx)(FormButtons, { pageIndex, pageCount, form, currentPage, previousPage })
            ]
        });
    }
    function FormLoading() {
        return /* @__PURE__ */ (0, import_jsx_runtime30.jsx)('div', { className: 'form-loading', children: localisations.formLoading });
    }
    function FormLoadError(props) {
        return /* @__PURE__ */ (0, import_jsx_runtime30.jsx)('div', {
            className: 'form-load-error',
            children: props?.error?.message || localisations.formLoadError
        });
    }

    // #style-inject:#style-inject
    function styleInject(css, { insertAt } = {}) {
        if (!css || typeof document === 'undefined') return;
        const head = document.head || document.getElementsByTagName('head')[0];
        const style = document.createElement('style');
        style.type = 'text/css';
        if (insertAt === 'top') {
            if (head.firstChild) {
                head.insertBefore(style, head.firstChild);
            } else {
                head.appendChild(style);
            }
        } else {
            head.appendChild(style);
        }
        if (style.styleSheet) {
            style.styleSheet.cssText = css;
        } else {
            style.appendChild(document.createTextNode(css));
        }
    }

    // src/css/ContensisForm.css
    styleInject(
        '.contensis-form {\n  --global-font-family: system-ui, sans-serif;\n  --global-font-size: 1rem;\n  --global-font-weight-bold: 600;\n  --global-font-size-label: 1.1875rem;\n  --color-accent: #00857e;\n  --color-border: #949494;\n  --color-border-subtle: #dbdbdb;\n  --color-error: #d4351c;\n  --color-focus: #4c9aff;\n  --color-progress: var(--color-accent);\n  --color-bg-light: #fff;\n  --color-bg-subtle: #fafafa;\n  --color-text: #444;\n  --color-text-subtle: #595959;\n  --color-text-title: var(--color-text);\n  --color-text-description: var(--color-text-subtle);\n  --color-text-label: var(--color-text);\n  --color-text-hint: var(--color-text-subtle);\n  --color-text-error: var(--color-error);\n  --size-outline: 0.1875rem;\n  --size-border: 0.1875rem;\n  --size-border-small: 0.125rem;\n  --size-border-large: 0.375rem;\n  --size-border-radius: 0.1875rem;\n  --form-bg-color: var(--color-bg-subtle);\n  --form-border-radius: var(--size-border-radius);\n  --form-width: calc(68ch + 2ch + 0.125em);\n  --form-text-size-title: calc(var(--global-font-size) * 2);\n  --form-text-size-subtitle: calc(var(--global-font-size) * 1.5);\n  --form-text-size-description: var(--global-font-size);\n  --form-text-size-toolbar-title: var(--global-font-size);\n  --form-text-size-toolbar-small: calc(14 / var(--global-font-size));\n  --form-current-page-title-font-size: var(--form-text-size-subtitle);\n  --form-current-page-description-font-size: var(--form-text-size-description);\n  --form-progress-label-color: var(--color-text-label);\n  --form-progress-label-font-size: var(--global-font-size);\n  --form-progress-bar-bg-color: #fff;\n  --form-progress-value-bg-color: var(--color-progress);\n  --form-progress-border-radius: var(--size-dimension-8);\n  --form-field-text-color: var(--color-text);\n  --form-field-bg-color: var(--color-bg-light);\n  --form-field-hover-bg-color: #effefc;\n  --form-field-error-bg-color: #f9d7d7;\n  --form-field-border-color: var(--color-border);\n  --form-field-border-focus-color: var(--color-accent);\n  --form-field-border-error-color: var(--color-error);\n  --form-field-border-width: var(--size-border-small);\n  --form-field-border-radius: var(--size-border-radius);\n  --form-field-padding: var(--size-space-8);\n  --form-field-border-width-error: var(--size-dimension-4);\n  --btn-background: var(--color-bg-light);\n  --btn-text-color: var(--color-text);\n  --btn-font-size: var(--global-font-size);\n  --btn-font-weight: var(--global-font-weight-bold);\n  --btn-padding-block: var(--size-space-8);\n  --btn-padding-inline: var(--size-space-12);\n  --btn-border-color: var(--color-border);\n  --btn-border-radius: var(--size-border-radius);\n  --btn-border-width: var(--size-border);\n  --btn-primary-bg-color: var(--color-accent);\n  --btn-primary-bg-color-hover: #006c67;\n  --btn-primary-bg-color-focus: #006c67;\n  --btn-primary-bg-color-disabled: #949494;\n  --btn-primary-border-color: var(--color-accent);\n  --btn-primary-border-color-hover: #006c67;\n  --btn-primary-border-color-focus: #006c67;\n  --btn-primary-border-color-disabled: #949494;\n  --btn-primary-text-color: #fff;\n  --btn-primary-text-color-hover: #fff;\n  --btn-primary-text-color-focus: #fff;\n  --btn-primary-text-color-disabled: #fff;\n  --btn-secondary-bg-color: #ffffff;\n  --btn-secondary-bg-color-hover: #f0f0f0;\n  --btn-secondary-bg-color-focus: #ffffff;\n  --btn-secondary-bg-color-disabled: #949494;\n  --btn-secondary-border-color: #dbdbdb;\n  --btn-secondary-border-color-hover: #dbdbdb;\n  --btn-secondary-border-color-focus: #dbdbdb;\n  --btn-secondary-border-color-disabled: #c9c9c9;\n  --btn-secondary-text-color: #262626;\n  --btn-secondary-text-color-hover: #262626;\n  --btn-secondary-text-color-focus: #262626;\n  --btn-secondary-text-color-disabled: #ffffff;\n  --text-preset-5: 1rem;\n  --text-preset-6: 0.875rem;\n  --size-space-4: 0.25rem;\n  --size-space-8: 0.5rem;\n  --size-space-12: 0.75rem;\n  --size-space-16: 1rem;\n  --size-space-24: 1.5rem;\n  --size-space-32: 2rem;\n  --size-dimension-4: 0.25rem;\n  --size-dimension-8: 0.5rem;\n  --size-dimension-24: 1.5rem;\n  --size-dimension-32: 2rem;\n  --size-dimension-40: 2.5rem;\n  --size-width-25: 25%;\n  --size-width-33: 33.33%;\n  --size-width-50: 50%;\n  --size-width-66: 66.66%;\n  --size-width-75: 75%;\n  --size-width-100: 100%;\n  --size-width-ch-2: calc(2ch + 2ch + var(--size-border));\n  --size-width-ch-3: calc(3ch + 2ch + var(--size-border));\n  --size-width-ch-4: calc(4ch + 2ch + var(--size-border));\n  --size-width-ch-5: calc(5ch + 2ch + var(--size-border));\n  --size-width-ch-10: calc(10ch + 2ch + var(--size-border));\n  --size-width-ch-20: calc(20ch + 2ch + var(--size-border));\n  --size-width-ch-30: calc(30ch + 2ch + var(--size-border));\n  .form {\n    --background-color: var(--form-bg-color);\n    --font-size: var(--global-font-size);\n    --border-radius: var(--form-border-radius);\n    --width: var(--form-width);\n    display: flex;\n    flex-direction: column;\n    background-color: var(--background-color);\n    font-size: var(--font-size);\n    border-radius: var(--border-radius);\n    margin: 3em auto;\n    inline-size: var(--size-width-100);\n    max-inline-size: var(--width);\n  }\n  label,\n  legend {\n    padding: 0;\n  }\n  .form-load-error {\n    color: var(--color-text-error);\n  }\n  .form-header {\n    padding-block-end: var(--size-space-24);\n  }\n  .form-title {\n    font-size: var(--form-text-size-title);\n    padding-block-end: var(--size-space-8);\n    color: var(--color-text-title);\n  }\n  .form-description {\n    font-size: var(--form-text-size-description);\n    color: var(--color-text-description);\n  }\n  .form-current-page {\n    display: flex;\n    flex-direction: column;\n    gap: var(--size-space-32);\n  }\n  .form-current-page-header {\n    display: flex;\n    flex-direction: column;\n    gap: var(--size-space-8);\n  }\n  .form-current-page-title {\n    --font-size: var(--form-current-page-title-font-size);\n    --font-weight: var(--global-font-weight-bold);\n    font-size: var(--font-size);\n    font-weight: var(--font-weight);\n    margin: 0;\n    color: var(--color-text-title);\n  }\n  .form-current-page-description {\n    --font-size: var(--form-current-page-description-font-size);\n    font-size: var(--font-size);\n    color: var(--color-text-description);\n    & p {\n      margin: 0;\n    }\n  }\n  .form-fields-container {\n    display: flex;\n    flex-direction: column;\n    gap: var(--size-space-32);\n  }\n  .form-fieldset {\n    display: flex;\n    flex-direction: column;\n    gap: var(--size-space-4);\n    border: none;\n    padding: 0;\n  }\n  .form-fieldset-has-error {\n    border-inline-start: var(--form-field-border-width-error) solid var(--color-error);\n    padding-inline-start: var(--size-space-16);\n    & .form-field-label-required,\n    & .form-field-legend-required {\n      color: var(--color-error);\n    }\n  }\n  .form-field {\n    display: flex;\n    flex-direction: column;\n    gap: var(--size-space-4);\n  }\n  .form-field-has-error {\n    border-inline-start: var(--form-field-border-width-error) solid var(--color-error);\n    padding-inline-start: var(--size-space-16);\n    & .form-field-label-required,\n    & .form-field-legend-required {\n      color: var(--color-error);\n    }\n  }\n  .form-field-label,\n  .form-field-legend {\n    font-size: var(--global-font-size-label);\n    color: var(--color-text-label);\n    font-weight: var(--global-font-weight-bold);\n    display: block;\n    text-wrap: pretty;\n  }\n  .form-field-legend {\n    margin-block-end: var(--size-space-4);\n  }\n  .form-field-error {\n    color: var(--color-text-error);\n    font-weight: var(--global-font-weight-bold);\n  }\n  .form-field-label-required,\n  .form-field-legend-required {\n    text-decoration: none;\n  }\n  .form-field-instructions {\n    color: var(--color-text-subtle);\n    line-height: 1.5;\n    margin-block-end: var(--size-space-8);\n    text-wrap: pretty;\n    & p {\n      margin: 0;\n    }\n  }\n  .form-checkbox-field {\n    display: flex;\n    flex-direction: column;\n    gap: var(--size-space-4);\n  }\n  .form-checkbox-field-has-error {\n    border-inline-start: var(--form-field-border-width-error) solid var(--color-error);\n    padding-inline-start: var(--size-space-16);\n  }\n  .form-checkbox-field-label,\n  .form-checkbox-field-legend {\n    font-size: var(--global-font-size-label);\n    color: var(--color-text-label);\n    font-weight: var(--global-font-weight-bold);\n    margin-inline-start: var(--size-space-12);\n    align-self: center;\n  }\n  .form-checkbox-field-label-required {\n    text-decoration: none;\n  }\n  .form-checkbox-field-error {\n    color: var(--color-text-error);\n    font-weight: var(--global-font-weight-bold);\n  }\n  .form-checkbox-field-instructions {\n    color: var(--color-text-subtle);\n    line-height: 1.5;\n    margin-block-end: var(--size-space-8);\n  }\n  .form-validation-summary {\n    border: var(--size-border) solid var(--color-error);\n    background-color: var(--color-bg-light);\n    padding: var(--size-space-16);\n    &:focus {\n      outline: var(--size-outline) solid var(--color-focus);\n      outline-offset: 0;\n    }\n  }\n  .form-validation-summary-title {\n    font-size: var(--form-text-size-subtitle);\n    margin-block-start: 0;\n  }\n  .form-validation-summary-list {\n    color: var(--color-text-error);\n    font-weight: var(--global-font-weight-bold);\n    list-style-type: none;\n    padding-inline-start: 0;\n    margin: 0;\n    & a {\n      color: var(--color-text-error);\n    }\n  }\n  .form-footer {\n    display: flex;\n    justify-content: space-between;\n  }\n  .form-footer-page {\n    align-self: center;\n  }\n  .form-actions {\n    display: flex;\n    gap: var(--size-space-16);\n    justify-content: flex-end;\n    padding-block: var(--size-space-32);\n  }\n  .form-button {\n    border: var(--btn-border-width) solid var(--btn-border-color);\n    border-radius: var(--btn-border-radius);\n    padding: var(--btn-padding-block) var(--btn-padding-inline);\n    font-size: var(--btn-font-size);\n    font-weight: var(--btn-font-weight);\n    &:focus {\n      outline: var(--size-outline) solid var(--color-focus);\n      outline-offset: 0;\n    }\n  }\n  .form-button--primary {\n    background-color: var(--btn-primary-bg-color);\n    color: var(--btn-primary-text-color);\n    border-color: var(--btn-primary-border-color);\n    &:hover {\n      background-color: var(--btn-primary-bg-color-hover);\n      border-color: var(--btn-primary-border-color-hover);\n      color: var(--btn-primary-text-color-hover);\n    }\n    &:focus {\n      background-color: var(--btn-primary-bg-color-focus);\n      border-color: var(--btn-primary-border-color-focus);\n      color: var(--btn-primary-text-color-focus);\n    }\n    &:disabled {\n      background-color: var(--btn-primary-bg-color-disabled);\n      color: var(--btn-primary-text-color-disabled);\n      border-color: var(--btn-primary-border-color-disabled);\n    }\n  }\n  .form-button--secondary {\n    background-color: var(--btn-secondary-bg-color);\n    color: var(--btn-secondary-text-color);\n    border-color: var(--btn-secondary-border-color);\n    &:hover {\n      background-color: var(--btn-secondary-bg-color-hover);\n      border-color: var(--btn-secondary-border-color-hover);\n      color: var(--btn-secondary-text-color-hover);\n    }\n    &:focus {\n      background-color: var(--btn-secondary-bg-color-focus);\n      border-color: var(--btn-secondary-border-color-focus);\n      color: var(--btn-secondary-text-color-focus);\n    }\n    &:disabled {\n      background-color: var(--btn-secondary-bg-color-disabled);\n      color: var(--btn-secondary-text-color-disabled);\n      border-color: var(--btn-secondary-border-color-disabled);\n    }\n  }\n  .form-text-input,\n  .form-email-input,\n  .form-tel-input,\n  .form-url-input,\n  .form-select-input,\n  .form-multiline-input,\n  .form-integer-input,\n  .form-decimal-input,\n  .form-date-input,\n  .form-date-time-input,\n  .form-time-input,\n  .form-date-day-input,\n  .form-date-month-input,\n  .form-date-year-input,\n  .form-date-hour-input,\n  .form-date-minute-input {\n    --width: var(--size-width-100);\n    padding: var(--form-field-padding);\n    inline-size: var(--width);\n    border: var(--form-field-border-width) solid var(--form-field-border-color);\n    border-radius: var(--form-field-border-radius);\n    min-block-size: var(--size-dimension-40);\n    font-size: var(--global-font-size);\n    background-color: var(--form-field-bg-color);\n    &:hover {\n      background-color: var(--form-field-hover-bg-color);\n    }\n  }\n  .form-text-input:focus,\n  .form-email-input:focus,\n  .form-tel-input:focus,\n  .form-url-input:focus,\n  .form-select-input:focus,\n  .form-radio-input:focus,\n  .form-checkbox-input:focus,\n  .form-multiline-input:focus,\n  .form-integer-input:focus,\n  .form-decimal-input:focus,\n  .form-date-input:focus,\n  .form-date-time-input:focus,\n  .form-time-input:focus,\n  .form-date-day-input:focus,\n  .form-date-month-input:focus,\n  .form-date-year-input:focus,\n  .form-date-hour-input:focus,\n  .form-date-minute-input:focus {\n    outline: var(--size-outline) solid var(--color-focus);\n    outline-offset: 0;\n    box-shadow: inset 0 0 0 0.0625em var(--form-field-border-focus-color);\n    border-color: var(--form-field-border-focus-color);\n  }\n  .form-text-input.form-text-input-has-error,\n  .form-email-input.form-email-input-has-error,\n  .form-tel-input.form-tel-input-has-error,\n  .form-url-input.form-url-input-has-error,\n  .form-select-input.form-select-input-has-error,\n  .form-multiline-input.form-multiline-input-has-error,\n  .form-integer-input.form-integer-input-has-error,\n  .form-decimal-input.form-decimal-input-has-error,\n  .form-date-input.form-date-input-has-error,\n  .form-date-time-input.form-date-time-input-has-error,\n  .form-time-input.form-time-input-has-error,\n  .form-date-day-input.form-date-day-input-has-error,\n  .form-date-month-input.form-date-month-input-has-error,\n  .form-date-year-input.form-date-year-input-has-error,\n  .form-date-hour-input.form-date-hour-input-has-error,\n  .form-date-minute-input.form-date-minute-input-has-error {\n    border: var(--form-field-border-width) solid var(--color-error);\n    box-shadow: inset 0 0 0 0.0625em var(--form-field-border-error-color);\n    background-color: var(--form-field-error-bg-color);\n  }\n  .form-select-input {\n    -webkit-appearance: none;\n    background-image: url(data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%23000000%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E);\n    background-repeat: no-repeat, repeat;\n    background-position: right 0.7em top 50%, 0 0;\n    background-size: 0.65em auto, 100%;\n    background-color: var(--form-field-bg-color);\n    padding-inline-end: var(--size-space-32);\n  }\n  .form-radio-list {\n    display: flex;\n    flex-direction: column;\n    gap: var(--size-space-16);\n  }\n  .form-radio {\n    display: flex;\n  }\n  .form-radio-label {\n    margin-inline-start: var(--size-space-12);\n    align-self: center;\n  }\n  .form-radio-input {\n    inline-size: var(--size-dimension-32);\n    block-size: var(--size-dimension-32);\n    border: var(--form-field-border-width) solid var(--form-field-border-color);\n    accent-color: var(--color-accent);\n    margin: 0;\n  }\n  .form-checkbox-list {\n    display: flex;\n    flex-direction: column;\n    gap: var(--size-space-16);\n  }\n  .form-checkbox {\n    display: flex;\n  }\n  .form-checkbox-label {\n    margin-inline-start: var(--size-space-12);\n    align-self: center;\n  }\n  .form-checkbox-input {\n    inline-size: var(--size-dimension-32);\n    block-size: var(--size-dimension-32);\n    border: var(--form-field-border-width) solid var(--form-field-border-color);\n    accent-color: var(--color-accent);\n    margin: 0;\n  }\n  .form-date-item {\n    display: inline-block;\n  }\n  .form-date-day-input,\n  .form-date-hour-input,\n  .form-date-minute-input {\n    max-inline-size: var(--size-width-ch-2);\n  }\n  .form-date-month-input {\n    max-inline-size: var(--size-width-ch-3);\n  }\n  .form-date-year-input {\n    max-inline-size: var(--size-width-ch-4);\n  }\n  .form-time-input {\n    max-inline-size: var(--size-width-ch-10);\n  }\n  .form-date-input {\n    max-inline-size: var(--size-width-ch-20);\n  }\n  .form-date-time-input {\n    max-inline-size: var(--size-width-ch-30);\n  }\n  .form-progress {\n    display: flex;\n    flex-direction: column;\n    gap: var(--size-space-4);\n    padding-block-end: var(--size-space-24);\n  }\n  .form-progress-label {\n    font-size: var(--form-progress-label-font-size);\n    font-weight: var(--global-font-weight-bold);\n    color: var(--form-progress-label-color);\n  }\n  progress[value] {\n    -webkit-appearance: none;\n    -moz-appearance: none;\n    appearance: none;\n    border: none;\n    block-size: var(--size-dimension-8);\n    border-radius: var(--form-progress-border-radius);\n    background: var(--form-progress-bar-bg-color);\n    inline-size: var(--size-width-100);\n  }\n  progress[value]::-webkit-progress-bar {\n    border-radius: var(--form-progress-border-radius);\n    background: var(--form-progress-bar-bg-color);\n  }\n  progress[value]::-webkit-progress-value {\n    border-radius: var(--form-progress-border-radius);\n    background: var(--form-progress-value-bg-color);\n  }\n  progress[value]::-moz-progress-bar {\n    border-radius: var(--form-progress-border-radius);\n    background: var(--form-progress-value-bg-color);\n  }\n  .field-char-count {\n  }\n  .field-char-count-error {\n    color: var(--color-text-error);\n    font-weight: var(--global-font-weight-bold);\n  }\n  [dir=rtl] {\n    & .form-tel-input,\n    & .form-email-input {\n      text-align: end;\n    }\n    & .form-select-input {\n      background-position: left 0.7em top 50%, 0 0;\n    }\n  }\n}\n'
    );

    // src/components/Form.tsx
    var import_jsx_runtime31 = __toESM(require_jsx_runtime());
    function isServer() {
        return typeof window === `undefined`;
    }
    function ContensisForm(props) {
        return isServer() ? null : /* @__PURE__ */ (0, import_jsx_runtime31.jsx)(ClientForm, { ...props });
    }
    function ClientForm({
        apiUrl,
        projectId,
        formId,
        language,
        versionStatus,
        loading,
        disabled,
        error: error2,
        onPopulate,
        onSubmit,
        onSubmitError,
        onSubmitSuccess
    }) {
        const [defaultPageTitle] = (0, import_react3.useState)(document.title);
        const [isLoading, setIsLoading] = (0, import_react3.useState)(true);
        const [apiError, setApiError] = (0, import_react3.useState)(null);
        const [form, setForm] = (0, import_react3.useState)(null);
        const [pageIndex, setPageIndex] = (0, import_react3.useState)(0);
        const [value, setValue] = (0, import_react3.useState)({});
        const [inputValue, setInputValue] = (0, import_react3.useState)({});
        const [showErrors, setShowErrors] = (0, import_react3.useState)(false);
        const [errors2, setErrors] = (0, import_react3.useState)({});
        const [isDirty, setIsDirty] = (0, import_react3.useState)(false);
        const [isSubmitted, setIsSubmitted] = (0, import_react3.useState)(false);
        const [confirmationRule, setConfirmationRule] = (0, import_react3.useState)(null);
        const [formResponse, setFormResponse] = (0, import_react3.useState)(null);
        const formHtmlId = (0, import_react3.useId)();
        (0, import_react3.useEffect)(() => {
            setIsLoading(true);
            const controller = new AbortController();
            const signal = controller.signal;
            Api.getForm({ apiUrl: apiUrl || '', projectId, formId, language: language || null, versionStatus: versionStatus || 'published' }, signal).then(
                (form2) => {
                    setForm(form2);
                    setIsLoading(false);
                    setApiError(null);
                    setPageIndex(0);
                    let initialValue = Form.getInitialValue(form2);
                    initialValue = onPopulate ? onPopulate(initialValue, form2) : initialValue;
                    setValue(initialValue);
                    setInputValue(Form.getInputValue(form2, initialValue));
                    setShowErrors(false);
                    const initialErrors = Form.validate(form2, initialValue);
                    setErrors(initialErrors);
                },
                (error3) => {
                    if (!signal.aborted) {
                        setIsLoading(false);
                        setApiError(error3);
                    }
                }
            );
            return () => {
                controller.abort();
            };
        }, [apiUrl, projectId, formId, language, versionStatus]);
        const pages = (0, import_react3.useMemo)(() => Form.getPages(form), [form]);
        const pageCount = pages.length;
        const currentPage = pages[pageIndex];
        const currentPageHasError = Form.pageHasErrors(currentPage, errors2);
        const inputRefs = (0, import_react3.useMemo)(() => Fields.reduceFields(form, () => ({ current: void 0 })), [form]);
        const pageTitle = getPageTitle(defaultPageTitle, currentPage?.title, currentPage?.pageNo, pageCount, showErrors && currentPageHasError);
        const updateValue = (id, value2) => {
            const field = form?.fields.find((f) => f.id === id);
            if (field) {
                setValue((prev) => ({ ...prev, [id]: value2 }));
                const fieldErrors = Fields.validate(field, value2);
                setErrors((prev) => ({ ...prev, [id]: fieldErrors }));
                setIsDirty(true);
                if (showErrors) {
                    setShowErrors(currentPageHasError);
                }
            }
        };
        const updateInputValue = (id, value2) => {
            const field = form?.fields.find((f) => f.id === id);
            if (field) {
                setInputValue((prev) => ({ ...prev, [id]: value2 }));
            }
        };
        const updateFocussed = (_id, _focussed) => {};
        const previousPage = () => {
            setPageIndex((prev) => Math.max(prev - 1, 0));
        };
        const onFormSubmit = async (e) => {
            e.preventDefault();
            if (!form) {
                return;
            }
            if (currentPageHasError) {
                setShowErrors(true);
                return;
            }
            setShowErrors(false);
            const isLastPage = !!pageCount && pageIndex === pageCount - 1;
            if (!isLastPage) {
                setPageIndex((prev) => prev + 1);
                return;
            }
            const formResponse2 = onSubmit ? onSubmit(value, form) : value;
            if (!formResponse2) {
                return;
            }
            try {
                const result = await Api.saveFormResponse({
                    apiUrl: apiUrl || '',
                    projectId,
                    formId,
                    language: language || null,
                    versionStatus: versionStatus || 'published',
                    formVersionNo: form?.version?.versionNo || '',
                    captcha: form?.properties?.captcha,
                    formResponse: formResponse2
                });
                const success = onSubmitSuccess ? onSubmitSuccess(result, form) : true;
                Progress.reset(form);
                if (success) {
                    setIsSubmitted(true);
                    if (Rules.isConfirmationRuleReturnUri(result?.confirmation)) {
                        window.location.assign(result.confirmation.link.sys.uri);
                    } else {
                        setFormResponse(result.form);
                        setConfirmationRule(result.confirmation);
                    }
                }
            } catch (e2) {
                const handleSubmitError = onSubmitError ? onSubmitError(e2, form) : true;
                if (handleSubmitError) {
                    Errors.handleError(e2);
                    setApiError(e2);
                }
            }
        };
        (0, import_react3.useEffect)(() => {
            document.title = pageTitle;
        }, [pageTitle]);
        (0, import_react3.useEffect)(() => {
            if (form && isDirty && !isSubmitted) {
                Progress.autoSave(form, value);
            }
        }, [form, value, isDirty, isSubmitted]);
        const previousPageIndexRef = (0, import_react3.useRef)(null);
        (0, import_react3.useEffect)(() => {
            if (currentPage) {
                if (previousPageIndexRef.current === null) {
                    window.history.pushState(currentPage.id, '', '');
                } else if (previousPageIndexRef.current < pageIndex) {
                    window.history.pushState(currentPage.id, '', '');
                } else if (previousPageIndexRef.current > pageIndex) {
                    window.history.replaceState(currentPage.id, '', '');
                }
                previousPageIndexRef.current = pageIndex;
            }
        }, [pageIndex, currentPage]);
        (0, import_react3.useEffect)(() => {
            const onPopState = (e) => {
                if (pages) {
                    const index = pages.findIndex((page) => page.id === e.state);
                    if (index >= 0) {
                        setPageIndex(index);
                    }
                }
            };
            window.addEventListener('popstate', onPopState);
            return () => {
                window.removeEventListener('popstate', onPopState);
            };
        }, [pages]);
        return /* @__PURE__ */ (0, import_jsx_runtime31.jsx)('div', {
            className: 'contensis-form',
            children: /* @__PURE__ */ (0, import_jsx_runtime31.jsxs)('div', {
                className: 'form',
                children: [
                    !confirmationRule
                        ? /* @__PURE__ */ (0, import_jsx_runtime31.jsx)(FormLoader, {
                              apiUrl,
                              projectId,
                              formId,
                              language,
                              versionStatus,
                              loading,
                              disabled,
                              error: error2,
                              formHtmlId,
                              isLoading,
                              apiError,
                              form,
                              pageIndex,
                              pageCount,
                              currentPage,
                              formValue: value,
                              formInputValue: inputValue,
                              showErrors,
                              formErrors: errors2,
                              inputRefs,
                              setValue: updateValue,
                              setInputValue: updateInputValue,
                              setFocussed: updateFocussed,
                              previousPage,
                              onFormSubmit
                          })
                        : null,
                    !!confirmationRule && !!formResponse
                        ? /* @__PURE__ */ (0, import_jsx_runtime31.jsx)(FormConfirmation, { rule: confirmationRule, formResponse })
                        : null
                ]
            })
        });
    }
})();
/*! Bundled license information:

react/cjs/react.production.min.js:
  (**
   * @license React
   * react.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

react/cjs/react.development.js:
  (**
   * @license React
   * react.development.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

react/cjs/react-jsx-runtime.production.min.js:
  (**
   * @license React
   * react-jsx-runtime.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

react/cjs/react-jsx-runtime.development.js:
  (**
   * @license React
   * react-jsx-runtime.development.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)
*/
//# sourceMappingURL=contensis-forms.global.js.map
