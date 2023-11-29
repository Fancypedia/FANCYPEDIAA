import { postBiasa } from "./api.js";
import { getValue } from "./element.js";
import { APIRegistrasi } from "./gudangAPI.js";

const loadingIndicator = document.getElementById("loadingIndicator");

export default function RegistrasiUser(){
    let username = getValue("usernamesignup");
    let password = getValue("passwordsignup");
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
    
    postBiasa(APIRegistrasi,datainjson,responseData);
}

function responseData(result) {
    loadingIndicator.style.display = "none";
    if (result.message == "Berhasil Input data") {
        alert("berhasil register")
        window.location.href = "../signin/index.html";
    }
}