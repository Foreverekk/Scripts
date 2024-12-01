/**
 * Script Name: Currency Converter
 * Description: This script performs currency conversion based on the current exchange rates.
 * Author: Foreverekk
 */

/**
 * Converts a given amount of currency from one currency to another based on the current exchange rate.
 * @param {number} amount The amount of currency to convert.
 * @param {string} fromCurrency The currency to convert from.
 * @param {string} toCurrency The currency to convert to.
 * @returns {Promise<string>} The converted amount as a string, rounded to 2 decimal places, or null if the request fails.
 */
//
async function convertCurrency(amount, fromCurrency, toCurrency) {
    const apiKey = 'YOUR_API_KEY';
    const apiUrl = `https://v6.exchangeratesapi.io/latest?access_key=${apiKey}&base=${fromCurrency}&symbols=${toCurrency}`;
  
    try {
      const response = await fetch(apiUrl);
      const data = await response.json();
  
      if (response.ok) {
        const exchangeRate = data.rates[toCurrency];
        const convertedAmount = amount * exchangeRate;
        return convertedAmount.toFixed(2);
      } else {
        throw new Error(data.error);
      }
    } catch (error) {
      console.error('Error:', error.message);
      return null;
    }
  }
  
  // Example Usage:
  const amount = 100;
  const fromCurrency = 'USD';
  const toCurrency = 'EUR';
  
  convertCurrency(amount, fromCurrency, toCurrency)
    .then((convertedAmount) => {
      if (convertedAmount) {
        console.log(`${amount} ${fromCurrency} = ${convertedAmount} ${toCurrency}`);
      }
    })
    .catch((error) => {
      console.error('Error:', error.message);
    });
  