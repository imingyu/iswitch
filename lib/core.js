let uid = 0;
export let noop = function () { };
export let has = (obj, prop) => {
    return obj.hasOwnProperty(prop);
}
export let isFun = obj => typeof obj === 'function' || obj instanceof Function;
export let isPromise = obj => typeof obj === 'object' && isFun(obj.then);
export let toPromise = (fun, args, ctx) => {
    if (isFun(fun)) {
        var result = fun.apply(ctx || null, args);
        if (isPromise(result)) {
            return result;
        } else {
            !!result ? Promise.resolve() : Promise.reject();
        }
    } else {
        return Promise.resolve();
    }
}
export let err = msg => { throw new Error(`[ISwitch Error] ${msg}`); }
export let warn = msg => { console.warn(`[ISwitch Warn] ${msg}`); }

let validateOptions = ops => {
    if (!has(ops, 'onValue') || !has(ops, 'offValue')) {
        err(`配置项onValue和offValue不得为空`);
    }
    if (ops.onValue === ops.offValue) {
        err(`配置项onValue和offValue不能是相等的值`);
    }
}

export function ISwitch(options) {
    const iSwitch = {
        id: 'isw' + uid++,
        ts: new Date(),
        checked: false
    }

    var self = this;
    let isWillChange = willValue => {
        return willValue !== iSwitch.value;
    }
    let changeValue = value => {
        setValue(value);
        iSwitch.onChange(value);
    }
    let setValue = value => {
        iSwitch.value = value;
        iSwitch.checked = iSwitch.value === iSwitch.onValue;
        if (iSwitch.provider && isFun(iSwitch.provider.setValue)) {
            iSwitch.provider.setValue(value);
        }
    }
    let switchChange = willValue => {
        if (isWillChange(iSwitch.value)) {
            toPromise(iSwitch.beforeChange, [willValue]).then(() => {
                changeValue(willValue);
            })
        }
    }

    if (typeof options === 'object') {
        Object.assign(iSwitch, ISwitch.defaultOptions, options);
    }
    validateOptions(iSwitch);

    if (iSwitch.value !== iSwitch.onValue && iSwitch.value !== iSwitch.offValue) {
        warn('value值没有设置或者不在范围内，已经默认设置为offValue');
        setValue(iSwitch.offValue);
    } else {
        iSwitch.checked = iSwitch.value === iSwitch.onValue;
    }
    this.getValue = function () {
        return {
            value: iSwitch.value,
            checked: iSwitch.checked
        }
    }
    this.switchOn = function () {
        return switchChange(iSwitch.onValue);
    }
    this.switchOff = function () {
        return switchChange(iSwitch.offValue);
    }
    this.switchToggle = function () {
        return iSwitch.checked ? switchChange(iSwitch.offValue) : switchChange(iSwitch.onValue);
    }
    this.destroy = function () {
        delete iSwitch.provider;
        delete iSwitch.beforeChange;
        delete iSwitch.onChange;
        iSwitch = null;
    }
}
ISwitch.defaultOptions = {
    onText: 'ON',
    onValue: true,
    onColor: 'green',
    offText: 'OFF',
    offValue: false,
    offColor: 'red',
    beforeChange: noop,
    onChange: noop,
    delay: 300,
    name: '',
    value: undefined,
    size: 'default',
    loading: false,
    loadingText: 'Loading...',
    disabled: false,
    static: false,
    readonly: false,
    provider: null//特定框架需要暴露的API
};