let inputBox = document.getElementById("user-input");
let sendButton = document.getElementById("send-btn");
let chatArea = document.getElementById("chat-area");

function getResponBot(pesan) {
    let pesanLower = pesan.toLowerCase().trim();
    if (pesanLower === "") return "Kamu belum menulis apa-apa!";
    else if (pesanLower.includes("halo") || pesanLower.includes("hai")) return "Halo! Senang bertemu denganmu!";
    else if (pesanLower.includes("siapa kamu")) return "Aku adalah ChatBot!";
    else if (pesanLower.includes("apa kabar")) return "Aku baik-baik saja! Kamu sendiri bagaimana?";
    else return "Hmm, aku belum mengerti. Coba kata lain?";
}

sendButton.onclick = function() {
    let pesanUser = inputBox.value;
    let responBot = getResponBot(pesanUser);
    chatArea.innerHTML += `
        <div class="pesan pesan-user"><p>${pesanUser}</p></div>
        <div class="pesan pesan-bot"><p>${responBot}</p></div>
    `;
    inputBox.value = "";
};