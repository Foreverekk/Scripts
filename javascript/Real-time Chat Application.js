/**
 * Script Name: Real-time Chat Application
 * Description: This script implements a real-time chat application using WebSocket.
 * Author: Foreverekk
 */

//
const socket = new WebSocket('ws://localhost:8080');

socket.addEventListener('open', (event) => {
  console.log('Connected to WebSocket server');
});

socket.addEventListener('message', (event) => {
  const message = JSON.parse(event.data);
  displayMessage(message);
});

/**
 * Sends a chat message to the WebSocket server.
 * The message is sent in JSON format with a type of 'chat'.
 * @param {string} content - The content of the chat message to be sent.
 */
function sendChatMessage(content) {
  const message = {
    type: 'chat',
    content: content,
  };
  socket.send(JSON.stringify(message));
}

/**
 * Sends a system message to the WebSocket server.
 * The message is sent in JSON format with a type of 'system'.
 * @param {string} content - The content of the system message to be sent.
 */
function sendSystemMessage(content) {
  const message = {
    type: 'system',
    content: content,
  };
  socket.send(JSON.stringify(message));
}

/**
 * Displays a message in the chat interface.
 * @param {Object} message - A message object with 'type' and 'content' properties.
 * The 'type' property is either 'system' or 'chat', and the 'content' property is a string.
 * The message is displayed in the chat interface with a class of either 'system-message'
 * or 'chat-message', depending on the type of message.
 */
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

document.getElementById('send-button').addEventListener('click', () => {
  const inputElement = document.getElementById('message-input');
  const messageContent = inputElement.value.trim();

  if (messageContent !== '') {
    sendChatMessage(messageContent);
    inputElement.value = '';
  }
});

// Example Usage:
sendSystemMessage('Welcome to the chat room!');

// You can call the sendChatMessage() function to send chat messages from the user interface
