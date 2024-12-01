/**
 * Script Name: Random Password Generator
 * Description: This script generates a random password based on the provided length and character types.
 * Author: Foreverekk
 */

/**
 * Generates a random password based on the provided length and character types.
 *
 * @param {number} length - The length of the password to be generated.
 * @param {boolean} [includeUpperCase=false] - Whether to include upper case characters in the password.
 * @param {boolean} [includeLowerCase=false] - Whether to include lower case characters in the password.
 * @param {boolean} [includeNumbers=false] - Whether to include numbers in the password.
 * @param {boolean} [includeSymbols=false] - Whether to include symbols in the password.
 *
 * @returns {string} A randomly generated password with the specified length and character types.
 */
//
function generatePassword(length, includeUpperCase, includeLowerCase, includeNumbers, includeSymbols) {
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
  
    let password = '';
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      password += characters.charAt(randomIndex);
    }
  
    return password;
  }
  
  // Example Usage:
  const passwordLength = 12;
  const useUpperCase = true;
  const useLowerCase = true;
  const useNumbers = true;
  const useSymbols = false;
  
  const generatedPassword = generatePassword(passwordLength, useUpperCase, useLowerCase, useNumbers, useSymbols);
  console.log(generatedPassword);
  