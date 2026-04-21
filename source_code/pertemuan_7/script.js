let inputBox = document.getElementById("user-input");
let sendButton = document.getElementById("send-btn");
let chatArea = document.getElementById("chat-area");

// GANTI BAGIAN DI DALAM KUTIP INI DENGAN API KEY GOOGLE KAMU SENDIRI!
const API_KEY = "MASUKKAN-API-KEY-KAMU-DISINI"; 

sendButton.onclick = async function() {
    let pesanUser = inputBox.value;
    if (pesanUser === "") return;

    chatArea.innerHTML += `
        <div class="pesan pesan-user"><p>${pesanUser}</p></div>
    `;
    inputBox.value = "";

    const endpointGemini = "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=" + API_KEY;
    const dataKirim = { contents: [{ parts: [{ text: pesanUser }] }] };

    try {
        chatArea.innerHTML += `<div class="pesan pesan-bot" id="loading-bot"><p><em>Mengetik...</em></p></div>`;
        let response = await fetch(endpointGemini, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(dataKirim)
        });
        let data = await response.json();
        let jawabanBot = data.candidates[0].content.parts[0].text;
        document.getElementById("loading-bot").remove();
        chatArea.innerHTML += `<div class="pesan pesan-bot"><p>${jawabanBot}</p></div>`;
        // Scroll ke bawah
        chatArea.scrollTop = chatArea.scrollHeight;
    } catch (error) {
        if(document.getElementById("loading-bot")) document.getElementById("loading-bot").remove();
        chatArea.innerHTML += `<div class="pesan pesan-bot"><p>Maaf, koneksi ke otak AI terputus. Cek internet atau API Key kamu.</p></div>`;
    }
};

// Menerima input pakai tombol Enter
inputBox.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        event.preventDefault();
        sendButton.click();
    }
});
