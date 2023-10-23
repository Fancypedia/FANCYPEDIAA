import { postWithToken } from "https://jscroot.github.io/api/croot.js";
import {setInner,getValue} from "https://jscroot.github.io/element/croot.js";
import {setCookieWithExpireHour} from "https://jscroot.github.io/cookie/croot.js";

export default function PostSignUp(){
    let target_url = "https://asia-southeast2-testlogin-366704.cloudfunctions.net/postuser";
    let tokenkey = "token";
    let tokenvalue = "8650f7aa1049858d409f295f5452614416008fda3ffe095998cc77ed2e33d6b3";
    let datainjson = {
        "username": getValue("username"),
        "password": getValue("password")
    }

    postWithToken(target_url,tokenkey,tokenvalue,datainjson,responseData);

}



function responseData(result){
    setInner("pesan",result.message);
    setCookieWithExpireHour("token",result.token,2);
}