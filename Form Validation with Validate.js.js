/**
 * Script Name: Form Validation with Validate.js
 * Description: This script performs client-side form validation using the Validate.js library.
 * Author: Foreverekk
 */

/**
 * Handles the form submission event and performs client-side form validation.
 * If the form is valid, it logs a success message to the console and submits
 * the form to the server (if uncommented). Otherwise, it logs the validation
 * errors to the console.
 *
 * @param {Event} event - The form submission event.
 */
//
function handleSubmit(event) {
    event.preventDefault();
  
    const form = event.target;
  
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
  
    const validationResult = validate(form, validationRules);
  
    if (validationResult === undefined) {
      console.log('Form submitted successfully!');
      // Uncomment the following line to submit the form to the server
      // form.submit();
    } else {
      const errors = validationResult.reduce((acc, { attribute, error }) => {
        acc[attribute] = error;
        return acc;
      }, {});
      console.log('Form validation errors:', errors);
    }
  }
  
  // Example Usage:
  const form = document.getElementById('myForm');
  form.addEventListener('submit', handleSubmit);
  