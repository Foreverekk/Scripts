/**
 * Script Name: Image Gallery
 * Description: This script implements a simple image gallery with navigation and image details.
 * Author: Foreverekk
 */

//
const gallery = {
    images: [
      {
        name: 'Image 1',
        description: 'Description for Image 1',
        url: 'image1.jpg',
      },
      {
        name: 'Image 2',
        description: 'Description for Image 2',
        url: 'image2.jpg',
      },
      {
        name: 'Image 3',
        description: 'Description for Image 3',
        url: 'image3.jpg',
      },
    ],
    currentIndex: 0,
  
/**
 * Updates the gallery display with the current image.
 * Sets the src attribute of the gallery image element to the current image's URL.
 * Updates the text content of the image name and description elements
 * with the current image's name and description.
 */
    displayImage() {
      const currentImage = this.images[this.currentIndex];
      const imageElement = document.getElementById('gallery-image');
      imageElement.setAttribute('src', currentImage.url);
  
      const nameElement = document.getElementById('image-name');
      nameElement.textContent = currentImage.name;
  
      const descriptionElement = document.getElementById('image-description');
      descriptionElement.textContent = currentImage.description;
    },
  
    /**
     * Displays the next image in the gallery.
     * If the current index is at the last image, it will set the current index to 0.
     * Then it will call displayImage() to update the displayed image.
     */
    nextImage() {
      this.currentIndex++;
      if (this.currentIndex >= this.images.length) {
        this.currentIndex = 0;
      }
      this.displayImage();
    },
  
    /**
     * Displays the previous image in the gallery.
     * If the current index is 0, it will set the current index to the last image.
     * Then it will call displayImage() to update the displayed image.
     */
    previousImage() {
      this.currentIndex--;
      if (this.currentIndex < 0) {
        this.currentIndex = this.images.length - 1;
      }
      this.displayImage();
    },
  };
  
  // Example Usage:
  const nextButton = document.getElementById('next-button');
  nextButton.addEventListener('click', function () {
    gallery.nextImage();
  });
  
  const previousButton = document.getElementById('previous-button');
  previousButton.addEventListener('click', function () {
    gallery.previousImage();
  });
  
  gallery.displayImage();
  