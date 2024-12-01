/**
 * Script Name: LazyLoader
 * Description: A utility to limit the rate of function execution, useful for APIs or high-frequency tasks.
 * Author: Foreverekk
 */

//
export class RateLimiter {
    /**
     * Initializes a new instance of the RateLimiter class.
     *
     * @param {number} limit The maximum number of tasks to execute within the specified interval.
     * @param {number} interval The time interval in milliseconds during which the number of tasks will be limited.
     * @constructor
     */
    constructor(limit, interval) {
        this.limit = limit;
        this.interval = interval;
        this.queue = [];
        this.running = false;
    }

    /**
     * Adds a task to the queue and starts processing if not already running.
     * @param {Function} task - A function that returns a Promise to be added to the queue.
     */
    add(task) {
        this.queue.push(task);
        if (!this.running) this.run();
    }

    /**
     * Runs all tasks in the queue in chunks of the specified limit, waiting for each chunk
     * to finish before starting the next one. The specified interval is used to delay
     * between each chunk.
     * @returns {Promise} A promise that resolves when all tasks in the queue have completed.
     * @private
     */
    async run() {
        this.running = true;
        while (this.queue.length) {
            const tasks = this.queue.splice(0, this.limit);
            await Promise.all(tasks.map((task) => task()));
            await new Promise((resolve) => setTimeout(resolve, this.interval));
        }
        this.running = false;
    }
}

// Example Usage:
const limiter = new RateLimiter(2, 1000); // 2 tasks per second
limiter.add(() => fetch('https://api.example.com/1').then(console.log));
limiter.add(() => fetch('https://api.example.com/2').then(console.log));
limiter.add(() => fetch('https://api.example.com/3').then(console.log));
