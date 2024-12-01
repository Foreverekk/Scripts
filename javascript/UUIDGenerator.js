/**
 * Script Name: UUIDGenerator
 * Description: A utility to generate UUIDs (Universally Unique Identifiers).
 * Author: Foreverekk
 */

/**
 * Generates a random UUID (Universally Unique Identifier) in the format xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx.
 * @returns {string} A randomly generated UUID.
 */

//
export function generateUUID() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (char) => {
        const random = (Math.random() * 16) | 0;
        return char === 'x' ? random.toString(16) : ((random & 0x3) | 0x8).toString(16);
    });
}

// Example Usage:
console.log(generateUUID()); // e.g., "9f4b2c0e-6b4f-4bfa-b6a4-74bf9865e3f9"
