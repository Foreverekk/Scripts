/**
 * Script Name: To-Do List
 * Description: This script implements an advanced todo list with features like adding, deleting, and marking tasks as completed.
 * Author: Foreverekk
 */

//
const todoList = {
    tasks: [],
  
    /**
     * Adds a task to the todo list.
     * @param {string} taskName - The name of the task to add.
     */
    addTask(taskName) {
      const task = {
        name: taskName,
        completed: false,
      };
      this.tasks.push(task);
      console.log(`Task '${taskName}' added.`);
    },
  
    /**
     * Deletes a task from the todo list by index.
     * If the given index is out of bounds, it logs an error message.
     * @param {number} index - The index of the task to delete.
     */
    deleteTask(index) {
      if (index >= 0 && index < this.tasks.length) {
        const deletedTask = this.tasks.splice(index, 1);
        console.log(`Task '${deletedTask[0].name}' deleted.`);
      } else {
        console.log('Invalid task index.');
      }
    },
  
    /**
     * Marks the task at the given index as completed.
     * If the given index is out of bounds, it does nothing.
     * @param {number} index - The index of the task to be marked as completed.
     */
    markTaskAsCompleted(index) {
      if (index >= 0 && index < this.tasks.length) {
        this.tasks[index].completed = true;
        console.log(`Task '${this.tasks[index].name}' marked as completed.`);
      } else {
        console.log('Invalid task index.');
      }
    },
  
    /**
     * Displays all tasks in the todo list to the console.
     * Each task is preceded by its index number in the list and
     * marked as completed with '[x]' or as uncompleted with '[ ]'.
     */
    displayTasks() {
      console.log('Todo List:');
      this.tasks.forEach((task, index) => {
        const status = task.completed ? '[x]' : '[ ]';
        console.log(`${index + 1}. ${status} ${task.name}`);
      });
    },
  };
  
  // Example Usage:
  todoList.addTask('Buy groceries');
  todoList.addTask('Walk the dog');
  todoList.displayTasks();
  
  todoList.markTaskAsCompleted(1);
  todoList.displayTasks();
  
  todoList.deleteTask(0);
  todoList.displayTasks();
  