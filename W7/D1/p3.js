// Handling different HTTP methods in express
const express = require("express");
const app = express();

// Middleware to parse JSON (important for POST)
app.use(express.json());

// To READ users
app.get("/users", function (req,res){
    res.status(200).json([{message:"sucess"},
        { id: 1, name: "Rakshi" },
        { id: 2, name: "Bipin" },
        { id: 3, name: "Raj" }
    ]);
    res.send("Returining all users");
});

// To CREATE user
app.post("/users", function (req, res) {
    // Normally you'd use req.body here
    res.status(201).send("User created.");
});

// Start server
app.listen(4000, function () {
    console.log("Express server running at http://localhost:4000");
});