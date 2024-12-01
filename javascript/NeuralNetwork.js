/**
 * Script Name: NeuralNetwork
 * Description: A basic implementation of a feed-forward neural network for simple machine learning tasks.
 * Author: Foreverekk
 */

//
export class NeuralNetwork {
    /**
     * Creates a new NeuralNetwork instance with the given number of input, hidden and output nodes.
     * The instance is initialized with random weights and biases.
     * @param {number} inputNodes - The number of input nodes.
     * @param {number} hiddenNodes - The number of hidden nodes.
     * @param {number} outputNodes - The number of output nodes.
     */
    constructor(inputNodes, hiddenNodes, outputNodes) {
        this.inputNodes = inputNodes;
        this.hiddenNodes = hiddenNodes;
        this.outputNodes = outputNodes;

        // Initialize weights
        this.weightsIH = this.randomMatrix(this.hiddenNodes, this.inputNodes);
        this.weightsHO = this.randomMatrix(this.outputNodes, this.hiddenNodes);

        // Initialize biases
        this.biasH = this.randomMatrix(this.hiddenNodes, 1);
        this.biasO = this.randomMatrix(this.outputNodes, 1);
    }

    /**
     * Generates a random matrix with the given number of rows and columns.
     * Each element of the matrix is a random number between -1 and 1.
     * @param {number} rows - The number of rows in the matrix.
     * @param {number} cols - The number of columns in the matrix.
     * @returns {Array<Array<number>>} A 2D array representing the random matrix.
     */
    randomMatrix(rows, cols) {
        return Array.from({ length: rows }, () => Array.from({ length: cols }, () => Math.random() * 2 - 1));
    }

    /**
     * Computes the sigmoid function of the given value.
     * The sigmoid function maps any real-valued number to a value between 0 and 1.
     * @param {number} x - The value to compute the sigmoid of.
     * @returns {number} The sigmoid of the given value.
     */
    sigmoid(x) {
        return 1 / (1 + Math.exp(-x));
    }

    /**
     * Computes the output of the neural network given an input array.
     * This method first computes the output of the hidden layer, then uses
     * that output to compute the output of the output layer.
     * The output of both layers is transformed using the sigmoid function.
     * @param {Array<number>} inputArray - The array of input values to the neural network.
     * @returns {Array<Array<number>>} A 2D array representing the output of the neural network.
     */
    feedForward(inputArray) {
        const inputs = this.matrixFromArray(inputArray);

        // Hidden layer
        let hidden = this.dot(this.weightsIH, inputs);
        hidden = this.add(hidden, this.biasH);
        hidden = hidden.map((row) => row.map(this.sigmoid));

        // Output layer
        let output = this.dot(this.weightsHO, hidden);
        output = this.add(output, this.biasO);
        output = output.map((row) => row.map(this.sigmoid));

        return output;
    }

    /**
     * Converts a 1D array into a 2D column matrix.
     *
     * @param {Array<number>} arr - The array to convert into a matrix.
     * @returns {Array<Array<number>>} A 2D array where each element of the input array is a row in the matrix.
     */
    matrixFromArray(arr) {
        return arr.map((val) => [val]);
    }

    /**
     * Computes the dot product of two matrices.
     * The dot product is calculated by multiplying corresponding elements
     * and summing the results for each row of the first matrix and each column of the second matrix.
     * 
     * @param {Array<Array<number>>} a - The first matrix.
     * @param {Array<Array<number>>} b - The second matrix.
     * @returns {Array<Array<number>>} A new matrix representing the dot product of the given matrices.
     */
    dot(a, b) {
        return a.map((row, i) => b[0].map((_, j) => row.reduce((sum, _, n) => sum + a[i][n] * b[n][j], 0)));
    }

    /**
     * Adds two matrices element-wise.
     * Each element of the resulting matrix is the sum of the corresponding elements of the input matrices.
     * @param {Array<Array<number>>} a - The first matrix.
     * @param {Array<Array<number>>} b - The second matrix.
     * @returns {Array<Array<number>>} A new matrix representing the element-wise sum of the given matrices.
     */
    add(a, b) {
        return a.map((row, i) => row.map((val, j) => val + b[i][j]));
    }
}

// Example Usage:
const nn = new NeuralNetwork(2, 4, 1);
const output = nn.feedForward([1, 0]);
console.log(output);
