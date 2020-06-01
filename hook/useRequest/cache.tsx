type CacheType = {
    [key: string]: { data: any, timer: any }
}
const cache: CacheType = {};

const setCache = (key: string, data) => {
    if(cache[key] && cache[key].timer) {
        clearTimeout(cache[key].timer)
    }
    // 5分钟后 clear
    const timer = setTimeout(() => {
        delete cache[key];
    }, 5 * 60 * 1000);
    cache[key] = { data, timer };
};

const getCache = (key: string) => {
    if(cache[key]) {
        return cache[key].data;
    }
    return null;
};

export {
    setCache,
    getCache,
    cache
}
