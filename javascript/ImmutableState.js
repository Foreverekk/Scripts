/**
 * Script Name: ImmutableState
 * Description: An immutable state management library inspired by Redux but simplified for ease of use.
 * Author: Foreverekk
 */

//
export class ImmutableState {
    /**
     * Initializes a new instance of the ImmutableState class with the given initial state.
     *
     * @param {Object} initialState - The initial state to be used by the ImmutableState instance.
     */
    constructor(initialState) {
        this.state = { ...initialState };
        this.listeners = [];
    }

    /**
     * Retrieves the current state of the ImmutableState instance.
     * @returns {Object} A shallow copy of the current state.
     */
    getState() {
        return { ...this.state };
    }

    /**
     * Dispatches an action to update the state of the ImmutableState instance.
     * The action is a function that takes the current state as an argument and returns a new state.
     * If the new state is different than the current state, all registered listeners are notified.
     * @param {Function} updater - The action to be dispatched to update the state.
     */
    dispatch(updater) {
        const newState = updater({ ...this.state });
        if (JSON.stringify(this.state) !== JSON.stringify(newState)) {
            this.state = newState;
            this.listeners.forEach((listener) => listener(this.getState()));
        }
    }

    /**
     * Registers a listener callback to be notified when the state changes.
     * The callback will be called with the current state whenever it changes.
     * Returns an unsubscribe function to remove the listener.
     * @param {Function} listener - The callback function to be called on each state change.
     * @returns {Function} A function that can be called to unsubscribe the listener.
     */
    subscribe(listener) {
        this.listeners.push(listener);
        return () => {
            this.listeners = this.listeners.filter((l) => l !== listener);
        };
    }
}

// Example Usage:
const store = new ImmutableState({ count: 0 });
store.subscribe((state) => console.log('State updated:', state));
store.dispatch((state) => ({ ...state, count: state.count + 1 }));
