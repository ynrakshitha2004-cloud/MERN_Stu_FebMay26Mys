//Reading and writing  the files asynchronously within callbacks
const fs = require("fs");
const path = require("path");
const filePath = path.join(__dirname, "async-note.txt");

//To write to a file
fs.writeFile(
    filePath,
    "This is written asynchronously using writeFiles().",
    function(writeError){
        if(writeError){
            console.log("write error: ",writeError.message);
            return;
        }
        console.log("File written synchronously.");
        console.log(content);
    }
);

const content = fs.readFile(filePath, "utf-8",
function(readError,content){
    if(readError) {
    console.log("Read error:",readError.message);
    return;
}
console.log(content);
}
);
console.log("Script continues while operations are in progress,");