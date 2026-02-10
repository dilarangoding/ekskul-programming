## Pertemuan 4: Percabangan If-Else untuk Respons Bot

### Tujuan Pembelajaran
- Memahami percabangan if, else if, else
- Membuat bot yang lebih pintar dengan berbagai respons
- Menerapkan operator perbandingan

### Teori Singkat

**Operator Perbandingan**
```javascript
5 == 5     // true (sama dengan)
5 === "5"  // false (sama dengan + tipe sama)
5 != 3     // true (tidak sama dengan)
5 > 3      // true (lebih besar)
5 < 3      // false (lebih kecil)
5 >= 5     // true (lebih besar atau sama)
```

**Struktur If-Else**
```javascript
if (kondisi1) {
    // jalankan jika kondisi1 benar
} else if (kondisi2) {
    // jalankan jika kondisi2 benar
} else {
    // jalankan jika semua salah
}
```

**Contoh Nyata:**
```javascript
let nilai = 85;

if (nilai >= 90) {
    console.log("A");
} else if (nilai >= 80) {
    console.log("B");
} else if (nilai >= 70) {
    console.log("C");
} else {
    console.log("D");
}
```

### Implementasi ke Chatbot

Update `script.js`:
```javascript
let inputBox = document.getElementById("user-input");
let sendButton = document.getElementById("send-btn");
let chatArea = document.getElementById("chat-area");

// Fungsi untuk mendapatkan respons bot
function getResponBot(pesan) {
    let pesanLower = pesan.toLowerCase().trim();
    
    if (pesanLower === "") {
        return "Kamu belum menulis apa-apa!";
    } else if (pesanLower.includes("halo") || pesanLower.includes("hai")) {
        return "Halo! Senang bertemu denganmu!";
    } else if (pesanLower.includes("siapa kamu")) {
        return "Aku adalah ChatBot!";
    } else if (pesanLower.includes("apa kabar")) {
        return "Aku baik-baik saja! Kamu sendiri bagaimana?";
    } else if (pesanLower.includes("nama")) {
        return "Namaku ChatBot. Kamu bisa memanggilku CB!";
    } else if (pesanLower.includes("terima kasih") || pesanLower.includes("makasih")) {
        return "Sama-sama! Senang bisa membantu!";
    } else if (pesanLower.includes("bye") || pesanLower.includes("dah")) {
        return "Sampai jumpa! Semoga harimu menyenangkan!";
    } else {
        return "Hmm, aku belum mengerti. Coba kata lain?";
    }
}

sendButton.onclick = function() {
    let pesanUser = inputBox.value;
    let responBot = getResponBot(pesanUser);
    
    chatArea.innerHTML = `
        <p><strong>Kamu:</strong> ${pesanUser}</p>
        <p><strong>Bot:</strong> ${responBot}</p>
    `;
    
    inputBox.value = "";
};
```

### Latihan Sederhana
1. Tambahkan respons untuk kata "hobi" → Bot jawab tentang hobi
2. Tambahkan respons untuk kata "cuaca" → Bot jawab tentang cuaca
3. Buat respons jika user bilang angka (hint: gunakan `!isNaN(pesan)`)