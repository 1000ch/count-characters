import {documentReady} from 'https://unpkg.com/html-ready';

documentReady.then(() => {
  const textarea  = document.querySelector('textarea');
  const count = document.querySelector('#count');
  const countTrimmed = document.querySelector('#count-trimmed');

  textarea.addEventListener('input', () => {
    try {
      count.textContent = textarea.value?.length;
      countTrimmed.textContent = textarea.value?.replaceAll(/\s/g, '').length;
    } catch (error) {
      console.error(error.message);
    }
  });
});
