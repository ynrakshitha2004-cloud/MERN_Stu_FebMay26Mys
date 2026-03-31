//custom middleware
const express =  require("express");
const app = express();
//CUSTOM MIDDLEWARE
function checkAdminAcess(req,res,next){
    if(req.query.role!=="admin") {
        return res.status(403).json({
            sucess:false,
            message: "Admin acess denied"
        });
    }
    next();

}
app.get("/",function(req,res){
    res.send("Home");

})
app.get("/admin",function(req,res){
    res.json({
        sucess:true,
        message:"Admin route accessed"
    });
    
});
app.listen(4000,function(){
    console.log("Express server running at http://localhost:4000");
});