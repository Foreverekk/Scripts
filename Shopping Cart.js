/**
 * Script Name: Shopping Cart
 * Description: This script implements a shopping cart with features like adding items, removing items, and calculating total price.
 * Author: Foreverekk
 */

// Item object
class Item {
    constructor(name, price) {
      this.name = name;
      this.price = price;
    }
  }
  
  // Shopping cart object
  const shoppingCart = {
    items: [],
  
    // Function to add an item to the shopping cart
    addItem(item) {
      this.items.push(item);
      console.log(`Item '${item.name}' added to the cart.`);
    },
  
    // Function to remove an item from the shopping cart
    removeItem(index) {
      if (index >= 0 && index < this.items.length) {
        const removedItem = this.items.splice(index, 1);
        console.log(`Item '${removedItem[0].name}' removed from the cart.`);
      } else {
        console.log('Invalid item index.');
      }
    },
  
    // Function to calculate the total price of the items in the shopping cart
    calculateTotalPrice() {
      let totalPrice = 0;
      this.items.forEach((item) => {
        totalPrice += item.price;
      });
      return totalPrice;
    },
  
    // Function to display the items in the shopping cart
    displayItems() {
      console.log('Shopping Cart Items:');
      this.items.forEach((item, index) => {
        console.log(`${index + 1}. ${item.name} - $${item.price.toFixed(2)}`);
      });
    },
  };
  
  // Example usage of the script
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
  