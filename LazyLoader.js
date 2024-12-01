/**
 * Script Name: LazyLoader
 * Description: A utility for lazy-loading images as they enter the viewport.
 * Author: Foreverekk
 */

//
export class LazyLoader {
    /**
     * Initializes a new instance of the LazyLoader class.
     * 
     * @param {string} selector - The CSS selector string to select the elements to be observed.
     * @constructor
     */
    constructor(selector) {
        this.elements = document.querySelectorAll(selector);
        this.observer = new IntersectionObserver(this.load.bind(this), { threshold: 0.1 });
        this.elements.forEach((el) => this.observer.observe(el));
    }

    /**
     * Loads images that have entered the viewport.
     *
     * @param {IntersectionObserverEntry[]} entries - The observed elements.
     * @param {IntersectionObserver} observer - The observer instance.
     */
    load(entries, observer) {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                observer.unobserve(img);
            }
        });
    }
}

// Example Usage:
document.addEventListener('DOMContentLoaded', () => {
    new LazyLoader('img[data-src]');
});
