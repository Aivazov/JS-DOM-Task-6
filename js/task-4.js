const refs = {
  div: document.querySelector('#counter'),
  decrementBtn: document.querySelector('button[data-action="decrement"]'),
  counterValue: document.querySelector('#value'),
  incrementBtn: document.querySelector('button[data-action="increment"]'),
};

console.log(refs.div);
console.log(refs.decrementBtn);
console.log(refs.incrementBtn);

refs.incrementBtn.addEventListener('click', increment);
refs.decrementBtn.addEventListener('click', decrement);

function increment() {
  let result = parseInt(refs.counterValue.textContent);
  result += 1;
  refs.counterValue.textContent = result;
  
}

function decrement() {
  let result = parseInt(refs.counterValue.textContent);
  result -= 1;
  refs.counterValue.textContent = result;
}