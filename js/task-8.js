const refs = {
  form: document.querySelector('.login-form'),
  emailInput: document.querySelector('input[data-input="email"]'),
  passInput: document.querySelector('input[data-input="pass"]'),
  submitInput: document.querySelector('button[data-input="submit"]'),
};

const object = {
  email: '',
  password: '',
};

const mail = document.getElementById('mail');

refs.submitInput.addEventListener('click', submitDataShowing);

function submitDataShowing(event) {
  event.preventDefault();
  if (refs.emailInput.value === '' && refs.passInput.value === '') {
    alert('Please fill in all the fields');
  }
  object.email = refs.emailInput.value;
  object.password = refs.passInput.value;

  console.log(object);
  reset(event);
}

function reset(event) {
  event.preventDefault();
  refs.emailInput.value = '';
  refs.passInput.value = '';
}
