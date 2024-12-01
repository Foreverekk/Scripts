/**
 * Script Name: VirtualDOM
 * Description: A lightweight Virtual DOM implementation to enable efficient DOM updates using a diffing algorithm.
 * Author: Foreverekk
 */

//
export class VirtualDOM {
    constructor() {
        this.vdom = null;
    }

    /**
     * Creates a new Virtual DOM node with the given type, props, and children.
     * If no props are given, an empty object is used.
     * The children argument can be any number of arguments, which are flattened into a single array.
     * @param {string} type - The type of the element to create.
     * @param {Object} [props] - The props of the element to create.
     * @param {...*} children - The children of the element to create.
     * @returns {Object} The newly created Virtual DOM node.
     */
    createElement(type, props, ...children) {
        return { type, props: props || {}, children: children.flat() };
    }

    /**
     * Computes the diff between two Virtual DOM nodes.
     * Returns an object with a type property that is either:
     * - 'CREATE' if the old node doesn't exist and the new node should be created.
     * - 'REMOVE' if the old node exists and the new node doesn't exist.
     * - 'REPLACE' if the old node exists and the new node has a different type.
     * - 'TEXT' if the old node exists and the new node is a string with a different value.
     * - 'UPDATE' if the old node exists and the new node has the same type and props.
     * The diff object also includes any props and children that should be updated.
     * @param {Object} oldNode - The old Virtual DOM node.
     * @param {Object} newNode - The new Virtual DOM node.
     * @returns {Object} An object with the type and any props and children that should be updated.
     */
    diff(oldNode, newNode) {
        if (!oldNode) return { type: 'CREATE', node: newNode };
        if (!newNode) return { type: 'REMOVE' };
        if (typeof oldNode !== typeof newNode || oldNode.type !== newNode.type) {
            return { type: 'REPLACE', node: newNode };
        }
        if (typeof newNode === 'string' && oldNode !== newNode) {
            return { type: 'TEXT', node: newNode };
        }
        const props = this.diffProps(oldNode.props, newNode.props);
        const children = this.diffChildren(oldNode.children, newNode.children);
        return { type: 'UPDATE', props, children };
    }

    /**
     * Computes the diff between two props objects.
     * Returns an object with the updates, where the key is the property name and
     * the value is the new value of the property.
     * @param {Object} oldProps - The old props object.
     * @param {Object} newProps - The new props object.
     * @returns {Object} An object with the updates to apply to the DOM element.
     */
    diffProps(oldProps, newProps) {
        const updates = {};
        for (const key in { ...oldProps, ...newProps }) {
            if (oldProps[key] !== newProps[key]) {
                updates[key] = newProps[key];
            }
        }
        return updates;
    }

    /**
     * Computes the diff between two arrays of virtual children nodes.
     * Returns an array of patches that can be used to update the DOM.
     * @param {Array<VirtualDOMNode>} oldChildren - The old children nodes.
     * @param {Array<VirtualDOMNode>} newChildren - The new children nodes.
     * @returns {Array<Patch>} An array of patches to update the DOM.
     */
    diffChildren(oldChildren = [], newChildren = []) {
        const patches = [];
        for (let i = 0; i < Math.max(oldChildren.length, newChildren.length); i++) {
            patches.push(this.diff(oldChildren[i], newChildren[i]));
        }
        return patches;
    }

    /**
     * Applies the given node to the given parent DOM node.
     * This method is responsible for updating the DOM according to the given node.
     * @param {Object} node - The Virtual DOM node to apply.
     * @param {HTMLElement} parent - The parent DOM node to apply the node to.
     */
    apply(node, parent) {
        // Implement DOM patching logic here
    }
}

// Example Usage:
const vdom = new VirtualDOM();
const oldTree = vdom.createElement('div', null, 'Hello');
const newTree = vdom.createElement('div', null, 'World');
const diff = vdom.diff(oldTree, newTree);
console.log(diff);
