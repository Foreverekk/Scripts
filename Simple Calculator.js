/**
 * Script Name: Simple Calculator
 * Description: This script performs basic arithmetic operations on two numbers.
 * Author: Foreverekk
 */

/**
 * Adds the second number to the first number.
 *
 * @param {number} a - The first number.
 * @param {number} b - The second number.
 * @returns {number} The sum of `a` and `b`.
 */
//
function add(a, b) {
    return a + b;
  }
  
/**
 * Subtracts the second number from the first number.
 *
 * @param {number} a - The first number.
 * @param {number} b - The second number.
 * @returns {number} The result of the subtraction.
 */
  function subtract(a, b) {
    return a - b;
  }
  
  /**
   * Multiplies two numbers.
   *
   * @param {number} a - The first number.
   * @param {number} b - The second number.
   * @returns {number} The result of the multiplication.
   */
  function multiply(a, b) {
    return a * b;
  }
  
  /**
   * Divides two numbers.
   *
   * @param {number} a - The first number.
   * @param {number} b - The second number.
   * @returns {number|string} The result of the division, or an error message if `b` is `0`.
   */
  function divide(a, b) {
    if (b === 0) {
      return "Cannot divide by zero!";
    }
    return a / b;
  }
  
  // Example Usage:
  const num1 = 10;
  const num2 = 5;
  
  console.log("Addition:", add(num1, num2));
  console.log("Subtraction:", subtract(num1, num2));
  console.log("Multiplication:", multiply(num1, num2));
  console.log("Division:", divide(num1, num2));
  