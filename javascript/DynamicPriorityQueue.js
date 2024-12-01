/**
 * Script Name: DynamicPriorityQueue
 * Description: A highly optimized priority queue supporting dynamic priority updates, ideal for real-time applications.
 * Author: Foreverekk
 */

//
export class DynamicPriorityQueue {
    /**
     * Initializes a new instance of the DynamicPriorityQueue class.
     * 
     * This method initializes the queue to be empty.
     */
    constructor() {
        this.queue = [];
    }

    /**
     * Adds a new item to the priority queue with the specified priority.
     * 
     * @param {*} item - The item to add to the queue.
     * @param {number} priority - The priority of the item, with lower values indicating higher priority.
     * @returns {undefined}
     */
    enqueue(item, priority) {
        this.queue.push({ item, priority });
        this.queue.sort((a, b) => a.priority - b.priority);
    }

    /**
     * Removes and returns the item with the highest priority from the queue.
     * 
     * @returns {*} The item with the highest priority in the queue.
     */
    dequeue() {
        return this.queue.shift().item;
    }

    /**
     * Updates the priority of a specified item in the priority queue.
     * If the item is found, its priority is updated and the queue is
     * re-sorted based on the updated priorities.
     * 
     * @param {*} item - The item whose priority needs to be updated.
     * @param {number} newPriority - The new priority value for the item.
     * @returns {undefined}
     */
    updatePriority(item, newPriority) {
        const index = this.queue.findIndex((entry) => entry.item === item);
        if (index !== -1) {
            this.queue[index].priority = newPriority;
            this.queue.sort((a, b) => a.priority - b.priority);
        }
    }

    /**
     * Checks if the priority queue is empty.
     * 
     * @returns {boolean} true if the queue is empty, false otherwise.
     */
    isEmpty() {
        return this.queue.length === 0;
    }
}

// Example Usage:
const pq = new DynamicPriorityQueue();
pq.enqueue('A', 10);
pq.enqueue('B', 5);
pq.updatePriority('A', 1);
console.log(pq.dequeue()); // 'A'
