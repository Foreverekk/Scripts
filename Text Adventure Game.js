/**
 * Script Name: Text Adventure Game
 * Description: This script implements a simple text-based adventure game.
 * Author: Foreverekk
 */

// Function to start the game
function startGame() {
    const playerName = prompt('Enter your name:');
  
    alert(`Welcome, ${playerName}! Let's begin the adventure.`);
  
    let currentRoom = 'start';
  
    while (currentRoom !== 'end') {
      switch (currentRoom) {
        case 'start':
          alert('You are in a dark room. There are two doors in front of you.');
          const doorChoice = prompt('Enter 1 to go through the left door or 2 to go through the right door:');
          
          if (doorChoice === '1') {
            currentRoom = 'treasure';
          } else if (doorChoice === '2') {
            currentRoom = 'monster';
          } else {
            alert('Invalid choice! Please try again.');
          }
          break;
  
        case 'treasure':
          alert('Congratulations! You found a room full of treasures.');
          currentRoom = 'end';
          break;
  
        case 'monster':
          alert('Oh no! A monster attacked you. Game Over!');
          currentRoom = 'end';
          break;
      }
    }
  
    alert('Game over. Thank you for playing!');
  }
  
  // Start the game
  startGame();
  