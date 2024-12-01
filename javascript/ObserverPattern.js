/**
 * Script Name: ObserverPattern
 * Description: An implementation of the Observer pattern for managing state updates and reactivity.
 * Author: Foreverekk
 */

//
export class Observable {
    /**
     * Initializes a new instance of the Observable class.
     * 
     * @param {*} value - The initial value of the observable.
     * Initializes the value and sets up an empty array of subscribers.
     */
    constructor(value) {
        this.value = value;
        this.subscribers = [];
    }

    /**
     * Registers a callback to be called whenever the value of the observable changes.
     * The callback will be passed the new value of the observable.
     * @param {Function} callback - The callback function to be called on each state change.
     */
    subscribe(callback) {
        this.subscribers.push(callback);
    }

    /**
     * Unregisters a previously registered callback, so it will no longer be called when the value changes.
     * 
     * @param {Function} callback - The callback function to be removed from the subscribers list.
     */
    unsubscribe(callback) {
        this.subscribers = this.subscribers.filter((cb) => cb !== callback);
    }

    /**
     * Sets the value of the observable and notifies all subscribers by calling them with the new value.
     * 
     * @param {*} value - The new value to be set on the observable.
     */
    set(value) {
        this.value = value;
        this.subscribers.forEach((callback) => callback(this.value));
    }

    /**
     * Retrieves the current value of the observable.
     * 
     * @returns {*} The current value of the observable.
     */
    get() {
        return this.value;
    }
}

// Example Usage:
const state = new Observable(10);
state.subscribe((value) => console.log('New value:', value));
state.set(20); // New value: 20
