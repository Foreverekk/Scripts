/**
 * Script Name: To-Do List
 * Description: This script implements an advanced todo list with features like adding, deleting, and marking tasks as completed.
 * Author: Foreverekk
 */

// TodoList object
const todoList = {
    tasks: [],
  
    // Function to add a task
    addTask(taskName) {
      const task = {
        name: taskName,
        completed: false,
      };
      this.tasks.push(task);
      console.log(`Task '${taskName}' added.`);
    },
  
    // Function to delete a task
    deleteTask(index) {
      if (index >= 0 && index < this.tasks.length) {
        const deletedTask = this.tasks.splice(index, 1);
        console.log(`Task '${deletedTask[0].name}' deleted.`);
      } else {
        console.log('Invalid task index.');
      }
    },
  
    // Function to mark a task as completed
    markTaskAsCompleted(index) {
      if (index >= 0 && index < this.tasks.length) {
        this.tasks[index].completed = true;
        console.log(`Task '${this.tasks[index].name}' marked as completed.`);
      } else {
        console.log('Invalid task index.');
      }
    },
  
    // Function to display the todo list
    displayTasks() {
      console.log('Todo List:');
      this.tasks.forEach((task, index) => {
        const status = task.completed ? '[x]' : '[ ]';
        console.log(`${index + 1}. ${status} ${task.name}`);
      });
    },
  };
  
  // Example usage of the script
  todoList.addTask('Buy groceries');
  todoList.addTask('Walk the dog');
  todoList.displayTasks();
  
  todoList.markTaskAsCompleted(1);
  todoList.displayTasks();
  
  todoList.deleteTask(0);
  todoList.displayTasks();
  