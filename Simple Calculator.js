/**
 * Script Name: Simple Calculator
 * Description: This script performs basic arithmetic operations on two numbers.
 * Author: Foreverekk
 */

// Function to add two numbers
function add(a, b) {
    return a + b;
  }
  
  // Function to subtract two numbers
  function subtract(a, b) {
    return a - b;
  }
  
  // Function to multiply two numbers
  function multiply(a, b) {
    return a * b;
  }
  
  // Function to divide two numbers
  function divide(a, b) {
    if (b === 0) {
      return "Cannot divide by zero!";
    }
    return a / b;
  }
  
  // Example usage of the script
  const num1 = 10;
  const num2 = 5;
  
  console.log("Addition:", add(num1, num2));
  console.log("Subtraction:", subtract(num1, num2));
  console.log("Multiplication:", multiply(num1, num2));
  console.log("Division:", divide(num1, num2));
  