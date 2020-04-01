import galleryItems from './gallery-items.js';

const gallery = document.querySelector('.js-gallery');
const modalWindow = document.querySelector('.js-lightbox');
const image = document.querySelector('.lightbox__image');
const buttonClose = document.querySelector(
  'button[data-action="close-lightbox"]',
);

function createEllements({ preview, original, description }) {
  return `<li class="gallery__item">
  <a
    class="gallery__link"
    href="${original}"
  >
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>`;
}

function buildEllements(array) {
  return array
    .map(element => {
      return createEllements(element);
    })
    .join('');
}

gallery.insertAdjacentHTML('beforeend', buildEllements(galleryItems));

gallery.addEventListener('click', openModal);

function openModal(event) {
  if (event.target.nodeName !== 'IMG') return;
  event.preventDefault();
  modalWindow.classList.add('is-open');
  image.setAttribute('src', event.target.dataset.source);
  image.setAttribute('alt', event.target.alt);
  buttonClose.addEventListener('click', closeModal);
}

function closeModal() {
  modalWindow.classList.remove('is-open');
  image.getAttribute('src', '');
  image.getAttribute('alt', '');
  buttonClose.removeEventListener('click', closeModal);
}
