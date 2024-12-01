/**
 * Script Name: BigIntMath
 * Description: A utility library for performing mathematical operations on extremely large integers using BigInt.
 * Author: Foreverekk
 */

//
export class BigIntMath {
    /**
     * Adds two large integer values represented as strings using BigInt.
     *
     * @param {string} a - The first large integer value as a string.
     * @param {string} b - The second large integer value as a string.
     * @returns {BigInt} The sum of the two BigInt values.
     */
    static add(a, b) {
        return BigInt(a) + BigInt(b);
    }

    /**
     * Multiplies two large integer values represented as strings using BigInt.
     *
     * @param {string} a - The first large integer value as a string.
     * @param {string} b - The second large integer value as a string.
     * @returns {BigInt} The product of the two BigInt values.
     */
    static multiply(a, b) {
        return BigInt(a) * BigInt(b);
    }

    /**
     * Computes the result of raising the given base to the given exponent using BigInt.
     *
     * @param {string} base - The base to be raised to the exponent power.
     * @param {string} exponent - The exponent to use for the power operation.
     * @returns {BigInt} The result of the power operation.
     */
    static power(base, exponent) {
        return BigInt(base) ** BigInt(exponent);
    }

    /**
     * Computes the factorial of a non-negative integer using BigInt.
     *
     * @param {number} n - The non-negative integer for which to compute the factorial.
     * @returns {BigInt} The factorial of the given integer as a BigInt.
     */
    static factorial(n) {
        let result = BigInt(1);
        for (let i = BigInt(2); i <= BigInt(n); i++) {
            result *= i;
        }
        return result;
    }
}

// Example Usage:
console.log(BigIntMath.add('12345678901234567890', '98765432109876543210')); // BigInt
console.log(BigIntMath.factorial(20)); // 2432902008176640000n
