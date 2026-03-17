//Introduction to promises
console.log("program started.");
function getWelcomeMessage(){
    return new Promise(function(resolve){
        setTimeout(() => {
            resolve("Welcome to promises");
        }, 1000);
    });
}
const messagePromise = getWelcomeMessage();

console.log("promise created. Result not ready yet.");

messagePromise.then(function(message){
    console.log(message);
});

console.log("Program continues while the promise is pending.");