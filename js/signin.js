import {setCookieWithExpireHour} from "https://jscroot.github.io/cookie/croot.js";

document.addEventListener("DOMContentLoaded", function() {
    const loginForm = document.getElementById("loginForm");
    const message = document.getElementById("message");

    loginForm.addEventListener("submit", function(event) {
        event.preventDefault();
        
        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;

        // Kirim permintaan POST ke API
        fetch("https://asia-southeast2-annular-hexagon-401501.cloudfunctions.net/signin-1fancy", {
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
                // Pengolahan respons setelah login berhasil
                const token = data.token;
                const welcomeMessage = data.message;
                message.textContent = welcomeMessage;
                setCookieWithExpireHour("token",token,2);
                message.style.color = "green";
                console.log(token);

                // Redirect ke halaman dashboard setelah login berhasil
                window.location.href = "https://fancypedia.github.io/user/";
            } else {
                // Pengolahan respons jika login gagal
                message.textContent = "Login failed. Please check your username and password.";
                message.style.color = "red";
            }
        })
        .catch(error => {
            console.error("Error:", error);
        });
    });
});
