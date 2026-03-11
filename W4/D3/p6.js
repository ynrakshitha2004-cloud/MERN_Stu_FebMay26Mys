const introBtn = document.getElementById("introBtn");
const output = document.getElementById("output");

introBtn.addEventListener("click", function () {

    output.textContent = "Sending request...";

    fetch("https://jsonplaceholder.typicode.com/posts/1")

    .then(function(response) {
        return response.text();  
    })

    .then(function(text) {
        console.log("Raw response object: ",text);
        output.textContent = text;
        // output.textContent = "status: " + response.status + "\nok:" +
            //   response.ok;
    })

    .catch(function(error) {
        output.textContent = "Error fetching data: " + error.message;
       console.log(error);
    });

});