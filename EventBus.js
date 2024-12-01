/**
 * Script Name: EventBus
 * Description: A lightweight event bus implementation for handling custom events across your application.
 * Author: Foreverekk
 */

//
export class EventBus {
    /**
     * Constructor for EventBus class.
     *
     * Initializes an empty object for storing event listeners.
     */
    constructor() {
        this.events = {};
    }

/**
 * Registers an event listener for a specific event.
 *
 * @param {string} event - The name of the event to listen for.
 * @param {Function} listener - The callback function to be executed when the event is emitted.
 */
    on(event, listener) {
        if (!this.events[event]) this.events[event] = [];
        this.events[event].push(listener);
    }

    /**
     * Removes an event listener for a specific event.
     *
     * @param {string} event - The name of the event to remove the listener for.
     * @param {Function} listener - The callback function to remove.
     */
    off(event, listener) {
        if (!this.events[event]) return;
        this.events[event] = this.events[event].filter((l) => l !== listener);
    }

    /**
     * Emits an event to all registered listeners.
     *
     * @param {string} event - The name of the event to emit.
     * @param {*} data - The data to be passed to the event listeners.
     */
    emit(event, data) {
        if (!this.events[event]) return;
        this.events[event].forEach((listener) => listener(data));
    }
}

// Example Usage:
const bus = new EventBus();
bus.on('user:login', (data) => console.log('User logged in:', data));
bus.emit('user:login', { username: 'john_doe' });
