import {documentReady} from 'https://unpkg.com/html-ready';

documentReady.then(() => {
  const countInput  = document.querySelector('#count-input');
  const countOutput = document.querySelector('#count-output');

  countInput.addEventListener('input', () => {
    try {
      countOutput.textContent = `${countInput.value.length} characters`;
    } catch (error) {
      countOutput.textContent = error.message;
    }
  });
});
