let inputBox = document.getElementById("user-input");
let sendButton = document.getElementById("send-btn");
let chatArea = document.getElementById("chat-area");
let riwayatChat = [];

function getResponBot(pesan) {
    let pesanLower = pesan.toLowerCase().trim();
    if (pesanLower.includes("halo")) return "Halo! Senang bertemu denganmu!";
    if (pesanLower.includes("siapa kamu")) return "Aku adalah Chatbot!";
    return "Maaf, aku masih belajar dan belum mengerti itu.";
}

function updateLayarChat() {
    chatArea.innerHTML = "";
    for (let i = 0; i < riwayatChat.length; i++) {
        chatArea.innerHTML += riwayatChat[i];
    }
}

sendButton.onclick = function() {
    let pesanUser = inputBox.value;
    if (pesanUser === "") return;
    
    let responBot = getResponBot(pesanUser);
    let kodeHTMLBaru = `
        <div class="pesan pesan-user"><p>${pesanUser}</p></div>
        <div class="pesan pesan-bot"><p>${responBot}</p></div>
    `;
    riwayatChat.push(kodeHTMLBaru);
    updateLayarChat();
    inputBox.value = "";
};