const inputValidation = document.querySelector('#validation-input');

inputValidation.addEventListener('blur', (event) => {
  console.log(event.currentTarget.value.length);
  console.log(parseInt(inputValidation.dataset.length));

  if (
    event.currentTarget.value.length ===
    parseInt(inputValidation.dataset.length)
  ) {
    inputValidation.classList.add('valid');
    inputValidation.classList.remove('invalid');
  } else {
    inputValidation.classList.add('invalid');
    inputValidation.classList.remove('valid');
  }
});
