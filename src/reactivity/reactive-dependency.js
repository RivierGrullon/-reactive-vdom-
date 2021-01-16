//global temporary variable
var activeEffect;

export function watchEffect(fn) {
    activeEffect = fn;
    fn();
    activeEffect = null;
}

export class Dep {
    suscribers = new Set();
    //suscribe a new funtion as observer to the dependency
    observer() {
        if (activeEffect) {
            this.suscribers.add(activeEffect);
        }
    }

    //notify suscribers of a value change
    notify() {
        this.suscribers.forEach(suscriber => suscriber());
    }
}

