# Pertemuan 1: Pengenalan HTML & CSS Dasar

### Tujuan Pembelajaran
- Mengenal apa itu HTML dan CSS
- Membuat kerangka dasar website
- Membuat struktur awal untuk tampilan Chatbot web kita

### Teori Singkat

**HTML (HyperText Markup Language)**
HTML ibarat kerangka bangunan. HTML digunakan untuk membuat kerangka dan meletakkan elemen-elemen di halaman web.

```html
<h1>Ini Judul</h1>
<p>Ini adalah paragraf.</p>
<button>Klik Saya</button>
<input type="text" placeholder="Ketik sesuatu...">
```

**CSS (Cascading Style Sheets)**
CSS ibarat cat dan dekorasi bangunan. CSS digunakan untuk mempercantik tampilan HTML (mengatur warna, mengatur ukuran, mengatur posisi, dll).

```css
h1 {
    color: blue;         /* Mengubah warna teks */
    font-size: 24px;     /* Mengubah ukuran teks */
}
button {
    background-color: green; /* Warna latar belakang tombol */
    color: white;            /* Warna teks tombol */
}
```

### Praktik Pertama

Kita akan membuat fondasi file yang akan kita kembangkan jadi Chatbot di pertemuan berikutnya.

1. Buat folder baru di komputermu dengan nama `proyek-chatbot`.
2. Buka folder tersebut menggunakan Code Editor (seperti **Visual Studio Code**).
3. Buat satu file baru bernama `index.html`.
4. Ketikkan kerangka awal kita:

```html
<!DOCTYPE html>
<html>
<head>
    <title>Chatbot Pertamaku</title>
</head>
<body>
    <h1>Chatbot Sederhana</h1>
    
    <div id="chat-area">
        <!-- Area tempat histori chat akan muncul nanti -->
        <p>Halo, ini pesan dari chatbot!</p>
    </div>

    <div class="input-area">
        <!-- Tempat kita mengetik pesan -->
        <input type="text" placeholder="Ketik pesan di sini...">
        <button>Kirim</button>
    </div>
</body>
</html>
```

5. Buka file `index.html` tersebut lewat browser (Google Chrome / Firefox) dengan cara ditarik (drag and drop) ke browser atau klik dua kali di foldernya.

Di pertemuan selanjutnya, kita akan percantik tampilannya memakai file CSS khusus dan mulai belajar "otak" dari website kita yaitu **JavaScript**, supaya tombol "Kirim" bisa ditekan dan berfungsi!
