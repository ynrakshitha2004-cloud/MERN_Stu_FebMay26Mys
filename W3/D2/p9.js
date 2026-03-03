//IIFE 
//withoutparameters
(function(appName, version){
    console.log(" Basic IIFE executed Immediately");

})();

//withparameters
(function(appName, version){
    console.log(" App:",appName,"version:",version);

})("Nodejs", "V22.22.0");

// with return value
const result =(function(){
    const a=10, b=20;
    return a+b;
})();
console.log("sum  is:",result);



