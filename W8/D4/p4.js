//OTP generation using crypto built-in module of NodeJs
const crypto = require('crypto');
function generateOTP(length = 6){
    return crypto.randomInt(0,10**length)
    .toString()
    .padStart(length,'0');
}//00004
console.log("OTP: ",generateOTP());
