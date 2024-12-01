
/**
 * Script Name: RetryExponential
 * Description: An enhanced retry function with exponential backoff for handling unreliable network requests.
 * Author: Foreverekk
 */

/**
 * An enhanced retry function with exponential backoff for handling unreliable network requests.
 * @param {function} fn The function to be retried if it throws an error.
 * @param {number} [retries=5] The maximum number of retries.
 * @param {number} [initialDelay=500] The initial delay between retries in milliseconds.
 * @example
 * retryWithExponentialBackoff(() => fetch('https://api.example.com/data'))
 *     .then((response) => response.json())
 *     .then((data) => console.log(data))
 *     .catch((error) => console.error('Failed after retries:', error));
 */
//
export async function retryWithExponentialBackoff(fn, retries = 5, initialDelay = 500) {
    let delay = initialDelay;

    for (let i = 0; i < retries; i++) {
        try {
            return await fn();
        } catch (error) {
            if (i === retries - 1) throw error;
            await new Promise((resolve) => setTimeout(resolve, delay));
            delay *= 2; // Exponential increase
        }
    }
}

// Example Usage:
retryWithExponentialBackoff(() => fetch('https://api.example.com/resource'))
    .then(console.log)
    .catch(console.error);
