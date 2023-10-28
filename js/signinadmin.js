import {setCookieWithExpireHour} from "https://jscroot.github.io/cookie/croot.js";

document.addEventListener("DOMContentLoaded", function() {
    const loginFormAdmin = document.getElementById("loginFormAdmin");
    const message = document.getElementById("message");

    loginFormAdmin.addEventListener("submit", function(event) {
        event.preventDefault();

        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;

        // Send a POST request to your authentication API
        fetch("https://asia-southeast2-testlogin-366704.cloudfunctions.net/admin", {
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
                setCookieWithExpireHour("token",token,2);
                message.textContent = welcomeMessage;
                message.style.color = "green";
                // window.location.href = "../choices.html";
                console.log(token);
                console.log(welcomeMessage);
                

                // Menampilkan popup untuk memilih CMS atau adminDashboard
                const dashboardSelectionPopup = document.getElementById("dashboardSelectionPopup");
                dashboardSelectionPopup.style.display = "block";

                // Menangani pemilihan dashboard
                const cmsDashboardBtn = document.getElementById("cmsDashboardBtn");
                const adminDashboardBtn = document.getElementById("adminDashboardBtn");

                cmsDashboardBtn.addEventListener("click", function() {
                    // Redirect ke halaman CMS dashboard
                    window.location.href = "https://fancypedia.github.io/cms/";
                });

                adminDashboardBtn.addEventListener("click", function() {
                    // Redirect ke halaman Admin dashboard
                    window.location.href = "https://fancypedia.github.io/adminDashboard/";
                });
                

                
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