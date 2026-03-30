//Introduction to buffer  in NodeJS
//A buffer stores a raw bytes

const { text } = require("node:stream/consumers");

//Here we create buffer directly from a string
const textBuffer = Buffer.from("Rakshii");
//The value in the buffer is the encode form of the text
console.log("Buffer object:",textBuffer);
console.log("Buffer length: in bytes:",textBuffer.length);
console.log("Byte at index 0",textBuffer[0]);
console.log("Byte at index 0",textBuffer[1]);

//Each charcter is stored internally as byte data
//For standard ASCII letters there will be equivalent code
//Buffer stores numeric value 0 to 255