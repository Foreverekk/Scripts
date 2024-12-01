/**
 * Script Name: ParallelExecutor
 * Description: A utility for running computational tasks in parallel using the Web Workers API, with dynamic worker pooling and task queuing.
 * Author: Foreverekk
 */

//
export class ParallelExecutor {
    /**
     * Initializes a new instance of the ParallelExecutor class.
     * 
     * @param {string} workerScript - The path to the worker script.
     * @param {number} [maxWorkers=4] - The maximum number of workers to use in the pool, default is 4.
     */
    constructor(workerScript, maxWorkers = 4) {
        this.maxWorkers = maxWorkers;
        this.workerScript = workerScript;
        this.workers = [];
        this.taskQueue = [];
        this.activeTasks = 0;
    }

    /**
     * Creates and initializes a new Web Worker with the specified worker script.
     * 
     * The worker is configured to handle messages by invoking the handleWorkerResponse method
     * with the worker instance and the received data.
     * 
     * @returns {Worker} The newly created and initialized Web Worker.
     * @private
     */
    initializeWorker() {
        const worker = new Worker(this.workerScript);
        worker.onmessage = ({ data }) => this.handleWorkerResponse(worker, data);
        return worker;
    }

    /**
     * Handles the response from a worker, resolves the promise associated with the
     * task that was processed, and adds the worker back to the pool. If there are any
     * tasks queued, it processes them if there are available workers.
     * @param {Worker} worker - The worker that completed the task.
     * @param {*} data - The result of the task that was processed.
     * @private
     */
    handleWorkerResponse(worker, data) {
        this.activeTasks--;
        const { resolve } = worker.taskData;
        resolve(data);
        this.workers.push(worker);
        this.processQueue();
    }

    /**
     * Adds a task to the queue and schedules it for execution in an available
     * worker thread. If no workers are available, the task is queued until one
     * becomes available.
     * @param {*} task - The task to be executed in a worker thread.
     * @returns {Promise} A promise that resolves when the task has been posted to a worker.
     */
    addTask(task) {
        return new Promise((resolve, reject) => {
            this.taskQueue.push({ task, resolve, reject });
            this.processQueue();
        });
    }

    /**
     * Processes tasks in the queue by assigning them to available workers.
     * If no worker is available, it initializes a new one. The method continues
     * processing tasks until either the queue is empty or the maximum number of
     * active tasks is reached.
     * 
     * @private
     */
    processQueue() {
        while (this.taskQueue.length && this.activeTasks < this.maxWorkers) {
            const worker = this.workers.pop() || this.initializeWorker();
            const { task, resolve, reject } = this.taskQueue.shift();
            worker.taskData = { resolve, reject };
            this.activeTasks++;
            worker.postMessage(task);
        }
    }

    /**
     * Terminates all workers in the pool and clears the worker list.
     * This stops all ongoing computations and releases resources held by the workers.
     */
    terminate() {
        this.workers.forEach((worker) => worker.terminate());
        this.workers = [];
    }
}

// Worker Script (`worker.js`):
self.onmessage = ({ data }) => {
    // Perform computation here
    const result = data.input.map((x) => x * 2); // Example task
    self.postMessage(result);
};

// Example Usage:
const executor = new ParallelExecutor('worker.js', 4);
executor
    .addTask({ input: [1, 2, 3] })
    .then(console.log); // [2, 4, 6]
