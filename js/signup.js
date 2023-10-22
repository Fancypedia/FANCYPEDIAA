document.getElementById('signupForm').addEventListener('submit', function (e) {
    e.preventDefault();

    // Mengambil nilai dari elemen input pada HTML
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Membuat objek yang berisi data pendaftaran pengguna
    const userData = {
        Username: username,
        Password: password,
        Role: "user"

    };

    // Kirim permintaan HTTP (pendaftaran) dengan data pengguna
    fetch('https://asia-southeast2-testlogin-366704.cloudfunctions.net/postuser', {
        method: 'POST',
        body: JSON.stringify(userData),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(response => {
        if (response.ok) {
            return response.json();
        } else {
            throw new Error('Pendaftaran gagal');
        }
    })
    .then(data => {
        // Handle respons dari server (misalnya, tampilkan pesan sukses)
        console.log('Pendaftaran berhasil:', data);
    
        // Menyembunyikan formulir setelah pendaftaran berhasil
        const username = document.getElementById('username');
        username.style.display = 'none';

        const password = document.getElementById('password');
        password.style.display = 'none';

        const btnSignup = document.getElementById('btnSignup');
        btnSignup.style.display = 'none';

        const hrefSignin = document.getElementById('hrefSignin');
        hrefSignin.style.display = 'none';
    
        // Menampilkan notifikasi
        const notification = document.getElementById('notification');
        notification.classList.remove('is-hidden');

        // Menampilkan logindisini
        const btnLoginDisini = document.getElementById('btnLoginDisini');
        btnLoginDisini.classList.remove('is-hidden');
    
        // Redirect ke halaman login setelah pendaftaran berhasil
        // window.location.href = '../theme/admin-dashboard.html'; // Ganti dengan nama file halaman login yang sesuai
    })
    
    
    .catch(error => {
        // Handle kesalahan (misalnya, tampilkan pesan kesalahan)
        console.error('Pendaftaran error:', error);
    });
});

// Mengambil elemen tombol "Ke Halaman Login"
const btnLoginDisini = document.getElementById('btnLoginDisini');

// Menambahkan event listener untuk menanggapi klik tombol
btnLoginDisini.addEventListener('click', function() {
    // Redirect ke halaman login
    window.location.href = '../theme/signin.html'; // Ganti dengan nama file halaman login yang sesuai
});

