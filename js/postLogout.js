// import Logout from "./logout.js";
// import checkCookie from "./checkCookie.js";

// window.Logout = Logout;
// window.checkCookie = checkCookie;

import { deleteCookie } from "./cookies.js";

export default function Logout() {
    // Hapus cookie
    deleteCookie();

    // Hapus data dari sessionStorage
    sessionStorage.clear();

    // Alihkan ke halaman login
    window.location.href = "../../login";
}