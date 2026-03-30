//microtasks and macrotasks in NodeJS
console.log("1. Synchronous start.");
//setTimeout(...,0) schedules task for a later time.
//Even with 0 delay, it doesnt interrupt current sync code 
setTimeout(() => {
    console.log("4.Timer callback executed.")
}, 0);

Promise.resolve().then(function(){
console.log("3. promise microtask executed.");
});

console.log("2. Synchronus end.");