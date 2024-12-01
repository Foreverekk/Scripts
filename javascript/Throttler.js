/**
 * Script Name: Throttler
 * Description: A throttling function ensures that a function is executed at most once in a specified time interval.
 * Author: Foreverekk
 */

/**
 * A throttling function ensures that a function is executed at most once in a specified time interval.
 * This is useful for debouncing events (e.g. scroll, resize) and preventing excessive calls to a function.
 * @param {function} fn - The function to be throttled.
 * @param {number} interval - The time interval in milliseconds during which only one call will be allowed.
 * @returns {function} A throttled version of `fn`.
 */
//
export function throttle(fn, interval) {
    let lastTime = 0;
    return (...args) => {
        const now = Date.now();
        if (now - lastTime >= interval) {
            lastTime = now;
            fn(...args);
        }
    };
}

// Example Usage:
const onScroll = throttle(() => console.log('Scrolling!'), 200);
window.addEventListener('scroll', onScroll);
