// Basics of click event

const button = document.getElementById("clickBtn")

button.addEventListener("click" ,function() {
    console.log("Button is clicked");
});

button.addEventListener("dbclick" ,function() {
    console.log(" second Event listner Button is clicked");
});