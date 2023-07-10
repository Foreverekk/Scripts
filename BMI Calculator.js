/**
 * Script Name: BMI Calculator
 * Description: This script calculates the Body Mass Index (BMI) based on the provided input.
 * Author: Foreverekk
 */

// Function to calculate BMI
function calculateBMI(weight, height) {
  // Checking for valid input
  if (weight <= 0 || height <= 0) {
    return "Please enter valid data!";
  }

  // Calculating BMI
  const heightInMeters = height / 100; // Converting height to meters
  const bmi = weight / (heightInMeters * heightInMeters);

  // Returning the result rounded to two decimal places
  return "Your BMI is: " + bmi.toFixed(2);
}

// Example usage of the script
const weight = 70; // Weight in kilograms
const height = 170; // Height in centimeters

const result = calculateBMI(weight, height);
console.log(result);
