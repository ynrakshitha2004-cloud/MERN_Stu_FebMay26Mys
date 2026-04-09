//Handles request related to movie
const express = require("express");
const { authMiddleware } = require("../middleware/authMiddleware");
const { 
    getHome,
    getMovieById,
    addMovie,
    updateMovie,
    deletedMovie

} = require("../controllers/movieController");
const roleMiddleware = require("../middleware/roleMiddleware");
const router = express.Router();
//sends request to home page
router.get("/",getHome);
//send request to get all movies
router.get("/movies",getAllMovies);
//sends req to get movies based on id
router.get("/movies/:id",getMovieById);
//sends req to create new movie 
router.post("/movies",authMiddleware,roleMiddleware("admin"),addMovie);
//sends req to create add movie 
router.put("/movies/:id",authMiddleware,roleMiddleware("admin"),updateMovie);
//sends req to update movie 
router.delete("/movies",authMiddleware,roleMiddleware("admin"),deletedMovie);
module.exports = router;


