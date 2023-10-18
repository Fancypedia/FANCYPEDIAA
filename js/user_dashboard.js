document.getElementById('logoutButton').addEventListener('click', function () {
    // Redirect ke halaman login saat tombol keluar diklik
    window.location.href = 'login.html'; // Ganti dengan nama file halaman login yang sesuai
});
document.addEventListener('DOMContentLoaded', function () {
    fetch('http://54.179.160.206:8080/userss')
        .then(response => {
            if (response.ok) {
                return response.json();
            } else {
                throw new Error('Gagal mengambil data pengguna aktif');
            }
        })
        .then(data => {
            // Menampilkan jumlah pengguna aktif ke dalam elemen HTML
            const activeUsersCount = data.data.data.length;
            console.log('Jumlah pengguna aktif:', activeUsersCount);
            const activeUsersElement = document.getElementById('activeUsers');
            activeUsersElement.textContent = `Pengguna Aktif: ${activeUsersCount}`;
        })
        .catch(error => {
            console.error('Terjadi kesalahan:', error);
        });
});