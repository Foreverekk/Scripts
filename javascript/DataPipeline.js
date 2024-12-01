/**
 * Script Name: DataPipeline
 * Description: A utility to process data through a series of customizable transformations.
 * Author: Foreverekk
 */

//
export class DataPipeline {
    /**
     * Constructor for DataPipeline class.
     * @param {Array} data - The source data to be processed.
     */
    constructor(data) {
        this.data = data;
        this.operations = [];
    }

    /**
     * Adds a transformation function to the pipeline.
     * @param {Function} fn - The transformation function to be added.
     * @returns {DataPipeline} The current instance of the pipeline for method chaining.
     */
    pipe(fn) {
        this.operations.push(fn);
        return this;
    }

    /**
     * Executes the pipeline and returns the result.
     * @returns {*} The output of the pipeline.
     */
    execute() {
        return this.operations.reduce((result, fn) => fn(result), this.data);
    }
}

// Example Usage:
const pipeline = new DataPipeline([1, 2, 3, 4, 5])
    .pipe((data) => data.filter((x) => x % 2 === 0))
    .pipe((data) => data.map((x) => x * 10));

console.log(pipeline.execute()); // [20, 40]
