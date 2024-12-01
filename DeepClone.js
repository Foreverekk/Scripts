/**
 * Script Name: DeepClone
 * Description: A deep cloning function to create a true copy of an object or array.
 * Author: Foreverekk
 */

/**
 * Creates a deep copy of an object or array.
 *
 * @param {Object|Array} obj - The object or array to clone.
 * @returns {Object|Array} A true copy of the object or array.
 */
//
export function deepClone(obj) {
    if (obj === null || typeof obj !== 'object') return obj;
    if (Array.isArray(obj)) return obj.map(deepClone);

    const clone = {};
    for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
            clone[key] = deepClone(obj[key]);
        }
    }
    return clone;
}

// Example Usage:
const original = { a: 1, b: { c: 2 } };
const copy = deepClone(original);
console.log(copy); // { a: 1, b: { c: 2 } }
