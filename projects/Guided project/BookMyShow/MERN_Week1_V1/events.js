//This files creates and exports a custom EventEmitter instance
const EventEmitter = require("events");

//custom EventEmmiter object
const bookingEmmiter = new EventEmitter();

module.exports = bookingEmmiter;
