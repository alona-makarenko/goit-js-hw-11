// Описаний у документації
import iziToast from 'izitoast';
// Додатковий імпорт стилів
import 'izitoast/dist/css/iziToast.min.css';

import getImagesByQuery from './js/pixabay-api.js';
import {
  createGallery,
  clearGallery,
  showLoader,
  hideLoader,
} from './js/render-functions.js';

const form = document.querySelector('.form');

form.addEventListener('submit', submitHandler);

function submitHandler(e) {
  e.preventDefault();

  const { ['search-text']: searchInput } = e.target.elements;
  const searchInputValue = searchInput.value.trim();

  if (!searchInputValue.length) {
    return;
  }

  showLoader();

  getImagesByQuery(searchInputValue)
    .then(data => {
      if (!data.length) {
        throw new Error('No images found!');
      }
      createGallery(data);
    })
    .catch(error => {
      clearGallery();
      iziToast.error({
        message: error.message,
        position: 'topRight',
      });
    })
    .finally(() => {
      hideLoader();
    });

  form.reset();
}
