import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryList = document.querySelector('.gallery');

let markupGallery ='';
for(let galleryItem of galleryItems ) {
    markupGallery += `<div class="gallery__item">
<a href="${galleryItem.original}" 
class="gallery__link">
<img 
class="gallery__image" 
src="${galleryItem.preview}" 
alt="${galleryItem.description}"
data-sourse="${galleryItem.original}";
>
</a>
</div>`;
};
galleryList.insertAdjacentHTML("beforeend", markupGallery);


galleryList.addEventListener('click', (event) => {
    event.preventDefault();

    console.log();

    if (event.target.nodeName !== 'IMG') {
        return;
    }
    
    const originalImage = event.target.getAttribute('data-sourse');

    const instance = basicLightbox.create(`
    <img src="${originalImage}" width="800" height="600">
`)

instance.show();
});