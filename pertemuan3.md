## Pertemuan 3: Operator dan String Manipulation

### Tujuan Pembelajaran
- Memahami operator dalam JavaScript
- Memanipulasi string (teks)
- Menggabungkan teks untuk respons chat

### Teori Singkat

**Operator**
```javascript
// Operator Aritmatika
5 + 3   // 8 (penjumlahan)
10 - 2  // 8 (pengurangan)
4 * 3   // 12 (perkalian)
15 / 3  // 5 (pembagian)

// Operator String (penggabungan)
"Halo" + " " + "Budi"  // "Halo Budi"

// Template Literal (cara modern)
let nama = "Budi";
`Halo ${nama}, apa kabar?`  // "Halo Budi, apa kabar?"
```

**String Manipulation**
```javascript
let pesan = "Halo Dunia";

pesan.toLowerCase()    // "halo dunia"
pesan.toUpperCase()    // "HALO DUNIA"
pesan.length           // 10 (jumlah karakter)
pesan.includes("Halo") // true
```

### Implementasi ke Chatbot

Update `script.js`:
```javascript
let inputBox = document.getElementById("user-input");
let sendButton = document.getElementById("send-btn");
let chatArea = document.getElementById("chat-area");

sendButton.onclick = function() {
    let pesanUser = inputBox.value;
    
    // Bersihkan spasi dan ubah ke lowercase untuk pengecekan
    let pesanBersih = pesanUser.toLowerCase().trim();
    
    // Buat respons bot sederhana
    let responBot = "Maaf, saya tidak mengerti.";
    
    // Cek apakah pesan mengandung kata tertentu
    if (pesanBersih.includes("halo")) {
        responBot = "Halo juga! Apa kabar?";
    }
    
    // Tampilkan dengan format yang rapi
    chatArea.innerHTML = `
        <p><strong>Kamu:</strong> ${pesanUser}</p>
        <p><strong>Bot:</strong> ${responBot}</p>
    `;
    
    inputBox.value = "";
};
```


