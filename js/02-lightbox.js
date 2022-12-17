import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryList = document.querySelector('.gallery');

let markupGallery ='';
for(let galleryItem of galleryItems ) {
    markupGallery += `
<a href="${galleryItem.original}" 
class="gallery__item">
<img 
class="gallery__image" 
src="${galleryItem.preview}" 
alt="${galleryItem.description}"
/>
</a>`;
};
galleryList.insertAdjacentHTML("beforeend", markupGallery);

var lightbox = new SimpleLightbox('.gallery a', { 
    captionsData: 'alt', captionDelay: 250, });


