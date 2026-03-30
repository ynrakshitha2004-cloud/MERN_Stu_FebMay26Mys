// Middleware order and route-specific middleware
const express = require("express");
const app = express();
// Global  middleware
app.use(function (req, res, next) {
    console.log("Global middleware:", req.method, req.url);
    
    // Pass control to next middleware/route
    next();
});

// Route
app.get("/", function (req, res) {
    res.send("Home route.");
});
app.get("/admin", function(req,res,next){
    console.log("Route specific middleware for /admin");
    next();
},function(req,res){
    res.send("Admin route reached.")
});

// Start server
app.listen(4000, function () {
    console.log("Express server running at http://localhost:4000");
});