/**
 * Script Name: Stopwatch
 * Description: This script implements a basic stopwatch with start, stop, and reset functionality.
 * Author: Foreverekk
 */

//
const stopwatch = {
    startTime: 0,
    running: false,
    elapsedTime: 0,
  
    /**
     * Starts the stopwatch.
     * If the stopwatch is not running, it sets the startTime to the current time minus the elapsedTime,
     * sets running to true, and logs a message indicating the stopwatch has started.
     * If the stopwatch is already running, it logs a message indicating the stopwatch is already running.
     */
    start() {
      if (!this.running) {
        this.startTime = Date.now() - this.elapsedTime;
        this.running = true;
        console.log('Stopwatch started.');
      } else {
        console.log('Stopwatch is already running.');
      }
    },
  
    /**
     * Stops the stopwatch.
     * If the stopwatch is running, it stops it and prints the elapsed time to the console.
     * If the stopwatch is already stopped, it logs a message to the console.
     */
    stop() {
      if (this.running) {
        this.elapsedTime = Date.now() - this.startTime;
        this.running = false;
        console.log('Stopwatch stopped. Elapsed time: ' + this.elapsedTime + 'ms');
      } else {
        console.log('Stopwatch is already stopped.');
      }
    },
  
    /**
     * Resets the stopwatch to its initial state.
     * Sets the startTime to 0, running to false, and elapsedTime to 0.
     * Logs a message indicating the stopwatch has been reset.
     */
    reset() {
      this.startTime = 0;
      this.running = false;
      this.elapsedTime = 0;
      console.log('Stopwatch reset.');
    }
  };
  
  // Example Usage:
  stopwatch.start();
  setTimeout(() => {
    stopwatch.stop();
  }, 2000);
  stopwatch.start();
  setTimeout(() => {
    stopwatch.stop();
  }, 1000);
  stopwatch.reset();
  