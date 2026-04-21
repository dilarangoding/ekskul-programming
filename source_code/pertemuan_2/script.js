let inputBox = document.getElementById("user-input");
let sendButton = document.getElementById("send-btn");
let chatArea = document.getElementById("chat-area");

sendButton.onclick = function() {
    let pesanUser = inputBox.value;
    chatArea.innerHTML = "Kamu berkata: " + pesanUser;
    inputBox.value = "";
};