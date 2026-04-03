//Manage sessions with express-session

const express = require("express");
const session = require("express-session");

const app = express();
app.use(session({
    secret: "Mysecretkey",
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 60 * 60 * 1000
    }
}));
app.get("/login", function (req, res) {
    req.session.user = {
        username: "Rakshi",
        role: "student"
    };
    res.send("session details store after login.")
});
app.get("/profile", function (req, res) {
    if (!req.session.user) {
        return res.status(401).json({
            sucess: false,
            message: "No active login session found."
        });

    }
    res.json({
        sucess: true,
        sessionUser: req.session.user
    });
});
app.listen(4000, function () {
    console.log("Expres-session demo server running @ http://localhost:4000");
});



