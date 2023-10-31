import {setCookieWithExpireHour} from "https://jscroot.github.io/cookie/croot.js";

document.addEventListener("DOMContentLoaded", function() {
    const loginForm = document.getElementById("loginForm");
    const message = document.getElementById("message");

    loginForm.addEventListener("submit", function(event) {
        event.preventDefault();

        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;

        // Send a POST request to the updated authentication API with the "user" role
        fetch("https://asia-southeast2-testlogin-366704.cloudfunctions.net/createcontent-11", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                username: username,
                password: password,
            })
        })
        .then(response => response.text()) // Read response as text
        .then(data => {
            if (data === "Login successful") {
                const token = data.token;
                message.textContent = "Login successful";
                setCookieWithExpireHour("token",token,2);
                message.style.color = "green";
                console.log("Login successful");
                console.log("Token:", token);
                window.location.href = "https://fancypedia.github.io/user/";

            } else {
                // Handle the case when authentication fails
                message.textContent = "Authentication failed.";
                message.style.color = "red";
                console.log("Login gagal");
            }
        })
        .catch(error => {
            console.error("Error:", error);
        });
    });
});