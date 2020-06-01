import React, {useState, useRef, useEffect, useCallback} from 'react';
import { getCache, setCache, cache as testCache } from './cache';

class Fetch {
    that = this;
    service;
    options;
    subscribe;
    state = {
        data: undefined,
        loading: false,
        params: [],
        error: undefined,
        run: this.run.bind(this.that)
    };

    constructor(service, options, subscribe, initState) {
        this.service = service;
        this.options = options;
        this.subscribe = subscribe;
        this.state = {
            ...this.state,
            ...initState
        }
    }

    run(...args) {
        return this._run(...args);
    }

    setState(state = {}) {
        this.state = {
            ...this.state,
            ...state
        };
        this.subscribe(this.state);
    }

    _run(...args) {
        this.setState({ loading: true, params: args });

        return this.service(...args).then(res => {
            this.setState({
                data: res,
                loading: false,
                error: undefined
            });

            if(this.options.onSuccess) {
                this.options.onSuccess(res, args);
            }
            return res;
        }).catch(error => {
            this.setState({ error, data: undefined, loading: false });
            if(this.options.onError) {
                this.options.onError(error, args);
            }
            console.error(error);
            return error;
        });
    }
}

const DEFAULT_KEY = 'DEFAULT_FETCH_KEY';

const useRequest = (service, options) => {
    const promiseService = (...args) => new Promise((resolve, reject) => {
        service(...args).then(res => resolve(res)).catch(e => reject(e));
    });

    const _options = options || {};
    const {
        manual = false,
        onSuccess = () => {},
        onError = () => {},
        initData, // 初始化时的data值
        defaultParams,
        cacheKey
    } = _options;

    const newstFetchKey = useRef(DEFAULT_KEY);

    const subscribe = useCallback((key, data) => {
        setFetches(s => {
            s[key] = data;
            return {...s};
        });
    }, []);

    const [fetches, setFetches] = useState(() => {
        if(cacheKey) {
            const cache = getCache(cacheKey);

            if(cache) {
                newstFetchKey.current = cache.newstFetchKey;
                const newFetches = {};
                Object.keys(cache.fetches).forEach(key => {
                    const cacheFetch = cache.fetches[key];
                    const newFetch = new Fetch(
                        promiseService,
                        _options,
                        subscribe.bind(null, key),
                        {
                            data: cacheFetch.data,
                            loading: cacheFetch.loading,
                            params: cacheFetch.params,
                            error: cacheFetch.error
                        }
                    );

                    newFetches[key] = newFetch.state;
                });
                return newFetches;
            }
        }
        return {};
    });

    const run = (...args) => {
        // let currentFetch = fetchesRef.current['DEFAULT_FETCH_KEY'];
        const currentFetchKey = newstFetchKey.current;

        let currentFetch = fetches[currentFetchKey];
        if(!currentFetch) {
            const newFetch = new Fetch(promiseService, options, subscribe.bind(null, currentFetchKey), {
                data: initData
            });
            currentFetch = newFetch.state;
            setFetches(fetch => {
                fetch[currentFetchKey] = currentFetch;
                return { ...fetch };
            });
        }
        return currentFetch.run(...args);
    };

    // 初始化默认执行
    useEffect(() => {
        if(!manual) {
            run(...defaultParams);
        }
    }, []);

    // cache变化执行
    useEffect(() => {
        if(cacheKey) {
            setCache(cacheKey, {
                fetches,
                newstFetchKey: newstFetchKey.current
            });
            console.log(testCache);
        }
    }, [cacheKey, fetches]);

    return {
        data: initData,
        loading: !manual,
        run,
        params: [],
        ...(fetches['DEFAULT_FETCH_KEY'])
    }
};

export default useRequest;
