/**
 * Script Name: Image Slideshow
 * Description: This script implements a basic image slideshow with previous and next buttons.
 * Author: Foreverekk
 */

//
const images = [
    "image1.jpg",
    "image2.jpg",
    "image3.jpg",
    "image4.jpg"
  ];
  
  let currentImageIndex = 0;
  const imageElement = document.getElementById("slideshow-image");
  
/**
 * Updates the slideshow display with the current image.
 * Sets the src attribute of the slideshow image element to the current image's URL.
 */
  function displayImage() {
    const currentImage = images[currentImageIndex];
    imageElement.setAttribute("src", currentImage);
  }
  
/**
 * Advances the slideshow to the next image.
 * If the current index reaches the end of the images array,
 * it wraps around to the first image. Then, it updates the
 * displayed image by calling the displayImage function.
 */
  function showNextImage() {
    currentImageIndex++;
    if (currentImageIndex >= images.length) {
      currentImageIndex = 0;
    }
    displayImage();
  }
  
  /**
   * Displays the previous image in the slideshow.
   * If the current index is 0, it will set the current index to the last image.
   * Then it will call displayImage() to update the displayed image.
   */
  function showPreviousImage() {
    currentImageIndex--;
    if (currentImageIndex < 0) {
      currentImageIndex = images.length - 1;
    }
    displayImage();
  }
  
  // Example Usage:
  const nextButton = document.getElementById("next-button");
  const previousButton = document.getElementById("previous-button");
  
  nextButton.addEventListener("click", showNextImage);
  previousButton.addEventListener("click", showPreviousImage);
  
  displayImage();
  