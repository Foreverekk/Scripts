/**
 * Script Name: Trie
 * Description: An advanced Trie (Prefix Tree) implementation for efficient text search, autocomplete, and dictionary operations.
 * Author: Foreverekk
 */

//
export class Trie {
    /**
     * Initializes a new instance of the Trie class.
     * @constructor
     */
    constructor() {
        this.root = {};
    }

    /**
     * Inserts a word into the Trie.
     * @param {string} word - The word to be inserted.
     * @returns {void}
     */
    insert(word) {
        let node = this.root;
        for (const char of word) {
            if (!node[char]) node[char] = {};
            node = node[char];
        }
        node.isEnd = true;
    }

    /**
     * Searches for a word in the Trie.
     * @param {string} word - The word to be searched.
     * @returns {boolean} true if the word exists in the Trie, false otherwise.
     */
    search(word) {
        let node = this.root;
        for (const char of word) {
            if (!node[char]) return false;
            node = node[char];
        }
        return !!node.isEnd;
    }

    /**
     * Checks if there is any word in the Trie that starts with the given prefix.
     * @param {string} prefix - The prefix to be checked.
     * @returns {boolean} true if there is any word that starts with the prefix, false otherwise.
     */
    startsWith(prefix) {
        let node = this.root;
        for (const char of prefix) {
            if (!node[char]) return false;
            node = node[char];
        }
        return true;
    }

    /**
     * Finds all words in the Trie that start with the given prefix.
     * @param {string} prefix - The prefix to be searched.
     * @returns {Array<string>} An array of words that start with the prefix.
     */
    autoComplete(prefix) {
        let node = this.root;
        for (const char of prefix) {
            if (!node[char]) return [];
            node = node[char];
        }

        const results = [];
        /**
         * Performs a depth-first search (DFS) on the Trie to find all words that start with the given prefix.
         * @param {Object} node - The current node in the Trie.
         * @param {string} path - The current path of the words found so far.
         * @returns {void}
         * @private
         */
        const dfs = (node, path) => {
            if (node.isEnd) results.push(path);
            for (const char in node) {
                if (char !== 'isEnd') dfs(node[char], path + char);
            }
        };
        dfs(node, prefix);
        return results;
    }
}

// Example Usage:
const trie = new Trie();
trie.insert('apple');
trie.insert('app');
trie.insert('applet');
console.log(trie.search('app')); // true
console.log(trie.autoComplete('app')); // ['app', 'apple', 'applet']
