/**
 * Script Name: Shopping Cart
 * Description: This script implements a shopping cart with features like adding items, removing items, and calculating total price.
 * Author: Foreverekk
 */

//
class Item {
/**
 * Creates an instance of Item.
 *
 * @param {string} name - The name of the item.
 * @param {number} price - The price of the item.
 */
    constructor(name, price) {
      this.name = name;
      this.price = price;
    }
  }
  
  const shoppingCart = {
    items: [],
  
    /**
     * Adds an item to the shopping cart.
     *
     * @param {Item} item - The item to add to the cart.
     */
    addItem(item) {
      this.items.push(item);
      console.log(`Item '${item.name}' added to the cart.`);
    },
  
    /**
     * Removes an item from the shopping cart by index.
     *
     * @param {number} index - The index of the item to remove.
     */
    removeItem(index) {
      if (index >= 0 && index < this.items.length) {
        const removedItem = this.items.splice(index, 1);
        console.log(`Item '${removedItem[0].name}' removed from the cart.`);
      } else {
        console.log('Invalid item index.');
      }
    },
  
    /**
     * Calculates the total price of all items in the shopping cart.
     * @returns {number} The total price of all items in the shopping cart.
     */
    calculateTotalPrice() {
      let totalPrice = 0;
      this.items.forEach((item) => {
        totalPrice += item.price;
      });
      return totalPrice;
    },
  
    /**
     * Displays all items in the shopping cart to the console.
     * The display includes the item number, name, and price.
     */
    displayItems() {
      console.log('Shopping Cart Items:');
      this.items.forEach((item, index) => {
        console.log(`${index + 1}. ${item.name} - $${item.price.toFixed(2)}`);
      });
    },
  };
  
  // Example Usage:
  const item1 = new Item('T-shirt', 19.99);
  const item2 = new Item('Jeans', 49.99);
  const item3 = new Item('Shoes', 79.99);
  
  shoppingCart.addItem(item1);
  shoppingCart.addItem(item2);
  shoppingCart.addItem(item3);
  shoppingCart.displayItems();
  
  shoppingCart.removeItem(1);
  shoppingCart.displayItems();
  
  const totalPrice = shoppingCart.calculateTotalPrice();
  console.log('Total Price: $' + totalPrice.toFixed(2));
  