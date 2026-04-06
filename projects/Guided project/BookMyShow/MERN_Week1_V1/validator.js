//CallBack based validation function
function validateMovieSelection(movies, movieId, callback) {
    const selectedMovie = movies.find(movie => movie.id === movieId);

    if (!selectedMovie) {
        return callback("Invalid movie selection. Choose a valid movie ID.", null);
    }
     callback(null, selectedMovie);
}
function validateTimeSelection(movies, movieId, callback) {
    const selectedShowtime = movies.showtimes.find(show.time.toLowerCase() === selectedTime.toLowerCase());

    if (!selectedShowtime) {
        return callback("Invalid time slot selection. Choose a valid time slot.", null);
    }
    callback(null, selectedShowtime);
}
function validateSeatCount(movies, movieId, callback) {
    
    if (!isNaN(seatCount) || seatCount <= 0) {
        return callback("Invalid seat count.Enter a valid seat count.",null);
    }
    callback(null,seatCount);
}
module.exports = {
    validateMovieSelection,
    validateTimeSelection,
    validateSeatCount

}

