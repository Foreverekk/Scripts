/**
 * Script Name: Drag and Drop
 * Description: This script implements drag and drop functionality for elements.
 * Author: Foreverekk
 */

// Function to handle the drag start event
function handleDragStart(event) {
    // Set the data being dragged
    event.dataTransfer.setData('text/plain', event.target.id);
  }
  
  // Function to handle the drag over event
  function handleDragOver(event) {
    // Prevent the default behavior to allow dropping
    event.preventDefault();
  }
  
  // Function to handle the drop event
  function handleDrop(event) {
    // Get the dragged element's id
    const draggedElementId = event.dataTransfer.getData('text/plain');
  
    // Get the drop target element
    const dropTarget = event.target;
  
    // Move the dragged element to the drop target
    const draggedElement = document.getElementById(draggedElementId);
    dropTarget.appendChild(draggedElement);
  
    // Prevent the default behavior
    event.preventDefault();
  }
  
  // Add event listeners to draggable elements
  const draggableElements = document.querySelectorAll('.draggable');
  draggableElements.forEach((element) => {
    element.addEventListener('dragstart', handleDragStart);
  });
  
  // Add event listeners to drop targets
  const dropTargets = document.querySelectorAll('.drop-target');
  dropTargets.forEach((target) => {
    target.addEventListener('dragover', handleDragOver);
    target.addEventListener('drop', handleDrop);
  });
  