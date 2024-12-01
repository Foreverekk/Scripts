/**
 * Script Name: TimeoutManager
 * Description: A utility to manage and clear multiple timeouts efficiently.
 * Author: Foreverekk
 */

//
export class TimeoutManager {
    /**
     * Initializes a new instance of the TimeoutManager class.
     * The timeouts property is set to an empty Set() to store the timeout IDs.
     */
    constructor() {
        this.timeouts = new Set();
    }

    /**
     * Sets a timeout for the given callback function after the specified delay.
     * The timeout ID is stored in the timeouts set and can be cleared with clearTimeout.
     * @param {function} callback - The callback function to be invoked after the delay.
     * @param {number} delay - The delay time in milliseconds to set the timeout for.
     * @returns {number} The timeout ID that can be used to clear the timeout with clearTimeout.
     */
    setTimeout(callback, delay) {
        const id = setTimeout(() => {
            callback();
            this.timeouts.delete(id);
        }, delay);
        this.timeouts.add(id);
        return id;
    }

    /**
     * Clears a timeout by removing it from the timeouts set and clearing it with the clearTimeout function.
     * @param {number} id - The timeout ID to be cleared.
     */
    clearTimeout(id) {
        clearTimeout(id);
        this.timeouts.delete(id);
    }

    /**
     * Clears all timeouts by iterating through the timeouts set and clearing each one.
     * Removes all timeout IDs from the set after they have been cleared.
     */
    clearAll() {
        this.timeouts.forEach((id) => clearTimeout(id));
        this.timeouts.clear();
    }
}

// Example Usage:
const timeoutManager = new TimeoutManager();
timeoutManager.setTimeout(() => console.log('Task 1'), 1000);
timeoutManager.setTimeout(() => console.log('Task 2'), 2000);
timeoutManager.clearAll(); // Stops all timeouts
