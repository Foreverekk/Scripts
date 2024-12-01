/**
 * Script Name: Random Quote Generator
 * Description: This script displays a random quote from a predefined list of quotes.
 * Author: Foreverekk
 */

//
const quotes = [
    "The greatest glory in living lies not in never falling, but in rising every time we fall. - Nelson Mandela",
    "The way to get started is to quit talking and begin doing. - Walt Disney",
    "If life were predictable it would cease to be life, and be without flavor. - Eleanor Roosevelt",
    "Life is what happens when you're busy making other plans. - John Lennon",
    "The only limit to our realization of tomorrow will be our doubts of today. - Franklin D. Roosevelt",
    "You cannot shake hands with a clenched fist. - Indira Gandhi",
    "In the end, it's not the years in your life that count. It's the life in your years. - Abraham Lincoln",
  ];
  
/**
 * Generates a random quote from the given list of quotes.
 * @returns {string} The random quote.
 */
  function generateRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    return quotes[randomIndex];
  }
  
  // Example Usage:
  const randomQuote = generateRandomQuote();
  console.log(randomQuote);
  