document.addEventListener("DOMContentLoaded", function() {
    const loginForm = document.getElementById("loginForm");
    const message = document.getElementById("message");

    loginForm.addEventListener("submit", function(event) {
        event.preventDefault();

        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;

        // Send a POST request to the updated authentication API with the "user" role
        fetch("https://asia-southeast2-testlogin-366704.cloudfunctions.net/createcontent-3", {
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
                message.textContent = "Login successful";
                message.style.color = "green";
                console.log("Login successful");
                window.location.href = "../user/user.html";
            } else {
                // Handle the case when authentication fails
                message.textContent = "Authentication failed.";
                message.style.color = "red";
            }
        })
        .catch(error => {
            console.error("Error:", error);
        });
    });
});