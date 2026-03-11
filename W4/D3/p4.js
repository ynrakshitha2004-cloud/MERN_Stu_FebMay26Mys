const saveBtn = document.getElementById("saveBtn");
const jsonOutput = document.getElementById("jsonOutput");

saveBtn.addEventListener("click", function () {

    const user = {
        name: "Rakshitha",
        role: "CSE Student",
        id: 101,
        skills: ["Js", "HTML", "CSS"]
    };

    localStorage.setItem("userprofile", JSON.stringify(user));
    jsonOutput.textContent = "User object stored as string to localStorage";
});

document.getElementById("readBtn").addEventListener("click",function(){
    try{
    const username = localStorage.getItem("userProfile");
    console.log(JSON.parse(username))
    console.log(username);
    jsonOutput.textContent = " userProfile" + username;
    }
    catch(error){
          jsonOutput.textContent = "json parsing failed";

    }
     
});
