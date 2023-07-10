/**
 * Script Name: HTTP Request with Fetch API
 * Description: This script demonstrates how to make an HTTP request using the Fetch API and handle the response.
 * Author: Foreverekk
 */

// Function to make an HTTP request and handle the response
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
  
  // Example usage of the script
  const apiUrl = 'https://api.example.com/data'; // Replace with the actual API URL
  makeHttpRequest(apiUrl);
  