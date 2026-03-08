const clickBtn = document.getElementById("clickBtn");
const demoInput = document.getElementById("demoInput");
const runclick = document.getElementById("runclick");
const runMouseover = document.getElementById("runMouseover");
const runDuplicate = document.getElementById("demoInput");


clickBtn.addEventListener("click", function (e) {
    console.log("e type", e.type);
    console.log("instance mouse event",
        e instanceof MousEvent);
});

demoInput.addEventListener("keydown", function (e) {
    if (e.key == "Enter") {
        console.log("Enter key down");
    }
});

runkeydown.addEventListener("click", function () {
    demoInput.dispatchEvent(new KeyboardEvent("keydown",
        { key: "Enter" }
    ));
});

runDuplicate.addEventListener("click", function () {
    const temp = document.createElement("button");
    temp.innerhtml = "HEllo";
    document.body.appendChild(temp);
});