# Pertemuan 7: Chatbot AI dengan Google Gemini API

### Tujuan Pembelajaran
- Mengerti cara mendaftarkan diri untuk mendapatkan *API Key* Google Gemini
- Merakit semua materi dari Pertemuan 1-6
- Membuat chatbot yang *benar-benar pintar* karena tersambung dengan Generative AI milik Google

### Persiapan: Dapatkan Kunci (API Key)
Karena Gemini ini sangat canggih, Google perlu tahu siapa saja yang menggunakannya. Jadi mereka memberikan "kunci masuk" berupa tulisan *password* panjang acak.
1. Buka [Google AI Studio](https://aistudio.google.com/)
2. Login dengan akun Google (Gmail) kamu.
3. Cari tombol bertuliskan **Get API Key** lalu klik **Create API Key**.
4. Akan muncul deretan teks panjang. **Copy** (salin) bagian teks tersebut dan jangan disebarkan ke publik sembarangan!

### Konsep Mengirim Pesan ke API (POST Method)
Di pertemuan kemarin kita memakai `fetch` untuk *mengambil* data. Sekarang, kita harus *membawa data* (pertanyaan kita) ke server Gemini dan menunggunya menjawab. Cara ini disebut Method API `POST`. 
Kita akan menggunakan cara penulisan modern `async` dan `await` agar kodenya lebih rapi untuk menunggu balasan yang mungkin memakan waktu 2-3 detik.

### Implementasi Akhir
Ubah fungsi klik tombol di `script.js` untuk menghubungi Gemini:

```javascript
let inputBox = document.getElementById("user-input");
let sendButton = document.getElementById("send-btn");
let chatArea = document.getElementById("chat-area");

// GANTI BAGIAN DI DALAM KUTIP INI DENGAN API KEY GOOGLE KAMU SENDIRI!
const API_KEY = "AIzaSyBxxxxxxx-MASUKKAN-API-KEY-KAMU-DISINI"; 

// Tambahkan kata 'async' yang artinya kode ini harus bisa 'menunggu' proses selesai
sendButton.onclick = async function() {
    let pesanUser = inputBox.value;
    if (pesanUser === "") return;

    // 1. Tampilkan pesan User ke layar
    chatArea.innerHTML += `
        <div class="pesan pesan-user">
            <p>${pesanUser}</p>
        </div>
    `;
    inputBox.value = "";

    // 2. Siapkan alamat tujuan API Google Gemini
    const endpointGemini = "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=" + API_KEY;
    
    // 3. Siapkan bingkisan rapi (JSON Object) Format yang diminta Gemini
    const dataKirim = {
        contents: [{
            parts: [{ text: pesanUser }]
        }]
    };

    // Kita gunakan try-catch, buat berjaga-jaga kalau internet putus atau API Key salah
    try {
        // Tampilkan indikator loading (opsional)
        chatArea.innerHTML += `<div class="pesan pesan-bot" id="loading-bot"><p><em>Mengetik...</em></p></div>`;

        // 4. Minta ke kantor Post internet (fetch) untuk mengantarkan ke Google
        let response = await fetch(endpointGemini, {
            method: "POST", // Titip antar barang, bukan cuma nanya
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(dataKirim) // Ubah wujud Object JavaScript jadi format tulisan rapi (JSON string)
        });

        // 5. Ubah balasan paket kembali jadi Object yang bisa dibaca Javascript
        let data = await response.json();
        
        // 6. Korek bagian intinya saja yang berisi teks jawaban (mengurut path Object-nya)
        let jawabanBot = data.candidates[0].content.parts[0].text;

        // Hapus teks 'Mengetik...'
        document.getElementById("loading-bot").remove();

        // 7. Tampilkan jawaban Bot The Real AI
        chatArea.innerHTML += `
            <div class="pesan pesan-bot">
                <p>${jawabanBot}</p>
            </div>
        `;
    } catch (error) {
        document.getElementById("loading-bot").remove();
        // Kalau terjadi error (misal internet mati)
        chatArea.innerHTML += `
            <div class="pesan pesan-bot">
                <p>Maaf, koneksi ke otak AI terputus. Cek internet atau API Key kamu.</p>
            </div>
        `;
    }
};
```

**SELAMAT!! 🎉** Chatbot super pintar kamu sekarang sudah jadi. Mulai sekarang kamu mau nanya PR sekolah, minta diceritain resep masakan, atau dibikinin pantun, semua bisa! Project Based Learning kamu berhasil diselesaikan. Good Job!
