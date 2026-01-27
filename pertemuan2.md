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
body {
    font-family: Arial, sans-serif;
    background: #1a1a2e;
    display: flex;
    justify-content: center;
    padding: 20px;
}

.chat-container {
    width: 400px;
    background: #16213e;
    border-radius: 10px;
    padding: 20px;
}

h1 {
    color: white;
    text-align: center;
}

#chat-area {
    height: 300px;
    background: #0f3460;
    border-radius: 8px;
    padding: 10px;
    overflow-y: auto;
    margin-bottom: 10px;
}

.input-area {
    display: flex;
    gap: 10px;
}

#user-input {
    flex: 1;
    padding: 10px;
    border: none;
    border-radius: 5px;
}

#send-btn {
    padding: 10px 20px;
    background: #e94560;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
}
```

**3. Buat file `script.js`:**
