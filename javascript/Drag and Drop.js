/**
 * Script Name: Drag and Drop
 * Description: This script implements drag and drop functionality for elements.
 * Author: Foreverekk
 */

/**
 * Handles the drag start event by setting the dragged element's ID to the data
 * transfer object.
 * 
 * @param {DragEvent} event The drag start event.
 */
//
function handleDragStart(event) {
    event.dataTransfer.setData('text/plain', event.target.id);
  }
  

/**
 * Prevents the default behavior during a drag over event to allow a drop.
 * 
 * @param {DragEvent} event The dragover event.
 */
  function handleDragOver(event) {
    event.preventDefault();
  }
  
  /**
   * Handles the drop event. Retrieves the ID of the dragged element from the
   * dataTransfer object, finds the element with that ID, and appends it to the
   * drop target element.
   *
   * @param {DragEvent} event The drop event.
   */
  function handleDrop(event) {
    const draggedElementId = event.dataTransfer.getData('text/plain');
  
    const dropTarget = event.target;
  
    const draggedElement = document.getElementById(draggedElementId);
    dropTarget.appendChild(draggedElement);
  
    event.preventDefault();
  }
  
  const draggableElements = document.querySelectorAll('.draggable');
  draggableElements.forEach((element) => {
    element.addEventListener('dragstart', handleDragStart);
  });
  
  const dropTargets = document.querySelectorAll('.drop-target');
  dropTargets.forEach((target) => {
    target.addEventListener('dragover', handleDragOver);
    target.addEventListener('drop', handleDrop);
  });
  