/**
 * Script Name: BMI Calculator
 * Description: This script calculates the Body Mass Index (BMI) based on the provided input.
 * Author: Foreverekk
 */

/**
 * Calculates the Body Mass Index (BMI) based on the provided weight and height.
 *
 * @param {number} weight - The weight of the person in kilograms.
 * @param {number} height - The height of the person in centimeters.
 * @returns {string} A string containing the calculated BMI.
 */
//
function calculateBMI(weight, height) {
  if (weight <= 0 || height <= 0) {
    return "Please enter valid data!";
  }

  const heightInMeters = height / 100;
  const bmi = weight / (heightInMeters * heightInMeters);

  return "Your BMI is: " + bmi.toFixed(2);
}

// Example Usage:
const weight = 70;
const height = 170;

const result = calculateBMI(weight, height);
console.log(result);
