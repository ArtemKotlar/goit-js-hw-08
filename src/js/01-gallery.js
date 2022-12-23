// Add imports above this line
import { galleryItems } from './gallery-items.js';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

// Change code below this line

console.log(galleryItems);

const galleryRef = document.querySelector('.gallery');

const galleryMarkup = galleryItems
  .map(({ preview, original, description }) => {
    return `<li class="gallery">
        <a class="gallery__item" href = ${original}>
            <img
                class = "gallery__image"
                src = ${preview}
                alt = ${description}
            />
        </a>
    </li>`;
  })
  .join('');

galleryRef.insertAdjacentHTML('beforeend', galleryMarkup);

new SimpleLightbox('.gallery__item', {
  captionSelector: 'img',
  captionType: 'attr',
  captionsData: 'alt',
  captionDelay: 250,
});
