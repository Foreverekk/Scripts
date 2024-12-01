/**
 * Script Name: Sheduler
 * Description: A task scheduler that runs tasks at specified intervals or delays.
 * Author: Foreverekk
 */

//
export class Scheduler {
    /**
     * Initializes the task scheduler.
     * @constructor
     */
    constructor() {
        this.tasks = [];
    }

    /**
     * Adds a task to the scheduler.
     * @param {function} callback The function to be called when the task is scheduled.
     * @param {number} delay The delay time in milliseconds before the task is scheduled.
     * @returns {undefined}
     */
    addTask(callback, delay) {
        const id = setTimeout(() => {
            callback();
            this.tasks = this.tasks.filter((task) => task.id !== id);
        }, delay);
        this.tasks.push({ id, callback, delay });
    }

    /**
     * Clears all tasks from the scheduler, preventing them from being scheduled.
     * @returns {undefined}
     */
    clearAll() {
        this.tasks.forEach((task) => clearTimeout(task.id));
        this.tasks = [];
    }
}

// Example Usage:
const scheduler = new Scheduler();
scheduler.addTask(() => console.log('Task 1'), 1000);
scheduler.addTask(() => console.log('Task 2'), 2000);
// Call scheduler.clearAll() to stop all tasks.
