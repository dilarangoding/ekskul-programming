# Pertemuan 2

- Memahami variabel dan tipe data JavaScript
- Mengambil input user dan menampilkannya

**Variabel JavaScript**
Variabel adalah wadah untuk menyimpan data. Seperti kotak berlabel.

```javascript
let nama = "Budi";        // teks (string)
let umur = 16;            // angka (number)
let aktif = true;         // boolean (true/false)
```

### Implementasi ke Chatbot

**1. Buat file `index.html`:**

```html
<!DOCTYPE html>
<html>
<head>
    <title>Chatbot</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="chat-container">
        <h1>Chatbot</h1>
        <div id="chat-area"></div>
        <div class="input-area">
            <input type="text" id="user-input" placeholder="Ketik pesan...">
            <button id="send-btn">Kirim</button>
        </div>
    </div>
    <script src="script.js"></script>
</body>
</html>
```

**2. Buat file `style.css`:**
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

**3. Buat file `script.js`:**
