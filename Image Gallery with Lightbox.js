/**
 * Script Name: Image Gallery with Lightbox
 * Description: This script implements a basic image gallery with lightbox functionality.
 * Author: Foreverekk
 */

//
const imageGallery = {
    images: [],
  
    /**
     * Initializes the image gallery with the given array of images.
     * @param {Array<Object>} imagesArray - An array of image objects with keys 'title' and 'url'.
     */
    init(imagesArray) {
      this.images = imagesArray;
      this.displayThumbnails();
      this.addThumbnailClickListeners();
    },
  
    /**
     * Displays the thumbnails of the images in the gallery.
     * Clears the thumbnail container's innerHTML and appends an <img> element for each image in the gallery.
     * The img elements are given the src, alt, and index as dataset properties.
     */
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
  
/**
 * Handles the click event on a thumbnail image. 
 * Retrieves the index of the clicked thumbnail from its dataset and 
 * displays the corresponding image in the lightbox.
 *
 * @param {Event} event - The click event object.
 */
    handleThumbnailClick(event) {
      const clickedThumbnail = event.target;
      const index = parseInt(clickedThumbnail.dataset.index, 10);
  
      this.displayLightbox(index);
    },
  
    /**
     * Displays the lightbox with the image at the given index.
     * Retrieves the image url and title from the gallery's images array and
     * sets the src and alt attributes of the lightbox image element.
     * Adds the 'active' class to the lightbox container to display it.
     *
     * @param {number} index - The index of the image to display in the lightbox.
     */
    displayLightbox(index) {
      const lightboxContainer = document.getElementById('lightbox');
      const lightboxImage = document.getElementById('lightbox-image');
  
      const selectedImage = this.images[index];
      lightboxImage.src = selectedImage.imageUrl;
      lightboxImage.alt = selectedImage.title;
      lightboxContainer.classList.add('active');
    },
  
    /**
     * Closes the lightbox by removing the 'active' class from the lightbox container.
     */
    closeLightbox() {
      const lightboxContainer = document.getElementById('lightbox');
      lightboxContainer.classList.remove('active');
    },
  
    /**
     * Adds click event listeners to all thumbnail images in the #thumbnails container.
     * The event listener calls the handleThumbnailClick method when a thumbnail is clicked.
     */
    addThumbnailClickListeners() {
      const thumbnails = document.querySelectorAll('#thumbnails img');
      thumbnails.forEach((thumbnail) => {
        thumbnail.addEventListener('click', (event) => this.handleThumbnailClick(event));
      });
    },
  
    /**
     * Adds a click event listener to the close button.
     * Calls the closeLightbox method when the close button is clicked.
     */
    addCloseButtonClickListener() {
      const closeButton = document.getElementById('close-button');
      closeButton.addEventListener('click', () => this.closeLightbox());
    },
  };
  
  // Example Usage:
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
  