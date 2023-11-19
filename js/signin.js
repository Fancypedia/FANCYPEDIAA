// import {setCookieWithExpireHour} from "https://jscroot.github.io/cookie/croot.js";

// import { postWithToken } from "./api.js";
// import { setInner,getValue } from "./element.js";
// import { setCookieWithExpireHour } from "./cookies.js";

// document.addEventListener("DOMContentLoaded", function() {
//     const loginForm = document.getElementById("loginForm");
//     const message = document.getElementById("message");

//     loginForm.addEventListener("submit", function(event) {
//         event.preventDefault();
        
//         const username = document.getElementById("username").value;
//         const password = document.getElementById("password").value;

//         // Kirim permintaan POST ke API
//         fetch("https://asia-southeast2-annular-hexagon-401501.cloudfunctions.net/signin-1fancy", {
//             method: "POST",
//             headers: {
//                 "Content-Type": "application/json"
//             },
//             body: JSON.stringify({
//                 username: username,
//                 password: password
//             })
//         })
//         .then(response => response.json())
//         .then(data => {
//             if (data.status === true) {
//                 // Pengolahan respons setelah login berhasil
//                 const token = data.token;
//                 const welcomeMessage = data.message;
//                 message.textContent = welcomeMessage;
//                 setCookieWithExpireHour("token",token,2);
//                 message.style.color = "green";
//                 console.log(token);

//                 // Redirect ke halaman dashboard setelah login berhasil
//                 window.location.href = "https://fancypedia.github.io/user/";
//             } else {
//                 // Pengolahan respons jika login gagal
//                 message.textContent = "Login failed. Please check your username and password.";
//                 message.style.color = "red";
//             }
//         })
//         .catch(error => {
//             console.error("Error:", error);
//         });
//     });
// });

import { postWithToken } from "./api.js";
import { setInner,getValue } from "./element.js";
import { setCookieWithExpireHour } from "./cookies.js";

export default function LoginUser(){
    let target_url = "https://asia-southeast2-annular-hexagon-401501.cloudfunctions.net/signin-1fancy";
    let tokenkey = "token";
    let tokenvalue = "27ff1dc8318af1c02d3725eced24d0cbe231f50303d146f91a5608bdb61c04ab"; //publickey
    let datainjson = {
        "username": getValue("usernamelogin"),
        "password": getValue("passwordlogin")
    }

    postWithToken(target_url,tokenkey,tokenvalue,datainjson,responseData);

}

function responseData(result) {
    setInner("message", result.message);
    setCookieWithExpireHour("token", result.token, 2);
    setCookieWithExpireHour("username", getValue("usernamelogin"), 2);
    if (result.message == "Password Salah") {
        alert("Password Salah");
    }
    if (result.message == "Selamat Datang") {
        window.location.href = "https://fancypedia.my.id/user/";
    }
}