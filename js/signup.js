import { postBiasa } from "./api.js";
import { getValue } from "./element.js";
import { userbarunowa } from "./gudangAPI.js";

const loadingIndicator = document.getElementById("loadingIndicator");

export default function RegistrasiUser(){
    let username = getValue("usernamesignup");
    let password = getValue("passwordsignup");
    let nowa = getValue("nowa");
    if (!username) {
        alert("Username perlu diisi");
        return; // Stop execution if the fields are not filled
    }
    if (!password) {
        alert("Password perlu diisi");
        return; // Stop execution if the fields are not filled
    }
    if (!nowa) {
        alert("NoWa perlu diisi");
        return; // Stop execution if the fields are not filled
    }
    let datainjson = {
        "username": username,
        "password": password,
        "no_whatsapp": nowa
    }
    loadingIndicator.style.display = "block";
    
    postBiasa(userbarunowa,datainjson,responseData);
}

function responseData(result) {
    loadingIndicator.style.display = "none";

    if (result.message == "Berhasil Input data") {
        alert("Berhasil Input Data");
        window.location.href = "../signin/index.html";
    }
}