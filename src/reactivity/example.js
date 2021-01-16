import { watchEffect } from "./reactive-dependency.js";
import { reactive } from "./reactive-state.js";

const state = reactive( {
    count: 1,
    name: "marc"
})

watchEffect(() => {
    console.log("state changed", state.count, state.name);
})

setTimeout(()=> {
    state.count++
    state.name = "Jonny"
}, 1000)

setTimeout(()=> {
    state.count++
    state.name = "Monny"
}, 2000)