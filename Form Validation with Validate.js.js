/**
 * Script Name: Form Validation with Validate.js
 * Description: This script performs client-side form validation using the Validate.js library.
 * Author: Foreverekk
 */

// Function to handle form submission
function handleSubmit(event) {
    event.preventDefault();
  
    const form = event.target;
  
    // Define the validation rules using Validate.js
    const validationRules = {
      name: {
        presence: true,
        length: {
          minimum: 3,
          message: 'Name must be at least 3 characters long.'
        }
      },
      email: {
        presence: true,
        email: {
          message: 'Please enter a valid email address.'
        }
      },
      password: {
        presence: true,
        length: {
          minimum: 8,
          message: 'Password must be at least 8 characters long.'
        }
      }
    };
  
    // Perform the form validation using Validate.js
    const validationResult = validate(form, validationRules);
  
    if (validationResult === undefined) {
      // Form is valid, submit the form or perform further actions
      console.log('Form submitted successfully!');
      // Uncomment the following line to submit the form to the server
      // form.submit();
    } else {
      // Form is invalid, handle the validation errors
      const errors = validationResult.reduce((acc, { attribute, error }) => {
        acc[attribute] = error;
        return acc;
      }, {});
      console.log('Form validation errors:', errors);
    }
  }
  
  // Example usage of the script
  const form = document.getElementById('myForm');
  form.addEventListener('submit', handleSubmit);
  