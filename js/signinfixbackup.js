
document.addEventListener("DOMContentLoaded", function() {
    const loginForm = document.getElementById("loginForm");
    const message = document.getElementById("message");

    loginForm.addEventListener("submit", function(event) {
        event.preventDefault();

        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;

        // Send a POST request to the updated authentication API with the "user" role
        fetch("https://asia-southeast2-annular-hexagon-401501.cloudfunctions.net/signin-1fancy", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                username: username,
                password: password,
            })
        })
        .then(response => response.json()) // Parse response as JSON
        .then(data => {
            if (data.status && data.message === "Berhasil Login") {
                const token = data.data.private;
                message.textContent = "Login successful";
                document.cookie = `token=${token}; max-age=${2 * 60 * 60}`; // Set cookie for 2 hours
                message.style.color = "green";
                console.log("Login successful");
                console.log("Token:", token);
            
                // Display the token in a specified div
                const tokenDisplay = document.getElementById("tokenDisplay");
                tokenDisplay.textContent = `Your token is: ${token}`;
            
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
