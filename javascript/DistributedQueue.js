/**
 * Script Name: DistributedQueue
 * Description: A distributed queue implementation using WebSockets for real-time, cross-client task management.
 * Author: Foreverekk
 */

//
import { WebSocketServer } from 'ws';

export class DistributedQueue {
    /**
     * Initializes a new instance of the DistributedQueue class.
     *
     * This method initializes the queue and the list of connected clients.
     */
    constructor() {
        this.queue = [];
        this.clients = [];
    }

    /**
     * Starts the WebSocket server to accept incoming connections.
     *
     * @param {number} [port=8080] - The port number to listen on.
     */
    startServer(port = 8080) {
        const server = new WebSocketServer({ port });
        server.on('connection', (ws) => {
            this.clients.push(ws);
            ws.on('message', (message) => this.handleMessage(ws, message));
            ws.on('close', () => {
                this.clients = this.clients.filter((client) => client !== ws);
            });
        });
    }

    /**
     * Handles incoming messages from a client.
     *
     * @param {WebSocket} ws - The WebSocket client that sent the message.
     * @param {string} message - The incoming message to handle.
     *
     * The message is expected to be a JSON object with a 'type' property that is either 'enqueue'
     * or 'dequeue'. If the message is an 'enqueue' message, the 'task' property is required and
     * should be a JSON object representing the task to be added to the queue. If the message is
     * a 'dequeue' message, the 'task' property is not required.
     */
    handleMessage(ws, message) {
        const { type, task } = JSON.parse(message);
        if (type === 'enqueue') {
            this.queue.push(task);
            this.broadcast({ type: 'update', queue: this.queue });
        } else if (type === 'dequeue') {
            const dequeuedTask = this.queue.shift();
            this.broadcast({ type: 'update', queue: this.queue });
            ws.send(JSON.stringify({ type: 'task', task: dequeuedTask }));
        }
    }

    /**
     * Broadcasts a message to all connected clients.
     *
     * @param {Object} data - The data to be broadcasted. This data will be serialized to a JSON string
     * before being sent to all connected clients.
     *
     * @private
     */
    broadcast(data) {
        const message = JSON.stringify(data);
        this.clients.forEach((client) => client.send(message));
    }
}

// Example Usage (Server):
const queueServer = new DistributedQueue();
queueServer.startServer(8080);

// Example Usage (Client):
const ws = new WebSocket('ws://localhost:8080');
ws.onmessage = (message) => console.log(JSON.parse(message.data));
ws.onopen = () => ws.send(JSON.stringify({ type: 'enqueue', task: { id: 1, payload: 'data' } }));
