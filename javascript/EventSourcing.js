/**
 * Script Name: EventSourcing
 * Description: An event-sourcing library for maintaining application state with full audit trails.
 * Author: Foreverekk
 */

//
export class EventSourcing {
    /**
     * Initializes a new instance of the EventSourcing class with the given initial state.
     *
     * @param {Object} [initialState={}] - The initial state to be used by the EventSourcing instance.
     *   If not provided, the state is initialized to an empty object.
     */
    constructor(initialState = {}) {
        this.state = initialState;
        this.events = [];
    }

    /**
     * Applies the given event to the internal state of the EventSourcing instance.
     * The event is added to the audit trail, and the state is updated by merging
     * the event payload into the current state.
     *
     * @param {Object} event - The event to be applied to the internal state.
     *   The event should have a type property and a payload property, where
     *   the type is a string describing the event and the payload is an object
     *   containing the data related to the event.
     */
    applyEvent(event) {
        this.events.push(event);
        this.state = { ...this.state, ...event.payload };
    }

    /**
     * Replays all events in the audit trail, re-applying each event to the
     * internal state of the EventSourcing instance. This is useful for
     * recreating the current state of the application based on the events
     * that have been recorded.
     */
    replayEvents() {
        this.state = {};
        for (const event of this.events) {
            this.applyEvent(event);
        }
    }

    /**
     * Retrieves the current state of the EventSourcing instance.
     * The state is returned as a shallow copy of the internal state object.
     * @returns {Object} The current state of the EventSourcing instance.
     */
    getState() {
        return { ...this.state };
    }

    /**
     * Retrieves a copy of the event log.
     * The event log contains all events that have been applied to the
     * EventSourcing instance, allowing for a complete audit trail.
     * @returns {Array<Object>} An array of event objects from the event log.
     */
    getEventLog() {
        return [...this.events];
    }
}

// Example Usage:
const store = new EventSourcing({ count: 0 });
store.applyEvent({ type: 'increment', payload: { count: 1 } });
store.applyEvent({ type: 'decrement', payload: { count: 0 } });
console.log(store.getState()); // { count: 0 }
console.log(store.getEventLog());
