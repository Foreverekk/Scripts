/**
 * Script Name: Currency Converter
 * Description: This script performs currency conversion based on the current exchange rates.
 * Author: Foreverekk
 */

// Function to perform currency conversion
async function convertCurrency(amount, fromCurrency, toCurrency) {
    const apiKey = 'YOUR_API_KEY'; // Replace with your actual API key
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
  
  // Example usage of the script
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
  