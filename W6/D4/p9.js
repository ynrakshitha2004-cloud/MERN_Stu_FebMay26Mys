const http = require("http");

const server = http.createServer(function (req, res) {
    if (req.method === "GET" && req.url.startsWith("/users/")) {

        // Split URL and extract ID
        const parts = req.url.split("/");
        const userId = parts[2];

        // Validate ID
        if (!userId) {
            
            res.writeHead(400, { "Content-Type": "application/json" });
            return res.end(JSON.stringify({
                success: false,
                message: "User ID is required"
            }));
        }

        res.writeHead(200, { "Content-Type": "application/json" });
        return res.end(JSON.stringify({
            route: "users/:id",
            userId: userId
        }));
    }

    // 404 fallback
    res.writeHead(404, { "Content-Type": "application/json" });
    res.end(JSON.stringify({
        success: false,
        message: "Route not found."
    }));
});

server.listen(3001, function () {
    console.log("Server is running at http://localhost:3001");
});