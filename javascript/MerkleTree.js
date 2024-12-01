/**
 * Script Name: MerkleTree
 * Description: An implementation of a Merkle Tree for verifying data integrity, widely used in blockchain and cryptographic applications.
 * Author: Foreverekk
 */

//
import crypto from 'crypto';

export class MerkleTree {
    /**
     * Initializes a new instance of the MerkleTree class.
     * The input data is used to construct a Merkle tree, which is a binary tree
     * where each non-leaf node is the hash of its children, and each leaf
     * node is the hash of a piece of data.
     *
     * @param {Array<string>} data - The input data to construct the Merkle tree.
     */
    constructor(data) {
        this.leaves = data.map((item) => this.hash(item));
        this.tree = this.buildTree(this.leaves);
    }

    /**
     * Hashes the given data using the SHA-256 algorithm.
     *
     * @param {string} data - The data to be hashed.
     * @returns {string} The resulting hash in hexadecimal format.
     */
    hash(data) {
        return crypto.createHash('sha256').update(data).digest('hex');
    }

    /**
     * Builds a Merkle tree from the given leaf nodes.
     *
     * Recursively builds a Merkle tree by hashing pairs of nodes together
     * until a single root node is produced. The input array of leaf nodes
     * must contain at least one element. If the array has an odd length,
     * the last element will be duplicated to ensure that all nodes have two
     * children.
     *
     * @param {Array<string>} leaves - The leaf nodes to construct the Merkle
     * tree from.
     * @returns {Array<string>} An array of nodes representing the Merkle tree.
     */
    buildTree(leaves) {
        if (leaves.length === 1) return leaves;
        const parents = [];
        for (let i = 0; i < leaves.length; i += 2) {
            const left = leaves[i];
            const right = leaves[i + 1] || left; // Handle odd leaf
            parents.push(this.hash(left + right));
        }
        return [...parents, ...this.buildTree(parents)];
    }

    /**
     * Gets the root hash of the Merkle tree.
     *
     * @returns {string} The root hash of the Merkle tree.
     */
    getRoot() {
        return this.tree[this.tree.length - 1];
    }

    /**
     * Verifies that a given target hash is part of a Merkle tree given
     * a proof and the root hash of the tree.
     *
     * The proof is an array of objects with two properties: data and left.
     * For each object in the proof, the data property is the hash of a child
     * node, and the left property is a boolean indicating whether the target
     * hash is the left child or the right child.
     *
     * @param {Array<{data: string, left: boolean}>} proof - The proof
     * containing the hashes of the sibling nodes and their positions.
     * @param {string} targetHash - The target hash to verify.
     * @param {string} root - The root hash of the Merkle tree.
     * @returns {boolean} true if the target hash is part of the Merkle tree,
     * false otherwise.
     */
    verify(proof, targetHash, root) {
        let hash = targetHash;
        for (const { data, left } of proof) {
            hash = left ? this.hash(data + hash) : this.hash(hash + data);
        }
        return hash === root;
    }
}

// Example Usage:
const tree = new MerkleTree(['data1', 'data2', 'data3']);
console.log('Root Hash:', tree.getRoot());
