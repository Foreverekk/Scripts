/**
 * Script Name: RayTracer
 * Description: A basic ray tracer for rendering 3D scenes using canvas, based on principles of computer graphics.
 * Author: Foreverekk
 */

//
export class RayTracer {
    /**
     * Constructor for RayTracer class.
     *
     * @param {string} canvasId - The ID of the canvas element to render to.
     * @param {number} width - The width of the canvas.
     * @param {number} height - The height of the canvas.
     */
    constructor(canvasId, width, height) {
        this.canvas = document.getElementById(canvasId);
        this.canvas.width = width;
        this.canvas.height = height;
        this.ctx = this.canvas.getContext('2d');
        this.imageData = this.ctx.createImageData(width, height);
    }

    /**
     * Renders the given scene on the canvas.
     * Iterates through each pixel in the canvas, traces a ray through the scene
     * for each pixel, and uses the resulting color to set the pixel color.
     * Finally, the rendered image is drawn to the canvas.
     *
     * @param {Object} scene - The scene to render, containing a camera, objects, and a light.
     */
    render(scene) {
        const { width, height } = this.canvas;
        for (let y = 0; y < height; y++) {
            for (let x = 0; x < width; x++) {
                const color = this.traceRay(scene, x / width, y / height);
                this.setPixel(x, y, color);
            }
        }
        this.ctx.putImageData(this.imageData, 0, 0);
    }

    /**
     * Traces a ray through the scene to determine the color at a given pixel.
     * Computes the intersection of the ray with objects in the scene, calculates
     * the lighting based on the light source, and returns the resulting color.
     *
     * @param {Object} scene - The scene containing the camera, objects, and light.
     * @param {number} u - The horizontal coordinate of the pixel in normalized device coordinates.
     * @param {number} v - The vertical coordinate of the pixel in normalized device coordinates.
     * @returns {Array<number>} An array representing the RGB color of the pixel.
     */
    traceRay(scene, u, v) {
        const { camera, objects, light } = scene;
        const ray = camera.getRay(u, v);
        const hit = objects.reduce((closest, obj) => obj.intersect(ray, closest), null);
        if (hit) {
            const lightDir = this.normalize(this.subtract(light.position, hit.point));
            const intensity = Math.max(0, this.dot(hit.normal, lightDir));
            return hit.color.map((c) => Math.min(255, c * intensity));
        }
        return [0, 0, 0]; // Background color
    }

    /**
     * Sets the color of the pixel at the given coordinates to the given RGB color.
     * @param {number} x - The x-coordinate of the pixel.
     * @param {number} y - The y-coordinate of the pixel.
     * @param {Array<number>} [r, g, b] - An array representing the RGB color of the pixel.
     */
    setPixel(x, y, [r, g, b]) {
        const idx = (y * this.canvas.width + x) * 4;
        this.imageData.data[idx] = r;
        this.imageData.data[idx + 1] = g;
        this.imageData.data[idx + 2] = b;
        this.imageData.data[idx + 3] = 255; // Alpha
    }

    /**
     * Subtracts two vectors component-wise.
     *
     * @param {Array<number>} a - The first vector.
     * @param {Array<number>} b - The second vector.
     * @returns {Array<number>} The resulting vector after subtracting b from a.
     */
    subtract(a, b) {
        return a.map((v, i) => v - b[i]);
    }

    /**
     * Normalizes a vector to have a magnitude of 1.
     * The direction of the vector remains the same, but its length is adjusted to be 1.
     *
     * @param {Array<number>} v - The vector to be normalized.
     * @returns {Array<number>} A new vector with the same direction as the input, but with a magnitude of 1.
     */
    normalize(v) {
        const len = Math.sqrt(this.dot(v, v));
        return v.map((val) => val / len);
    }

    /**
     * Computes the dot product of two vectors.
     * The dot product is the sum of the component-wise products of the two vectors.
     * @param {Array<number>} a - The first vector.
     * @param {Array<number>} b - The second vector.
     * @returns {number} The dot product of the two vectors.
     */
    dot(a, b) {
        return a.reduce((sum, val, i) => sum + val * b[i], 0);
    }
}

// Example Usage:
const rayTracer = new RayTracer('canvas', 800, 600);
const scene = {
    camera: { getRay: (u, v) => ({ origin: [0, 0, -5], direction: [u - 0.5, v - 0.5, 1] }) },
    objects: [
        {
            /**
             * Computes the intersection of the given ray with the object.
             * If an intersection is found, the distance of the intersection from the ray's origin
             * is compared with the current closest distance. If the intersection is closer, the
             * closest distance is updated and the intersection point is stored.
             *
             * @param {Object} ray - The ray to intersect with the object.
             * @param {Object} closest - The current closest intersection, with properties
             *   'distance' and 'point' representing the distance of the intersection from
             *   the ray's origin and the intersection point, respectively.
             * @returns {Object} The updated closest intersection.
             */
            intersect: (ray, closest) => {
                // Sphere intersection logic
            },
            color: [255, 0, 0],
        },
    ],
    light: { position: [10, 10, -10] },
};
rayTracer.render(scene);
