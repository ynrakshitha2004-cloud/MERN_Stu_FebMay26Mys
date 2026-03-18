//Introduction to async/await
function getMesssage(){
    return new Promise(function(resolve){
        setTimeout(() => {
            resolve("Async/await makes promise based code easier to read");
        }, 1000);
    });
}

 async function showMesssage(){
    console.log("Loading message...");
    const message = await getMesssage();
    console.log(message);
}
showMesssage();