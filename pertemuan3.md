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

Update `index.html`:
```html
    <!DOCTYPE html>
<html lang="id">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>ChatBot</title>
    <link rel="stylesheet" href="style.css">
</head>

<body>
    <div class="chat-container">
        <div class="chat-header">
            <h1>ChatBot</h1>
        </div>
        <div id="chat-area"></div>
        <div class="input-area">
            <input type="text" id="user-input" placeholder="Ketik pesan..." autofocus>
            <button id="send-btn">Kirim</button>
        </div>
    </div>
    <script src="script.js"></script>
</body>

</html>
```

Update `style.css`:

```css
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Segoe UI', Arial, sans-serif;
    background: #f5f5f5;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px;
}

.chat-container {
    width: 100%;
    max-width: 450px;
    background: #ffffff;
    border-radius: 16px;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
    overflow: hidden;
}

.chat-header {
    background: #2563eb;
    padding: 20px;
    text-align: center;
}

.chat-header h1 {
    color: white;
    font-size: 22px;
    font-weight: 600;
}

.chat-header p {
    color: rgba(255, 255, 255, 0.8);
    font-size: 12px;
    margin-top: 4px;
}

#chat-area {
    height: 400px;
    padding: 16px;
    overflow-y: auto;
    background: #fafafa;
}

.pesan {
    padding: 12px 16px;
    margin: 8px 0;
    border-radius: 16px;
    max-width: 80%;
    animation: muncul 0.2s ease;
    font-size: 14px;
    line-height: 1.5;
}

.pesan-user {
    background: #2563eb;
    color: white;
    margin-left: auto;
    border-bottom-right-radius: 4px;
}

.pesan-bot {
    background: #e5e7eb;
    color: #1f2937;
    border-bottom-left-radius: 4px;
}

.waktu {
    font-size: 10px;
    opacity: 0.6;
    margin-top: 4px;
}

.typing {
    color: #6b7280;
    font-style: italic;
    padding: 10px;
    font-size: 14px;
}

.input-area {
    display: flex;
    padding: 16px;
    gap: 10px;
    background: #ffffff;
    border-top: 1px solid #e5e7eb;
}

#user-input {
    flex: 1;
    padding: 12px 16px;
    border: 1px solid #d1d5db;
    border-radius: 24px;
    font-size: 14px;
    background: #ffffff;
    color: #1f2937;
    transition: border-color 0.2s ease;
}

#user-input::placeholder {
    color: #9ca3af;
}

#user-input:focus {
    outline: none;
    border-color: #2563eb;
}

#send-btn {
    padding: 12px 24px;
    background: #2563eb;
    color: white;
    border: none;
    border-radius: 24px;
    cursor: pointer;
    font-weight: 600;
    font-size: 14px;
    transition: background-color 0.2s ease;
}

#send-btn:hover {
    background: #1d4ed8;
}

#send-btn:active {
    background: #1e40af;
}

@keyframes muncul {
    from {
        opacity: 0;
        transform: translateY(8px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

#chat-area::-webkit-scrollbar {
    width: 6px;
}

#chat-area::-webkit-scrollbar-track {
    background: #f3f4f6;
}

#chat-area::-webkit-scrollbar-thumb {
    background: #d1d5db;
    border-radius: 3px;
}

#chat-area::-webkit-scrollbar-thumb:hover {
    background: #9ca3af;
}
```

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
