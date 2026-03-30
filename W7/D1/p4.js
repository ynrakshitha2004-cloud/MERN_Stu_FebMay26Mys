// Middleware usage in Express
// Middleware runs during the request-response cycle
// It can inspect or modify the request before the route responds
// next() passes control to the next middleware/route

const express = require("express");
const app = express();

// Register middleware
app.use(function (req, res, next) {
    console.log("Request received:", req.method, req.url);

    // Pass control to next middleware/route
    next();
});

// Route
app.get("/", function (req, res) {
    res.send("Middleware executed before the route");
});

// Start server
app.listen(4000, function () {
    console.log("Express server running at http://localhost:4000");
});