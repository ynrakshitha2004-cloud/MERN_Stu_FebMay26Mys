//Inspecting request details in a  http server
const http = require("http");
const server = http.createServer(function(req,res){
    //writehead is a fun is used sets the response status code and headers
    res.writeHead(200,{"Content-Type":"text/plain"});
    //end()sends the response body and close the response
    //req.method tells the HTTP method,  GET & POST
    res.end("Method:"+req.method+"\nURL:"+req.url);
});
//listen() binds the server to a port and starts accepting request
server.listen(3001,function(){
    console.log("Server is running at http://localhost:3001");
});
