// process.nextTick, Promise microtask & Timer

console.log("1. Start of script");

// process.nextTick runs immediately after current sync code
process.nextTick(function () {
    console.log("3. process.nextTick callback executed");
});

// Promise microtask runs after nextTick
Promise.resolve().then(function () {
    console.log("4. Promise microtask executed");
});

// Timer callback (macrotask)

setTimeout(() => {
    console.log("5. Timer callback executed");
}, 0);

console.log("2. End of script");