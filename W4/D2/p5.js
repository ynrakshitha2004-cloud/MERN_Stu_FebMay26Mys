const signupForm = document.getElementById("signupForm");
const signupemail = document.getElementById("signupemail");
const signuppassword = document.getElementById("signuppassword");
const message = document.getElementById("message");


signupForm.addEventListener("submit",
    function(event){
        event.preventDefault();

        if(!email){
            message.textContent = "Email is Required";
            message.style.color = "blue";
            signupemail.focus();
            return;
        }
    }
)
