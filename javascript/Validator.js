/**
 * Script Name: Validator
 * Description: A utility to validate form inputs using predefined rules.
 * Author: Foreverekk
 */

//
export class Validator {
    static rules = {
        required: (value) => !!value || 'This field is required',
        /**
         * Validates whether the given value is in a valid email format.
         * @param {string} value - The value to be validated as an email.
         * @returns {boolean|string} True if the value is a valid email, otherwise an error message.
         */
        email: (value) =>
            /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) || 'Invalid email format',
        /**
         * Validates whether the given value has a length greater than or equal to the given minimum length.
         * @param {number} length - The minimum length to be validated against.
         * @param {string} value - The value to be validated.
         * @returns {boolean|string} True if the value length is greater than or equal to the given length,
         * otherwise a string error message indicating the minimum length.
         */
        minLength: (length) => (value) =>
            value.length >= length || `Minimum length is ${length}`,
    };

    /**
     * Validates the given value against the provided rules.
     * @param {*} value - The value to be validated.
     * @param {Array<Function|Object>} rules - An array of validation rules to apply. Each rule can be either a
     * function that takes the value as an argument and returns true if the value is valid, or an object with a
     * `rule` property containing the function and any additional properties that will be passed to the function as
     * arguments.
     * @returns {boolean|string} True if all validation rules pass, otherwise the first error message encountered.
     */
    static validate(value, rules) {
        for (const rule of rules) {
            const result = typeof rule === 'function' ? rule(value) : rule(value);
            if (result !== true) return result;
        }
        return true;
    }
}

// Example Usage:
const errors = Validator.validate('', [
    Validator.rules.required,
    Validator.rules.email,
]);
console.log(errors); // "This field is required"
