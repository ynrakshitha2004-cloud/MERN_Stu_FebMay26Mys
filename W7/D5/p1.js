// How cookie is used to track session ID
//simulated server-side session store
const sessionStore = {
    "abc123":{
        userId: 101,
        username: "Rakshi",
        role: "student"
    }
};
//simulated browser cookie value
const browserCookieSessionId = "abc123";
const sessionData = sessionStore[browserCookieSessionId];
console.log("server-side session data:",sessionData);