// JWT Fundamentals: token generation and verification
const jwt = require("jsonwebtoken");
const secretKey = "monkey123";
//payload holds small non-sensitive data
const payload = {
    userId:101,
    role:"admin"
};
//jwt.sign() creates av signed JWT token
const token = jwt.sign(payload,secretKey,{expiresIn:"1h"});

console.log("Token generated sucessfully\n",token);

const tokenParts = token.split(".");
console.log("Header section:",tokenParts[0]);
console.log("payload section:",tokenParts[1]);
console.log("Signature section:",tokenParts[2]);
console.log("JWT part count:",tokenParts.length);
//const newSecreteKey = "donkey123";
try{
    //jwt.verify() checks trust, signature and expiration
    const verifiedpayload = jwt.verify(token,SecreteKey);
//Invalid token
    console.log("Verified payload",verifiedpayload);

}
catch(error){
    console.log("Verification failed",error.message);
}
const decodeWithoutVerification = jwt.decode(token);
console.log("decoded token:",decodeWithoutVerification);