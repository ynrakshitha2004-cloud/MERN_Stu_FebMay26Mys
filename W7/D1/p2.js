//Basic routing in express
app.get("/about", function (req, res) {
    res.send("about route in express server");
});
app.get("/Products", function (req, res) {
    res.send("Products route in express server");
});
    app.listen(4000,function(){
        console.log("Express server running at http://localhost:4000");
    })
