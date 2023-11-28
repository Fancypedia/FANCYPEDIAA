import { postBiasa } from "./api.js";
import { getValue } from "./element.js";
import { APIRegistrasi } from "./gudangAPI.js"

const loadingIndicator = document.getElementById("loadingIndicator");

export default function RegistrasiUser(){
    let name = getValue("name");
    let email = getValue("email");
    let username = getValue("username");
    let password = getValue("password");
    if (email && !(email.endsWith("@gmail.com") || email.endsWith("@std.ulbi.ac.id") || email.endsWith("@ulbi.ac.id"))) {
        alert("Format email tidak benar");
        return; // Stop execution if the email format is not valid
    }
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
    if (result.message == "Username telah dipakai") {
        alert("Username telah dipakai");
    }
    if (result.message == "Gagal Hash Password") {
        alert("Gagal Hash Password");
    }
    if (result.message == "Berhasil Input data") {
        window.location.href = "../login";
    }
}