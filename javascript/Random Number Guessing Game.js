/**
 * Script Name: Random Number Guessing Game
 * Description: This script generates a random number and allows the user to guess the number.
 * Author: Foreverekk
 */

//
const randomNumber = Math.floor(Math.random() * 100) + 1;

/**
 * Starts the random number guessing game.
 * Prompts the user to guess a number between 1 and 100.
 * Provides feedback if the guess is too low or too high.
 * Continues until the correct number is guessed, displaying the number of attempts.
 */
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

startGame();
