//Cancel.js
//To cancel the existing booking if exists
const bookingEmitter = require("./events");
const { getCurrentBooking, clearCurrentBooking } = require("./booking");
function CancelBooking(movies) {
    const booking = getCurrentBooking();
    if (!booking) {
        bookingEmitter.emit("bookingFailed", "No Booking found to cancel.");
        return null;
    }
    const Movie = movies.find((m) => m.id === booking.movieId);
    if (!movie) {
        bookingEmitter.emit("bookingFailed", "Movie data not found while cancelling booking.");
        return null;
    }
    const Showtime = movie.showtimes.find(show.time.toLowerCase() === booking.time.toLowerCase());
    if (!Showtime) {
        bookingEmitter.emit("bookingFailed", "showtime data not found");
        return null;
    }
    //restore seats
    Showtime.seatAvailable += booking.seatCount;
    //clearCurrentBooking
    clearCurrentBooking();
    bookingEmitter.emit("bookingCancelled", booking);
    return booking;
}
module.exports={
    CancelBooking
};