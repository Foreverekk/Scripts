/**
 * Script Name: Form Validation
 * Description: This script performs form validation using regular expressions.
 * Author: Foreverekk
 */

//
/**
 * Validates a form with name, email, and password inputs.
 * The form is considered valid if all the inputs satisfy the following conditions:
 * - The name input can only contain letters and spaces.
 * - The email input must be a valid email address.
 * - The password input must be at least 8 characters long and contain one lowercase letter, one uppercase letter, and one digit.
 * Returns true if the form is valid, false otherwise.
 */
//
function validateForm() {
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
  
    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const password = passwordInput.value;
  
    const nameRegex = /^[A-Za-z\s]+$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
  
    if (!nameRegex.test(name)) {
      setError(nameInput, 'Please enter a valid name (only letters and spaces allowed).');
      return false;
    }
  
    if (!emailRegex.test(email)) {
      setError(emailInput, 'Please enter a valid email address.');
      return false;
    }
  
    if (!passwordRegex.test(password)) {
      setError(passwordInput, 'Please enter a valid password (minimum 8 characters, at least one uppercase letter, one lowercase letter, and one digit).');
      return false;
    }
  
    return true;
  }
  
  /**
   * Sets the error message for a given input element and displays it.
   * The error message is displayed in an element with the id of the input element
   * plus '-error'. The input element also gets the class 'error' to
   * visually indicate the error.
   * @param {HTMLInputElement} inputElement The input element to set the error message for.
   * @param {string} errorMessage The error message to display.
   */
  function setError(inputElement, errorMessage) {
    const errorElement = document.getElementById(`${inputElement.id}-error`);
    errorElement.textContent = errorMessage;
    errorElement.style.display = 'block';
    inputElement.classList.add('error');
  }
  
  // Example Usage:
  const submitButton = document.getElementById('submit-button');
  submitButton.addEventListener('click', function(event) {
    event.preventDefault();
    const isValid = validateForm();
    if (isValid) {
      alert('Form submitted successfully!');
      // You can add code here to submit the form data
    }
  });
  