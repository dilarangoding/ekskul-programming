let inputBox = document.getElementById("user-input");
let sendButton = document.getElementById("send-btn");
let chatArea = document.getElementById("chat-area");

sendButton.onclick = function() {
    let pesanUser = inputBox.value;
    if (pesanUser === "") return;

    chatArea.innerHTML += `
        <div class="pesan pesan-user"><p>${pesanUser}</p></div>
    `;
    inputBox.value = "";

    let pesanLower = pesanUser.toLowerCase().trim();
    if (pesanLower.includes("fakta kucing")) {
        fetch("https://catfact.ninja/fact")
            .then(res => res.json())
            .then(data => {
                chatArea.innerHTML += `<div class="pesan pesan-bot"><p>Meow! 🐱 ${data.fact}</p></div>`;
            });
    } else {
        chatArea.innerHTML += `<div class="pesan pesan-bot"><p>Aku hanya tahu fakta kucing saat ini! Coba ketik "fakta kucing".</p></div>`;
    }
};