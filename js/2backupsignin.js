import {setCookieWithExpireHour} from "https://jscroot.github.io/cookie/croot.js";


// document.getElementById('loginForm').addEventListener('submit', function (e) {
//     e.preventDefault();

document.addEventListener("DOMContentLoaded", function() {
    const loginForm = document.getElementById("loginForm");
    const message = document.getElementById("message");


    // Menyembunyikan formulir
    // const loginForm = document.getElementById('loginForm');
    // loginForm.style.display = 'none';

    // Menampilkan animasi loading
    // const loadingAnimation = document.getElementById('loadingAnimation');
    // loadingAnimation.classList.remove('is-hidden');


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
                setCookieWithExpireHour("token",token,2);
                const welcomeMessage = data.message;
                message.textContent = welcomeMessage;
                message.style.color = "green";
                const role = data.role;
                console.log(token);
                console.log(role);

                // loginForm.style.display = 'block';

                    // Sembunyikan animasi loading setelah pendaftaran selesai
                    // loadingAnimation.classList.add('is-hidden');

                    // Menyembunyikan
                    // const username = document.getElementById('field-username');
                    // username.classList.add('is-hidden');

                    // const password = document.getElementById('field-password');
                    // password.classList.add('is-hidden');

                    // const btnLogin = document.getElementById('btnLogin');
                    // btnLogin.classList.add('is-hidden');

                    // const hrefSignup = document.getElementById('hrefSignup');
                    // hrefSignup.classList.add('is-hidden');

                    // window.location.href = "../choices.html";
                
                    fetch("https://asia-southeast2-testlogin-366704.cloudfunctions.net/createcontent-3")
                    .then(response => response.json())
                    .then(userList => {
                        const user = userList.find(user => user.username === username);
                
                        if (user) {
                            // User found, check the password
                            if (user.password === password) {
                                // Password correct, navigate to the dashboard
                                window.location.href = "../choices.html";
                            } else {
                                
                                // Password incorrect
                                message.textContent = "Incorrect password.";
                                message.style.color = "red";
                            }
                        } else {
                            // User not found
                            message.textContent = "User not found in the database.";
                            message.style.color = "red";
                        }
                    })
                    .catch(error => {
                        // Handle any errors that occurred during the fetch
                        console.error('Error:', error);
                        message.textContent = "Error occurred while processing your request.";
                        message.style.color = "red";
                    });
                
            } else {
                fetch("https://asia-southeast2-testlogin-366704.cloudfunctions.net/createcontent-3")
                .then(response => response.json())
                .then(userList => {
                    const user = userList.find(user => user.username === username);


                    if (user) {
                        // User found, navigate to the dashboard
                        window.location.href = "../user/user.html";
                    } else {
                        // User not found
                        message.textContent = "User not found in the database.";
                        message.style.color = "red";
                    }
                })
                .catch(error => {
                    console.error("Error fetching user data:", error);
                });
            }
        })
        .catch(error => {
            console.error("Error:", error);
        });
    });
});