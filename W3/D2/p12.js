//Higher order function
// 1. A function which takes another function as parameter 
//or
//2. A function return another function

function createMultipler(factor){
return function(number){
    return number*factor;
}
}
let double = createMultipler(2);
console.log("double(10): ",double(10));
let triple = createMultipler(3);
console.log("double(30):", triple(60));