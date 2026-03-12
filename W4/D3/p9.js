const asyncFetchBtn = document.getElementById("asyncFetchBtn");
const output = document.getElementById("output");
const postIdInput = document.getElementById("postIdInput");

asyncFetchBtn.addEventListener("click", async function () {

    output.textContent = "Fetching post...";

    try {
        const postId = postIdInput.value.trim();


        if (postId === "") {
            output.textContent = "Post ID is required.";
            return;
        }

        const numericId = Number(postId);

        if (numericId < 1 || numericId > 100) {
            output.textContent = "Enter a Post ID between 1 and 100.";
            return;
        }


        const response = await fetch(
            "https://jsonplaceholder.typicode.com/posts/" + numericId
        );

        if (!response.ok) {
            throw new Error("HTTP Error: " + response.status);
        }

        const data = await response.json();

        output.textContent = "Title: " + data.title;

    } catch (error) {
        output.textContent = "Error: " + error.message;
        console.error(error);
    }
});