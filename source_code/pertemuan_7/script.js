let inputBox = document.getElementById("user-input");
let sendButton = document.getElementById("send-btn");
let chatArea = document.getElementById("chat-area");

const API_KEY = ""; 

sendButton.onclick = async function() {
    let pesanUser = inputBox.value;
    if (pesanUser === "") return;

    chatArea.innerHTML += `
        <div class="pesan pesan-user"><p>${pesanUser}</p></div>
    `;
    inputBox.value = "";

    const endpointGemini = "https://generativelanguage.googleapis.com/v1beta/models/gemini-3-flash-preview:generateContent?key=" + API_KEY;
    const dataKirim = { contents: [{ parts: [{ text: pesanUser }] }] };

    try {
        chatArea.innerHTML += `<div class="pesan pesan-bot" id="loading-bot"><p><em>Mengetik...</em></p></div>`;
        
        let response = await fetch(endpointGemini, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(dataKirim)
        });

        let data = await response.json();

        if (!response.ok) {
            throw new Error(data.error?.message || "HTTP Error " + response.status);
        }

        let jawabanBot = data.candidates[0].content.parts[0].text;
        let formatHTML = marked.parse(jawabanBot);
        
        document.getElementById("loading-bot").remove();
        chatArea.innerHTML += `<div class="pesan pesan-bot">${formatHTML}</div>`;
        chatArea.scrollTop = chatArea.scrollHeight;

    } catch (error) {
        if(document.getElementById("loading-bot")) document.getElementById("loading-bot").remove();
        chatArea.innerHTML += `<div class="pesan pesan-bot"><p>Error: ${error.message}</p></div>`;
        console.error("Detail Error:", error);
    }
};

inputBox.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        event.preventDefault();
        sendButton.click();
    }
});
