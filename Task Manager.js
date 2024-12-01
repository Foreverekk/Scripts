/**
 * Script Name: Task Manager
 * Description: This script allows users to add, remove, and display tasks in a task manager.
 * Author: Foreverekk
 */

//
const tasks = [];

/**
 * Adds a task to the task list.
 * @param {string} task - The name of the task to add.
 */
function addTask(task) {
  tasks.push(task);
}

/**
 * Removes a task from the task list by the given task name.
 * @param {string} task - The name of the task to remove.
 */
function removeTask(task) {
  const index = tasks.indexOf(task);
  if (index !== -1) {
    tasks.splice(index, 1);
  }
}

/**
 * Displays all tasks in the task list to the console.
 * Each task is preceded by its index number in the list.
 */
function displayTasks() {
  console.log('Tasks:');
  tasks.forEach((task, index) => {
    console.log(`${index + 1}. ${task}`);
  });
}

// Example Usage:
addTask('Complete project');
addTask('Buy groceries');
addTask('Call a friend');
displayTasks();

removeTask('Buy groceries');
displayTasks();
