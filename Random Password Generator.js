/**
 * Script Name: Random Password Generator
 * Description: This script generates a random password based on the provided length and character types.
 * Author: Foreverekk
 */

// Function to generate a random password
function generatePassword(length, includeUpperCase, includeLowerCase, includeNumbers, includeSymbols) {
    // Define character sets based on selected options
    let characters = '';
    if (includeUpperCase) {
      characters += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    }
    if (includeLowerCase) {
      characters += 'abcdefghijklmnopqrstuvwxyz';
    }
    if (includeNumbers) {
      characters += '0123456789';
    }
    if (includeSymbols) {
      characters += '!@#$%^&*()';
    }
  
    // Generate the password
    let password = '';
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      password += characters.charAt(randomIndex);
    }
  
    return password;
  }
  
  // Example usage of the script
  const passwordLength = 12;
  const useUpperCase = true;
  const useLowerCase = true;
  const useNumbers = true;
  const useSymbols = false;
  
  const generatedPassword = generatePassword(passwordLength, useUpperCase, useLowerCase, useNumbers, useSymbols);
  console.log(generatedPassword);
  