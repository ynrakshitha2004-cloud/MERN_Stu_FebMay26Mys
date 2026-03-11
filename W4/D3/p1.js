const button = document.getElementById("checkBtn");

button.addEventListener("click", function () {

    console.log("localStorage check:", typeof localStorage !== "undefined");
    console.log("sessionStorage check:", typeof sessionStorage !== "undefined");

    console.log("localStorage object:", localStorage);
    console.log("sessionStorage object:", sessionStorage);

});