//Handling asynchronous error with async/await 
const express = require("express");
const { profile } = require("node:console");
const app = express();

function loadUserProfile() {
    return Promise.reject(new Error("User Profile cant be loaded"));
}
app.get("/async-fail", async function (req, res, next) {
    try {
        const Profile=await loadUserProfile();
        res.json(profile);

    }
    catch (error) {
        next(error);
    }
});
//Centralize error handling middleware
app.use(function (error, req, res, next) {
    res.status(404).json({
        success: false,
        message: "Async/Await error handled centrally."
        //OriginalMessage:error.message
    });
});
app.listen(4000, function () {
    console.log("Express server running at http://localhost:4000");
});