/**
 * Script Name: LocalStorageHelper
 * Description: A utility class to simplify working with localStorage.
 * Author: Foreverekk
 */

//
export class LocalStorageHelper {
/**
 * Stores a key-value pair in localStorage.
 * The value is converted to a JSON string before being stored.
 * 
 * @param {string} key - The key under which the value should be stored.
 * @param {*} value - The value to store, which will be serialized to JSON.
 */
    static setItem(key, value) {
        localStorage.setItem(key, JSON.stringify(value));
    }

    /**
     * Retrieves a value from localStorage by key.
     * The value is converted from a JSON string before being returned.
     * If the key is not found, null is returned.
     * 
     * @param {string} key - The key under which the value is stored.
     * @returns {*} The retrieved value, or null if not found.
     */
    static getItem(key) {
        const value = localStorage.getItem(key);
        return value ? JSON.parse(value) : null;
    }

    /**
     * Removes the key-value pair from localStorage with the given key.
     * If the key is not found, the call is ignored.
     * 
     * @param {string} key - The key of the key-value pair to remove.
     */
    static removeItem(key) {
        localStorage.removeItem(key);
    }

    /**
     * Clears all key-value pairs from localStorage.
     * Use with caution, as this will remove all data stored in localStorage.
     */
    static clear() {
        localStorage.clear();
    }
}

// Example Usage:
LocalStorageHelper.setItem('user', { name: 'John', age: 30 });
console.log(LocalStorageHelper.getItem('user')); // { name: "John", age: 30 }
LocalStorageHelper.removeItem('user');
