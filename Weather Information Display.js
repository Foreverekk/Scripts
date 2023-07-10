/**
 * Script Name: Weather Information Display
 * Description: This script retrieves weather information using a weather API and displays it on a webpage.
 * Author: Foreverekk
 */

// Function to fetch weather information from the API
async function fetchWeatherInformation(city) {
    const apiKey = 'YOUR_API_KEY'; // Replace with your actual API key
    const apiUrl = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`;
  
    try {
      const response = await fetch(apiUrl);
      const data = await response.json();
  
      if (response.ok) {
        return data.current;
      } else {
        throw new Error(data.error.message);
      }
    } catch (error) {
      console.error('Error:', error.message);
      return null;
    }
  }
  
  // Function to display weather information on the webpage
  function displayWeatherInformation(weatherData) {
    if (weatherData) {
      const locationElement = document.getElementById('location');
      const temperatureElement = document.getElementById('temperature');
      const conditionElement = document.getElementById('condition');
      const humidityElement = document.getElementById('humidity');
  
      locationElement.textContent = weatherData.location.name + ', ' + weatherData.location.country;
      temperatureElement.textContent = weatherData.temp_c + '°C';
      conditionElement.textContent = weatherData.condition.text;
      humidityElement.textContent = 'Humidity: ' + weatherData.humidity + '%';
    }
  }
  
  // Example usage of the script
  const city = 'New York'; // Replace with the desired city
  fetchWeatherInformation(city)
    .then((weatherData) => {
      displayWeatherInformation(weatherData);
    })
    .catch((error) => {
      console.error('Error:', error.message);
    });
  