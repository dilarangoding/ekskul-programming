# Pertemuan 5: Array dan Perulangan (Looping)

### Tujuan Pembelajaran
- Memahami struktur data *Array* (variabel berisi banyak data)
- Menggunakan perulangan (`for`) untuk mengulang proses
- Menyimpan histori percakapan (chat history) ke dalam *Array*

### Teori Singkat

**Array (Daftar/Kumpulan Data)**
Jika variabel biasa ibarat sebuah loker yang hanya muat satu barang, *Array* ibarat lemari besar yang punya banyak laci bernomor.

```javascript
let namaSiswa = ["Andi", "Budi", "Citra"];

console.log(namaSiswa[0]); // Menampilkan: Andi (Ingat! komputer mulai menghitung dari angka 0)
console.log(namaSiswa[1]); // Menampilkan: Budi

// Menambahkan data baru di urutan paling belakang
namaSiswa.push("Dani"); 
```

**Perulangan (For Loop)**
Programmer itu pemalas! Jika ada tugas yang diulang ribuan kali, kita suruh komputer pakai perulangan *looping*.

```javascript
// Akan mencetak angka 1 sampai 5
for (let i = 1; i <= 5; i++) {
    console.log("Angka ke-" + i);
}

// Menampilkan semua teman dalam array
for (let i = 0; i < namaSiswa.length; i++) {
    console.log("Nama: " + namaSiswa[i]);
}
```

### Implementasi ke Chatbot
Saat ini chatbot kita kalau mengirim pesan yang baru, pesan lamanya *hilang* (tertumpuk) atau kodenya rumit banget kalau harus ditambahkan satu per satu. 
Kita akan menyimpan setiap pesan (baik dari user maupun respon bot) ke dalam Array `riwayatChat`, lalu mencetaknya pakai `for`.

Ubah kode di `script.js` menjadi seperti ini:

```javascript
let inputBox = document.getElementById("user-input");
let sendButton = document.getElementById("send-btn");
let chatArea = document.getElementById("chat-area");

// Deklarasi array kosong untuk menyimpan obrolan
let riwayatChat = [];

function getResponBot(pesan) {
    let pesanLower = pesan.toLowerCase().trim();
    if (pesanLower.includes("halo")) return "Halo! Senang bertemu denganmu!";
    if (pesanLower.includes("siapa kamu")) return "Aku adalah Chatbot!";
    return "Maaf, aku masih belajar dan belum mengerti itu.";
}

// Fungsi khusus untuk menampilkan seluruh isi array ke layar
function updateLayarChat() {
    // 1. Kosongkan dulu layarnya
    chatArea.innerHTML = "";
    
    // 2. Tampilkan semua data dari sejarah obrolan memutar (looping)
    for (let i = 0; i < riwayatChat.length; i++) {
        chatArea.innerHTML += riwayatChat[i];
    }
}

sendButton.onclick = function() {
    let pesanUser = inputBox.value;
    if (pesanUser === "") return; // Kalau pesannya kosong, batalkan
    
    let responBot = getResponBot(pesanUser);
    
    // Siapkan kode HTML untuk tampilan pesan User dan Bot (bisa memakai CSS yang dibuat di Pertemuan 2)
    let kodeHTMLBaru = `
        <div class="pesan pesan-user">
            <p>${pesanUser}</p>
        </div>
        <div class="pesan pesan-bot">
            <p>${responBot}</p>
        </div>
    `;
    
    // Masukkan rentetan percakapan ke dalam Array
    riwayatChat.push(kodeHTMLBaru);
    
    // Panggil fungsinya untuk menampilkan chat
    updateLayarChat();
    
    inputBox.value = "";
};
```

### Latihan Sederhana
Coba kirimkan lebih dari 3 pesan secara berturut-turut! Apakah semua riwayat pesannya terekam dengan baik? Jika area *chat* memanjang, scrollbar yang diatur di CSS pertemuan lama akan muncul!
