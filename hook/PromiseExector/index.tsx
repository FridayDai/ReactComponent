class PromiseExector {
    _queue: any[] = [];
    _isBusy: boolean = false;
    _callback: (...args) => void;

    constructor() {
        this._queue = [];
        this._isBusy = false;
        this._callback = () => {};
    }

    each(callback) {
        this._callback = callback;
    }

    add(promise) {
        this._queue.push(promise);
        if(this._isBusy) {
            return;
        }

        this._isBusy = true;

        this.exec();
    }

    async exec() {
        while(this._queue.length !== 0) {
            const promise = this._queue.shift();
            try {
                const res = await promise();
                this._callback && this._callback(res);
            } catch (e) {
                this._callback && this._callback(e);
            }
            this._isBusy = false;
        }
    }

    throttle(delay, action) {
        let last = 0;
        let result;
        return new Proxy(action, {
            apply(target, thisArg, args) {
                console.log(target, '|||', thisArg, args);
                return new Promise(resolve => {
                    const curr = Date.now();
                    if (curr - last > delay) {
                        result = Reflect.apply(target, thisArg, args);
                        last = curr;
                        resolve(result);
                        return
                    }
                    resolve('this one')
                })
            },
        })
    }
}

export default PromiseExector;
