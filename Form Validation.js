/**
 * Script Name: Form Validation
 * Description: This script performs form validation using regular expressions.
 * Author: Foreverekk
 */

// Function to validate the form
function validateForm() {
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
  
    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const password = passwordInput.value;
  
    // Regular expressions for validation
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
  
    // Form is valid
    return true;
  }
  
  // Function to set error message and styling
  function setError(inputElement, errorMessage) {
    const errorElement = document.getElementById(`${inputElement.id}-error`);
    errorElement.textContent = errorMessage;
    errorElement.style.display = 'block';
    inputElement.classList.add('error');
  }
  
  // Example usage of the script
  const submitButton = document.getElementById('submit-button');
  submitButton.addEventListener('click', function(event) {
    event.preventDefault();
    const isValid = validateForm();
    if (isValid) {
      alert('Form submitted successfully!');
      // You can add code here to submit the form data
    }
  });
  