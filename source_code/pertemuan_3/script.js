let inputBox = document.getElementById("user-input");
let sendButton = document.getElementById("send-btn");
let chatArea = document.getElementById("chat-area");

sendButton.onclick = function() {
    let pesanUser = inputBox.value;
    let pesanBersih = pesanUser.toLowerCase().trim();
    let responBot = "Maaf, saya tidak mengerti.";
    if (pesanBersih.includes("halo")) {
        responBot = "Halo juga! Apa kabar?";
    }
    chatArea.innerHTML = `
        <p><strong>Kamu:</strong> ${pesanUser}</p>
        <p><strong>Bot:</strong> ${responBot}</p>
    `;
    inputBox.value = "";
};