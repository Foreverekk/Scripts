/**
 * Script Name: Image Gallery
 * Description: This script implements a simple image gallery with navigation and image details.
 * Author: Foreverekk
 */

// Gallery object
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
  
    // Function to display the current image
    displayImage() {
      const currentImage = this.images[this.currentIndex];
      const imageElement = document.getElementById('gallery-image');
      imageElement.setAttribute('src', currentImage.url);
  
      const nameElement = document.getElementById('image-name');
      nameElement.textContent = currentImage.name;
  
      const descriptionElement = document.getElementById('image-description');
      descriptionElement.textContent = currentImage.description;
    },
  
    // Function to navigate to the next image
    nextImage() {
      this.currentIndex++;
      if (this.currentIndex >= this.images.length) {
        this.currentIndex = 0;
      }
      this.displayImage();
    },
  
    // Function to navigate to the previous image
    previousImage() {
      this.currentIndex--;
      if (this.currentIndex < 0) {
        this.currentIndex = this.images.length - 1;
      }
      this.displayImage();
    },
  };
  
  // Example usage of the script
  const nextButton = document.getElementById('next-button');
  nextButton.addEventListener('click', function () {
    gallery.nextImage();
  });
  
  const previousButton = document.getElementById('previous-button');
  previousButton.addEventListener('click', function () {
    gallery.previousImage();
  });
  
  // Display the initial image
  gallery.displayImage();
  