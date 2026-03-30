//Handling the error event in EvntEmmiter
const { error } = require("console");
const EvntEmmiter = require("events");
const { EventEmitter } = require("stream");
const fileEmmiter = new EventEmitter();

//Rgister an error listener
fileEmmiter.on("error",function(errorMessage){
    console.log("Emmiter handler error",errorMessage);
});
//Normal event listener
fileEmmiter.on("fileProcessed",function(fileName){
    console.log("File processed sucessfully. ",fileName);
});

fileEmmiter.emit("fileProcessed","report.csv");
fileEmmiter.emit("error","File Processing failed.");
