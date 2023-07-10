/**
 * Script Name: Task Manager
 * Description: This script allows users to add, remove, and display tasks in a task manager.
 * Author: Foreverekk
 */

// Array to store tasks
const tasks = [];

// Function to add a task
function addTask(task) {
  tasks.push(task);
}

// Function to remove a task
function removeTask(task) {
  const index = tasks.indexOf(task);
  if (index !== -1) {
    tasks.splice(index, 1);
  }
}

// Function to display tasks
function displayTasks() {
  console.log('Tasks:');
  tasks.forEach((task, index) => {
    console.log(`${index + 1}. ${task}`);
  });
}

// Example usage of the script
addTask('Complete project');
addTask('Buy groceries');
addTask('Call a friend');
displayTasks();

removeTask('Buy groceries');
displayTasks();
