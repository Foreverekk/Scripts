/**
 * Script Name: Fetch API Example
 * Description: This script demonstrates how to use the Fetch API to make an HTTP request and retrieve data from an API.
 * Author: Foreverekk
 */

// Function to fetch data from an API
async function fetchData() {
    const apiUrl = 'https://api.example.com/data'; // Replace with the actual API URL
  
    try {
      const response = await fetch(apiUrl);
  
      if (response.ok) {
        const data = await response.json();
        console.log('Data:', data);
        // You can process the retrieved data here
      } else {
        throw new Error('Error: ' + response.status);
      }
    } catch (error) {
      console.error('Error:', error.message);
    }
  }
  
  // Example usage of the script
  fetchData();
  