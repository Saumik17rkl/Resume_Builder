document.getElementById('subscribe-btn')?.addEventListener('click', function () {
  let email = document.getElementById('email')?.value.trim()
  if (email && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    alert('Subscribed successfully!')
  } else {
    alert('Please enter a valid email address.')
  }
})

document.querySelector('.menu-toggle')?.addEventListener('click', function () {
  document.querySelector('.nav-links')?.classList.toggle('active')
})

document.addEventListener('DOMContentLoaded', function () {
  const chatbotButton = document.getElementById('chatbot-button')
  const chatbotContainer = document.getElementById('chatbot-container')
  const closeChatbot = document.getElementById('close-chatbot')
  const chatMessages = document.getElementById('chat-messages')
  const chatInput = document.getElementById('chat-input')
  const sendBtn = document.getElementById('send-btn')

  if (chatbotButton) {
    chatbotButton.addEventListener('click', function () {
      chatbotContainer?.classList.toggle('show')
    })
  }

  if (closeChatbot) {
    closeChatbot.addEventListener('click', function () {
      chatbotContainer?.classList.remove('show')
    })
  }

  if (sendBtn && chatInput) {
    sendBtn.addEventListener('click', sendMessage)
    chatInput.addEventListener('keypress', function (event) {
      if (event.key === 'Enter') sendMessage()
    })
  }

  function sendMessage() {
    const userMessage = chatInput?.value.trim()
    if (!userMessage) return

    appendMessage('You', userMessage)
    chatInput.value = ''

    setTimeout(() => {
      appendMessage('AI', getBotResponse(userMessage))
    }, 500)
  }

  function appendMessage(sender, message) {
    if (!chatMessages) return
    const messageElement = document.createElement('div')
    messageElement.classList.add('message', sender.toLowerCase())
    messageElement.innerHTML = `<strong>${sender}:</strong> ${message}`
    chatMessages.appendChild(messageElement)
    chatMessages.scrollTop = chatMessages.scrollHeight
  }

  function getBotResponse(input) {
    const responses = {
      'hello': 'Hi there! How can I assist you?',
      'how are you': 'I am an AI chatbot, always here to help!',
      'bye': 'Goodbye! Have a great day!',
      'help': 'Sure! What do you need help with?',
      'thank you': 'You\'re welcome! Let me know if you need anything else.'
    }
    return responses[input.toLowerCase()] || 'I am not sure how to respond to that. Can you rephrase?'
  }
})
