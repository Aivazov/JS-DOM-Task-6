const refs = {
  inputName: document.querySelector('#name-input'),
  outputName: document.querySelector('#name-output'),
};

console.log(refs);

refs.inputName.addEventListener('keypress', typing);

function typing(event) {
  // refs.outputName.textContent = '';
  refs.outputName.textContent = event.currentTarget.value;
  // console.log(event);
};