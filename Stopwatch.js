/**
 * Script Name: Stopwatch
 * Description: This script implements a basic stopwatch with start, stop, and reset functionality.
 * Author: Foreverekk
 */

// Stopwatch object
const stopwatch = {
    startTime: 0,
    running: false,
    elapsedTime: 0,
  
    // Function to start the stopwatch
    start() {
      if (!this.running) {
        this.startTime = Date.now() - this.elapsedTime;
        this.running = true;
        console.log('Stopwatch started.');
      } else {
        console.log('Stopwatch is already running.');
      }
    },
  
    // Function to stop the stopwatch
    stop() {
      if (this.running) {
        this.elapsedTime = Date.now() - this.startTime;
        this.running = false;
        console.log('Stopwatch stopped. Elapsed time: ' + this.elapsedTime + 'ms');
      } else {
        console.log('Stopwatch is already stopped.');
      }
    },
  
    // Function to reset the stopwatch
    reset() {
      this.startTime = 0;
      this.running = false;
      this.elapsedTime = 0;
      console.log('Stopwatch reset.');
    }
  };
  
  // Example usage of the script
  stopwatch.start();
  setTimeout(() => {
    stopwatch.stop();
  }, 2000);
  stopwatch.start();
  setTimeout(() => {
    stopwatch.stop();
  }, 1000);
  stopwatch.reset();
  