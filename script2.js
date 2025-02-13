document.addEventListener("DOMContentLoaded", function() {
    const chatMessages = document.getElementById("chat-messages");
    const chatInput = document.getElementById("chat-input");
    const sendBtn = document.getElementById("send-btn");
    const closeChat = document.getElementById("close-chat");

    // Close Chat Function
    closeChat.addEventListener("click", function() {
        window.parent.document.getElementById("chatbot-container").style.display = "none";
    });

    // Send Message
    sendBtn.addEventListener("click", function() {
        sendMessage();
    });

    chatInput.addEventListener("keypress", function(event) {
        if (event.key === "Enter") {
            sendMessage();
        }
    });

    function sendMessage() {
        const userMessage = chatInput.value.trim();
        if (userMessage === "") return;

        appendMessage("User", userMessage, "user-message");

        setTimeout(() => {
            const adminResponse = getAdminResponse(userMessage);
            appendMessage("Admin", adminResponse, "admin-message");
        }, 1000);

        chatInput.value = "";
    }

    function appendMessage(sender, message, className) {
        const messageElement = document.createElement("div");
        messageElement.classList.add(className);
        messageElement.innerHTML = `<strong>${sender}:</strong> ${message}`;
        chatMessages.appendChild(messageElement);
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }

    function getAdminResponse(userMessage) {
        const responses = {
            "hello": "Hello! How can I assist you today?",
            "hi": "Hi there! What do you need help with?",
            "how are you": "I'm an AI Admin assistant. How can I help?",
            "bye": "Goodbye! Have a nice day!",
        };
        return responses[userMessage.toLowerCase()] || "I'm not sure how to respond. Can you clarify?";
    }
});
