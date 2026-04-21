# Pertemuan 6: Object dan Mengambil Data dari Internet (API)

### Tujuan Pembelajaran
- Memahami struktur data *Object*
- Mengerti konsep API (Application Programming Interface)
- Berlatih memanggil API publik sederhana menggunakan `fetch`

### Teori Singkat

**Object (Objek)**
Kalau *Array* menggunakan nomor urutan untuk mengambil isinya, *Object* menggunakan **Kata Kunci (Key)**. Sangat mirip dengan kamus!

```javascript
let profil = {
    nama: "Budi",
    umur: 16,
    hobi: "Bermain Futsal"
};

// Mengambil datanya sangat gampang!
console.log(profil.nama); // Budi
console.log(profil.hobi); // Bermain Futsal
```

**API & Fetch (Mengambil Data dari Internet)**
Pernah bertanya-tanya dari mana aplikasi cuaca di HP tahu cuaca hari ini padahal developernya nggak ada di kotamu? Mereka menembak sebuah *API*.
API ibarat pelayan restoran. Kamu memesan (request), kemudian pelayan kembali membawakan makanannya (response data). Di JavaScript, kita memanggil pelayan itu dengan perintah `fetch()`.

*Contoh sederhana mengambil dan membaca fakta lucu tentang kucing dari website Ninja:*
```javascript
fetch("https://catfact.ninja/fact")
    .then(response => response.json()) // "Tolong ubah balasan dari server jadi format Object / JSON"
    .then(data => {
        // Disini data sudah siap digunakan!
        console.log("Fakta Kucing: " + data.fact);
    });
```

### Implementasi ke Chatbot
Sebelum kita pakai Gemini API (Kecerdasan Buatan asli) di pertemuan berikutnya, mari kita ubah chatbot kita agar jika user mengetik "fakta kucing", bot akan mengambil data lucu tentang kucing dari internet! 

Kita biarkan HTML dan CSS sama seperti sebelumnya, tapi kita tambah keajaiban di `script.js`:

```javascript
let inputBox = document.getElementById("user-input");
let sendButton = document.getElementById("send-btn");
let chatArea = document.getElementById("chat-area");

sendButton.onclick = function() {
    let pesanUser = inputBox.value;
    if (pesanUser === "") return;

    // 1. Tampilkan pesan user duluan ke layar (langsung taruh ke HTML)
    chatArea.innerHTML += `
        <div class="pesan pesan-user">
            <p>${pesanUser}</p>
        </div>
    `;
    inputBox.value = ""; // bersihkan kolom pengetikan

    let pesanLower = pesanUser.toLowerCase().trim();

    // 2. Cek apakah user minta fakta kucing
    if (pesanLower.includes("fakta kucing")) {
        fetch("https://catfact.ninja/fact")
            .then(function(response) {
                return response.json(); // Mengubah respon jaringan ke bentuk JSON object
            })
            .then(function(data) {
                // Tampilkan respon setelah data didapat dari internet!
                chatArea.innerHTML += `
                    <div class="pesan pesan-bot">
                        <p>Meow! 🐱 ${data.fact}</p>
                    </div>
                `;
            });
    } else {
        // Jika ketik yang lain
        chatArea.innerHTML += `
            <div class="pesan pesan-bot">
                <p>Aku hanya tahu fakta kucing saat ini! Coba ketik "fakta kucing".</p>
            </div>
        `;
    }
};
```

Coba jalankan dan ketik "fakta kucing"! Kalau komputermu tersambung ke internet, kamu tiba-tiba bisa melihat aplikasimu sangat canggih dan bisa mengambil informasi sedunia!
