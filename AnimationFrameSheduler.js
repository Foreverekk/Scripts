/**
 * Script Name: AnimationFrameSheduler
 * Description: A utility to schedule repeated tasks using requestAnimationFrame.
 * Author: Foreverekk
 */

//
export class AnimationFrameScheduler {
    /**
     * Constructor for AnimationFrameScheduler class.
     *
     * @param {Function} callback A function to be called on each animation frame.
     */
    constructor(callback) {
        this.callback = callback;
        this.rafId = null;
    }

    /**
     * Starts the scheduler. The callback will be called on each animation frame until the scheduler is stopped.
     * The callback will be passed no arguments.
     */
    start() {
        const loop = () => {
            this.callback();
            this.rafId = requestAnimationFrame(loop);
        };
        this.rafId = requestAnimationFrame(loop);
    }

    /**
     * Stops the scheduler. The callback will no longer be called on each animation frame.
     */
    stop() {
        if (this.rafId) cancelAnimationFrame(this.rafId);
    }
}

// Example Usage:
const scheduler = new AnimationFrameScheduler(() => console.log('Frame update'));
scheduler.start();
setTimeout(() => scheduler.stop(), 3000); // Stop after 3 seconds
