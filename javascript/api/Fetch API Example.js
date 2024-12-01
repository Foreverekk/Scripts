/**
 * Script Name: Fetch API Example
 * Description: This script demonstrates how to use the Fetch API to make an HTTP request and retrieve data from an API.
 * Author: Foreverekk
 */

/**
 * Fetches data from a specified API endpoint and logs the response data.
 *
 * The function performs an HTTP GET request to the API URL and handles the response.
 * If the request is successful and the response is OK, it logs the data to the console.
 * If the response status is not OK, it throws an error with the status code.
 * Any network or parsing errors encountered during the fetch operation are caught
 * and logged to the console.
 */
//
async function fetchData() {
    const apiUrl = 'https://api.example.com/data';
  
    try {
      const response = await fetch(apiUrl);
  
      if (response.ok) {
        const data = await response.json();
        console.log('Data:', data);
      } else {
        throw new Error('Error: ' + response.status);
      }
    } catch (error) {
      console.error('Error:', error.message);
    }
  }
  
  // Example Usage:
  fetchData();
  