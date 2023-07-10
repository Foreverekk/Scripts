/**
 * Script Name: Random Number Guessing Game
 * Description: This script generates a random number and allows the user to guess the number.
 * Author: Foreverekk
 */

// Generate a random number between 1 and 100
const randomNumber = Math.floor(Math.random() * 100) + 1;

// Function to start the guessing game
function startGame() {
  let guess;
  let attempts = 0;

  do {
    guess = parseInt(prompt("Guess a number between 1 and 100:"));

    if (isNaN(guess)) {
      alert("Please enter a valid number!");
      continue;
    }

    attempts++;

    if (guess < randomNumber) {
      alert("Too low! Try again.");
    } else if (guess > randomNumber) {
      alert("Too high! Try again.");
    } else {
      alert(`Congratulations! You guessed the number in ${attempts} attempts.`);
      break;
    }
  } while (true);
}

// Start the game
startGame();
