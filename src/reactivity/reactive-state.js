import { Dep } from "./reactive-dependency.js";

export function reactive(obj) {
    Object.keys(obj).forEach( (key) => {
        const dep = new Dep();
        let value = obj[key];
        Object.defineProperty(obj, key, {
            get() {
                dep.observer();
                return value;
            },
            set(newValue) {
                if (newValue !== value) {
                    value = newValue;
                    dep.notify();
                }
            }
        })
    })
    return obj;
}