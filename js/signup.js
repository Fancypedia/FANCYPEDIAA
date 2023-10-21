document.getElementById('signupForm').addEventListener('submit', function (e) {
    e.preventDefault();

    // Mengambil nilai dari elemen input pada HTML
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Membuat objek yang berisi data pendaftaran pengguna
    const userData = {
        Username: username,
        Password: password
    };

    // Kirim permintaan HTTP (pendaftaran) dengan data pengguna
    fetch('https://asia-southeast2-testlogin-366704.cloudfunctions.net/post', {
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
        // Redirect ke halaman login setelah pendaftaran berhasil
        // window.location.href = '../theme/admin-dashboard.html'; // Ganti dengan nama file halaman login yang sesuai
    })
    .catch(error => {
        // Handle kesalahan (misalnya, tampilkan pesan kesalahan)
        console.error('Pendaftaran error:', error);
    });
});
