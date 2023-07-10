/**
 * Script Name: Countdown Timer
 * Description: This script implements a basic countdown timer.
 * Author: Foreverekk
 */

// Function to start the countdown timer
function startCountdown(duration, display) {
    let timer = duration;
    let minutes, seconds;
  
    const countdownInterval = setInterval(() => {
      minutes = parseInt(timer / 60, 10);
      seconds = parseInt(timer % 60, 10);
  
      minutes = minutes < 10 ? "0" + minutes : minutes;
      seconds = seconds < 10 ? "0" + seconds : seconds;
  
      display.textContent = minutes + ":" + seconds;
  
      if (--timer < 0) {
        clearInterval(countdownInterval);
        display.textContent = "Time's up!";
      }
    }, 1000);
  }
  
  // Example usage of the script
  const countdownDuration = 5 * 60; // 5 minutes
  const display = document.getElementById("countdown");
  
  startCountdown(countdownDuration, display);
  