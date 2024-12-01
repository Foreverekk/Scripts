/**
 * Script Name: Pathfinding
 * Description: A graph-based pathfinding utility supporting Dijkstra's and A* algorithms.
 * Author: Foreverekk
 */

//
export class Pathfinding {
    /**
     * Computes the shortest path between two nodes in a weighted graph using Dijkstra's algorithm.
     * The graph is given as an object where the keys are the nodes of the graph and the
     * values are arrays of objects in the form { neighbor: string, weight: number }.
     * The method returns an object containing the shortest path (as an array of nodes)
     * and the cost of the path (the sum of the weights of all edges in the path).
     * If no path exists, the method returns an empty array as the path and Infinity as the cost.
     * @param {Object} graph - The graph as an object of adjacency lists.
     * @param {string} start - The node to start the search from.
     * @param {string} end - The node to find the shortest path to.
     * @returns {Object} An object containing the shortest path and the cost of the path.
     */
    static dijkstra(graph, start, end) {
        const distances = {};
        const prev = {};
        const pq = new PriorityQueue();

        graph.forEach((_, node) => {
            distances[node] = Infinity;
            prev[node] = null;
            pq.enqueue(node, Infinity);
        });
        distances[start] = 0;
        pq.updatePriority(start, 0);

        while (!pq.isEmpty()) {
            const { value: node } = pq.dequeue();
            if (node === end) break;
            graph[node].forEach(({ neighbor, weight }) => {
                const alt = distances[node] + weight;
                if (alt < distances[neighbor]) {
                    distances[neighbor] = alt;
                    prev[neighbor] = node;
                    pq.updatePriority(neighbor, alt);
                }
            });
        }

        const path = [];
        for (let at = end; at !== null; at = prev[at]) {
            path.unshift(at);
        }
        return { path, cost: distances[end] };
    }
}

// Example Usage:
const graph = {
    A: [{ neighbor: 'B', weight: 1 }, { neighbor: 'C', weight: 4 }],
    B: [{ neighbor: 'C', weight: 2 }, { neighbor: 'D', weight: 5 }],
    C: [{ neighbor: 'D', weight: 1 }],
    D: [],
};
console.log(Pathfinding.dijkstra(graph, 'A', 'D'));
