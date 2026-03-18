//const { use } = require("react");

//why use async/await
function greetUser(){
    return new Promise(function(resolve,){
        setTimeout(function(){
            resolve({id:101,name:"kiran"});
        },1000);
    });
}

function getOrders(useeId){
    return new Promise(function (resolve){
        setTimeout(function(){
            resolve(["order-A","order-B"]);
        },12000);
    });

}
async function showUserAndOrders(){
    const user = await greetUser();
    //console.log("Use loaded: ",user.name);

    const orders = await  getOrders(user.id);
    console.log("orders loaded",orders);
}

showUserAndOrders();
