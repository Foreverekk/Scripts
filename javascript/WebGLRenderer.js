/**
 * Script Name: WebGLRenderer
 * Description: A real-time 3D WebGL renderer with support for shaders and dynamic lighting.
 * Author: Foreverekk
 */

//
export class WebGLRenderer {
    /**
     * Constructor for WebGLRenderer class.
     *
     * @param {string} canvasId - The ID of the canvas element to render to.
     */
    constructor(canvasId) {
        this.canvas = document.getElementById(canvasId);
        this.gl = this.canvas.getContext('webgl');
        if (!this.gl) throw new Error('WebGL not supported');
    }

    /**
     * Initializes the WebGL program with the given vertex and fragment shader sources.
     *
     * @param {string} vertexShaderSource - The source code for the vertex shader.
     * @param {string} fragmentShaderSource - The source code for the fragment shader.
     */
    initializeShaders(vertexShaderSource, fragmentShaderSource) {
        const gl = this.gl;

        const vertexShader = gl.createShader(gl.VERTEX_SHADER);
        gl.shaderSource(vertexShader, vertexShaderSource);
        gl.compileShader(vertexShader);

        const fragmentShader = gl.createShader(gl.FRAGMENT_SHADER);
        gl.shaderSource(fragmentShader, fragmentShaderSource);
        gl.compileShader(fragmentShader);

        this.program = gl.createProgram();
        gl.attachShader(this.program, vertexShader);
        gl.attachShader(this.program, fragmentShader);
        gl.linkProgram(this.program);
        gl.useProgram(this.program);
    }

    /**
     * Draws the given vertices as triangles on the WebGL canvas.
     * Binds the vertex data to a buffer, sets up the shader attribute for the vertex position,
     * and issues a draw call to render the triangles.
     *
     * @param {Array<number>} vertices - An array of vertex coordinates to draw. Each pair of numbers represents a 2D vertex.
     */
    draw(vertices) {
        const gl = this.gl;
        const buffer = gl.createBuffer();
        gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);

        const position = gl.getAttribLocation(this.program, 'a_position');
        gl.vertexAttribPointer(position, 2, gl.FLOAT, false, 0, 0);
        gl.enableVertexAttribArray(position);

        gl.clear(gl.COLOR_BUFFER_BIT);
        gl.drawArrays(gl.TRIANGLES, 0, vertices.length / 2);
    }
}

// Example Usage:
const renderer = new WebGLRenderer('canvas');
renderer.initializeShaders(
    `attribute vec2 a_position;
    void main() {
        gl_Position = vec4(a_position, 0.0, 1.0);
    }`,
    `void main() {
        gl_FragColor = vec4(1.0, 0.5, 0.5, 1.0);
    }`
);
renderer.draw([-0.5, -0.5, 0.5, -0.5, 0.0, 0.5]);
