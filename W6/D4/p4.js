// Handling Different GET routes
const http = require("http");

const server = http.createServer((req, res) => {

    if (req.method === "GET" && req.url === "/") {
        res.writeHead(200, { "Content-Type": "text/plain" });
        res.end("Home page / Dashboard");
        return;
    }

    if (req.method === "GET" && req.url === "/about") {
        res.writeHead(200, { "Content-Type": "text/plain" });
        res.end("About Route. Welcome to About Us page.");
        return;
    }

    if (req.method === "GET" && req.url === "/product") {
        res.writeHead(200, { "Content-Type": "text/plain" });
        res.end("Product Route. Welcome to Product page.");
        return;
    }
    if (req.method === "GET" && req.url === "/users") {
        res.writeHead(200, { "Content-Type": "text/plain" });
        res.end("Returing all users.");
        return;
    }
    //POST = create
    //curl -X POST http://localhost:3001/users
    //curl: Client URL: free,open src cli tool used to transfer data or 
    //from server using various network protocol.
    if (req.method === "POST" && req.url === "/users") {
        res.writeHead(201, { "Content-Type": "text/plain" });
        res.end("New usercreate.");
        return;
    }

    //  unkown route fallback 404 fallback
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("Route Not Found");

});

server.listen(3001, () => {
    console.log("Server running at http://localhost:3001/");
});