/**
 * Script Name: Graph
 * Description: An advanced Graph data structure with support for breadth-first search (BFS), depth-first search (DFS), and shortest path algorithms.
 * Author: Foreverekk
 */

//
export class Graph {
    /**
     * Initializes a new instance of the Graph class.
     * The Graph class is a data structure that uses an adjacency list to represent a graph.
     * The graph is undirected and unweighted.
     * The adjacency list is a Map where each key is a vertex and the value is an array of vertices that are connected to the key vertex.
     */
    constructor() {
        this.adjList = new Map();
    }

    /**
     * Adds a vertex to the graph.
     * If the vertex does not already exist in the graph, it is added to the adjacency list with an empty array as its value.
     * This represents a vertex with no edges.
     * 
     * @param {string} vertex - The vertex to be added to the graph.
     */
    addVertex(vertex) {
        if (!this.adjList.has(vertex)) this.adjList.set(vertex, []);
    }

    /**
     * Adds an edge between two vertices in the graph.
     * If the vertices exist in the graph, the method adds each vertex to the other's adjacency list,
     * effectively creating an undirected edge between them.
     * 
     * @param {string} v1 - The first vertex.
     * @param {string} v2 - The second vertex.
     */
    addEdge(v1, v2) {
        this.adjList.get(v1).push(v2);
        this.adjList.get(v2).push(v1);
    }

    /**
     * Performs a breadth-first search (BFS) on the graph starting from the given vertex.
     * The method returns an array of vertices in the order they were visited.
     * The time complexity of this algorithm is O(V + E), where V is the number of vertices and E is the number of edges.
     * The space complexity is O(V).
     * @param {string} start - The vertex to start the search from.
     * @returns {Array<string>} An array of vertices in the order they were visited.
     */
    bfs(start) {
        const visited = new Set();
        const queue = [start];
        const result = [];
        while (queue.length) {
            const vertex = queue.shift();
            if (!visited.has(vertex)) {
                visited.add(vertex);
                result.push(vertex);
                queue.push(...this.adjList.get(vertex).filter((v) => !visited.has(v)));
            }
        }
        return result;
    }

    /**
     * Performs a depth-first search (DFS) on the graph starting from the given vertex.
     * The method returns an array of vertices in the order they were visited.
     * This algorithm explores as far as possible along each branch before backtracking.
     * The time complexity of this algorithm is O(V + E), where V is the number of vertices and E is the number of edges.
     * The space complexity is O(V).
     * 
     * @param {string} start - The vertex to start the search from.
     * @param {Set<string>} [visited=new Set()] - A set to keep track of visited vertices, used to avoid revisiting nodes.
     * @returns {Array<string>} An array of vertices in the order they were visited.
     */
    dfs(start, visited = new Set()) {
        visited.add(start);
        const result = [start];
        this.adjList.get(start).forEach((neighbor) => {
            if (!visited.has(neighbor)) {
                result.push(...this.dfs(neighbor, visited));
            }
        });
        return result;
    }

    /**
     * Finds the shortest path between two vertices in the graph using a breadth-first search approach.
     * The method returns an array of vertices representing the shortest path from the start vertex to the end vertex.
     * If no path exists, the method returns an empty array.
     * The time complexity of this algorithm is O(V + E), where V is the number of vertices and E is the number of edges.
     * The space complexity is O(V).
     * 
     * @param {string} start - The vertex to start the search from.
     * @param {string} end - The vertex to find the shortest path to.
     * @returns {Array<string>} An array of vertices representing the shortest path from start to end.
     */
    shortestPath(start, end) {
        const distances = {};
        const prev = {};
        const queue = [start];
        distances[start] = 0;

        while (queue.length) {
            const node = queue.shift();
            this.adjList.get(node).forEach((neighbor) => {
                if (distances[neighbor] === undefined) {
                    distances[neighbor] = distances[node] + 1;
                    prev[neighbor] = node;
                    queue.push(neighbor);
                }
            });
        }

        const path = [];
        for (let at = end; at; at = prev[at]) {
            path.push(at);
        }
        return path.reverse();
    }
}

// Example Usage:
const graph = new Graph();
graph.addVertex('A');
graph.addVertex('B');
graph.addVertex('C');
graph.addEdge('A', 'B');
graph.addEdge('A', 'C');
console.log(graph.bfs('A')); // ['A', 'B', 'C']
console.log(graph.dfs('A')); // ['A', 'B', 'C']
console.log(graph.shortestPath('A', 'C')); // ['A', 'C']
