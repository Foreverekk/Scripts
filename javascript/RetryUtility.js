/**
 * Script Name: RetryUtility
 * Description: A utility to retry a failing asynchronous operation with customizable delay and retry count.
 * Author: Foreverekk
 */

/**
 * Retries a failing asynchronous operation with customizable delay and retry count.
 * @param {function} fn The asynchronous operation to retry.
 * @param {number} [retries=3] The number of times to retry the operation.
 * @param {number} [delay=1000] The delay in milliseconds between retries.
 * @returns {Promise} A promise that resolves with the result of the operation if it succeeds.
 * @throws {Error} The error that caused the operation to fail if it fails after retrying.
 */
//
export async function retry(fn, retries = 3, delay = 1000) {
    for (let attempt = 1; attempt <= retries; attempt++) {
        try {
            return await fn();
        } catch (error) {
            if (attempt === retries) throw error;
            await new Promise((resolve) => setTimeout(resolve, delay));
        }
    }
}

// Example Usage:
retry(() => fetch('https://api.example.com/data'), 5, 2000)
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => console.error('Failed after retries:', error));
