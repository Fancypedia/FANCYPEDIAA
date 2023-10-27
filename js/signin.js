document.addEventListener("DOMContentLoaded", function() {
    const loginForm = document.getElementById("loginForm");
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

                // Determine the role of the user here
                const userRole = data.role;

                if (userRole === "user") {
                    // User has the "user" role, use the user API
                    fetch("https://asia-southeast2-testlogin-366704.cloudfunctions.net/createcontent-3")
                    .then(response => response.json())
                    .then(userList => {
                        const user = userList.find(user => user.username === username);

                        if (user) {
                            // User found, navigate to the dashboard for users
                            window.location.href = "../choices.html";
                        } else {
                            // User not found
                            message.textContent = "User not found in the database.";
                            message.style.color = "red";
                        }
                    })
                    .catch(error => {
                        console.error("Error fetching user data:", error);
                    });
                } else {
                    // User doesn't have a specific role or it's not "user"
                    message.textContent = "You don't have the necessary role to access this page.";
                    message.style.color = "red";
                }
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