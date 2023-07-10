/**
 * Script Name: Real-time Chat Application
 * Description: This script implements a real-time chat application using WebSocket.
 * Author: Foreverekk
 */

// Connect to WebSocket server
const socket = new WebSocket('ws://localhost:8080');

// Function to handle WebSocket connection established
socket.addEventListener('open', (event) => {
  console.log('Connected to WebSocket server');
});

// Function to handle WebSocket messages
socket.addEventListener('message', (event) => {
  const message = JSON.parse(event.data);
  displayMessage(message);
});

// Function to send a chat message through WebSocket
function sendChatMessage(content) {
  const message = {
    type: 'chat',
    content: content,
  };
  socket.send(JSON.stringify(message));
}

// Function to send a system message through WebSocket
function sendSystemMessage(content) {
  const message = {
    type: 'system',
    content: content,
  };
  socket.send(JSON.stringify(message));
}

// Function to display a chat message on the webpage
function displayMessage(message) {
  const messageElement = document.createElement('div');
  messageElement.textContent = message.content;

  if (message.type === 'system') {
    messageElement.classList.add('system-message');
  } else {
    messageElement.classList.add('chat-message');
  }

  document.getElementById('chat-messages').appendChild(messageElement);
}

// Event listener for the send button
document.getElementById('send-button').addEventListener('click', () => {
  const inputElement = document.getElementById('message-input');
  const messageContent = inputElement.value.trim();

  if (messageContent !== '') {
    sendChatMessage(messageContent);
    inputElement.value = '';
  }
});

// Example usage of the script
sendSystemMessage('Welcome to the chat room!');

// You can call the sendChatMessage() function to send chat messages from the user interface
