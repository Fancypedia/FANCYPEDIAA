document.addEventListener("DOMContentLoaded", function() {
    const loginForm = document.getElementById("login-form");
    const message = document.getElementById("message");

    loginForm.addEventListener("submit", function(event) {
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
                Username: username,
                Password: password
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
                
                // Redirect to dashboard.html upon successful login
                window.location.href = "../theme/admin-dashboard.html";
            } else {
                // If the first API call fails, make a second API call
                fetch("https://asia-southeast2-testlogin-366704.cloudfunctions.net/function-2ss", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        Username: username,
                        Password: password,
                        Role: "user"
                    })
                })
                .then(response => response.json())
                .then(data => {
                    if (data.status === true) {
                        const welcomeMessage = data.message;
                        message.textContent = welcomeMessage;
                        message.style.color = "green";
                        // Handle the response from the second API call
                        console.log(token);
                        // Redirect or perform other actions as needed
                        window.location.href = "../theme/user.html";
                    } else {
                        message.textContent = "Login failed. Please check your credentials.";
                        message.style.color = "red";
                    }
                })
                .catch(error => {
                    console.error("Error:", error);
                });
            }
        })
        .catch(error => {
            console.error("Error:", error);
        });
    });
});
