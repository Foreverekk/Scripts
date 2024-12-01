/**
 * Script Name: PromiseQueue
 * Description: A class to manage and control the execution of asynchronous tasks in sequence.
 * Author: Foreverekk
 */

//
export class PromiseQueue {
    /**
     * Initializes the PromiseQueue class.
     * 
     * @constructor
     * @private
     */
    constructor() {
        this.queue = [];
        this.isRunning = false;
    }

    /**
     * Adds a task to the queue and starts the queue if not already running.
     * @param {Function} task - A function that returns a Promise.
     * @returns {undefined}
     */
    add(task) {
        this.queue.push(task);
        if (!this.isRunning) this.run();
    }

    /**
     * Runs the tasks in the queue in sequence. Tasks are run synchronously as each task must resolve before the next task is run.
     * @returns {Promise} A promise that resolves when all tasks in the queue have completed.
     * @private
     */
    async run() {
        this.isRunning = true;
        while (this.queue.length) {
            const task = this.queue.shift();
            await task();
        }
        this.isRunning = false;
    }
}

// Example Usage:
const queue = new PromiseQueue();

queue.add(() => new Promise((resolve) => setTimeout(() => {
    console.log('Task 1 completed');
    resolve();
}, 1000)));

queue.add(() => new Promise((resolve) => setTimeout(() => {
    console.log('Task 2 completed');
    resolve();
}, 500)));
