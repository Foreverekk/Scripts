/**
 * Script Name: StateManager
 * Description: A simple state management library with subscription support, useful for small applications or widgets.
 * Author: Foreverekk
 */

//
export class StateManager {
    /**
     * Initializes a StateManager instance with the given initial state.
     * The state is shallow copied using the spread operator.
     * @param {Object} [initialState={}] - The initial state to be used by the
     *   StateManager. If not provided, the state is initialized to an empty object.
     */
    constructor(initialState = {}) {
        this.state = { ...initialState };
        this.listeners = [];
    }

    /**
     * Registers a callback to be called whenever the state of the StateManager
     * changes. The callback will be passed the new state of the StateManager.
     * @param {Function} listener - The callback function to be called on each state change.
     */
    subscribe(listener) {
        this.listeners.push(listener);
    }

    /**
     * Removes a previously registered callback, so it will no longer be called when the state of the StateManager changes.
     * @param {Function} listener - The callback function to be removed from the subscribers list.
     */
    unsubscribe(listener) {
        this.listeners = this.listeners.filter((l) => l !== listener);
    }

    /**
     * Sets the state of the StateManager to the result of merging the given updates
     * into the current state. Notifies all subscribers of the new state.
     * @param {Object} updates - An object containing the updates to be merged into the current state.
     */
    setState(updates) {
        this.state = { ...this.state, ...updates };
        this.listeners.forEach((listener) => listener(this.state));
    }

    /**
     * Retrieves the current state of the StateManager.
     * @returns {Object} The current state.
     */
    getState() {
        return this.state;
    }
}

// Example Usage:
const stateManager = new StateManager({ count: 0 });
stateManager.subscribe((state) => console.log('State updated:', state));
stateManager.setState({ count: 1 }); // State updated: { count: 1 }
