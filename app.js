const inputElement = document.getElementById('product-name');
const remainingCharsElement = document.getElementById('remaining-chars');

inputElement.addEventListener('input', (event) => {
  const remainingChars = inputElement.maxLength - event.target.value.length;
  remainingCharsElement.textContent = remainingChars;

  if (remainingChars === 0) {
    inputElement.classList.add('error');
    remainingCharsElement.classList.add('error');
  } else if (remainingChars <= 10) {
    inputElement.classList.remove('error');
    remainingCharsElement.classList.remove('error');
  }
});
