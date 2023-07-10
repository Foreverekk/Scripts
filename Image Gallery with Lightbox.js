/**
 * Script Name: Image Gallery with Lightbox
 * Description: This script implements a basic image gallery with lightbox functionality.
 * Author: Foreverekk
 */

// Image Gallery object
const imageGallery = {
    images: [],
  
    // Function to initialize the image gallery
    init(imagesArray) {
      this.images = imagesArray;
      this.displayThumbnails();
      this.addThumbnailClickListeners();
    },
  
    // Function to display thumbnails
    displayThumbnails() {
      const thumbnailsContainer = document.getElementById('thumbnails');
      thumbnailsContainer.innerHTML = '';
  
      this.images.forEach((image, index) => {
        const thumbnail = document.createElement('img');
        thumbnail.src = image.thumbnailUrl;
        thumbnail.alt = image.title;
        thumbnail.dataset.index = index;
        thumbnailsContainer.appendChild(thumbnail);
      });
    },
  
    // Function to handle thumbnail click event
    handleThumbnailClick(event) {
      const clickedThumbnail = event.target;
      const index = parseInt(clickedThumbnail.dataset.index, 10);
  
      this.displayLightbox(index);
    },
  
    // Function to display the lightbox
    displayLightbox(index) {
      const lightboxContainer = document.getElementById('lightbox');
      const lightboxImage = document.getElementById('lightbox-image');
  
      const selectedImage = this.images[index];
      lightboxImage.src = selectedImage.imageUrl;
      lightboxImage.alt = selectedImage.title;
      lightboxContainer.classList.add('active');
    },
  
    // Function to close the lightbox
    closeLightbox() {
      const lightboxContainer = document.getElementById('lightbox');
      lightboxContainer.classList.remove('active');
    },
  
    // Function to add click event listeners to thumbnails
    addThumbnailClickListeners() {
      const thumbnails = document.querySelectorAll('#thumbnails img');
      thumbnails.forEach((thumbnail) => {
        thumbnail.addEventListener('click', (event) => this.handleThumbnailClick(event));
      });
    },
  
    // Function to add click event listener to close button
    addCloseButtonClickListener() {
      const closeButton = document.getElementById('close-button');
      closeButton.addEventListener('click', () => this.closeLightbox());
    },
  };
  
  // Example usage of the script
  const images = [
    {
      title: 'Image 1',
      thumbnailUrl: 'image1-thumbnail.jpg',
      imageUrl: 'image1.jpg',
    },
    {
      title: 'Image 2',
      thumbnailUrl: 'image2-thumbnail.jpg',
      imageUrl: 'image2.jpg',
    },
    {
      title: 'Image 3',
      thumbnailUrl: 'image3-thumbnail.jpg',
      imageUrl: 'image3.jpg',
    },
  ];
  
  imageGallery.init(images);
  imageGallery.addCloseButtonClickListener();
  