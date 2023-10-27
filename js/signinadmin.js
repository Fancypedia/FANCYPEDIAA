document.addEventListener("DOMContentLoaded", function() {
    const loginFormAdmin = document.getElementById("loginFormAdmin");
    const message = document.getElementById("message");

    loginFormAdmin.addEventListener("submit", function(event) {
        event.preventDefault();

        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;

        // Send a POST request to your authentication API
        fetch("https://asia-southeast2-testlogin-366704.cloudfunctions.net/function-16", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                username: username,
                password: password
            })
        })
        .then(response => response.json())
        .then(data => {
            if (data.status === true) {
                const token = data.token;
                const welcomeMessage = data.message;
                message.textContent = welcomeMessage;
                message.style.color = "green";
                console.log(token);
                console.log(welcomeMessage);
                window.location.href = "../choices.html";
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