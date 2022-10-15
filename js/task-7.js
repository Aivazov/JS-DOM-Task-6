const refs = {
  bar: document.querySelector('#font-size-control'),
  controlingText: document.querySelector('#text'),
};
refs.bar.addEventListener('change', (event) => 
  refs.controlingText.style.fontSize = event.currentTarget.value + 'px'
 );