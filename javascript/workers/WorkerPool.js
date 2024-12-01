/**
 * Script Name: WorkerPool
 * Description: A worker thread pool for executing heavy computations in parallel, leveraging Web Workers.
 * Author: Foreverekk
 */

//
export class WorkerPool {
    /**
     * Initializes a new instance of the WorkerPool class.
     * 
     * @param {string} workerScript - The path to the worker script.
     * @param {number} [poolSize=4] - The number of workers to use in the pool.
     */
    constructor(workerScript, poolSize = 4) {
        this.poolSize = poolSize;
        this.workers = [];
        this.taskQueue = [];
        this.initializeWorkers(workerScript);
    }

    /**
     * Initializes the worker pool with the specified script.
     * 
     * @param {string} workerScript - The path to the worker script.
     * @private
     */
    initializeWorkers(workerScript) {
        for (let i = 0; i < this.poolSize; i++) {
            const worker = new Worker(workerScript);
            worker.onmessage = (e) => this.onWorkerComplete(worker, e.data);
            this.workers.push(worker);
        }
    }

    /**
     * Handles the completion of a worker and assigns it a new task if there are any queued.
     * If there are no queued tasks, the worker is added back to the pool for future use.
     * @param {Worker} worker - The worker that completed.
     * @param {*} result - The result that the worker returned.
     * @private
     */
    onWorkerComplete(worker, result) {
        if (this.taskQueue.length) {
            const { task, resolve } = this.taskQueue.shift();
            worker.postMessage(task);
            resolve(result);
        } else {
            this.workers.push(worker);
        }
    }

    /**
     * Runs the specified task in a worker from the pool, if one is available.
     * If no worker is available, the task is queued until one is.
     * @param {*} task - The task to run in the worker.
     * @returns {Promise} A promise that resolves when the task has been posted to a worker.
     */
    runTask(task) {
        return new Promise((resolve) => {
            const availableWorker = this.workers.pop();
            if (availableWorker) {
                availableWorker.postMessage(task);
                resolve();
            } else {
                this.taskQueue.push({ task, resolve });
            }
        });
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
self.onmessage = function (e) {
    const result = e.data; // Perform computations
    self.postMessage(result);
};

// Example Usage:
const pool = new WorkerPool('worker.js', 4);
pool.runTask({ data: [1, 2, 3] }).then(console.log);
