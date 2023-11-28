import { postBiasa } from "./api.js";
import { getValue } from "./element.js";
import { setCookieWithExpireSecond } from "./cookies.js";
import { APILogin } from "./gudangAPI.js"

const loadingIndicator = document.getElementById("loadingIndicator");

export default function LoginUser(){
    let username = getValue("usernamelogin");
    let password = getValue("passwordlogin");
    if (!username) {
        alert("Username perlu diisi");
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

    postBiasa(APILogin,datainjson,responseData);

}

function responseData(result) {
    loadingIndicator.style.display = "none";
    if (result.message == "Selamat Datang") {
        setCookieWithExpireSecond("token", result.token, 1);
        window.location.href = "../../user";
    } 
}