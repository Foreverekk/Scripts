/**
 * Script Name: HttpClient
 * Description: A customizable HTTP client for making API requests with support for interceptors.
 * Author: Foreverekk
 */

//
export class HttpClient {
    /**
     * Initializes the HTTP client with a base URL.
     *
     * @param {string} [baseURL] - The base URL to use for all requests.
     */
    constructor(baseURL = '') {
        this.baseURL = baseURL;
    }

    /**
     * Sends an HTTP request to the specified endpoint.
     *
     * @param {string} method - The HTTP method to use.
     * @param {string} endpoint - The endpoint to send the request to.
     * @param {Object} [data] - The data to be sent with the request.
     * @param {Object} [headers] - An object with headers to be sent with the request.
     * @returns {Promise} A promise that resolves with the response data.
     */
    async request(method, endpoint, data = null, headers = {}) {
        const options = {
            method,
            headers: { 'Content-Type': 'application/json', ...headers },
        };
        if (data) options.body = JSON.stringify(data);

        const response = await fetch(`${this.baseURL}${endpoint}`, options);
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
        return response.json();
    }

    /**
     * Sends a GET request to the specified endpoint.
     *
     * @param {string} endpoint - The endpoint to send the request to.
     * @param {Object} [headers] - An object with headers to be sent with the request.
     * @returns {Promise} A promise that resolves with the response data.
     */
    get(endpoint, headers = {}) {
        return this.request('GET', endpoint, null, headers);
    }

    /**
     * Sends a POST request to the specified endpoint.
     *
     * @param {string} endpoint - The endpoint to send the request to.
     * @param {Object} data - The data to be sent with the request.
     * @param {Object} [headers] - An object with headers to be sent with the request.
     * @returns {Promise} A promise that resolves with the response data.
     */
    post(endpoint, data, headers = {}) {
        return this.request('POST', endpoint, data, headers);
    }

    /**
     * Sends a PUT request to the specified endpoint.
     *
     * @param {string} endpoint - The endpoint to send the request to.
     * @param {Object} data - The data to be sent with the request.
     * @param {Object} [headers] - An object with headers to be sent with the request.
     * @returns {Promise} A promise that resolves with the response data.
     */
    put(endpoint, data, headers = {}) {
        return this.request('PUT', endpoint, data, headers);
    }

    /**
     * Sends a DELETE request to the specified endpoint.
     *
     * @param {string} endpoint - The endpoint to send the request to.
     * @param {Object} [headers] - An object with headers to be sent with the request.
     * @returns {Promise} A promise that resolves with the response data.
     */
    delete(endpoint, headers = {}) {
        return this.request('DELETE', endpoint, null, headers);
    }
}

// Example Usage:
const apiClient = new HttpClient('https://api.example.com');
apiClient.get('/users').then(console.log).catch(console.error);
