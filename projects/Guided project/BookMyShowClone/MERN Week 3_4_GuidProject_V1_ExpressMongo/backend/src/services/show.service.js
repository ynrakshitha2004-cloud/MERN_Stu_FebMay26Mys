const show = require("../models/Show");
const Movie = require("../models/Movie");
const Show = require("../models/Show");
//Generate seats
const generateSeats = (total) => {
    const seats = [];
    const rows = ["A", "B", "c", "D", "E", "F", "G", "H"];
    let seatCount = 0;
    for (let row of rows) {
        for (let i = 1; i <= 10; i++) {
            if (seatCount >= totalSeats) break;
            seats.push({
                seatNumber: `${row}${i}`,
                isBooked: false,
            });
            seatCount++;
        }
    }
    return seats;
};
//create show 
exports.createShow = async ({ MovieId, date, time, totalSeats }) => {
    //check if movie exists
    const movie = await Movie.findById(MovieId);
    if (!movie)
        throw new Error("movie not found");
    //Generate seats
    const seats = generateSeats(totalSeats);
    const show = await Show.create({
        MovieId,
        date,
        time,
        totalSeats,
        availableseats: totalSeats,
        seats,
    });
    return show;
};
//Get show
exports.getShows = async (movieId, date) => {
    const filter = { isActive: true };
    if (movieId) filter.movieId = movieId;
    if (date) filter.date = new Date(date);
    const shows = await Show.find(filter)
        .populate("movieId")
        .sort({ date: 1 });
    return shows;
};
//Get show by Id
exports.getShowById = async (id) => {
    const show = await Show.findById(id).populate("movieId");
    if (!show)
        throw new Error("show not found");
    return show;
};
//update the show 
exports.updateShow = async (id, data) => {
    const show = await Show.findByIdAndUpdate(id, data, {
        returnDocument: "after",
        runValidators: true,
    });
     if (!show)
        throw new Error("show not found");
    return show;
};
//Delete show -- soft delete
exports.deleteShow = async (id, data) => {
    const show = await Show.findByIdAndUpdate(id,{
        isActive:false,
    });
     if (!show)
        throw new Error("show not found");
    };