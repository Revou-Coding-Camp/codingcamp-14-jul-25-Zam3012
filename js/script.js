// Menunggu seluruh konten HTML selesai dimuat
document.addEventListener('DOMContentLoaded', function () {

    // --- Fungsi untuk menampilkan jam real-time ---
    const timeElement = document.getElementById('current-time');
    
    function updateTime() {
        const now = new Date();
        timeElement.textContent = now.toString();
    }
    
    // Panggil updateTime setiap detik (1000 milidetik)
    setInterval(updateTime, 1000);
    // Panggil sekali saat halaman pertama kali dimuat
    updateTime();


    // --- Fungsi untuk menangani pengiriman form ---
    const messageForm = document.getElementById('message-form');

    messageForm.addEventListener('submit', function (event) {
        // Mencegah halaman refresh saat form disubmit
        event.preventDefault();

        // 1. Ambil nilai dari setiap input form
        const nama = document.getElementById('nama').value;
        const tanggalLahir = document.getElementById('tanggal-lahir').value;
        // Cek radio button mana yang dipilih
        const jenisKelamin = document.querySelector('input[name="jenis-kelamin"]:checked').value;
        const pesan = document.getElementById('pesan').value;
        
        // 2. Tampilkan nilai ke area output
        document.getElementById('output-nama').textContent = nama;
        document.getElementById('output-tanggal-lahir').textContent = tanggalLahir;
        document.getElementById('output-jenis-kelamin').textContent = jenisKelamin;
        document.getElementById('output-pesan').textContent = pesan;

        // 3. (Opsional) Kosongkan form setelah submit
        messageForm.reset();
    });

});