import { postBiasa } from "./api.js";
import { getValue } from "./element.js";

export default function RegistrasiUser() {
    let target_url = "https://asia-southeast2-annular-hexagon-401501.cloudfunctions.net/signup-1fancy";
    let datainjson = {
        "username": getValue("usernamesignup"),
        "password": getValue("passwordsignup")
    }
    postBiasa(target_url, datainjson, responseData);
}

function responseData(result) {
    if (result.message == "Username telah dipakai") {
        alert("Username telah dipakai");
    }
    if (result.message == "Gagal Hash Password") {
        alert("Gagal Hash Password");
    }
    if (result.message == "Berhasil Input data") {
        alert("Berhasil Registrasi");
    }
}

// import { postBiasa } from "./api.js";
// import { setInner,getValue } from "./element.js";


// document.getElementById('signupForm').addEventListener('submit', function (e) {
//     e.preventDefault();

//     // Menyembunyikan formulir
//     const signupForm = document.getElementById('signupForm');
//     signupForm.style.display = 'none';

//     // Menampilkan animasi loading
//     const loadingAnimation = document.getElementById('loadingAnimation');
//     loadingAnimation.classList.remove('is-hidden');

//     // Mengambil nilai dari elemen input pada HTML
//     const username = document.getElementById('username').value;
//     const password = document.getElementById('password').value;
//     console.log('Pendaftaran berhasil:', username);

//     // Membuat objek yang berisi data pendaftaran pengguna
//     const userData = {
//         Username: username,
//         Password: password,
//         Role: "user"
//     };
//     console.log('Username', userData);
//     // Kirim permintaan HTTP (pendaftaran) dengan data pengguna
//     fetch('https://asia-southeast2-annular-hexagon-401501.cloudfunctions.net/signup-1fancy', {
//         method: 'POST',
//         body: JSON.stringify(userData),
//         headers: {
//             'Content-Type': 'application/json'
//         }
//     })
//     .then(response => {
//         if (response.ok) {
//             return response.json();
//         } else {
//             throw new Error('Pendaftaran gagal');
//         }
//     })
//     .then(data => {
        // Handle respons dari server (misalnya, tampilkan pesan sukses)
        // console.log('Pendaftaran berhasil:', data);

        // signupForm.style.display = 'block';

        // // Sembunyikan animasi loading setelah pendaftaran selesai
        // loadingAnimation.classList.add('is-hidden');

        // // Menyembunyikan
        // const username = document.getElementById('field-username');
        // username.classList.add('is-hidden');

        // const password = document.getElementById('field-password');
        // password.classList.add('is-hidden');

        // const btnSignup = document.getElementById('btnSignup');
        // btnSignup.classList.add('is-hidden');

        // const hrefSignin = document.getElementById('hrefSignin');
        // hrefSignin.classList.add('is-hidden');

        
        // // Menampilkan notifikasi
        // const notification = document.getElementById('notification');
        // notification.classList.remove('is-hidden');

        // // Menampilkan tombol "Ke Halaman Login"
        // const btnLoginDisini = document.getElementById('btnLoginDisini');
        // btnLoginDisini.classList.remove('is-hidden');
//     })
//     .catch(error => {
        // // Handle kesalahan (misalnya, tampilkan pesan kesalahan)

        // // Sembunyikan animasi loading setelah pendaftaran gagal
        // loadingAnimation.classList.add('is-hidden');

        // // Menampilkan kembali formulir jika pendaftaran gagal
        // signupForm.style.display = 'block';

        // console.error('Pendaftaran error:', error);
//     });
// });

// // Mengambil elemen tombol "Ke Halaman Login"
// const btnLoginDisini = document.getElementById('btnLoginDisini');

// // Menambahkan event listener untuk menanggapi klik tombol
// btnLoginDisini.addEventListener('click', function() {
//     // Redirect ke halaman login
//     window.location.href = '../theme/signin.html'; // Ganti dengan nama file halaman login yang sesuai
// });


