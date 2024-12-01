/**
 * Script Name: AnimationSequencer
 * Description: A class for chaining animations using Promises.
 * Author: Foreverekk
 */

//
export class AnimationSequencer {
    /**
     * Initializes an empty array to store animations.
     */
    constructor() {
        this.animations = [];
    }

    /**
     * Adds an animation to the end of the sequence.
     * @param {Function} animation - A function that returns a Promise.
     * @returns {AnimationSequencer} The current AnimationSequencer instance.
     */
    add(animation) {
        this.animations.push(animation);
        return this;
    }

    /**
     * Plays all the animations in the sequence in order.
     * @returns {Promise<void>} A Promise that resolves when all animations have finished.
     */
    async play() {
        for (const animation of this.animations) {
            await animation();
        }
    }
}

// Example Usage:
const sequencer = new AnimationSequencer();
sequencer
    .add(() => new Promise((resolve) => {
        console.log('Animation 1');
        setTimeout(resolve, 1000);
    }))
    .add(() => new Promise((resolve) => {
        console.log('Animation 2');
        setTimeout(resolve, 500);
    }));

sequencer.play();
