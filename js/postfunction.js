import { postWithToken } from "https://jscroot.github.io/api/croot.js";
import {setInner,getValue} from "https://jscroot.github.io/element/croot.js";
import {setCookieWithExpireHour} from "https://jscroot.github.io/cookie/croot.js";

export default function PostSignUp(){
    let target_url = "https://asia-southeast2-testlogin-366704.cloudfunctions.net/function-16";
    let tokenkey = "token";
    let tokenvalue = "4a665307c8f41f3e1dd6be1df3f5354985ba33a3fd2c7f60ff69dae67433e337";
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