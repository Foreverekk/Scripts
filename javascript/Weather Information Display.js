/**
 * Script Name: Weather Information Display
 * Description: This script retrieves weather information using a weather API and displays it on a webpage.
 * Author: Foreverekk
 */

/**
 * Retrieves the current weather information for a given city.
 *
 * @param {string} city The city to retrieve the weather information for.
 * @returns {Promise<Object>} A promise that resolves with the current weather information for the given city, or null if the request fails.
 * @throws {Error} If the request fails, an error is thrown with the error message from the response.
 */
//
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
  
/**
 * Displays the weather information on the webpage.
 *
 * This function updates the text content of specific HTML elements to display the
 * current weather data, including location, temperature, weather condition, and humidity.
 *
 * @param {Object} weatherData - An object containing the weather information to be displayed.
 * The object should have properties: location (with name and country), temp_c, condition (with text), and humidity.
 */
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
  
  // Example Usage:
  const city = 'New York'; // Replace with the desired city
  fetchWeatherInformation(city)
    .then((weatherData) => {
      displayWeatherInformation(weatherData);
    })
    .catch((error) => {
      console.error('Error:', error.message);
    });
  