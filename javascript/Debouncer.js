/**
 * Script Name: Debouncer
 * Description: A utility to limit the frequency of function executions. Useful for optimizing event handlers like resize, scroll, or input.
 * Author: Foreverekk
 */

/**
 * Creates a debounced version of a function that delays invoking `fn` until after `delay` milliseconds have elapsed since the last time the debounced function was invoked.
 * @param {function} fn The function to debounce.
 * @param {number} delay The number of milliseconds to delay.
 * @returns {function} A debounced version of `fn`.
 */
//
export function debounce(fn, delay) {
    let timeoutId;
    return (...args) => {
        if (timeoutId) clearTimeout(timeoutId);
        timeoutId = setTimeout(() => fn(...args), delay);
    };
}

// Example Usage:
const onResize = debounce(() => console.log('Resizing!'), 300);
window.addEventListener('resize', onResize);
