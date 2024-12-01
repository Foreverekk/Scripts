/**
 * Script Name: HTTP Request with Fetch API
 * Description: This script demonstrates how to make an HTTP request using the Fetch API and handle the response.
 * Author: Foreverekk
 */

/**
 * Makes an HTTP request to the specified URL using the Fetch API
 * and handles the response with promise chain.
 * @param {string} url The URL to make the request to.
 * @example
 * makeHttpRequest('https://api.example.com/data')
 */
//
function makeHttpRequest(url) {
    fetch(url)
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then(data => {
        console.log('Response:', data);
        // Handle the response data as needed
      })
      .catch(error => {
        console.error('Error:', error.message);
      });
  }
  
  // Example Usage:
  const apiUrl = 'https://api.example.com/data';
  makeHttpRequest(apiUrl);
  