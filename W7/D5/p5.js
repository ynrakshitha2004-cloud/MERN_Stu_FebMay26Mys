//Assigning roles to users and restrciting access
const express = require("express")
const session = require("express-session");
const app = express();

app.use(function (req, res, next) {
    req.user = {
        id: 101,
        username: "Rakshitha",
        role: "admin" //user or admin

    };
    next();
});
function requireRole(role) {
    return function (req, res, next) {
        if (!req.user) {
            return res.status(401).json({
                success: false,
                message: "Authentication required"

            });
        }

        if (req.user.role !== role) {
            return res.status(401).json({
                success: false,
                message: "Insufficient permission"

            });
        }
        next();
    }
}
app.get("/profile", function (req, res, next) {

    res.json({
        success: true,
        message: "profile p[age",
        user: req.user
    });
});
app.get("/admin", requireRole("admin"),function(req, res, next){
    res.json({
        success: true,
        message: "profile page",
        user: req.user
    });
});
app.listen(4000, function () {
    console.log("Cookie server running at http://localhost:4000");
});

