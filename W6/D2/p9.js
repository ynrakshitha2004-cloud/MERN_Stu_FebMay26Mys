//Removing EventEmmiter listeners
const EventEmitter = require("events");

const jobEmmiter = new EventEmitter();

function showJobProgress(status){
    console.log("Job Status: ",status);
}

//Add listener
jobEmmiter.on("Progress",showJobProgress);

//Emit the event
jobEmmiter.emit("Progress","50% completeed");

//Remove listener
jobEmmiter.off("progress",showJobProgress);

//Emit the event
jobEmmiter.emit("Progress","100% completeed");
