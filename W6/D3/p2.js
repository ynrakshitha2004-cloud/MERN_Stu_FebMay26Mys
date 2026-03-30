// Reading & writing files synchronously
const fs = require("fs");
const path = require("path");
const filePath = path.join(__dirname, "sync-note.txt");

// Write file synchronously
fs.writeFileSync(
  filePath,
  "This file was written using writeFileSync().\nSynchronous operation blocks execution.\n"
);

console.log("File written synchronously.");
//fs.writtenFileSync(filepath,"This file was written using writeFileSync().\nSynchronous operation block")
// Append to file 
fs.appendFile(filePath, "New text added using fs.appendFile.\n", (error) => {
  if (error) {
    console.log("Append error:", error.message);
    return;
  }
   console.log(" File Content appended ");

  // Read file AFTER append completes
  const content = fs.readFileSync(filePath, "utf-8");

  console.log("File read synchronously.");
  console.log("File content:\n",content);
});