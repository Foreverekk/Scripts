/**
 * Script Name: DeepClone
 * Description: A high-performance utility for deep cloning objects and arrays, supporting circular references.
 * Author: Foreverekk
 */

/**
 * Creates a deep clone of an object or array, while preserving circular references.
 * This function is much faster than the jQuery.extend() method, but may not work
 * correctly if the object contains non-enumerable properties or if a property
 * has a getter/setter that relies on the object's identity.
 *
 * @param {Object|Array} obj - The object or array to clone.
 * @param {WeakMap} [map] - A WeakMap used to track circular references. Do not pass unless you know what you are doing.
 * @returns {Object|Array} The cloned object or array.
 */
//
export function deepClone(obj, map = new WeakMap()) {
    if (obj === null || typeof obj !== 'object') return obj;
    if (map.has(obj)) return map.get(obj);

    const clone = Array.isArray(obj) ? [] : {};
    map.set(obj, clone);

    for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
            clone[key] = deepClone(obj[key], map);
        }
    }
    return clone;
}

// Example Usage:
const circularObj = {};
circularObj.self = circularObj;
const cloned = deepClone(circularObj);
console.log(cloned.self === cloned); // true
