/**
 * Script Name: Image Slideshow
 * Description: This script implements a basic image slideshow with previous and next buttons.
 * Author: Foreverekk
 */

// Array of image URLs
const images = [
    "image1.jpg",
    "image2.jpg",
    "image3.jpg",
    "image4.jpg"
  ];
  
  let currentImageIndex = 0;
  const imageElement = document.getElementById("slideshow-image");
  
  // Function to display the current image
  function displayImage() {
    const currentImage = images[currentImageIndex];
    imageElement.setAttribute("src", currentImage);
  }
  
  // Function to show the next image
  function showNextImage() {
    currentImageIndex++;
    if (currentImageIndex >= images.length) {
      currentImageIndex = 0;
    }
    displayImage();
  }
  
  // Function to show the previous image
  function showPreviousImage() {
    currentImageIndex--;
    if (currentImageIndex < 0) {
      currentImageIndex = images.length - 1;
    }
    displayImage();
  }
  
  // Example usage of the script
  const nextButton = document.getElementById("next-button");
  const previousButton = document.getElementById("previous-button");
  
  nextButton.addEventListener("click", showNextImage);
  previousButton.addEventListener("click", showPreviousImage);
  
  // Display the initial image
  displayImage();
  