// Creating a simple http server
const http = require("http");

//createserver(): creates a HTTP server instance
//Accepts a callback with two important objects:
//1. req: incoming request details
//2. res: outgoing res control 

const server = http.createServer(function(req,res){
    //writehead is a fun is used sets the response status code and headers
    res.writeHead(200,{"Content-Type":"text/plain"});
    //end()sends the response body and close the response
    res.end("Hello from NodeJS HTTP server.");
});
//listen() binds the server to a port and starts accepting request
server.listen(3000,function(){
    console.log("Server is running at http://localhost:3000");
});

//port nos:
//0-1023: system ports
//1024 - 49151: "Registered ports"
//27017: mangoDB
3000/30001
