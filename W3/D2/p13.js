//Function scope
function scope(){
    var insidevar = 10;
    let insidelet = 20;
    const insideconst = 30;
    //console.log(insidevar);
    //console.log(insidelet);
    //console.log(insideconst);

}
scope();
//console.log(insidevar);//function scoped
//console.log(insidelet);//block scoped
//console.log(insideconst);//block scoped

function varFunctionScoped(){
    if(true){
        var x = 120;
        var y = 160;
    }
    console.log("x: ", x);
     console.log("y: ", y);
}
varFunctionScoped();