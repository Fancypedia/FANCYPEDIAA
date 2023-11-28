import { getCookie,deleteCookie } from "./cookies.js";
import { APIAuthorization } from "./gudangAPI.js"

export default function Authorization() {
    const myHeaders = new Headers();
    let tokencookie = getCookie("token");
    myHeaders.set('token', tokencookie);

    const adminAuthorizationElement = document.getElementById('admin-authorization');
    const authorAuthorizationElement = document.getElementById('author-authorization');
    const userAuthorizationElement = document.getElementById('user-authorization');

    // Fetch GET request
    return fetch(APIAuthorization, {
        method: 'GET',
        headers: myHeaders
    })
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
    })
    .then(data => {
        // Process the received data
        handleAuthorizationResult(data);

        return data; // Return the data for use in main.js if needed
    })
    .catch(error => {
        // Handle fetch errors
        console.error('Fetch Error:', error);
        throw error; // Throw back the error for use in main.js if needed
    });

    function handleAuthorizationResult(data) {
        const userData = data.data;
        const role = userData.role;

        if (data.status === true) {
            // Additional logic based on the role and elements
            if (adminAuthorizationElement && role.admin === false) {
                console.error('Error:', data.message);
                alert("Anda tidak terdaftar sebagai admin");
                deleteCookie();
                sessionStorage.clear();
                window.location.href = "../../login";
            }
            if (authorAuthorizationElement && role.author === false) {
                console.error('Error:', data.message);
                alert("Anda tidak terdaftar sebagai author");
                deleteCookie();
                sessionStorage.clear();
                window.location.href = "../../login";
            }
            if (userAuthorizationElement && role.user === false) {
                console.error('Error:', data.message);
                alert("Akun anda tidak aktif");
                deleteCookie();
                sessionStorage.clear();
                window.location.href = "../../login";
            }
        } else if (data.status === false) {
            // No token header or no decode result
            console.error('Error:', data.message);
            alert("Ada blom login");
            deleteCookie();
            sessionStorage.clear();
            window.location.href = "../../login";
        }
    }
}