import { postBiasa } from "./api.js";
import { getValue } from "./element.js";
import { setCookieWithExpireHour } from "./cookies.js";
import { loginuserbarunowa } from "./gudangAPI.js"

const loadingIndicator = document.getElementById("loadingIndicator");

export default function LoginUser(){
    let username = getValue("usernamelogin");
    let password = getValue("passwordlogin");
    if (!username) {
        alert("Username perlu untuk diisi");
        return; // Stop execution if the fields are not filled
    }
    if (!password) {
        alert("Password perlu diisi");
        return; // Stop execution if the fields are not filled
    }
    let datainjson = {
        "username": username,
        "password": password
    }
    loadingIndicator.style.display = "block";

    postBiasa(loginuserbarunowa,datainjson,responseData);

}

// function responseData(data) {
//     loadingIndicator.style.display = "none";
//     if (data.message == "Selamat Datang") {
//         const token = data.token;
//         setCookieWithExpireHour("token",token,2);
//         window.location.href = "../../user";
//         console.log(token);
//     } 
// }

function responseData(data) {
    loadingIndicator.style.display = "none";

    if (data.status === true && data.message === "Berhasil Login") {
        const userData = data.data;

        // Accessing individual properties from the data object
        const username = userData.Username;
        const password = userData.Password;
        const privateInfo = userData.Private;
        const publicInfo = userData.Publick; // Note: Typo in the property name ("Publick" instead of "Public")

        // You can use the extracted data as needed

        // For example, setting a cookie
        setCookieWithExpireHour("username", username, 2);

        // Redirecting to another page
        window.location.href = "https://fancypedia.my.id/user/";

        // Logging some information
        console.log("Username:", username);
        console.log("Password:", password);
        console.log("Private Info:", privateInfo);
        console.log("Public Info:", publicInfo);
    } 
}
