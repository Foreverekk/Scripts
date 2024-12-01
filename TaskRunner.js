/**
 * Script Name: TaskRunner
 * Description: A class to manage and execute asynchronous tasks in parallel or sequentially.
 * Author: Foreverekk
 */

//
export class TaskRunner {
    /**
     * Constructor for TaskRunner class.
     *
     * @param {Array<Function>} tasks An array of tasks to be executed. Each task
     *   should be a function that returns a Promise.
     */
    constructor(tasks = []) {
        this.tasks = tasks;
    }

    /**
     * Adds a task to the list of tasks.
     *
     * @param {Function} task - A function that returns a Promise to be added to the task list.
     */
    add(task) {
        this.tasks.push(task);
    }

    /**
     * Runs all tasks in sequence, waiting for the previous task to finish before starting the next one.
     * @returns {Promise} A promise that resolves when all tasks have finished.
     */
    async runSequential() {
        for (const task of this.tasks) {
            await task();
        }
    }

    /**
     * Runs all tasks in parallel, starting all tasks simultaneously and waiting for all of them to finish.
     * @returns {Promise} A promise that resolves when all tasks have finished.
     */
    async runParallel() {
        await Promise.all(this.tasks.map((task) => task()));
    }
}

// Example Usage:
const taskRunner = new TaskRunner();

taskRunner.add(() => new Promise((resolve) => setTimeout(() => {
    console.log('Task 1 completed');
    resolve();
}, 1000)));

taskRunner.add(() => new Promise((resolve) => setTimeout(() => {
    console.log('Task 2 completed');
    resolve();
}, 500)));

taskRunner.runSequential(); // Tasks executed one after another
// taskRunner.runParallel(); // Tasks executed simultaneously
